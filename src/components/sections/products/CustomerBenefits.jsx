/* src/components/sections/products/CustomerBenefits.jsx */
import { Factory, Gem, Handshake, Landmark } from 'lucide-react';
import { productsData } from '../../../data/siteData';

export default function CustomerBenefits() {
  const { benefits } = productsData;

  const getIcon = (title) => {
    switch (title) {
      case 'Reliable Supply': return <Factory size={22} />;
      case 'Quality Products': return <Gem size={22} />;
      case 'Professional Service': return <Handshake size={22} />;
      case 'Long-Term Partnership': return <Landmark size={22} />;
      default: return <Gem size={22} />;
    }
  };

  return (
    <section className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">05 — Benefits</span>
          <h2 className="section-title">{benefits.title}</h2>
          <p className="section-subtitle">{benefits.subtitle}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-lg)' }}>
          {benefits.items.map((b, i) => (
            <div key={i} className="glass-panel" style={{ padding: 'var(--space-xl)', textAlign: 'center', borderTop: '3px solid var(--accent-primary)' }}>
              <div style={{ display: 'inline-flex', background: 'rgba(183,142,58,0.06)', padding: '14px', borderRadius: '50%', color: 'var(--accent-primary)', marginBottom: '15px' }}>
                {getIcon(b.title)}
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px' }}>{b.title}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6' }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
