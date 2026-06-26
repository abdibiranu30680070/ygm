/* src/components/sections/mining/EquipmentFleet.jsx */
import { miningData } from '../../../data/siteData';

export default function EquipmentFleet() {
  const { equipment } = miningData;
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Equipment</span>
          <h2 className="section-title">{equipment.title}</h2>
          <p className="section-subtitle">{equipment.intro}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-xl)' }}>
          <div className="glass-panel" style={{ padding: 'var(--space-xl)' }}>
            <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-display)', marginBottom: 'var(--space-md)', color: 'var(--accent-primary)' }}>Mining Machinery Fleet</h3>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '20px' }}>
              {equipment.fleet.map((item, idx) => (
                <li key={idx}><strong>{item}</strong></li>
              ))}
            </ul>
          </div>
          
          <div className="glass-panel" style={{ padding: 'var(--space-xl)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '10px' }}>Preventive Maintenance</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
              {equipment.outro}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
