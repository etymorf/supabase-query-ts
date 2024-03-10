"use strict";
// import tables from "../gen/tables.jsc"
Object.defineProperty(exports, "__esModule", { value: true });
exports.genBaseQueries = exports.parseSchema = void 0;
var jscPrimitive = ["boolean", "number", "string", "null"];
var isJSCPrimitive = function (v) { return (jscPrimitive.includes(v)); };
var jscObject = "object";
var isJSCObject = function (v) { return (jscObject === v); };
var jscArray = "array";
var isJSCArray = function (v) { return (jscArray === v); };
function parseSchema(tables) {
    var parsed = {};
    if (tables.type === "object") {
        Object.entries(tables.properties).forEach(function (_a) {
            var _b;
            var table = _a[0], action = _a[1];
            if (action.type === "object") {
                if (action.properties["Relationships"].type === "array") {
                    (_b = action.properties["Relationships"].items) === null || _b === void 0 ? void 0 : _b.forEach(function (item) {
                        var _a;
                        if (item.type === "object") {
                            // if (item.properties["foreignKeyName"].type === "string") { }
                            // if (item.properties["columns"].type === "array") { }
                            // if (item.properties["isOneToOne"].type === "boolean") { }
                            if (item.properties["referencedRelation"].type === "string") {
                                (_a = item.properties["referencedRelation"].enum) === null || _a === void 0 ? void 0 : _a.forEach(function (relationship) {
                                    if (typeof relationship === "string") {
                                        parsed[table].relationships.push(relationship);
                                        parsed[relationship].related.push(table);
                                    }
                                });
                            }
                            // if (item.properties["referencedColumns"].type === "array") { }
                        }
                    });
                }
                if (action.properties["Row"].type === "object") {
                    Object.entries(action.properties["Row"].properties).forEach(function (_a) {
                        var _b;
                        var column = _a[0], shape = _a[1];
                        var type;
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
                            parsed[table].columns.push((_b = {}, _b[column] = type, _b));
                        }
                    });
                }
            }
        });
    }
    return parsed;
}
exports.parseSchema = parseSchema;
function genBaseQueries(parsed) {
    var text = "";
    Object.entries(parsed).forEach(function (_a) {
        var table = _a[0], shape = _a[1];
        var columns = [];
        Object.entries(shape.columns).forEach(function (_a) {
            var column = _a[0], type = _a[1];
            if (column !== "id") {
                columns.push(column);
            }
        });
        text += "\n\t\t\t".concat(table, "(includes: Includes): string {\n\t\t\t\treturn `\n\t\t\t\t\t${this.query(\n\t\t\t\t\t\t\"").concat(table, "\",\n\t\t\t\t\t\t").concat(columns.map(function (col) { return ("'".concat(col, "'")); }).join(","), "\n\t\t\t\t\t)}\n\t\t\t\t\t${this.subqueries(\n\t\t\t\t\t\t[").concat(shape.relationships.map(function (rel) { return ("\"".concat(rel, "\"")); }).join(", "), "],\n\t\t\t\t\t\tincludes\n\t\t\t\t\t)}\n\t\t\t\t`\n\t\t\t}\n\t\t");
    });
    return text;
}
exports.genBaseQueries = genBaseQueries;
