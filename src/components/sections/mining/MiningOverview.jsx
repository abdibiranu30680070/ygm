/* src/components/sections/mining/MiningOverview.jsx */
import { miningData } from '../../../data/siteData';

export default function MiningOverview() {
  const { overview } = miningData;
  return (
    <section className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 'var(--space-2xl)', alignItems: 'center' }}>
        <div>
          <span className="section-badge">industrial mining</span>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 'var(--space-md)' }}>{overview.title}</h2>
          {overview.paragraphs.map((para, idx) => (
            <p key={idx} style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: idx < overview.paragraphs.length - 1 ? '15px' : '0' }}>
              {para}
            </p>
          ))}
        </div>
        
        <div className="glass-panel" style={{ padding: 'var(--space-xl)', borderLeft: '3px solid var(--accent-primary)', background: 'linear-gradient(135deg, rgba(183,142,58,0.03) 0%, rgba(255,255,255,0.9) 100%)' }}>
          <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-display)', marginBottom: '15px' }}>Operational Benchmarks</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: 'var(--accent-primary)' }}>✔</span> High Safety Compliance</li>
            <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: 'var(--accent-primary)' }}>✔</span> Advanced Wire-Saw Cutters</li>
            <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: 'var(--accent-primary)' }}>✔</span> Eco-Reclamation Planning</li>
            <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: 'var(--accent-primary)' }}>✔</span> Continuous Logistics Supply</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
