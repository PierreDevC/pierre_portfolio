import bikePhoto from "@/assets/bike-photo.jpg";

const FeaturedWork = () => {
  return (
    <section className="py-20 bg-studio-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[5/3] overflow-hidden">
              <img 
                src={bikePhoto} 
                alt="Featured project showcase"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-light text-foreground">
                Featured Project
              </h2>
              <p className="text-studio-gray text-lg leading-relaxed">
                We use art direction, design strategy and cutting-edge technology to help brands 
                tell their stories in meaningful ways.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-sm text-studio-gray">SERVICES</div>
              <div className="text-foreground">
                Brand Identity • Art Direction • Digital Experience
              </div>
            </div>

            <button className="text-sm text-foreground hover:text-studio-gray transition-colors underline">
              View Case Study →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;