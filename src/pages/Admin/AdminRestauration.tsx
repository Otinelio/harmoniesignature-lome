import React, { useState, useEffect } from 'react';
import { getRestaurants, saveRestaurants, Restaurant, MenuItem } from '../../utils/storage';
import { Save, Trash2, Plus } from 'lucide-react';

const AdminRestauration = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setRestaurants(getRestaurants());
  }, []);

  const handleRestChange = (field: keyof Restaurant, value: any) => {
    const newRests = [...restaurants];
    newRests[activeTab] = { ...newRests[activeTab], [field]: value };
    setRestaurants(newRests);
  };

  const handleDeleteItem = (itemId: string) => {
    const newRests = [...restaurants];
    newRests[activeTab].menu = newRests[activeTab].menu.filter(i => i.id !== itemId);
    setRestaurants(newRests);
  };

  const handleSave = () => {
    saveRestaurants(restaurants);
    alert('Modifications enregistrées');
  };

  if (restaurants.length === 0) return null;

  const currentRest = restaurants[activeTab];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', gap: '16px', borderBottom: '1px solid #182030', paddingBottom: '16px' }}>
        {restaurants.map((rest, idx) => (
          <button 
            key={rest.id}
            onClick={() => setActiveTab(idx)}
            style={{ 
              fontSize: '12px', 
              fontFamily: 'var(--font-body)', 
              textTransform: 'uppercase', 
              color: activeTab === idx ? '#C8A84B' : '#EDE8DF',
              opacity: activeTab === idx ? 1 : 0.5,
              paddingBottom: '8px',
              borderBottom: activeTab === idx ? '2px solid #C8A84B' : '2px solid transparent',
              transition: 'all 0.2s'
            }}
          >
            {rest.name}
          </button>
        ))}
      </div>

      <div style={{ backgroundColor: '#182030', padding: '24px', borderRadius: '8px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ fontSize: '12px', opacity: 0.6 }}>Nom du restaurant</label>
          <input value={currentRest.name} onChange={e => handleRestChange('name', e.target.value)} style={{ padding: '12px', backgroundColor: '#0C1018', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ fontSize: '12px', opacity: 0.6 }}>Numéro WhatsApp (commandes)</label>
          <input value={currentRest.whatsapp} onChange={e => handleRestChange('whatsapp', e.target.value)} style={{ padding: '12px', backgroundColor: '#0C1018', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ fontSize: '12px', opacity: 0.6 }}>Horaires</label>
          <input value={currentRest.hours} onChange={e => handleRestChange('hours', e.target.value)} style={{ padding: '12px', backgroundColor: '#0C1018', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '24px' }}>
          <label style={{ fontSize: '14px' }}>Statut (Ouvert/Fermé)</label>
          <input type="checkbox" checked={currentRest.isOpen} onChange={e => handleRestChange('isOpen', e.target.checked)} style={{ width: '20px', height: '20px', accentColor: '#C8A84B' }} />
        </div>
        <div style={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={handleSave} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', backgroundColor: '#C8A84B', color: '#0C1018', borderRadius: '4px', fontWeight: 600 }}>
            <Save size={16} /> Enregistrer
          </button>
        </div>
      </div>

      <div style={{ backgroundColor: '#182030', padding: '24px', borderRadius: '8px' }}>
        <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-display)', marginBottom: '16px', color: '#C8A84B' }}>Gérer le menu</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {currentRest.menu.map(item => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0C1018', padding: '16px', borderRadius: '4px' }}>
              <div>
                <div style={{ fontSize: '16px', fontWeight: 500 }}>{item.name} <span style={{ fontSize: '11px', opacity: 0.5, marginLeft: '8px', border: '1px solid rgba(255,255,255,0.2)', padding: '2px 6px', borderRadius: '4px' }}>{item.category}</span></div>
                <div style={{ fontSize: '14px', opacity: 0.7, marginTop: '4px' }}>{item.price.toLocaleString('fr-FR')} FCFA</div>
              </div>
              <button onClick={() => handleDeleteItem(item.id)} style={{ color: '#E05A5A', padding: '8px', opacity: 0.8, transition: 'opacity 0.2s' }}>
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminRestauration;
