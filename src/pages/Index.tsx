import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import PortfolioGrid from "@/components/PortfolioGrid";
import ArtDirection from "@/components/ArtDirection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedWork />
      <PortfolioGrid />
      <ArtDirection />
      <Footer />
    </div>
  );
};

export default Index;
