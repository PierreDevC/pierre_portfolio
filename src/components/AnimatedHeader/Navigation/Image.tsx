import { motion } from 'framer-motion';
import { opacity } from '../animations';
import heroPortrait from '@/assets/hero-portrait.jpg';
import heroCard from '@/assets/hero-card.jpg';
import architecture from '@/assets/architecture.jpg';
import bikePhoto from '@/assets/bike-photo.jpg';
import flowerMacro from '@/assets/flower-macro.jpg';
import jumpingSilhouette from '@/assets/jumping-silhouette.jpg';
import aboutImage from '@/assets/about.png';
import contactImage from '@/assets/contact.jpg';
import projectsImage from '@/assets/projects.jpg';
import servicesImage from '@/assets/services.jpg';

interface NavigationImageProps {
  src: string;
  isActive: boolean;
}

export default function NavigationImage({ src, isActive }: NavigationImageProps) {
  const imageMap: { [key: string]: string } = {
    'hero-portrait.jpg': heroPortrait,
    'hero-card.jpg': heroCard,
    'architecture.jpg': architecture,
    'bike-photo.jpg': bikePhoto,
    'flower-macro.jpg': flowerMacro,
    'jumping-silhouette.jpg': jumpingSilhouette,
    'about.png': aboutImage,
    'contact.jpg': contactImage,
    'projects.jpg': projectsImage,
    'services.jpg': servicesImage,
  };

  return (
    <motion.div 
      variants={opacity} 
      initial="initial" 
      animate={isActive ? "open" : "closed"} 
      className="hidden lg:block relative w-80 h-96 overflow-hidden rounded-lg"
    >
      <img 
        src={imageMap[src] || heroPortrait}
        alt="Navigation preview"
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
      />
    </motion.div>
  );
}
