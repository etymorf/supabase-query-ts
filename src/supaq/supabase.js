// provided by the user
import { createClient } from "@supabase/supabase-js";
import environment from '../environment';
const supabaseClient = createClient(environment.SUPABASE_URL, environment.SUPABASE_ANON_KEY);
export default supabaseClient;
export const supaQConfig = {
    queries: {
        lex: {
            big: {
                columns: ["lang"],
                includes: [["lex_def", "def"], ["word_piece", "word"]]
            }
        },
    },
    supabase: {
        key: environment.SUPABASE_ANON_KEY,
        projectId: "qlqsvedhqhjowlpbylvq",
    }
};
