import { CheckCircle2, HeartPulse, Leaf, Recycle, Shield, Users } from 'lucide-react';
import PageHero from '../components/sections/PageHero';
import ContactForm from '../components/sections/home/ContactForm';
import { sustainabilityData } from '../data/siteData';

export default function Sustainability() {
  const pillars = [
    { icon: Leaf, title: sustainabilityData.environmental.title, badge: 'E', items: sustainabilityData.environmental.commitments.slice(0, 4) },
    { icon: Users, title: sustainabilityData.social.title, badge: 'S', items: sustainabilityData.social.programs.slice(0, 4) },
    { icon: HeartPulse, title: sustainabilityData.ohs.title, badge: 'OHS', items: sustainabilityData.ohs.standards.slice(0, 4) },
    { icon: Shield, title: sustainabilityData.governance.title, badge: 'G', items: sustainabilityData.governance.principles.slice(0, 4) },
  ];

  return (
    <div className="sustainability-page fade-in">
      <PageHero title="Sustainability & ESG" subtitle="Responsible mining, safe operations, community value, and disciplined governance." badge="ESG" />

      <section className="section">
        <div className="container page-brief-grid">
          <div>
            <span className="section-badge">Responsible Development</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>{sustainabilityData.overview.title}</h2>
            <p className="page-lead">{sustainabilityData.overview.paragraphs[0]}</p>
            <p className="page-copy">{sustainabilityData.overview.paragraphs[1]}</p>
          </div>
          <img className="page-visual" src="/ymg_hero_bg.png" alt="Responsible quarry operations and land management" />
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">ESG Framework</span>
            <h2 className="section-title">Four Operating Commitments</h2>
          </div>
          <div className="overview-card-grid four">
            {pillars.map(({ icon: Icon, title, badge, items }) => (
              <div className="glass-panel overview-card list-card" key={title}>
                <span className="step-number">{badge}</span>
                <Icon size={25} />
                <h3>{title}</h3>
                {items.map((item) => (
                  <span key={item}><CheckCircle2 size={14} /> {item}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-list-grid">
          <div className="glass-panel summary-panel">
            <Recycle size={34} />
            <h3>{sustainabilityData.resourceManagement.title}</h3>
            <div className="mini-check-grid left">
              {sustainabilityData.resourceManagement.practices.map((item) => (
                <span key={item}><CheckCircle2 size={14} /> {item}</span>
              ))}
            </div>
          </div>
          <div className="glass-panel summary-panel">
            <Leaf size={34} />
            <h3>{sustainabilityData.climate.title}</h3>
            <div className="mini-check-grid left">
              {sustainabilityData.climate.actions.map((item) => (
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
