
export const dots = `..`
/**
 * @typedef {Object} ImportsHoles
 * @property {string} clientPath 
 */


/**
 * @param {ImportsHoles} holes
 */
export default (holes) => `

import type { Exact } from 'type-fest';

import { PostgrestFilterBuilder, PostgrestSingleResponse } from '@supabase/postgrest-js'
// import { SupabaseClient } from '@supabase/supabase-js';

// from SupaQ
import arr2obj from '${dots}/helpers/arr2obj.ts';
import type { Parsed } from '${dots}/suparse.ts';

// set by user
import supa from '${holes.clientPath}';

`