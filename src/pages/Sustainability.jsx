import { sustainabilityData } from '../data/siteData';
import { Eye, Shield, Users, Leaf, HeartPulse, ShieldAlert, Award, CheckCircle2, ChevronRight } from 'lucide-react';
import PageHero from '../components/sections/PageHero';

export default function Sustainability() {
  const {
    hero,
    overview,
    environmental,
    social,
    ohs,
    governance,
    resourceManagement,
    climate,
    esgStatement,
    longTermVision
  } = sustainabilityData;

  const getESGIcon = (badge) => {
    switch (badge) {
      case 'E': return <Leaf size={28} style={{ color: 'var(--accent-secondary)' }} />;
      case 'S': return <Users size={28} style={{ color: 'var(--accent-primary)' }} />;
      case 'OHS': return <HeartPulse size={28} style={{ color: 'var(--accent-danger)' }} />;
      case 'G': return <Shield size={28} style={{ color: 'var(--accent-primary)' }} />;
      default: return <Award size={28} style={{ color: 'var(--accent-primary)' }} />;
    }
  };

  return (
    <div className="sustainability-page fade-in">
      <PageHero title={hero.title} subtitle={hero.subtitle} badge="Responsible Development" />

      {/* Overview */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '15px' }}>{overview.title}</h2>
          {overview.paragraphs.map((p, idx) => (
            <p key={idx} style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '15px' }}>{p}</p>
          ))}
        </div>
      </section>

      {/* ESG Pillars */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">ESG Framework</span>
            <h2 className="section-title">Environmental, Social & Governance</h2>
            <p className="section-subtitle">Operating with sustainability, integrity, and ethical standards</p>
          </div>

          <div className="responsive-grid-2" style={{ marginBottom: '40px', gap: 'var(--space-xl)' }}>
            {/* E */}
            <div className="glass-panel" style={{ padding: 'var(--space-xl)', background: 'var(--bg-primary)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  {getESGIcon(environmental.badge)}
                  <h3 style={{ fontSize: '1.3rem' }}>{environmental.title}</h3>
                </div>
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-secondary)' }}>{environmental.badge}</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '15px' }}>{environmental.description}</p>
              
              <div style={{ marginBottom: '15px' }}>
                <h4 style={{ fontSize: '0.8rem', color: 'var(--accent-secondary)', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 700 }}>Commitments</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {environmental.commitments.map((com, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <span style={{ width: '4px', height: '4px', backgroundColor: 'var(--accent-secondary)', borderRadius: '50%' }}></span>
                      {com}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ fontSize: '0.8rem', color: 'var(--accent-secondary)', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 700 }}>Rehabilitation</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {environmental.rehabilitation.map((reh, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <ChevronRight size={12} style={{ color: 'var(--accent-secondary)' }} />
                      {reh}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* S */}
            <div className="glass-panel" style={{ padding: 'var(--space-xl)', background: 'var(--bg-primary)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  {getESGIcon(social.badge)}
                  <h3 style={{ fontSize: '1.3rem' }}>{social.title}</h3>
                </div>
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-primary)' }}>{social.badge}</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '15px' }}>{social.description}</p>
              
              <div style={{ marginBottom: '15px' }}>
                <h4 style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 700 }}>Community Impact</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {social.programs.map((prog, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <span style={{ width: '4px', height: '4px', backgroundColor: 'var(--accent-primary)', borderRadius: '50%' }}></span>
                      {prog}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 700 }}>Employment Policy</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {social.employment.map((emp, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <ChevronRight size={12} style={{ color: 'var(--accent-primary)' }} />
                      {emp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* OHS */}
            <div className="glass-panel" style={{ padding: 'var(--space-xl)', background: 'var(--bg-primary)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  {getESGIcon(ohs.badge)}
                  <h3 style={{ fontSize: '1.3rem' }}>{ohs.title}</h3>
                </div>
                <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-danger)' }}>{ohs.badge}</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '15px' }}>{ohs.description}</p>
              
              <div style={{ marginBottom: '15px' }}>
                <h4 style={{ fontSize: '0.8rem', color: 'var(--accent-danger)', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 700 }}>Safety Standards</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {ohs.standards.map((std, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <span style={{ width: '4px', height: '4px', backgroundColor: 'var(--accent-danger)', borderRadius: '50%' }}></span>
                      {std}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ fontSize: '0.8rem', color: 'var(--accent-danger)', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 700 }}>Safety Culture</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {ohs.culture.map((cul, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <ChevronRight size={12} style={{ color: 'var(--accent-danger)' }} />
                      {cul}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* G */}
            <div className="glass-panel" style={{ padding: 'var(--space-xl)', background: 'var(--bg-primary)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  {getESGIcon(governance.badge)}
                  <h3 style={{ fontSize: '1.3rem' }}>{governance.title}</h3>
                </div>
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-primary)' }}>{governance.badge}</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '15px' }}>{governance.description}</p>
              
              <div style={{ marginBottom: '15px' }}>
                <h4 style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 700 }}>Principles</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {governance.principles.map((pr, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <span style={{ width: '4px', height: '4px', backgroundColor: 'var(--accent-primary)', borderRadius: '50%' }}></span>
                      {pr}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 700 }}>Corporate Integrity</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {governance.integrity.map((integ, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <ChevronRight size={12} style={{ color: 'var(--accent-primary)' }} />
                      {integ}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Resource Management & Climate */}
      <section className="section">
        <div className="container responsive-grid-2">
          <div className="glass-panel" style={{ padding: 'var(--space-xl)' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: 'var(--text-primary)' }}>{resourceManagement.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '15px' }}>{resourceManagement.description}</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {resourceManagement.practices.map((pr, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-primary)' }} />
                  {pr}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel" style={{ padding: 'var(--space-xl)' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: 'var(--text-primary)' }}>{climate.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '15px' }}>{climate.description}</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {climate.actions.map((act, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-secondary)' }} />
                  {act}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ESG Statement */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 className="section-title" style={{ fontSize: '2rem' }}>{esgStatement.title}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left', margin: '30px auto', maxWidth: '600px' }}>
            {esgStatement.points.map((pt, i) => (
              <div key={i} className="glass-panel" style={{ padding: '12px 18px', display: 'flex', gap: '12px', alignItems: 'center', background: 'var(--bg-primary)' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>{pt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long term vision */}
      <section className="section dark-section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <h2 className="section-title" style={{ fontSize: '2.2rem', marginBottom: '20px' }}>Long-Term Vision</h2>
          <p style={{ color: 'var(--text-on-dark-secondary)', fontSize: '1.2rem', lineHeight: '1.8', fontStyle: 'italic' }}>
            "{longTermVision.text}"
          </p>
        </div>
      </section>
    </div>
  );
}
