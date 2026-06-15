import React, { useState, useEffect } from 'react';
import { getSportServices, saveSportServices, SportService, getDepartments, saveDepartments, Department } from '../../utils/storage';
import { Save, Trash2, Plus, Pencil } from 'lucide-react';
import Modal from '../../components/Modal';
import AdminGallery from '../../components/AdminGallery';

const AdminSports = () => {
  const [dTennis, setDTennis] = useState<Department | null>(null);
  const [dBasket, setDBasket] = useState<Department | null>(null);
  const [services, setServices] = useState<SportService[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<SportService>({ id: '', sportType: 'Tennis', name: '', duration: '', desc: '', price: '', unit: 'par personne' });

  useEffect(() => {
    getSportServices().then(setServices);
    getDepartments().then((depsData) => {
      setDTennis(depsData.find((d: any) => d.id === 'tennis') || null);
      setDBasket(depsData.find((d: any) => d.id === 'basket') || null);
    });
  }, []);

  const hdc = (id: 'tennis' | 'basket', field: keyof Department, value: any) => {
    if (id === 'tennis' && dTennis) setDTennis({ ...dTennis, [field]: value });
    else if (id === 'basket' && dBasket) setDBasket({ ...dBasket, [field]: value });
  };

  const openAdd = () => { setEditingId(null); setForm({ id: '', sportType: 'Tennis', name: '', duration: '', desc: '', price: '', unit: 'par personne' }); setModalOpen(true); };
  const openEdit = (s: SportService) => { setEditingId(s.id); setForm({ ...s }); setModalOpen(true); };

  const handleSubmit = async () => {
    if (!form.name || !form.price) return;
    let newServices: SportService[];
    if (editingId) newServices = services.map(s => s.id === editingId ? { ...form } : s);
    else newServices = [...services, { ...form, id: `sport-${Date.now()}` }];
    try {
      await saveSportServices(newServices);
      setServices(newServices);
      setModalOpen(false);
    } catch (e: any) {
      alert('Erreur lors de la sauvegarde: ' + e.message);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Supprimer ?')) {
      const newServices = services.filter(s => s.id !== id);
      try {
        await saveSportServices(newServices);
        setServices(newServices);
      } catch (e: any) {
        alert('Erreur: ' + e.message);
      }
    }
  };

  const handleSave = async () => {
    await saveSportServices(services);
    const depsData = await getDepartments();
    let nd = [...depsData];
    if (dTennis) nd = nd.map(d => d.id === 'tennis' ? dTennis : d);
    if (dBasket) nd = nd.map(d => d.id === 'basket' ? dBasket : d);
    await saveDepartments(nd);
    alert('Modifications enregistrées');
  };

  const types = ['Tennis', 'Basket'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: '24px', fontFamily: 'var(--font-display)', color: '#C8A84B' }}>Gérer les Sports</h2>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button onClick={openAdd} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', backgroundColor: '#182030', color: '#EDE8DF', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}><Plus size={16} /> Ajouter</button>
          <button onClick={handleSave} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', backgroundColor: '#C8A84B', color: '#0C1018', borderRadius: '4px', fontWeight: 600 }}><Save size={16} /> Enregistrer</button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
        {dTennis && (<div style={{ backgroundColor: '#182030', padding: '24px', borderRadius: '8px' }}>
          <h3 style={{ fontSize: '18px', color: '#C8A84B', marginBottom: '16px' }}>Infos Tennis</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="modal-field"><label className="modal-label">Horaires</label><input className="modal-input" value={dTennis.hours} onChange={e => hdc('tennis', 'hours', e.target.value)} /></div>
            <div className="modal-field"><label className="modal-label">Tarif</label><input className="modal-input" value={dTennis.priceAdult} onChange={e => hdc('tennis', 'priceAdult', e.target.value)} /></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><label style={{ fontSize: '14px' }}>Statut</label><input type="checkbox" checked={dTennis.isOpen} onChange={e => hdc('tennis', 'isOpen', e.target.checked)} style={{ width: '20px', height: '20px', accentColor: '#C8A84B' }} /></div>
          </div>
        </div>)}

        {dTennis && (
          <AdminGallery 
            department={dTennis} 
            onUpdate={async (images) => {
              hdc('tennis', 'images', images);
              try {
                const depsData = await getDepartments();
                await saveDepartments(depsData.map(d => d.id === 'tennis' ? { ...dTennis, images } : d));
              } catch (e) { console.error(e); }
            }} 
          />
        )}

        {dBasket && (<div style={{ backgroundColor: '#182030', padding: '24px', borderRadius: '8px' }}>
          <h3 style={{ fontSize: '18px', color: '#C8A84B', marginBottom: '16px' }}>Infos Basket</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="modal-field"><label className="modal-label">Horaires</label><input className="modal-input" value={dBasket.hours} onChange={e => hdc('basket', 'hours', e.target.value)} /></div>
            <div className="modal-field"><label className="modal-label">Tarif</label><input className="modal-input" value={dBasket.priceAdult} onChange={e => hdc('basket', 'priceAdult', e.target.value)} /></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><label style={{ fontSize: '14px' }}>Statut</label><input type="checkbox" checked={dBasket.isOpen} onChange={e => hdc('basket', 'isOpen', e.target.checked)} style={{ width: '20px', height: '20px', accentColor: '#C8A84B' }} /></div>
          </div>
        </div>)}

        {dBasket && (
          <AdminGallery 
            department={dBasket} 
            onUpdate={async (images) => {
              hdc('basket', 'images', images);
              try {
                const depsData = await getDepartments();
                await saveDepartments(depsData.map(d => d.id === 'basket' ? { ...dBasket, images } : d));
              } catch (e) { console.error(e); }
            }} 
          />
        )}

      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {types.map(type => {
          const ts = services.filter(s => s.sportType === type);
          if (!ts.length) return null;
          return (<div key={type} style={{ backgroundColor: '#182030', borderRadius: '8px', padding: '24px' }}>
            <h3 style={{ fontSize: '18px', color: '#C8A84B', marginBottom: '16px' }}>{type}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {ts.map(s => (<div key={s.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0C1018', padding: '16px', borderRadius: '4px' }}>
                <div><div style={{ fontSize: '16px', fontWeight: 500 }}>{s.name} <span style={{ opacity: 0.5, fontSize: '12px' }}>({s.duration})</span></div>
                  <div style={{ fontSize: '14px', opacity: 0.7, marginTop: '4px' }}>{s.desc}</div>
                  <div style={{ fontSize: '14px', color: '#C8A84B', marginTop: '4px' }}>{s.price} FCFA {s.unit && <span style={{ opacity: 0.7, fontSize: '12px' }}>/ {s.unit}</span>}</div></div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button onClick={() => openEdit(s)} style={{ color: '#C8A84B', padding: '8px', opacity: 0.7 }}><Pencil size={18} /></button>
                  <button onClick={() => handleDelete(s.id)} style={{ color: '#E05A5A', padding: '8px', opacity: 0.8 }}><Trash2 size={18} /></button>
                </div>
              </div>))}
            </div>
          </div>);
        })}
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={editingId ? 'Modifier' : 'Ajouter une formule'}>
        <div className="modal-row">
          <div className="modal-field"><label className="modal-label">Sport</label><select className="modal-select" value={form.sportType} onChange={e => setForm({...form, sportType: e.target.value as any})}>{types.map(t => <option key={t} value={t}>{t}</option>)}</select></div>
          <div className="modal-field"><label className="modal-label">Nom</label><input className="modal-input" value={form.name} onChange={e => setForm({...form, name: e.target.value})} /></div>
        </div>
        <div className="modal-row">
          <div className="modal-field"><label className="modal-label">Durée</label><input className="modal-input" value={form.duration} onChange={e => setForm({...form, duration: e.target.value})} /></div>
          <div className="modal-field"><label className="modal-label">Prix</label><input className="modal-input" value={form.price} onChange={e => setForm({...form, price: e.target.value})} /></div>
        </div>
        <div className="modal-field"><label className="modal-label">Unité</label><input className="modal-input" value={form.unit} onChange={e => setForm({...form, unit: e.target.value})} /></div>
        <div className="modal-field"><label className="modal-label">Description</label><textarea className="modal-textarea" value={form.desc} onChange={e => setForm({...form, desc: e.target.value})} rows={2} /></div>
        <div className="modal-actions"><button className="modal-btn-cancel" onClick={() => setModalOpen(false)}>Annuler</button><button className="modal-btn-confirm" onClick={handleSubmit}>{editingId ? 'Modifier' : 'Ajouter'}</button></div>
      </Modal>
    </div>
  );
};

export default AdminSports;
