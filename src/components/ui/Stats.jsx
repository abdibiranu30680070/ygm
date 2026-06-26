/* src/components/ui/Stats.jsx */
import '../../styles/stats.css';

export default function Stats() {
  const statsList = [
    {
      number: '99.9%',
      label: 'Build Stability',
      desc: 'Seamless builds under Vite compiler engine.'
    },
    {
      number: '< 50ms',
      label: 'HMR Response',
      desc: 'Blazing fast Hot Module Replacement response.'
    },
    {
      number: '100',
      label: 'Lighthouse Score',
      desc: 'Optimized static assets and performance.'
    },
    {
      number: '24/7',
      label: 'Developer Flow',
      desc: 'Fluid structure supporting easy modification.'
    }
  ];

  return (
    <section id="stats" className="section">
      {/* Ambient Lights */}
      <div className="ambient-glow glow-indigo" style={{ top: '10%', left: '5%', width: '400px', height: '400px' }}></div>
      <div className="ambient-glow glow-cyan" style={{ bottom: '10%', right: '5%', width: '350px', height: '350px' }}></div>
      
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Performance</span>
          <h2 className="section-title">Speed Meets Structure</h2>
          <p className="section-subtitle">
            Static site performance is critical. We designed this layout to be as light as a feather and fast as lightning.
          </p>
        </div>

        <div className="stats-grid">
          {statsList.map((stat, index) => (
            <div key={index} className="glass-panel stat-card">
              <div className="stat-number">{stat.number}</div>
              <h3 className="stat-label">{stat.label}</h3>
              <p className="stat-desc">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
