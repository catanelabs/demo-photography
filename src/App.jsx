import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AvailabilityChecker } from './components/AvailabilityChecker';
import { Toast } from './components/Toast';

import { HomePage } from './pages/HomePage';
import { StoriesPage } from './pages/StoriesPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);
  const [availabilityInitialData, setAvailabilityInitialData] = useState({});
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAvailability = (initialData = {}) => {
    setAvailabilityInitialData(initialData);
    setIsAvailabilityOpen(true);
  };

  const renderContent = () => {
    switch (currentPath) {
      case '/stories':
        return <StoriesPage onOpenAvailability={handleOpenAvailability} />;
      case '/services':
      case '/pricing':
        return <ServicesPage onOpenAvailability={handleOpenAvailability} />;
      case '/contact':
        return <ContactPage onOpenAvailability={handleOpenAvailability} onToast={(msg) => setToastMessage(msg)} />;
      default:
        return (
          <HomePage
            onOpenAvailability={handleOpenAvailability}
            onNavigate={navigateTo}
            onToast={(msg) => setToastMessage(msg)}
          />
        );
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* CATANE Top Demo Banner */}
      <div
        style={{
          backgroundColor: '#1A1412',
          borderBottom: '1px solid var(--accent-gold)',
          padding: '0.45rem 1rem',
          textAlign: 'center',
          fontSize: '0.82rem',
          fontWeight: 600,
          color: 'var(--bg-cream)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          zIndex: 901
        }}
      >
        <span>This website is a demonstration created by <strong>CATANE</strong>.</span>
        <a
          href="https://catane.catane-labs.workers.dev/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'var(--accent-gold)',
            fontWeight: 700,
            textDecoration: 'underline',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.2rem'
          }}
        >
          Visit CATANE ↗
        </a>
      </div>

      <Navbar
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenAvailability={() => handleOpenAvailability()}
      />

      <div style={{ flexGrow: 1 }}>
        {renderContent()}
      </div>

      <Footer
        onNavigate={navigateTo}
        onOpenAvailability={() => handleOpenAvailability()}
      />

      <FloatingWhatsApp />

      <AvailabilityChecker
        isOpen={isAvailabilityOpen}
        onClose={() => setIsAvailabilityOpen(false)}
        initialData={availabilityInitialData}
        onSubmitted={(msg) => setToastMessage(msg)}
      />

      <Toast
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />
    </div>
  );
}
