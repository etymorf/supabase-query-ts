// import { Primitive } from "type-fest"
import { Includes } from "./queries"
import { SupabaseClientOptions } from "@supabase/supabase-js"

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

export type ConfigSupabase =
	{
		key: string
		local?: boolean
		linked?: boolean
		clientOptions?: SupabaseClientOptions<"public" | undefined>
	}
	&
	({ dbUrl: string } | { projectId: string })


export type ConfigOptions = {
	/**
	 * whether column names are prefixed with table name: tablename_columnname
	 * (defaults to false)
	 */
	withPrefix?: boolean
	/**
	 * if Supabase CLI is installed globally, don't use this option, otherwise use your package manager (pnpm or npm supported now)
	 */
	executable?: 'npx' | 'pnpx' | null | ''
	/**
	 * the id column in your tables (defaults to "id")
	 */
	id?: "id" | null | string
	/**
	 * if you input a column name here, the .delete() method will perform a "soft delete" by setting the column to true ;
	 * if you don't use this option or set it to null, the .delete() method will perform a "hard delete"
	 */
	softDelete?: `is_deleted` | null
	/**
	 * adds tables.ts and tables.jsc.ts, 2 representations of your tables structure used internally which could be useful
	 */
	moreFiles?: boolean
}

export type Queries<T extends ConfigParams, O extends object = object> = {
	[Table in keyof O]: {
		[Version in keyof O[Table]]: T
	}
}

export type ConfigQueries<O extends object = object> = Queries<ConfigParams, O>
export type StringQueries<O extends object = object> = Queries<ConfigParams & { text: string }, O>

export type ConfigParams = {
	columns: Array<string>
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

