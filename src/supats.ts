import * as util from 'util'
import { exec as exec_base } from 'child_process'
const exec = util.promisify(exec_base)
import * as fs from 'fs'

import path, { getPath, getCommandSupa, encoder, parseConfigOptions, defaultExportToJson } from "./lib/path.js"
import bonus from './lib/bonus.js'
import imports from './lib/imports.js'
import { type ConfigCommons, justTables } from "./lib/util.js"
import { SupaGen } from './lib/queries.js'
import { parseSchema } from './lib/jsc.js'

// program.option("-c, --config <file>", "relative path to SupaQ config file: -c ./supaconfig.ts or ./config ...")
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
		// console.log(`will import ${path}`)
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
	if (!errSupa) {
		fs.writeFileSync(path.typeTables, justTables(outSupa), encoder)
		const { stdout: outSchema, stderr: errSchema } = await exec(`${config.options.executable} ts-generate-schema ${path.typeTables} --out .`)
		if (!errSchema) {

			const schemaTables = parseSchema(defaultExportToJson(fs.readFileSync(path.schemaTables, encoder)))
			const schemaTablesText = `
			const schemaTables = ${JSON.stringify(schemaTables)} as const
			
			`
			const dataTypes = SupaGen.dataTypes(config.queries, schemaTables)
			const queriesText = SupaGen.queriesText(config.queries)
			const concat = imports() + outSupa + schemaTablesText + dataTypes + queriesText + bonus(config)
			fs.writeFileSync(path.output, concat)
		}
	}
}

async function main() {
	const config = await getConfig(fullPath)
	if (config) { gen(config) }
}

main()
