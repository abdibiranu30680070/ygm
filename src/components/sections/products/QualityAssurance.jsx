/* src/components/sections/products/QualityAssurance.jsx */
import { ShieldCheck } from 'lucide-react';
import { productsData } from '../../../data/siteData';

export default function QualityAssurance() {
  const { quality } = productsData;
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2xl)', alignItems: 'center' }}>
        <div>
          <span className="section-badge">04 — Quality</span>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 'var(--space-md)' }}>{quality.title}</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: 'var(--space-md)' }}>
            {quality.description}
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
            {quality.footnote}
          </p>
        </div>
        <div className="glass-panel" style={{ padding: 'var(--space-xl)' }}>
          <h4 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--accent-primary)', marginBottom: '15px' }}>Controlled Procedures</h4>
          {quality.stages.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '10px 0', borderBottom: i < quality.stages.length - 1 ? '1px solid var(--border-color)' : 'none' }}>
              <ShieldCheck size={16} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
