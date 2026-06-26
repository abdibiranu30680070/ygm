/* src/components/sections/plant/EnvironmentalEfficiency.jsx */
import { Link } from 'react-router-dom';
import { processingData } from '../../../data/siteData';

export default function EnvironmentalEfficiency() {
  const { environmental, capabilityStatement, excellenceCommitment } = processingData;
  return (
    <>
      <section className="section" style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2xl)', alignItems: 'center' }}>
          <div>
            <span className="section-badge">Sustainability</span>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 'var(--space-md)' }}>{environmental.title}</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '15px' }}>
              {environmental.intro}
            </p>
            <ul style={{ color: 'var(--text-secondary)', fontSize: 95, display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px' }}>
              {environmental.points.map((pt, idx) => (
                <li key={idx} style={{ fontSize: '0.9rem' }}>{pt}</li>
              ))}
            </ul>
          </div>
          <div className="glass-panel" style={{ padding: 'var(--space-xl)', background: 'linear-gradient(135deg, rgba(183,142,58,0.02) 0%, rgba(255,255,255,0.85) 100%)' }}>
            <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-display)', marginBottom: '15px' }}>{capabilityStatement.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '15px' }}>
              {capabilityStatement.intro}
            </p>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px', marginBottom: '15px' }}>
              {capabilityStatement.points.map((pt, idx) => (
                <li key={idx}>{pt}</li>
              ))}
            </ul>
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '15px' }}>
              <Link to="/" className="btn btn-primary" style={{ width: '100%' }}>
                Back to Home Page
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Excellence Commitment */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: 'var(--space-md)' }}>{excellenceCommitment.title}</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '15px' }}>
            {excellenceCommitment.intro}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
            {excellenceCommitment.points.map((pt, idx) => (
              <span key={idx} className="glass-panel" style={{ padding: '8px 16px', fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                {pt}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
