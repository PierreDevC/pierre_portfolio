import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import servicesImage from '@/assets/services.jpg';
import fullstackImage from '@/assets/fullstack.jpg';
import uiuxImage from '@/assets/uiux.jpg';
import mobileImage from '@/assets/mobile.jpg';
import brandImage from '@/assets/brand.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPalette, faMobile, faTags } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentImage, setCurrentImage] = useState(servicesImage);
  const highlightRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef<HTMLImageElement>(null);

  // GSAP physics-based highlight animation
  useEffect(() => {
    if (!highlightRef.current) return;

    // Set initial state - hidden
    gsap.set(highlightRef.current, {
      opacity: 0,
      scale: 0.8,
      transformOrigin: "center center"
    });

    return () => {
      gsap.killTweensOf(highlightRef.current);
    };
  }, []);

  const handleServiceHover = (index: number) => {
    setHoveredIndex(index);
    
    // Update image with smooth fade transition (no bounce)
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
        onComplete: () => {
          setCurrentImage(services[index].image);
          gsap.to(imageRef.current, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      });
    }
    
    if (!highlightRef.current || !serviceRefs.current[index]) return;

    const targetElement = serviceRefs.current[index];
    const containerElement = containerRef.current;
    
    if (!targetElement || !containerElement) return;

    // Get positions relative to container
    const containerRect = containerElement.getBoundingClientRect();
    const targetRect = targetElement.getBoundingClientRect();
    
    const relativeTop = targetRect.top - containerRect.top;
    const relativeLeft = targetRect.left - containerRect.left;

    // Animate highlight to target position with bouncy physics
    gsap.to(highlightRef.current, {
      opacity: 1,
      scale: 1,
      x: relativeLeft,
      y: relativeTop,
      width: targetRect.width,
      height: targetRect.height,
      duration: 0.6,
      ease: "back.out(1.7)", // Bouncy easing
      delay: 0.1 // Slight delay for sticky feel
    });
  };

  const handleServiceLeave = () => {
    setHoveredIndex(null);
    
    // Keep the current image, don't change it back to default
    // This prevents the bounce effect from repeating
    
    if (!highlightRef.current) return;

    // Smooth exit with physics
    gsap.to(highlightRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.4,
      ease: "power2.out",
      delay: 0.1
    });
  };

  const services = [
    {
      id: 1,
      title: "Full Stack Development",
      description: "End-to-end web solutions with modern frameworks and scalable architectures.",
      icon: <FontAwesomeIcon icon={faCode} className="w-8 h-8 text-gray-700" />,
      image: fullstackImage
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "User-centered design solutions that deliver exceptional digital experiences.",
      icon: <FontAwesomeIcon icon={faPalette} className="w-8 h-8 text-gray-700" />,
      image: uiuxImage
    },
    {
      id: 3,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: <FontAwesomeIcon icon={faMobile} className="w-8 h-8 text-gray-700" />,
      image: mobileImage
    },
    {
      id: 4,
      title: "Brand Development",
      description: "Strategic brand identity design and visual communication solutions.",
      icon: <FontAwesomeIcon icon={faTags} className="w-8 h-8 text-gray-700" />,
      image: brandImage
    }
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-8"
          style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
        >
          Services
        </motion.h1>
        
        {/* Services Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-studio-gray leading-relaxed max-w-3xl mx-auto"
          style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
        >
          Comprehensive digital solutions tailored to your needs. From concept to deployment, 
          delivering exceptional results across all touchpoints.
        </motion.p>
      </div>

      {/* Main Content - Services Left, Image Right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column - Services */}
        <div className="h-[600px] flex flex-col justify-between">
          {/* Services Container with Grey Background */}
          <div 
            ref={containerRef}
            className="bg-gray-100 rounded-2xl p-6 h-full relative overflow-hidden"
            onMouseLeave={handleServiceLeave}
          >
            {/* Physics-based Highlight */}
            <div
              ref={highlightRef}
              className="absolute bg-white rounded-xl shadow-lg pointer-events-none z-10"
              style={{ 
                top: 0, 
                left: 0,
                willChange: 'transform, opacity'
              }}
            />
            
            {/* Services Cards */}
            <div className="flex flex-col justify-between h-full space-y-2 relative z-20">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  ref={(el) => (serviceRefs.current[index] = el)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + (0.1 * index) }}
                  viewport={{ once: true }}
                  className="relative p-4 rounded-xl cursor-pointer flex-1 transition-all duration-200"
                  onMouseEnter={() => handleServiceHover(index)}
                  style={{
                    zIndex: hoveredIndex === index ? 30 : 20
                  }}
                >
                  {/* Content */}
                  <div className="relative flex items-start gap-4">
                    {/* Icon */}
                    <div className={`flex-shrink-0 mt-1 transition-colors duration-300 ${
                      hoveredIndex === index ? 'text-gray-800' : 'text-gray-700'
                    }`}>
                      {service.icon}
                    </div>
                    
                    {/* Text Content */}
                    <div className="flex-1 space-y-1">
                      <h3 
                        className={`text-xl font-medium transition-colors duration-300 ${
                          hoveredIndex === index ? 'text-gray-900' : 'text-gray-900'
                        }`}
                        style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
                      >
                        {service.title}
                      </h3>
                      
                      <p 
                        className={`leading-relaxed transition-colors duration-300 ${
                          hoveredIndex === index ? 'text-gray-700' : 'text-gray-600'
                        }`}
                        style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Dynamic Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl">
            <img 
              ref={imageRef}
              src={currentImage} 
              alt="Services" 
              className="w-full h-[600px] object-cover"
              style={{ willChange: 'transform, opacity' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
