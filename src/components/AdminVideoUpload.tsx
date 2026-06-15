import React from 'react';
import { Trash2, Film, Image as ImageIcon, RefreshCw } from 'lucide-react';

interface AdminVideoUploadProps {
  label: string;
  mediaUrl?: string;
  onChange: (base64OrUrl: string) => void;
}

const AdminVideoUpload: React.FC<AdminVideoUploadProps> = ({ label, mediaUrl, onChange }) => {
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 50 * 1024 * 1024) {
      alert("Le fichier est trop volumineux. Veuillez choisir un fichier de moins de 50 Mo.");
      return;
    }

    try {
      // Afficher un état de chargement serait idéal ici, mais on va simplifier
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      
      const { supabase } = await import('../lib/supabase');
      
      const { error: uploadError } = await supabase.storage
        .from('media')
        .upload(fileName, file, { cacheControl: '3600', upsert: false });
        
      if (uploadError) throw uploadError;
      
      const { data: { publicUrl } } = supabase.storage
        .from('media')
        .getPublicUrl(fileName);
        
      onChange(publicUrl);
    } catch (err) {
      console.error(err);
      alert("Erreur lors du téléchargement vers Supabase.");
    }
  };

  const handleClear = () => {
    if (confirm("Supprimer ce média ?")) {
      onChange('');
    }
  };

  const isVideo = mediaUrl?.startsWith('data:video') || mediaUrl?.endsWith('.mp4') || mediaUrl?.endsWith('.webm');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label style={{ fontSize: '14px', opacity: 0.8, color: '#C8A84B' }}>{label}</label>
      
      {mediaUrl ? (
        <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#0C1018', border: '1px solid rgba(255,255,255,0.1)' }}>
          {isVideo ? (
            <video src={mediaUrl} controls style={{ width: '100%', maxHeight: '300px', objectFit: 'contain', display: 'block' }} />
          ) : (
            <img src={mediaUrl} alt="Média" style={{ width: '100%', maxHeight: '300px', objectFit: 'contain', display: 'block' }} />
          )}
          
          <div style={{ position: 'absolute', top: '12px', right: '12px', display: 'flex', gap: '8px' }}>
            <label style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(4px)', color: 'white', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', transition: 'all 0.2s' }} className="hover-btn">
              <RefreshCw size={16} />
              <span style={{ fontSize: '13px', fontWeight: 600 }}>Remplacer</span>
              <input type="file" accept="video/*,image/*" onChange={handleFileUpload} style={{ display: 'none' }} />
            </label>
            <button 
              onClick={handleClear}
              style={{ backgroundColor: 'rgba(224, 90, 90, 0.9)', color: 'white', padding: '8px 12px', borderRadius: '4px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', transition: 'all 0.2s' }}
            >
              <Trash2 size={16} />
              <span style={{ fontSize: '13px', fontWeight: 600 }}>Supprimer</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="modal-file-upload" style={{ position: 'relative', padding: '40px 20px', textAlign: 'center', border: '2px dashed rgba(255, 255, 255, 0.2)', borderRadius: '8px', backgroundColor: '#0C1018', transition: 'all 0.3s' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '16px', color: 'rgba(255, 255, 255, 0.4)' }}>
            <Film size={36} />
            <ImageIcon size={36} />
          </div>
          <div style={{ color: '#fff', fontSize: '15px', marginBottom: '8px', fontWeight: 500 }}>Cliquez pour ajouter un fichier depuis votre PC</div>
          <div style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '13px' }}>Fichiers Vidéo ou Image acceptés (Max 50 Mo)</div>
          <input 
            type="file" 
            accept="video/*,image/*" 
            onChange={handleFileUpload} 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }} 
          />
        </div>
      )}
    </div>
  );
};

export default AdminVideoUpload;
