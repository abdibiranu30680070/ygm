/* src/components/ui/Testimonials.jsx */
import { Quote } from 'lucide-react';
import '../../styles/testimonials.css';

export default function Testimonials() {
  const testimonials = [
    {
      text: "The clean division of pages, components, layouts, and styles made custom development a breeze. It was exactly the structure we needed.",
      name: "Helen Carter",
      role: "Lead Front-end Architect",
      initials: "HC"
    },
    {
      text: "Aesthetically pleasing dark-mode variables. Changing the colors took 2 minutes in variables.css. Absolute joy to use.",
      name: "Marcus Aurelius",
      role: "Founder, CyberSystems",
      initials: "MA"
    },
    {
      text: "Highly optimized boilerplate. With built-in components and layout wrappers, our team cut site development time in half.",
      name: "Sofia Rodriguez",
      role: "Creative Director",
      initials: "SR"
    }
  ];

  return (
    <section id="testimonials" className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="ambient-glow glow-indigo" style={{ bottom: '10%', left: '5%', width: '400px', height: '400px' }}></div>
      
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Testimonials</span>
          <h2 className="section-title">What Architects Say</h2>
          <p className="section-subtitle">
            Don&apos;t take our word for it. Here is the feedback from engineers and designers who used our template structures.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((test, index) => (
            <div key={index} className="glass-panel testimonial-card">
              <div style={{ color: 'rgba(99, 102, 241, 0.4)' }}>
                <Quote size={32} />
              </div>
              <p className="testimonial-text">&ldquo;{test.text}&rdquo;</p>
              <div className="testimonial-author">
                <div className="author-avatar">{test.initials}</div>
                <div className="author-info">
                  <h4 className="author-name">{test.name}</h4>
                  <span className="author-role">{test.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
