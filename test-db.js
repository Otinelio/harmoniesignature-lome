import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dmvkoahefozxexgupfzp.supabase.co';
const supabaseAnonKey = 'sb_publishable_WwylAVxC7_WA5CcwFzrv8g_CElLo9md';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function test() {
  const { data: s, error: se } = await supabase.from('settings').select('*');
  console.log('Settings:', JSON.stringify(s, null, 2), se);
  const { data: d, error: de } = await supabase.from('departments').select('*');
  console.log('Departments:', JSON.stringify(d, null, 2), de);
}
test();
