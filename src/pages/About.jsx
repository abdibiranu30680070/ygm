import { Award, Building2, CheckCircle2, Compass, Handshake, ShieldCheck } from 'lucide-react';
import PageHero from '../components/sections/PageHero';
import ContactForm from '../components/sections/home/ContactForm';
import { aboutData, profileData } from '../data/siteData';

const pillars = [
  { icon: Building2, title: 'Resource Development', text: 'Responsible granite and limestone quarry development.' },
  { icon: Compass, title: 'Industrial Processing', text: 'Controlled production from raw block to usable stone.' },
  { icon: Handshake, title: 'Market Supply', text: 'Reliable delivery for construction and infrastructure buyers.' },
];

export default function About() {
  const values = aboutData.values.items.slice(0, 4);
  const capabilities = profileData.capabilities.items.slice(0, 6);

  return (
    <div className="about-page fade-in">
      <PageHero title="About YMG" subtitle="An Ethiopian natural stone company built for quality, reliability, and long-term supply." badge={aboutData.hero.badge} />

      <section className="section">
        <div className="container page-brief-grid">
          <div>
            <span className="section-badge">Company</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>{aboutData.background.title}</h2>
            <p className="page-lead">{aboutData.background.paragraphs[0]}</p>
            <p className="page-copy">{aboutData.background.paragraphs[1]}</p>
          </div>
          <img className="page-visual" src="/ymg_hero_bg.png" alt="YMG Ethiopian natural stone quarry and operation" />
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">How YMG Works</span>
            <h2 className="section-title">Integrated Stone Supply</h2>
          </div>
          <div className="overview-card-grid">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div className="glass-panel overview-card" key={title}>
                <Icon size={26} />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-list-grid">
          <div>
            <span className="section-badge">Values</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>What Guides Us</h2>
            <div className="compact-list">
              {values.map((item) => (
                <div className="compact-list-item" key={item.title}>
                  <Award size={18} />
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel summary-panel">
            <ShieldCheck size={34} />
            <h3>{aboutData.visionMission.vision.title}</h3>
            <p>{aboutData.visionMission.vision.text}</p>
            <div className="mini-check-grid">
              {capabilities.map((item) => (
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
