const ArtDirection = () => {
  return (
    <section className="py-32 bg-studio-charcoal text-studio-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl font-light leading-tight">
                Art Direction
              </h2>
              <h3 className="text-2xl text-studio-gray font-light">
                Strategy & Consulting
              </h3>
            </div>
            
            <div className="space-y-6">
              <p className="text-studio-gray text-lg leading-relaxed">
                We help brands navigate the creative landscape through strategic 
                art direction and thoughtful design consultation.
              </p>
              
              <p className="text-studio-gray leading-relaxed">
                Our process combines research, strategy, and creative intuition to 
                develop visual languages that connect with audiences on both 
                emotional and functional levels.
              </p>
            </div>

            <button className="text-studio-light hover:text-studio-gray transition-colors underline text-sm">
              Learn About Our Process →
            </button>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-4">
                <div className="text-studio-gray">SERVICES</div>
                <div className="space-y-2">
                  <div className="text-studio-light">Brand Strategy</div>
                  <div className="text-studio-light">Visual Identity</div>
                  <div className="text-studio-light">Art Direction</div>
                  <div className="text-studio-light">Creative Consulting</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="text-studio-gray">EXPERTISE</div>
                <div className="space-y-2">
                  <div className="text-studio-light">Photography</div>
                  <div className="text-studio-light">Digital Design</div>
                  <div className="text-studio-light">Print Design</div>
                  <div className="text-studio-light">Editorial</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtDirection;