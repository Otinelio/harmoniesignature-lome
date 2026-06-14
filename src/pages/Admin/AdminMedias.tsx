import React, { useState, useEffect } from 'react';
import { getSettings, saveSettings, Settings } from '../../utils/storage';
import { Save, Upload, Trash2, Image } from 'lucide-react';
import { compressImageToBase64 } from '../../utils/fileUpload';

type MediaStore = Record<string, string[]>;

const DEPARTMENTS = [
  { key: 'spa', label: 'Spa & Soins' },
  { key: 'bowling', label: 'Bowling' },
  { key: 'piscine', label: 'Piscine' },
  { key: 'gym', label: 'Gym' },
  { key: 'sports', label: 'Sports' },
  { key: 'restauration', label: 'Restauration' },
];

const AdminMedias = () => {
  const [activeDep, setActiveDep] = useState('spa');
  const [media, setMedia] = useState<MediaStore>({});

  useEffect(() => {
    try {
      const stored = localStorage.getItem('hs_admin_media');
      if (stored) setMedia(JSON.parse(stored));
    } catch {}
  }, []);

  const saveMedia = (newMedia: MediaStore) => {
    setMedia(newMedia);
    try { localStorage.setItem('hs_admin_media', JSON.stringify(newMedia)); }
    catch (e) { alert('Espace de stockage insuffisant. Supprimez des images.'); }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const newImages: string[] = [];
    for (let i = 0; i < files.length; i++) {
      try {
        const b64 = await compressImageToBase64(files[i], 600);
        newImages.push(b64);
      } catch { /* skip */ }
    }
    const current = media[activeDep] || [];
    saveMedia({ ...media, [activeDep]: [...current, ...newImages] });
    e.target.value = '';
  };

  const handleDeleteImage = (index: number) => {
    const current = media[activeDep] || [];
    saveMedia({ ...media, [activeDep]: current.filter((_, i) => i !== index) });
  };

  const currentImages = media[activeDep] || [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', borderBottom: '1px solid #182030', paddingBottom: '16px' }}>
        {DEPARTMENTS.map(dep => (
          <button key={dep.key} onClick={() => setActiveDep(dep.key)} style={{ fontSize: '12px', fontFamily: 'var(--font-body)', textTransform: 'uppercase', color: activeDep === dep.key ? '#C8A84B' : '#EDE8DF', opacity: activeDep === dep.key ? 1 : 0.5, paddingBottom: '8px', borderBottom: activeDep === dep.key ? '2px solid #C8A84B' : '2px solid transparent', transition: 'all 0.2s' }}>
            {dep.label}
          </button>
        ))}
      </div>

      <div style={{ backgroundColor: '#182030', padding: '24px', borderRadius: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '18px', color: '#C8A84B', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Image size={20} /> Images — {DEPARTMENTS.find(d => d.key === activeDep)?.label}
          </h3>
          <span style={{ fontSize: '12px', opacity: 0.5 }}>{currentImages.length} image(s)</span>
        </div>

        <div className="modal-file-upload" style={{ marginBottom: '24px' }}>
          <Upload size={24} className="upload-icon" />
          <span className="upload-text">Cliquez pour uploader des images</span>
          <span className="upload-hint">JPG, PNG — plusieurs fichiers possibles — max 2 Mo chacun</span>
          <input type="file" accept="image/*" multiple onChange={handleUpload} />
        </div>

        {currentImages.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '12px' }}>
            {currentImages.map((img, i) => (
              <div key={i} style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', aspectRatio: '1' }}>
                <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <button onClick={() => handleDeleteImage(i)} style={{ position: 'absolute', top: '6px', right: '6px', backgroundColor: 'rgba(0,0,0,0.7)', color: '#E05A5A', padding: '6px', borderRadius: '6px', transition: 'background 0.2s' }}>
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>
        )}

        {currentImages.length === 0 && (
          <div style={{ textAlign: 'center', padding: '48px', opacity: 0.4 }}>
            <Image size={48} style={{ marginBottom: '12px' }} />
            <p>Aucune image pour ce département</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminMedias;
