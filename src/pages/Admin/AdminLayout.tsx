import React, { useEffect } from 'react';
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Building2, UtensilsCrossed, Video, Settings, LogOut } from 'lucide-react';
import './Admin.css';

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isAuth = sessionStorage.getItem('hs_admin_auth');
    if (!isAuth) {
      navigate('/admin-hs-2025');
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('hs_admin_auth');
    navigate('/admin-hs-2025');
  };

  const navItems = [
    { path: '/admin-hs-2025/dashboard', icon: <LayoutDashboard size={18} />, label: 'Vue générale' },
    { path: '/admin-hs-2025/departements', icon: <Building2 size={18} />, label: 'Départements' },
    { path: '/admin-hs-2025/restauration', icon: <UtensilsCrossed size={18} />, label: 'Restauration' },
    { path: '/admin-hs-2025/medias', icon: <Video size={18} />, label: 'Médias' },
    { path: '/admin-hs-2025/parametres', icon: <Settings size={18} />, label: 'Paramètres' },
  ];

  return (
    <div className="admin-dashboard-container">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">
          <div className="admin-logo">
            <span className="logo-hs">HS</span>
            <span className="logo-text">ADMIN</span>
          </div>
        </div>

        <nav className="admin-nav">
          {navItems.map(item => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`admin-nav-item ${location.pathname.startsWith(item.path) ? 'active' : ''}`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="admin-sidebar-footer">
          <button className="admin-logout-btn" onClick={handleLogout}>
            <LogOut size={18} />
            <span>Déconnexion</span>
          </button>
        </div>
      </aside>

      <main className="admin-main-content">
        <header className="admin-header">
          <div>
            <h1 className="admin-page-title">
              {navItems.find(item => location.pathname.startsWith(item.path))?.label || 'Administration'}
            </h1>
            <div className="admin-breadcrumb">
              Admin / {navItems.find(item => location.pathname.startsWith(item.path))?.label || ''}
            </div>
          </div>
          <div className="admin-badge">
            Harmonie Signature · Admin
          </div>
        </header>

        <div className="admin-content-area">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
