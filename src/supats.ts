import * as util from 'util'
import { exec as exec_base } from 'child_process'
const exec = util.promisify(exec_base)
import * as fs from 'fs'
import * as pathh from 'path'

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
	let { path, command } = getPath(fullPath)
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
		// TODO: the path here should be relative to the SupaQ package itself
		// I have no idea how to get this relative path
		const absoluteFile = `file://${pathh.resolve(path)}`

		const absoluteDirArr = absoluteFile.split('\\'); absoluteDirArr.pop();
		const absoluteDir = absoluteDirArr.join('\\')

		const relativeDirArr = path.split('/'); relativeDirArr.pop();
		const relativeDir = relativeDirArr.join('/')

		const imported = await import(absoluteFile)
		config = imported.default as ConfigCommons
		// console.log(config)
		const options = parseConfigOptions(config.options)
		return { ...config, options, absoluteDir, relativeDir }
	} catch (error) {
		console.error(error)
	}
}

async function gen(config: ConfigCommons & { absoluteDir: string; relativeDir: string }) {
	function out(incompletePath: string) {
		return `${config.relativeDir}/${incompletePath}`
		// return `file:///${config.absoluteDir}\\${incompletePath}`
	}
	const commandSupa = getCommandSupa(config)
	const { stdout: outSupa, stderr: errSupa } = await exec(commandSupa)
	try {
		fs.writeFileSync(out(path.typeTables), justTables(outSupa), encoder)
		const { stdout: outSchema, stderr: errSchema } = await exec(`${config.options.executable} ts-generate-schema ${out(path.typeTables)} --out .`)
		try {
			const schemaTables = parseSchema(defaultExportToJson(fs.readFileSync(out(path.schemaTables), encoder)))
			const schemaTablesText = `
			const schemaTables = ${JSON.stringify(schemaTables)} as const
			
			`
			const dataTypes = SupaGen.dataTypes(config.queries, schemaTables)
			const queriesText = SupaGen.queriesText(config.queries)
			const concat = imports() + outSupa + schemaTablesText + dataTypes + queriesText + bonus(config)
			fs.writeFileSync(out(path.output), concat)

			// clean 
			try {
				fs.unlinkSync(`${getPath(fullPath).path}.js`)
				if (!config.options.moreFiles) {
					fs.unlinkSync(out(path.typeTables))
					fs.unlinkSync(out(path.schemaTables))
				}
			} catch (error) {
				console.error(error)
			}
		} catch (error) {
			console.error(error, errSchema, outSchema)
		}
	} catch (error) {
		console.error(error, errSupa)
	}

}

async function main() {
	const config = await getConfig(fullPath)
	if (config) { gen(config) }

}

main()
