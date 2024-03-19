// import tables from "../gen/tables.jsc"
const jscPrimitive = ["boolean", "number", "string", "null"];
const isJSCPrimitive = (v) => (jscPrimitive.includes(v));
const jscObject = "object";
const isJSCObject = (v) => (jscObject === v);
const jscArray = "array";
const isJSCArray = (v) => (jscArray === v);
const emptyParsedTable = {
    columns: [],
    rel_to: [],
    rel_from: []
};
function devConditions(table) {
    return !table.match('ana_');
}
function pushRelation(parsed, table, relationship, direction) {
    const rel = `rel_${direction}`;
    if (!(parsed[relationship][rel].includes(table)) && devConditions(relationship)) {
        return { ...parsed, [relationship]: { ...parsed[relationship], [rel]: [...parsed[relationship][rel], table] } };
    }
    return parsed;
}
function pushRelations(parsed, table, relationship) {
    const resultFrom = pushRelation(parsed, table, relationship, "from");
    const resultTo = pushRelation(resultFrom, relationship, table, "to");
    return resultTo;
}
export function parseSchema(tables) {
    let parsed = {};
    if (tables.type === "object") {
        Object.entries(tables.properties).forEach(([table, action]) => {
            if (action.type === "object" && devConditions(table)) {
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
                                            parsed[relationship] = emptyParsedTable;
                                        }
                                        if (!(table in parsed)) {
                                            parsed[table] = emptyParsedTable;
                                        }
                                        parsed = pushRelations(parsed, table, relationship);
                                        // if (!(parsed[relationship].rel_from.includes(table)) && devConditions(relationship)) {
                                        // 	console.log(`parsed["${relationship}"].rel_from.push("${table}")`)
                                        // 	console.log(parsed[relationship].rel_from)
                                        // 	parsed = { ...parsed, [relationship]: { ...parsed[relationship], rel_from: [...parsed[relationship].rel_from, table] } }
                                        // 	// parsed[relationship].rel_from = [...parsed[relationship].rel_from, table]
                                        // 	// parsed[relationship].rel_from.push(table)
                                        // 	console.log(parsed[relationship].rel_from)
                                        // }
                                        // if ((!parsed[table].rel_to.includes(relationship))) {
                                        // 	console.log(`parsed["${table}"].rel_to.push("${relationship}")`)
                                        // 	console.log(parsed[table].rel_to)
                                        // 	parsed[table].rel_to = [...parsed[table].rel_to, relationship]
                                        // 	// parsed[table].rel_to.push(relationship)
                                        // 	console.log(parsed[table].rel_to)
                                        // }
                                    }
                                });
                            }
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
            // console.log(`done ${table}`)
            // console.log(parsed)
            console.log("--------------------");
        });
    }
    return parsed;
}
export function genBaseQueries(parsed, queries) {
    let text = ``;
    Object.entries(parsed).forEach(([_, shape]) => {
        const table = _;
        const q = queries[table];
        const columns = [];
        Object.entries(shape.columns).forEach(([column, type]) => {
            if (column !== "id") {
                columns.push(column);
            }
        });
        if (q) {
            text += `
				${table}(includes: Includes, version: ${Object.keys(q).map(k => `"${k}"`).join("|")}): string {
					return \`
						\${this.query(
							"${table}",
							${queries[table]}
							${columns.map(col => (`'${col}'`)).join(",")}
						)}
						\${this.subqueries(
							[${shape.rel_to.map(rel => (`"${rel}"`)).join(", ")}],
							includes
						)}
					\`
				}
			`;
            text = `
				\${this.query(
					"${table}",
					${queries[table]}
					${columns.map(col => (`'${col}'`)).join(",")}
				)}
				\${this.subqueries(
					[${shape.rel_to.map(rel => (`"${rel}"`)).join(", ")}],
					includes
				)}
			`;
        }
    });
    return text;
}
