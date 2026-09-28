import React, { useState } from 'react';
import { CloseIcon, MapPinIcon, CalendarIcon, CameraIcon, WhatsAppIcon, CheckIcon } from './Icons';

export const StoryModal = ({ story, onClose, onEnquireStory }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!story) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-dialog story-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '0', overflow: 'hidden', maxWidth: '1000px' }}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close story modal">
          <CloseIcon size={18} />
        </button>


        {/* Modal Header Banner */}
        <div
          className="story-modal-header"
          style={{
            position: 'relative',
            height: '240px',
            overflow: 'hidden'
          }}
        >
          <img
            src={story.coverImage}
            alt={story.couple}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(27, 21, 20, 0.95) 0%, rgba(27, 21, 20, 0.3) 60%, transparent 100%)'
            }}
          />

          <div
            style={{
              position: 'absolute',
              bottom: '1.25rem',
              left: '1.25rem',
              right: '1.25rem',
              color: 'var(--bg-cream)'
            }}
          >
            <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
              <span className="badge badge-gold">{story.tag}</span>
              <span className="badge" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#FFF', borderColor: 'transparent' }}>
                <MapPinIcon size={11} /> {story.location}
              </span>
              <span className="badge" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#FFF', borderColor: 'transparent' }}>
                <CalendarIcon size={11} /> {story.year}
              </span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-serif)', color: '#FFFFFF', fontSize: 'clamp(1.6rem, 5vw, 2.8rem)', margin: '0.1rem 0' }}>
              {story.couple}
            </h1>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.85)', margin: 0 }}>
              {story.venue}
            </p>
          </div>
        </div>

        {/* Story Content & Gallery Body */}
        <div className="story-modal-body" style={{ padding: '1.25rem', maxHeight: '65vh', overflowY: 'auto' }}>
          
          {/* Main Story Paragraphs */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary-burgundy)', marginBottom: '0.5rem', fontSize: '1.35rem' }}>
              The Wedding Story
            </h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.65', color: 'var(--text-deep-brown)', marginBottom: '1.25rem' }}>
              {story.fullStory}
            </p>

            {/* Photographer's Note Box */}
            <div
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderLeft: '4px solid var(--accent-gold)',
                padding: '1rem 1.25rem',
                borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                marginBottom: '1.25rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem', color: 'var(--primary-burgundy)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase' }}>
                <CameraIcon size={15} />
                <span>Photographer's Perspective</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontStyle: 'italic', margin: 0 }}>
                "{story.photographerNote}"
              </p>
            </div>

            {/* Highlights Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.85rem' }}>
              {story.highlights.map((h, i) => (
                <span
                  key={i}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.35rem 0.75rem',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: 'var(--text-deep-brown)'
                  }}
                >
                  <CheckIcon size={12} style={{ color: 'var(--primary-burgundy)' }} />
                  {h}
                </span>
              ))}
            </div>
          </div>

          {/* Full Gallery Grid */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary-burgundy)', marginBottom: '1rem', fontSize: '1.35rem' }}>
              Curated Frames ({story.galleryImages.length} Photographs)
            </h3>
            
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
                gap: '0.75rem'
              }}
            >
              {story.galleryImages.map((imgUrl, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(imgUrl)}
                  style={{
                    aspectRatio: '4/3',
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    position: 'relative'
                  }}
                >
                  <img
                    src={imgUrl}
                    alt={`${story.couple} frame ${index + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                    className="gallery-thumb"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div
            style={{
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--border-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Planning a wedding in {story.location}?</span>
              <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary-burgundy)', margin: 0, fontSize: '1.2rem' }}>Let's craft your wedding story</h4>
            </div>

            <button
              onClick={() => {
                onClose();
                if (onEnquireStory) onEnquireStory(story);
              }}
              className="btn btn-primary btn-md"
              style={{ width: '100%', maxWidth: '300px' }}
            >
              <span>Check Dates for {story.location}</span>
            </button>
          </div>

        </div>

        <style>{`
          @media (min-width: 768px) {
            .story-modal-header {
              height: 340px !important;
            }
            .story-modal-body {
              padding: 2.5rem !important;
            }
          }
        `}</style>
      </div>

      {/* Embedded Single Image Zoom Modal if thumb clicked */}
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1200,
            backgroundColor: 'rgba(0,0,0,0.92)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Enlarged view"
            style={{ maxHeight: '90vh', maxWidth: '95vw', objectFit: 'contain', borderRadius: '4px' }}
          />
        </div>
      )}

      <style>{`
        .gallery-thumb:hover {
          transform: scale(1.06);
        }
      `}</style>
    </div>
  );
};
