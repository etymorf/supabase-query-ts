import environment from "../environment.js"; // as weird as it seems, importing from a .js is what's best
const config = {
    queries: {
        def: {
            big: {
                columns: ["deu"],
                includes: ["lex_def"]
            }
        }
    },
    supabase: {
        key: environment.SUPABASE_ANON_KEY
    }
};
export default config;
