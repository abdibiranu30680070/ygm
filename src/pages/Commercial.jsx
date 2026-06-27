/* src/pages/Commercial.jsx */
import { commercialData } from '../data/siteData';
import { Layers, Box, Gem, Settings, CheckCircle2, ChevronRight, Package, DollarSign, Award } from 'lucide-react';

export default function Commercial() {
  const {
    hero,
    graniteProducts,
    limestoneProducts,
    aggregates,
    architectural,
    customSolutions,
    qualityGrading,
    packaging,
    marketSegmentation,
    pricing,
    valueProposition,
    statement
  } = commercialData;

  const getIcon = (title) => {
    switch (title) {
      case 'Granite Products': return <Gem className="accent-gradient-text" size={32} />;
      case 'Limestone Products': return <Layers className="accent-gradient-text" size={32} />;
      case 'Construction Aggregates': return <Box className="accent-gradient-text" size={32} />;
      case 'Architectural & Decorative Stones': return <Settings className="accent-gradient-text" size={32} />;
      default: return <Layers className="accent-gradient-text" size={32} />;
    }
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero */}
      <section className="hero" style={{ borderBottom: '1px solid var(--border-color)', minHeight: 'auto', padding: 'var(--space-2xl) 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <div className="section-badge">Commercial Portfolio</div>
          <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '15px' }}>{hero.title}</h1>
          <p className="hero-desc" style={{ margin: '0 auto' }}>{hero.subtitle}. {hero.description}</p>
        </div>
      </section>

      {/* Product Segments Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Offerings</span>
            <h2 className="section-title">Natural Stone Solutions</h2>
            <p className="section-subtitle">Premium solutions refined through advanced industrial systems</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-xl)' }}>
            {[graniteProducts, limestoneProducts, aggregates, architectural].map((sec, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: 'var(--space-xl)' }}>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '20px' }}>
                  {getIcon(sec.title)}
                  <h3 style={{ fontSize: '1.4rem' }}>{sec.title}</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '0.95rem' }}>{sec.description}</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <div>
                    <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--accent-primary)', marginBottom: '10px', fontWeight: 700 }}>Types</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {sec.types.map((type, tIdx) => (
                        <li key={tIdx} style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)' }}>
                          <ChevronRight size={12} style={{ color: 'var(--accent-primary)' }} />
                          {type}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--accent-primary)', marginBottom: '10px', fontWeight: 700 }}>Applications</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {sec.applications.map((app, aIdx) => (
                        <li key={aIdx} style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)' }}>
                          <CheckCircle2 size={12} style={{ color: 'var(--accent-secondary)' }} />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom solutions & Grading */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'var(--space-2xl)' }}>
          <div>
            <div className="section-badge">Bespoke Fabrication</div>
            <h2 className="section-title" style={{ fontSize: '2.2rem' }}>{customSolutions.title}</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '25px' }}>{customSolutions.description}</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
              <div>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '12px', fontWeight: 700 }}>Services Include</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {customSolutions.services.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={14} style={{ color: 'var(--accent-primary)' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '12px', fontWeight: 700 }}>Target Clients</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {customSolutions.clients.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <ChevronRight size={14} style={{ color: 'var(--accent-primary)' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: 'var(--space-xl)', background: 'var(--bg-primary)' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>{qualityGrading.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '20px' }}>{qualityGrading.description}</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
              {qualityGrading.grades.map((gradeInfo, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center', background: 'var(--bg-secondary)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ backgroundColor: 'var(--accent-primary)', color: 'white', padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700 }}>
                    {gradeInfo.grade}
                  </div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 500 }}>{gradeInfo.desc}</span>
                </div>
              ))}
            </div>

            <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '10px', fontWeight: 700 }}>Strict Inspection Criteria</h4>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {qualityGrading.inspections.map((insp, i) => (
                <span key={i} style={{ fontSize: '0.75rem', background: 'rgba(183,142,58,0.1)', color: 'var(--accent-primary)', padding: '4px 10px', borderRadius: 'var(--radius-full)', fontWeight: 600 }}>
                  {insp}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packaging & Pricing */}
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2xl)' }}>
          <div className="glass-panel" style={{ padding: 'var(--space-xl)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
              <Package size={24} style={{ color: 'var(--accent-primary)' }} />
              <h3 style={{ fontSize: '1.4rem' }}>{packaging.title}</h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '20px' }}>{packaging.description}</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {packaging.methods.map((method, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-secondary)' }} />
                  {method}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel" style={{ padding: 'var(--space-xl)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
              <DollarSign size={24} style={{ color: 'var(--accent-primary)' }} />
              <h3 style={{ fontSize: '1.4rem' }}>{pricing.title}</h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '20px' }}>{pricing.description}</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {pricing.factors.map((factor, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-primary)' }} />
                  {factor}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Segmentation & Value Proposition */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Market Structure</span>
            <h2 className="section-title">{marketSegmentation.title}</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-xl)', marginBottom: '40px' }}>
            <div className="glass-panel" style={{ padding: 'var(--space-xl)', background: 'var(--bg-primary)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', color: 'var(--accent-primary)', fontWeight: 700 }}>Domestic Market</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {marketSegmentation.domestic.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <ChevronRight size={14} style={{ color: 'var(--accent-primary)' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-panel" style={{ padding: 'var(--space-xl)', background: 'var(--bg-primary)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', color: 'var(--accent-secondary)', fontWeight: 700 }}>International Market</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {marketSegmentation.international.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <ChevronRight size={14} style={{ color: 'var(--accent-secondary)' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '20px' }}>{valueProposition.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
              {valueProposition.points.map((pt, i) => (
                <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', padding: '10px 20px', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  <Award size={16} style={{ color: 'var(--accent-primary)' }} />
                  {pt}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Commitment */}
      <section className="section dark-section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title" style={{ fontSize: '2.2rem', marginBottom: '20px' }}>{statement.title}</h2>
          <p style={{ color: 'var(--text-on-dark-secondary)', fontSize: '1.1rem', lineHeight: '1.8', fontStyle: 'italic' }}>
            "{statement.text}"
          </p>
        </div>
      </section>
    </div>
  );
}
