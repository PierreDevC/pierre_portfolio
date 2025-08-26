import ProfileCard from "@/blocks/Components/ProfileCard/ProfileCard";
import StyledButton from "@/components/ui/styled-button";
import CircularText from "@/components/CircularText";
import heroPortrait from "@/assets/hero-portrait.jpg";



const Hero = () => {
  return (
    <section className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center justify-center lg:justify-start gap-8">
              <h1 className="text-8xl lg:text-9xl font-bold text-foreground leading-none" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
                PIERRE
              </h1>
              <div className="hidden lg:block">
                <CircularText
                  text="PIERRE*DEV*"
                  onHover="speedUp"
                  spinDuration={20}
                  className="text-black w-32 h-32"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
                {/* Hey, I'm Pierre line */}
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-3">
                  <span className="text-3xl lg:text-4xl font-normal text-gray-600">Hey, I'm</span>
                  <div className="w-16 h-10 bg-white border border-black overflow-hidden" style={{ borderRadius: '20px' }}>
                    <img 
                      src="/src/assets/hero-portrait.jpg" 
                      alt="Pierre" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-3xl lg:text-4xl font-normal text-gray-900">Pierre</span>
                </div>
                
                {/* Creative Developer line */}
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-3">
                  <span className="text-3xl lg:text-4xl font-normal text-gray-900">Creative Developer</span>
                  <div className="w-16 h-10 bg-white border border-black overflow-hidden" style={{ borderRadius: '20px' }}>
                    <img 
                      src="/src/assets/architecture.jpg" 
                      alt="Development tools" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Living in Montréal line */}
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                  <span className="text-3xl lg:text-4xl font-normal text-gray-600">Living in</span>
                  <div className="w-16 h-10 bg-white border border-black overflow-hidden" style={{ borderRadius: '20px' }}>
                    <img 
                      src="/src/assets/bike-photo.jpg" 
                      alt="Montréal" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-3xl lg:text-4xl font-normal text-gray-900">Montréal</span>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed max-w-md">
                  I specialize in creating thoughtful and impactful digital experiences, 
                  collaborating with startups and leading brands
                </p>
              </div>
            </div>

            <div className="flex items-start justify-center lg:justify-start pt-4">
              <StyledButton onClick={() => {
                // Calculate viewport height to scroll past the current hero section
                const viewportHeight = window.innerHeight;
                window.scrollTo({ 
                  top: viewportHeight * 0.8, // Scroll down about 80% of viewport height
                  behavior: 'smooth' 
                });
              }}>
                See Projects
              </StyledButton>
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