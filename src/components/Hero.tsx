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
    <section className="pt-16 md:pt-32 pb-32 w-full px-6 md:px-12">
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
          <div className="block flex-shrink-0">
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
            <div className="flex flex-col items-start lg:items-end gap-2 md:gap-4" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
              
              {/* Line 1: [image 1] Salut, je suis Pierre */}
              <div className="flex items-center justify-start lg:justify-end gap-4 md:gap-6">
                <div className="w-16 h-10 md:w-24 md:h-14 bg-white dark:bg-gray-800 border border-black dark:border-white overflow-hidden rounded-[20px] md:rounded-[30px] flex-shrink-0 order-first lg:order-none">
                  <img src={heroCardImage} alt="Pierre" className="w-full h-full object-cover" style={{ objectPosition: 'center top' }} />
                </div>
                <span className="text-4xl md:text-5xl lg:text-7xl font-normal text-gray-900 dark:text-gray-100 leading-tight">
                  {t('hero.greeting')}
                </span>
              </div>

              {/* Line 2: un Développeur & Designer [image 2] */}
              <div className="flex items-center justify-start lg:justify-end gap-4 md:gap-6">
                <span className="text-4xl md:text-5xl lg:text-7xl font-normal text-gray-900 dark:text-gray-100 leading-tight">
                  {t('hero.role')}
                </span>
                <div className="w-16 h-10 md:w-24 md:h-14 bg-white dark:bg-gray-800 border border-black dark:border-white overflow-hidden rounded-[20px] md:rounded-[30px] flex-shrink-0">
                  <img src={developerImage} alt="Development tools" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Line 3: [image 3] Basé à Montréal */}
              <div className="flex items-center justify-start lg:justify-end gap-4 md:gap-6">
                <div className="w-16 h-10 md:w-24 md:h-14 bg-white dark:bg-gray-800 border border-black dark:border-white overflow-hidden rounded-[20px] md:rounded-[30px] flex-shrink-0 order-first lg:order-none">
                  <img src={montrealImage} alt="Montréal" className="w-full h-full object-cover" />
                </div>
                <span className="text-4xl md:text-5xl lg:text-7xl font-normal text-gray-900 dark:text-gray-100 leading-tight">
                  {t('hero.location')}
                </span>
              </div>

              {/* Secondary Description - Bigger text */}
              <motion.p
                ref={descriptionRef}
                className="text-gray-600 dark:text-gray-400 text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-3xl mt-8"
                style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
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
