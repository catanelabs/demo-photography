import React, { useState, useEffect } from 'react';
import { STUDIO_INFO } from '../data/mockData';
import { CalendarIcon, WhatsAppIcon, MenuIcon, CloseIcon } from './Icons';

export const Navbar = ({ currentPath, onNavigate, onOpenAvailability }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Featured Stories', path: '/stories', anchor: '#featured-stories' },
    { label: 'Services', path: '/services', anchor: '#services' },
    { label: 'About', path: '/about', anchor: '#about-studio' },
    { label: 'Contact', path: '/contact', anchor: '#contact' },
  ];

  const handleLinkClick = (item) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(item.path);
    }
    if (item.anchor && window.location.pathname === item.path) {
      const el = document.querySelector(item.anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 900,
        backgroundColor: scrolled ? 'rgba(245, 239, 229, 0.95)' : 'var(--bg-cream)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-light)' : '1px solid transparent',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        padding: scrolled ? '0.75rem 0' : '1rem 0',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
        {/* Studio Branding */}
        <div
          onClick={() => {
            setMobileMenuOpen(false);
            if (onNavigate) onNavigate('/');
          }}
          style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
        >
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.4rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              color: 'var(--primary-burgundy)',
              lineHeight: 1.1
            }}
          >
            {STUDIO_INFO.name}
          </span>
          <span
            style={{
              fontSize: '0.62rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              color: 'var(--accent-gold)',
              textTransform: 'uppercase'
            }}
          >
            {STUDIO_INFO.tagline}
          </span>
        </div>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.75rem',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.88rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.06em'
          }}
          className="desktop-nav"
        >
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.label}
                onClick={() => handleLinkClick(item)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: isActive ? 'var(--primary-burgundy)' : 'var(--text-deep-brown)',
                  borderBottom: isActive ? '2px solid var(--primary-burgundy)' : '2px solid transparent',
                  padding: '0.3rem 0',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons & Mobile Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <a
            href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=Hi%20Kavin%20%26%20Co.,%20I'd%20like%20to%20enquire%20about%20wedding%20photography.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm"
            style={{ display: 'inline-flex', padding: '0.45rem 0.75rem' }}
            aria-label="WhatsApp Us"
          >
            <WhatsAppIcon size={16} />
            <span className="whatsapp-text-desktop">WhatsApp</span>
          </a>

          <button
            onClick={onOpenAvailability}
            className="btn btn-primary btn-sm"
            style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', padding: '0.45rem 0.75rem' }}
          >
            <CalendarIcon size={14} />
            <span className="check-avail-text">Check Availability</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle mobile menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '2.4rem',
              height: '2.4rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-light)',
              backgroundColor: 'var(--bg-surface)',
              color: 'var(--primary-burgundy)',
              cursor: 'pointer',
              marginLeft: '0.2rem'
            }}
          >
            {mobileMenuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer Backdrop & Panel */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: '60px',
            backgroundColor: 'rgba(27, 21, 20, 0.75)',
            backdropFilter: 'blur(8px)',
            zIndex: 899,
            display: 'flex',
            flexDirection: 'column'
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              backgroundColor: 'var(--bg-cream)',
              padding: '1.5rem',
              borderBottom: '2px solid var(--border-gold)',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              animation: 'slideUp 0.25s ease-out'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navItems.map((item) => {
                const isActive = currentPath === item.path;
                return (
                  <button
                    key={item.label}
                    onClick={() => handleLinkClick(item)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: isActive ? 'rgba(100, 31, 45, 0.08)' : 'var(--bg-surface)',
                      color: isActive ? 'var(--primary-burgundy)' : 'var(--text-deep-brown)',
                      fontWeight: isActive ? 700 : 600,
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1rem',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <span>{item.label}</span>
                    <span style={{ fontSize: '1.2rem', color: 'var(--accent-gold)' }}>›</span>
                  </button>
                );
              })}
            </div>

            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAvailability();
                }}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <CalendarIcon size={16} />
                <span>Check Date Availability</span>
              </button>

              <a
                href={`https://wa.me/${STUDIO_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <WhatsAppIcon size={18} />
                <span>Direct WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .whatsapp-text-desktop {
          display: none;
        }
        @media (min-width: 640px) {
          .whatsapp-text-desktop {
            display: inline;
          }
        }
        @media (max-width: 420px) {
          .check-avail-text {
            display: none;
          }
        }
        .mobile-menu-btn {
          display: flex;
        }
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
};

