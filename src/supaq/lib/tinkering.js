import { zoneDelimitersReg } from "./zoneDelimiters.js"

/**
 * 
 * @param {string} outSupa 
 */
export function justTables(outSupa) {
	let isOn = false, text = ``
	outSupa.split('\n').forEach(line => {
		if (line.match("Tables: {")) {
			text += `export type Tables = {`
			isOn = true
		} else if (line.match("Views: {")) {
			isOn = false
		} else if (isOn) {
			text += `
			${line}`
		}
	})
	return text
}
/**
 * 
 * @param {string} currentQueries 
 * @returns {string | null}
 */
export function getUserQueries(currentQueries) {
	let isOn = false
	/**
	 * @type {string | null}
	 */
	let queries = null
	currentQueries.split('\n').forEach((line, index) => {
		if (line.match(zoneDelimitersReg.start)) {
			isOn = true
		}
		if (isOn) {
			if (!queries) queries = ``
			queries += `
				${line}
			`
		}
		if (line.match(zoneDelimitersReg.stop)) {
			isOn = false
		}
	})
	return queries
}
/**
 * @typedef {"Row" | "Insert" | "Update"} Action
 */
/**
 * @typedef {"null" | "number" | "string"} Type
 */
/**
 * @typedef {{
	* [column: string]: {
	* 	type: Type | Type[]
	* }
 * }} Columns
 */
/**
 * @typedef {Object} TableSchema
 * @property {"object"} type
 * @property {Object.<Action, Columns>} properties
 * @property {Required} required
 */
/**
 * @typedef {Object} TablesSchema
 * @property {"object"} type
 * @property {Object.<string, TableSchema<>>} properties
 * @property {Required} required
 * @property {string} $schema
 */
/**
 * @typedef {Array<string>} Required
 */
/**
 * 
 * @param {TablesSchema} schema 
 */
// export function parseSchema(schema) {

// }