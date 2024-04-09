import { pre } from "./util.js";
const builder = (config) => {
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
		` : `changes`}  
		const { data, error } = await client.from(table).insert(payload);
		// console.log(\`insert in \${ String(table) } \`, data, error);
		return { data, error };
	}
	static async select<T extends keyof SupaQueries, Version extends keyof SupaQueries[T]>(table: T, version: Version, filter?: Filter<T>): Promise<Parsed<T, Array<SupaQueries[T][Version]>>> {
		let query = client.from(table).select(queries[table][version])
		if (filter) {
			Object.entries(filter).forEach(([column, filters]) => {
				Object.entries(filter).forEach(([operator, value]) => {
					query = query.filter(column, operator, value)
				})
			})
		}
		const result = await query
		const data = result.data as Array<SupaQueries[T][Version]>
		const parsed = suparse(table, data)
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
        suparse: `

// suparse

import type { PostgrestSingleResponse } from "@supabase/supabase-js"

export type Parsed<Table extends SupaTable, O extends object> = {
	__table: Table
	${config.options.withPrefix ? `get<C extends SupaColumn<Table>>(column: C): SupaValue<Table, C>` : ``}
	set<C extends SupaColumn<Table>>(column: C, value: SupaValue<Table, C>): Promise<PostgrestSingleResponse<any>>
	delete(): Promise<PostgrestSingleResponse<any>>
} & {
		[K in keyof O]?: O[K] extends (infer U)[] ? Parsed<K extends SupaTable ? K : SupaTable, U extends object ? U : object>[] : O[K] extends object ? Parsed<K extends SupaTable ? K : SupaTable, O[K]> : object
		// [K in keyof O]?: O[K] extends object ? Parsed<K extends SupaTable ? K : SupaTable, O[K]> : O[K] extends (infer U)[] ? Parsed<K extends SupaTable ? K : SupaTable, U extends object ? U : object>[] : object
	}

export function suparse<Table extends SupaTable, O extends object>(table: Table, object: O): Parsed<Table, O> {
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
	// return result
	return parse(table, result)
}

export function parse<Table extends SupaTable, O extends object>(table: Table, object: O) {
	const full_id = ${config.options.withPrefix ? `\`\${ table }_id\` as keyof O` : config.options.id} 
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
			const result = await sup.from(table).update({ [full]: value }).eq(String(full_id), id).select(\`\${ String(full_id) }, \${ String(full) } \`)
			return result
		},
		async delete(options?: { hard?: boolean }) {
			const isHard = options?.hard
			let result: PostgrestSingleResponse<any>
			if (isHard) {
				result = await sup.from(table).delete().eq(String(full_id), id).select(String(full_id))
			} else {
				const is_deleted = \`is_deleted\` as SupaColumn<Table>
				result = await this.set(is_deleted, true)
			}

			return result
		}
	}
}

export function suparrse<Table extends SupaTable, O extends object>(table: Table, arr: O[]) {
	return arr.map(o => (suparse(table, o)))
}

`
    };
};
export default (config) => `

export const client: SupabaseClient = createClient<Database>("${'dbUrl' in config.supabase ? config.supabase.dbUrl : `https://${config.supabase.projectId}.supabase.co`}", "${config.supabase.key}");
${builder(config).types}
${builder(config).suparse}
${builder(config).class}
${builder(config).config}

export default SupaQ;
`;
