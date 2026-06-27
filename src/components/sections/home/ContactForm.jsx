/* src/components/sections/home/ContactForm.jsx */
import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { homeData, contactInfo } from '../../../data/siteData';

export default function ContactForm() {
  const { cta } = homeData;
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements['ymg-name'].value;
    const company = form.elements['ymg-company'].value;
    const email = form.elements['ymg-email'].value;
    const message = form.elements['ymg-message'].value;
    const subject = encodeURIComponent(`YMG inquiry from ${company || name}`);
    const body = encodeURIComponent(`Name: ${name}\nCompany: ${company || 'N/A'}\nEmail: ${email}\n\nInquiry:\n${message}`);

    window.open(`mailto:${contactInfo.email}?subject=${subject}&body=${body}`, '_blank');
    form.reset();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section" style={{ background: 'linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary))' }}>
      <div className="container">
        <div className="glass-panel" style={{ padding: 'var(--space-xl) var(--space-lg)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-lg)', alignItems: 'center', border: '1px solid rgba(22,101,167,0.12)', background: 'radial-gradient(circle at center, rgba(22,101,167,0.03) 0%, rgba(255,255,255,0.95) 100%)' }}>
          <div>
            <span className="section-badge" style={{ background: 'rgba(22,101,167,0.12)', color: 'var(--accent-primary)' }}>{cta.badge}</span>
            <h2 className="section-title" style={{ textAlign: 'left', fontSize: '1.8rem', marginBottom: 'var(--space-sm)' }}>
              {cta.title}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: 'var(--space-md)' }}>
              {cta.text}
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin size={16} style={{ color: 'var(--accent-primary)' }} />
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{contactInfo.address}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} style={{ color: 'var(--accent-primary)' }} />
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{contactInfo.email}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} style={{ color: 'var(--accent-primary)' }} />
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{contactInfo.phone}</span>
              </div>
            </div>
          </div>

          <div>
            {isSubmitted ? (
              <div className="glass-panel" style={{ padding: 'var(--space-lg)', background: 'rgba(22, 101, 167, 0.05)', border: '1px solid rgba(22, 101, 167, 0.2)', textAlign: 'center' }}>
                <CheckCircle size={48} style={{ color: 'var(--accent-success)', marginBottom: 'var(--space-md)' }} />
                <h3 style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-sm)' }}>Message Prepared!</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Your email client has been opened. Please send the message to complete your inquiry.</p>
              </div>
            ) : (
              <form className="glass-panel" style={{ padding: 'var(--space-md)', background: 'rgba(255,255,255,0.6)', border: '1px solid var(--border-color)' }} onSubmit={handleSubmit}>
                <div className="input-group">
                  <label className="input-label" htmlFor="ymg-name">Your Name</label>
                  <input type="text" id="ymg-name" name="ymg-name" className="input-field" placeholder="Yonas Kebede" required />
                </div>
                <div className="input-group">
                  <label className="input-label" htmlFor="ymg-company">Company Name</label>
                  <input type="text" id="ymg-company" name="ymg-company" className="input-field" placeholder="Construction Co." />
                </div>
                <div className="input-group">
                  <label className="input-label" htmlFor="ymg-email">Email Address</label>
                  <input type="email" id="ymg-email" name="ymg-email" className="input-field" placeholder="name@company.com" required />
                </div>
                <div className="input-group">
                  <label className="input-label" htmlFor="ymg-message">Inquiry Details</label>
                  <textarea id="ymg-message" name="ymg-message" className="input-field" rows="3" placeholder="Describe your stone dimension or supply requirements..." required style={{ resize: 'none' }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
