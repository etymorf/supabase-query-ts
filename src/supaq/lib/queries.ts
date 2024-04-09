import type { ParsedSchema } from "./jsc";
import type { ConfigQueries, StringQueries } from "./util";

export type Includes = { [table: string]: string }

export class SupaGen {
	static queriesText(queries: ConfigQueries) {
		let result: StringQueries = {}
		Object.entries(queries).forEach(([table, versions]) => {
			Object.entries(versions).forEach(([version, query]) => {
				result = { ...result, [table]: { ...result[table] || {}, [version]: queryText(queries, query) } }
			})
		})
		return result
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
				Object.entries(queries[table]).forEach(([version, params]) => {
					// console.log("one iteration of queries[table] loop", table, version)
					const filtered = {
						columns: Object.entries(columns).filter(([column]) => {
							// console.log("column", c, column, version, params, table )
							return params.columns.includes(column)
						}),
						rel_to: params.includes ? Object.entries(params.includes).filter(([t, version]) => {
							// console.log(t, version, rel_to.findIndex((r) => (t === r)))
							return rel_to.findIndex((r) => (t === r)) >= 0
						}) : [],
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
						return `${table}: Array<keyof ${name}["${table}"]["${version}"]>`
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

function queryText(queries: ConfigQueries, params: ConfigQueries[string][string]) {
	const { columns, includes } = params
	let result = ``
	const included = Object.entries(includes || {})
	result += Array.isArray(columns) ? columns.join(', ') : columns
	const mapper = ([t, v]: [t: string, v: string]) => `${t}(${queryText(queries, queries[t][v])})`
	if (included.length) { result += `, ${included.map(mapper).join(`,`)}` }
	return result
}

// legacy below:
// type Params = { columns: string[]; subqueries: Includes }
/*
export class SupaBis {
	static queries(params: ConfigQueries) {
		let nov: ConfigQueries = params
		Object.entries(params).forEach(([table, versions]) => {
			Object.entries(versions).forEach(([version, { columns, includes }]) => {
				if (Array.isArray(columns)) {
					// parse the columns array to a string
					// nov = { ...nov, [table]: { ...nov[table] || {}, [version]: { ...nov[table][version] || {} } } }
					nov[table][version].columns = SupaBis.corequery(table, columns)
				}
			})
		})

		Object.entries(params).forEach(([table, versions]) => {
			Object.entries(versions).forEach(([version, { columns, includes }]) => {
				if (Array.isArray(columns)) {
					if (includes) {
						const included = Object.entries(includes)
						nov[table][version].text = `
						${nov[table][version].columns}${included.length ? `,` : ``}
						`
						included.forEach(([t, v]) => {
							nov[t][v].columns
							nov[t][v].includes || []
							nov[table][version].text = `
							${nov[t][v].columns}
							`
						})
					}
				}
			})
		})
	}
	static subqueries(queries: ConfigQueries, params: ConfigQueries[string][string]) {
		let nov = queries
		const { columns, includes } = params
		let text = ``
		if (Array.isArray(columns)) {
			if (includes) {
				const included = Object.entries(includes)
				included.forEach(([t, v]) => {
					nov[t][v].columns
					nov[t][v].includes
					if (nov[t][v].includes) {
						const teext = Object.entries(nov[t][v].includes || {}).forEach(([tt, vv]) => {
							nov[tt][vv].text
						})
					}

					text = `
						${nov[t][v].columns}
					`
				})
			}
		}
	}

	// query("morph", {columns: ["text", "lang"], subqueries: {"morph_lex": "big", "lang": "classic"}})

	static query(table: string, params: Params) {
		return `
			${this.corequery(table, params.columns)}
		`
	}
	static corequery<Table extends string>(table: Table, columns: string[]) {
		// affixes is a future feature that allows people to define patterns found in their table names and link them to certain functions
		const affixes = {
			noId: "__join__" // whether a table doesn't contain a column id or [table]_id or other pattern: the main use is join tables which may not need a unique identifier
		}
		let result = !String(table).match(affixes.noId) ? `id,` : ``
		result += columns.join(', ');
		return result;
	}
	static subquery(...tables: string[]) {
		return `

		`
	}

}
*/
/*
export class SupaBase {
	// query(table: "morph", {columns: ["text", "lang"], includes: })
	static query<Table extends string>(table: Table, params: { columns: string[]; subqueries: string[] }, includes: Includes) {
		return `
			${this.corequery(table, ...params.columns)}
			${this.subqueries(params.subqueries, includes)}
		`
	}
	static corequery<Table extends string>(table: Table, ...columns: string[]) {
		let result = !String(table).match('_join_') ? `id,` : ``
		result += columns.join(', ');
		return result;
	}
	static includedEl(table: string, includes: Includes) {
		return false
		// return includes.find(
		// 	(element) =>
		// 		// @ts-ignore
		// 		(Array.isArray(element) && element.includes(table)) ||
		// 		(typeof element === 'string' && element === table)
		// );
	}
	static subquery(table: string, includes: Includes, altName?: string): string {
		const included = this.includedEl(table, includes);
		if (included) {
			const array = Array.isArray(included) ? included.slice(1) : [];
			// @ts-ignore
			const result = `, ${altName ? altName : table} (${this[table](array)})`;
			// console.log('Supa.subquery', table, includes, included, array, result);
			return result;
		} else {
			return ``;
		}
	}
	static subqueries(tables: Array<string>, includes: Includes): string {
		const result = tables.map((t) => this.subquery(t, includes)).join('\n');
		return result;
	}
	static genQueries(queries: ConfigQueries, schema: ParsedSchema, exportDefault = false) {
		const name = `supaQueries`
		let text = `export const ${name} = {
		`
		Object.entries(schema).forEach(([table, { columns, rel_to, rel_from }]) => {

		})
	}
	static types(queries: ConfigQueries, schema: ParsedSchema, exportDefault = false) {
		const name = `SupaQueries`
		let text = `export type ${name} = {
		`

		Object.entries(schema).forEach(([table, { columns, rel_to, rel_from }]) => {
			// if (table === "lex_def") console.log(columns)
			if (table in queries) {
				text += `${table}: {
			`
				Object.entries(queries[table]).forEach(([version, params]) => {
					// console.log("one iteration of queries[table] loop", table, version)
					const filtered = {
						columns: Object.entries(columns).filter(([column]) => {
							// console.log("column", c, column, version, params, table )
							return params.columns.includes(column)
						}),
						rel_to: params.includes ? Object.entries(params.includes).filter(([t, version]) => {
							// console.log(t, version, rel_to.findIndex((r) => (t === r)))
							return rel_to.findIndex((r) => (t === r)) >= 0
						}) : [],
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
						return `${name}[${table}][${version}]`
					}).join(' & ')}
			}
			` : ``
					const textRelFrom = filtered.rel_from.length > 0 ? `
			{
			${filtered.rel_from.map(([table, version]) => {
						// console.log("rel_from ----", table, version)
						return `${table}: Array<keyof ${name}["${table}"]["${version}"]>`
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
*/
// to parse config queries you need the schema as well
// should use the same structure as SupaBase.types
// and may be integrated into SupaBase.types as Supabase.genQueries or something like that
/*
export function parseConfigQueries(queries: Config["queries"], schema) {
	let object = {}
	queries.word!["big"].columns
	Object.entries(queries).forEach(([table, versions]) => {
		Object.entries(versions).forEach(([version, query]) => {
			// const query = SupaBase.query(
			// 	table,
			// 	{
			// 		columns: query.columns,
			// 		subqueries: includes
			// 	}
			// )
		})
	})
}
*/
/*

object
{
	def: {
		huge: ``
	}
}

type
{
	def: {
		huge: TheRightType
	}
}

method
async select<Table extends SupaTable, Version extends Blablabla[Table] = Blablabla[Table]>(table: Table, version: Version, filters: jfdlfjl): Type[Table][Version] {
const {data}  =	await sup.from(table).select(SupaQ.q(table, version)).filter( // add the filters here //)
return data as Type[Table][Version]
// un bail comme ça 
}

Supa.q("def", "mini")
Supa.q("def", {
	columns: ["deu"],
	includes: {"piece": "huge"} 
})

await SupaQ.select("def", "mini")
*/
/* 
static partner(includes: Includes, lang: Lang): string {
		return `
			${this.query(
				'partner',
				this.loc('description', lang),
				this.loc('subtitle', lang),
				'name',
				'adress',
				'geo'
			)}
			${this.subqueries(
			['partner_type', 'island', 'partner_join_feature', 'offer', 'partner_join_language'],
			includes,
			lang
		)}
			${this.subquery(
			'distance',
			this.includedEl('distance', includes) ? [['distance', ['partner', 'partner_type']]] : [],
			lang,
			'distance!distance_partner_id_a_fkey'
		)}
		`;
	}
*/