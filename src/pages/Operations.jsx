import { CheckCircle2, Factory, Pickaxe, Recycle, ShieldCheck, Truck } from 'lucide-react';
import PageHero from '../components/sections/PageHero';
import ContactForm from '../components/sections/home/ContactForm';
import { miningData, processingData } from '../data/siteData';

export default function Operations() {
  const steps = [
    { icon: Pickaxe, title: 'Quarry Extraction', text: 'Controlled extraction of granite and limestone resources.' },
    { icon: Truck, title: 'Material Movement', text: 'Safe loading and transport from quarry to processing.' },
    { icon: Factory, title: 'Processing Plant', text: 'Cutting, shaping, finishing, and grading.' },
    { icon: ShieldCheck, title: 'Quality Release', text: 'Final inspection before packaging and delivery.' },
  ];

  return (
    <div className="operations-page fade-in">
      <PageHero title="Mining & Processing Operations" subtitle="A clear quarry-to-delivery system for consistent natural stone supply." badge="Operations" />

      <section className="section">
        <div className="container page-brief-grid">
          <div>
            <span className="section-badge">Operational Model</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>{miningData.overview.title}</h2>
            <p className="page-lead">{miningData.overview.paragraphs[0]}</p>
            <p className="page-copy">{processingData.overview.paragraphs[0]}</p>
          </div>
          <img className="page-visual" src="/ymg_hero_bg.png" alt="YMG quarry and processing operation" />
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Workflow</span>
            <h2 className="section-title">From Quarry to Finished Stone</h2>
          </div>
          <div className="overview-card-grid four">
            {steps.map(({ icon: Icon, title, text }, idx) => (
              <div className="glass-panel overview-card" key={title}>
                <span className="step-number">0{idx + 1}</span>
                <Icon size={25} />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-list-grid">
          <div className="glass-panel summary-panel">
            <ShieldCheck size={34} />
            <h3>{miningData.safetyEnvironment.title}</h3>
            <div className="mini-check-grid left">
              {miningData.safetyEnvironment.safetyMeasures.slice(0, 5).map((item) => (
                <span key={item}><CheckCircle2 size={14} /> {item}</span>
              ))}
            </div>
          </div>
          <div className="glass-panel summary-panel">
            <Recycle size={34} />
            <h3>{miningData.sustainability.title}</h3>
            <div className="mini-check-grid left">
              {miningData.sustainability.points.slice(0, 5).map((item) => (
                <span key={item}><CheckCircle2 size={14} /> {item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
