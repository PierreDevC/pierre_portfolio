import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useLocation } from 'react-router-dom';
import AnimatedHeader from "@/components/AnimatedHeader";
import Hero from "@/components/Hero";
import TechStack from "@/components/ClientLogos";
import PortfolioGrid from "@/components/PortfolioGrid";
import Services from "@/components/Services";

import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const uiCraftRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const footerRef = useRef<HTMLDivElement>(null);

  // Handle hash navigation when arriving from other pages
  useEffect(() => {
    if (location.hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          const navbarHeight = 72;
          const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
          const adjustedTarget = Math.max(0, elementTop - navbarHeight);
          
          window.scrollTo({
            top: adjustedTarget,
            behavior: 'instant'
          });
        }
      }, 100);
    }
  }, [location.hash]);

  useEffect(() => {
    // Simple fade-in on mount without scroll triggers
    const sections = [
      heroRef.current,
      techStackRef.current,
      portfolioRef.current,
      uiCraftRef.current,
      contactRef.current
    ].filter(Boolean);

    // Simple fade in on page load only
    sections.forEach((section, index) => {
      if (section) {
        gsap.fromTo(section,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            delay: index * 0.05,
            ease: "power2.out"
          }
        );
      }
    });

    return () => {
      // Cleanup any ongoing animations
      sections.forEach(section => {
        if (section) gsap.killTweensOf(section);
      });
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      <AnimatedHeader />
      <div className="relative pt-[100px] md:pt-[80px]">
        <div ref={heroRef}>
          <Hero />
        </div>
        <div ref={techStackRef}>
          <TechStack />
        </div>
        <div ref={portfolioRef} id="projects">
          <PortfolioGrid />
        </div>
        <div ref={uiCraftRef} id="services">
          <Services />
        </div>
        <div ref={contactRef} id="contact">
          <ContactSection />
        </div>
        <div ref={footerRef}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
