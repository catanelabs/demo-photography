import React from 'react';
import { STUDIO_INFO } from '../data/mockData';
import { WhatsAppIcon, InstagramIcon, PhoneIcon } from './Icons';

export const Footer = ({ onNavigate, onOpenAvailability }) => {
  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-dark)',
        color: 'var(--text-on-dark)',
        padding: '5rem 0 2.5rem 0',
        borderTop: '1px solid var(--border-burgundy)'
      }}
    >
      <div className="container">
        
        <div className="grid-4" style={{ gap: '3rem', marginBottom: '4rem' }}>
          
          {/* Col 1: Studio Brand */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.8rem',
                fontWeight: 700,
                color: 'var(--accent-gold)',
                letterSpacing: '0.08em',
                display: 'block',
                marginBottom: '0.2rem'
              }}
            >
              {STUDIO_INFO.name}
            </span>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                color: 'var(--secondary-rose)',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '1.25rem'
              }}
            >
              {STUDIO_INFO.tagline}
            </span>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-on-dark-muted)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
              Wedding photography & films crafted around the people, moments, and chaos that make your day yours.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href={`https://wa.me/${STUDIO_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '2.2rem',
                  height: '2.2rem',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: '#25D366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s'
                }}
              >
                <WhatsAppIcon size={16} />
              </a>
              <a
                href={`https://instagram.com/${STUDIO_INFO.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '2.2rem',
                  height: '2.2rem',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: 'var(--accent-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s'
                }}
              >
                <InstagramIcon size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif)', color: '#FFFFFF', fontSize: '1.25rem', marginBottom: '1.25rem' }}>
              Offerings
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-on-dark-muted)' }}>
              <li><a href="#services" style={{ hover: { color: 'var(--accent-gold)' } }}>Wedding Photography</a></li>
              <li><a href="#services">Cinematic Wedding Films</a></li>
              <li><a href="#services">Pre-Wedding Shoot Sessions</a></li>
              <li><a href="#services">Receptions & Engagements</a></li>
              <li><button onClick={onOpenAvailability} style={{ background: 'none', border: 'none', color: 'inherit', padding: 0, font: 'inherit', cursor: 'pointer' }}>Date Availability Tool</button></li>
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif)', color: '#FFFFFF', fontSize: '1.25rem', marginBottom: '1.25rem' }}>
              Locations
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-on-dark-muted)', lineHeight: '1.7' }}>
              Chennai · Vellore · Tirupattur · Ranipet · Bangalore · Pondicherry · Erode · Madurai · South India Destinations
            </p>
          </div>

          {/* Col 4: Booking & Contact */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif)', color: '#FFFFFF', fontSize: '1.25rem', marginBottom: '1.25rem' }}>
              Date Availability
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-on-dark-muted)', marginBottom: '1.25rem' }}>
              Now reserving muhurtham dates for 2026 - 2027 season.
            </p>

            <button
              onClick={onOpenAvailability}
              className="btn btn-primary btn-sm"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>Check Your Dates</span>
            </button>
          </div>

        </div>

        {/* Bottom Copyright & CATANE Attribution */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'var(--text-on-dark-muted)'
          }}
        >
          <span>© 2026 Kavin & Co. Fine Art Wedding Stories. All rights reserved.</span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ color: 'var(--accent-gold)' }}>
              Demo created by{' '}
              <a
                href="https://catane.catane-labs.workers.dev/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'underline', color: 'var(--accent-gold)', fontWeight: 700 }}
              >
                CATANE ↗
              </a>
            </span>
            <div style={{ display: 'flex', gap: '1.25rem' }}>
              <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
              <a href="#terms" onClick={(e) => e.preventDefault()}>Terms of Service</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
