const jscPrimitive = ["boolean", "number", "string", "null"];
const isJSCPrimitive = (v) => (jscPrimitive.includes(v));
const jscObject = "object";
const isJSCObject = (v) => (jscObject === v);
const jscArray = "array";
const isJSCArray = (v) => (jscArray === v);
const emptyParsedTable = {
    columns: {},
    rel_to: [],
    rel_from: []
};
function pushRelation(parsed, table, relationship, direction) {
    const rel = `rel_${direction}`;
    if (!(parsed[relationship][rel].includes(table))) {
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
                                            parsed[relationship] = emptyParsedTable;
                                        }
                                        if (!(table in parsed)) {
                                            parsed[table] = emptyParsedTable;
                                        }
                                        parsed = pushRelations(parsed, table, relationship);
                                    }
                                });
                            }
                        }
                    });
                }
                if (action.properties["Row"].type === "object") {
                    // console.log(`action.properties["Row"].properties
                    // `, action.properties["Row"].properties)
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
                            parsed = { ...parsed, [table]: { ...parsed[table], columns: { ...parsed[table].columns, [column]: type } } };
                            // parsed[table].columns[column] = type
                            // console.log(`column:`, column, parsed[table].columns[column])
                            // parsed[table].columns.push({ [column]: type })
                        }
                    });
                }
            }
            // console.log(`done ${table}`)
            // console.log(parsed)
            // console.log("--------------------")
        });
    }
    return parsed;
}
