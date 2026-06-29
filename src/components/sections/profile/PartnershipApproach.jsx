/* src/components/sections/profile/PartnershipApproach.jsx */
import { profileData } from '../../../data/siteData';
import '../../../styles/profile.css';

export default function PartnershipApproach() {
  const { partnership, statement } = profileData;
  return (
    <>
      <section className="section" style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container partnership-approach-grid">
          <div>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 'var(--space-md)' }}>{partnership.title}</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '15px' }}>
              {partnership.intro}
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
              {partnership.outro}
            </p>
          </div>
          <div className="glass-panel" style={{ padding: 'var(--space-2xl)' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '10px' }}>Partnership Framework:</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              {partnership.partners.map((partner, idx) => (
                <li key={idx} style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--accent-primary)' }}>•</span> {partner}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Corporate profile statement */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: 'var(--space-md)' }}>{statement.title}</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', fontStyle: 'italic' }}>
            &ldquo;{statement.text}&rdquo;
          </p>
          <div style={{ marginTop: 'var(--space-xl)' }}>
            <a href="/#contact" className="btn btn-primary">
              Contact Business Division
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
