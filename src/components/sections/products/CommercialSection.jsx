/* src/components/sections/products/CommercialSection.jsx */
import { commercialData } from '../../../data/siteData';
import { ShieldCheck, Package, DollarSign, Award, CheckCircle2, ChevronRight } from 'lucide-react';

export default function CommercialSection() {
  const { customSolutions, qualityGrading, packaging, pricing, marketSegmentation, valueProposition } = commercialData;

  return (
    <div id="commercial">
      {/* Custom Solutions & Grading */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Commercial Portfolio</span>
            <h2 className="section-title">Custom Solutions & Quality Standards</h2>
          </div>

          <div className="responsive-grid-2-unequal">
            <div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>{customSolutions.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>{customSolutions.description}</p>
              <div className="responsive-grid-2" style={{ gap: '20px' }}>
                <div>
                  <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--accent-primary)', marginBottom: '10px', fontWeight: 700 }}>Services</h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {customSolutions.services.map((s, i) => (
                      <li key={i} style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)' }}>
                        <CheckCircle2 size={12} style={{ color: 'var(--accent-primary)' }} /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--accent-primary)', marginBottom: '10px', fontWeight: 700 }}>Target Clients</h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {customSolutions.clients.map((c, i) => (
                      <li key={i} style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)' }}>
                        <ChevronRight size={12} style={{ color: 'var(--accent-primary)' }} /> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass-panel" style={{ padding: 'var(--space-xl)' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>{qualityGrading.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '15px' }}>{qualityGrading.description}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px' }}>
                {qualityGrading.grades.map((g, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center', background: 'var(--bg-secondary)', padding: '10px', borderRadius: 'var(--radius-sm)' }}>
                    <span style={{ backgroundColor: 'var(--accent-primary)', color: 'white', padding: '3px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 700 }}>{g.grade}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-primary)', fontWeight: 500 }}>{g.desc}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {qualityGrading.inspections.map((insp, i) => (
                  <span key={i} style={{ fontSize: '0.7rem', background: 'rgba(183,142,58,0.1)', color: 'var(--accent-primary)', padding: '4px 10px', borderRadius: 'var(--radius-full)', fontWeight: 600 }}>{insp}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packaging & Pricing */}
      <section className="section">
        <div className="container responsive-grid-2">
          <div className="glass-panel" style={{ padding: 'var(--space-xl)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <Package size={22} style={{ color: 'var(--accent-primary)' }} />
              <h3 style={{ fontSize: '1.3rem' }}>{packaging.title}</h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '15px' }}>{packaging.description}</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {packaging.methods.map((m, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={14} style={{ color: 'var(--accent-secondary)' }} /> {m}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel" style={{ padding: 'var(--space-xl)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <DollarSign size={22} style={{ color: 'var(--accent-primary)' }} />
              <h3 style={{ fontSize: '1.3rem' }}>{pricing.title}</h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '15px' }}>{pricing.description}</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {pricing.factors.map((f, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={14} style={{ color: 'var(--accent-primary)' }} /> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section dark-section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '20px' }}>{valueProposition.title}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {valueProposition.points.map((pt, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(183,142,58,0.15)', padding: '10px 18px', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-primary)' }}>
                <Award size={14} /> {pt}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
