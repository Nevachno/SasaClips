const SUPABASE_URL =
    "https://oudxsihtfvfhyglqqarq.supabase.co/rest/v1/";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_7jN-tI3jAfuendFXY61JJg_B6fvk5Zi";


const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );

    console.log(
    "Supabase подключён:",
    supabaseClient
);