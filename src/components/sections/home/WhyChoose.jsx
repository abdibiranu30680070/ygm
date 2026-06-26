/* src/components/sections/home/WhyChoose.jsx */
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { homeData } from '../../../data/siteData';

export default function WhyChoose() {
  const { whyChoose } = homeData;
  return (
    <section id="why-choose" className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2xl)', alignItems: 'center' }}>
        <div>
          <span className="section-badge">{whyChoose.badge}</span>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 'var(--space-md)' }}>
            {whyChoose.title}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: 'var(--space-md)' }}>
            {whyChoose.description}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {whyChoose.points.map((point, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(183,142,58,0.08)', color: 'var(--accent-primary)', justifyContent: 'center', alignItems: 'center', fontSize: '0.75rem', fontWeight: 'bold', marginTop: '3px' }}>
                  ✓
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>{point}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <div className="glass-panel" style={{ width: '100%', maxWidth: '440px', padding: 'var(--space-2xl)', background: 'linear-gradient(135deg, rgba(183,142,58,0.04) 0%, rgba(255,255,255,0.8) 100%)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '15px', right: '15px', color: 'rgba(183, 142, 58, 0.15)' }}>
              <Sparkles size={40} />
            </div>
            <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', marginBottom: '15px' }}>Ethiopian Natural Splendor</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.8' }}>
              {whyChoose.footerNote}
            </p>
            <div style={{ borderTop: '1px solid var(--border-color)', marginTop: '20px', paddingTop: '20px' }}>
              <Link to="/about" className="btn btn-glass" style={{ width: '100%' }}>
                Read Our Company Overview <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
