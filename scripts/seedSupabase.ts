import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import WebSocket from 'ws';

// Set global WebSocket BEFORE any supabase client is created
(global as any).WebSocket = WebSocket;
(globalThis as any).WebSocket = WebSocket;
dotenv.config({ path: '.env' });

const supabaseUrl = 'https://ohmhfksoslpqblixarhp.supabase.co';
const supabaseKey = 'sb_publishable_okYEU2pV5Yz-B1Di-euRcA_lmcFGRWo';
const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
  const storage = await import('../src/utils/storage');
  
  console.log("Seeding departments...");
  const res1 = await supabase.from('departments').upsert(storage.DEFAULT_DEPARTMENTS);
  if (res1.error) throw res1.error;
  console.log("Seeding restaurants...");
  const res2 = await supabase.from('restaurants').upsert(storage.DEFAULT_RESTAURANTS);
  if (res2.error) throw res2.error;
  console.log("Seeding settings...");
  const res3 = await supabase.from('settings').upsert({ id: 1, ...storage.DEFAULT_SETTINGS });
  if (res3.error) throw res3.error;
  console.log("Seeding faq...");
  const res4 = await supabase.from('faq').upsert(storage.DEFAULT_FAQ);
  if (res4.error) throw res4.error;
  console.log("Seeding spa services...");
  const res5 = await supabase.from('spa_services').upsert(storage.DEFAULT_SPA_SERVICES);
  if (res5.error) throw res5.error;
  console.log("Seeding bowling plans...");
  const res6 = await supabase.from('bowling_plans').upsert(storage.DEFAULT_BOWLING_PLANS);
  if (res6.error) throw res6.error;
  console.log("Seeding pool plans...");
  const res7 = await supabase.from('pool_plans').upsert(storage.DEFAULT_POOL_PLANS);
  if (res7.error) throw res7.error;
  console.log("Seeding gym plans...");
  const res8 = await supabase.from('gym_plans').upsert(storage.DEFAULT_GYM_PLANS);
  if (res8.error) throw res8.error;
  console.log("Seeding sport services...");
  const res9 = await supabase.from('sport_services').upsert(storage.DEFAULT_SPORT_SERVICES);
  if (res9.error) throw res9.error;
  
  console.log("Database seeded successfully!");
}

seed().catch(err => {
  console.error("Error during seeding:", err);
  process.exit(1);
});
