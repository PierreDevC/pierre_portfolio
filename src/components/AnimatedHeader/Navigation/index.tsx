import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../animations';
import NavigationBody from './Body';
import NavigationFooter from './Footer';
import NavigationImage from './Image';
import { useTranslation } from '@/hooks/useTranslation';

interface SelectedLink {
  isActive: boolean;
  index: number;
}

export default function Navigation() {
  const { t } = useTranslation();
  const [selectedLink, setSelectedLink] = useState<SelectedLink>({ isActive: false, index: 0 });

  const links = [
    {
      title: t('navbar.links.home'),
      href: "/",
      src: "hero-card.jpg"
    },
    {
      title: t('navbar.links.projects'),
      href: "#projects",
      src: "projects.jpg"
    },
    {
      title: t('navbar.links.services'),
      href: "#services",
      src: "services.jpg"
    },
    {
      title: t('navbar.links.contact'),
      href: "#contact",
      src: "contact.jpg"
    },
  ];

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
