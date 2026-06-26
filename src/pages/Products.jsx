import PageHero from '../components/sections/PageHero';
import { productsData } from '../data/siteData';
import GraniteSolutions from '../components/sections/products/GraniteSolutions';
import LimestoneSolutions from '../components/sections/products/LimestoneSolutions';
import ProcessingServices from '../components/sections/products/ProcessingServices';
import QualityAssurance from '../components/sections/products/QualityAssurance';
import CustomerBenefits from '../components/sections/products/CustomerBenefits';
import IndustryApplications from '../components/sections/products/IndustryApplications';
import CommercialSection from '../components/sections/products/CommercialSection';

export default function Products() {
  return (
    <div className="products-page fade-in" style={{ position: 'relative' }}>
      <div className="ambient-glow glow-indigo" style={{ position: 'absolute', top: '3%', right: '8%', width: '400px', height: '400px', pointerEvents: 'none' }}></div>

      <PageHero title="Products & Services" subtitle={`${productsData.hero.subtitle}. ${productsData.hero.description}`} badge="Products & Services" />
      <GraniteSolutions />
      <LimestoneSolutions />
      <ProcessingServices />
      <QualityAssurance />

      {/* Commercial Offerings (merged from /commercial) */}
      <CommercialSection />

      <CustomerBenefits />
      <IndustryApplications />
    </div>
  );
}
