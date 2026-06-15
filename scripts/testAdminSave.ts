import { createClient } from '@supabase/supabase-js';
import WebSocket from 'ws';
(global as any).WebSocket = WebSocket;

const supabase = createClient('https://dmvkoahefozxexgupfzp.supabase.co', 'sb_publishable_WwylAVxC7_WA5CcwFzrv8g_CElLo9md');

async function test() {
  console.log("Fetching departments...");
  const { data: deps, error: err1 } = await supabase.from('departments').select('*');
  if (err1) { console.error("Error fetching", err1); return; }
  
  if (!deps || deps.length === 0) {
    console.error("No departments found in DB!");
    return;
  }
  
  const dep = deps[0];
  const oldName = dep.name;
  dep.name = oldName + ' - Edited';
  console.log(`Updating ${dep.id} from '${oldName}' to '${dep.name}'`);
  
  console.log("Upserting...");
  const { error: err2 } = await supabase.from('departments').upsert(deps);
  if (err2) { console.error("Upsert failed:", err2); return; }
  console.log("Upsert succeeded!");
  
  console.log("Fetching again to verify...");
  const { data: newDeps, error: err3 } = await supabase.from('departments').select('*');
  if (err3) { console.error("Error fetching", err3); return; }
  const newDep = newDeps.find(d => d.id === dep.id);
  console.log(`Fetched name: '${newDep?.name}'`);
  
  // Revert
  dep.name = oldName;
  await supabase.from('departments').upsert(deps);
}

test();
