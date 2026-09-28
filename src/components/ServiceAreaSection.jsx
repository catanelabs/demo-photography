import React from 'react';
import { SERVICE_AREAS, STUDIO_INFO } from '../data/mockData';
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from './Icons';

export const ServiceAreaSection = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <span className="section-label">Coverage & Travel</span>
          <h2 className="section-title">We Photograph Stories Across</h2>
          <p className="section-desc">
            Based in Chennai with frequent wedding coverage across Tamil Nadu, Karnataka, and destination locations.
          </p>
        </div>

        {/* Region Cards Grid */}
        <div className="grid-3" style={{ gap: '1.5rem', marginBottom: '4rem' }}>
          {SERVICE_AREAS.map((area, i) => (
            <div
              key={i}
              className="card"
              style={{
                padding: '1.75rem',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-md)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary-burgundy)', fontSize: '1.5rem', margin: 0 }}>
                  {area.name}
                </h3>
                <span className="badge badge-gold" style={{ fontSize: '0.7rem' }}>
                  {area.status}
                </span>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                {area.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Studio Office & Physical Location Banner */}
        <div
          className="studio-location-banner"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--border-gold)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem',
            boxShadow: 'var(--shadow-md)'
          }}
        >
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent-gold)' }}>
              PHYSICAL STUDIO LOCATION
            </span>
            <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary-burgundy)', fontSize: '1.5rem', margin: '0.2rem 0' }}>
              Kavin & Co. Main Studio
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0.4rem 0 0.8rem 0' }}>
              <MapPinIcon size={15} style={{ display: 'inline', marginRight: '6px' }} />
              {STUDIO_INFO.address}
            </p>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-deep-brown)', fontWeight: 600 }}>
              Hours: Mon - Sat: 10:00 AM - 7:30 PM (By Appointment Only)
            </span>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', width: '100%', maxWidth: '300px' }}>
            <a
              href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=Hi,%20I'd%20like%20to%20visit%20your%20studio%20in%20Chennai.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <WhatsAppIcon size={18} />
              <span>Book Studio Visit</span>
            </a>
          </div>
        </div>

        <style>{`
          @media (min-width: 768px) {
            .studio-location-banner {
              padding: 2.5rem !important;
            }
          }
        `}</style>

      </div>
    </section>
  );
};
