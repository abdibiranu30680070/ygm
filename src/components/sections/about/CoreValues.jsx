/* src/components/sections/about/CoreValues.jsx */
import { Award, ShieldCheck, HeartHandshake, ShieldAlert, Users } from 'lucide-react';
import { aboutData } from '../../../data/siteData';

export default function CoreValues() {
  const { values } = aboutData;

  const getIcon = (title) => {
    switch (title) {
      case 'Quality Excellence': return <Award size={22} />;
      case 'Integrity': return <ShieldCheck size={22} />;
      case 'Sustainability': return <HeartHandshake size={22} />;
      case 'Innovation': return <ShieldAlert size={22} />;
      case 'Partnership': return <Users size={22} />;
      default: return <Award size={22} />;
    }
  };

  return (
    <section className="section" style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Philosophy</span>
          <h2 className="section-title">{values.title}</h2>
          <p className="section-subtitle">The ethical principles and business standards that govern every YMG project.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 'var(--space-lg)' }}>
          {values.items.map((val, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: 'var(--space-lg)', textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', background: 'rgba(183,142,58,0.06)', padding: '12px', borderRadius: '50%', color: 'var(--accent-primary)', marginBottom: '15px' }}>
                {getIcon(val.title)}
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '10px', color: 'var(--text-primary)' }}>{val.title}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6' }}>{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
