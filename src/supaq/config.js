import environment from "../environment.js";
const config = {
    queries: {
        def: {
            big: {
                columns: ["deu"],
                includes: {}
            }
        },
        piece: {
            huge: {
                columns: ["def", "id"],
                includes: {}
            }
        },
    },
    supabase: {
        key: environment.SUPABASE_ANON_KEY,
        projectId: environment.SUPABASE_PROJECT_ID
    },
    options: {
        executable: ``,
        id: `id`
    }
};
export default config;
