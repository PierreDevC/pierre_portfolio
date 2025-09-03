import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import servicesImage from '@/assets/services.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPalette, faMobile, faTags } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const buttonRef1 = useRef<HTMLButtonElement>(null);
  const buttonRef2 = useRef<HTMLButtonElement>(null);

  // GSAP animation for buttons on hover
  useEffect(() => {
    const animateButton = (button: HTMLButtonElement | null) => {
      if (!button) return;

      const handleMouseEnter = () => {
        gsap.to(button, { scale: 1.05, duration: 0.2, ease: "power2.out" });
      };
      
      const handleMouseLeave = () => {
        gsap.to(button, { scale: 1, duration: 0.2, ease: "power2.out" });
      };

      button.addEventListener('mouseenter', handleMouseEnter);
      button.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        button.removeEventListener('mouseenter', handleMouseEnter);
        button.removeEventListener('mouseleave', handleMouseLeave);
      };
    };

    const cleanup1 = animateButton(buttonRef1.current);
    const cleanup2 = animateButton(buttonRef2.current);

    return () => {
      cleanup1?.();
      cleanup2?.();
    };
  }, []);

  const handleContactClick = () => {
    if (location.pathname === '/') {
      // Already on home page, just scroll to contact section
      const element = document.querySelector('#contact');
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // On different page, navigate to home page with hash
      navigate('/#contact');
    }
  };

  const handleProjectsClick = () => {
    if (location.pathname === '/') {
      // Already on home page, just scroll to projects section
      const element = document.querySelector('#projects');
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // On different page, navigate to home page with hash
      navigate('/#projects');
    }
  };

  const services = [
    {
      id: 1,
      title: "Full Stack Development",
      description: "End-to-end web solutions with modern frameworks and scalable architectures.",
      icon: <FontAwesomeIcon icon={faCode} className="w-8 h-8 text-gray-700" />
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "User-centered design solutions that deliver exceptional digital experiences.",
      icon: <FontAwesomeIcon icon={faPalette} className="w-8 h-8 text-gray-700" />
    },
    {
      id: 3,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: <FontAwesomeIcon icon={faMobile} className="w-8 h-8 text-gray-700" />
    },
    {
      id: 4,
      title: "Brand Development",
      description: "Strategic brand identity design and visual communication solutions.",
      icon: <FontAwesomeIcon icon={faTags} className="w-8 h-8 text-gray-700" />
    }
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        {/* Left Column - Content */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-light text-foreground"
            style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
          >
            Services
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-studio-gray leading-relaxed max-w-lg"
            style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
          >
            Comprehensive digital solutions tailored to your needs. From concept to deployment, 
            delivering exceptional results across all touchpoints.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button 
              ref={buttonRef1}
              onClick={handleContactClick}
              className="px-6 md:px-8 py-3 bg-gray-500 text-white rounded-[35px] hover:bg-gray-600 transition-colors duration-300 text-sm md:text-base"
              style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
            >
              Contact Me
            </button>
            <button 
              ref={buttonRef2}
              onClick={handleProjectsClick}
              className="px-6 md:px-8 py-3 bg-black text-white rounded-[35px] hover:bg-gray-800 transition-colors duration-300 text-sm md:text-base"
              style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
            >
              See Projects
            </button>
          </motion.div>
        </div>

        {/* Right Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl">
            <img 
              src={servicesImage} 
              alt="Services" 
              className="w-full h-80 lg:h-96 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>

      {/* Services Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="flex-shrink-0 mt-1">
                {service.icon}
              </div>
              
              {/* Content */}
              <div className="flex-1 space-y-3">
                <h3 
                  className="text-lg font-medium text-gray-900"
                  style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
                >
                  {service.title}
                </h3>
                
                {/* HR separator */}
                <hr className="border-gray-200" />
                
                <p 
                  className="text-sm text-gray-600 leading-relaxed"
                  style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
