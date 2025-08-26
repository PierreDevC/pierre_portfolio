import { motion } from 'framer-motion';
import { useNavigation } from '@/contexts/NavigationContext';
import { blur } from '@/components/AnimatedHeader/animations';
import AnimatedHeader from "@/components/AnimatedHeader";
import Hero from "@/components/Hero";
import TechStack from "@/components/ClientLogos";
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
        className="relative will-change-transform"
        style={{ transform: "translate3d(0, 0, 0)" }}
      >
        <Hero />
        <TechStack />
        <PortfolioGrid />
        <ArtDirection />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Index;
