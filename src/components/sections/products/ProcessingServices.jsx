/* src/components/sections/products/ProcessingServices.jsx */
import { Hammer, Palette, Layers, ClipboardCheck, Gem } from 'lucide-react';
import { productsData } from '../../../data/siteData';

export default function ProcessingServices() {
  const { services } = productsData;

  const getIcon = (title) => {
    switch (title) {
      case 'Cutting': return <Hammer size={22} />;
      case 'Shaping': return <Palette size={22} />;
      case 'Surface preparation': return <Layers size={22} />;
      case 'Quality inspection': return <ClipboardCheck size={22} />;
      case 'Product finishing': return <Gem size={22} />;
      default: return <Gem size={22} />;
    }
  };

  return (
    <section className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">03 — Processing</span>
          <h2 className="section-title">{services.title}</h2>
          <p className="section-subtitle">{services.subtitle}. {services.description}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 'var(--space-lg)' }}>
          {services.capabilities.map((s, i) => (
            <div key={i} className="glass-panel" style={{ padding: 'var(--space-lg)', textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', background: 'rgba(183,142,58,0.06)', padding: '14px', borderRadius: '50%', color: 'var(--accent-primary)', marginBottom: '12px' }}>
                {getIcon(s)}
              </div>
              <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>{s}</h4>
            </div>
          ))}
        </div>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginTop: 'var(--space-xl)', maxWidth: '650px', marginLeft: 'auto', marginRight: 'auto' }}>
          {services.footnote}
        </p>
      </div>
    </section>
  );
}
