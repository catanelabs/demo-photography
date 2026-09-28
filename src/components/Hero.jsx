import React from 'react';
import { STUDIO_INFO } from '../data/mockData';
import { CalendarIcon, ArrowRightIcon, SparklesIcon, MapPinIcon } from './Icons';

export const Hero = ({ onOpenAvailability, onNavigate }) => {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2.5rem 0 4rem 0',
        overflow: 'hidden',
        width: '100%'
      }}
    >
      {/* Background Graphic & Accent Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: 'clamp(280px, 40vw, 500px)',
          height: 'clamp(280px, 40vw, 500px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(185, 150, 85, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '-5%',
          width: 'clamp(260px, 35vw, 450px)',
          height: 'clamp(260px, 35vw, 450px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(100, 31, 45, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Hero Content Column */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
            
            {/* Top Pill / Badge */}
            <div
              className="badge"
              style={{
                marginBottom: '1.25rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: 'clamp(0.68rem, 2.5vw, 0.78rem)',
                padding: '0.35rem 0.85rem',
                lineHeight: '1.3',
                textAlign: 'left'
              }}
            >
              <SparklesIcon size={14} style={{ flexShrink: 0, color: 'var(--primary-burgundy)' }} />
              <span>South India Wedding Photographers of the Year</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                color: 'var(--text-deep-brown)',
                marginBottom: '1rem',
                lineHeight: '1.15'
              }}
            >
              Stories that still feel <span style={{ fontStyle: 'italic', color: 'var(--primary-burgundy)' }}>alive</span> years later.
            </h1>

            {/* Short Positioning Subtext */}
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.65',
                color: 'var(--text-muted)',
                marginBottom: '2rem',
                maxWidth: '560px'
              }}
            >
              {STUDIO_INFO.heroSubtext}
            </p>

            {/* Action Buttons */}
            <div
              className="hero-cta-group"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                alignItems: 'center',
                marginBottom: '2rem',
                width: '100%'
              }}
            >
              <button
                onClick={onOpenAvailability}
                className="btn btn-primary btn-lg hero-btn"
                style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}
              >
                <CalendarIcon size={18} />
                <span>Check Availability</span>
              </button>

              <button
                onClick={() => {
                  if (onNavigate) onNavigate('/stories');
                  const el = document.querySelector('#featured-stories');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-secondary btn-lg hero-btn"
                style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}
              >
                <span>View Stories</span>
                <ArrowRightIcon size={18} />
              </button>
            </div>

            {/* Trust Pill & Locations */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--border-light)',
                width: '100%',
                maxWidth: '540px'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--primary-burgundy)', fontFamily: 'var(--font-serif)' }}>
                  {STUDIO_INFO.experienceYears}+ Years · {STUDIO_INFO.weddingsCovered}+ Weddings
                </span>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.2rem', flexWrap: 'wrap' }}>
                  <MapPinIcon size={14} style={{ flexShrink: 0 }} /> {STUDIO_INFO.locations.join(' · ')}
                </span>
              </div>
            </div>

          </div>

          {/* Hero Photograph Display Column */}
          <div style={{ position: 'relative', width: '100%' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '2px solid var(--border-gold)',
                aspectRatio: '4/3',
                width: '100%'
              }}
            >
              <img
                src="/images/hero.jpg"
                alt="Arun and Priya Wedding Muhurtham"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.8s ease'
                }}
              />

              {/* Image Overlay Vignette */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(44, 33, 30, 0.85) 0%, transparent 60%)'
                }}
              />

              {/* Overlay Caption */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem',
                  right: '1rem',
                  color: 'var(--bg-cream)'
                }}
              >
                <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>
                  FEATURED MUHURTHAM
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: '0.1rem 0', fontSize: '1.4rem' }}>
                  Arun × Priya
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.85)', margin: 0 }}>
                  Chennai · East Coast Road Beach Resort
                </p>
              </div>
            </div>

            {/* Floating Highlight Card - Controlled within bounds */}
            <div
              className="hero-float-card animate-pulse-slow"
              style={{
                position: 'absolute',
                top: '0.75rem',
                right: '0.75rem',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(6px)',
                padding: '0.65rem 1rem',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--border-gold)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                zIndex: 2,
                maxWidth: 'calc(100% - 1.5rem)'
              }}
            >
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#25D366', flexShrink: 0 }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--primary-burgundy)', lineHeight: 1.2 }}>
                  2026-2027 Dates
                </span>
                <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-deep-brown)', lineHeight: 1.2 }}>
                  Booking Open for South India
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hero-cta-group {
            flex-direction: column;
          }
          .hero-btn {
            width: 100% !important;
            justify-content: center;
          }
          .hero-float-card {
            top: 0.5rem !important;
            right: 0.5rem !important;
            padding: 0.5rem 0.75rem !important;
          }
        }
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
            gap: 3.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

