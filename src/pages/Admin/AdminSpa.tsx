import React, { useState, useEffect } from 'react';
import { getSpaServices, saveSpaServices, SpaService, getDepartments, saveDepartments, Department, getSettings, saveSettings, Settings } from '../../utils/storage';
import { Save, Trash2, Plus, Pencil, Upload } from 'lucide-react';
import Modal from '../../components/Modal';
import AdminGallery from '../../components/AdminGallery';
import AdminVideoUpload from '../../components/AdminVideoUpload';
import { compressImageToBase64 } from '../../utils/fileUpload';

const AdminSpa = () => {
  const [department, setDepartment] = useState<Department | null>(null);
  const [settings, setSettings] = useState<Settings | null>(null);
  const [services, setServices] = useState<SpaService[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<SpaService>({
    id: '', category: 'Soins du Corps', name: '', duration: '', desc: '', price: '', image: ''
  });

  useEffect(() => {
    getSpaServices().then(setServices);
    getDepartments().then(deps => setDepartment(deps.find(d => d.id === 'spa') || null));
    getSettings().then(setSettings);
  }, []);

  const handleDepChange = (field: keyof Department, value: any) => {
    if (department) setDepartment({ ...department, [field]: value });
  };

  const handleSettingsChange = (field: keyof Settings, value: string) => {
    if (settings) setSettings({ ...settings, [field]: value });
  };

  const openAdd = () => {
    setEditingId(null);
    setForm({ id: '', category: 'Soins du Corps', name: '', duration: '', desc: '', price: '', image: '' });
    setModalOpen(true);
  };

  const openEdit = (service: SpaService) => {
    setEditingId(service.id);
    setForm({ ...service });
    setModalOpen(true);
  };

  const handleSubmit = async () => {
    if (!form.name || !form.price) return;
    let newServices: SpaService[];
    if (editingId) {
      newServices = services.map(s => s.id === editingId ? { ...form } : s);
    } else {
      newServices = [...services, { ...form, id: `spa-${Date.now()}` }];
    }
    try {
      await saveSpaServices(newServices);
      setServices(newServices);
      setModalOpen(false);
    } catch (e: any) {
      alert('Erreur lors de la sauvegarde: ' + e.message);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Supprimer ce soin ?')) {
      const newServices = services.filter(s => s.id !== id);
      try {
        await saveSpaServices(newServices);
        setServices(newServices);
      } catch (e: any) {
        alert('Erreur lors de la suppression: ' + e.message);
      }
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const base64 = await compressImageToBase64(file);
        setForm(prev => ({ ...prev, image: base64 }));
      } catch { alert('Erreur lors du chargement de l\'image'); }
    }
  };

  const handleSave = async () => {
    try {
      await saveSpaServices(services);
      if (department) {
        const depsData = await getDepartments();
        await saveDepartments(depsData.map(d => d.id === 'spa' ? department : d));
      }
      if (settings) {
        await saveSettings(settings);
      }
      alert('Modifications enregistrées');
    } catch (e: any) {
      alert('Erreur lors de la sauvegarde: ' + e.message);
      console.error(e);
    }
  };

  const categories = ['Soins du Corps', 'Gommage', 'Épilation à la Cire', 'Beauté des Mains & Pieds', 'Jacuzzi & Sauna'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: '24px', fontFamily: 'var(--font-display)', color: '#C8A84B' }}>Gérer le Spa</h2>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button onClick={openAdd} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', backgroundColor: '#182030', color: '#EDE8DF', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <Plus size={16} /> Ajouter un soin
          </button>
          <button onClick={handleSave} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', backgroundColor: '#C8A84B', color: '#0C1018', borderRadius: '4px', fontWeight: 600 }}>
            <Save size={16} /> Enregistrer
          </button>
        </div>
      </div>

      {department && (
        <div style={{ backgroundColor: '#182030', padding: '24px', borderRadius: '8px' }}>
          <h3 style={{ fontSize: '18px', color: '#C8A84B', marginBottom: '16px' }}>Informations Générales</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            <div className="modal-field"><label className="modal-label">Numéro de contact</label><input className="modal-input" value={department.phone} onChange={e => handleDepChange('phone', e.target.value)} /></div>
            <div className="modal-field"><label className="modal-label">Horaires d'ouverture</label><input className="modal-input" value={department.hours} onChange={e => handleDepChange('hours', e.target.value)} /></div>
            <div className="modal-field"><label className="modal-label">Tarif adulte (FCFA)</label><input className="modal-input" value={department.priceAdult} onChange={e => handleDepChange('priceAdult', e.target.value)} /></div>
            <div className="modal-field"><label className="modal-label">Tarif enfant (FCFA)</label><input className="modal-input" value={department.priceChild} onChange={e => handleDepChange('priceChild', e.target.value)} /></div>
            <div style={{ gridColumn: 'span 2', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <label style={{ fontSize: '14px' }}>Statut (Ouvert/Fermé)</label>
              <input type="checkbox" checked={department.isOpen} onChange={e => handleDepChange('isOpen', e.target.checked)} style={{ width: '20px', height: '20px', accentColor: '#C8A84B' }} />
            </div>
          </div>
        </div>
      )}

      {department && (
        <AdminGallery 
          department={department} 
          onUpdate={async (images) => {
            handleDepChange('images', images);
            try {
              const depsData = await getDepartments();
              await saveDepartments(depsData.map(d => d.id === 'spa' ? { ...department, images } : d));
            } catch (e) {
              console.error(e);
            }
          }} 
        />
      )}

      {settings && (
        <div style={{ backgroundColor: '#182030', padding: '24px', borderRadius: '8px' }}>
          <h3 style={{ fontSize: '18px', color: '#C8A84B', marginBottom: '16px' }}>Vidéos Spa sur la page d'Accueil</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            <AdminVideoUpload 
              label="Média Spa 1" 
              mediaUrl={settings.spaVideo1Url} 
              onChange={v => handleSettingsChange('spaVideo1Url', v)} 
            />
            <AdminVideoUpload 
              label="Média Spa 2" 
              mediaUrl={settings.spaVideo2Url} 
              onChange={v => handleSettingsChange('spaVideo2Url', v)} 
            />
            <AdminVideoUpload 
              label="Média Spa 3" 
              mediaUrl={settings.spaVideo3Url} 
              onChange={v => handleSettingsChange('spaVideo3Url', v)} 
            />
          </div>
        </div>
      )}


      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {categories.map(cat => {
          const catServices = services.filter(s => s.category === cat);
          if (catServices.length === 0) return null;
          return (
            <div key={cat} style={{ backgroundColor: '#182030', borderRadius: '8px', padding: '24px' }}>
              <h3 style={{ fontSize: '18px', color: '#C8A84B', marginBottom: '16px' }}>{cat}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {catServices.map(service => (
                  <div key={service.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0C1018', padding: '16px', borderRadius: '4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      {service.image && <img src={service.image} alt="" style={{ width: '48px', height: '48px', borderRadius: '6px', objectFit: 'cover' }} />}
                      <div>
                        <div style={{ fontSize: '16px', fontWeight: 500 }}>{service.name} <span style={{ opacity: 0.5, fontSize: '12px', marginLeft: '8px' }}>({service.duration})</span></div>
                        <div style={{ fontSize: '14px', opacity: 0.7, marginTop: '4px' }}>{service.desc}</div>
                        <div style={{ fontSize: '14px', color: '#C8A84B', marginTop: '4px' }}>{service.price} FCFA</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button onClick={() => openEdit(service)} style={{ color: '#C8A84B', padding: '8px', opacity: 0.7 }}><Pencil size={18} /></button>
                      <button onClick={() => handleDelete(service.id)} style={{ color: '#E05A5A', padding: '8px', opacity: 0.8 }}><Trash2 size={18} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={editingId ? 'Modifier le soin' : 'Ajouter un soin'}>
        <div className="modal-row">
          <div className="modal-field"><label className="modal-label">Catégorie</label>
            <select className="modal-select" value={form.category} onChange={e => setForm({...form, category: e.target.value})}>
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
          <div className="modal-field"><label className="modal-label">Nom du soin</label><input className="modal-input" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Ex: Massage relaxant" /></div>
        </div>
        <div className="modal-row">
          <div className="modal-field"><label className="modal-label">Durée</label><input className="modal-input" value={form.duration} onChange={e => setForm({...form, duration: e.target.value})} placeholder="Ex: 60 min" /></div>
          <div className="modal-field"><label className="modal-label">Prix (FCFA)</label><input className="modal-input" value={form.price} onChange={e => setForm({...form, price: e.target.value})} placeholder="Ex: 30.000" /></div>
        </div>
        <div className="modal-field"><label className="modal-label">Description</label><textarea className="modal-textarea" value={form.desc} onChange={e => setForm({...form, desc: e.target.value})} rows={2} placeholder="Description du soin" /></div>
        <div className="modal-field">
          <label className="modal-label">Image</label>
          {form.image && <img src={form.image} alt="" className="modal-image-preview" />}
          <div className="modal-file-upload">
            <Upload size={24} className="upload-icon" />
            <span className="upload-text">Cliquez ou glissez une image ici</span>
            <span className="upload-hint">JPG, PNG — max 2 Mo recommandé</span>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </div>
        </div>
        <div className="modal-actions">
          <button className="modal-btn-cancel" onClick={() => setModalOpen(false)}>Annuler</button>
          <button className="modal-btn-confirm" onClick={handleSubmit}>{editingId ? 'Modifier' : 'Ajouter'}</button>
        </div>
      </Modal>
    </div>
  );
};

export default AdminSpa;
