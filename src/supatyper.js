const util = require('util');
const exec = util.promisify(require('child_process').exec);

// const { exec } = require('child_process');
const fs = require('fs');
const program = require('commander');


// Define the command-line options
program
	.option('-c, --client-path <file>', 'relative path (from the output file location) to Supabase client file in which the client is exported as default.')
	.option('-o, --output <file>', 'Output file name')
	.option('-p, --project-id <id>', 'Supabase project ID')
	.option('--local', 'Generate types from the local dev database')
	.option('--linked', "Generate types from the linked project")
	.option('--db-url <string>', 'Generate types from a database url')
	.option('-pre, --with-prefix', 'Support for prefix in column names: for ex, a table client would have columns client_id, client_name, client_email, etc.')
	.option('-u, --unexact', 'Exact means every table must have a query. Use the flag --unexact if you don\' query all tables in the public schema. Note that the public schema exposes all your table and that this option is not recommended. I included it because it was easy but honestly don\'t do that!')
	.parse(process.argv);

let command = `pnpm supabase gen types typescript `

/**
 * @type {string}
 */
const output = program.output || 'supagentypes.ts'
/**
 * @type {string}
 */
const clientPath = program.clientPath || './supabase.ts'
/**
 * @type {boolean}
 */
const withPrefix = !!(program.withPrefix) || false
/**
 * @type {boolean}
 */
const unexact = !!(program.unexact) || false

const zoneDelimitersReg = {
	start: `OUTSIDE YOUR ZONE`,
	stop: `YOUR ZONE STOPS HERE`
}
const zoneDelimiters = {
	start: `
		// DO NOT DELETE ANYTHING, EVEN THE COMMENTS, ${zoneDelimitersReg.start}
		// YOUR ZONE STARTS HERE: please refer to the docs
	`,
	stop: `
		// ${zoneDelimitersReg.stop}
	`
}

/**
 * @function pre chooses between SupaColumn and SupaColumnPre
 * @param {string} t 
 * @returns {string}
 */
function pre(t) {
	if (withPrefix) {
		return `${t}Pre`
	} else {
		return `${t}`
	}
}

/**
 * @typedef {Object} HolesBonus - The template got holes and this object fills them.
 * @property {string} queries - Previous user queries.
 */

/**
 * 
 * @param {HolesBonus} holes 
 * @returns {string}
 */

const bonus = (holes) => `

// SupaQ helper types

export type DB = Database['public']['Tables'];
export type SupaTable = keyof DB;

export type SupaColumn<Table extends SupaTable> = 
	keyof DB[Table]['Row'];

export type SupaValue<Table extends SupaTable, Column extends SupaColumn<Table>> = 
	DB[Table]['Row'][Column];

export type SupaRow<Table extends SupaTable> =
	{ [Column in SupaColumn<Table>]: SupaValue<Table, Column>; };


${withPrefix ? `

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
	${withPrefix ? `µ: () => any` : ``}
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

${!unexact ? `
export type ExactSupa = Exact<SupaI, Supa>
` : ``}

export class Supa ${!unexact ? `implements ExactSupa` : ``} {
	get<T>(object: T, table: SupaTable, ...keys: Array<keyof T>) {
		let result: any = object; // TO-DO: no-explicit-any
		keys.forEach((key) => {
			result = result[\`\${ table }_\${ String(key) } \`];
		});
		return result;
	}
	${withPrefix ? `
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
	
	async insert<Table extends SupaTable>(
		table: Table,
		changes: { 
			[C in ${pre('SupaColumn')}<Table>]: SupaValue<Table, C>
		}
	) {
		const payload = ${withPrefix ? `
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
	query<Table extends SupaTable>(table: Table, ...columns: Array<${pre('SupaColumn')}<Table>>) {
		let result = columns${withPrefix ? `.map((column) => \`\${ String(table) }_\${ String(column) } \`)` : ``}.join(', ');
		if (!String(table).match('_join_')) {
			result += ${withPrefix ? `\`, \${ String(table) } _id\`;` : `\`id;\``} 
		}
		return result;
	}
	includedEl(table: SupaTable, includes: Includes) {
		return includes.find(
			(element) =>
				(Array.isArray(element) && element.includes(table)) ||
				(typeof element === 'string' && element === table)
		);
	}
	subquery(table: SupaTable, includes: Includes, altName?: string): string {
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
	subqueries(tables: Array<SupaTable>, includes: Includes): string {
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

const imports = () => `

import type { Exact } from 'type-fest';

import { PostgrestFilterBuilder, PostgrestSingleResponse } from '@supabase/postgrest-js'
// import { SupabaseClient } from '@supabase/supabase-js';

// from SupaQ
import arr2obj from './helpers/arr2obj.ts';
import type { Parsed } from './suparse.ts';

// set by user
import supa from '${clientPath}';

`

if (program.projectId) {
	command += `--project-id ${program.projectId} `;
	// console.log('project-id', command)
} else if (program.local) {
	command += `--local`
} else if (program.linked) {
	command += `--linked`
} else if (program.dbUrl) {
	command += `--db-url ${program.dbUrl}`
} else {
	throw new Error("Must specify one of --local, --linked, --project-id, or --db-url")
}

async function gen() {

	// fetch Supabase
	const { stdout, stderr } = await exec(command)
	if (stderr) {
		throw new Error(`Command Error Output (stderr) :\n${stderr}`)
	}

	// include modifications done by the user
	let queries = ``
	try {
		const current = fs.readFileSync(output, { encoding: 'utf8' })

		let on = false
		current.split('\n').forEach((line, index) => {
			if (line.match(zoneDelimitersReg.start)) {
				on = true
			}
			if (on) {
				queries += `
				${line}
			`
			}
			if (line.match(zoneDelimitersReg.stop)) {
				on = false
			}
		})
	} catch (error) {
		queries = `
			${zoneDelimiters.start}

			${zoneDelimiters.stop}
		`
	}

	// console.log('current', current)

	const concat = imports() + stdout + bonus({ queries })
	// console.log(stdout);

	fs.writeFile(output, concat, (err) => {
		if (err) {
			console.error(`Error writing to ${output}:`, err);
			return;
		}
		// console.log(`Data written to ${output}!`);
	});

}

gen()