import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://figyfyathtfjztjtsjld.supabase.co';
const supabaseAnonKey = 'sb_publishable_LuJiOMKypMTvv8MM89brTA_feKXmLpy';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
