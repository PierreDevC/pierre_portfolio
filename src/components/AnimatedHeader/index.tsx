import { motion, AnimatePresence, Variants } from 'framer-motion';
import { opacity, background } from './animations';
import { useNavigation } from '@/contexts/NavigationContext';
import { useNavigate, useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import { LanguageToggle } from '../LanguageToggle';
import { ThemeToggle } from '../ThemeToggle';
import { useTranslation } from '@/hooks/useTranslation';
import CircularText from '../CircularText';

export default function AnimatedHeader() {
  const { isMenuOpen: isActive, setIsMenuOpen: setIsActive } = useNavigation();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      if (location.pathname === '/') {
        const element = document.querySelector(href);
        if (element) {
          const navbarHeight = 72;
          const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
          const adjustedTarget = Math.max(0, elementTop - navbarHeight);
          window.scrollTo({
            top: adjustedTarget,
            behavior: 'smooth'
          });
        }
      } else {
        navigate(`/${href}`);
      }
    } else if (href === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
    } else {
      navigate(href);
    }
    
    if (isActive) setIsActive(false);
  };

  const navLinks = [
    { title: t('navbar.links.projects'), href: "/projects" },
    { title: t('navbar.links.services'), href: "#services" },
    { title: t('navbar.links.contact'), href: "#contact" },
  ];

  return (
    <div className={`fixed top-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] will-change-transform ${isActive ? 'bg-[#f8f9fa]' : 'bg-background/95 backdrop-blur-sm'}`}>
      <div className="px-4 py-3 sm:px-6 md:px-10 md:py-5">
        <div className="flex justify-between items-center relative min-h-[50px] md:min-h-[60px]" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
          
          {/* Menu Button - Only visible on mobile, positioned left */}
          <div
            onClick={() => setIsActive(!isActive)}
            className="md:hidden flex items-center gap-3 cursor-pointer py-2 z-10"
          >
            <div className="w-6 h-4 relative flex flex-col justify-center">
              <div className={`h-[2px] w-full absolute transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isActive ? 'rotate-45 top-1/2 -translate-y-1/2 bg-black' : 'top-0 bg-foreground'}`} />
              <div className={`h-[2px] w-full absolute top-1/2 -translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isActive ? 'opacity-0 scale-0 bg-black' : 'opacity-100 scale-100 bg-foreground'}`} />
              <div className={`h-[2px] w-full absolute transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isActive ? '-rotate-45 top-1/2 -translate-y-1/2 bg-black' : 'bottom-0 bg-foreground'}`} />
            </div>
            <div className="relative flex items-center h-full">
              <motion.p variants={opacity} animate={!isActive ? "open" : "closed"} className={`m-0 text-sm font-medium uppercase tracking-wider ${isActive ? 'text-black' : 'text-foreground'}`}>
                {t('navbar.menu')}
              </motion.p>
              <motion.p variants={opacity} animate={isActive ? "open" : "closed"} className={`m-0 absolute opacity-0 text-sm font-medium uppercase tracking-wider ${isActive ? 'text-black' : 'text-foreground'}`}>
                {t('navbar.close')}
              </motion.p>
            </div>
          </div>

          {/* Logo / Brand - Centered on mobile, Left on desktop */}
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <a
              href="/"
              onClick={(e) => handleNavClick(e, '/')}
              className={`no-underline transition-colors duration-700 text-lg sm:text-xl font-medium ${isActive ? 'text-black hover:text-gray-600' : 'text-foreground hover:text-studio-gray'}`}
              style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
            >
              {t('navbar.brand')}
            </a>
          </div>

          {/* Desktop Navigation - Center on desktop */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="group relative text-foreground transition-colors duration-300 text-sm lg:text-base font-medium uppercase tracking-widest no-underline py-1"
                style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
              >
                {link.title}
                {/* Underline effect: animate out to the right */}
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left group-hover:origin-left group-[:not(:hover)]:origin-right transform-gpu backface-hidden" />
              </a>
            ))}
          </nav>

          {/* Theme & Language Toggles - Right on all screens */}
          <div className="flex items-center gap-1 sm:gap-2 z-10">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
      </div>
      
      {/* Bottom Line with responsive whitespace */}
      <div className="mx-4 sm:mx-6 md:mx-10 h-[1.5px] bg-black opacity-80" />


      {/* Background Overlay */}
      <motion.div 
        variants={background as Variants} 
        initial="initial" 
        animate={isActive ? "open" : "closed"} 
        className="absolute left-0 top-full w-full bg-[#f8f9fa] will-change-transform"
        style={{ transform: "translate3d(0, 0, 0)" }}
      />

      {/* Navigation Overlay */}
      <AnimatePresence mode="wait" initial={false}>
        {isActive && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed top-[88px] md:top-[72px] left-0 right-0 bottom-0 z-40 bg-[#f8f9fa] px-6 py-8"
          >
            <Navigation />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
