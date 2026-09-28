import React, { useState } from 'react';
import { FEATURED_STORIES } from '../data/mockData';
import { StoryModal } from './StoryModal';
import { MapPinIcon, CalendarIcon, ArrowRightIcon, CameraIcon } from './Icons';

export const FeaturedStories = ({ onOpenAvailability }) => {
  const [activeStory, setActiveStory] = useState(null);

  return (
    <section id="featured-stories" className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <span className="section-label">Real Wedding Documentaries</span>
          <h2 className="section-title">Featured Stories</h2>
          <p className="section-desc">
            We don't sell generic volume packages. We document real people, raw unscripted moments, and family rituals that make your wedding yours.
          </p>
        </div>

        {/* Story Cards Grid */}
        <div className="grid-2" style={{ gap: '2.5rem' }}>
          {FEATURED_STORIES.map((story) => (
            <div
              key={story.id}
              onClick={() => setActiveStory(story)}
              className="card"
              style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
            >
              {/* Card Image Container */}
              <div style={{ position: 'relative', height: 'clamp(220px, 35vw, 320px)', overflow: 'hidden' }}>
                <img
                  src={story.coverImage}
                  alt={story.couple}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  className="story-card-img"
                />
                
                {/* Vignette Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(44, 33, 30, 0.85) 0%, rgba(44, 33, 30, 0.1) 60%, transparent 100%)'
                  }}
                />

                {/* Top Location Pill */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    display: 'flex',
                    gap: '0.5rem'
                  }}
                >
                  <span className="badge badge-gold">{story.tag}</span>
                </div>

                {/* Bottom Overlay Info */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    right: '1rem',
                    color: 'var(--bg-cream)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.78rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.1rem' }}>
                    <span><MapPinIcon size={12} style={{ display: 'inline', marginRight: '2px' }} />{story.location}</span>
                    <span>·</span>
                    <span><CalendarIcon size={12} style={{ display: 'inline', marginRight: '2px' }} />{story.year}</span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-serif)', color: '#FFFFFF', fontSize: '1.6rem', margin: 0 }}>
                    {story.couple}
                  </h3>
                </div>
              </div>

              {/* Card Body Text */}
              <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.55', marginBottom: '1.25rem' }}>
                  {story.snippet}
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '0.85rem',
                    borderTop: '1px solid var(--border-light)',
                    color: 'var(--primary-burgundy)',
                    fontWeight: 700,
                    fontSize: '0.82rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em'
                  }}
                >
                  <span>Explore Full Story ({story.galleryImages.length} Photos)</span>
                  <ArrowRightIcon size={15} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Story View Modal */}
      {activeStory && (
        <StoryModal
          story={activeStory}
          onClose={() => setActiveStory(null)}
          onEnquireStory={(s) => {
            if (onOpenAvailability) onOpenAvailability(s);
          }}
        />
      )}

      <style>{`
        .card:hover .story-card-img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};
