/* src/components/sections/profile/ProfileOverview.jsx */
import { profileData } from '../../../data/siteData';

export default function ProfileOverview() {
  const { overview } = profileData;
  return (
    <section className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 'var(--space-2xl)', alignItems: 'center' }}>
        <div>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 'var(--space-md)' }}>{overview.title}</h2>
          {overview.paragraphs.map((para, idx) => (
            <p key={idx} style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: idx < overview.paragraphs.length - 1 ? '15px' : '0' }}>
              {para}
            </p>
          ))}
        </div>

        <div className="glass-panel" style={{ padding: 'var(--space-xl)', borderLeft: '3px solid var(--accent-primary)', background: 'linear-gradient(135deg, rgba(183,142,58,0.02) 0%, rgba(255,255,255,0.85) 100%)' }}>
          <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-display)', marginBottom: '15px' }}>Corporate Summary</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '8px 0', color: 'var(--text-muted)' }}>Entity</td>
                <td style={{ padding: '8px 0', color: 'var(--text-primary)', textAlign: 'right', fontWeight: 600 }}>YMG Construction</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '8px 0', color: 'var(--text-muted)' }}>Origin</td>
                <td style={{ padding: '8px 0', color: 'var(--text-primary)', textAlign: 'right', fontWeight: 600 }}>Addis Ababa, Ethiopia</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '8px 0', color: 'var(--text-muted)' }}>Sector</td>
                <td style={{ padding: '8px 0', color: 'var(--text-primary)', textAlign: 'right', fontWeight: 600 }}>Granite &amp; Limestone Mining</td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', color: 'var(--text-muted)' }}>Market Scope</td>
                <td style={{ padding: '8px 0', color: 'var(--text-primary)', textAlign: 'right', fontWeight: 600 }}>Domestic &amp; Export</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
