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
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M223.68,66.15,135.68,18a15.94,15.94,0,0,0-15.36,0l-88,48.18a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM168,152v50.09l-32,17.52V132.74l80-43.8v32l-43.84,24A8,8,0,0,0,168,152Zm-84.16-7L40,121v-32l80,43.8v86.87L88,202.09V152A8,8,0,0,0,83.84,145Zm-.7-88.41,41,22.45a8,8,0,0,0,7.68,0l41-22.45,34.48,18.87L128,118.88,48.66,75.44ZM128,32h0l28.2,15.44L128,62.89,99.8,47.45ZM40,139.22l32,17.52v36.59L40,175.82Zm144,54.11V156.74l32-17.52v36.6Z"></path></svg>,
      image: fullstackImage
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "User-centered design solutions that deliver exceptional digital experiences.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40ZM48,56H208a8,8,0,0,1,8,8v80H40V64A8,8,0,0,1,48,56ZM208,184H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z"></path></svg>,
      image: uiuxImage
    },
    {
      id: 3,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,72H208V64a24,24,0,0,0-24-24H40A24,24,0,0,0,16,64v96a24,24,0,0,0,24,24H152v8a24,24,0,0,0,24,24h48a24,24,0,0,0,24-24V96A24,24,0,0,0,224,72ZM40,168a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v8H176a24,24,0,0,0-24,24v72Zm192,24a8,8,0,0,1-8,8H176a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Zm-96,16a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h40A8,8,0,0,1,136,208Zm80-96a8,8,0,0,1-8,8H192a8,8,0,0,1,0-16h16A8,8,0,0,1,216,112Z"></path></svg>,
      image: mobileImage
    },
    {
      id: 4,
      title: "Brand Development",
      description: "Strategic brand identity design and visual communication solutions.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M223.85,47.12a16,16,0,0,0-15-15c-12.58-.75-44.73.4-71.41,27.07L132.69,64H74.36A15.91,15.91,0,0,0,63,68.68L28.7,103a16,16,0,0,0,9.07,27.16l38.47,5.37,44.21,44.21,5.37,38.49a15.94,15.94,0,0,0,10.78,12.92,16.11,16.11,0,0,0,5.1.83A15.91,15.91,0,0,0,153,227.3L187.32,193A15.91,15.91,0,0,0,192,181.64V123.31l4.77-4.77C223.45,91.86,224.6,59.71,223.85,47.12ZM74.36,80h42.33L77.16,119.52,40,114.34Zm74.41-9.45a76.65,76.65,0,0,1,59.11-22.47,76.46,76.46,0,0,1-22.42,59.16L128,164.68,91.32,128ZM176,181.64,141.67,216l-5.19-37.17L176,139.31Zm-74.16,9.5C97.34,201,82.29,224,40,224a8,8,0,0,1-8-8c0-42.29,23-57.34,32.86-61.85a8,8,0,0,1,6.64,14.56c-6.43,2.93-20.62,12.36-23.12,38.91,26.55-2.5,36-16.69,38.91-23.12a8,8,0,1,1,14.56,6.64Z"></path></svg>,
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

        {/* Right Column - Dynamic Image (Hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative hidden lg:block"
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
