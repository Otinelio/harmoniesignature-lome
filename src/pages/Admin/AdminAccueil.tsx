import React, { useState, useEffect } from 'react';
import { getSettings, saveSettings, Settings, getFAQ, saveFAQ, FAQItem } from '../../utils/storage';
import { Save, Trash2, Plus, Pencil, Home, HelpCircle, Share2 } from 'lucide-react';
import Modal from '../../components/Modal';

const AdminAccueil = () => {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [faq, setFaq] = useState<FAQItem[]>([]);
  const [faqModal, setFaqModal] = useState(false);
  const [editingFaqId, setEditingFaqId] = useState<string | null>(null);
  const [faqForm, setFaqForm] = useState<FAQItem>({ id: '', question: '', answer: '' });
  const [activeSection, setActiveSection] = useState<'home' | 'faq' | 'social'>('home');

  useEffect(() => {
    getSettings().then(setSettings);
    getFAQ().then(setFaq);
  }, []);

  const handleChange = (field: keyof Settings, value: string) => {
    if (settings) setSettings({ ...settings, [field]: value });
  };

  const handleSave = async () => {
    if (settings) await saveSettings(settings);
    await saveFAQ(faq);
    alert('Modifications enregistrées');
  };

  const openAddFaq = () => { setEditingFaqId(null); setFaqForm({ id: '', question: '', answer: '' }); setFaqModal(true); };
  const openEditFaq = (item: FAQItem) => { setEditingFaqId(item.id); setFaqForm({ ...item }); setFaqModal(true); };

  const handleFaqSubmit = () => {
    if (!faqForm.question || !faqForm.answer) return;
    if (editingFaqId) setFaq(prev => prev.map(f => f.id === editingFaqId ? { ...faqForm } : f));
    else setFaq(prev => [...prev, { ...faqForm, id: `faq-${Date.now()}` }]);
    setFaqModal(false);
  };

  const handleDeleteFaq = (id: string) => { if (confirm('Supprimer ?')) setFaq(prev => prev.filter(f => f.id !== id)); };

  if (!settings) return null;

  const tabs = [
    { key: 'home' as const, label: 'Page d\'accueil', icon: <Home size={16} /> },
    { key: 'faq' as const, label: 'FAQ', icon: <HelpCircle size={16} /> },
    { key: 'social' as const, label: 'Réseaux sociaux', icon: <Share2 size={16} /> },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '16px' }}>
          {tabs.map(tab => (
            <button key={tab.key} onClick={() => setActiveSection(tab.key)} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontFamily: 'var(--font-body)', color: activeSection === tab.key ? '#C8A84B' : '#EDE8DF', opacity: activeSection === tab.key ? 1 : 0.5, paddingBottom: '8px', borderBottom: activeSection === tab.key ? '2px solid #C8A84B' : '2px solid transparent', transition: 'all 0.2s' }}>
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
        <button onClick={handleSave} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', backgroundColor: '#C8A84B', color: '#0C1018', borderRadius: '4px', fontWeight: 600 }}><Save size={16} /> Enregistrer</button>
      </div>

      {activeSection === 'home' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ backgroundColor: '#182030', padding: '24px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '18px', color: '#C8A84B', marginBottom: '16px' }}>Informations de contact</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              <div className="modal-field"><label className="modal-label">Téléphone principal</label><input className="modal-input" value={settings.mainWhatsApp} onChange={e => handleChange('mainWhatsApp', e.target.value)} /></div>
              <div className="modal-field"><label className="modal-label">Email Spa</label><input className="modal-input" value={settings.spaEmail} onChange={e => handleChange('spaEmail', e.target.value)} /></div>
              <div className="modal-field" style={{ gridColumn: 'span 2' }}><label className="modal-label">Adresse</label><input className="modal-input" value={settings.address} onChange={e => handleChange('address', e.target.value)} /></div>
              <div className="modal-field"><label className="modal-label">Horaires généraux</label><input className="modal-input" value={settings.generalHours} onChange={e => handleChange('generalHours', e.target.value)} /></div>
              <div className="modal-field"><label className="modal-label">Horaires Bowling</label><input className="modal-input" value={settings.bowlingHours} onChange={e => handleChange('bowlingHours', e.target.value)} /></div>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'faq' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button onClick={openAddFaq} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', backgroundColor: '#182030', color: '#EDE8DF', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}><Plus size={16} /> Ajouter une question</button>
          </div>
          {faq.map(item => (
            <div key={item.id} style={{ backgroundColor: '#182030', borderRadius: '8px', padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '16px', fontWeight: 500, marginBottom: '8px' }}>{item.question}</div>
                  <div style={{ fontSize: '14px', opacity: 0.7 }}>{item.answer}</div>
                </div>
                <div style={{ display: 'flex', gap: '8px', marginLeft: '16px' }}>
                  <button onClick={() => openEditFaq(item)} style={{ color: '#C8A84B', padding: '8px', opacity: 0.7 }}><Pencil size={18} /></button>
                  <button onClick={() => handleDeleteFaq(item.id)} style={{ color: '#E05A5A', padding: '8px', opacity: 0.8 }}><Trash2 size={18} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeSection === 'social' && (
        <div style={{ backgroundColor: '#182030', padding: '24px', borderRadius: '8px' }}>
          <h3 style={{ fontSize: '18px', color: '#C8A84B', marginBottom: '16px' }}>Liens réseaux sociaux</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="modal-field"><label className="modal-label">TikTok</label><input className="modal-input" value={settings.tiktokUrl || ''} onChange={e => handleChange('tiktokUrl', e.target.value)} placeholder="https://tiktok.com/@..." /></div>
            <div className="modal-field"><label className="modal-label">Facebook / Instagram</label><input className="modal-input" value={settings.facebookUrl || ''} onChange={e => handleChange('facebookUrl', e.target.value)} placeholder="https://www.instagram.com/..." /></div>
            <div className="modal-field"><label className="modal-label">Email de contact</label><input className="modal-input" value={settings.spaEmail} onChange={e => handleChange('spaEmail', e.target.value)} /></div>
          </div>
        </div>
      )}

      <Modal isOpen={faqModal} onClose={() => setFaqModal(false)} title={editingFaqId ? 'Modifier la question' : 'Ajouter une question'}>
        <div className="modal-field"><label className="modal-label">Question</label><input className="modal-input" value={faqForm.question} onChange={e => setFaqForm({...faqForm, question: e.target.value})} placeholder="Ex: Quels sont vos horaires ?" /></div>
        <div className="modal-field"><label className="modal-label">Réponse</label><textarea className="modal-textarea" value={faqForm.answer} onChange={e => setFaqForm({...faqForm, answer: e.target.value})} rows={4} placeholder="Réponse détaillée..." /></div>
        <div className="modal-actions"><button className="modal-btn-cancel" onClick={() => setFaqModal(false)}>Annuler</button><button className="modal-btn-confirm" onClick={handleFaqSubmit}>{editingFaqId ? 'Modifier' : 'Ajouter'}</button></div>
      </Modal>
    </div>
  );
};

export default AdminAccueil;
