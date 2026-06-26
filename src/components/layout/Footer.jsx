/* src/components/layout/Footer.jsx */
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, ArrowRight, Mountain } from 'lucide-react';
import '../../styles/footer.css';

export default function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing! We will keep you updated.');
    e.target.reset();
  };

  return (
    <footer className="footer" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="ambient-glow glow-purple" style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '350px', height: '350px', pointerEvents: 'none' }}></div>
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-info">
            <Link to="/" className="logo">
              <div className="logo-icon">
                <Mountain size={18} />
              </div>
              <span style={{ color: 'white' }}>YMG</span>
            </Link>
            <p className="footer-desc">
              Yared Mekonnen Construction, Granite and Limestone Mining and Processing Company (YMG) — A trusted partner in Ethiopia&apos;s natural stone industry.
            </p>
            <div className="footer-socials">
              <a href="/#contact" className="social-btn" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="/#contact" className="social-btn" aria-label="Phone">
                <Phone size={18} />
              </a>
              <a href="/#contact" className="social-btn" aria-label="Website">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Company Links</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home Page</Link></li>
              <li><Link to="/about" className="footer-link">About YMG</Link></li>
              <li><Link to="/products" className="footer-link">Products Portfolio</Link></li>
              <li><Link to="/future-vision" className="footer-link">Future Vision</Link></li>
            </ul>
          </div>

          {/* Operational Links */}
          <div>
            <h4 className="footer-col-title">Operations</h4>
            <ul className="footer-links">
              <li><Link to="/operations" className="footer-link">Mining &amp; Plants</Link></li>
              <li><Link to="/markets" className="footer-link">Markets &amp; Exports</Link></li>
              <li><Link to="/sustainability" className="footer-link">Sustainability &amp; ESG</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-newsletter">
            <h4 className="footer-col-title">Get In Touch</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: 'var(--space-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-on-dark-secondary)' }}>
                <MapPin size={14} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} /> Addis Ababa, Ethiopia
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-on-dark-secondary)' }}>
                <Mail size={14} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} /> info@ymgconstruction.com
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-on-dark-secondary)' }}>
                <Phone size={14} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} /> +251 116 894 029
              </div>
            </div>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Subscribe for updates"
                className="newsletter-input"
                required
              />
              <button type="submit" className="btn btn-primary" style={{ padding: '10px 18px' }} aria-label="Subscribe">
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Yared Mekonnen Construction, Granite &amp; Limestone Mining &amp; Processing Company (YMG). All rights reserved.</p>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-on-dark-secondary)', fontStyle: 'italic' }}>
            Delivering Premium Natural Stone Solutions for Local and Global Markets.
          </p>
        </div>
      </div>
    </footer>
  );
}
