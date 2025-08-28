import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../animations';
import NavigationBody from './Body';
import NavigationFooter from './Footer';
import NavigationImage from './Image';

const links = [
  {
    title: "Home",
    href: "/",
    src: "hero-portrait.jpg"
  },
  {
    title: "Projects",
    href: "#projects",
    src: "architecture.jpg"
  },
  {
    title: "Studio",
    href: "#studio",
    src: "bike-photo.jpg"
  },
  {
    title: "Services",
    href: "#services",
    src: "flower-macro.jpg"
  },
  {
    title: "Contact",
    href: "#contact",
    src: "jumping-silhouette.jpg"
  }
];

interface SelectedLink {
  isActive: boolean;
  index: number;
}

export default function Navigation() {
  const [selectedLink, setSelectedLink] = useState<SelectedLink>({ isActive: false, index: 0 });

  return (
    <motion.div 
      variants={height} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className="overflow-hidden will-change-transform"
      style={{ transform: "translate3d(0, 0, 0)" }}
    >
      <div className="flex gap-12 mb-20 lg:mb-0 lg:justify-between">
        <div className="flex flex-col justify-between">
          <NavigationBody 
            links={links} 
            selectedLink={selectedLink} 
            setSelectedLink={setSelectedLink}
          />
          <NavigationFooter />
        </div>
        <NavigationImage 
          src={links[selectedLink.index].src} 
          isActive={selectedLink.isActive}
        />
      </div>
    </motion.div>
  );
}
