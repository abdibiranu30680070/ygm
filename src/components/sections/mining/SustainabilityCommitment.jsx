/* src/components/sections/mining/SustainabilityCommitment.jsx */
import { miningData } from '../../../data/siteData';

export default function SustainabilityCommitment() {
  const { sustainability } = miningData;
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Sustainability</span>
          <h2 className="section-title">{sustainability.title}</h2>
          <p className="section-subtitle">{sustainability.intro}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 'var(--space-lg)' }}>
          {sustainability.points.map((point, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: 'var(--space-lg)', textAlign: 'center' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>Commitment 0{idx + 1}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6' }}>{point}</p>
            </div>
          ))}
        </div>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginTop: 'var(--space-lg)', fontSize: '0.95rem' }}>
          {sustainability.outro}
        </p>
      </div>
    </section>
  );
}
