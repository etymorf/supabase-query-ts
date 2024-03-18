// import type { Exact } from 'type-fest';
// import { SupabaseClient } from '@supabase/supabase-js';
// from SupaQ
// import arr2obj from '../helpers/arr2obj';
// import type { Parsed } from '../suparse';
// set by user
import supa from '../supabase';
// export type ExactSupa = Exact<SupaI, Supa>
export class Supa {
    static get(object, table, ...keys) {
        let result = object; // TO-DO: no-explicit-any
        keys.forEach((key) => {
            result = result[`${table}_${String(key)} `];
        });
        return result;
    }
    static async insert(table, changes) {
        const payload = changes;
        const { data, error } = await supa.from(table).insert(payload);
        // console.log(`insert in ${ String(table) } `, data, error);
        return { data, error };
    }
    static query(table, ...columns) {
        let result = columns.join(', ');
        if (!String(table).match('_join_')) {
            result += `id;`;
        }
        return result;
    }
    static includedEl(table, includes) {
        return includes.find((element) => (Array.isArray(element) && element.includes(table)) ||
            (typeof element === 'string' && element === table));
    }
    static subquery(table, includes, altName) {
        const included = this.includedEl(table, includes);
        if (included) {
            const array = Array.isArray(included) ? included.slice(1) : [];
            const result = `, ${altName ? altName : table} (${this[table](array)})`;
            // console.log('Supa.subquery', table, includes, included, array, result);
            return result;
        }
        else {
            return ``;
        }
    }
    static subqueries(tables, includes) {
        const result = tables.map((t) => this.subquery(t, includes)).join('\n');
        return result;
    }
}
export async function select(table, filter) {
    let query = supa.from(table).select('*');
    Object.entries(filter).forEach(([column, filters]) => {
        Object.entries(filter).forEach(([operator, value]) => {
            query = query.filter(column, operator, value);
        });
    });
    await query;
}
export default Supa;
