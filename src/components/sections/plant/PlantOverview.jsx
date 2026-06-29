/* src/components/sections/plant/PlantOverview.jsx */
import { processingData } from '../../../data/siteData';
import '../../../styles/profile.css';

export default function PlantOverview() {
  const { overview } = processingData;
  return (
    <section className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container plant-overview-grid">
        <div>
          <span className="section-badge">production center</span>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 'var(--space-md)' }}>{overview.title}</h2>
          {overview.paragraphs.map((para, idx) => (
            <p key={idx} style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: idx < overview.paragraphs.length - 1 ? '15px' : '0' }}>
              {para}
            </p>
          ))}
        </div>

        <div className="glass-panel" style={{ padding: 'var(--space-xl)', borderLeft: '3px solid var(--accent-primary)' }}>
          <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-display)', marginBottom: '15px' }}>Facility Indicators</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: 'var(--accent-primary)' }}>✔</span> Italian Sizing Saws</li>
            <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: 'var(--accent-primary)' }}>✔</span> Automated Calibrators</li>
            <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: 'var(--accent-primary)' }}>✔</span> Dust Filtration Systems</li>
            <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: 'var(--accent-primary)' }}>✔</span> Continuous Wet-Polishing</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
