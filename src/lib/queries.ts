import type { ParsedSchema } from "./jsc";
import type { ConfigParams, ConfigQueries, StringQueries } from "./util";

export type Includes = { [table: string]: string }

export class SupaGen {
	static queriesText(queries: ConfigQueries) {
		let object: StringQueries = {}
		Object.entries(queries).forEach(([table, versions]) => {
			Object.entries(versions).forEach(([version, query]) => {
				// @ts-ignore
				object = { ...object, [table]: { ...object[table] || {}, [version]: { ...query, text: queryText(queries, table, version) } } }
			})
		})
		const text = `const queries: StringQueries<SupaQueries> = ${JSON.stringify(object)}`
		return text
	}
	static dataTypes(queries: ConfigQueries, schema: ParsedSchema, exportDefault = false) {
		const name = `SupaQueries`
		let text = `export type ${name} = {
		`
		Object.entries(schema).forEach(([table, { columns, rel_to, rel_from }]) => {
			// if (table === "lex_def") console.log(columns)
			if (table in queries) {
				text += `${table}: {
			`
				// @ts-ignore
				Object.entries(queries[table]).forEach(([version, params]) => {
					// console.log("one iteration of queries[table] loop", table, version)
					const filtered = {
						columns: Object.entries(columns).filter(([column]) => {
							// console.log("column", c, column, version, params, table )
							// @ts-ignore
							return params.columns.includes(column)
						}),
						// @ts-ignore
						rel_to: params.includes ? Object.entries(params.includes).filter(([t, version]) => {
							// console.log(t, version, rel_to.findIndex((r) => (t === r)))
							return rel_to.findIndex((r) => (t === r)) >= 0
						}) : [],
						// @ts-ignore
						rel_from: params.includes ? Object.entries(params.includes).filter(([t, version]) => {
							// console.log(t, version,  rel_to.findIndex((r) => (t === r)) >= 0)
							return rel_from.findIndex((r) => (t === r)) >= 0
						}) : [],
					}
					const textColumns = `
			{
			${filtered.columns.map(([column, type]) => {
						return `${column}: ${type}`
					}).join('\n')}
			}
			`
					const textRelTo = filtered.rel_to.length > 0 ? `
			{
			${filtered.rel_to.map(([table, version]) => {
						return `${table}: ${name}["${table}"]["${version}"]`
					}).join(' & ')}
			}
			` : ``
					const textRelFrom = filtered.rel_from.length > 0 ? `
			{
			${filtered.rel_from.map(([table, version]) => {
						// console.log("rel_from ----", table, version)
						return `${table}: Array<${name}["${table}"]["${version}"]>`
					}).join('\n')}
			}
			` : ``
					text += `
				${version}: ${textColumns} ${textRelTo ? `& ${textRelTo}` : ``} ${textRelFrom ? `& ${textRelFrom}` : ``}
				`
					// console.log("filtered", filtered, textColumns, "textRel", textRelTo, textRelFrom)
				})
				text += `
			}
			`
			}
		})
		text += `
		}
		`
		if (exportDefault) {
			text += `
		export default ${name}
		`
		}
		return text
	}
}

function queryText<CQ extends ConfigQueries, KCQ extends keyof CQ = keyof CQ>(queries: CQ, table: KCQ, version: keyof CQ[KCQ], exclude: string[] = []) {
	if (typeof table === 'string') {
		if (!(exclude.length)) {
			exclude = [table]
		} else {
			exclude = [...exclude, table]
		}
	}
	const { columns, includes } = queries[table][version] as ConfigParams
	let result = ``
	const included = Object.entries(includes || {}).filter(([t]) => (!(exclude?.includes(t))))
	result += Array.isArray(columns) ? columns.join(', ') : columns
	// @ts-ignore
	const mapper = ([t, v]: [t: string, v: string]) => `${t}(${queryText(queries, t, v, exclude)})`
	// @ts-ignore
	if (included.length) { result += `, ${included.map(mapper).join(`,`)}` }
	return result
}
