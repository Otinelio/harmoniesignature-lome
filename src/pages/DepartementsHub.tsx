import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDepartments, Department } from '../utils/storage';
import { ArrowRight, Waves, CircleDot, Sparkles, Dumbbell, Trophy } from 'lucide-react';
import './DepartementsHub.css';

const DepartementsHub = () => {
  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    setDepartments(getDepartments());
  }, []);

  const getIcon = (id: string) => {
    switch(id) {
      case 'piscine': return <Waves size={28} color="#C8A84B" />;
      case 'bowling': return <CircleDot size={28} color="#C8A84B" />;
      case 'spa': return <Sparkles size={28} color="#C8A84B" />;
      case 'gym': return <Dumbbell size={28} color="#C8A84B" />;
      case 'tennis': return <Trophy size={28} color="#C8A84B" />;
      case 'basket': return <CircleDot size={28} color="#C8A84B" />;
      default: return null;
    }
  };

  const getRoute = (id: string) => {
    if (id === 'tennis' || id === 'basket') return '/sports';
    return `/${id}`;
  };

  const getBadgeColor = (id: string) => {
    switch(id) {
      case 'piscine': return '#3B82F6';
      case 'bowling': return '#F97316';
      case 'spa': return '#2DD4BF';
      case 'gym': return '#4ADE80';
      case 'tennis': return '#F59E0B';
      case 'basket': return '#8B5CF6';
      default: return '#EF4444';
    }
  };

  const getSubtitle = (id: string) => {
    switch(id) {
      case 'piscine': return 'Piscine olympique · Tarifs · Horaires';
      case 'bowling': return 'Pistes · Plaisir · Compétition';
      case 'spa': return 'Soin · Détente · Jacuzzi';
      case 'gym': return 'Salle de gym · Coaching · Abonnements';
      case 'tennis': return 'Terre battue · Coaching · Localisation';
      case 'basket': return 'Terrain pro · Équipement · Réservation';
      default: return 'Découverte · Services · Informations';
    }
  };

  const getLinkText = (id: string) => {
    switch(id) {
      case 'spa': return 'RÉSERVER UN SOIN';
      case 'bowling': return 'VOIR LES TARIFS';
      case 'gym': return 'VOIR LES ABONNEMENTS';
      default: return 'VOIR PLUS DE DÉTAILS';
    }
  };

  return (
    <div className="hub-page">
      <section className="hub-hero">
        <div className="hub-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2000&auto=format&fit=crop)' }}></div>
        <div className="hub-hero-overlay"></div>
        <div className="hub-hero-content">
          <h1 className="hub-title">Nos Départements</h1>
          <p className="hub-subtitle">7 ESPACES · UN SEUL ENDROIT</p>
        </div>
      </section>

      <div className="mockup-grid-container">
        <div className="mockup-grid">
          {departments.map((dep) => {
            if (!dep.isOpen) return null;
            return (
              <Link to={getRoute(dep.id)} key={dep.id} className={`mockup-card card-${dep.id}`}>
                <div className="mockup-card-bg" style={{ backgroundImage: `url(${dep.images[0] || ''})` }}></div>
                <div className="mockup-card-overlay"></div>
                <div className="mockup-card-content">
                  <div className="mockup-badge" style={{ backgroundColor: getBadgeColor(dep.id) }}>
                    {dep.id.toUpperCase()}
                  </div>
                  <h2 className="mockup-title">{dep.name}</h2>
                  <p className="mockup-subtitle">{getSubtitle(dep.id)}</p>
                  <span className="mockup-link">
                    {getLinkText(dep.id)}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DepartementsHub;
