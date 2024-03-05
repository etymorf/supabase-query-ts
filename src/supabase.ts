// provided by the user

import { SupabaseClient, createClient, type Session } from "@supabase/supabase-js";
import type { Database, DB } from './supagentypes'
import env from './env'

const supabaseClient: SupabaseClient = createClient<Database>(env.SUPABASE_URL, env.SUPABASE_ANON_KEY);

export default supabaseClient
