/* src/components/sections/home/CompanyIntro.jsx */
import { homeData } from '../../../data/siteData';

export default function CompanyIntro() {
  const { introduction } = homeData;
  return (
    <section id="introduction" className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container intro-grid">
        <div>
          <span className="section-badge">{introduction.badge}</span>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 'var(--space-md)' }}>
            {introduction.title}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: 'var(--space-sm)', lineHeight: '1.7' }}>
            {introduction.description1}
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: '1.7' }}>
            {introduction.description2} {introduction.description3}
          </p>
        </div>
        
        <div className="glass-panel" style={{ padding: 'var(--space-xl)', borderLeft: '3px solid var(--accent-primary)' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-md)', fontFamily: 'var(--font-display)' }}>Industrial Focus</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>✓</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Quarry Development</span>
            </li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>✓</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Cutting &amp; Polishing</span>
            </li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>✓</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Quality Inspection</span>
            </li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>✓</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Project Logistics</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
