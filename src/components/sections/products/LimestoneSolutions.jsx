/* src/components/sections/products/LimestoneSolutions.jsx */
import { Factory } from 'lucide-react';
import { productsData } from '../../../data/siteData';

export default function LimestoneSolutions() {
  const { limestone } = productsData;
  return (
    <section id="limestone" className="section" style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 'var(--space-2xl)', alignItems: 'center' }}>
        <div className="glass-panel" style={{ padding: 'var(--space-2xl)', borderLeft: '3px solid var(--accent-secondary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: 'var(--space-lg)' }}>
            <Factory size={24} style={{ color: 'var(--accent-secondary)' }} />
            <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-display)' }}>{limestone.applicationsTitle}</h3>
          </div>
          <ul style={{ paddingLeft: '18px', color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '10px', lineHeight: '1.6' }}>
            {limestone.applications.map((app, idx) => (
              <li key={idx}>{app}</li>
            ))}
          </ul>
        </div>
        <div>
          <span className="section-badge">02 — Limestone</span>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 'var(--space-md)' }}>{limestone.title}</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
            {limestone.description}
          </p>
        </div>
      </div>
    </section>
  );
}
