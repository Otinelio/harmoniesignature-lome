import React, { useEffect, useState } from 'react';
import { getDepartments, getRestaurants, getSettings } from '../../utils/storage';
import { CheckCircle } from 'lucide-react';

const AdminDashboard = () => {
  const [stats, setStats] = useState({ deps: 0, rests: 0, lastMod: '' });

  useEffect(() => {
    const deps = getDepartments();
    const rests = getRestaurants();
    const activeDeps = deps.filter(d => d.isOpen).length;
    const activeRests = rests.filter(r => r.isOpen).length;
    
    // In a real app we'd track this. Using current date for mockup.
    const lastMod = new Date().toLocaleString('fr-FR', { 
      day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });

    setStats({ deps: activeDeps, rests: activeRests, lastMod });
  }, []);

  const settings = getSettings();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
        
        <div style={{ backgroundColor: '#182030', padding: '24px', borderRadius: '8px', border: '1px solid rgba(200,168,75,0.3)' }}>
          <p style={{ fontSize: '13px', opacity: 0.6, marginBottom: '8px' }}>Départements actifs</p>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: '#C8A84B' }}>{stats.deps}</div>
        </div>

        <div style={{ backgroundColor: '#182030', padding: '24px', borderRadius: '8px', border: '1px solid rgba(200,168,75,0.3)' }}>
          <p style={{ fontSize: '13px', opacity: 0.6, marginBottom: '8px' }}>Restaurants gérés</p>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: '#C8A84B' }}>{stats.rests}</div>
        </div>

        <div style={{ backgroundColor: '#182030', padding: '24px', borderRadius: '8px', border: '1px solid rgba(200,168,75,0.3)' }}>
          <p style={{ fontSize: '13px', opacity: 0.6, marginBottom: '8px' }}>Dernière modification</p>
          <div style={{ fontSize: '18px' }}>{stats.lastMod}</div>
        </div>

        <div style={{ backgroundColor: '#182030', padding: '24px', borderRadius: '8px', border: '1px solid rgba(200,168,75,0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontSize: '13px', opacity: 0.6, marginBottom: '8px' }}>Statut du site</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', color: '#4ade80' }}>
            <CheckCircle size={20} /> En ligne
          </div>
        </div>

      </div>

      <div style={{ backgroundColor: '#182030', padding: '24px', borderRadius: '8px' }}>
        <h3 style={{ fontSize: '16px', marginBottom: '16px', color: '#C8A84B' }}>Résumé des informations de contact</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', fontSize: '14px' }}>
          <div>
            <span style={{ opacity: 0.5, display: 'block', marginBottom: '4px' }}>WhatsApp Principal</span>
            {settings.mainWhatsApp}
          </div>
          <div>
            <span style={{ opacity: 0.5, display: 'block', marginBottom: '4px' }}>Email Spa</span>
            {settings.spaEmail}
          </div>
          <div style={{ gridColumn: 'span 2' }}>
            <span style={{ opacity: 0.5, display: 'block', marginBottom: '4px' }}>Adresse</span>
            {settings.address}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
