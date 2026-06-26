/* src/components/sections/mining/ExtractionProcess.jsx */
import { miningData } from '../../../data/siteData';

export default function ExtractionProcess() {
  const { extractionProcess } = miningData;
  return (
    <section className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Process Flow</span>
          <h2 className="section-title">{extractionProcess.title}</h2>
          <p className="section-subtitle">{extractionProcess.intro}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 'var(--space-md)' }}>
          {extractionProcess.steps.map((proc, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: 'var(--space-md)', position: 'relative' }}>
              <span style={{ fontSize: '2rem', fontWeight: 800, color: 'rgba(183,142,58,0.08)', fontFamily: 'var(--font-display)', position: 'absolute', top: '10px', right: '15px' }}>
                0{idx + 1}
              </span>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginTop: '15px', marginBottom: '8px', color: 'var(--text-primary)' }}>{proc.title}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: '1.5' }}>{proc.desc}</p>
            </div>
          ))}
        </div>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginTop: 'var(--space-lg)', fontSize: '0.95rem' }}>
          {extractionProcess.outro}
        </p>
      </div>
    </section>
  );
}
