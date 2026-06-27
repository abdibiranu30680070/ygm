/* src/components/sections/plant/PlantHero.jsx */
import { processingData } from '../../../data/siteData';

export default function PlantHero() {
  const { hero } = processingData;
  return (
    <section className="hero hero-small" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}>
        <span className="section-badge">Production Center</span>
        <h1 className="hero-title" style={{ fontSize: '2.8rem', marginBottom: 'var(--space-md)' }}>
          Processing <span className="accent-gradient-text">Plant</span>
        </h1>
        <p className="hero-desc" style={{ fontSize: '1.05rem', margin: '0 auto', maxWidth: '700px' }}>
          {hero.subtitle}.
        </p>
      </div>
    </section>
  );
}
