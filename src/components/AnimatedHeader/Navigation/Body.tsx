import { motion } from 'framer-motion';
import { blur, translate } from '../animations';
import { useNavigation } from '@/contexts/NavigationContext';
import { useNavigate, useLocation } from 'react-router-dom';

interface Link {
  title: string;
  href: string;
  src: string;
}

interface SelectedLink {
  isActive: boolean;
  index: number;
}

interface NavigationBodyProps {
  links: Link[];
  selectedLink: SelectedLink;
  setSelectedLink: (link: SelectedLink) => void;
}

export default function NavigationBody({ links, selectedLink, setSelectedLink }: NavigationBodyProps) {
  const { setIsMenuOpen } = useNavigation();
  const navigate = useNavigate();
  const location = useLocation();
  const getChars = (word: string) => {
    let chars: JSX.Element[] = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span 
          custom={[i * 0.02, (word.length - i) * 0.01]} 
          variants={translate} 
          initial="initial" 
          animate="enter" 
          exit="exit" 
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <div className="flex flex-wrap mt-10 lg:mt-20 lg:max-w-6xl">
      {links.map((link, index) => {
        const { title, href } = link;
        return (
          <a 
            key={`l_${index}`} 
            href={href}
            className="text-black no-underline uppercase"
            onClick={(e) => {
              e.preventDefault();
              
              if (href.startsWith('#')) {
                // Handle section links
                if (location.pathname === '/') {
                  // Already on home page, just scroll to section
                  const element = document.querySelector(href);
                  element?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  // On different page, navigate to home page with hash
                  navigate(`/${href}`);
                }
              } else if (href === '/') {
                // Handle home link
                if (location.pathname === '/') {
                  // Already on home page, scroll to top
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  // Navigate to home page
                  navigate('/');
                }
              } else {
                // Handle other routes
                navigate(href);
              }
              
              // Close menu after clicking any link
              setTimeout(() => setIsMenuOpen(false), 300);
            }}
          >
            <motion.p 
              onMouseOver={() => {setSelectedLink({isActive: true, index})}} 
              onMouseLeave={() => {setSelectedLink({isActive: false, index})}} 
              variants={blur} 
              animate={selectedLink.isActive && selectedLink.index !== index ? "open" : "closed"}
              className="m-0 flex overflow-hidden text-[32px] lg:text-[5vw] pr-8 lg:pr-[2vw] pt-2.5 font-light hover:text-gray-600 transition-colors cursor-pointer"
              style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
            >
              {getChars(title)}
            </motion.p>
          </a>
        );
      })}
    </div>
  );
}
