import heroPortrait from "@/assets/hero-portrait.jpg";

const Hero = () => {
  return (
    <section className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-light text-foreground leading-tight">
                We're a design studio focused on creating
                <span className="block text-studio-gray">simple, functional,</span>
                <span className="block">& beautiful experiences.</span>
              </h1>
            </div>
            
            <div className="space-y-4">
              <p className="text-studio-gray text-lg leading-relaxed max-w-md">
                Our approach combines strategic thinking with creative execution to deliver 
                meaningful design solutions that resonate with your audience.
              </p>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <button className="text-sm text-foreground hover:text-studio-gray transition-colors underline">
                View Our Work
              </button>
              <span className="text-studio-gray">•</span>
              <button className="text-sm text-foreground hover:text-studio-gray transition-colors underline">
                About the Studio
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src={heroPortrait} 
                alt="Creative professional portrait"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;