import { createClient } from '@supabase/supabase-js';
import WebSocket from 'ws';
(global as any).WebSocket = WebSocket;

// Do not import from storage to avoid importing lib/supabase.ts
const supabase = createClient('https://dmvkoahefozxexgupfzp.supabase.co', 'sb_publishable_WwylAVxC7_WA5CcwFzrv8g_CElLo9md');

async function test() {
  const { data, error: selectErr } = await supabase.from('departments').select('*');
  console.log('Select Result length:', data?.length);

  if (data && data.length > 0) {
    const depToUpdate = { ...data[0], name: data[0].name + ' Test' };
    console.log('Attempting to upsert:', depToUpdate);
    const { error } = await supabase.from('departments').upsert(depToUpdate);
    console.log('Upsert Error:', error);
  }
}
test();
