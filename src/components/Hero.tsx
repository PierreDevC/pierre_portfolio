import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import StyledButton from "@/components/ui/styled-button";
import CircularText from "@/components/CircularText";
import heroCardImage from "@/assets/hero-card.jpg";
import developerImage from "@/assets/developer.jpg";
import montrealImage from "@/assets/montreal.jpg";
import { useTranslation } from '@/hooks/useTranslation';

const Hero = () => {
  const { t } = useTranslation();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    // Set initial states
    gsap.set([titleRef.current, subtitleRef.current, descriptionRef.current, buttonRef.current], {
      y: 50,
      opacity: 0
    });

    // Create staggered entrance animation
    timeline
      .to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out"
      })
      .to(subtitleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8")
      .to(descriptionRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      .to(buttonRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4");

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <section className="relative pt-6 md:pt-32 pb-32 w-full px-6 md:px-12">
      {/* Mobile-only: CircularText fixed at top right */}
      <div className="absolute top-4 right-4 sm:hidden">
        <CircularText
          text="PIERRE*DEV*"
          onHover="speedUp"
          spinDuration={20}
          className="text-black dark:text-white w-8 h-8"
          fontSize="text-[16px]"
        />
      </div>

      <div className="w-full mx-auto flex flex-col lg:flex-row justify-between items-start gap-16">

        {/* Left Side: Pierre + Spinning Text */}
        <div className="flex flex-row items-center gap-4 md:gap-6 lg:gap-8 pt-4">
          <motion.h1
            ref={titleRef}
            className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-foreground leading-none"
            style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
          >
            {t('hero.title')}
          </motion.h1>
          <div className="hidden md:block flex-shrink-0">
            <CircularText
              text="PIERRE*DEV*"
              onHover="speedUp"
              spinDuration={20}
              className="text-black dark:text-white w-32 h-32"
              fontSize="text-2xl"
            />
          </div>
        </div>

        {/* Right Side: Description and Button */}
        <div className="flex flex-col items-start lg:items-end text-left lg:text-right space-y-12 max-w-5xl lg:ml-auto">
          <div ref={subtitleRef} className="space-y-4 md:space-y-6">
            <div
              className="flex flex-col items-start lg:items-end"
              style={{ gap: 'clamp(0.4rem, 1.2vw, 1rem)', fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
            >
              {/* Line 1: [image 1] Salut, je suis Pierre */}
              <div className="flex items-center justify-start lg:justify-end order-first lg:order-none" style={{ gap: 'clamp(0.6rem, 1.5vw, 1.5rem)' }}>
                <div
                  className="bg-white dark:bg-gray-800 border border-black dark:border-white overflow-hidden flex-shrink-0 order-first lg:order-none"
                  style={{
                    width: 'clamp(2rem, 5vw, 6rem)',
                    height: 'clamp(1.3rem, 3.2vw, 3.5rem)',
                    borderRadius: 'clamp(8px, 1.5vw, 30px)',
                  }}
                >
                  <img src={heroCardImage} alt="Pierre" className="w-full h-full object-cover" style={{ objectPosition: 'center top' }} />
                </div>
                <span className="font-normal text-gray-900 dark:text-gray-100 leading-tight" style={{ fontSize: 'clamp(0.85rem, 4.5vw, 4.5rem)' }}>
                  {t('hero.greeting')}
                </span>
              </div>

              {/* Line 2: un Développeur & Designer [image 2] */}
              <div className="flex items-center justify-start lg:justify-end" style={{ gap: 'clamp(0.6rem, 1.5vw, 1.5rem)' }}>
                <span className="font-normal text-gray-900 dark:text-gray-100 leading-tight" style={{ fontSize: 'clamp(0.85rem, 4.5vw, 4.5rem)' }}>
                  {t('hero.role')}
                </span>
                <div
                  className="bg-white dark:bg-gray-800 border border-black dark:border-white overflow-hidden flex-shrink-0"
                  style={{
                    width: 'clamp(2rem, 5vw, 6rem)',
                    height: 'clamp(1.3rem, 3.2vw, 3.5rem)',
                    borderRadius: 'clamp(8px, 1.5vw, 30px)',
                  }}
                >
                  <img src={developerImage} alt="Development tools" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Line 3: [image 3] Basé à Montréal */}
              <div className="flex items-center justify-start lg:justify-end order-first lg:order-none" style={{ gap: 'clamp(0.6rem, 1.5vw, 1.5rem)' }}>
                <div
                  className="bg-white dark:bg-gray-800 border border-black dark:border-white overflow-hidden flex-shrink-0 order-first lg:order-none"
                  style={{
                    width: 'clamp(2rem, 5vw, 6rem)',
                    height: 'clamp(1.3rem, 3.2vw, 3.5rem)',
                    borderRadius: 'clamp(8px, 1.5vw, 30px)',
                  }}
                >
                  <img src={montrealImage} alt="Montréal" className="w-full h-full object-cover" />
                </div>
                <span className="font-normal text-gray-900 dark:text-gray-100 leading-tight" style={{ fontSize: 'clamp(0.85rem, 4.5vw, 4.5rem)' }}>
                  {t('hero.location')}
                </span>
              </div>

              {/* Secondary Description */}
              <motion.p
                ref={descriptionRef}
                className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl"
                style={{ fontSize: 'clamp(0.9rem, 2vw, 1.875rem)', marginTop: 'clamp(1rem, 3vw, 2rem)', fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
              >
                {t('hero.description')}
              </motion.p>
            </div>
          </div>

          <motion.div
            ref={buttonRef}
            className="flex items-start lg:items-end justify-start lg:justify-end pt-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <StyledButton 
              className="text-lg px-8 py-4 h-auto"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  const navbarHeight = 100; // Account for fixed navbar with some extra space
                  const elementTop = contactSection.getBoundingClientRect().top + window.pageYOffset;
                  const offsetPosition = elementTop - navbarHeight;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
            >
              {t('hero.cta')}
            </StyledButton>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
