/* src/components/sections/home/CoreIdentity.jsx */
import { Building, Hammer, Trophy } from 'lucide-react';
import { homeData } from '../../../data/siteData';

export default function CoreIdentity() {
  const { coreIdentity } = homeData;
  return (
    <section id="identity" className="section" style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{coreIdentity.badge}</span>
          <h2 className="section-title">{coreIdentity.title}</h2>
          <p className="section-subtitle">{coreIdentity.subtitle}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'var(--space-xl)' }}>
          {/* Who We Are */}
          <div className="glass-panel" style={{ padding: 'var(--space-xl)' }}>
            <div style={{ display: 'inline-flex', background: 'rgba(183,142,58,0.06)', padding: '12px', borderRadius: '4px', color: 'var(--accent-primary)', marginBottom: 'var(--space-lg)' }}>
              <Building size={24} />
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: 'var(--space-md)', fontFamily: 'var(--font-display)' }}>
              {coreIdentity.sections.whoWeAre.title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
              {coreIdentity.sections.whoWeAre.desc}
            </p>
          </div>

          {/* What We Do */}
          <div className="glass-panel" style={{ padding: 'var(--space-xl)' }}>
            <div style={{ display: 'inline-flex', background: 'rgba(183,142,58,0.06)', padding: '12px', borderRadius: '4px', color: 'var(--accent-primary)', marginBottom: 'var(--space-lg)' }}>
              <Hammer size={24} />
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: 'var(--space-md)', fontFamily: 'var(--font-display)' }}>
              {coreIdentity.sections.whatWeDo.title}
            </h3>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px' }}>
              {coreIdentity.sections.whatWeDo.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Our Strength */}
          <div className="glass-panel" style={{ padding: 'var(--space-xl)' }}>
            <div style={{ display: 'inline-flex', background: 'rgba(183,142,58,0.06)', padding: '12px', borderRadius: '4px', color: 'var(--accent-primary)', marginBottom: 'var(--space-lg)' }}>
              <Trophy size={24} />
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: 'var(--space-md)', fontFamily: 'var(--font-display)' }}>
              {coreIdentity.sections.ourStrength.title}
            </h3>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px' }}>
              {coreIdentity.sections.ourStrength.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
