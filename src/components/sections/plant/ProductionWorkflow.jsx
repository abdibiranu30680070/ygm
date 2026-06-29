/* src/components/sections/plant/ProductionWorkflow.jsx */
import { processingData } from '../../../data/siteData';
import '../../../styles/profile.css';

export default function ProductionWorkflow() {
  const { workflow } = processingData;
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Workflow</span>
          <h2 className="section-title">{workflow.title}</h2>
          <p className="section-subtitle">{workflow.intro}</p>
        </div>

        <div className="production-workflow-grid">
          {workflow.steps.map((step, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: 'var(--space-md)', position: 'relative' }}>
              <span style={{ fontSize: '2rem', fontWeight: 800, color: 'rgba(183,142,58,0.08)', fontFamily: 'var(--font-display)', position: 'absolute', top: '10px', right: '15px' }}>
                {step.num}
              </span>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginTop: '15px', marginBottom: '8px', color: 'var(--text-primary)' }}>{step.title}</h4>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', paddingLeft: '12px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                {step.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
