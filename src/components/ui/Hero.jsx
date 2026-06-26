/* src/components/ui/Hero.jsx */
import { ArrowRight, Star, Sparkles, ShieldCheck } from 'lucide-react';
import '../../styles/hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero fade-in">
      {/* Ambient Lights */}
      <div className="ambient-glow glow-indigo" style={{ top: '-10%', left: '15%', width: '600px', height: '600px' }}></div>
      <div className="ambient-glow glow-cyan" style={{ bottom: '10%', right: '5%', width: '400px', height: '400px' }}></div>

      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge fade-in delay-1">
            <span className="hero-badge-tag">New</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              Version 3.5 is now live <Sparkles size={14} className="accent-gradient-text" />
            </span>
          </div>

          <h1 className="hero-title fade-in delay-2">
            Build Stunning <br />
            <span className="accent-gradient-text">Static Websites</span> <br />
            With Rich Aesthetics.
          </h1>

          <p className="hero-desc fade-in delay-3">
            A premium, professional boiler template curated with gorgeous dark-mode visuals, glassmorphism design variables, and modular component structures.
          </p>

          <div className="hero-buttons fade-in delay-3" style={{ marginTop: '10px' }}>
            <a href="#features" className="btn btn-primary">
              Explore Structure <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let&apos;s Build Together
            </a>
          </div>
        </div>

        <div className="hero-visual fade-in delay-2">
          <div className="visual-canvas">
            <div className="glow-orb"></div>
            {/* Minimal aesthetic graphic */}
            <div style={{ textAlign: 'center', zIndex: 1, padding: 'var(--space-xl)' }}>
              <div className="accent-gradient-text" style={{ fontSize: '7rem', fontWeight: 800, lineHeight: 1 }}>
                AG
              </div>
              <p style={{ color: 'var(--text-secondary)', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.8rem' }}>
                Antigravity Boiler
              </p>
            </div>

            {/* Floating Decorative Card 1 */}
            <div className="floating-card-1">
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: '8px' }}>
                <div style={{ background: 'rgba(99, 102, 241, 0.2)', padding: '6px', borderRadius: '6px', color: '#818cf8' }}>
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 600 }}>Production Ready</h4>
                  <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Fully optimized code</p>
                </div>
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>100% Secure</div>
            </div>

            {/* Floating Decorative Card 2 */}
            <div className="floating-card-2">
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#fbbf24', marginBottom: '4px' }}>
                <Star size={12} fill="#fbbf24" />
                <Star size={12} fill="#fbbf24" />
                <Star size={12} fill="#fbbf24" />
                <Star size={12} fill="#fbbf24" />
                <Star size={12} fill="#fbbf24" />
              </div>
              <h4 style={{ fontSize: '0.8rem', fontWeight: 600, marginBottom: '2px' }}>Aesthetic Rating</h4>
              <p style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>Loved by creators</p>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '4px', color: '#10b981' }}>5.0 / 5.0</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
