import { motion, AnimatePresence, Variants } from 'framer-motion';
import { opacity, background } from './animations';
import { useNavigation } from '@/contexts/NavigationContext';
import Navigation from './Navigation';

export default function AnimatedHeader() {
  const { isMenuOpen: isActive, setIsMenuOpen: setIsActive } = useNavigation();

  return (
    <div className={`fixed top-0 w-full z-50 border-b border-studio-border p-2.5 md:p-5 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] will-change-transform ${isActive ? 'bg-[#f8f9fa]' : 'bg-background/95 backdrop-blur-sm'}`}>
      <div className="flex justify-center items-center relative text-xs md:text-sm font-normal uppercase" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
        {/* Logo */}
        <a 
          href="/" 
          className={`absolute left-0 no-underline transition-colors duration-700 ${isActive ? 'text-black hover:text-gray-600' : 'text-foreground hover:text-studio-gray'}`}
          style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
        >
          Pierre<sup className="text-xs">®</sup>
        </a>

        {/* Menu Button */}
        <div 
          onClick={() => setIsActive(!isActive)} 
          className="flex items-center justify-center gap-2 cursor-pointer"
        >
          {/* Animated Burger to X */}
          <div className="w-[22.5px] h-4 relative pointer-events-none flex flex-col justify-center">
            {/* Top line */}
            <div 
              className={`
                h-[1px] w-full absolute transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] will-change-transform
                ${isActive 
                  ? 'rotate-45 top-1/2 -translate-y-1/2 bg-black' 
                  : 'top-1 bg-foreground'
                }
              `}
            />
            {/* Middle line - fades out */}
            <div 
              className={`
                h-[1px] w-full absolute top-1/2 -translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] will-change-transform
                ${isActive ? 'opacity-0 scale-0 bg-black' : 'opacity-100 scale-100 bg-foreground'}
              `}
            />
            {/* Bottom line */}
            <div 
              className={`
                h-[1px] w-full absolute transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] will-change-transform
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
              className={`m-0 transition-colors duration-700 ${isActive ? 'text-black' : 'text-foreground'}`}
              style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
            >
              Menu
            </motion.p>
            <motion.p 
              variants={opacity} 
              animate={isActive ? "open" : "closed"}
              className={`m-0 absolute opacity-0 transition-colors duration-700 ${isActive ? 'text-black' : 'text-foreground'}`}
              style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
            >
              Close
            </motion.p>
          </div>
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
            className="fixed top-[72px] left-0 right-0 bottom-0 z-40 bg-[#f8f9fa] px-6 py-8"
          >
            <Navigation />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
