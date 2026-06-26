/* src/components/sections/mining/SafetyEnvironment.jsx */
import { Shield, HeartHandshake } from 'lucide-react';
import { miningData } from '../../../data/siteData';

export default function SafetyEnvironment() {
  const { safetyEnvironment } = miningData;
  return (
    <section className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2xl)' }}>
        {/* Safety */}
        <div className="glass-panel" style={{ padding: 'var(--space-2xl)', borderTop: '3px solid var(--accent-primary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 'var(--space-md)' }}>
            <Shield size={24} style={{ color: 'var(--accent-primary)' }} />
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)' }}>Health &amp; Safety Standards</h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '15px' }}>
            {safetyEnvironment.safetyIntro}
          </p>
          <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px' }}>
            {safetyEnvironment.safetyMeasures.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Environmental */}
        <div className="glass-panel" style={{ padding: 'var(--space-2xl)', borderTop: '3px solid var(--accent-secondary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 'var(--space-md)' }}>
            <HeartHandshake size={24} style={{ color: 'var(--accent-secondary)' }} />
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)' }}>Environmental Protection</h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '15px' }}>
            {safetyEnvironment.environmentalIntro}
          </p>
          <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px' }}>
            {safetyEnvironment.environmentalMeasures.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginTop: 'var(--space-lg)', fontSize: '0.85rem' }}>
        {safetyEnvironment.complianceNote}
      </p>
    </section>
  );
}
