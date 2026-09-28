import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/mockData';
import { PhoneIcon, WhatsAppIcon, MapPinIcon, SendIcon, CheckIcon } from './Icons';

export const ContactSection = ({ onSubmitted }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    weddingDate: '',
    location: 'Chennai',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSubmitted) {
      onSubmitted(`Thank you ${formData.name || 'there'}! We have received your enquiry for ${formData.weddingDate || 'your wedding date'}.`);
    }
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <span className="section-label">Direct Communication</span>
          <h2 className="section-title">Let's Talk About Your Day</h2>
          <p className="section-desc">
            No buried phone numbers or hidden forms. Reach us directly over WhatsApp, phone call, or submit your wedding details below.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '2.5rem', alignItems: 'flex-start' }}>
          
          {/* Form Left */}
          <div
            className="contact-form-card"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-md)',
              width: '100%'
            }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sundaram"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="grid-2" style={{ gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 00000 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      placeholder="priya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="grid-2" style={{ gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Wedding Date</label>
                    <input
                      type="date"
                      value={formData.weddingDate}
                      onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Event Location</label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="form-select"
                    >
                      {STUDIO_INFO.locations.map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '1.75rem' }}>
                  <label className="form-label">Tell us about your wedding vision</label>
                  <textarea
                    rows={4}
                    placeholder="Number of functions, preferred photo/film style, special requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Send Enquiry</span>
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div
                  style={{
                    width: '4rem',
                    height: '4rem',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(37, 211, 102, 0.15)',
                    color: '#25D366',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem auto'
                  }}
                >
                  <CheckIcon size={32} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary-burgundy)', fontSize: '1.8rem', marginBottom: '0.5rem' }}>
                  Enquiry Received!
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
                  Our team at {STUDIO_INFO.name} will get back to you within 3 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary btn-sm"
                >
                  Submit Another Enquiry
                </button>
              </div>
            )}
          </div>

          {/* Direct Contact Cards Right */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', width: '100%' }}>
            
            {/* WhatsApp Direct */}
            <div
              className="contact-card-row"
              style={{
                backgroundColor: 'rgba(37, 211, 102, 0.08)',
                border: '1px solid #25D366',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                flexWrap: 'wrap'
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#1eb857' }}>
                  INSTANT CHAT
                </span>
                <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-deep-brown)', fontSize: '1.35rem', margin: '0.2rem 0' }}>
                  Chat on WhatsApp
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
                  Fastest response for date availability checks
                </p>
              </div>

              <a
                href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=Hi%20${encodeURIComponent(STUDIO_INFO.name)},%20I'd%20like%20to%20ask%20a%20few%20questions%20about%20my%20wedding.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp contact-cta-btn"
              >
                <WhatsAppIcon size={18} />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Direct Call */}
            <div
              className="contact-card-row"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                flexWrap: 'wrap'
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent-gold)' }}>
                  DIRECT CALL
                </span>
                <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary-burgundy)', fontSize: '1.35rem', margin: '0.2rem 0' }}>
                  {STUDIO_INFO.phone}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
                  Mon - Sat: 10:00 AM to 7:30 PM
                </p>
              </div>

              <a href={`tel:${STUDIO_INFO.phone}`} className="btn btn-secondary contact-cta-btn">
                <PhoneIcon size={18} />
                <span>Call Now</span>
              </a>
            </div>

            {/* Studio Address Card */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <div
                  style={{
                    width: '2.2rem',
                    height: '2.2rem',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(100, 31, 45, 0.1)',
                    color: 'var(--primary-burgundy)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <MapPinIcon size={18} />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary-burgundy)', fontSize: '1.25rem', margin: '0 0 0.3rem 0' }}>
                    Main Studio Address
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                    {STUDIO_INFO.address}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        <style>{`
          @media (min-width: 768px) {
            .contact-form-card {
              padding: 2.5rem !important;
            }
          }
          @media (max-width: 540px) {
            .contact-card-row {
              flex-direction: column;
              align-items: flex-start !important;
            }
            .contact-cta-btn {
              width: 100% !important;
              justify-content: center;
              margin-top: 0.5rem;
            }
          }
        `}</style>


      </div>
    </section>
  );
};
