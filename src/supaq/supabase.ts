// provided by the user
import { SupabaseClient, createClient, type Session } from "@supabase/supabase-js";
import type { Database, DB, SupaColumn, SupaTable, Includes } from './gen/supaq'
import environment from '../environment'

const supabaseClient: SupabaseClient = createClient<Database>(environment.SUPABASE_URL, environment.SUPABASE_ANON_KEY);

export default supabaseClient
