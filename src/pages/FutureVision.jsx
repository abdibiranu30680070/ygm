import { CheckCircle2, Cpu, Factory, Globe, Leaf, Milestone, Package, Pickaxe, TrendingUp } from 'lucide-react';
import PageHero from '../components/sections/PageHero';
import ContactForm from '../components/sections/home/ContactForm';
import { futureExpansionData } from '../data/siteData';

export default function FutureVision() {
  const initiatives = [
    { icon: Pickaxe, data: futureExpansionData.miningExpansion },
    { icon: Factory, data: futureExpansionData.plantGrowth },
    { icon: Cpu, data: futureExpansionData.technology },
    { icon: Globe, data: futureExpansionData.exportExpansion },
    { icon: Package, data: futureExpansionData.diversification },
    { icon: Leaf, data: futureExpansionData.greenStrategy },
  ];

  return (
    <div className="future-vision-page fade-in">
      <PageHero title="Future Vision" subtitle="A focused roadmap for capacity, technology, exports, and responsible growth." badge="2026-2035" />

      <section className="section">
        <div className="container page-brief-grid">
          <div>
            <span className="section-badge">Roadmap</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>{futureExpansionData.overview.title}</h2>
            <p className="page-lead">{futureExpansionData.overview.paragraphs[0]}</p>
            <p className="page-copy">{futureExpansionData.overview.paragraphs[1]}</p>
          </div>
          <img className="page-visual" src="/stone_bg.png" alt="Natural stone surface representing YMG product expansion" />
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Growth Priorities</span>
            <h2 className="section-title">Strategic Initiatives</h2>
          </div>
          <div className="overview-card-grid three">
            {initiatives.map(({ icon: Icon, data }) => (
              <div className="glass-panel overview-card list-card" key={data.title}>
                <Icon size={25} />
                <h3>{data.title}</h3>
                {data.points.slice(0, 3).map((item) => (
                  <span key={item}><CheckCircle2 size={14} /> {item}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Timeline</span>
            <h2 className="section-title">{futureExpansionData.roadmap.title}</h2>
          </div>
          <div className="overview-card-grid three">
            {futureExpansionData.roadmap.phases.map((phase) => (
              <div className="glass-panel overview-card list-card" key={phase.name}>
                <Milestone size={25} />
                <h3>{phase.name}</h3>
                <p>{phase.label}</p>
                {phase.items.slice(0, 3).map((item) => (
                  <span key={item}><TrendingUp size={14} /> {item}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
