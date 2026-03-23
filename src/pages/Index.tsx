import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
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
    <div ref={containerRef} className="min-h-screen bg-background overflow-x-hidden w-full">
      <AnimatedHeader />
      <div className="relative pt-[100px] md:pt-[80px]">
        <div ref={heroRef}>
          <Hero />
        </div>
        {/* <div ref={techStackRef}>
          <TechStack />
        </div> */}
        {/* Scroll indicator */}
        <div className="flex justify-center pb-10 -mt-4">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-gray-400">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </motion.div>
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
