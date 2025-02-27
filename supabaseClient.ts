import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://supabase.com/dashboard/project/okmgjxacmgmkppdqmrup/sql/76bdd1c8-eafc-4f38-a0b6-7f4cc1325d36';
const SUPABASE_ANON_KEY = 'your-anon-key';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
