import { ConfigCommons, ConfigOptions } from "./util.js"
import type { RequiredDeep } from "type-fest"
const regTs = /(.*)\.ts$/
const regJs = /(.*)\.js$/

export function getPath(fullPath: string) {
	const matchTs = fullPath.match(regTs)
	const matchJs = fullPath.match(regJs)

	let path: null | string = null, command: null | string = null
	if (matchJs) {
		path = matchJs[1]
	} else {
		if (matchTs) {
			path = matchTs[1]
		} else {
			path = fullPath
		}
		command = `tsc ${path}.ts --target es2022 --moduleResolution node --strict false --skipLibCheck`

	}
	return { path, command }
}

export function parseConfigOptions(options: ConfigOptions) {
	// sets the default
	if (options) {
		if (!(options?.executable || "executable" in options)) { options.executable = `` }
		if (!(options?.id || "id" in options)) { options.id = `id` }
	}
	return options as RequiredDeep<ConfigOptions>
}

export function getCommandSupa(config: ConfigCommons) {
	const options = config.options
	const executable = options.executable
	let commandSupa = `${executable} supabase gen types typescript `
	const { local, linked } = config.supabase
	if ('projectId' in config.supabase) {
		commandSupa += `--project-id ${config.supabase.projectId} `;
	} else if (local || linked) {
		commandSupa += `--${local ? `local` : `linked`}`
	} else if ('dbUrl' in config.supabase) {
		commandSupa += `--db-url ${config.supabase.dbUrl}`
	} else {
		throw new Error("SupaQ Config: Must specify one of --local, --linked, --project-id, or --db-url")
	}
	return commandSupa
}

// function out(text: string, dir?: string) {
// 	if (!dir) dir = `gen`
// 	return `${dir}/${text}`
// }

export const encoder = { encoding: 'utf8' } as const

export function defaultExportToJson(string: string) {
	return JSON.parse(string.replace("export default ", ""))
}

export default {
	output: "supaq.ts",
	typeTables: "tables.ts",
	schemaTables: "tables.jsc.ts",
	parsedTables: "tables.parsed.json"
} as const