import React, { useState, useEffect } from 'react';
import { getDepartments, saveDepartments, Department } from '../../utils/storage';
import { Save, ChevronDown, ChevronUp } from 'lucide-react';

const AdminDepartements = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    setDepartments(getDepartments());
  }, []);

  const handleChange = (index: number, field: keyof Department, value: any) => {
    const newDeps = [...departments];
    newDeps[index] = { ...newDeps[index], [field]: value };
    setDepartments(newDeps);
  };

  const handleSave = (index: number) => {
    saveDepartments(departments);
    // Show toast ideally
    alert('Modifications enregistrées');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {departments.map((dep, index) => (
        <div key={dep.id} style={{ backgroundColor: '#182030', borderRadius: '8px', overflow: 'hidden' }}>
          <button 
            style={{ width: '100%', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: openIndex === index ? 'rgba(200,168,75,0.05)' : 'transparent' }}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span style={{ fontSize: '18px', fontFamily: 'var(--font-display)' }}>{dep.name}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '12px', color: dep.isOpen ? '#4ade80' : '#E05A5A' }}>
                {dep.isOpen ? 'Ouvert' : 'Fermé'}
              </span>
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </button>

          {openIndex === index && (
            <div style={{ padding: '24px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '12px', opacity: 0.6 }}>Nom du département</label>
                <input value={dep.name} onChange={e => handleChange(index, 'name', e.target.value)} style={{ padding: '12px', backgroundColor: '#0C1018', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '12px', opacity: 0.6 }}>Numéro de contact</label>
                <input value={dep.phone} onChange={e => handleChange(index, 'phone', e.target.value)} style={{ padding: '12px', backgroundColor: '#0C1018', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '12px', opacity: 0.6 }}>Horaires d'ouverture</label>
                <input value={dep.hours} onChange={e => handleChange(index, 'hours', e.target.value)} style={{ padding: '12px', backgroundColor: '#0C1018', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '24px' }}>
                <label style={{ fontSize: '14px' }}>Statut (Ouvert/Fermé)</label>
                <input type="checkbox" checked={dep.isOpen} onChange={e => handleChange(index, 'isOpen', e.target.checked)} style={{ width: '20px', height: '20px', accentColor: '#C8A84B' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '12px', opacity: 0.6 }}>Tarif adulte (FCFA)</label>
                <input value={dep.priceAdult} onChange={e => handleChange(index, 'priceAdult', e.target.value)} style={{ padding: '12px', backgroundColor: '#0C1018', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '12px', opacity: 0.6 }}>Tarif enfant (FCFA)</label>
                <input value={dep.priceChild} onChange={e => handleChange(index, 'priceChild', e.target.value)} style={{ padding: '12px', backgroundColor: '#0C1018', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px' }} />
              </div>
              <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '12px', opacity: 0.6 }}>Description</label>
                <textarea rows={3} value={dep.description} onChange={e => handleChange(index, 'description', e.target.value)} style={{ padding: '12px', backgroundColor: '#0C1018', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px', resize: 'vertical' }} />
              </div>

              <div style={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                <button 
                  onClick={() => handleSave(index)}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', backgroundColor: '#C8A84B', color: '#0C1018', borderRadius: '4px', fontWeight: 600 }}
                >
                  <Save size={16} />
                  Enregistrer
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default AdminDepartements;
