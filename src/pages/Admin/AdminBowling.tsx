import React, { useState, useEffect } from 'react';
import { getBowlingPlans, saveBowlingPlans, BowlingPlan, getDepartments, saveDepartments, Department } from '../../utils/storage';
import { Save, Trash2, Plus, Pencil, Upload } from 'lucide-react';
import Modal from '../../components/Modal';
import { compressImageToBase64 } from '../../utils/fileUpload';

const AdminBowling = () => {
  const [department, setDepartment] = useState<Department | null>(null);
  const [plans, setPlans] = useState<BowlingPlan[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<BowlingPlan>({ id: '', badge: '', name: '', tagline: '', price: '', features: [], highlight: false, image: '' });
  const [newFeature, setNewFeature] = useState('');

  useEffect(() => {
    setPlans(getBowlingPlans());
    const deps = getDepartments();
    setDepartment(deps.find(d => d.id === 'bowling') || null);
  }, []);

  const handleDepChange = (field: keyof Department, value: any) => {
    if (department) setDepartment({ ...department, [field]: value });
  };

  const openAdd = () => {
    setEditingId(null);
    setForm({ id: '', badge: '', name: '', tagline: '', price: '', features: [], highlight: false, image: '' });
    setNewFeature('');
    setModalOpen(true);
  };

  const openEdit = (plan: BowlingPlan) => {
    setEditingId(plan.id);
    setForm({ ...plan });
    setNewFeature('');
    setModalOpen(true);
  };

  const handleAddFeature = () => {
    if (!newFeature) return;
    setForm(prev => ({ ...prev, features: [...prev.features, newFeature] }));
    setNewFeature('');
  };

  const handleSubmit = () => {
    if (!form.name || !form.price) return;
    if (editingId) {
      setPlans(prev => prev.map(p => p.id === editingId ? { ...form } : p));
    } else {
      setPlans(prev => [...prev, { ...form, id: `bw-${Date.now()}`, badge: form.badge || null }]);
    }
    setModalOpen(false);
  };

  const handleDelete = (id: string) => {
    if (confirm('Supprimer cette formule ?')) setPlans(prev => prev.filter(p => p.id !== id));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try { const b64 = await compressImageToBase64(file); setForm(prev => ({ ...prev, image: b64 })); }
      catch { alert('Erreur image'); }
    }
  };

  const handleSave = () => {
    saveBowlingPlans(plans);
    if (department) { const deps = getDepartments(); saveDepartments(deps.map(d => d.id === 'bowling' ? department : d)); }
    alert('Modifications enregistrées');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: '24px', fontFamily: 'var(--font-display)', color: '#C8A84B' }}>Gérer le Bowling</h2>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button onClick={openAdd} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', backgroundColor: '#182030', color: '#EDE8DF', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}><Plus size={16} /> Ajouter une formule</button>
          <button onClick={handleSave} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', backgroundColor: '#C8A84B', color: '#0C1018', borderRadius: '4px', fontWeight: 600 }}><Save size={16} /> Enregistrer</button>
        </div>
      </div>

      {department && (
        <div style={{ backgroundColor: '#182030', padding: '24px', borderRadius: '8px' }}>
          <h3 style={{ fontSize: '18px', color: '#C8A84B', marginBottom: '16px' }}>Informations Générales</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            <div className="modal-field"><label className="modal-label">Numéro de contact</label><input className="modal-input" value={department.phone} onChange={e => handleDepChange('phone', e.target.value)} /></div>
            <div className="modal-field"><label className="modal-label">Horaires</label><input className="modal-input" value={department.hours} onChange={e => handleDepChange('hours', e.target.value)} /></div>
            <div className="modal-field"><label className="modal-label">Tarif adulte (FCFA)</label><input className="modal-input" value={department.priceAdult} onChange={e => handleDepChange('priceAdult', e.target.value)} /></div>
            <div className="modal-field"><label className="modal-label">Tarif enfant (FCFA)</label><input className="modal-input" value={department.priceChild} onChange={e => handleDepChange('priceChild', e.target.value)} /></div>
            <div style={{ gridColumn: 'span 2', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <label style={{ fontSize: '14px' }}>Statut (Ouvert/Fermé)</label>
              <input type="checkbox" checked={department.isOpen} onChange={e => handleDepChange('isOpen', e.target.checked)} style={{ width: '20px', height: '20px', accentColor: '#C8A84B' }} />
            </div>
          </div>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {plans.map(plan => (
          <div key={plan.id} style={{ backgroundColor: '#182030', borderRadius: '8px', padding: '24px', border: plan.highlight ? '1px solid #C8A84B' : '1px solid transparent' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                {plan.image && <img src={plan.image} alt="" style={{ width: '64px', height: '64px', borderRadius: '8px', objectFit: 'cover' }} />}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 600 }}>{plan.name}</h3>
                    {plan.badge && <span style={{ backgroundColor: '#C8A84B', color: '#0C1018', fontSize: '10px', padding: '2px 8px', borderRadius: '100px', fontWeight: 'bold', textTransform: 'uppercase' }}>{plan.badge}</span>}
                  </div>
                  <div style={{ fontSize: '14px', opacity: 0.7 }}>{plan.tagline}</div>
                  <div style={{ fontSize: '18px', color: '#C8A84B', marginTop: '8px', fontWeight: 600 }}>{plan.price} FCFA</div>
                  <ul style={{ marginTop: '12px', paddingLeft: '20px', fontSize: '14px', opacity: 0.8 }}>
                    {plan.features.map((f, i) => <li key={i} style={{ marginBottom: '4px' }}>{f}</li>)}
                  </ul>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button onClick={() => openEdit(plan)} style={{ color: '#C8A84B', padding: '8px', opacity: 0.7 }}><Pencil size={18} /></button>
                <button onClick={() => handleDelete(plan.id)} style={{ color: '#E05A5A', padding: '8px', opacity: 0.8 }}><Trash2 size={18} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={editingId ? 'Modifier la formule' : 'Ajouter une formule'}>
        <div className="modal-row">
          <div className="modal-field"><label className="modal-label">Nom</label><input className="modal-input" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Ex: Partie Simple" /></div>
          <div className="modal-field"><label className="modal-label">Prix (FCFA)</label><input className="modal-input" value={form.price} onChange={e => setForm({...form, price: e.target.value})} placeholder="Ex: 5 000" /></div>
        </div>
        <div className="modal-row">
          <div className="modal-field"><label className="modal-label">Sous-titre</label><input className="modal-input" value={form.tagline} onChange={e => setForm({...form, tagline: e.target.value})} placeholder="Ex: 1 joueur · Chaussures incluses" /></div>
          <div className="modal-field"><label className="modal-label">Badge (optionnel)</label><input className="modal-input" value={form.badge || ''} onChange={e => setForm({...form, badge: e.target.value})} placeholder="Ex: Populaire" /></div>
        </div>
        <div className="modal-field">
          <label className="modal-label">Caractéristiques</label>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input className="modal-input" style={{ flex: 1 }} value={newFeature} onChange={e => setNewFeature(e.target.value)} placeholder="Ex: 1 piste réservée" onKeyDown={e => e.key === 'Enter' && handleAddFeature()} />
            <button onClick={handleAddFeature} style={{ padding: '0 16px', backgroundColor: '#C8A84B', color: '#0C1018', borderRadius: '6px', fontWeight: 600 }}>+</button>
          </div>
          {form.features.length > 0 && (
            <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
              {form.features.map((f, i) => (
                <li key={i} style={{ marginBottom: '4px', fontSize: '14px' }}>{f} <button onClick={() => setForm(prev => ({ ...prev, features: prev.features.filter((_, idx) => idx !== i) }))} style={{ color: '#E05A5A', marginLeft: '8px', fontSize: '12px' }}>✕</button></li>
              ))}
            </ul>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <label style={{ fontSize: '14px' }}>Mettre en avant (Highlight)</label>
          <input type="checkbox" checked={form.highlight} onChange={e => setForm({...form, highlight: e.target.checked})} style={{ width: '20px', height: '20px', accentColor: '#C8A84B' }} />
        </div>
        <div className="modal-field">
          <label className="modal-label">Image</label>
          {form.image && <img src={form.image} alt="" className="modal-image-preview" />}
          <div className="modal-file-upload">
            <Upload size={24} className="upload-icon" /><span className="upload-text">Cliquez ou glissez une image</span><span className="upload-hint">JPG, PNG — max 2 Mo</span>
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

export default AdminBowling;
