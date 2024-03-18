import { zoneDelimitersReg } from "./zoneDelimiters.js"


export function justTables(outSupa: string) {
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

export function getUserQueries(currentQueries: string): string | null {
	let isOn = false

	let queries: string | null = null
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