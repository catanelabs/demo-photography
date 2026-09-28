import React from 'react';
import { FeaturedStories } from '../components/FeaturedStories';

export const StoriesPage = ({ onOpenAvailability }) => {
  return (
    <div style={{ minHeight: '80vh', padding: '3rem 0' }}>
      <div className="container" style={{ marginBottom: '2rem' }}>
        <span className="section-label">Real Weddings</span>
        <h1 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary-burgundy)' }}>
          Real Wedding Stories & Documentaries
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '680px' }}>
          Explore complete wedding day stories across Chennai, Vellore, Bangalore, Pondicherry, and beyond. Click any couple to see their full photo gallery and behind-the-scenes notes.
        </p>
      </div>

      <FeaturedStories onOpenAvailability={onOpenAvailability} />
    </div>
  );
};
