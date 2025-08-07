import React, { Suspense, lazy } from 'react';
import './HomePage.scss';

// Lazy loaded components
const HeroSection = lazy(() => import('../components/HeroSection'));
const StatsSection = lazy(() => import('../components/StatsSection'));
const PortfolioSection = lazy(() => import('./PortfolioSection'));
const SkillSection = lazy(() => import('./SkillSection'));
const Testimonial = lazy(() => import('./Testimonial'));
const ContactBanner = lazy(() => import('./ContactBanner'));

const HomePage = () => {
  return (
    <Suspense fallback={<div className="lazy-loader">Loading...</div>}>
      <HeroSection />
      <StatsSection />
      <PortfolioSection />
      <SkillSection />
      <Testimonial />
      <ContactBanner />
    </Suspense>
  );
};

export default HomePage;
