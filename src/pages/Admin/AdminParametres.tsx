import React, { useState, useEffect } from 'react';
import { getSettings, saveSettings, Settings } from '../../utils/storage';
import { Save } from 'lucide-react';

const AdminParametres = () => {
  const [settings, setSettings] = useState<Settings | null>(null);

  useEffect(() => {
    setSettings(getSettings());
  }, []);

  const handleChange = (field: keyof Settings, value: string) => {
    if (settings) {
      setSettings({ ...settings, [field]: value });
    }
  };

  const handleSave = () => {
    if (settings) {
      saveSettings(settings);
      alert('Modifications enregistrées');
    }
  };

  if (!settings) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '800px' }}>
      <div style={{ backgroundColor: '#182030', padding: '32px', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '20px', fontFamily: 'var(--font-display)', marginBottom: '24px', color: '#C8A84B' }}>Informations Générales</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '12px', opacity: 0.6 }}>Numéro WhatsApp principal</label>
            <input type="tel" value={settings.mainWhatsApp} onChange={e => handleChange('mainWhatsApp', e.target.value)} style={{ padding: '12px', backgroundColor: '#0C1018', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '12px', opacity: 0.6 }}>Email de réservation Spa</label>
            <input type="email" value={settings.spaEmail} onChange={e => handleChange('spaEmail', e.target.value)} style={{ padding: '12px', backgroundColor: '#0C1018', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '12px', opacity: 0.6 }}>Adresse complète</label>
            <input value={settings.address} onChange={e => handleChange('address', e.target.value)} style={{ padding: '12px', backgroundColor: '#0C1018', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '12px', opacity: 0.6 }}>Horaires d'ouverture généraux</label>
            <input value={settings.generalHours} onChange={e => handleChange('generalHours', e.target.value)} style={{ padding: '12px', backgroundColor: '#0C1018', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '12px', opacity: 0.6 }}>Horaires spécifiques Bowling</label>
            <input value={settings.bowlingHours} onChange={e => handleChange('bowlingHours', e.target.value)} style={{ padding: '12px', backgroundColor: '#0C1018', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px' }} />
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#182030', padding: '32px', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '20px', fontFamily: 'var(--font-display)', marginBottom: '24px', color: '#C8A84B' }}>Sécurité</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '12px', opacity: 0.6 }}>Mot de passe Administrateur</label>
            <input type="text" value={settings.adminPasswordHash} onChange={e => handleChange('adminPasswordHash', e.target.value)} style={{ padding: '12px', backgroundColor: '#0C1018', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px' }} />
            <span style={{ fontSize: '11px', opacity: 0.4 }}>En clair pour cette démo. À sécuriser en production.</span>
          </div>
        </div>
      </div>

      <button 
        onClick={handleSave}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '16px 24px', backgroundColor: '#C8A84B', color: '#0C1018', borderRadius: '4px', fontWeight: 600, fontSize: '16px' }}
      >
        <Save size={20} />
        Enregistrer les modifications
      </button>
    </div>
  );
};
export default AdminParametres;
