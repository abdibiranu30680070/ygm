/* src/components/sections/mining/QuarryStrategy.jsx */
import { Compass, Eye, Settings, Truck, Pickaxe } from 'lucide-react';
import { miningData } from '../../../data/siteData';

export default function QuarryStrategy() {
  const { quarryStrategy } = miningData;

  const getIcon = (idx) => {
    switch (idx) {
      case 0: return <Compass size={22} />;
      case 1: return <Eye size={22} />;
      case 2: return <Settings size={22} />;
      case 3: return <Truck size={22} />;
      case 4: return <Pickaxe size={22} />;
      default: return <Compass size={22} />;
    }
  };

  return (
    <section className="section" style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Methodology</span>
          <h2 className="section-title">{quarryStrategy.title}</h2>
          <p className="section-subtitle">{quarryStrategy.intro}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 'var(--space-lg)' }}>
          {quarryStrategy.points.map((step, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: 'var(--space-lg)', textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', background: 'rgba(183,142,58,0.06)', padding: '12px', borderRadius: '50%', color: 'var(--accent-primary)', marginBottom: '15px' }}>
                {getIcon(idx)}
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '10px', color: 'var(--text-primary)' }}>Phase 0{idx + 1}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6' }}>{step}</p>
            </div>
          ))}
        </div>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginTop: 'var(--space-lg)', fontSize: '0.95rem' }}>
          {quarryStrategy.outro}
        </p>
      </div>
    </section>
  );
}
