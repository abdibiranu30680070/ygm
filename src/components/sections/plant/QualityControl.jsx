/* src/components/sections/plant/QualityControl.jsx */
import { ShieldCheck } from 'lucide-react';
import { processingData } from '../../../data/siteData';

export default function QualityControl() {
  const { qualityControl } = processingData;
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2xl)', alignItems: 'center' }}>
        <div className="glass-panel" style={{ padding: 'var(--space-2xl)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 'var(--space-md)' }}>
            <ShieldCheck size={24} style={{ color: 'var(--accent-primary)' }} />
            <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-display)' }}>{qualityControl.measuresTitle}</h3>
          </div>
          <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '20px' }}>
            {qualityControl.measures.map((measure, idx) => (
              <li key={idx}><strong>{measure}</strong></li>
            ))}
          </ul>
        </div>
        <div>
          <span className="section-badge">Quality Assurance</span>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 'var(--space-md)' }}>{qualityControl.title}</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '15px' }}>
            {qualityControl.intro}
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
            {qualityControl.outro}
          </p>
        </div>
      </div>
    </section>
  );
}
