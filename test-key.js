import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ohmhfksoslpqblixarhp.supabase.co';
const supabaseAnonKey = 'sb_publishable_okYEU2pV5Yz-B1Di-euRcA_lmcFGRWo';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function test() {
  console.log('Testing Supabase connection...');
  const { data, error } = await supabase.from('departments').select('*').limit(1);
  if (error) {
    console.error('Error connecting to Supabase:', error);
  } else {
    console.log('Success! Data:', data);
  }
}

test();
