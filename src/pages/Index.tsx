import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useNavigation } from '@/contexts/NavigationContext';
import { blur } from '@/components/AnimatedHeader/animations';
import AnimatedHeader from "@/components/AnimatedHeader";
import Hero from "@/components/Hero";
import TechStack from "@/components/ClientLogos";
import PortfolioGrid from "@/components/PortfolioGrid";

import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Index = () => {
  const { isMenuOpen } = useNavigation();
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const footerRef = useRef<HTMLDivElement>(null);

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
      { ref: contactRef, delay: 0.3 },
      { ref: footerRef, delay: 0.4 }
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

    // Improved smooth scroll that respects fixed navbar
    let scrollTween: gsap.core.Tween;

    const smoothScroll = (target: number) => {
      if (scrollTween) scrollTween.kill();
      
      // Account for navbar height (approximately 72px based on AnimatedHeader)
      const navbarHeight = 72;
      const adjustedTarget = Math.max(0, target - navbarHeight);
      
      scrollTween = gsap.to(window, {
        duration: 1.2,
        scrollTo: {
          y: adjustedTarget,
          autoKill: false
        },
        ease: "power2.out",
        // Ensure this doesn't interfere with other animations
        overwrite: "auto"
      });
    };

    // Enhanced anchor link handler
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a') as HTMLAnchorElement;
      
      if (link && link.href && link.href.includes('#')) {
        e.preventDefault();
        const id = link.href.split('#')[1];
        const element = document.getElementById(id);
        
        if (element) {
          const elementTop = element.offsetTop;
          smoothScroll(elementTop);
        }
      }
    };

    // Use capture phase to ensure we catch all anchor clicks
    document.addEventListener('click', handleAnchorClick, true);

    // Refresh ScrollTrigger on resize to maintain proper positioning
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      document.removeEventListener('click', handleAnchorClick, true);
      window.removeEventListener('resize', handleResize);
      if (scrollTween) scrollTween.kill();
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
        className="relative will-change-transform"
        style={{ 
          transform: "translate3d(0, 0, 0)",
          paddingTop: "80px" // Account for fixed navbar height
        }}
      >
        <div ref={heroRef}>
          <Hero />
        </div>
        <div ref={techStackRef}>
          <TechStack />
        </div>
        <div ref={portfolioRef}>
          <PortfolioGrid />
        </div>
        <div ref={contactRef}>
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
