import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { gsap } from 'gsap';
import calendarImage from "@/assets/calendar.png";
import estateHubImage from "@/assets/estate_hub.png";

const PortfolioGrid = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Set initial states
    gsap.set([titleRef.current, gridRef.current], {
      y: 60,
      opacity: 0
    });

    // Initialize card overlay elements
    cardRefs.current.forEach((cardRef) => {
      if (cardRef) {
        const overlay = cardRef.querySelector('.portfolio-overlay');
        if (overlay) {
          gsap.set(overlay, {
            opacity: 0,
            scale: 0.8,
            transformOrigin: "center center"
          });
        }
      }
    });

    // Create staggered animation
    const timeline = gsap.timeline();
    timeline
      .to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      })
      .to(gridRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out"
      }, "-=0.6");

    return () => {
      timeline.kill();
      // Cleanup any ongoing hover animations
      cardRefs.current.forEach((cardRef) => {
        if (cardRef) {
          gsap.killTweensOf(cardRef);
          gsap.killTweensOf(cardRef.querySelector('.portfolio-image'));
          gsap.killTweensOf(cardRef.querySelector('.portfolio-overlay'));
        }
      });
    };
  }, []);

  const projects = [
    {
      id: 1,
      image: calendarImage,
      title: "CalendApp",
      category: "Mobile Application",
      year: "2024",
      projectUrl: "/calendapp"
    },
    {
      id: 2,
      image: estateHubImage,
      title: "Estate Hub",
      category: "Real Estate Platform",
      year: "2024",
      projectUrl: "#"
    }
  ];



  const handleCardEnter = (projectId: number) => {
    setHoveredCard(projectId);
    
    // Find the card element and apply GSAP hover animation
    const cardElement = cardRefs.current[projectId - 1];
    if (cardElement) {
      // Main card animation (inspired by button transform)
      gsap.to(cardElement, {
        y: -8,
        scale: 1.02,
        duration: 0.4,
        ease: "power2.out"
      });

      // Find the image and apply additional effects
      const imageElement = cardElement.querySelector('.portfolio-image');
      if (imageElement) {
        gsap.to(imageElement, {
          scale: 1.08,
          duration: 0.6,
          ease: "power2.out"
        });
      }

      // Add backdrop overlay effect (similar to button ::after)
      const overlayElement = cardElement.querySelector('.portfolio-overlay');
      if (overlayElement) {
        gsap.to(overlayElement, {
          opacity: 0.1,
          scale: 1,
          duration: 0.5,
          ease: "power2.out"
        });
      }
    }
  };

  const handleCardLeave = () => {
    const previousCard = hoveredCard;
    setHoveredCard(null);
    
    // Reset animations when leaving
    if (previousCard) {
      const cardElement = cardRefs.current[previousCard - 1];
      if (cardElement) {
        // Reset main card
        gsap.to(cardElement, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });

        // Reset image
        const imageElement = cardElement.querySelector('.portfolio-image');
        if (imageElement) {
          gsap.to(imageElement, {
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
          });
        }

        // Reset overlay
        const overlayElement = cardElement.querySelector('.portfolio-overlay');
        if (overlayElement) {
          gsap.to(overlayElement, {
            opacity: 0,
            scale: 0.8,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      }
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h1 
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 text-foreground" 
            style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Projects
          </motion.h1>
          <p 
            className="max-w-4xl mx-auto text-studio-gray leading-relaxed text-lg"
            style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
          >
            A curated selection of my work showcasing innovative solutions across web development, 
            mobile applications, and digital experiences. Each project represents a unique challenge solved with creativity and technical expertise.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-gray-500/20 rounded-3xl p-3 group hover:bg-black transition-all duration-500 ease-out relative cursor-pointer overflow-hidden"
              onMouseEnter={() => handleCardEnter(project.id)}
              onMouseLeave={handleCardLeave}
              onClick={() => {
                if (project.projectUrl.startsWith('/')) {
                  navigate(project.projectUrl);
                } else {
                  window.open(project.projectUrl, '_blank');
                }
              }}
            >
              {/* Backdrop overlay element (similar to button ::after) */}
              <div className="portfolio-overlay absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl opacity-0 scale-75 pointer-events-none" />
              
              {/* Image Section */}
              <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-3 relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="portfolio-image w-full h-full object-cover transition-transform duration-500"
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
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-white transition-colors duration-500" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-300 transition-colors duration-500" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
                      {project.category}
                    </p>
                    <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-500" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
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
                            if (project.projectUrl.startsWith('/')) {
                              navigate(project.projectUrl);
                            } else {
                              window.open(project.projectUrl, '_blank');
                            }
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
    </motion.section>
  );
};

export default PortfolioGrid;