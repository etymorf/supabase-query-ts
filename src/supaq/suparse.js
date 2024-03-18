// suparse is a little magic on top of supabase-js
// that actually makes it really easy to interact with the DB
// I've never used any ORM before but it may bring similar functionality
// the biggest advantage: it adds methods directly to the result object
// the client wants to update a row ? get the row, then call .set()
// the client wants to delete the row ? get the row, then call .delete()
// ...
import sup from "./supabase.ts";
export function suparse(table, object) {
    const result = { ...object };
    if (object) {
        Object.entries(object).forEach(entry => {
            const column = String(entry[0]);
            const value = entry[1];
            if (Array.isArray(value)) {
                result[column] = value.map(v => {
                    if (typeof v === 'object') {
                        return suparse(String(column), v);
                    }
                    else {
                        return v;
                    }
                });
            }
            else if (typeof value === 'object') {
                result[column] = suparse(String(column), value);
            }
            else {
                result[column] = value;
            }
        });
    }
    // return result
    return parse(table, result);
}
export function parse(table, object) {
    const full_id = `${table}_id`;
    const id = object[full_id];
    // console.log('parse', full_id, id, table, object)
    return {
        ...object,
        __table: table,
        get(column) {
            const full = `${table}_${String(column)}`;
            const result = object[full];
            return result;
        },
        async set(column, value) {
            const full = `${table}_${String(column)}`;
            const result = await sup.from(table).update({ [full]: value }).eq(String(full_id), id).select(`${String(full_id)}, ${String(full)}`);
            // TO DO: find another solution (too demanding on network requests?)
            // await invalidateAll()
            return result;
        },
        async delete(options) {
            const isHard = options?.hard;
            let result;
            if (isHard) {
                result = await sup.from(table).delete().eq(String(full_id), id).select(String(full_id));
            }
            else {
                const full_is_deleted = `${table}_is_deleted`;
                const is_deleted = `is_deleted`;
                result = await this.set(is_deleted, true);
            }
            // TO DO: find another solution (too demanding on network requests?)
            // await invalidateAll()
            return result;
        }
        // async insert, async delete
    };
}
export function suparrse(table, arr) {
    return arr.map(o => (suparse(table, o)));
}
