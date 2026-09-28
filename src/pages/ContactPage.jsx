import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { ServiceAreaSection } from '../components/ServiceAreaSection';
import { CalendarIcon, WhatsAppIcon } from '../components/Icons';
import { STUDIO_INFO } from '../data/mockData';

export const ContactPage = ({ onOpenAvailability, onToast }) => {
  return (
    <div style={{ minHeight: '80vh', padding: '3rem 0' }}>
      <div className="container" style={{ marginBottom: '2.5rem' }}>
        <span className="section-label">Enquiry & Location</span>
        <h1 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary-burgundy)' }}>
          Contact Kavin & Co.
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '680px', marginBottom: '2rem' }}>
          Ready to lock in your date or have questions about coverage? Reach out via WhatsApp, phone, or test date availability below.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button onClick={onOpenAvailability} className="btn btn-primary btn-lg">
            <CalendarIcon size={18} />
            <span>Check Availability Status</span>
          </button>

          <a
            href={`https://wa.me/${STUDIO_INFO.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-lg"
          >
            <WhatsAppIcon size={20} />
            <span>WhatsApp Us Direct</span>
          </a>
        </div>
      </div>

      <ContactSection onSubmitted={onToast} />
      <ServiceAreaSection />
    </div>
  );
};
