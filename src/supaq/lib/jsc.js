// import tables from "../gen/tables.jsc"
const jscPrimitive = ["boolean", "number", "string", "null"];
const isJSCPrimitive = (v) => (jscPrimitive.includes(v));
const jscObject = "object";
const isJSCObject = (v) => (jscObject === v);
const jscArray = "array";
const isJSCArray = (v) => (jscArray === v);
const emptyParsedTable = {
    columns: [],
    relationships: [],
    related: []
};
export function parseSchema(tables) {
    const parsed = {};
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
                                        if (!(table in parsed)) {
                                            parsed[relationship] = emptyParsedTable;
                                        }
                                        parsed[relationship].related.push(table);
                                    }
                                });
                            }
                            // if (item.properties["referencedColumns"].type === "array") { }
                        }
                    });
                }
                if (action.properties["Row"].type === "object") {
                    Object.entries(action.properties["Row"].properties).forEach(([column, shape]) => {
                        let type;
                        if (Array.isArray(shape.type)) {
                            if (shape.type.length === 2) {
                                if (isJSCPrimitive(shape.type[1])) {
                                    type = shape.type[1];
                                }
                            }
                        }
                        else if (isJSCPrimitive(shape.type)) {
                            type = shape.type;
                        }
                        if (type) {
                            if (!(table in parsed)) {
                                parsed[table] = emptyParsedTable;
                            }
                            parsed[table].columns.push({ [column]: type });
                        }
                    });
                }
            }
        });
    }
    return parsed;
}
export function genBaseQueries(parsed) {
    let text = ``;
    Object.entries(parsed).forEach(([table, shape]) => {
        const columns = [];
        Object.entries(shape.columns).forEach(([column, type]) => {
            if (column !== "id") {
                columns.push(column);
            }
        });
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
		`;
    });
    return text;
}
