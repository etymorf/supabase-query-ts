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
export function justTables(outSupa) {
    let isOn = false, text = ``;
    outSupa.split('\n').forEach(line => {
        if (line.match("Tables: {")) {
            text += `export type Tables = {`;
            isOn = true;
        }
        else if (line.match("Views: {")) {
            isOn = false;
        }
        else if (isOn) {
            text += `
			${line}`;
        }
    });
    return text;
}
