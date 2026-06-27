import { CheckCircle2, Globe, Handshake, MapPin, Truck, Users } from 'lucide-react';
import PageHero from '../components/sections/PageHero';
import ContactForm from '../components/sections/home/ContactForm';
import { marketsData } from '../data/siteData';

export default function Markets() {
  const marketCards = [
    { icon: MapPin, title: marketsData.domestic.title, items: marketsData.domestic.segments.slice(0, 4) },
    { icon: Globe, title: marketsData.international.title, items: marketsData.international.regions },
    { icon: Truck, title: marketsData.distribution.title, items: marketsData.distribution.channels.slice(0, 4) },
  ];

  return (
    <div className="markets-page fade-in">
      <PageHero title="Markets & Export Strategy" subtitle="Domestic supply, export readiness, and long-term B2B partnerships." badge="Markets" />

      <section className="section">
        <div className="container page-brief-grid">
          <div>
            <span className="section-badge">Market Overview</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>{marketsData.overview.title}</h2>
            <p className="page-lead">{marketsData.overview.description}</p>
          </div>
          <img className="page-visual" src="/stone_bg.png" alt="Natural stone material prepared for domestic and export markets" />
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="overview-card-grid">
            {marketCards.map(({ icon: Icon, title, items }) => (
              <div className="glass-panel overview-card list-card" key={title}>
                <Icon size={26} />
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
          <div>
            <span className="section-badge">Partnerships</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>{marketsData.partnerships.title}</h2>
            <p className="page-copy">{marketsData.partnerships.description}</p>
            <div className="mini-check-grid left">
              {marketsData.partnerships.types.slice(0, 5).map((item) => (
                <span key={item}><Handshake size={14} /> {item}</span>
              ))}
            </div>
          </div>
          <div className="glass-panel summary-panel">
            <Users size={34} />
            <h3>{marketsData.clients.title}</h3>
            <div className="mini-check-grid left">
              {marketsData.clients.coreClients.map((item) => (
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
