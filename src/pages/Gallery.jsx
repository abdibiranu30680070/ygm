import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import PageHero from '../components/sections/PageHero';
import ContactForm from '../components/sections/home/ContactForm';

const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'mining', label: 'Mining Operations' },
  { id: 'processing', label: 'Processing Plant' },
  { id: 'products', label: 'Products' },
  { id: 'facilities', label: 'Facilities' },
];

const galleryImages = [
  { id: 1, src: '/gallery/mining-1.jpg', category: 'mining', title: 'Quarry Operations', description: 'Active granite quarry site in Ethiopia' },
  { id: 2, src: '/ gallery/mining-2.jpg', category: 'mining', title: 'Extraction Process', description: 'Precision stone extraction techniques' },
  { id: 3, src: '/gallery/processing-1.jpg', category: 'processing', title: 'Processing Line', description: 'Modern stone processing equipment' },
  { id: 4, src: '/gallery/processing-2.jpg', category: 'processing', title: 'Quality Control', description: 'Rigorous quality inspection process' },
  { id: 5, src: '/gallery/products-1.jpg', category: 'products', title: 'Granite Blocks', description: 'Premium granite blocks ready for export' },
  { id: 6, src: '/gallery/products-2.jpg', category: 'products', title: 'Finished Slabs', description: 'Polished granite slabs for construction' },
  { id: 7, src: '/gallery/facilities-1.jpg', category: 'facilities', title: 'Main Facility', description: 'YMG headquarters and processing plant' },
  { id: 8, src: '/gallery/facilities-2.jpg', category: 'facilities', title: 'Storage Area', description: 'Organized block storage facility' },
  { id: 9, src: '/gallery/mining-3.jpg', category: 'mining', title: 'Team at Work', description: 'Skilled mining team in action' },
  { id: 10, src: '/gallery/processing-3.jpg', category: 'processing', title: 'Cutting Equipment', description: 'Advanced stone cutting machinery' },
  { id: 11, src: '/gallery/products-3.jpg', category: 'products', title: 'Limestone Products', description: 'High-quality limestone varieties' },
  { id: 12, src: '/gallery/facilities-3.jpg', category: 'facilities', title: 'Loading Operations', description: 'Efficient logistics and loading' },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="gallery-page fade-in">
      <PageHero 
        title="Gallery" 
        subtitle="Visual showcase of YMG's mining operations, processing facilities, and premium natural stone products." 
        badge="Our Work" 
      />

      <section className="section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: 'var(--space-xl)' }}>
            <span className="section-badge">Gallery</span>
            <h2 className="section-title">Explore Our Operations</h2>
          </div>

          {/* Category Filter */}
          <div className="gallery-filter" style={{ 
            display: 'flex', 
            gap: '12px', 
            flexWrap: 'wrap', 
            marginBottom: 'var(--space-2xl)',
            justifyContent: 'center'
          }}>
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`gallery-filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                style={{
                  padding: '10px 24px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  background: selectedCategory === category.id ? 'var(--accent-primary)' : 'var(--bg-primary)',
                  color: selectedCategory === category.id ? '#ffffff' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category.id) {
                    e.currentTarget.style.borderColor = 'var(--accent-primary)';
                    e.currentTarget.style.color = 'var(--accent-primary)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category.id) {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }
                }}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '24px'
          }}>
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="gallery-item"
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  aspectRatio: '4/3',
                  background: 'var(--bg-secondary)'
                }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform var(--transition-normal)'
                  }}
                  onError={(e) => {
                    e.target.src = '/ymg_hero_bg.png';
                  }}
                />
                <div className="gallery-overlay" style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(5, 11, 31, 0.85), transparent)',
                  opacity: 0,
                  transition: 'opacity var(--transition-fast)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '20px'
                }}>
                  <div style={{ color: '#ffffff' }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{image.title}</h3>
                    <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>{image.description}</p>
                  </div>
                  <ZoomIn 
                    size={24} 
                    style={{ 
                      position: 'absolute', 
                      top: '16px', 
                      right: '16px',
                      color: '#ffffff',
                      background: 'rgba(255, 255, 255, 0.2)',
                      padding: '8px',
                      borderRadius: '50%'
                    }} 
                  />
                </div>
                <style>{`
                  .gallery-item:hover .gallery-overlay {
                    opacity: 1;
                  }
                  .gallery-item:hover img {
                    transform: scale(1.05);
                  }
                `}</style>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: 'var(--space-2xl)',
              color: 'var(--text-secondary)'
            }}>
              <p>No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="lightbox-modal"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.9)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              color: '#ffffff',
              padding: '12px',
              borderRadius: '50%',
              cursor: 'pointer',
              transition: 'background var(--transition-fast)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
          >
            <X size={28} />
          </button>
          <div 
            style={{ 
              maxWidth: '90vw', 
              maxHeight: '90vh',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              style={{
                maxWidth: '100%',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: 'var(--radius-sm)'
              }}
              onError={(e) => {
                e.target.src = '/ymg_hero_bg.png';
              }}
            />
            <div style={{
              marginTop: '16px',
              textAlign: 'center',
              color: '#ffffff'
            }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>{selectedImage.title}</h3>
              <p style={{ fontSize: '1rem', opacity: 0.8 }}>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      <ContactForm />
    </div>
  );
}
