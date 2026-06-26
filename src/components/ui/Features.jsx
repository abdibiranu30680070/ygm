/* src/components/ui/Features.jsx */
import { Layout, Palette, Terminal, Shield, Cpu, Layers } from 'lucide-react';
import '../../styles/features.css';

export default function Features() {
  const featureList = [
    {
      icon: <Layout size={22} />,
      title: 'Modular Layout',
      desc: 'Organized into layout wrappers, pages, and components. Keeps code readable and isolated.'
    },
    {
      icon: <Palette size={22} />,
      title: 'Premium Styling',
      desc: 'Elegant Vanilla CSS with custom properties (tokens) for rapid design customization and high visual appeal.'
    },
    {
      icon: <Terminal size={22} />,
      title: 'Vite Powered',
      desc: 'Ultra-fast Hot Module Replacement (HMR) and modular building process out of the box.'
    },
    {
      icon: <Shield size={22} />,
      title: 'Production Optimization',
      desc: 'Configured for high lighthouse scores, code splitting, asset management, and fast builds.'
    },
    {
      icon: <Cpu size={22} />,
      title: 'State Architecture',
      desc: 'Built using react states and contexts, offering a clean, unidirectional data flow environment.'
    },
    {
      icon: <Layers size={22} />,
      title: 'Rich Assets Layer',
      desc: 'Clean organization of global icons, graphics, utility services, and media pipelines.'
    }
  ];

  return (
    <section id="features" className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="ambient-glow glow-purple" style={{ top: '20%', right: '10%', width: '450px', height: '450px' }}></div>
      
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Architecture</span>
          <h2 className="section-title">Engineered For Quality</h2>
          <p className="section-subtitle">
            A comprehensive structure designed to eliminate code spaghetti and establish robust development conventions.
          </p>
        </div>

        <div className="features-grid">
          {featureList.map((feat, index) => (
            <div key={index} className="glass-panel feature-card">
              <div className="feature-icon-wrapper">
                {feat.icon}
              </div>
              <h3 className="feature-card-title">{feat.title}</h3>
              <p className="feature-card-desc">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
