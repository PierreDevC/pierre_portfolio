import { motion, AnimatePresence } from 'framer-motion';
import { opacity, background } from './animations';
import { useNavigation } from '@/contexts/NavigationContext';
import Navigation from './Navigation';

export default function AnimatedHeader() {
  const { isMenuOpen: isActive, setIsMenuOpen: setIsActive } = useNavigation();

  return (
    <div className={`fixed w-full z-50 border-b border-studio-border p-2.5 md:p-5 transition-all duration-700 ${isActive ? 'bg-[#f4f0ea]' : 'bg-background/95 backdrop-blur-sm'}`}>
      <div className="flex justify-center items-center relative text-xs md:text-sm font-normal uppercase">
        {/* Logo */}
        <a 
          href="/" 
          className={`absolute left-0 no-underline transition-colors duration-700 ${isActive ? 'text-black hover:text-gray-600' : 'text-foreground hover:text-studio-gray'}`}
        >
          Kanso<sup className="text-xs">®</sup>
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
                h-[1px] w-full absolute transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]
                ${isActive 
                  ? 'rotate-45 top-1/2 -translate-y-1/2 bg-black' 
                  : 'top-1 bg-foreground'
                }
              `}
            />
            {/* Middle line - fades out */}
            <div 
              className={`
                h-[1px] w-full absolute top-1/2 -translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]
                ${isActive ? 'opacity-0 scale-0 bg-black' : 'opacity-100 scale-100 bg-foreground'}
              `}
            />
            {/* Bottom line */}
            <div 
              className={`
                h-[1px] w-full absolute transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]
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
            >
              Menu
            </motion.p>
            <motion.p 
              variants={opacity} 
              animate={isActive ? "open" : "closed"}
              className={`m-0 absolute opacity-0 transition-colors duration-700 ${isActive ? 'text-black' : 'text-foreground'}`}
            >
              Close
            </motion.p>
          </div>
        </div>

        {/* Shop/Cart Section */}
        <motion.div 
          variants={opacity} 
          animate={!isActive ? "open" : "closed"} 
          className="absolute right-0 flex gap-8"
        >
          <p className={`hidden md:block cursor-pointer transition-colors duration-700 m-0 ${isActive ? 'text-black hover:text-gray-600' : 'text-foreground hover:text-studio-gray'}`}>
            Shop
          </p>
          <div className={`flex items-center justify-center gap-2 cursor-pointer transition-colors duration-700 ${isActive ? 'text-black hover:text-gray-600' : 'text-foreground hover:text-studio-gray'}`}>
            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.66602 1.66667H2.75449C2.9595 1.66667 3.06201 1.66667 3.1445 1.70437C3.2172 1.73759 3.2788 1.79102 3.32197 1.85829C3.37096 1.93462 3.38546 2.0361 3.41445 2.23905L3.80887 5M3.80887 5L4.68545 11.4428C4.79669 12.2604 4.85231 12.6692 5.04777 12.977C5.22 13.2481 5.46692 13.4637 5.75881 13.5978C6.09007 13.75 6.50264 13.75 7.32777 13.75H14.4593C15.2448 13.75 15.6375 13.75 15.9585 13.6087C16.2415 13.4841 16.4842 13.2832 16.6596 13.0285C16.8585 12.7397 16.9319 12.3539 17.0789 11.5823L18.1819 5.79141C18.2337 5.51984 18.2595 5.38405 18.222 5.27792C18.1892 5.18481 18.1243 5.1064 18.039 5.05668C17.9417 5 17.8035 5 17.527 5H3.80887ZM8.33268 17.5C8.33268 17.9602 7.95959 18.3333 7.49935 18.3333C7.03911 18.3333 6.66602 17.9602 6.66602 17.5C6.66602 17.0398 7.03911 16.6667 7.49935 16.6667C7.95959 16.6667 8.33268 17.0398 8.33268 17.5ZM14.9993 17.5C14.9993 17.9602 14.6263 18.3333 14.166 18.3333C13.7058 18.3333 13.3327 17.9602 13.3327 17.5C13.3327 17.0398 13.7058 16.6667 14.166 16.6667C14.6263 16.6667 14.9993 17.0398 14.9993 17.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="m-0">Cart(0)</p>
          </div>
        </motion.div>
      </div>

      {/* Background Overlay */}
      <motion.div 
        variants={background} 
        initial="initial" 
        animate={isActive ? "open" : "closed"} 
        className="absolute left-0 top-full w-full bg-[#f4f0ea]"
      />

      {/* Navigation Overlay */}
      <AnimatePresence mode="wait">
        {isActive && (
          <div className="fixed top-[72px] left-0 right-0 bottom-0 z-40 bg-[#f4f0ea] px-6 py-8">
            <Navigation />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
