// provided by the user
import { SupabaseClient, createClient, type Session } from "@supabase/supabase-js";
import type { Database, DB, SupaColumn, SupaTable, Includes } from './gen/supaq'
import environment from '../environment'

const supabaseClient: SupabaseClient = createClient<Database>(environment.SUPABASE_URL, environment.SUPABASE_ANON_KEY);

export default supabaseClient

// WIP
// type Query + Config will be exported by supaq
type Query<Table extends SupaTable> = {
	columns: Array<SupaColumn<Table>>
	relations?: Array<SupaTable> // but relations are already defined by schema so users should only focus on providing includes:Includes and the columns
	includes: Includes
}

export type Config = {
	queries: {
		[T in SupaTable]?: {
			[Version: string]: Query<T>
		}
	}
	supabase: {
		key: string
		projectId?: string
		local?: boolean
		linked?: boolean
		dbUrl?: string
	}
	options?: {
		withPrefix?: boolean
		executable?: 'npx' | 'pnpx' | null | ''
	}
}

export const supaQConfig: Config = {
	queries: {
		lex: {
			big: {
				columns: ["lang"],
				includes: [["lex_def", "def"], ["word_piece", "word"]]
			}
		},
	},
	supabase: {
		key: environment.SUPABASE_ANON_KEY,
		projectId: "qlqsvedhqhjowlpbylvq",
	}
}