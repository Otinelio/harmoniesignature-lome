import React, { useState, useEffect } from 'react';
import { getPoolPlans, savePoolPlans, PoolPlan, getDepartments, saveDepartments, Department } from '../../utils/storage';
import { Save, Trash2, Plus, Pencil, Upload } from 'lucide-react';
import Modal from '../../components/Modal';
import AdminGallery from '../../components/AdminGallery';
import { compressImageToBase64 } from '../../utils/fileUpload';

const AdminPiscine = () => {
  const [department, setDepartment] = useState<Department | null>(null);
  const [plans, setPlans] = useState<PoolPlan[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<PoolPlan>({ id: '', category: 'Accès Piscine', name: '', price: '', desc: '', duration: '', badge: '' });

  useEffect(() => {
    getPoolPlans().then(setPlans);
    getDepartments().then(deps => setDepartment(deps.find(d => d.id === 'piscine') || null));
  }, []);

  const handleDepChange = (field: keyof Department, value: any) => {
    if (department) setDepartment({ ...department, [field]: value });
  };

  const openAdd = () => { setEditingId(null); setForm({ id: '', category: 'Accès Piscine', name: '', price: '', desc: '', duration: '', badge: '' }); setModalOpen(true); };
  const openEdit = (p: PoolPlan) => { setEditingId(p.id); setForm({ ...p }); setModalOpen(true); };

  const handleSubmit = async () => {
    if (!form.name || !form.price) return;
    let newPlans: PoolPlan[];
    if (editingId) newPlans = plans.map(p => p.id === editingId ? { ...form } : p);
    else newPlans = [...plans, { ...form, id: `pool-${Date.now()}` }];
    try {
      await savePoolPlans(newPlans);
      setPlans(newPlans);
      setModalOpen(false);
    } catch (e: any) {
      alert('Erreur lors de la sauvegarde: ' + e.message);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Supprimer ?')) {
      const newPlans = plans.filter(p => p.id !== id);
      try {
        await savePoolPlans(newPlans);
        setPlans(newPlans);
      } catch (e: any) {
        alert('Erreur: ' + e.message);
      }
    }
  };

  const handleSave = async () => {
    await savePoolPlans(plans);
    if (department) { await getDepartments().then(deps => saveDepartments(deps.map(d => d.id === 'piscine' ? department : d))); }
    alert('Modifications enregistrées');
  };

  const categories = ['Accès Piscine', 'Gym + Piscine (Combiné)', 'Cours de Natation'];
  const inp = { padding: '12px', backgroundColor: '#0C1018', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px' };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: '24px', fontFamily: 'var(--font-display)', color: '#C8A84B' }}>Gérer la Piscine</h2>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button onClick={openAdd} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', backgroundColor: '#182030', color: '#EDE8DF', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}><Plus size={16} /> Ajouter</button>
          <button onClick={handleSave} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', backgroundColor: '#C8A84B', color: '#0C1018', borderRadius: '4px', fontWeight: 600 }}><Save size={16} /> Enregistrer</button>
        </div>
      </div>

      {department && (
        <div style={{ backgroundColor: '#182030', padding: '24px', borderRadius: '8px' }}>
          <h3 style={{ fontSize: '18px', color: '#C8A84B', marginBottom: '16px' }}>Informations Générales</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            <div className="modal-field"><label className="modal-label">Contact</label><input className="modal-input" value={department.phone} onChange={e => handleDepChange('phone', e.target.value)} /></div>
            <div className="modal-field"><label className="modal-label">Horaires</label><input className="modal-input" value={department.hours} onChange={e => handleDepChange('hours', e.target.value)} /></div>
            <div className="modal-field"><label className="modal-label">Tarif adulte</label><input className="modal-input" value={department.priceAdult} onChange={e => handleDepChange('priceAdult', e.target.value)} /></div>
            <div className="modal-field"><label className="modal-label">Tarif enfant</label><input className="modal-input" value={department.priceChild} onChange={e => handleDepChange('priceChild', e.target.value)} /></div>
            <div style={{ gridColumn: 'span 2', display: 'flex', alignItems: 'center', gap: '16px' }}><label style={{ fontSize: '14px' }}>Statut</label><input type="checkbox" checked={department.isOpen} onChange={e => handleDepChange('isOpen', e.target.checked)} style={{ width: '20px', height: '20px', accentColor: '#C8A84B' }} /></div>
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
              await saveDepartments(depsData.map(d => d.id === 'piscine' ? { ...department, images } : d));
            } catch (e) {
              console.error(e);
            }
          }} 
        />
      )}


      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {categories.map(cat => {
          const cp = plans.filter(p => p.category === cat);
          if (!cp.length) return null;
          return (<div key={cat} style={{ backgroundColor: '#182030', borderRadius: '8px', padding: '24px' }}>
            <h3 style={{ fontSize: '18px', color: '#C8A84B', marginBottom: '16px' }}>{cat}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {cp.map(plan => (<div key={plan.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0C1018', padding: '16px', borderRadius: '4px' }}>
                <div><div style={{ fontSize: '16px', fontWeight: 500 }}>{plan.name} {plan.badge && <span style={{ marginLeft: '8px', backgroundColor: '#C8A84B', color: '#0C1018', fontSize: '10px', padding: '2px 8px', borderRadius: '100px', fontWeight: 'bold' }}>{plan.badge}</span>}</div>
                  <div style={{ fontSize: '14px', opacity: 0.7, marginTop: '4px' }}>{plan.desc}</div>
                  <div style={{ fontSize: '14px', color: '#C8A84B', marginTop: '4px' }}>{plan.price} FCFA <span style={{ opacity: 0.5, fontSize: '12px' }}>({plan.duration})</span></div></div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button onClick={() => openEdit(plan)} style={{ color: '#C8A84B', padding: '8px', opacity: 0.7 }}><Pencil size={18} /></button>
                  <button onClick={() => handleDelete(plan.id)} style={{ color: '#E05A5A', padding: '8px', opacity: 0.8 }}><Trash2 size={18} /></button>
                </div>
              </div>))}
            </div>
          </div>);
        })}
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={editingId ? 'Modifier' : 'Ajouter une formule'}>
        <div className="modal-row">
          <div className="modal-field"><label className="modal-label">Catégorie</label><select className="modal-select" value={form.category} onChange={e => setForm({...form, category: e.target.value})}>{categories.map(c => <option key={c} value={c}>{c}</option>)}</select></div>
          <div className="modal-field"><label className="modal-label">Nom</label><input className="modal-input" value={form.name} onChange={e => setForm({...form, name: e.target.value})} /></div>
        </div>
        <div className="modal-row">
          <div className="modal-field"><label className="modal-label">Durée</label><input className="modal-input" value={form.duration} onChange={e => setForm({...form, duration: e.target.value})} /></div>
          <div className="modal-field"><label className="modal-label">Prix</label><input className="modal-input" value={form.price} onChange={e => setForm({...form, price: e.target.value})} /></div>
        </div>
        <div className="modal-field"><label className="modal-label">Badge</label><input className="modal-input" value={form.badge || ''} onChange={e => setForm({...form, badge: e.target.value})} /></div>
        <div className="modal-field"><label className="modal-label">Description</label><textarea className="modal-textarea" value={form.desc} onChange={e => setForm({...form, desc: e.target.value})} rows={2} /></div>
        <div className="modal-actions"><button className="modal-btn-cancel" onClick={() => setModalOpen(false)}>Annuler</button><button className="modal-btn-confirm" onClick={handleSubmit}>{editingId ? 'Modifier' : 'Ajouter'}</button></div>
      </Modal>
    </div>
  );
};

export default AdminPiscine;
