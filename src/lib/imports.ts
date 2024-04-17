
export const dots = `../lib`
export const packageName = `supabase-query-ts`
export default () => `

import type { PostgrestFilterBuilder } from '@supabase/postgrest-js'
import { SupabaseClient, createClient } from '@supabase/supabase-js';

// from SupaQ
import type { ConfigCommons, StringQueries } from '${packageName}';

`