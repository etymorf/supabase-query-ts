import { parseSchema } from "./lib/jsc.js";
import tablesJsc from "./gen/tables.jsc.js";
import * as fs from 'fs'
import { encoder } from "./lib/path.js";
import config from "./lib/config.js";
import { SupaGen } from "./lib/queries.js";

// @ts-ignore
const parsed = parseSchema(tablesJsc)
fs.writeFileSync('../gen/tables.parsed.json', JSON.stringify(parsed), encoder)

// @ts-ignore
const types = SupaGen.dataTypes(config.queries, parsed)
fs.writeFileSync('../gen/result_types.ts', types, encoder)

// @ts-ignore
const queries = SupaGen.queriesText(config.queries, config.queries.def.big)
fs.writeFileSync('../gen/test_query.json', JSON.stringify(queries), encoder)