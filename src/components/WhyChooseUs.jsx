import React from 'react';
import { WHY_CHOOSE_US } from '../data/mockData';
import { SparklesIcon, UsersIcon, ZapIcon, BookIcon, ShieldIcon } from './Icons';

export const WhyChooseUs = () => {
  const getIcon = (type) => {
    switch (type) {
      case 'sparkles': return <SparklesIcon size={24} />;
      case 'users': return <UsersIcon size={24} />;
      case 'zap': return <ZapIcon size={24} />;
      case 'book': return <BookIcon size={24} />;
      default: return <ShieldIcon size={24} />;
    }
  };

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <span className="section-label">Factual Guarantees</span>
          <h2 className="section-title">Why Couples Choose Kavin & Co.</h2>
          <p className="section-desc">
            No empty claims or buzzwords. Here is how we execute every wedding assignment with precision and care.
          </p>
        </div>

        {/* 5 Value Prop Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}
        >
          {WHY_CHOOSE_US.map((item, i) => (
            <div
              key={i}
              className="card"
              style={{
                padding: '2rem',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-md)'
              }}
            >
              <div
                style={{
                  width: '3.2rem',
                  height: '3.2rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(185, 150, 85, 0.12)',
                  color: 'var(--primary-burgundy)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}
              >
                {getIcon(item.icon)}
              </div>

              <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary-burgundy)', fontSize: '1.35rem', marginBottom: '0.75rem' }}>
                {item.title}
              </h3>

              <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', lineHeight: '1.65', margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
