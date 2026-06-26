/* src/components/sections/products/ProductsHero.jsx */
import { productsData } from '../../../data/siteData';

export default function ProductsHero() {
  const { hero } = productsData;
  return (
    <section className="hero" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: 'var(--space-2xl)' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}>
        <span className="section-badge">Products &amp; Services</span>
        <h1 className="hero-title" style={{ fontSize: '3.2rem', marginBottom: 'var(--space-md)' }}>
          Premium Ethiopian <br /><span className="accent-gradient-text">Natural Stone Solutions</span>
        </h1>
        <p className="hero-desc" style={{ fontSize: '1.15rem', margin: '0 auto', maxWidth: '700px' }}>
          {hero.subtitle}. {hero.description}
        </p>
      </div>
    </section>
  );
}
