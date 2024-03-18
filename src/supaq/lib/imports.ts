
export const dots = `..`

type ImportsHoles = {
	clientPath: string
}

export default (holes: ImportsHoles) => `

import type { Exact } from 'type-fest';

import { PostgrestFilterBuilder, PostgrestSingleResponse } from '@supabase/postgrest-js'
// import { SupabaseClient } from '@supabase/supabase-js';

// from SupaQ
import arr2obj from '${dots}/helpers/arr2obj';
import type { Parsed } from '${dots}/suparse';

// set by user
import supa from '${holes.clientPath}';
/* 
replaced by config.supabase: 
{
	key: string
	projectId?: string
	local?: boolean
	linked?: boolean
	dbUrl?: string
}
*/
`