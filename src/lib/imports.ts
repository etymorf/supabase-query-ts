
export const dots = `../lib`

export default () => `

import { PostgrestFilterBuilder, PostgrestSingleResponse } from '@supabase/postgrest-js'
import { SupabaseClient, createClient } from '@supabase/supabase-js';

// from SupaQ
import type { ConfigCommons, StringQueries } from '${dots}/util';

`