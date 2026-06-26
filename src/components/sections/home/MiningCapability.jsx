/* src/components/sections/home/MiningCapability.jsx */
import { homeData } from '../../../data/siteData';

export default function MiningCapability() {
  const { miningCapability } = homeData;
  return (
    <section id="capability" className="section" style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{miningCapability.badge}</span>
          <h2 className="section-title">{miningCapability.title}</h2>
          <p className="section-subtitle">{miningCapability.footerNote}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-lg)' }}>
          {miningCapability.items.map((step, i) => (
            <div key={i} className="glass-panel" style={{ padding: 'var(--space-lg)', position: 'relative' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'rgba(183,142,58,0.12)', fontFamily: 'var(--font-display)', position: 'absolute', top: '10px', right: '15px' }}>
                {step.step}
              </span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '20px', marginBottom: '10px', color: 'var(--text-primary)' }}>
                {step.title}
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6' }}>
                Operational capability and safety compliance aligned.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
