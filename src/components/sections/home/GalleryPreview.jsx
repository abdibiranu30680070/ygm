/* src/components/sections/home/GalleryPreview.jsx */
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { homeData } from '../../../data/siteData';

export default function GalleryPreview() {
  const { gallery } = homeData;

  return (
    <section id="gallery" className="section gallery-preview">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{gallery.badge}</span>
          <h2 className="section-title">{gallery.title}</h2>
          <p className="section-subtitle">{gallery.subtitle}</p>
        </div>

        <div className="gallery-grid" aria-label="YMG natural stone gallery">
          {gallery.items.map((item, index) => (
            <figure className={`gallery-card ${index === 0 ? 'featured' : ''}`} key={item.title}>
              <img src={item.image} alt={item.alt} loading="lazy" />
              <figcaption>
                <strong>{item.title}</strong>
                <span>{item.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="gallery-action">
          <Link to="/products" className="btn btn-glass">
            View Product Range <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
