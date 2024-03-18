/**
 * chooses between SupaColumn and SupaColumnPre
 */
export function pre(t, context) {
    if (context?.withPrefix) {
        return `${t}Pre`;
    }
    else {
        return `${t}`;
    }
}
