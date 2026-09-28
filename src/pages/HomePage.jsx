import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturedStories } from '../components/FeaturedStories';
import { ServicesSection } from '../components/ServicesSection';
import { AboutSection } from '../components/AboutSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Testimonials } from '../components/Testimonials';
import { FaqSection } from '../components/FaqSection';
import { ServiceAreaSection } from '../components/ServiceAreaSection';
import { InstagramFeed } from '../components/InstagramFeed';
import { ContactSection } from '../components/ContactSection';

export const HomePage = ({ onOpenAvailability, onNavigate, onToast }) => {
  return (
    <main style={{ minHeight: '100vh' }}>
      <Hero onOpenAvailability={onOpenAvailability} onNavigate={onNavigate} />
      <FeaturedStories onOpenAvailability={onOpenAvailability} />
      <ServicesSection onOpenAvailability={onOpenAvailability} />
      <AboutSection />
      <WhyChooseUs />
      <Testimonials />
      <FaqSection />
      <ServiceAreaSection />
      <InstagramFeed />
      <ContactSection onSubmitted={onToast} />
    </main>
  );
};
