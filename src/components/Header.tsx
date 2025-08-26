import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm z-50 border-b border-studio-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-foreground">
            Pierre<sup className="text-sm">®</sup>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#work" className="text-studio-gray hover:text-foreground transition-colors text-sm">
              Work
            </a>
            <a href="#studio" className="text-studio-gray hover:text-foreground transition-colors text-sm">
              Studio
            </a>
            <a href="#services" className="text-studio-gray hover:text-foreground transition-colors text-sm">
              Services
            </a>
            <a href="#contact" className="text-studio-gray hover:text-foreground transition-colors text-sm">
              Contact
            </a>
          </nav>

          <div className="md:hidden">
            <Menu className="w-6 h-6 text-foreground" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;