/* src/components/sections/about/StrategicDirection.jsx */
import { aboutData } from '../../../data/siteData';

export default function StrategicDirection() {
  const { strategicDirection } = aboutData;
  return (
    <section className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'var(--space-2xl)', alignItems: 'start' }}>
        <div>
          <span className="section-badge">Future Path</span>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 'var(--space-md)' }}>{strategicDirection.title}</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>
            {strategicDirection.description}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
            {strategicDirection.points.map((point, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '12px' }}>
                <span style={{ color: 'var(--accent-primary)', fontWeight: 800 }}>0{idx + 1}.</span>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>{point}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Positioned for regional and domestic growth.</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel" style={{ padding: 'var(--space-2xl)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '10px' }}>Production Scale</h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
            {strategicDirection.footerNote}
          </p>
        </div>
      </div>
    </section>
  );
}
