import { ConfigCommons, ConfigOptions, ConfigSupabase } from "./util.js"
import { dots } from './imports.js'
import type { RequiredDeep } from "type-fest"
import Supa, { Config } from "../gen/supaq.js"
const regTs = /(.*)\.ts$/
const regJs = /(.*)\.js$/

export async function getPath(fullPath: string) {
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
		if (!options?.executable) options.executable = ``
	}
	return options as RequiredDeep<ConfigOptions>
}

export function getCommandSupa(config: ConfigCommons) {
	const options = config.options
	const executable = options.executable
	let commandSupa = `${executable} supabase gen types typescript `
	const { projectId, local, linked, dbUrl } = config.supabase
	if (projectId) {
		commandSupa += `--project-id ${projectId} `;
	} else if (local || linked) {
		commandSupa += `--${local ? `local` : `linked`}`
	} else if (dbUrl) {
		commandSupa += `--${dbUrl}`
	} else {
		throw new Error("SupaQ Config: Must specify one of --local, --linked, --project-id, or --db-url")
	}
	return commandSupa
}

export function out(text: string, dir?: string) {
	if (!dir) dir = `gen`
	return `${dir}/${text}`
}


export function parseConfigQueries(queries: Config["queries"]) {
	let text = `
	`
	queries.word!["big"].columns
	Object.entries(queries).forEach(([table, versions]) => {
		
		Object.entries(versions).forEach(([version, query]) => {
			const t = `
			return \` 
				\${this.query(
					"${table}", 
					${query.columns.map((c: string) => (`"${c}"`)).join(", ")}
				)}
			\`
			`
		})
	})
}

export const encoder = { encoding: 'utf8' }

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