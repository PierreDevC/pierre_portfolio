import { motion } from 'framer-motion';
import { useNavigation } from '@/contexts/NavigationContext';
import { blur } from '@/components/AnimatedHeader/animations';
import AnimatedHeader from "@/components/AnimatedHeader";
import Hero from "@/components/Hero";
import TechStack from "@/components/ClientLogos";
import FeaturedWork from "@/components/FeaturedWork";
import PortfolioGrid from "@/components/PortfolioGrid";
import ArtDirection from "@/components/ArtDirection";
import Footer from "@/components/Footer";

const Index = () => {
  const { isMenuOpen } = useNavigation();

  return (
    <div className="min-h-screen bg-background">
      <AnimatedHeader />
      <motion.div
        variants={blur}
        animate={isMenuOpen ? "open" : "closed"}
        className="relative"
      >
        <Hero />
        <TechStack />
        <FeaturedWork />
        <PortfolioGrid />
        <ArtDirection />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Index;
