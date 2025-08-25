import jumpingSilhouette from "@/assets/jumping-silhouette.jpg";
import sunglassesPortrait from "@/assets/sunglasses-portrait.jpg";
import flowerMacro from "@/assets/flower-macro.jpg";
import architecture from "@/assets/architecture.jpg";

const PortfolioGrid = () => {
  const projects = [
    {
      id: 1,
      image: jumpingSilhouette,
      title: "Movement Study",
      category: "Art Direction",
      description: "Capturing dynamic motion through minimalist photography"
    },
    {
      id: 2,
      image: sunglassesPortrait,
      title: "Portrait Series",
      category: "Photography",
      description: "Contemporary portrait work with strong visual identity"
    },
    {
      id: 3,
      image: flowerMacro,
      title: "Botanical",
      category: "Fine Art",
      description: "Exploring natural forms through macro photography"
    },
    {
      id: 4,
      image: architecture,
      title: "Structural",
      category: "Architecture",
      description: "Modern architectural photography and documentation"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-light text-foreground mb-4">Selected Work</h2>
          <p className="text-studio-gray max-w-lg">
            A curated selection of recent projects showcasing our approach to design and visual storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="aspect-square overflow-hidden mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              <div className="space-y-2">
                <div className="text-xs text-studio-gray uppercase tracking-wider">
                  {project.category}
                </div>
                <h3 className="text-xl font-light text-foreground group-hover:text-studio-gray transition-colors">
                  {project.title}
                </h3>
                <p className="text-studio-gray text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;