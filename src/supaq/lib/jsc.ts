// import tables from "../gen/tables.jsc"

const jscPrimitive = ["boolean", "number", "string", "null"] as const
type JSCPrimitive = typeof jscPrimitive[number]
const isJSCPrimitive = (v: string): v is JSCPrimitive => (jscPrimitive.includes(v as JSCPrimitive))
const jscObject = "object" as const
type JSCObject = typeof jscObject
const isJSCObject = (v: string): v is JSCObject => (jscObject === v)
const jscArray = "array" as const
type JSCArray = typeof jscArray
const isJSCArray = (v: string): v is JSCArray => (jscArray === v)

type JSCType = JSCPrimitive | ["null", JSCPrimitive] | JSCObject | JSCArray
type JSCSchema<T extends JSCType = JSCType, P extends string | number | symbol = string> = T extends JSCObject ? {
	type: T
	properties: {
		[property in P]: JSCSchema
	}
	required?: Array<P>
	$schema?: "http://json-schema.org/draft-07/schema#"
} : T extends JSCArray ? {
	type: T
	items?: Array<JSCSchema>
	minItems?: number
	maxItems?: number
} : {
	type: T
	enum?: Array<string | boolean>
}

type Action = "Row" | "Insert" | "Update"

type Parsed = {
	[table: string]: { columns: Array<{ [column: string]: JSCPrimitive }> } & { relationships: string[] } & { related: string[] }
}


export function parseSchema(tables: JSCSchema) {
	const parsed: Parsed = {}
	if (tables.type === "object") {
		Object.entries(tables.properties).forEach(([table, action]) => {
			if (action.type === "object") {
				if (action.properties["Relationships"].type === "array") {
					action.properties["Relationships"].items?.forEach(item => {
						if (item.type === "object") {
							// if (item.properties["foreignKeyName"].type === "string") { }
							// if (item.properties["columns"].type === "array") { }
							// if (item.properties["isOneToOne"].type === "boolean") { }
							if (item.properties["referencedRelation"].type === "string") {
								item.properties["referencedRelation"].enum?.forEach(relationship => {
									if (typeof relationship === "string") {
										parsed[table].relationships.push(relationship)
										parsed[relationship].related.push(table)
									}
								})
							}
							// if (item.properties["referencedColumns"].type === "array") { }

						}
					})
				}

				if (action.properties["Row"].type === "object") {
					Object.entries(action.properties["Row"].properties).forEach(([column, shape]) => {
						let type: JSCPrimitive | undefined
						if (Array.isArray(shape.type)) {
							if (shape.type.length === 2) {
								if (isJSCPrimitive(shape.type[1])) {
									type = shape.type[1]
								}

							}

						} else if (isJSCPrimitive(shape.type)) {
							type = shape.type
						}
						if (type) {
							parsed[table].columns.push({ [column]: type })
						}
					})
				}
			}
		})
	}

	return parsed
}

export function genBaseQueries(parsed: Parsed) {
	let text = ``
	Object.entries(parsed).forEach(([table, shape]) => {
		const columns: string[] = []
		Object.entries(shape.columns).forEach(([column, type]) => {
			if (column !== "id") {
				columns.push(column)
			}
		})

		text += `
			${table}(includes: Includes): string {
				return \`
					\${this.query(
						"${table}",
						${columns.map(col => (`'${col}'`)).join(",")}
					)}
					\${this.subqueries(
						[${shape.relationships.map(rel => (`"${rel}"`)).join(", ")}],
						includes
					)}
				\`
			}
		`
	})
	return text
}