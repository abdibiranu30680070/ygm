import Hero from '../components/sections/home/Hero';
import CompanyIntro from '../components/sections/home/CompanyIntro';
import ProductsOverview from '../components/sections/home/ProductsOverview';
import MiningCapability from '../components/sections/home/MiningCapability';
import WhyChoose from '../components/sections/home/WhyChoose';
import GalleryPreview from '../components/sections/home/GalleryPreview';
import NewsSection from '../components/sections/home/NewsSection';
import ContactForm from '../components/sections/home/ContactForm';

export default function Home() {
  return (
    <div className="home-page fade-in" style={{ position: 'relative' }}>
      <div className="ambient-glow glow-indigo" style={{ position: 'absolute', top: '5%', left: '10%', width: '400px', height: '400px', pointerEvents: 'none' }}></div>
      <div className="ambient-glow glow-cyan" style={{ position: 'absolute', bottom: '25%', right: '5%', width: '350px', height: '350px', pointerEvents: 'none' }}></div>

      <Hero />
      <CompanyIntro />
      <ProductsOverview />
      <MiningCapability />
      <WhyChoose />
      <GalleryPreview />
      <NewsSection />
      <ContactForm />
    </div>
  );
}
