/* src/components/sections/plant/EquipmentTechnology.jsx */
import { processingData } from '../../../data/siteData';
import '../../../styles/profile.css';

export default function EquipmentTechnology() {
  const { equipment } = processingData;
  return (
    <section className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container equipment-technology-grid">
        <div>
          <span className="section-badge">Technology</span>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 'var(--space-md)' }}>{equipment.title}</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: 'var(--space-md)' }}>
            {equipment.intro}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {equipment.items.map((eq, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ color: 'var(--accent-primary)', fontWeight: 800 }}>•</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{eq}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel" style={{ padding: 'var(--space-2xl)', background: 'linear-gradient(135deg, rgba(0,0,0,0.02) 0%, rgba(255,255,255,0.9) 100%)' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '10px' }}>Precision &amp; Yield</h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
            {equipment.outro}
          </p>
        </div>
      </div>
    </section>
  );
}
