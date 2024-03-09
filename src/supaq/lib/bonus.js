/**
 * @typedef {Object} HolesBonus - The template got holes and this object fills them.
 * @property {string} queries - Previous user queries.
 */

import { pre } from "./util.js";
import { zoneDelimiters } from "./zoneDelimiters.js";

/**
 * @typedef {Object} ContextBonus
 * @property {boolean} withPrefix
 * @property {boolean} unexact
 */

/**
 * 
 * @param {HolesBonus} holes 
 * @param {ContextBonus} [context]
 * @returns {string}
 */

export default (holes, context) => `

// SupaQ helper types

export type DB = Database['public']['Tables'];
export type SupaTable = keyof DB;

export type SupaColumn<Table extends SupaTable> = 
	keyof DB[Table]['Row'];

export type SupaValue<Table extends SupaTable, Column extends SupaColumn<Table>> = 
	DB[Table]['Row'][Column];

export type SupaRow<Table extends SupaTable> =
	{ [Column in SupaColumn<Table>]: SupaValue<Table, Column>; };


${context?.withPrefix ? `

export type SupaColumnPre<Table extends SupaTable> =
	{
		[C in SupaColumn<Table>]: C extends \`\${ Table }_\${ infer Rest }\` ? Rest : never;
	}[keyof DB[Table]['Row']];

export type SupaValuePre<Table extends SupaTable, Column extends SupaColumnPre<Table>> =
	DB[Table]['Row'][Extract<SupaColumn<Table>, \`\${ Table }_\${ Column } \`>];

export type SupaRowPre<Table extends SupaTable> =
	{ [Column in SupaColumnPre<Table>]: SupaValuePre<Table, Column>; }

` : ``}

export type Includes = Array<SupaTable | Array<SupaTable | Includes>>;

// the interface is WIP
// TODO: the class must be extremely type safe
type Methods = {
	// select: (table: SupaTable, version: string, filter: Filter<T>)
	get: (object: object, table: SupaTable, ...keys: Array<object>) => any
	${context?.withPrefix ? `µ: () => any` : ``}
	insert: (table: SupaTable, changes: object) => Promise<PostgrestSingleResponse<any[] | any | null>>
	query: (table: SupaTable, ...columns: Array<SupaColumn<SupaTable>>) => string
	includedEl: (table: SupaTable, includes: Includes) => boolean
	subquery: (table: SupaTable, includes: Includes, altName?: string) => string
	subqueries: (tables: Array<SupaTable>, includes: Includes) => string
}
type Subqueries = {
  [table in SupaTable]: (includes: Includes) => string
}
type SupaI = Methods & Subqueries

${!context?.unexact ? `
export type ExactSupa = Exact<SupaI, Supa>
` : ``}

export class Supa ${!context?.unexact ? `implements ExactSupa` : ``} {
	static get<T>(object: T, table: SupaTable, ...keys: Array<keyof T>) {
		let result: any = object; // TO-DO: no-explicit-any
		keys.forEach((key) => {
			result = result[\`\${ table }_\${ String(key) } \`];
		});
		return result;
	}
	${context?.withPrefix ? `
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
			[C in ${pre('SupaColumn')}<Table>]: SupaValue<Table, C>
		}
	) {
		const payload = ${context?.withPrefix ? `
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
		const { data, error } = await supa.from(table).insert(payload);
		// console.log(\`insert in \${ String(table) } \`, data, error);
		return { data, error };
	}
	static query<Table extends SupaTable>(table: Table, ...columns: Array<${pre('SupaColumn')}<Table>>) {
		let result = columns${context?.withPrefix ? `.map((column) => \`\${ String(table) }_\${ String(column) } \`)` : ``}.join(', ');
		if (!String(table).match('_join_')) {
			result += ${context?.withPrefix ? `\`, \${ String(table) } _id\`;` : `\`id;\``} 
		}
		return result;
	}
	static includedEl(table: SupaTable, includes: Includes) {
		return includes.find(
			(element) =>
				(Array.isArray(element) && element.includes(table)) ||
				(typeof element === 'string' && element === table)
		);
	}
	static subquery(table: SupaTable, includes: Includes, altName?: string): string {
		const included = this.includedEl(table, includes);
		if (included) {
			const array = Array.isArray(included) ? included.slice(1) : [];
			const result = \`, \${ altName ? altName : table } (\${ this[table](array) })\`;
			// console.log('Supa.subquery', table, includes, included, array, result);
			return result;
		} else {
			return \`\`;
		}
	}
	static subqueries(tables: Array<SupaTable>, includes: Includes): string {
		const result = tables.map((t) => this.subquery(t, includes)).join('\\n');
		return result;
	}
	${holes.queries}
}
type Filter<T extends SupaTable> = {
  [column in ${pre('SupaColumn')}<T>]?: {
    [operator in keyof PostgrestFilterBuilder<Database["public"], SupaRow<T>, any>]?: ${pre('SupaValue')}<T, column>
  }
}
export async function select<T extends SupaTable>(table: T, filter: Filter) {
  let query = supa.from(table).select('*')

  Object.entries(filter).forEach(([column, filters]) => {
    Object.entries(filter).forEach(([operator, value]) => {
      query = query.filter(column, operator, value)
    })
  })
  await query
}

export default Supa;
`

export const queriesStarter = `
	${zoneDelimiters.start}


	${zoneDelimiters.stop}
`