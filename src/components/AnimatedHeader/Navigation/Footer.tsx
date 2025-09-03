import { motion } from 'framer-motion';
import { translate } from '../animations';
import { useNavigate, useLocation } from 'react-router-dom';

export default function NavigationFooter() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    if (location.pathname === '/') {
      // Already on home page, just scroll to contact section
      const element = document.querySelector('#contact');
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // On different page, navigate to home page with hash
      navigate('/#contact');
    }
  };

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
          <span className="text-black">Location:</span> Based in Montreal
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
          <span className="text-black">Available for:</span> Freelance Projects
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
          <span className="text-black">Specialties:</span> Full-Stack Development
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
          onClick={(e) => {
            e.preventDefault();
            handleContactClick();
          }}
        >
          Let's Work Together
        </motion.li>
        <motion.li 
          custom={[0.3, 0]} 
          variants={translate} 
          initial="initial" 
          animate="enter" 
          exit="exit"
          className="text-gray-600 text-sm hover:text-black transition-colors cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            window.open('https://linkedin.com', '_blank');
          }}
        >
          Connect on LinkedIn
        </motion.li>
      </ul>
    </div>
  );
}
