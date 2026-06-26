/* src/components/sections/profile/ManagementPhilosophy.jsx */
import { profileData } from '../../../data/siteData';

export default function ManagementPhilosophy() {
  const { philosophy, objectives } = profileData;
  return (
    <section className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2xl)' }}>
        {/* Philosophy */}
        <div className="glass-panel" style={{ padding: 'var(--space-2xl)' }}>
          <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', marginBottom: '15px' }}>{philosophy.title}</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '15px' }}>
            {philosophy.intro}
          </p>
          <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px', marginBottom: '15px' }}>
            {philosophy.points.map((pt, i) => <li key={i}>{pt}</li>)}
          </ul>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{philosophy.outro}</p>
        </div>

        {/* Objectives */}
        <div className="glass-panel" style={{ padding: 'var(--space-2xl)' }}>
          <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', marginBottom: '15px' }}>{objectives.title}</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '15px' }}>
            {objectives.intro}
          </p>
          <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px' }}>
            {objectives.points.map((pt, i) => <li key={i}>{pt}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
