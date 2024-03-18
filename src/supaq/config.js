import environment from "../environment.js"; // 
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
