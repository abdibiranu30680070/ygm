/* src/components/sections/profile/OperationalModel.jsx */
import { profileData } from '../../../data/siteData';

export default function OperationalModel() {
  const { operationalModel } = profileData;
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Model</span>
          <h2 className="section-title">{operationalModel.title}</h2>
          <p className="section-subtitle">{operationalModel.intro}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-lg)' }}>
          {operationalModel.steps.map((step, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: 'var(--space-xl)', borderTop: '3px solid var(--accent-primary)', position: 'relative' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'rgba(183,142,58,0.12)', fontFamily: 'var(--font-display)', position: 'absolute', top: '10px', right: '15px' }}>
                {step.num}
              </span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '20px', marginBottom: '10px', color: 'var(--text-primary)' }}>
                {step.title}
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6' }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
