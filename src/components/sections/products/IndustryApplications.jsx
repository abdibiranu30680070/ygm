/* src/components/sections/products/IndustryApplications.jsx */
import { Home, Building, Landmark, Layers, Palette, Factory } from 'lucide-react';
import { productsData } from '../../../data/siteData';
import { Link } from 'react-router-dom';

export default function IndustryApplications() {
  const { industryApplications, statement } = productsData;

  const getIcon = (label) => {
    switch (label) {
      case 'Residential construction': return <Home size={18} />;
      case 'Commercial buildings': return <Building size={18} />;
      case 'Government projects': return <Landmark size={18} />;
      case 'Infrastructure development': return <Layers size={18} />;
      case 'Real estate developments': return <Building size={18} />;
      case 'Architectural projects': return <Palette size={18} />;
      case 'Industrial applications': return <Factory size={18} />;
      default: return <Building size={18} />;
    }
  };

  return (
    <>
      <section className="section" style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2xl)', alignItems: 'center' }}>
          <div>
            <span className="section-badge">06 — Applications</span>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 'var(--space-md)' }}>{industryApplications.title}</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>{industryApplications.description}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {industryApplications.sectors.map((app, i) => (
              <div key={i} className="glass-panel" style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: 'var(--accent-primary)' }}>{getIcon(app)}</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <div style={{ borderTop: '3px solid var(--accent-primary)', width: '60px', margin: '0 auto var(--space-lg) auto' }}></div>
          <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: 'var(--space-md)' }}>Product Commitment</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.9', fontStyle: 'italic' }}>
            &ldquo;{statement.text}&rdquo;
          </p>
          <div style={{ marginTop: 'var(--space-xl)', display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/operations" className="btn btn-primary">
              Mining Operations
            </Link>
            <Link to="/operations#processing-plant" className="btn btn-secondary">
              Processing Plant
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
