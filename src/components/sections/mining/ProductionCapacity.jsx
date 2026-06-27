/* src/components/sections/mining/ProductionCapacity.jsx */
import { ArrowRight } from 'lucide-react';
import { miningData } from '../../../data/siteData';

export default function ProductionCapacity() {
  const { capability, statement } = miningData;
  return (
    <>
      <section className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2xl)', alignItems: 'center' }}>
          <div>
            <span className="section-badge">Scale</span>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 'var(--space-md)' }}>{capability.title}</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: 'var(--space-md)' }}>
              {capability.intro}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {capability.points.map((pt, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ color: 'var(--accent-primary)', fontWeight: 800 }}>•</span>
                  <span style={{ color: 'var(--text-secondary)' }}>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel" style={{ padding: 'var(--space-2xl)', borderTop: '3px solid var(--accent-primary)' }}>
            <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-display)', marginBottom: '15px' }}>{statement.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '15px' }}>
              {statement.intro}
            </p>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px', marginBottom: '20px' }}>
              {statement.points.map((pt, idx) => (
                <li key={idx}>{pt}</li>
              ))}
            </ul>
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '15px', marginTop: '15px' }}>
              <a href="#processing-plant" className="btn btn-primary" style={{ width: '100%' }}>
                View Processing Workflow <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
