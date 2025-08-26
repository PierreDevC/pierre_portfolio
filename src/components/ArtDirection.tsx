const ArtDirection = () => {
  return (
    <section className="py-32 bg-studio-charcoal text-studio-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl font-light leading-tight">
                Pierre
              </h2>
              <h3 className="text-2xl text-studio-gray font-light">
                Creative Developer
              </h3>
            </div>
            
            <div className="space-y-6">
              <p className="text-studio-gray text-lg leading-relaxed">
                I specialize in creating thoughtful and impactful digital experiences, 
                collaborating with startups and leading brands
              </p>
              
              <p className="text-studio-gray leading-relaxed">
                I'm a creative developer with a passion for building digital experiences that are both functional and beautiful.
              </p>
            </div>

            <button className="text-studio-light hover:text-studio-gray transition-colors underline text-sm">
              See Projects →
            </button>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-4">
                <div className="text-studio-gray">PROJECTS</div>
                <div className="space-y-2">
                  <div className="text-studio-light">CalendApp</div>
                  <div className="text-studio-light">EstateHub</div>
                  <div className="text-studio-light">Thrift App</div>
                  <div className="text-studio-light">Work in Progress...</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="text-studio-gray">SKILLS & SERVICES</div>
                <div className="space-y-2">
                  <div className="text-studio-light">Web Development</div>
                  <div className="text-studio-light">UI/UX Design</div>
                  <div className="text-studio-light">Mobile Development</div>
                  <div className="text-studio-light">Brand Development</div>
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