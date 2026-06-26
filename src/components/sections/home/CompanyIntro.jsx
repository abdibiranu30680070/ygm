/* src/components/sections/home/CompanyIntro.jsx */
import { homeData } from '../../../data/siteData';

export default function CompanyIntro() {
  const { introduction } = homeData;
  return (
    <section id="introduction" className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 'var(--space-2xl)', alignItems: 'center' }}>
        <div>
          <span className="section-badge">{introduction.badge}</span>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 'var(--space-md)' }}>
            {introduction.title}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: 'var(--space-md)', lineHeight: '1.8' }}>
            {introduction.description1}
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
            {introduction.description2} {introduction.description3}
          </p>
        </div>
        
        <div className="glass-panel" style={{ padding: 'var(--space-xl)', borderLeft: '3px solid var(--accent-primary)' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-md)', fontFamily: 'var(--font-display)' }}>Industrial Focus</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>✓</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Quarry Exploration &amp; Mining Development</span>
            </li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>✓</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Advanced Stone Cutting &amp; Polishing Technology</span>
            </li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>✓</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Rigorous Quality Assurance Standards</span>
            </li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>✓</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>National Infrastructure Logistics System</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
