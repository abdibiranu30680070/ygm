/* src/components/sections/about/AboutHero.jsx */
import { aboutData } from '../../../data/siteData';

export default function AboutHero() {
  const { hero } = aboutData;
  return (
    <section className="hero" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: 'var(--space-2xl)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <span className="section-badge">{hero.badge}</span>
          <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: 'var(--space-md)' }}>
            About <span className="accent-gradient-text">YMG</span>
          </h1>
          <p className="hero-desc" style={{ fontSize: '1.25rem', margin: '0 auto', color: 'var(--text-secondary)' }}>
            {hero.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
