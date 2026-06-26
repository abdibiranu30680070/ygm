/* src/components/sections/about/CorporateIdentitySection.jsx */
import { corporateIdentityData } from '../../../data/siteData';
import { Palette, MessageSquare, Target, Layers, Globe, Shield, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function CorporateIdentitySection() {
  const {
    positioning, visionMission, visualIdentity, communicationStyle,
    messagingFramework, channels, brandArchitecture, reputation,
    digitalBranding, brandCommitment
  } = corporateIdentityData;

  return (
    <div id="corporate-identity">
      {/* Brand Positioning */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Corporate Identity</span>
            <h2 className="section-title">Brand Positioning & Identity</h2>
          </div>

          <div style={{ maxWidth: '750px', margin: '0 auto 40px', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8', fontStyle: 'italic', borderLeft: '3px solid var(--accent-primary)', paddingLeft: '20px', textAlign: 'left' }}>
              {positioning.statement}
            </p>
          </div>

          <div className="responsive-grid-5" style={{ marginBottom: '40px' }}>
            {positioning.elements.map((el, i) => (
              <div key={i} className="glass-panel" style={{ padding: '20px', textAlign: 'center', background: 'var(--bg-primary)' }}>
                <Target size={20} style={{ color: 'var(--accent-primary)', marginBottom: '8px' }} />
                <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>{el}</p>
              </div>
            ))}
          </div>

          {/* Vision, Mission, Values */}
          <div className="responsive-grid-3">
            <div className="glass-panel" style={{ padding: 'var(--space-xl)', background: 'var(--bg-primary)' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-primary)', marginBottom: '12px' }}>Brand Vision</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>{visionMission.vision}</p>
            </div>
            <div className="glass-panel" style={{ padding: 'var(--space-xl)', background: 'var(--bg-primary)' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-primary)', marginBottom: '12px' }}>Brand Mission</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>{visionMission.mission}</p>
            </div>
            <div className="glass-panel" style={{ padding: 'var(--space-xl)', background: 'var(--bg-primary)' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-primary)', marginBottom: '12px' }}>Core Values</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {visionMission.values.map((v, i) => (
                  <span key={i} style={{ fontSize: '0.8rem', background: 'rgba(183,142,58,0.1)', color: 'var(--accent-primary)', padding: '5px 12px', borderRadius: 'var(--radius-full)', fontWeight: 600 }}>{v}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Identity & Communication */}
      <section className="section">
        <div className="container responsive-grid-2">
          <div className="glass-panel" style={{ padding: 'var(--space-xl)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
              <Palette size={22} style={{ color: 'var(--accent-primary)' }} />
              <h3 style={{ fontSize: '1.3rem' }}>{visualIdentity.title}</h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '15px' }}>{visualIdentity.description}</p>
            {[
              { label: 'Color Palette', items: visualIdentity.colorPalette },
              { label: 'Typography', items: visualIdentity.typography }
            ].map((group, gi) => (
              <div key={gi} style={{ marginBottom: '12px' }}>
                <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--accent-primary)', marginBottom: '6px', fontWeight: 700 }}>{group.label}</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {group.items.map((it, ii) => (
                    <li key={ii} style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)' }}>
                      <ChevronRight size={12} style={{ color: 'var(--accent-primary)' }} /> {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="glass-panel" style={{ padding: 'var(--space-xl)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
              <MessageSquare size={22} style={{ color: 'var(--accent-primary)' }} />
              <h3 style={{ fontSize: '1.3rem' }}>{communicationStyle.title}</h3>
            </div>
            {[
              { label: 'Tone', items: communicationStyle.tone },
              { label: 'Language Style', items: communicationStyle.language }
            ].map((group, gi) => (
              <div key={gi} style={{ marginBottom: '15px' }}>
                <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--accent-primary)', marginBottom: '6px', fontWeight: 700 }}>{group.label}</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {group.items.map((it, ii) => (
                    <li key={ii} style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={12} style={{ color: 'var(--accent-secondary)' }} /> {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Messaging Framework */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Messaging</span>
            <h2 className="section-title">{messagingFramework.title}</h2>
          </div>
          <div className="responsive-grid-5">
            {messagingFramework.pillars.map((p, i) => (
              <div key={i} className="glass-panel" style={{ padding: '20px', background: 'var(--bg-primary)', textAlign: 'center' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '8px' }}>{p.name}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channels, Architecture, Reputation */}
      <section className="section">
        <div className="container responsive-grid-3">
          <div className="glass-panel" style={{ padding: 'var(--space-xl)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Globe size={20} style={{ color: 'var(--accent-primary)' }} />
              <h3 style={{ fontSize: '1.15rem' }}>{channels.title}</h3>
            </div>
            {[{ label: 'Digital', items: channels.digital }, { label: 'Business', items: channels.business }].map((g, gi) => (
              <div key={gi} style={{ marginBottom: '10px' }}>
                <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-primary)', marginBottom: '6px', fontWeight: 700 }}>{g.label}</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  {g.items.map((it, ii) => (
                    <li key={ii} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>• {it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="glass-panel" style={{ padding: 'var(--space-xl)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Layers size={20} style={{ color: 'var(--accent-primary)' }} />
              <h3 style={{ fontSize: '1.15rem' }}>{brandArchitecture.title}</h3>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 700, marginBottom: '8px' }}>{brandArchitecture.mainBrand}</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {brandArchitecture.subBrands.map((sb, i) => (
                <li key={i} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={12} style={{ color: 'var(--accent-primary)' }} /> {sb}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontStyle: 'italic', marginTop: '10px' }}>{brandArchitecture.note}</p>
          </div>

          <div className="glass-panel" style={{ padding: 'var(--space-xl)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Shield size={20} style={{ color: 'var(--accent-primary)' }} />
              <h3 style={{ fontSize: '1.15rem' }}>{reputation.title}</h3>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {reputation.points.map((pt, i) => (
                <li key={i} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={12} style={{ color: 'var(--accent-primary)' }} /> {pt}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontStyle: 'italic', marginTop: '10px' }}>{reputation.note}</p>
          </div>
        </div>
      </section>

      {/* Brand Commitment */}
      <section className="section dark-section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '20px' }}>{brandCommitment.title}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {brandCommitment.points.map((pt, i) => (
              <span key={i} style={{ fontSize: '0.85rem', background: 'rgba(183,142,58,0.15)', color: 'var(--accent-primary)', padding: '8px 18px', borderRadius: 'var(--radius-full)', fontWeight: 600 }}>{pt}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
