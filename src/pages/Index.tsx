import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigation } from '@/contexts/NavigationContext';
import { useLocation } from 'react-router-dom';
import { blur } from '@/components/AnimatedHeader/animations';
import AnimatedHeader from "@/components/AnimatedHeader";
import Hero from "@/components/Hero";
import TechStack from "@/components/ClientLogos";
import PortfolioGrid from "@/components/PortfolioGrid";
import Services from "@/components/Services";

import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const { isMenuOpen } = useNavigation();
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
            top: adjustedTarget
          });
        }
      }, 100);
    }
  }, [location.hash]);

  useEffect(() => {
    // Ensure ScrollTrigger refreshes after DOM changes
    ScrollTrigger.refresh();

    // Create a master timeline for better control
    const masterTimeline = gsap.timeline();

    // Set initial states without affecting body or document positioning
    const sections = [
      { ref: heroRef, delay: 0 },
      { ref: techStackRef, delay: 0.1 },
      { ref: portfolioRef, delay: 0.2 },
      { ref: uiCraftRef, delay: 0.25 },
      { ref: contactRef, delay: 0.3 }
    ];

    // Set up ScrollTrigger animations that don't interfere with fixed navbar
    sections.forEach(({ ref, delay }) => {
      if (ref.current) {
        // Set initial state with transform3d for better performance
        gsap.set(ref.current, {
          y: 50,
          opacity: 0,
          force3D: true
        });

        // Create ScrollTrigger animation
        ScrollTrigger.create({
          trigger: ref.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          animation: gsap.to(ref.current, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            delay: delay * 0.1 // Reduce stagger timing
          }),
          // Prevent conflicts with fixed elements
          invalidateOnRefresh: true,
          refreshPriority: -1 // Lower priority to not interfere with navbar
        });
      }
    });


    // Refresh ScrollTrigger on resize to maintain proper positioning
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      masterTimeline.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      <AnimatedHeader />
      <motion.div
        variants={blur}
        animate={isMenuOpen ? "open" : "closed"}
        className="relative will-change-transform pt-[100px] md:pt-[80px]"
        style={{ 
          transform: "translate3d(0, 0, 0)"
        }}
      >
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
      </motion.div>
    </div>
  );
};

export default Index;
