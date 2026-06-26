/* src/components/sections/about/CompanyBackground.jsx */
import { aboutData } from '../../../data/siteData';

export default function CompanyBackground() {
  const { background } = aboutData;
  return (
    <section className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2xl)', alignItems: 'center' }}>
        <div>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 'var(--space-md)' }}>{background.title}</h2>
          {background.paragraphs.map((para, idx) => (
            <p key={idx} style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: idx < background.paragraphs.length - 1 ? 'var(--space-md)' : '0' }}>
              {para}
            </p>
          ))}
        </div>
        
        <div className="glass-panel" style={{ padding: 'var(--space-2xl)', background: 'linear-gradient(135deg, rgba(0,0,0,0.02) 0%, rgba(255,255,255,0.85) 100%)' }}>
          <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-display)', marginBottom: '15px' }}>Geological Integrity</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '15px' }}>
            Our quarry sites are selected based on rigorous chemical analysis and physical testing. YMG granite and limestone exhibit exceptional weathering properties and load-bearing performance, suitable for commercial facades, structural foundations, and municipal paving.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', borderTop: '1px solid var(--border-color)', paddingTop: '15px' }}>
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-primary)', fontFamily: 'var(--font-display)' }}>High density</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Low water absorption index</p>
            </div>
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-primary)', fontFamily: 'var(--font-display)' }}>Eco Quarry</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Sustainable footprint focus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
