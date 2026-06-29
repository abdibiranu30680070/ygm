/* src/components/sections/profile/IndustryCapability.jsx */
import { profileData } from '../../../data/siteData';
import '../../../styles/profile.css';

export default function IndustryCapability() {
  const { capabilities } = profileData;
  return (
    <section className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container industry-capability-grid">
        <div>
          <span className="section-badge">Capabilities</span>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 'var(--space-md)' }}>{capabilities.title}</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '15px' }}>
            {capabilities.intro}
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
            {capabilities.outro}
          </p>
        </div>
        <div className="glass-panel" style={{ padding: 'var(--space-2xl)' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '15px' }}>Core Engineering Capabilities:</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            {capabilities.items.map((item, idx) => (
              <li key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <span style={{ color: 'var(--accent-primary)', fontWeight: 800 }}>•</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
