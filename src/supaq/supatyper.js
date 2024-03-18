
import util from 'util'
import { exec as exec_base } from 'child_process'
const exec = util.promisify(exec_base)
import fs from 'fs'
import {program} from 'commander'

import bonus, { queriesStarter } from './lib/bonus.js'
import imports, { dots } from './lib/imports.js'
import { getUserQueries, justTables } from './lib/tinkering.js'
import { genBaseQueries, parseSchema } from './lib/jsc.js'

program
	.option('-c, --client-path <file>', 'relative path (from the output file location) to Supabase client file in which the client is exported as default.')
	.option('-o, --output <file>', 'Output file name')
	.option('-p, --project-id <id>', 'Supabase project ID')
	.option('--local', 'Generate types from the local dev database')
	.option('--linked', "Generate types from the linked project")
	.option('--db-url <string>', 'Generate types from a database url')
	.option('-pre, --with-prefix', 'Support for prefix in column names: for ex, a table client would have columns client_id, client_name, client_email, etc.')
	.option('-u, --unexact', 'Exact means every table must have a query. Use the flag --unexact if you don\' query all tables in the public schema. Note that the public schema exposes all your table and that this option is not recommended. I included it because it was easy but honestly don\'t do that!')
	.option('-e, --exec', "Which executable to execute the commands. Defaults to pnpx. If you installed ")
	.parse(process.argv);

const command = program.exec || `pnpx` // TODO: rename it
let commandSupa = `${command} supabase gen types typescript `

const dir = `gen`
/**
 * @param {string} text 
 */
function out(text) {
	return `${dir}/${text}`
}
const path = {
	output: program.output || out('supaq.ts'),
	typeTables: out("tables.ts"),
	schemaTables: out("tables.jsc.ts")
}
const encoder = { encoding: 'utf8' }

/**
 * @type {string}
 */
const clientPath = program.clientPath || `${dots}/supabase.ts`
/**
 * @type {boolean}
 */
const withPrefix = !!(program.withPrefix) || false
/**
 * @type {boolean}
 */
const unexact = !!(program.unexact) || false


if (program.projectId) {
	commandSupa += `--project-id ${program.projectId} `;
	// console.log('project-id', commandSupa)
} else if (program.local) {
	commandSupa += `--local`
} else if (program.linked) {
	commandSupa += `--linked`
} else if (program.dbUrl) {
	commandSupa += `--db-url ${program.dbUrl}`
} else {
	throw new Error("Must specify one of --local, --linked, --project-id, or --db-url")
}

async function gen() {
	const { stdout: outSupa, stderr: errSupa } = await exec(commandSupa)
	// if (errSupa !== "") console.log(`Command Error Output (stderr) :\n${errSupa}`)
	fs.writeFileSync(path.typeTables, justTables(outSupa), encoder)
	const { stdout: outSchema, stderr: errSchema } = await exec(`${command} ts-generate-schema ${path.typeTables} --out .`)
	/**
	 * @type {string | null}
	 */
	let queries = null
	try {
		queries = getUserQueries(fs.readFileSync(path.output, encoder))
	} catch (error) {
	}
	if (!queries || !queries.match(new RegExp(".*\w.*", "g"))) {
		queries = queriesStarter(genBaseQueries(parseSchema(JSON.parse(fs.readFileSync(path.schemaTables, encoder).replace("export default ", "")))))
	}
	const concat = imports({ clientPath }) + outSupa + bonus({ queries })
	fs.writeFileSync(path.output, concat);
}

gen()

/* 

type Query<Table extends SupaTable> = {
	columns: Array<SupaColumn<Table>>
	relations?: Array<SupaTable> // but relations are already defined by schema so users should only focus on proving includes:Includes and the columns
	includes: Includes
}

type Crazy = {
	[T in SupaTable]?: {
		[Version: string]: Query<T>
	}
}

// WIP
// HERE IS WHAT USERS WILL WRITE IN THEIR CONFIG
// IT IS TYPED AND CONCISE
// THE PROGRAM GOT ALL INFO NEEDED TO GENERATE THE QUERY + THE RESULT TYPE
export const queries: Crazy = {
	language: {
		big: {
			columns: ["native_name"],
			includes: [["partner", "partner_join_feature", "feature"]]
		}
	}
}
*/