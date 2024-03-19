import { parseSchema } from "./jsc.js";
import tablesJsc from "../gen/tables.jsc.js";
import * as fs from 'fs'
import { encoder } from "./path.js";
const parsed = parseSchema(tablesJsc)

fs.writeFileSync('../gen/tables.parsed.json', JSON.stringify(parsed), encoder)