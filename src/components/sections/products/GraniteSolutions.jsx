/* src/components/sections/products/GraniteSolutions.jsx */
import { CheckCircle, Pickaxe, Layers, Ruler } from 'lucide-react';
import { productsData } from '../../../data/siteData';

export default function GraniteSolutions() {
  const { granite } = productsData;

  const getIcon = (idx) => {
    switch (idx) {
      case 0: return <Pickaxe size={20} />;
      case 1: return <Layers size={20} />;
      case 2: return <Ruler size={20} />;
      default: return <Layers size={20} />;
    }
  };

  return (
    <section id="granite" className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 'var(--space-2xl)', alignItems: 'start' }}>
          <div>
            <span className="section-badge">01 — Granite</span>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 'var(--space-md)' }}>{granite.title}</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: 'var(--space-md)' }}>
              {granite.description}
            </p>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-primary)', marginBottom: '12px' }}>
              {granite.benefitsTitle}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {granite.benefits.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <CheckCircle size={16} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Granite Categories */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            {granite.categories.map((cat, i) => (
              <div key={i} className="glass-panel" style={{ padding: 'var(--space-lg)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <div style={{ color: 'var(--accent-primary)' }}>{getIcon(i)}</div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{cat.title}</h4>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '8px' }}>{cat.desc}</p>
                <ul style={{ paddingLeft: '18px', color: 'var(--text-secondary)', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  {cat.applications.map((it, j) => <li key={j}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
