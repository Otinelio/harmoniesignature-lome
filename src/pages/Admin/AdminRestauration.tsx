import React, { useState, useEffect } from 'react';
import { getRestaurants, saveRestaurants, Restaurant, MenuItem } from '../../utils/storage';
import { Save, Trash2, Plus, Pencil, Upload } from 'lucide-react';
import Modal from '../../components/Modal';
import { compressImageToBase64 } from '../../utils/fileUpload';

const AdminRestauration = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [activeTab, setActiveTab] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<MenuItem>({ id: '', name: '', category: 'Entrée', description: '', price: 0, image: '' });

  useEffect(() => { setRestaurants(getRestaurants()); }, []);

  const handleRestChange = (field: keyof Restaurant, value: any) => {
    const nr = [...restaurants]; nr[activeTab] = { ...nr[activeTab], [field]: value }; setRestaurants(nr);
  };

  const openAdd = () => { setEditingId(null); setForm({ id: '', name: '', category: 'Entrée', description: '', price: 0, image: '' }); setModalOpen(true); };

  const openEdit = (item: MenuItem) => { setEditingId(item.id); setForm({ ...item }); setModalOpen(true); };

  const handleSubmit = () => {
    if (!form.name || !form.price) return;
    const nr = [...restaurants];
    if (editingId) {
      nr[activeTab].menu = nr[activeTab].menu.map(i => i.id === editingId ? { ...form } : i);
    } else {
      nr[activeTab].menu = [...nr[activeTab].menu, { ...form, id: `item-${Date.now()}` }];
    }
    setRestaurants(nr);
    setModalOpen(false);
  };

  const handleDelete = (itemId: string) => {
    if (!confirm('Supprimer ce plat ?')) return;
    const nr = [...restaurants]; nr[activeTab].menu = nr[activeTab].menu.filter(i => i.id !== itemId); setRestaurants(nr);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) { try { const b64 = await compressImageToBase64(file); setForm(prev => ({ ...prev, image: b64 })); } catch { alert('Erreur image'); } }
  };

  const handleSave = () => { saveRestaurants(restaurants); alert('Modifications enregistrées'); };

  if (restaurants.length === 0) return null;
  const cur = restaurants[activeTab];
  const categories = ['Entrée', 'Pizza', 'Plat & Grillade', 'Sandwich & Burger', 'Accompagnement', 'Menu Enfant', 'Dessert', 'Boisson'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', gap: '16px', borderBottom: '1px solid #182030', paddingBottom: '16px' }}>
        {restaurants.map((r, i) => (
          <button key={r.id} onClick={() => setActiveTab(i)} style={{ fontSize: '12px', fontFamily: 'var(--font-body)', textTransform: 'uppercase', color: activeTab === i ? '#C8A84B' : '#EDE8DF', opacity: activeTab === i ? 1 : 0.5, paddingBottom: '8px', borderBottom: activeTab === i ? '2px solid #C8A84B' : '2px solid transparent', transition: 'all 0.2s' }}>{r.name}</button>
        ))}
      </div>

      <div style={{ backgroundColor: '#182030', padding: '24px', borderRadius: '8px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
        <div className="modal-field"><label className="modal-label">Nom</label><input className="modal-input" value={cur.name} onChange={e => handleRestChange('name', e.target.value)} /></div>
        <div className="modal-field"><label className="modal-label">WhatsApp</label><input className="modal-input" value={cur.whatsapp} onChange={e => handleRestChange('whatsapp', e.target.value)} /></div>
        <div className="modal-field"><label className="modal-label">Horaires</label><input className="modal-input" value={cur.hours} onChange={e => handleRestChange('hours', e.target.value)} /></div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '24px' }}><label style={{ fontSize: '14px' }}>Statut</label><input type="checkbox" checked={cur.isOpen} onChange={e => handleRestChange('isOpen', e.target.checked)} style={{ width: '20px', height: '20px', accentColor: '#C8A84B' }} /></div>
        <div style={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={handleSave} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', backgroundColor: '#C8A84B', color: '#0C1018', borderRadius: '4px', fontWeight: 600 }}><Save size={16} /> Enregistrer</button>
        </div>
      </div>

      <div style={{ backgroundColor: '#182030', padding: '24px', borderRadius: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-display)', color: '#C8A84B' }}>Gérer le menu</h3>
          <button onClick={openAdd} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', backgroundColor: '#0C1018', color: '#EDE8DF', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}><Plus size={16} /> Ajouter un plat</button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {categories.map(cat => {
            const ci = cur.menu.filter(i => i.category === cat);
            if (!ci.length) return null;
            return (<div key={cat} style={{ marginBottom: '16px' }}>
              <h4 style={{ fontSize: '14px', color: '#C8A84B', marginBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '4px' }}>{cat}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {ci.map(item => (<div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0C1018', padding: '12px 16px', borderRadius: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {item.image && <img src={item.image} alt="" style={{ width: '40px', height: '40px', borderRadius: '4px', objectFit: 'cover' }} />}
                    <div><div style={{ fontSize: '16px', fontWeight: 500 }}>{item.name}</div>
                      <div style={{ fontSize: '13px', opacity: 0.7, marginTop: '2px' }}>{item.description}</div>
                      <div style={{ fontSize: '14px', color: '#C8A84B', marginTop: '4px' }}>{item.price.toLocaleString('fr-FR')} FCFA</div></div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={() => openEdit(item)} style={{ color: '#C8A84B', padding: '8px', opacity: 0.7 }}><Pencil size={18} /></button>
                    <button onClick={() => handleDelete(item.id)} style={{ color: '#E05A5A', padding: '8px', opacity: 0.8 }}><Trash2 size={20} /></button>
                  </div>
                </div>))}
              </div>
            </div>);
          })}
        </div>
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={editingId ? 'Modifier le plat' : 'Ajouter un plat'}>
        <div className="modal-row">
          <div className="modal-field"><label className="modal-label">Catégorie</label><select className="modal-select" value={form.category} onChange={e => setForm({...form, category: e.target.value})}>{categories.map(c => <option key={c} value={c}>{c}</option>)}</select></div>
          <div className="modal-field"><label className="modal-label">Nom</label><input className="modal-input" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Ex: Pizza Margarita" /></div>
        </div>
        <div className="modal-field"><label className="modal-label">Prix (FCFA)</label><input className="modal-input" type="number" value={form.price || ''} onChange={e => setForm({...form, price: parseInt(e.target.value) || 0})} placeholder="Ex: 5000" /></div>
        <div className="modal-field"><label className="modal-label">Description</label><textarea className="modal-textarea" value={form.description} onChange={e => setForm({...form, description: e.target.value})} rows={2} /></div>
        <div className="modal-field">
          <label className="modal-label">Image du plat</label>
          {form.image && <img src={form.image} alt="" className="modal-image-preview" />}
          <div className="modal-file-upload"><Upload size={24} className="upload-icon" /><span className="upload-text">Cliquez ou glissez une image</span><span className="upload-hint">JPG, PNG — max 2 Mo</span><input type="file" accept="image/*" onChange={handleImageUpload} /></div>
        </div>
        <div className="modal-actions"><button className="modal-btn-cancel" onClick={() => setModalOpen(false)}>Annuler</button><button className="modal-btn-confirm" onClick={handleSubmit}>{editingId ? 'Modifier' : 'Ajouter'}</button></div>
      </Modal>
    </div>
  );
};

export default AdminRestauration;
