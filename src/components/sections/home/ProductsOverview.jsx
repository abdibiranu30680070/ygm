/* src/components/sections/home/ProductsOverview.jsx */
import { homeData } from '../../../data/siteData';

export default function ProductsOverview() {
  const { productsOverview } = homeData;
  return (
    <section id="products" className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{productsOverview.badge}</span>
          <h2 className="section-title">{productsOverview.title}</h2>
          <p className="section-subtitle">{productsOverview.footerNote}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 'var(--space-xl)' }}>
          {/* Granite Products */}
          <div className="glass-panel" style={{ padding: 'var(--space-2xl)', display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-md)' }}>
            <div style={{ borderLeft: '3px solid var(--accent-primary)', paddingLeft: '15px' }}>
              <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-display)', marginBottom: '5px' }}>
                {productsOverview.items[0].type}
              </h3>
              <p style={{ color: 'var(--accent-primary)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {productsOverview.items[0].tagline}
              </p>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
              {productsOverview.items[0].desc}
            </p>
            
            <div className="stone-pattern-grid" style={{ marginTop: '10px' }}>
              <div className="stone-pattern-item">
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>Raw Blocks</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Heavy structural grade</p>
              </div>
              <div className="stone-pattern-item">
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>Polished Slabs</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Mirror-finish facades</p>
              </div>
            </div>
          </div>

          {/* Limestone Products */}
          <div className="glass-panel" style={{ padding: 'var(--space-2xl)', display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-md)' }}>
            <div style={{ borderLeft: '3px solid var(--accent-secondary)', paddingLeft: '15px' }}>
              <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-display)', marginBottom: '5px' }}>
                {productsOverview.items[1].type}
              </h3>
              <p style={{ color: 'var(--accent-secondary)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {productsOverview.items[1].tagline}
              </p>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
              {productsOverview.items[1].desc}
            </p>

            <div className="stone-pattern-grid" style={{ marginTop: '10px' }}>
              <div className="stone-pattern-item" style={{ background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>Cladding Stone</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Fine architectural grade</p>
              </div>
              <div className="stone-pattern-item" style={{ background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>Industrial Grade</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Cement &amp; aggregation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
