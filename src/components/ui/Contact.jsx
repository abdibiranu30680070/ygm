/* src/components/ui/Contact.jsx */
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import '../../styles/contact.css';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! Our team will contact you shortly.');
    e.target.reset();
  };

  return (
    <section id="contact" className="section">
      <div className="ambient-glow glow-cyan" style={{ top: '20%', left: '10%', width: '400px', height: '400px' }}></div>
      
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title">Ready to Start?</h2>
          <p className="section-subtitle">
            Have questions about the structure or want to integrate custom components? Drop us a line below.
          </p>
        </div>

        <div className="contact-grid">
          {/* Info Side */}
          <div className="contact-info-panel">
            <h3 className="section-title" style={{ fontSize: '1.8rem', textAlign: 'left', marginBottom: 'var(--space-md)' }}>
              Let&apos;s Connect
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)' }}>
              Whether you are bootstraping a new project or restructuring an existing admin codebase, our frameworks provide optimal starting patterns.
            </p>

            <div className="contact-item">
              <div className="contact-icon-box">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="contact-item-title">Email Us</h4>
                <p className="contact-item-desc">support@antigravity.io</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-box">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="contact-item-title">Call Us</h4>
                <p className="contact-item-desc">+1 (555) 019-2834</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-box">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="contact-item-title">Our Office</h4>
                <p className="contact-item-desc">100 Cyber Space Way, San Francisco, CA</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <form className="glass-panel contact-form-panel" onSubmit={handleSubmit}>
            <div className="input-group">
              <label className="input-label" htmlFor="name">Full Name</label>
              <input type="text" id="name" className="input-field" placeholder="John Doe" required />
            </div>

            <div className="input-group">
              <label className="input-label" htmlFor="email">Email Address</label>
              <input type="email" id="email" className="input-field" placeholder="john@example.com" required />
            </div>

            <div className="input-group">
              <label className="input-label" htmlFor="message">Message</label>
              <textarea id="message" className="input-field" rows="4" placeholder="How can we help you?" required style={{ resize: 'none' }}></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: 'var(--space-md)' }}>
              Send Message <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
