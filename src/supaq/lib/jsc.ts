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

export type ParsedSchema = {
	[table: string]: ParsedTable
}
type ParsedTable = {
	columns: { [column: string]: JSCPrimitive }
} & {
	rel_to: string[]
	rel_from: string[]
} & {
	// a future refactoring
	relation?: {
		to: string[]
		from: string[]
	}
}
const emptyParsedTable: ParsedTable = {
	columns: {},
	rel_to: [],
	rel_from: []
}
type Direction = "from" | "to"
function pushRelation(parsed: ParsedSchema, table: string, relationship: string, direction: Direction) {
	const rel: `rel_${Direction}` = `rel_${direction}`
	if (!(parsed[relationship][rel].includes(table))) {
		return { ...parsed, [relationship]: { ...parsed[relationship], [rel]: [...parsed[relationship][rel], table] } }
	}
	return parsed
}
function pushRelations(parsed: ParsedSchema, table: string, relationship: string) {
	const resultFrom = pushRelation(parsed, table, relationship, "from")
	const resultTo = pushRelation(resultFrom, relationship, table, "to")
	return resultTo
}

export function parseSchema(tables: JSCSchema) {
	let parsed: ParsedSchema = {}
	if (tables.type === "object") {
		Object.entries(tables.properties).forEach(([table, action]) => {
			if (action.type === "object") {
				if (action.properties["Relationships"].type === "array") {
					action.properties["Relationships"].items?.forEach(item => {
						if (item.type === "object") {
							// if (item.properties["foreignKeyName"].type === "string") { }
							// if (item.properties["columns"].type === "array") { }
							// if (item.properties["isOneToOne"].type === "boolean") { }
							// if (item.properties["referencedColumns"].type === "array") { }
							if (item.properties["referencedRelation"].type === "string") {
								item.properties["referencedRelation"].enum?.forEach(relationship => {

									if (typeof relationship === "string") {
										if (!(relationship in parsed)) {
											parsed[relationship] = emptyParsedTable
										}
										if (!(table in parsed)) {
											parsed[table] = emptyParsedTable
										}
										parsed = pushRelations(parsed, table, relationship)
									}
								})
							}
						}
					})
				}

				if (action.properties["Row"].type === "object") {
					// console.log(`action.properties["Row"].properties
					// `, action.properties["Row"].properties)
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
							if (!(table in parsed)) {
								parsed[table] = emptyParsedTable
							}
							parsed = {...parsed, [table]: {...parsed[table], columns: {...parsed[table].columns, [column]: type}}}
							// parsed[table].columns[column] = type
							// console.log(`column:`, column, parsed[table].columns[column])
							// parsed[table].columns.push({ [column]: type })
						}
					})
				}
			}
			// console.log(`done ${table}`)
			// console.log(parsed)
			// console.log("--------------------")
		})
	}

	return parsed
}