import React, { useState } from 'react';
import { PORTFOLIO_IMAGES } from '../data/mockData';
import { LightboxModal } from './LightboxModal';
import { CameraIcon, MapPinIcon } from './Icons';

export const PortfolioGallery = ({ onOpenAvailability }) => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [lightboxItem, setLightboxItem] = useState(null);

  const categories = ['ALL', 'WEDDINGS', 'COUPLES', 'PORTRAITS', 'EVENTS', 'FILMS'];

  const filteredItems = activeCategory === 'ALL'
    ? PORTFOLIO_IMAGES
    : PORTFOLIO_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <section id="portfolio" className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
          <span className="section-label">Curated Frames</span>
          <h2 className="section-title">The Portfolio</h2>
          <p className="section-desc">
            A small selection of our finest frames. No endless digital clutter—just real emotion, clean lighting, and authentic expressions.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '2rem'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.45rem 1rem',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                border: activeCategory === cat ? '1px solid var(--primary-burgundy)' : '1px solid var(--border-light)',
                backgroundColor: activeCategory === cat ? 'var(--primary-burgundy)' : '#FFFFFF',
                color: activeCategory === cat ? 'var(--bg-cream)' : 'var(--text-deep-brown)',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {filteredItems.map((img) => (
            <div
              key={img.id}
              className="masonry-item"
              onClick={() => setLightboxItem(img)}
            >
              <img src={img.url} alt={img.title} loading="lazy" />
              
              <div className="masonry-overlay">
                <span className="badge badge-gold" style={{ alignSelf: 'flex-start', marginBottom: '0.5rem' }}>
                  {img.category}
                </span>
                <h4 style={{ fontFamily: 'var(--font-serif)', color: '#FFFFFF', fontSize: '1.25rem', margin: '0 0 0.2rem 0' }}>
                  {img.title}
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.8rem', color: 'var(--accent-gold)' }}>
                  <span><MapPinIcon size={12} style={{ display: 'inline', marginRight: '3px' }} />{img.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <LightboxModal
          item={lightboxItem}
          items={filteredItems}
          onClose={() => setLightboxItem(null)}
          onNavigate={(item) => setLightboxItem(item)}
          onEnquire={(data) => {
            if (onOpenAvailability) onOpenAvailability(data);
          }}
        />
      )}
    </section>
  );
};
