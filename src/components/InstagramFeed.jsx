import React from 'react';
import { STUDIO_INFO } from '../data/mockData';
import { InstagramIcon } from './Icons';

export const InstagramFeed = () => {
  const instaPhotos = [
    { url: "/images/hero.jpg", caption: "Chennai Muhurtham Golden Hour" },
    { url: "/images/prewedding.jpg", caption: "Serenity Beach Twilight" },
    { url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80", caption: "Traditional Silk & Details" },
    { url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80", caption: "Night Lantern First Dance" }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-cream)', paddingBottom: '4rem' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="section-label">Recent Moments</span>
          <h2 className="section-title" style={{ fontSize: '2.2rem' }}>More From The Camera</h2>
          <a
            href={`https://instagram.com/${STUDIO_INFO.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontWeight: 700,
              color: 'var(--primary-burgundy)',
              fontSize: '1rem',
              marginTop: '0.2rem'
            }}
          >
            <InstagramIcon size={18} />
            <span>{STUDIO_INFO.instagram}</span>
          </a>
        </div>

        {/* 4 Image Grid */}
        <div className="grid-4" style={{ gap: '1.25rem' }}>
          {instaPhotos.map((item, idx) => (
            <a
              key={idx}
              href={`https://instagram.com/${STUDIO_INFO.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: 'relative',
                aspectRatio: '1/1',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                display: 'block'
              }}
              className="insta-item"
            >
              <img
                src={item.url}
                alt={item.caption}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
              />
              
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(100, 31, 45, 0.75)',
                  opacity: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  padding: '1rem',
                  textAlign: 'center',
                  transition: 'opacity 0.3s ease'
                }}
                className="insta-hover"
              >
                <InstagramIcon size={28} />
              </div>
            </a>
          ))}
        </div>

      </div>

      <style>{`
        .insta-item:hover .insta-hover {
          opacity: 1 !important;
        }
        .insta-item:hover img {
          transform: scale(1.08) !important;
        }
      `}</style>
    </section>
  );
};
