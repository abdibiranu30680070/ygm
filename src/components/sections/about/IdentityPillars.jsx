/* src/components/sections/about/IdentityPillars.jsx */
import { Landmark, Compass, Zap } from 'lucide-react';
import { aboutData } from '../../../data/siteData';

export default function IdentityPillars() {
  const { identity } = aboutData;

  const getIcon = (num) => {
    switch (num) {
      case '01': return <Landmark size={24} />;
      case '02': return <Zap size={24} />;
      case '03': return <Compass size={24} />;
      default: return <Zap size={24} />;
    }
  };

  return (
    <section className="section" style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{identity.title}</span>
          <h2 className="section-title">{identity.title}</h2>
          <p className="section-subtitle">{identity.subtitle}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-xl)' }}>
          {identity.pillars.map((pillar, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: 'var(--space-xl)' }}>
              <div style={{ display: 'inline-flex', background: 'rgba(183,142,58,0.06)', padding: '12px', borderRadius: '4px', color: 'var(--accent-primary)', marginBottom: 'var(--space-lg)' }}>
                {getIcon(pillar.num)}
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: 'var(--space-md)', fontFamily: 'var(--font-display)' }}>{pillar.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.7' }}>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
