import { CheckCircle2, Gem, PackageCheck, Scissors, ShieldCheck } from 'lucide-react';
import PageHero from '../components/sections/PageHero';
import ContactForm from '../components/sections/home/ContactForm';
import { productsData } from '../data/siteData';

export default function Products() {
  const productCards = [
    {
      icon: Gem,
      title: productsData.granite.title,
      text: 'Dense granite blocks, slabs, cladding, flooring, and custom-cut stone.',
      image: '/stone_bg.png',
      alt: 'Granite stone texture and finish'
    },
    {
      icon: PackageCheck,
      title: productsData.limestone.title,
      text: 'Reliable limestone for construction, industrial processing, and infrastructure projects.',
      image: '/ymg_hero_bg.png',
      alt: 'Limestone quarry and stone supply operation'
    }
  ];

  return (
    <div className="products-page fade-in">
      <PageHero title="Products & Services" subtitle="Granite, limestone, processing, and project-ready natural stone supply." badge="Products" />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Product Range</span>
            <h2 className="section-title">Natural Stone Solutions</h2>
            <p className="section-subtitle">Selected stone, controlled processing, and flexible supply for B2B clients.</p>
          </div>
          <div className="visual-card-grid">
            {productCards.map(({ icon: Icon, title, text, image, alt }) => (
              <article className="glass-panel visual-card" key={title}>
                <img src={image} alt={alt} loading="lazy" />
                <div>
                  <Icon size={24} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container process-strip">
          {[productsData.services.title, productsData.quality.title, 'Packaging & Supply', 'Customer Support'].map((title, idx) => (
            <div className="glass-panel process-tile" key={title}>
              {idx === 0 ? <Scissors size={22} /> : idx === 1 ? <ShieldCheck size={22} /> : <CheckCircle2 size={22} />}
              <span>0{idx + 1}</span>
              <h3>{title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container split-list-grid">
          <div>
            <span className="section-badge">Applications</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>{productsData.industryApplications.title}</h2>
            <div className="mini-check-grid left">
              {productsData.industryApplications.sectors.map((sector) => (
                <span key={sector}><CheckCircle2 size={14} /> {sector}</span>
              ))}
            </div>
          </div>
          <div className="glass-panel summary-panel">
            <h3>{productsData.benefits.title}</h3>
            <div className="compact-list">
              {productsData.benefits.items.map((item) => (
                <div className="compact-list-item" key={item.title}>
                  <CheckCircle2 size={18} />
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
