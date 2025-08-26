import jumpingSilhouette from "@/assets/jumping-silhouette.jpg";
import sunglassesPortrait from "@/assets/sunglasses-portrait.jpg";
import flowerMacro from "@/assets/flower-macro.jpg";
import architecture from "@/assets/architecture.jpg";

const PortfolioGrid = () => {
  const projects = [
    {
      id: 1,
      image: jumpingSilhouette,
      title: "Lune",
      category: "Brand Development",
      year: "2024",
      sourceUrl: "#",
      projectUrl: "#"
    },
    {
      id: 2,
      image: sunglassesPortrait,
      title: "Aren",
      category: "Fashion Brand Launch",
      year: "2025",
      sourceUrl: "#",
      projectUrl: "#"
    },
    {
      id: 3,
      image: flowerMacro,
      title: "Oura",
      category: "Brand Refinement",
      year: "2024",
      sourceUrl: "#",
      projectUrl: "#"
    },
    {
      id: 4,
      image: architecture,
      title: "Forma",
      category: "Product UI",
      year: "2024",
      sourceUrl: "#",
      projectUrl: "#"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 mb-2" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-200 rounded-3xl p-3 group hover:bg-black transition-all duration-500 ease-out">
              {/* Image Section with thin grey border */}
              <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-3">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Content Section */}
              <div className="px-3 py-2 flex items-center justify-between">
                {/* Left side - Project Info */}
                <div className="space-y-1">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-white transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-300 transition-colors duration-500">
                    {project.category}
                  </p>
                  <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-500">
                    {project.year}
                  </p>
                </div>
                
                {/* Right side - Action Buttons */}
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => window.open(project.sourceUrl, '_blank')}
                    className="px-3 py-1.5 bg-white border border-gray-300 text-xs font-medium text-gray-700 hover:bg-gray-50 group-hover:bg-gray-800 group-hover:text-white group-hover:border-gray-600 transition-all duration-500"
                    style={{ borderRadius: '40px' }}
                  >
                    Source Code
                  </button>
                  <button 
                    onClick={() => window.open(project.projectUrl, '_blank')}
                    className="px-3 py-1.5 bg-gray-900 text-white text-xs font-medium hover:bg-gray-800 group-hover:bg-white group-hover:text-gray-900 transition-all duration-500"
                    style={{ borderRadius: '40px' }}
                  >
                    Open Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;