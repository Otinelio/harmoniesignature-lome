import React, { useEffect, useState } from 'react';
import { getDepartments, Department } from '../utils/storage';
import { Download, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Tarifs = () => {
  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    setDepartments(getDepartments());
  }, []);

  return (
    <div style={{ backgroundColor: '#0C1018', minHeight: '100vh', paddingTop: '120px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 32px 100px' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '56px', marginBottom: '16px' }}>Nos Tarifs</h1>
          <p style={{ opacity: 0.7, maxWidth: '600px', margin: '0 auto' }}>Découvrez la grille tarifaire complète de tous nos espaces. Des abonnements mensuels ou annuels sont également disponibles sur place.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {departments.map((dep) => (
            <div key={dep.id} style={{ backgroundColor: '#182030', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ padding: '24px 32px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: '#C8A84B' }}>{dep.name}</h2>
                <Link to={`/${dep.id === 'tennis' || dep.id === 'basket' ? 'sports' : dep.id}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', textTransform: 'uppercase', color: '#EDE8DF', opacity: 0.7 }}>
                  Voir l'espace <ChevronRight size={14} />
                </Link>
              </div>
              <div style={{ padding: '24px 32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                {dep.priceAdult && (
                  <div>
                    <div style={{ fontSize: '12px', opacity: 0.5, textTransform: 'uppercase', marginBottom: '4px' }}>Adulte</div>
                    <div style={{ fontSize: '20px', fontWeight: 500 }}>{dep.priceAdult}</div>
                  </div>
                )}
                {dep.priceChild && (
                  <div>
                    <div style={{ fontSize: '12px', opacity: 0.5, textTransform: 'uppercase', marginBottom: '4px' }}>Enfant</div>
                    <div style={{ fontSize: '20px', fontWeight: 500 }}>{dep.priceChild}</div>
                  </div>
                )}
                {!dep.priceAdult && !dep.priceChild && (
                  <div style={{ opacity: 0.5, fontStyle: 'italic' }}>Consultez la page pour plus de détails.</div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '64px', textAlign: 'center' }}>
          <button style={{ 
            display: 'inline-flex', alignItems: 'center', gap: '12px',
            backgroundColor: '#C8A84B', color: '#0C1018', padding: '16px 32px', 
            borderRadius: '100px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em'
          }}>
            <Download size={18} /> Télécharger la grille complète (PDF)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tarifs;
