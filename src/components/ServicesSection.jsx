import React from 'react';
import { SERVICES } from '../data/mockData';
import { CameraIcon, FilmIcon, HeartIcon, CalendarIcon, CheckIcon, ArrowRightIcon } from './Icons';

export const ServicesSection = ({ onOpenAvailability }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'camera': return <CameraIcon size={24} />;
      case 'film': return <FilmIcon size={24} />;
      case 'heart': return <HeartIcon size={24} />;
      default: return <CalendarIcon size={24} />;
    }
  };

  return (
    <section id="services" className="section" style={{ backgroundColor: 'var(--bg-cream)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <span className="section-label">Tailored Offerings</span>
          <h2 className="section-title">What We Offer</h2>
          <p className="section-desc">
            No jargon or 20 confused tiers. Simple, honest photography and film coverage designed around your wedding timeline.
          </p>
        </div>

        {/* 4 Service Cards */}
        <div className="grid-2" style={{ gap: '2rem' }}>
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="card service-card"
              style={{
                padding: '1.5rem',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Header Row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: '3.2rem',
                      height: '3.2rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'rgba(100, 31, 45, 0.08)',
                      color: 'var(--primary-burgundy)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {getIcon(srv.icon)}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary-burgundy)', margin: 0 }}>
                      {srv.title}
                    </h3>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-gold)' }}>
                      {srv.tagline}
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                  {srv.description}
                </p>

                {/* Features list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                  {srv.features.map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--text-deep-brown)' }}>
                      <div
                        style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(185, 150, 85, 0.15)',
                          color: 'var(--primary-burgundy)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <CheckIcon size={12} />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenAvailability({ service: srv.title })}
                className="btn btn-secondary btn-sm"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Enquire For {srv.title}</span>
                <ArrowRightIcon size={15} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
