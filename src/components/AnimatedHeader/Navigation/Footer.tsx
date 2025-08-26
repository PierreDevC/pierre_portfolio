import { motion } from 'framer-motion';
import { translate } from '../animations';

export default function NavigationFooter() {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
      <ul className="list-none p-0 m-0">
        <motion.li 
          custom={[0.3, 0]} 
          variants={translate} 
          initial="initial" 
          animate="enter" 
          exit="exit"
          className="text-gray-600 text-sm"
        >
          <span className="text-black">Made by:</span> Web Relic
        </motion.li>
      </ul>
      
      <ul className="list-none p-0 m-0">
        <motion.li  
          custom={[0.3, 0]} 
          variants={translate} 
          initial="initial" 
          animate="enter" 
          exit="exit"
          className="text-gray-600 text-sm"
        >
          <span className="text-black">Typography:</span> Inter & System Fonts
        </motion.li>
      </ul>
      
      <ul className="list-none p-0 m-0">
        <motion.li
          custom={[0.3, 0]} 
          variants={translate} 
          initial="initial" 
          animate="enter" 
          exit="exit"
          className="text-gray-600 text-sm"
        >
          <span className="text-black">Framework:</span> React + Vite
        </motion.li>
      </ul>
      
      <ul className="list-none p-0 m-0 flex flex-col gap-2">
        <motion.li
          custom={[0.3, 0]} 
          variants={translate} 
          initial="initial" 
          animate="enter" 
          exit="exit"
          className="text-gray-600 text-sm hover:text-black transition-colors cursor-pointer"
        >
          Privacy Policy
        </motion.li>
        <motion.li 
          custom={[0.3, 0]} 
          variants={translate} 
          initial="initial" 
          animate="enter" 
          exit="exit"
          className="text-gray-600 text-sm hover:text-black transition-colors cursor-pointer"
        >
          Terms & Conditions
        </motion.li>
      </ul>
    </div>
  );
}
