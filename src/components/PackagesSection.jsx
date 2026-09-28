import React, { useState } from 'react';
import { PACKAGES, STUDIO_INFO } from '../data/mockData';
import { CheckIcon, CalendarIcon, WhatsAppIcon, SparklesIcon, ArrowRightIcon } from './Icons';

export const PackagesSection = ({ onOpenAvailability }) => {
  // Custom Quote Estimator State
  const [days, setDays] = useState(2);
  const [hasCandid, setHasCandid] = useState(true);
  const [hasTraditional, setHasTraditional] = useState(true);
  const [hasCinema, setHasCinema] = useState(true);
  const [hasDrone, setHasDrone] = useState(true);
  const [hasAlbum, setHasAlbum] = useState(true);
  const [location, setLocation] = useState('Chennai');

  // Calculation logic
  const calculateEstimate = () => {
    let base = 35000 * days;
    if (hasCandid) base += 25000 * days;
    if (hasTraditional) base += 20000 * days;
    if (hasCinema) base += 35000 * days;
    if (hasDrone) base += 15000 * days;
    if (hasAlbum) base += 25000;
    if (location === 'Bangalore' || location === 'Destination') base += 20000;

    const formatted = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(base);
    return formatted;
  };

  const handleWhatsAppQuote = () => {
    const servicesList = [];
    if (hasCandid) servicesList.push('Candid Photo');
    if (hasTraditional) servicesList.push('Traditional Photo%26Video');
    if (hasCinema) servicesList.push('4K Cinema Film');
    if (hasDrone) servicesList.push('Drone Aerials');
    if (hasAlbum) servicesList.push('Heirloom Album');

    const msg = `Hi Kavin %26 Co., I built a custom quote on your website:\n\n• Duration: ${days} Day(s)\n• Location: ${location}\n• Services: ${servicesList.join(', ')}\n• Estimated Quote: ${calculateEstimate()}\n\nCan we discuss date availability?`;
    window.open(`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <section id="packages" className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <span className="section-label">Investment & Collections</span>
          <h2 className="section-title">Wedding Collections</h2>
          <p className="section-desc">
            Clear upfront pricing with no hidden charges. Every package includes full high-res edited digital files and high quality color grading.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid-3" style={{ gap: '1.5rem', marginBottom: '4rem', alignItems: 'stretch' }}>
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="card"
              style={{
                padding: '1.5rem',
                backgroundColor: pkg.popular ? '#FFFFFF' : 'var(--bg-card)',
                borderColor: pkg.popular ? 'var(--primary-burgundy)' : 'var(--border-light)',
                borderWidth: pkg.popular ? '2px' : '1px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: pkg.popular ? 'var(--shadow-lg)' : 'var(--shadow-sm)'
              }}
            >
              {pkg.popular && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-0.9rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'var(--primary-burgundy)',
                    color: 'var(--bg-cream)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    padding: '0.3rem 1rem',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid var(--accent-gold)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  MOST REQUESTED
                </div>
              )}

              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary-burgundy)', fontSize: '1.6rem', marginBottom: '0.2rem', marginTop: pkg.popular ? '0.4rem' : '0' }}>
                  {pkg.name}
                </h3>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'block', marginBottom: '1.25rem' }}>
                  {pkg.subtitle}
                </span>

                <div style={{ marginBottom: '1.5rem', paddingBottom: '1.25rem', borderBottom: '1px solid var(--border-light)' }}>
                  <span style={{ fontSize: ' clamp(1.8rem, 5vw, 2.4rem)', fontWeight: 800, color: 'var(--text-deep-brown)', fontFamily: 'var(--font-serif)', lineHeight: 1.15, display: 'block' }}>
                    {pkg.price}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.2rem' }}>
                    Taxes inclusive · Upfront estimate
                  </span>
                </div>

                {/* Feature checklist */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.88rem', color: 'var(--text-deep-brown)' }}>
                      <div
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          backgroundColor: pkg.popular ? 'rgba(100, 31, 45, 0.12)' : 'rgba(185, 150, 85, 0.15)',
                          color: 'var(--primary-burgundy)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '2px'
                        }}
                      >
                        <CheckIcon size={11} />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenAvailability({ package: pkg.name })}
                className={`btn ${pkg.popular ? 'btn-primary' : 'btn-secondary'}`}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Book {pkg.name}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Interactive Custom Quote Calculator Widget */}
        <div
          style={{
            backgroundColor: 'var(--bg-cream)',
            border: '2px dashed var(--border-gold)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.5rem 1.25rem',
            maxWidth: '960px',
            margin: '0 auto'
          }}
          className="calculator-box"
        >
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <div className="badge badge-gold" style={{ marginBottom: '0.4rem' }}>
              <SparklesIcon size={13} /> Interactive Estimator
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary-burgundy)', fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>
              Build Your Custom Wedding Quote
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Select your specific functions, duration, and services to generate an instant estimate.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '1.75rem', alignItems: 'center' }}>
            {/* Controls Left */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              
              <div>
                <label className="form-label">Number of Event Days</label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {[1, 2, 3].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDays(d)}
                      style={{
                        flex: 1,
                        padding: '0.55rem',
                        borderRadius: 'var(--radius-sm)',
                        border: days === d ? '2px solid var(--primary-burgundy)' : '1px solid var(--border-light)',
                        backgroundColor: days === d ? 'var(--primary-burgundy)' : '#FFFFFF',
                        color: days === d ? '#FFFFFF' : 'var(--text-deep-brown)',
                        fontWeight: 700,
                        cursor: 'pointer',
                        fontSize: '0.85rem'
                      }}
                    >
                      {d} {d === 1 ? 'Day' : 'Days'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="form-label">Primary Wedding Location</label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="form-select"
                >
                  {STUDIO_INFO.locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="form-label">Select Services Included</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', cursor: 'pointer' }}>
                    <input type="checkbox" checked={hasCandid} onChange={(e) => setHasCandid(e.target.checked)} style={{ accentColor: 'var(--primary-burgundy)' }} />
                    <span>Lead Candid Photography</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', cursor: 'pointer' }}>
                    <input type="checkbox" checked={hasTraditional} onChange={(e) => setHasTraditional(e.target.checked)} style={{ accentColor: 'var(--primary-burgundy)' }} />
                    <span>Traditional Photo & Video Team</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', cursor: 'pointer' }}>
                    <input type="checkbox" checked={hasCinema} onChange={(e) => setHasCinema(e.target.checked)} style={{ accentColor: 'var(--primary-burgundy)' }} />
                    <span>4K Cinematic Wedding Film</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', cursor: 'pointer' }}>
                    <input type="checkbox" checked={hasDrone} onChange={(e) => setHasDrone(e.target.checked)} style={{ accentColor: 'var(--primary-burgundy)' }} />
                    <span>Aerial Drone Coverage</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', cursor: 'pointer' }}>
                    <input type="checkbox" checked={hasAlbum} onChange={(e) => setHasAlbum(e.target.checked)} style={{ accentColor: 'var(--primary-burgundy)' }} />
                    <span>Handcrafted Archival Album</span>
                  </label>
                </div>
              </div>

            </div>

            {/* Live Calculation Output Right */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem 1.25rem',
                border: '1px solid var(--border-gold)',
                textAlign: 'center',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-gold)' }}>
                ESTIMATED INVESTMENT
              </span>
              
              <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary-burgundy)', fontSize: 'clamp(1.8rem, 6vw, 3rem)', margin: '0.4rem 0', wordBreak: 'break-word' }}>
                {calculateEstimate()}
              </h2>

              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Includes {days} day(s) full team coverage in {location} with edited high-res digital gallery.
              </p>

              <button
                onClick={handleWhatsAppQuote}
                className="btn btn-whatsapp btn-lg"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <WhatsAppIcon size={18} />
                <span>Send Quote via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        <style>{`
          @media (min-width: 768px) {
            .calculator-box {
              padding: 3rem 2.5rem !important;
            }
          }
        `}</style>

      </div>
    </section>
  );
};
