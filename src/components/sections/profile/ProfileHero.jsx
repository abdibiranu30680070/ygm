/* src/components/sections/profile/ProfileHero.jsx */
import { profileData } from '../../../data/siteData';

export default function ProfileHero() {
  const { hero } = profileData;
  return (
    <section className="hero hero-small" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}>
        <span className="section-badge">{hero.badge}</span>
        <h1 className="hero-title" style={{ fontSize: '2.8rem', marginBottom: 'var(--space-md)' }}>
          {hero.title}
        </h1>
        <p className="hero-desc" style={{ fontSize: '1.05rem', margin: '0 auto', maxWidth: '700px', color: 'var(--text-secondary)' }}>
          {hero.companyName} <br />
          <span style={{ fontSize: '0.95rem', color: 'var(--accent-primary)', marginTop: '8px', display: 'block' }}>
            {hero.statement}
          </span>
        </p>
      </div>
    </section>
  );
}
