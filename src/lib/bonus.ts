import { ConfigCommons, pre } from "./util.js";

const builder = (config: ConfigCommons) => {
	return {
		types: `

// SupaQ helper types

export type DB = Database['public']['Tables'];
export type SupaTable = keyof DB;

export type SupaColumn<Table extends SupaTable> =
	keyof DB[Table]['Row'];

export type SupaValue<Table extends SupaTable, Column extends SupaColumn<Table>> =
	DB[Table]['Row'][Column];

export type SupaRow<Table extends SupaTable> =
	{ [Column in SupaColumn<Table>]: SupaValue<Table, Column>; };

${config.options?.withPrefix ? `

export type SupaColumnPre<Table extends SupaTable> =
	{
		[C in SupaColumn<Table>]: C extends \`\${ Table }_\${ infer Rest }\` ? Rest : never;
	}[keyof DB[Table]['Row']];

export type SupaValuePre<Table extends SupaTable, Column extends SupaColumnPre<Table>> =
	DB[Table]['Row'][Extract<SupaColumn<Table>, \`\${ Table }_\${ Column } \`>];

export type SupaRowPre<Table extends SupaTable> =
	{ [Column in SupaColumnPre<Table>]: SupaValuePre<Table, Column>; }

` : ``}
		`,
		class: `
type Filter<T extends SupaTable> = {
  [column in ${pre('SupaColumn')}<T>]?: {
    [operator in keyof PostgrestFilterBuilder<Database["public"], SupaRow<T>, any>]?: ${pre('SupaValue')}<T, column>
  }
}

type SchemaTables = typeof schemaTables
export type Includes<T extends keyof SchemaTables> = {
	[table in SchemaTables[T]["rel_from"][number] | SchemaTables[T]["rel_to"][number]]?: string
}

export class SupaQ {
	${config.options?.withPrefix ? `
		µ<T extends SupaTable>(object: Parsed<T, { [key in SupaColumn<T>]?: any }> & { __table: T }, k: SupaColumnPre<T>) {
			const table = object.__table
			if (table) {
				const key = \`\${ table }_\${ k } \` as SupaColumn<T>;
				const result = object[key];
				// console.log('µ result', result);
				return result;
			}
		}
	` : ``}
	static async insert<Table extends SupaTable>(
		table: Table,
		changes: { 
			[C in ${pre('SupaColumn', config.options)}<Table>]: SupaValue<Table, C>
		}
	) {
		const payload = ${config.options?.withPrefix ? `
			arr2obj(
				Object.entries(changes).map((p) => {
					const [key, value] = p;
					if (key.match('_id')) {
						return p;
					} else {
						return [\`\${ table }_\${ key } \`, value];
					}
				})
			);
		`: `changes`}  
		const { data, error } = await client.from(table).insert(payload);
		// console.log(\`insert in \${ String(table) } \`, data, error);
		return { data, error };
	}
	static async select<T extends keyof SupaQueries, V extends keyof SupaQueries[T]>(table: T, version: V, filter?: Filter<T>) {
		let query = client.from(table).select(queries[table][version].text)
		if (filter) {
			Object.entries(filter).forEach(([column, filters]) => {
				Object.entries(filters).forEach(([operator, value]) => {
				query = query.filter(column, operator, value)
				})
			})
		}
		const result = await query
		const data = result.data as Array<SupaQueries[T][V]>
		const parsed = suparrse(data, { table, version })
		return parsed
	}
}
		`,
		config: `
		type Query<Table extends SupaTable> = {
			columns: Array<SupaColumn<Table>>
			includes: Includes<Table>
		}
		export type Config = {
			queries: {
				[T in SupaTable]?: {
					[Version: string]: Query<T>
				}
			}
		} & ConfigCommons
		`,
		suparse_old: `

// suparse

type Parsed<Table extends SupaTable, O extends object> = {
	__table: Table
	__version?: string
	${config.options.withPrefix ? `get<C extends SupaColumn<Table>>(column: C): SupaValue<Table, C>` : ``}
	set<C extends SupaColumn<Table>>(column: C, value: SupaValue<Table, C>): Promise<PostgrestSingleResponse<any>>
	delete(): Promise<PostgrestSingleResponse<any>>
} & {
		[K in keyof O]?: O[K] extends (infer U)[] ? Parsed<K extends SupaTable ? K : SupaTable, U extends object ? U : object>[] : O[K] extends object ? Parsed<K extends SupaTable ? K : SupaTable, O[K]> : object
		// [K in keyof O]?: O[K] extends object ? Parsed<K extends SupaTable ? K : SupaTable, O[K]> : O[K] extends (infer U)[] ? Parsed<K extends SupaTable ? K : SupaTable, U extends object ? U : object>[] : object
	}

function suparse<Table extends keyof SupaQueries, O extends SupaQueries[Table][Version]>(table: Table, object: O, version: Version) {
	// @ts-ignore
	const result: Parsed<Table, O> = { ...object }
	if (object) {
		Object.entries(object).forEach(entry => {
			const column = String(entry[0]) as keyof O
			const value = entry[1]
			if (Array.isArray(value)) {
				// @ts-ignore
				result[column] = value.map(v => {
					if (typeof v === 'object') {
						return suparse(String(column) as SupaTable, v) as Parsed<typeof column extends SupaTable ? typeof column : SupaTable, typeof v>
					} else {
						return v
					}
				})
			} else if (typeof value === 'object') {
				// @ts-ignore
				result[column] = suparse(String(column) as SupaTable, value)
			} else {
				result[column] = value
			}
		})
	}
	return parse(table, version, result)
}

function parse<Table extends SupaTable, O extends object>(Table extends keyof SupaQueries, Version extends keyof SupaQueries[T], object: O) {
	const full_id = ${config.options.withPrefix ? `\`\${ table }_id\` as keyof O` : `"${config.options.id}"` } 
	const id = object[full_id]
	return {
		...object,
		__table: table,
		${config.options.withPrefix ? `
		get<C extends SupaColumn<Table>>(column: C) {
			const full = \`\${ table }_\${ String(column) } \` as keyof O
			const result = object[full]
			return result
		},
		` : ``}
		async set<C extends SupaColumn<Table>>(column: C, value: any) {
			const full = ${config.options.withPrefix ? `\`\${ table }_\${ String(column) } \` as keyof O` : `column`}
			const result = await client.from(table).update({ [full]: value }).eq(String(full_id), id).select(\`\${ String(full_id) }, \${ String(full) } \`)
			return result
		},
		async delete(options?: { hard?: boolean }) {
			const isHard = options?.hard
			let result: PostgrestSingleResponse<any>
			if (isHard) {
				result = await client.from(table).delete().eq(String(full_id), id).select(String(full_id))
			} else {
				const is_deleted = \`is_deleted\` as SupaColumn<Table>
				result = await this.set(is_deleted, true)
			}
			return result
		}
	}
}

function suparrse<Table extends SupaTable, O extends object>(table: Table, arr: O[]) {
	return arr.map(o => (suparse(table, o)))
}

		`,
		suparse: `
		
function suparse<T extends keyof SupaQueries, V extends keyof SupaQueries[T]>(
  toParse: any,
  params: {
    table: T
    version: V
  }
) {
  const { table, version } = params
  const result: any = { ...toParse }
  Object.entries(toParse).forEach(([column, value]) => {
    if (Array.isArray(value)) {
      result[column] = value.map(v => {
        if (typeof v === 'object' && column in (queries[table][version].includes || {})) {
          // @ts-ignore
          return suparse(v, { table: column, version: queries[table][version].includes[column] })
        } else {
          return v
        }
      })
    } else if (typeof value === 'object') {
      // @ts-ignore
      result[column] = suparse(value, { table: column, version: queries[table][version][column] })
    } else {
      result[column] = value
    }
  })
  const idProperty = "id"
  const id = result[idProperty]
  const result2 = { ...result } as SupaQueries[T][V]
  const result3 = {
    ...result2,
    __table: table,
    __version: version,
    async set<C extends keyof SupaQueries[typeof table][typeof version]>(column: C, value: SupaQueries[typeof table][typeof version][C]) {
      // column is sometimes table + column 
      const result = await client.from(table).update({ [column]: value }).eq(String(idProperty), id).select(\`\${ String(idProperty) }, \${ String(column) } \`)
      return result
    },
    async delete(options?: { hard?: boolean }) {
      const isHard = options?.hard
      let result
      if (isHard) {
        result = await client.from(table).delete().eq(String(idProperty), id).select(String(idProperty))
      } else {
        const is_deleted = \`is_deleted\`
        // @ts-ignore
        result = await this.set(is_deleted, true)
      }
      return result
    }
  }
  return result3
}

function suparrse<T extends keyof SupaQueries, V extends keyof SupaQueries[T]>(
  toParse: Array<any>,
  params: {
    table: T
    version: V
  }
) {
  return toParse.map(o => (suparse(o, params)))
}
		`
	}
}

export default (config: ConfigCommons) => `

// --SupaQ--

export const client: SupabaseClient = createClient<Database>("${'dbUrl' in config.supabase ? config.supabase.dbUrl : `https://${config.supabase.projectId}.supabase.co`}", "${config.supabase.key}");

// helper types --

${builder(config).types}
${builder(config).class}
export default SupaQ;

// -- helper types

// suparse --

${builder(config).suparse}

// -- suparse 

// config --

${builder(config).config}

// -- config

`
