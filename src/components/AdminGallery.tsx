import React from 'react';
import { Department } from '../utils/storage';
import { Trash2, Upload } from 'lucide-react';
import { compressImageToBase64 } from '../utils/fileUpload';

interface AdminGalleryProps {
  department: Department;
  onUpdate: (images: string[]) => void;
}

const AdminGallery: React.FC<AdminGalleryProps> = ({ department, onUpdate }) => {
  const images = department.images || [];

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    try {
      const newImages = [...images];
      for (let i = 0; i < files.length; i++) {
        const base64 = await compressImageToBase64(files[i]);
        newImages.push(base64);
      }
      onUpdate(newImages);
    } catch (err) {
      alert("Erreur lors du chargement des images.");
    }
  };

  const handleDelete = (index: number) => {
    if (confirm("Supprimer cette image de la galerie ?")) {
      const newImages = [...images];
      newImages.splice(index, 1);
      onUpdate(newImages);
    }
  };

  return (
    <div style={{ backgroundColor: '#182030', padding: '24px', borderRadius: '8px', marginTop: '24px' }}>
      <h3 style={{ fontSize: '18px', color: '#C8A84B', marginBottom: '16px' }}>Galerie d'images</h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        {images.map((img, idx) => (
          <div key={idx} style={{ position: 'relative', aspectRatio: '1', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#0C1018' }}>
            <img src={img} alt={`Gallery ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <button 
              onClick={() => handleDelete(idx)}
              style={{ position: 'absolute', top: '8px', right: '8px', backgroundColor: 'rgba(224, 90, 90, 0.9)', color: 'white', padding: '6px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}
            >
              <Trash2 size={14} />
            </button>
          </div>
        ))}
      </div>

      <div className="modal-file-upload" style={{ position: 'relative' }}>
        <Upload size={24} className="upload-icon" />
        <span className="upload-text">Ajouter de nouvelles images</span>
        <span className="upload-hint">Vous pouvez sélectionner plusieurs fichiers (JPG, PNG)</span>
        <input type="file" multiple accept="image/*" onChange={handleImageUpload} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }} />
      </div>
    </div>
  );
};

export default AdminGallery;
