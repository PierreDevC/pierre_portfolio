import { motion } from 'framer-motion';
import { blur, translate } from '../animations';
import { useNavigation } from '@/contexts/NavigationContext';

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
              if (href.startsWith('#')) {
                e.preventDefault();
                const element = document.querySelector(href);
                element?.scrollIntoView({ behavior: 'smooth' });
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
            >
              {getChars(title)}
            </motion.p>
          </a>
        );
      })}
    </div>
  );
}
