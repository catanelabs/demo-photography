import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/mockData';
import { CloseIcon, CalendarIcon, MapPinIcon, WhatsAppIcon, SparklesIcon } from './Icons';

export const AvailabilityChecker = ({ isOpen, onClose, initialData = {}, onSubmitted }) => {
  const [weddingDate, setWeddingDate] = useState(initialData.date || '2027-02-14');
  const [location, setLocation] = useState(initialData.location || 'Chennai');
  const [events, setEvents] = useState({
    wedding: true,
    reception: true,
    sangeet: false,
    engagement: false
  });
  const [services, setServices] = useState({
    photography: true,
    cinematography: true,
    preWedding: false
  });
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleSendWhatsApp = (e) => {
    if (e) e.preventDefault();

    const selectedEvents = Object.keys(events).filter(k => events[k]).join(', ');
    const selectedServices = Object.keys(services).filter(k => services[k]).join(', ');

    const nameText = name ? `Name: ${name}` : 'Prospective Client';
    const phoneText = phone ? `Phone: ${phone}\n` : '';

    const text = `Hi ${encodeURIComponent(STUDIO_INFO.name)}, I am checking wedding date availability:\n\n• ${nameText}\n${phoneText}• Wedding Date: ${weddingDate}\n• Location: ${location}\n• Functions: ${selectedEvents || 'Wedding'}\n• Services: ${selectedServices || 'Photography'}\n\nPlease let me know if your team is available for this date!`;

    window.open(`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${text}`, '_blank');

    if (onSubmitted) {
      onSubmitted(`Enquiry for ${weddingDate} sent directly to WhatsApp!`);
    }
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-dialog availability-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '1.25rem', maxWidth: '680px' }}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close Modal">
          <CloseIcon size={18} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '1.5rem', marginTop: '0.5rem' }}>
          <div className="badge badge-gold" style={{ marginBottom: '0.4rem' }}>
            <SparklesIcon size={13} /> Instant Direct Query
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary-burgundy)', fontSize: 'clamp(1.6rem, 4vw, 2.2rem)' }}>
            Check Date Availability
          </h2>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            Submit your details to check slot availability directly with our lead team over WhatsApp.
          </p>
        </div>

        <form onSubmit={handleSendWhatsApp}>
          <div className="grid-2" style={{ gap: '1rem', marginBottom: '1rem' }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Your Name (Optional)</label>
              <input
                type="text"
                placeholder="e.g. Priya & Arun"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Phone / WhatsApp Number</label>
              <input
                type="tel"
                placeholder="+91 00000 00000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-input"
              />
            </div>
          </div>

          <div className="grid-2" style={{ gap: '1rem', marginBottom: '1rem' }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Target Wedding Date *</label>
              <input
                type="date"
                value={weddingDate}
                onChange={(e) => setWeddingDate(e.target.value)}
                className="form-input"
                required
              />
            </div>

            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">City / Region *</label>
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
          </div>

          <div className="form-group" style={{ marginBottom: '1.25rem' }}>
            <label className="form-label">Functions / Events</label>
            <div className="events-checkbox-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '0.5rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.88rem' }}>
                <input
                  type="checkbox"
                  checked={events.wedding}
                  onChange={(e) => setEvents({ ...events, wedding: e.target.checked })}
                  style={{ accentColor: 'var(--primary-burgundy)' }}
                />
                <span>Muhurtham / Main Wedding</span>
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.88rem' }}>
                <input
                  type="checkbox"
                  checked={events.reception}
                  onChange={(e) => setEvents({ ...events, reception: e.target.checked })}
                  style={{ accentColor: 'var(--primary-burgundy)' }}
                />
                <span>Evening Reception</span>
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.88rem' }}>
                <input
                  type="checkbox"
                  checked={events.sangeet}
                  onChange={(e) => setEvents({ ...events, sangeet: e.target.checked })}
                  style={{ accentColor: 'var(--primary-burgundy)' }}
                />
                <span>Sangeet / Mehendi</span>
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.88rem' }}>
                <input
                  type="checkbox"
                  checked={events.engagement}
                  onChange={(e) => setEvents({ ...events, engagement: e.target.checked })}
                  style={{ accentColor: 'var(--primary-burgundy)' }}
                />
                <span>Engagement</span>
              </label>
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: '1.75rem' }}>
            <label className="form-label">Services Required</label>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontSize: '0.88rem' }}>
                <input
                  type="checkbox"
                  checked={services.photography}
                  onChange={(e) => setServices({ ...services, photography: e.target.checked })}
                  style={{ accentColor: 'var(--primary-burgundy)' }}
                />
                <span>Photography</span>
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontSize: '0.88rem' }}>
                <input
                  type="checkbox"
                  checked={services.cinematography}
                  onChange={(e) => setServices({ ...services, cinematography: e.target.checked })}
                  style={{ accentColor: 'var(--primary-burgundy)' }}
                />
                <span>4K Cinematography</span>
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontSize: '0.88rem' }}>
                <input
                  type="checkbox"
                  checked={services.preWedding}
                  onChange={(e) => setServices({ ...services, preWedding: e.target.checked })}
                  style={{ accentColor: 'var(--primary-burgundy)' }}
                />
                <span>Pre-Wedding Shoot</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-whatsapp btn-lg"
            style={{ width: '100%', justifyContent: 'center', fontSize: '0.98rem', padding: '0.85rem 1.5rem' }}
          >
            <WhatsAppIcon size={20} />
            <span>Check Availability via WhatsApp</span>
          </button>
        </form>

        <style>{`
          @media (min-width: 500px) {
            .events-checkbox-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (min-width: 640px) {
            .availability-modal-dialog {
              padding: 2.25rem !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
};
