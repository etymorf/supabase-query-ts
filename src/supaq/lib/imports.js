export const dots = `..`;
export default () => `

import type { Exact } from 'type-fest';

import { PostgrestFilterBuilder, PostgrestSingleResponse } from '@supabase/postgrest-js'
import { SupabaseClient, createClient } from '@supabase/supabase-js';

// from SupaQ
import arr2obj from '${dots}/helpers/arr2obj.js';
import type { Parsed } from '${dots}/suparse';
import type { ConfigCommons } from '${dots}/util'

`;
