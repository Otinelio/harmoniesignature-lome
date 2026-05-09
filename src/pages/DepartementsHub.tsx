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

      <div className="hub-list">
        {departments.map((dep, index) => {
          if (!dep.isOpen) return null;
          const isEven = index % 2 === 0;

          return (
            <section key={dep.id} className={`hub-section ${isEven ? 'even' : 'odd'}`}>
              <div className="hub-section-img" style={{ backgroundImage: `url(${dep.images[0] || ''})` }}></div>
              <div className="hub-section-content">
                <div className="hub-section-icon">{getIcon(dep.id)}</div>
                <h2 className="hub-section-title">{dep.name}</h2>
                <p className="hub-section-desc">{dep.description}</p>
                <div className="hub-section-hours">{dep.hours}</div>
                <Link to={getRoute(dep.id)} className="hub-section-link">
                  Découvrir ce département <ArrowRight size={16} />
                </Link>
              </div>
              <div className="hub-separator"></div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default DepartementsHub;
