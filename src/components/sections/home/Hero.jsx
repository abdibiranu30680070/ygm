/* src/components/sections/home/Hero.jsx */
import { ArrowRight, Sparkles, Building2, ShieldCheck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { homeData } from '../../../data/siteData';
import '../../../styles/hero.css';

export default function Hero() {
  const { hero } = homeData;
  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1 className="hero-title">
            {hero.title}
          </h1>

          <p className="hero-desc">
            {hero.subtitle}. {hero.description}
          </p>

          <div className="hero-buttons">
            <Link to={hero.ctas[0].href} className="btn btn-primary">
              {hero.ctas[0].label} <ArrowRight size={18} />
            </Link>
            <Link to={hero.ctas[1].href} className="btn btn-secondary">
              {hero.ctas[1].label}
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-stats-card">
            <div className="stat-item">
              <div className="stat-icon-wrap">
                <Building2 size={22} />
              </div>
              <div>
                <div className="stat-num">100%</div>
                <div className="stat-label">Integrated Operations</div>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon-wrap">
                <ShieldCheck size={22} />
              </div>
              <div>
                <div className="stat-num">Grade A</div>
                <div className="stat-label">Premium Stone Slabs</div>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon-wrap">
                <Award size={22} />
              </div>
              <div>
                <div className="stat-num">Global</div>
                <div className="stat-label">Domestic & Export Ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
