import { Includes } from "./queries"

type Context = {
	[option: string]: any
}

/**
 * chooses between SupaColumn and SupaColumnPre
 */
export function pre(t: string, context?: Context): string {
	if (context?.withPrefix) {
		return `${t}Pre`
	} else {
		return `${t}`
	}
}

export type ConfigSupabase = {
	key: string
	local?: boolean
	linked?: boolean
} & (
		{ dbUrl: string } | { projectId: string }
	)

export type ConfigOptions = {
	withPrefix?: boolean
	executable?: 'npx' | 'pnpx' | null | ''
	id?: 'id' | null | string
}

type Queries<T extends ConfigParams | string> = {
	[table: string]: {
		[version: string]: T
	}
}
export type ConfigQueries = Queries<ConfigParams>
export type StringQueries = Queries<string>

export type ConfigParams = {
	columns: Array<string> | string // string is allowed as a comma separated list of columns
	includes?: Includes
}

export type ConfigCommons = {
	supabase: ConfigSupabase
	options: ConfigOptions
	queries: ConfigQueries
}

export function justTables(outSupa: string) {
	let isOn = false, text = ``
	outSupa.split('\n').forEach(line => {
		if (line.match("Tables: {")) {
			text += `export type Tables = {`
			isOn = true
		} else if (line.match("Views: {")) {
			isOn = false
		} else if (isOn) {
			text += `
			${line}`
		}
	})
	return text
}