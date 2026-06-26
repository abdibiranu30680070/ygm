/* src/components/sections/home/NewsSection.jsx */
import { newsData } from '../../../data/siteData';
import { Newspaper, ExternalLink, Calendar, Tag } from 'lucide-react';

const categoryColors = {
  Industry: 'var(--accent-primary)',
  Company: 'var(--accent-secondary)',
  Market: '#6b7b5e'
};

export default function NewsSection() {
  return (
    <section id="news" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Latest News</span>
          <h2 className="section-title">Industry & Company Updates</h2>
          <p className="section-subtitle">Stay informed with the latest developments in Ethiopian mining and construction</p>
        </div>

        <div className="responsive-grid-3-unequal">
          {newsData.map((article, idx) => (
            <div
              key={article.id}
              className="glass-panel"
              style={{
                padding: 'var(--space-xl)',
                background: 'var(--bg-primary)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                ...(idx === 0 ? { borderTop: '3px solid var(--accent-primary)' } : {})
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    background: `${categoryColors[article.category]}15`,
                    color: categoryColors[article.category],
                    padding: '3px 10px',
                    borderRadius: 'var(--radius-full)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Tag size={10} /> {article.category}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={12} /> {article.date}
                  </span>
                </div>

                <h3 style={{ fontSize: idx === 0 ? '1.3rem' : '1.1rem', marginBottom: '10px', lineHeight: '1.35' }}>
                  {article.title}
                </h3>

                {article.titleAmharic && (
                  <p style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', marginBottom: '10px', fontStyle: 'italic' }}>
                    {article.titleAmharic}
                  </p>
                )}

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '15px' }}>
                  {article.summary}
                </p>

                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Source: {article.source}
                </p>
              </div>

              {article.url && (
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.85rem',
                    color: 'var(--accent-primary)',
                    fontWeight: 600,
                    marginTop: '15px',
                    textDecoration: 'none',
                    transition: 'all 0.2s'
                  }}
                >
                  Read Full Article <ExternalLink size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
