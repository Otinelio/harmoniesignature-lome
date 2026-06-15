-- ==========================================
-- SCRIPT DE CONFIGURATION DU STOCKAGE (IMAGES) - HARMONIE SIGNATURE
-- ==========================================

-- 1. Créer le bucket "media" s'il n'existe pas et le rendre PUBLIC
INSERT INTO storage.buckets (id, name, public)
VALUES ('media', 'media', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- 2. Supprimer les anciennes règles si elles existent pour éviter les erreurs
DROP POLICY IF EXISTS "Public Access" ON storage.objects;
DROP POLICY IF EXISTS "Allow public uploads" ON storage.objects;
DROP POLICY IF EXISTS "Allow public updates" ON storage.objects;
DROP POLICY IF EXISTS "Allow public deletes" ON storage.objects;

-- 3. Créer une politique pour autoriser TOUT LE MONDE à lire (voir les images sur le site)
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING (bucket_id = 'media');

-- 4. Créer une politique pour autoriser l'UPLOAD (depuis l'admin)
CREATE POLICY "Allow public uploads"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'media');

-- 5. Créer une politique pour autoriser la MODIFICATION (depuis l'admin)
CREATE POLICY "Allow public updates"
ON storage.objects FOR UPDATE
USING (bucket_id = 'media');

-- 6. Créer une politique pour autoriser la SUPPRESSION (depuis l'admin)
CREATE POLICY "Allow public deletes"
ON storage.objects FOR DELETE
USING (bucket_id = 'media');
