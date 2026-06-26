/* src/components/sections/PageHero.jsx */
import PropTypes from 'prop-types';
import { Sparkles } from 'lucide-react';
import '../../styles/hero.css';

export default function PageHero({ title, subtitle, badge }) {
  return (
    <section className="hero hero-small">
      {/* Ambient Lights */}
      <div className="ambient-glow glow-indigo" style={{ top: '-10%', left: '15%', width: '500px', height: '500px' }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-content" style={{ maxWidth: '850px' }}>
          {badge && (
            <div className="hero-badge">
              <span className="hero-badge-tag">{badge}</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                Corporate Prestige <Sparkles size={14} style={{ color: 'var(--accent-primary)' }} />
              </span>
            </div>
          )}
          
          <h1 className="hero-title" style={{ fontSize: '2.8rem', marginBottom: '10px' }}>
            {title}
          </h1>
          
          {subtitle && (
            <p className="hero-desc" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)' }}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

PageHero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  badge: PropTypes.string
};
