
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
	projectId?: string
	local?: boolean
	linked?: boolean
	dbUrl?: string
}

export type ConfigOptions = {
	withPrefix?: boolean
	executable?: 'npx' | 'pnpx' | null | ''
}

export type ConfigCommons = {
	supabase: ConfigSupabase
	options: ConfigOptions
}