import React from 'react';
import { STUDIO_INFO } from '../data/mockData';
import { CheckIcon, MapPinIcon } from './Icons';

export const AboutSection = () => {
  return (
    <section id="about-studio" className="section" style={{ backgroundColor: 'var(--bg-cream)' }}>
      <div className="container">
        
        <div className="grid-2 about-grid" style={{ gap: '2.5rem', alignItems: 'center' }}>
          
          {/* Column 1: Photographer Photo & Stats */}
          <div style={{ position: 'relative', width: '100%', marginBottom: '2.5rem' }}>
            <div
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '2px solid var(--border-gold)',
                aspectRatio: '1/1',
                width: '100%'
              }}
            >
              <img
                src="/images/photographer.jpg"
                alt={`${STUDIO_INFO.founderName} - Founder & Lead Photographer`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Overlay Badge */}
            <div
              className="about-stats-badge"
              style={{
                position: 'absolute',
                bottom: '-1.5rem',
                left: '1rem',
                right: '1rem',
                backgroundColor: 'var(--bg-card)',
                padding: '1rem 1.25rem',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--border-gold)',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                textAlign: 'center',
                gap: '0.5rem'
              }}
            >
              <div>
                <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary-burgundy)', fontFamily: 'var(--font-serif)', display: 'block', lineHeight: 1.1 }}>
                  {STUDIO_INFO.experienceYears}+
                </span>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  Years Crafting
                </span>
              </div>
              <div style={{ borderLeft: '1px solid var(--border-light)', borderRight: '1px solid var(--border-light)' }}>
                <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary-burgundy)', fontFamily: 'var(--font-serif)', display: 'block', lineHeight: 1.1 }}>
                  {STUDIO_INFO.weddingsCovered}+
                </span>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  Weddings
                </span>
              </div>
              <div>
                <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary-burgundy)', fontFamily: 'var(--font-serif)', display: 'block', lineHeight: 1.1 }}>
                  100%
                </span>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  Real Stories
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Human Story */}
          <div style={{ paddingTop: '0.5rem' }}>
            <span className="section-label">Behind The Camera</span>
            <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>
              I'm {STUDIO_INFO.founderName}.
            </h2>

            <p style={{ fontSize: '1.02rem', color: 'var(--text-deep-brown)', lineHeight: '1.7', marginBottom: '1rem' }}>
              I started photographing weddings {STUDIO_INFO.experienceYears} years ago because I realized that standard studio photography was missing the soul. Couples were asked to stand in awkward static poses while the real moments—a mother's tearful smile, a grandfather's quiet blessing, a hilarious glance between best friends—were happening unnoticed in the background.
            </p>

            <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '1.75rem' }}>
              Today, along with my team of specialized candid photographers and cinematographers, we document stories across <strong>{STUDIO_INFO.locations.join(', ')}</strong>. When you hire us, you're hiring humans who respect your family's rituals and care deeply about the legacy of your photographs.
            </p>

            {/* Philosophy Bullets */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'rgba(100, 31, 45, 0.1)', color: 'var(--primary-burgundy)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <CheckIcon size={13} />
                </div>
                <span style={{ fontWeight: 600, color: 'var(--text-deep-brown)', fontSize: '0.92rem' }}>
                  Zero intrusive yelling or fake repetitive poses
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'rgba(100, 31, 45, 0.1)', color: 'var(--primary-burgundy)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <CheckIcon size={13} />
                </div>
                <span style={{ fontWeight: 600, color: 'var(--text-deep-brown)', fontSize: '0.92rem' }}>
                  Warm, respectful interaction with family elders
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'rgba(100, 31, 45, 0.1)', color: 'var(--primary-burgundy)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <CheckIcon size={13} />
                </div>
                <span style={{ fontWeight: 600, color: 'var(--text-deep-brown)', fontSize: '0.92rem' }}>
                  Fast 48-hour preview delivery for instant family sharing
                </span>
              </div>
            </div>

            {/* Location Badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent-gold)', marginRight: '0.25rem' }}>
                REGIONS SERVED:
              </span>
              {STUDIO_INFO.locations.map((loc) => (
                <span key={loc} className="badge" style={{ backgroundColor: '#FFFFFF', fontSize: '0.72rem' }}>
                  <MapPinIcon size={11} /> {loc}
                </span>
              ))}
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 768px) {
          .about-grid {
            gap: 4rem !important;
          }
        }
      `}</style>
    </section>
  );
};

