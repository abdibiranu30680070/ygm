import { marketsData } from '../data/siteData';
import { Globe, Users, TrendingUp, Handshake, Shield, Sparkles, MapPin, Truck, ChevronRight, Award } from 'lucide-react';
import PageHero from '../components/sections/PageHero';

export default function Markets() {
  const {
    hero,
    overview,
    domestic,
    international,
    distribution,
    clients,
    partnerships,
    competitive,
    growth,
    vision
  } = marketsData;

  return (
    <div className="markets-page fade-in">
      <PageHero title={hero.title} subtitle={hero.subtitle} badge="Global Network" />

      {/* Overview */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '15px' }}>{overview.title}</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>{overview.description}</p>
        </div>
      </section>

      {/* Domestic & International split */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2xl)' }}>
          {/* Domestic */}
          <div className="glass-panel" style={{ padding: 'var(--space-xl)', background: 'var(--bg-primary)' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ background: 'rgba(183,142,58,0.12)', padding: '10px', borderRadius: '6px', color: 'var(--accent-primary)' }}>
                <MapPin size={24} />
              </div>
              <h3 style={{ fontSize: '1.4rem' }}>{domestic.title}</h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '0.95rem' }}>{domestic.description}</p>

            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '10px', fontWeight: 700 }}>Key Segments</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {domestic.segments.map((seg, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <ChevronRight size={14} style={{ color: 'var(--accent-primary)' }} />
                    {seg}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '10px', fontWeight: 700 }}>Market Approach</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {domestic.approach.map((app, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-secondary)', borderRadius: '50%' }}></span>
                    {app}
                  </li>
                ))}
              </ul>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic', borderTop: '1px solid var(--border-color)', paddingTop: '15px' }}>{domestic.outro}</p>
          </div>

          {/* International */}
          <div className="glass-panel" style={{ padding: 'var(--space-xl)', background: 'var(--bg-primary)' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ background: 'rgba(107,123,94,0.12)', padding: '10px', borderRadius: '6px', color: 'var(--accent-secondary)' }}>
                <Globe size={24} />
              </div>
              <h3 style={{ fontSize: '1.4rem' }}>{international.title}</h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '0.95rem' }}>{international.description}</p>

            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '0.85rem', color: 'var(--accent-secondary)', textTransform: 'uppercase', marginBottom: '10px', fontWeight: 700 }}>Target Regions</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {international.regions.map((reg, i) => (
                  <span key={i} style={{ fontSize: '0.8rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', padding: '6px 12px', borderRadius: '4px', color: 'var(--text-primary)', fontWeight: 500 }}>
                    {reg}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '0.85rem', color: 'var(--accent-secondary)', textTransform: 'uppercase', marginBottom: '10px', fontWeight: 700 }}>Export Focus Areas</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {international.focus.map((foc, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <ChevronRight size={14} style={{ color: 'var(--accent-secondary)' }} />
                    {foc}
                  </li>
                ))}
              </ul>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic', borderTop: '1px solid var(--border-color)', paddingTop: '15px' }}>{international.outro}</p>
          </div>
        </div>
      </section>

      {/* Distribution & Channels */}
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'var(--space-2xl)' }}>
          <div>
            <div className="section-badge">Supply Chain</div>
            <h2 className="section-title" style={{ fontSize: '2.2rem' }}>{distribution.title}</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>{distribution.description}</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '12px', fontWeight: 700 }}>Distribution Channels</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {distribution.channels.map((chan, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <span style={{ width: '4px', height: '4px', backgroundColor: 'var(--accent-primary)', borderRadius: '50%' }}></span>
                      {chan}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '12px', fontWeight: 700 }}>Logistics Network</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {distribution.logistics.map((log, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <Truck size={14} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                      {log}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: 'var(--space-xl)' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Users size={20} style={{ color: 'var(--accent-primary)' }} /> Client Network
            </h3>
            <div style={{ marginBottom: '15px' }}>
              <h4 style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 700 }}>Core Client Groups</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {clients.coreClients.map((client, i) => (
                  <span key={i} style={{ fontSize: '0.75rem', background: 'rgba(183,142,58,0.08)', color: 'var(--accent-primary)', padding: '4px 10px', borderRadius: '4px', fontWeight: 600 }}>
                    {client}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <h4 style={{ fontSize: '0.85rem', color: 'var(--accent-secondary)', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 700 }}>Strategic Stakeholders</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {clients.stakeholders.map((stake, i) => (
                  <span key={i} style={{ fontSize: '0.75rem', background: 'rgba(107,123,94,0.08)', color: 'var(--accent-secondary)', padding: '4px 10px', borderRadius: '4px', fontWeight: 600 }}>
                    {stake}
                  </span>
                ))}
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic', borderTop: '1px solid var(--border-color)', paddingTop: '10px' }}>{clients.outro}</p>
          </div>
        </div>
      </section>

      {/* Partnerships & Competitiveness */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2xl)' }}>
          <div className="glass-panel" style={{ padding: 'var(--space-xl)', background: 'var(--bg-primary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
              <Handshake size={24} style={{ color: 'var(--accent-primary)' }} />
              <h3 style={{ fontSize: '1.4rem' }}>{partnerships.title}</h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '15px' }}>{partnerships.description}</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {partnerships.types.map((type, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <ChevronRight size={16} style={{ color: 'var(--accent-primary)' }} />
                  {type}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel" style={{ padding: 'var(--space-xl)', background: 'var(--bg-primary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
              <Shield size={24} style={{ color: 'var(--accent-secondary)' }} />
              <h3 style={{ fontSize: '1.4rem' }}>{competitive.title}</h3>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {competitive.points.map((pt, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <Award size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Growth Strategy */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <div className="section-badge">Future Expansion</div>
          <h2 className="section-title">{growth.title}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', textAlign: 'left', margin: '30px auto', maxWidth: '600px' }}>
            {growth.points.map((pt, i) => (
              <div key={i} className="glass-panel" style={{ padding: '15px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                <TrendingUp size={16} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>{pt}</span>
              </div>
            ))}
          </div>
          <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>{growth.outro}</p>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="section dark-section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title" style={{ fontSize: '2.2rem', marginBottom: '20px' }}>{vision.title}</h2>
          <p style={{ color: 'var(--text-on-dark-secondary)', fontSize: '1.2rem', lineHeight: '1.8', fontStyle: 'italic' }}>
            "{vision.text}"
          </p>
        </div>
      </section>
    </div>
  );
}
