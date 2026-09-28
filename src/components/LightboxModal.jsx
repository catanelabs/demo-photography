import React from 'react';
import { CloseIcon, MapPinIcon, CameraIcon, ArrowRightIcon } from './Icons';

export const LightboxModal = ({ item, items, onClose, onNavigate, onEnquire }) => {
  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const handlePrev = (e) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onNavigate(items[prevIndex]);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % items.length;
    onNavigate(items[nextIndex]);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1100,
        backgroundColor: 'rgba(20, 15, 14, 0.96)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1rem',
        animation: 'fadeIn 0.25s ease-out'
      }}
      onClick={onClose}
    >
      {/* Top Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 10 }}>
        <div style={{ color: 'var(--bg-cream)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span className="badge badge-gold" style={{ fontSize: '0.7rem' }}>{item.category}</span>
          <span style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.7)' }}>
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: '#FFFFFF',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
          aria-label="Close Lightbox"
        >
          <CloseIcon size={24} />
        </button>
      </div>

      {/* Main Image Stage */}
      <div
        style={{
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          margin: '0.5rem 0'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prev Arrow */}
        <button
          onClick={handlePrev}
          style={{
            position: 'absolute',
            left: '0.25rem',
            zIndex: 10,
            background: 'rgba(0,0,0,0.4)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: '#FFF',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            backdropFilter: 'blur(4px)',
            transition: 'all 0.2s',
            fontSize: '1.4rem'
          }}
          aria-label="Previous image"
        >
          ‹
        </button>

        {/* Image */}
        <img
          src={item.url}
          alt={item.title}
          style={{
            maxHeight: '70vh',
            maxWidth: '92vw',
            objectFit: 'contain',
            borderRadius: 'var(--radius-sm)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }}
        />

        {/* Next Arrow */}
        <button
          onClick={handleNext}
          style={{
            position: 'absolute',
            right: '0.25rem',
            zIndex: 10,
            background: 'rgba(0,0,0,0.4)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: '#FFF',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            backdropFilter: 'blur(4px)',
            transition: 'all 0.2s',
            fontSize: '1.4rem'
          }}
          aria-label="Next image"
        >
          ›
        </button>
      </div>

      {/* Bottom Info Row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          color: 'var(--bg-cream)',
          paddingTop: '0.75rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.15)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <h3 style={{ fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: 0, fontSize: '1.2rem' }}>
            {item.title}
          </h3>
          <div style={{ display: 'flex', gap: '0.8rem', fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.7)', marginTop: '0.15rem' }}>
            <span><MapPinIcon size={12} style={{ display: 'inline', marginRight: '3px' }} />{item.location}</span>
            {item.gear && (
              <span><CameraIcon size={12} style={{ display: 'inline', marginRight: '3px' }} />{item.gear}</span>
            )}
          </div>
        </div>

        <button
          onClick={() => {
            onClose();
            if (onEnquire) onEnquire({ shot: item.title, location: item.location });
          }}
          className="btn btn-primary btn-sm"
          style={{ width: '100%', maxWidth: '240px' }}
        >
          <span>Enquire Similar Shot</span>
          <ArrowRightIcon size={14} />
        </button>
      </div>
    </div>
  );
};
