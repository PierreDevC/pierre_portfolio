import ProfileCard from "@/blocks/Components/ProfileCard/ProfileCard";
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

          {/* Replace the image with ProfileCard */}
          <div className="relative flex justify-center">
            <ProfileCard 
              avatarUrl={heroPortrait}
              name="Creative Studio"
              title="Design & Development"
              handle="@webrelicreborn"
              status="Available for projects"
              contactText="Get in touch"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={true}
              showBehindGradient={true}
              // Override the rainbow gradient with subtle monochrome
              behindGradient="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(220,20%,90%,var(--card-opacity)) 4%,hsla(220,15%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(220,10%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(220,0%,60%,0) 100%)"
              innerGradient="linear-gradient(145deg,rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.6) 100%)"
              onContactClick={() => {
                // Add your contact logic here
                console.log("Contact clicked!");
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;