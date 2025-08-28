import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import calendarImage from "@/assets/calendar.png";
import estateHubImage from "@/assets/estate_hub.png";
import flowerMacro from "@/assets/flower-macro.jpg";
import architecture from "@/assets/architecture.jpg";

const PortfolioGrid = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      image: calendarImage,
      title: "CalendApp",
      category: "Mobile Application",
      year: "2024",
      projectUrl: "#"
    },
    {
      id: 2,
      image: estateHubImage,
      title: "Estate Hub",
      category: "Real Estate Platform",
      year: "2024",
      projectUrl: "#"
    },
    {
      id: 3,
      image: flowerMacro,
      title: "Oura",
      category: "Brand Refinement",
      year: "2024",
      projectUrl: "#"
    },
    {
      id: 4,
      image: architecture,
      title: "Forma",
      category: "Product UI",
      year: "2024",
      projectUrl: "#"
    }
  ];



  const handleCardEnter = (projectId: number) => {
    setHoveredCard(projectId);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

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
            <div 
              key={project.id}
              className="bg-gray-200 rounded-3xl p-3 group hover:bg-black transition-all duration-500 ease-out relative cursor-pointer"
              onMouseEnter={() => handleCardEnter(project.id)}
              onMouseLeave={handleCardLeave}
              onClick={() => window.open(project.projectUrl, '_blank')}
            >
              {/* Image Section */}
              <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-3 relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Content Section */}
              <div className="px-3 py-2 relative overflow-hidden">
                <div className="flex items-start justify-between">
                  <motion.div
                    className="space-y-1 flex-1"
                    initial={{ opacity: 1 }}
                    animate={{
                      y: hoveredCard === project.id ? 0 : 0,
                      opacity: 1
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-white transition-colors duration-500">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-300 transition-colors duration-500">
                      {project.category}
                    </p>
                    <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-500">
                      {project.year}
                    </p>
                  </motion.div>

                  {/* Smooth Animated Arrow */}
                  <div className="relative ml-4 mt-1 w-6 h-6">
                    <AnimatePresence mode="wait">
                      {hoveredCard === project.id && (
                        <motion.div
                          className="absolute inset-0 cursor-pointer"
                          initial={{
                            opacity: 0,
                            scale: 0.7,
                            rotate: -45,
                            x: -6,
                            y: 6
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            rotate: 0,
                            x: 0,
                            y: 0
                          }}
                          exit={{
                            opacity: 0,
                            scale: 0.8,
                            rotate: 45,
                            x: 3,
                            y: -3
                          }}
                          whileHover={{
                            scale: 1.15,
                            x: 2,
                            y: -2,
                            rotate: 5
                          }}
                          whileTap={{
                            scale: 0.95
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                            mass: 0.8
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.projectUrl, '_blank');
                          }}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            className="w-full h-full text-gray-700 group-hover:text-white transition-colors duration-500"
                          >
                            <motion.path
                              d="M7 17L17 7"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.3, delay: 0.1 }}
                            />
                            <motion.path
                              d="M7 7h10v10"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.3, delay: 0.2 }}
                            />
                          </svg>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
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