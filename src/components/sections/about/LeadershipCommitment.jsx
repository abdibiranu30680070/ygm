/* src/components/sections/about/LeadershipCommitment.jsx */
import { aboutData } from '../../../data/siteData';

export default function LeadershipCommitment() {
  const { leadership, closing } = aboutData;
  return (
    <>
      <section className="section" style={{ borderBottom: '1px solid var(--border-color)', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2xl)', alignItems: 'center' }}>
          <div>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 'var(--space-md)' }}>{leadership.title}</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: 'var(--space-md)' }}>
              {leadership.description}
            </p>
          </div>
          <div className="glass-panel" style={{ padding: 'var(--space-2xl)' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px' }}>Key Priorities:</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              {leadership.points.map((pt, idx) => (
                <li key={idx} style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--accent-primary)' }}>•</span> {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 className="section-title" style={{ fontSize: '2.2rem', marginBottom: 'var(--space-md)' }}>Moving Forward</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
            {closing.text} {closing.subtext}
          </p>
          <a href="/#contact" className="btn btn-primary">
            Partner with YMG Today
          </a>
        </div>
      </section>
    </>
  );
}
