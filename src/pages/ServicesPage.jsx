import React from 'react';
import { ServicesSection } from '../components/ServicesSection';

export const ServicesPage = ({ onOpenAvailability }) => {
  return (
    <div style={{ minHeight: '80vh', padding: '3rem 0' }}>
      <div className="container" style={{ marginBottom: '2rem' }}>
        <span className="section-label">Services & Offerings</span>
        <h1 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary-burgundy)' }}>
          What We Offer
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '680px' }}>
          Explore our specialized candid photography, 4K cinematic films, pre-wedding couple sessions, and reception coverage.
        </p>
      </div>

      <ServicesSection onOpenAvailability={onOpenAvailability} />
    </div>
  );
};
