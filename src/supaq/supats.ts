
import * as util from 'util'
import { exec as exec_base } from 'child_process'
const exec = util.promisify(exec_base)
import * as fs from 'fs'
// import { program } from 'commander'

import { getPath, getCommandSupa, out, encoder, parseConfigOptions } from "./lib/path.js"
import bonus, { queriesStarter } from './lib/bonus.js'
import imports from './lib/imports.js'
import { getUserQueries, justTables } from './lib/tinkering.js'
import { genBaseQueries, parseSchema } from './lib/jsc.js'
import type { ConfigCommons } from "./lib/util.js"


const path = {
	output: out('supaq.ts'),
	typeTables: out("tables.ts"),
	schemaTables: out("tables.jsc.ts")
}

// program.option("-c, --config <file>", "relative path to SupaQ config file: -c ./supaconfig.ts or ./config ...")
console.log(process.argv[2])
const fullPath = process.argv[2] || `./config.ts`

async function getConfig(fullPath: string) {
	let config: ConfigCommons
	let { path, command } = await getPath(fullPath)
	if (command) {
		try {
			// console.log(`command ${command} will be executed`)
			const { stdout, stderr } = await exec(command)
			// console.log(`command ${command} has been executed, stdout: ${stdout}, stderr: ${stderr}`)
		} catch (error) { console.error(error) }
	}
	path = `${path}.js`
	try {
		console.log(`will import ${path}`)
		const imported = await import(path)
		config = imported.default as ConfigCommons
		// console.log(config)
		const options = parseConfigOptions(config.options)
		return { ...config, options }
	} catch (error) {
		console.error(error)
	}
}

async function gen(config: ConfigCommons) {
	const commandSupa = getCommandSupa(config)
	const { stdout: outSupa, stderr: errSupa } = await exec(commandSupa)
	fs.writeFileSync(path.typeTables, justTables(outSupa), encoder)
	const { stdout: outSchema, stderr: errSchema } = await exec(`${config.options.executable} ts-generate-schema ${path.typeTables} --out .`)
	let queries: string | null = null
	try {
		queries = getUserQueries(fs.readFileSync(path.output, encoder))
	} catch (error) { console.error(error) }
	if (!queries || !queries.match(new RegExp(".*\w.*", "g"))) {
		queries = queriesStarter(genBaseQueries(parseSchema(JSON.parse(fs.readFileSync(path.schemaTables, encoder).replace("export default ", "")))))
	}
	const concat = imports() + outSupa + bonus({ queries }, config.options)
	fs.writeFileSync(path.output, concat);
}

async function main() {
	const config = await getConfig(fullPath)
	if (config) {

	}
}

async function test() { }

main()
// test()