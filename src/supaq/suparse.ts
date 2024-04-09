// TODO: integrate suparse into the package

// suparse is a little magic on top of supabase-js
// that actually makes it really easy to interact with the DB
// I've never used any ORM before but it may bring similar functionality
// the biggest advantage: it adds methods directly to the result object
// the client wants to update a row ? get the row, then call .set()
// the client wants to delete the row ? get the row, then call .delete()
// ...


// suparse

import type { PostgrestSingleResponse } from "@supabase/supabase-js"
import type { SupaTable, SupaColumn, SupaValue } from './gen/supaq'
import { client as sup } from './gen/supaq'

export type Parsed<Table extends SupaTable, O extends object> = {
	__table: Table
	get<C extends SupaColumn<Table>>(column: C): SupaValue<Table, C>
	set<C extends SupaColumn<Table>>(column: C, value: SupaValue<Table, C>): Promise<PostgrestSingleResponse<any>>
	delete(): Promise<PostgrestSingleResponse<any>>
} & {
		[K in keyof O]?: O[K] extends (infer U)[] ? Parsed<K extends SupaTable ? K : SupaTable, U extends object ? U : object>[] : O[K] extends object ? Parsed<K extends SupaTable ? K : SupaTable, O[K]> : object
		// [K in keyof O]?: O[K] extends object ? Parsed<K extends SupaTable ? K : SupaTable, O[K]> : O[K] extends (infer U)[] ? Parsed<K extends SupaTable ? K : SupaTable, U extends object ? U : object>[] : object
	}

export function suparse<Table extends SupaTable, O extends object>(table: Table, object: O): Parsed<Table, O> {
	// @ts-ignore
	const result: Parsed<Table, O> = { ...object }
	if (object) {
		Object.entries(object).forEach(entry => {
			const column = String(entry[0]) as keyof O
			const value = entry[1]
			if (Array.isArray(value)) {
				// @ts-ignore
				result[column] = value.map(v => {
					if (typeof v === 'object') {
						return suparse(String(column) as SupaTable, v) as Parsed<typeof column extends SupaTable ? typeof column : SupaTable, typeof v>
					} else {
						return v
					}
				})
			} else if (typeof value === 'object') {
				// @ts-ignore
				result[column] = suparse(String(column) as SupaTable, value)
			} else {
				result[column] = value
			}
		})
	}
	// return result
	return parse(table, result)
}

export function parse<Table extends SupaTable, O extends object>(table: Table, object: O) {
	const full_id = `${table}_id` as keyof O
	const id = object[full_id]
	// console.log('parse', full_id, id, table, object)
	return {
		...object,
		__table: table,
		get<C extends SupaColumn<Table>>(column: C) {
			const full = `${table}_${String(column)} ` as keyof O
			const result = object[full]
			return result
		},
		async set<C extends SupaColumn<Table>>(column: C, value: any) {
			const full = `${table}_${String(column)} ` as keyof O
			const result = await sup.from(table).update({ [full]: value }).eq(String(full_id), id).select(`${String(full_id)}, ${String(full)} `)

			return result
		},
		async delete(options?: { hard?: boolean }) {

			const isHard = options?.hard
			let result: PostgrestSingleResponse<any>
			if (isHard) {
				result = await sup.from(table).delete().eq(String(full_id), id).select(String(full_id))
			} else {

				const is_deleted = `is_deleted` as SupaColumn<Table>
				result = await this.set(is_deleted, true)
			}
			// TO DO: find another solution (too demanding on network requests?)
			// await invalidateAll()

			return result
		}
		// async insert, async delete
	}
}

export function suparrse<Table extends SupaTable, O extends object>(table: Table, arr: O[]) {
	return arr.map(o => (suparse(table, o)))
}
