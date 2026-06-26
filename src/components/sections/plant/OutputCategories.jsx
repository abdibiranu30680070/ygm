/* src/components/sections/plant/OutputCategories.jsx */
import { processingData } from '../../../data/siteData';

export default function OutputCategories() {
  const { output, capacity } = processingData;
  return (
    <section className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Products &amp; Volume</span>
          <h2 className="section-title">{output.title}</h2>
          <p className="section-subtitle">{output.outro}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-xl)', marginBottom: 'var(--space-xl)' }}>
          <div className="glass-panel" style={{ padding: 'var(--space-xl)' }}>
            <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-display)', marginBottom: '15px', color: 'var(--accent-primary)' }}>Output Catalog</h3>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px' }}>
              {output.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div className="glass-panel" style={{ padding: 'var(--space-xl)' }}>
            <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-display)', marginBottom: '15px', color: 'var(--accent-primary)' }}>{capacity.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '10px' }}>{capacity.intro}</p>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px' }}>
              {capacity.points.map((pt, idx) => (
                <li key={idx}>{pt}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
