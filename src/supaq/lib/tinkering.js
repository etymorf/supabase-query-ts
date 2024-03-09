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
 */
export function getUserQueries(currentQueries) {
	let isOn = false, queries = ``
	currentQueries.split('\n').forEach((line, index) => {
		if (line.match(zoneDelimitersReg.start)) {
			isOn = true
		}
		if (isOn) {
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