import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://figyfyathtfjztjtsjld.supabase.co';
const supabaseAnonKey = 'sb_publishable_LuJiOMKypMTvv8MM89brTA_feKXmLpy';

// Option to bypass the WebSocket error in Node.js 18 environments
const options = {};
if (typeof window === 'undefined' && !(globalThis as any).WebSocket) {
  (globalThis as any).WebSocket = class DummyWebSocket {
    constructor() {}
    send() {}
    close() {}
    addEventListener() {}
    removeEventListener() {}
  };
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, options);
