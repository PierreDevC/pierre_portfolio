import { motion, AnimatePresence, Variants } from 'framer-motion';
import { opacity, background } from './animations';
import { useNavigation } from '@/contexts/NavigationContext';
import Navigation from './Navigation';
import { LanguageToggle } from '../LanguageToggle';
import { ThemeToggle } from '../ThemeToggle';
import { useTranslation } from '@/hooks/useTranslation';

export default function AnimatedHeader() {
  const { isMenuOpen: isActive, setIsMenuOpen: setIsActive } = useNavigation();
  const { t } = useTranslation();

  return (
    <div className={`fixed top-0 w-full z-50 border-b border-studio-border p-4 md:p-5 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] will-change-transform ${isActive ? 'bg-[#f8f9fa]' : 'bg-background/95 backdrop-blur-sm'}`}>
      <div className="flex justify-center items-center relative text-base md:text-sm font-normal uppercase min-h-[60px] md:min-h-[50px]" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
        {/* Logo - Hidden on mobile, visible on desktop */}
        <a
          href="/"
          className={`hidden md:block absolute left-0 no-underline transition-colors duration-700 text-lg md:text-base font-medium ${isActive ? 'text-black hover:text-gray-600' : 'text-foreground hover:text-studio-gray'}`}
          style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
        >
          {t('navbar.brand')}
        </a>

        {/* Menu Button - Left on mobile, center on desktop */}
        <div
          onClick={() => setIsActive(!isActive)}
          className="absolute left-0 md:static flex items-center justify-center gap-3 md:gap-2 cursor-pointer py-2 px-3 md:py-0 md:px-0"
        >
          {/* Animated Burger to X */}
          <div className="w-6 h-5 md:w-[22.5px] md:h-4 relative pointer-events-none flex flex-col justify-center">
            {/* Top line */}
            <div 
              className={`
                h-[2px] md:h-[1px] w-full absolute transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] will-change-transform
                ${isActive 
                  ? 'rotate-45 top-1/2 -translate-y-1/2 bg-black' 
                  : 'top-1 bg-foreground'
                }
              `}
            />
            {/* Middle line - fades out */}
            <div 
              className={`
                h-[2px] md:h-[1px] w-full absolute top-1/2 -translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] will-change-transform
                ${isActive ? 'opacity-0 scale-0 bg-black' : 'opacity-100 scale-100 bg-foreground'}
              `}
            />
            {/* Bottom line */}
            <div 
              className={`
                h-[2px] md:h-[1px] w-full absolute transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] will-change-transform
                ${isActive 
                  ? '-rotate-45 top-1/2 -translate-y-1/2 bg-black' 
                  : 'bottom-1 bg-foreground'
                }
              `}
            />
          </div>

          {/* Menu/Close Labels */}
          <div className="relative flex items-center">
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
              className={`m-0 transition-colors duration-700 text-lg md:text-base font-medium ${isActive ? 'text-black' : 'text-foreground'}`}
              style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
            >
              {t('navbar.menu')}
            </motion.p>
            <motion.p
              variants={opacity}
              animate={isActive ? "open" : "closed"}
              className={`m-0 absolute opacity-0 transition-colors duration-700 text-lg md:text-base font-medium ${isActive ? 'text-black' : 'text-foreground'}`}
              style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
            >
              {t('navbar.close')}
            </motion.p>
          </div>
        </div>

        {/* Theme & Language Toggles */}
        <div className="absolute right-0 flex items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
        </div>


      </div>

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
