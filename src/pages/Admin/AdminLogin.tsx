import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSettings } from '../../utils/storage';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const settings = getSettings();
    if (password === settings.adminPasswordHash) {
      sessionStorage.setItem('hs_admin_auth', 'true');
      navigate('/admin-hs-2025/dashboard');
    } else {
      setError(true);
      setTimeout(() => setError(false), 300);
    }
  };

  return (
    <div className="admin-login-container" style={{
      backgroundColor: '#0C1018', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <form onSubmit={handleLogin} style={{
        maxWidth: '380px', width: '100%', padding: '0 24px', display: 'flex', flexDirection: 'column', alignItems: 'center'
      }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: '#EDE8DF', marginBottom: '4px' }}>
          HARMONIE SIGNATURE
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', textTransform: 'uppercase', color: '#EDE8DF', opacity: 0.5, marginBottom: '32px' }}>
          ESPACE ADMINISTRATION
        </p>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mot de passe"
          style={{
            width: '100%', backgroundColor: '#182030', border: 'none', borderBottom: '1px solid #C8A84B',
            color: '#EDE8DF', padding: '12px 16px', fontSize: '15px', fontFamily: 'var(--font-body)', marginBottom: '16px', outline: 'none'
          }}
        />

        {error && (
          <p className="shake-animation" style={{
            color: '#E05A5A', fontSize: '13px', fontFamily: 'var(--font-body)', alignSelf: 'flex-start', marginBottom: '16px'
          }}>
            Mot de passe incorrect
          </p>
        )}

        <button type="submit" style={{
          width: '100%', height: '48px', backgroundColor: '#C8A84B', color: '#0C1018', fontSize: '14px', fontWeight: 600,
          fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.05em'
        }}>
          Accéder
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
