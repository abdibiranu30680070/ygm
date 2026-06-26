import { futureExpansionData } from '../data/siteData';
import { TrendingUp, Cpu, Globe, Leaf, DollarSign, Users, Factory, Pickaxe, Package, CheckCircle2, ChevronRight, Milestone } from 'lucide-react';
import PageHero from '../components/sections/PageHero';

const sectionIcons = {
  'Expansion of Mining': <Pickaxe size={24} style={{ color: 'var(--accent-primary)' }} />,
  'Processing Plant': <Factory size={24} style={{ color: 'var(--accent-primary)' }} />,
  'Technology': <Cpu size={24} style={{ color: 'var(--accent-primary)' }} />,
  'Export Market': <Globe size={24} style={{ color: 'var(--accent-primary)' }} />,
  'Product Diversification': <Package size={24} style={{ color: 'var(--accent-primary)' }} />,
  'Infrastructure': <TrendingUp size={24} style={{ color: 'var(--accent-primary)' }} />,
  'Sustainability': <Leaf size={24} style={{ color: 'var(--accent-secondary)' }} />,
  'Investment': <DollarSign size={24} style={{ color: 'var(--accent-primary)' }} />,
  'Human Capital': <Users size={24} style={{ color: 'var(--accent-primary)' }} />,
};

const getIcon = (title) => {
  for (const [key, icon] of Object.entries(sectionIcons)) {
    if (title.includes(key)) return icon;
  }
  return <TrendingUp size={24} style={{ color: 'var(--accent-primary)' }} />;
};

export default function FutureVision() {
  const {
    hero, overview, miningExpansion, plantGrowth, technology,
    exportExpansion, diversification, infrastructure, greenStrategy,
    investment, humanCapital, roadmap, visionStatement, commitmentStatement
  } = futureExpansionData;

  const expansionSections = [
    miningExpansion, plantGrowth, technology,
    exportExpansion, diversification, infrastructure,
    greenStrategy, investment, humanCapital
  ];

  return (
    <div className="future-vision-page fade-in">
      <PageHero title={hero.title} subtitle={hero.subtitle} badge="2026–2035" />

      {/* Overview */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '15px' }}>{overview.title}</h2>
          {overview.paragraphs.map((p, i) => (
            <p key={i} style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '12px' }}>{p}</p>
          ))}
        </div>
      </section>

      {/* Expansion Sections Grid */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Strategic Initiatives</span>
            <h2 className="section-title">Growth & Expansion Plans</h2>
            <p className="section-subtitle">Nine strategic pillars driving YMG's long-term development</p>
          </div>

          <div className="responsive-grid-3">
            {expansionSections.map((sec, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: 'var(--space-xl)', background: 'var(--bg-primary)' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '15px' }}>
                  {getIcon(sec.title)}
                  <h3 style={{ fontSize: '1.1rem' }}>{sec.title}</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '12px' }}>{sec.description}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '10px' }}>
                  {sec.points.map((pt, i) => (
                    <li key={i} style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'flex-start', gap: '6px', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={12} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                      {pt}
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontStyle: 'italic', borderTop: '1px solid var(--border-color)', paddingTop: '8px' }}>{sec.outro}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Roadmap Timeline */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Timeline</span>
            <h2 className="section-title">{roadmap.title}</h2>
          </div>

          <div className="responsive-grid-3" style={{ position: 'relative' }}>
            {/* Connecting line */}
            <div className="timeline-connector" style={{ position: 'absolute', top: '28px', left: '16.5%', right: '16.5%', height: '3px', background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))', zIndex: 0 }}></div>

            {roadmap.phases.map((phase, i) => (
              <div key={i} className="glass-panel" style={{ padding: 'var(--space-xl)', position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--gradient-hero)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px', boxShadow: 'var(--shadow-glow)' }}>
                  <Milestone size={24} style={{ color: 'white' }} />
                </div>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-primary)', marginBottom: '4px' }}>{phase.name}</h3>
                <p style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '12px' }}>{phase.label}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left' }}>
                  {phase.items.map((item, ii) => (
                    <li key={ii} style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)' }}>
                      <ChevronRight size={12} style={{ color: 'var(--accent-primary)' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Commitment */}
      <section className="section dark-section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <h2 className="section-title" style={{ fontSize: '2.2rem', marginBottom: '15px' }}>{visionStatement.title}</h2>
          <p style={{ color: 'var(--text-on-dark-secondary)', fontSize: '1.15rem', lineHeight: '1.8', fontStyle: 'italic', marginBottom: '35px' }}>
            "{visionStatement.text}"
          </p>
          <h3 style={{ fontSize: '1.3rem', color: 'var(--accent-primary)', marginBottom: '15px' }}>{commitmentStatement.title}</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {commitmentStatement.points.map((pt, i) => (
              <span key={i} style={{ fontSize: '0.85rem', background: 'rgba(183,142,58,0.15)', color: 'var(--accent-primary)', padding: '8px 18px', borderRadius: 'var(--radius-full)', fontWeight: 600 }}>{pt}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
