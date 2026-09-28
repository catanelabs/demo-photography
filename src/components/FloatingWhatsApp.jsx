import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/mockData';
import { WhatsAppIcon, CloseIcon } from './Icons';

export const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div
      className="whatsapp-float-wrapper"
      style={{
        position: 'fixed',
        bottom: '1.25rem',
        right: '1.25rem',
        zIndex: 990,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '0.5rem'
      }}
    >
      {showTooltip && (
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--border-gold)',
            borderRadius: 'var(--radius-md)',
            padding: '0.75rem 0.95rem',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            maxWidth: '240px',
            animation: 'slideUp 0.3s ease-out'
          }}
        >
          <div style={{ fontSize: '0.8rem', color: 'var(--text-deep-brown)', lineHeight: '1.35' }}>
            <span style={{ fontWeight: 700, color: 'var(--primary-burgundy)', display: 'block' }}>Planning a wedding?</span>
            Chat with {STUDIO_INFO.name} on WhatsApp
          </div>

          <button
            onClick={() => setShowTooltip(false)}
            style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: 0, flexShrink: 0 }}
            aria-label="Dismiss tooltip"
          >
            <CloseIcon size={14} />
          </button>
        </div>
      )}

      <a
        href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=Hi%20${encodeURIComponent(STUDIO_INFO.name)},%20I'm%20on%20your%20website%20and%20want%20to%20check%20wedding%20dates.`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: '3.2rem',
          height: '3.2rem',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 20px rgba(37, 211, 102, 0.45)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          cursor: 'pointer'
        }}
        className="whatsapp-float-btn"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size={25} />
      </a>

      <style>{`
        @media (min-width: 768px) {
          .whatsapp-float-wrapper {
            bottom: 2rem !important;
            right: 2rem !important;
          }
          .whatsapp-float-btn {
            width: 3.6rem !important;
            height: 3.6rem !important;
          }
        }
        .whatsapp-float-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.6);
        }
      `}</style>
    </div>
  );
};
