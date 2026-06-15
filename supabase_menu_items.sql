-- ==========================================
-- SCRIPT DE MIGRATION DU MENU (HARMONIE SIGNATURE)
-- ==========================================

-- 1. Créer la table menu_items
CREATE TABLE IF NOT EXISTS menu_items (
  id TEXT PRIMARY KEY,
  restaurant_id TEXT REFERENCES restaurants(id) ON DELETE CASCADE,
  category TEXT NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  price INTEGER NOT NULL,
  image TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Désactiver RLS
ALTER TABLE menu_items DISABLE ROW LEVEL SECURITY;

-- 3. Migrer les anciennes données du JSONB vers la nouvelle table (S'IL Y EN A)
INSERT INTO menu_items (id, restaurant_id, category, name, description, price, image)
SELECT 
  elem->>'id' as id,
  r.id as restaurant_id,
  elem->>'category' as category,
  elem->>'name' as name,
  elem->>'description' as description,
  (elem->>'price')::INTEGER as price,
  elem->>'image' as image
FROM restaurants r, jsonb_array_elements(r.menu) elem
ON CONFLICT (id) DO NOTHING;
