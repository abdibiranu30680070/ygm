/* src/components/sections/mining/MiningHero.jsx */
import { miningData } from '../../../data/siteData';

export default function MiningHero() {
  const { hero } = miningData;
  return (
    <section className="hero hero-small" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}>
        <span className="section-badge">Industrial Mining</span>
        <h1 className="hero-title" style={{ fontSize: '2.8rem', marginBottom: 'var(--space-md)' }}>
          Mining <span className="accent-gradient-text">Operations</span>
        </h1>
        <p className="hero-desc" style={{ fontSize: '1.05rem', margin: '0 auto', maxWidth: '700px' }}>
          {hero.subtitle}.
        </p>
      </div>
    </section>
  );
}
