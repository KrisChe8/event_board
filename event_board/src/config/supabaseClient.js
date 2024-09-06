import { createClient } from "@supabase/supabase-js";

// console.log(process.env);
// console.log(import.meta.env);
// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
// const supabaseKey = process.env.REACT_APP_ANON_KEY;

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
