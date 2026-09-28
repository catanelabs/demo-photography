import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { StarIcon, MapPinIcon, CalendarIcon } from './Icons';

export const Testimonials = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-cream)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <span className="section-label">Trust & Words</span>
          <h2 className="section-title">Client Stories</h2>
          <p className="section-desc">
            Read what real couples and families say about working with Kavin & Co. on their wedding day.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid-3" style={{ gap: '2rem' }}>
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="card"
              style={{
                padding: '2.25rem',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Star Rating */}
                <div style={{ display: 'flex', gap: '0.2rem', color: 'var(--accent-gold)', marginBottom: '1.25rem' }}>
                  {[...Array(item.rating)].map((_, i) => (
                    <StarIcon key={i} size={18} />
                  ))}
                </div>

                {/* Quote Text */}
                <p style={{ fontSize: '1.02rem', color: 'var(--text-deep-brown)', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '1.75rem' }}>
                  "{item.text}"
                </p>
              </div>

              {/* Couple Info & Photo */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--border-light)'
                }}
              >
                <img
                  src={item.photo}
                  alt={item.couple}
                  style={{
                    width: '3.2rem',
                    height: '3.2rem',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid var(--border-gold)'
                  }}
                />
                <div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary-burgundy)', margin: 0, fontSize: '1.2rem' }}>
                    {item.couple}
                  </h4>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'block' }}>
                    {item.event}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
