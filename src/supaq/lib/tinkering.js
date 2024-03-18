import { zoneDelimitersReg } from "./zoneDelimiters.js";
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
export function getUserQueries(currentQueries) {
    let isOn = false;
    let queries = null;
    currentQueries.split('\n').forEach((line, index) => {
        if (line.match(zoneDelimitersReg.start)) {
            isOn = true;
        }
        if (isOn) {
            if (!queries)
                queries = ``;
            queries += `
				${line}
			`;
        }
        if (line.match(zoneDelimitersReg.stop)) {
            isOn = false;
        }
    });
    return queries;
}
