import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import ProfileCard from "@/blocks/Components/ProfileCard/ProfileCard";
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
  const profileCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    // Set initial states
    gsap.set([titleRef.current, subtitleRef.current, descriptionRef.current, buttonRef.current, profileCardRef.current], {
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
      }, "-=0.4")
      .to(profileCardRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }, "-=0.6");

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <section className="pt-16 md:pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center justify-center lg:justify-start gap-8">
              <motion.h1
                ref={titleRef}
                className="text-8xl lg:text-9xl font-bold text-foreground leading-none"
                style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
              >
                {t('hero.title')}
              </motion.h1>
              <div className="hidden lg:block">
                <CircularText
                  text="PIERRE*DEV*"
                  onHover="speedUp"
                  spinDuration={20}
                  className="text-black dark:text-white w-32 h-32"
                />
              </div>
            </div>

            <div ref={subtitleRef} className="space-y-6">
              <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
                {/* Hey, I'm Pierre line */}
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-3" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
                  <span className="text-3xl lg:text-4xl font-normal text-gray-600 dark:text-gray-400">{t('hero.greeting')}</span>
                  <div className="w-16 h-10 bg-white dark:bg-gray-800 border border-black dark:border-white overflow-hidden" style={{ borderRadius: '20px' }}>
                    <img
                      src={heroCardImage}
                      alt="Pierre"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center top' }}
                    />
                  </div>
                </div>

                {/* Creative Developer line */}
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-3" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
                  <span className="text-3xl lg:text-4xl font-normal text-gray-900 dark:text-gray-100">{t('hero.role')}</span>
                  <div className="w-16 h-10 bg-white dark:bg-gray-800 border border-black dark:border-white overflow-hidden" style={{ borderRadius: '20px' }}>
                    <img
                      src={developerImage}
                      alt="Development tools"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Based in Montréal line */}
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-6" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
                  <span className="text-3xl lg:text-4xl font-normal text-gray-600 dark:text-gray-400">{t('hero.location')}</span>
                  <div className="w-16 h-10 bg-white dark:bg-gray-800 border border-black dark:border-white overflow-hidden" style={{ borderRadius: '20px' }}>
                    <img
                      src={montrealImage}
                      alt="Montréal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Description */}
                <motion.p
                  ref={descriptionRef}
                  className="text-gray-600 dark:text-gray-400 text-base leading-relaxed max-w-md"
                  style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
                >
                  {t('hero.description')}
                </motion.p>
              </div>
            </div>

            <motion.div
              ref={buttonRef}
              className="flex items-start justify-center lg:justify-start pt-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <StyledButton onClick={() => {
                // Scroll to projects section
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  const navbarHeight = 80; // Account for fixed navbar
                  const elementTop = projectsSection.getBoundingClientRect().top + window.pageYOffset;
                  const offsetPosition = elementTop - navbarHeight;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'instant'
                  });
                }
              }}>
                {t('hero.cta')}
              </StyledButton>
            </motion.div>
          </div>

          {/* Replace the image with ProfileCard */}
          <div
            ref={profileCardRef}
            className="relative flex justify-center"
          >
            <ProfileCard
              avatarUrl={heroCardImage}
              name={t('hero.profile.name')}
              title={t('hero.profile.title')}
              handle={t('hero.profile.handle')}
              status={t('hero.profile.status')}
              contactText={t('hero.profile.action')}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              showBehindGradient={true}
              // Override the rainbow gradient with subtle monochrome
              behindGradient="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(220,20%,90%,var(--card-opacity)) 4%,hsla(220,15%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(220,10%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(220,0%,60%,0) 100%)"
              innerGradient="linear-gradient(145deg,rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.6) 100%)"
              onContactClick={() => {
                // Scroll to contact section
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({
                    block: 'start',
                    behavior: 'instant'
                  });
                }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;