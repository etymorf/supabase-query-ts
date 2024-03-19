// provided by the user
import { createClient } from "@supabase/supabase-js";
import environment from '../environment';
const supabaseClient = createClient(environment.SUPABASE_URL, environment.SUPABASE_ANON_KEY);
export default supabaseClient;
