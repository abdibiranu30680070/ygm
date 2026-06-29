/* src/components/sections/profile/BusinessActivities.jsx */
import { profileData } from '../../../data/siteData';
import '../../../styles/profile.css';

export default function BusinessActivities() {
  const { activities } = profileData;
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Operations</span>
          <h2 className="section-title">{activities.title}</h2>
          <p className="section-subtitle">{activities.intro}</p>
        </div>

        <div className="business-activities-grid">
          {/* Granite Mining */}
          <div className="glass-panel" style={{ padding: 'var(--space-2xl)', borderTop: '3px solid var(--accent-primary)' }}>
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', marginBottom: '15px' }}>{activities.granite.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '15px' }}>
              {activities.granite.desc}
            </p>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px', marginBottom: '20px' }}>
              {activities.granite.applications.map((app, i) => <li key={i}>{app}</li>)}
            </ul>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontStyle: 'italic', borderTop: '1px solid var(--border-color)', paddingTop: '10px' }}>
              {activities.granite.footnote}
            </p>
          </div>

          {/* Limestone Mining */}
          <div className="glass-panel" style={{ padding: 'var(--space-2xl)', borderTop: '3px solid var(--accent-secondary)' }}>
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', marginBottom: '15px' }}>{activities.limestone.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '15px' }}>
              {activities.limestone.desc}
            </p>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px', marginBottom: '20px' }}>
              {activities.limestone.applications.map((app, i) => <li key={i}>{app}</li>)}
            </ul>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontStyle: 'italic', borderTop: '1px solid var(--border-color)', paddingTop: '10px' }}>
              {activities.limestone.footnote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
