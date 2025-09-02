import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import contactImage from "../assets/contact.jpg";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const projectTypes = [
    { value: "", label: "Select a project type" },
    { value: "web-development", label: "Web Development" },
    { value: "mobile-app", label: "Mobile App" },
    { value: "ui-ux-design", label: "UI/UX Design" },
    { value: "full-stack", label: "Full-Stack Application" },
    { value: "consulting", label: "Consulting" },
    { value: "other", label: "Other" }
  ];

  // GSAP animation for dropdown
  useEffect(() => {
    if (dropdownRef.current) {
      if (isDropdownOpen) {
        gsap.fromTo(dropdownRef.current, 
          { opacity: 0, y: -10, scaleY: 0.8 },
          { opacity: 1, y: 0, scaleY: 1, duration: 0.3, ease: "power2.out" }
        );
      }
    }
  }, [isDropdownOpen]);

  // Click outside handler for dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // GSAP animation for button on hover
  useEffect(() => {
    if (buttonRef.current) {
      const button = buttonRef.current;
      
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
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProjectTypeSelect = (value: string) => {
    setFormData(prev => ({ ...prev, projectType: value }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', projectType: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Call to action */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-6" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
              Contact
            </h1>
            <p className="text-lg text-studio-gray leading-relaxed mb-8" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
              Ready to bring your ideas to life? Let's start a conversation about your next project. 
              I'm here to help transform your vision into exceptional digital experiences.
            </p>
            
            {/* Contact Image */}
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={contactImage} 
                alt="Contact Pierre" 
                className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
                style={{ objectPosition: 'center 40%' }}
              />
            </div>
          </div>

          {/* Right side - Contact form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-3xl text-gray-900 placeholder-gray-400 focus:border-gray-400 focus:outline-none transition-colors bg-gray-50"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-3xl text-gray-900 placeholder-gray-400 focus:border-gray-400 focus:outline-none transition-colors bg-gray-50"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-900 mb-2">
                  Project Type:
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-3xl text-gray-900 focus:border-gray-400 focus:outline-none transition-colors bg-gray-50 text-left flex items-center justify-between"
                  >
                    <span className={formData.projectType ? "text-gray-900" : "text-gray-400"}>
                      {projectTypes.find(type => type.value === formData.projectType)?.label || "Select a project type"}
                    </span>
                    <motion.svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>

                  {isDropdownOpen && (
                    <motion.div
                      ref={dropdownRef}
                      className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-3xl shadow-lg overflow-hidden"
                      initial={{ opacity: 0, y: -10, scaleY: 0.8 }}
                      animate={{ opacity: 1, y: 0, scaleY: 1 }}
                      exit={{ opacity: 0, y: -10, scaleY: 0.8 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {projectTypes.slice(1).map((type) => (
                        <motion.button
                          key={type.value}
                          type="button"
                          onClick={() => handleProjectTypeSelect(type.value)}
                          className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors text-gray-900 first:rounded-t-3xl last:rounded-b-3xl"
                          whileHover={{ backgroundColor: "#f9fafb", x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          {type.label}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Project Details:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-3xl text-gray-900 placeholder-gray-400 focus:border-gray-400 focus:outline-none transition-colors bg-gray-50 resize-vertical"
                  placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                />
              </div>

              <div className="text-xs text-gray-500 space-y-1">
                <p>🔒 All the fields are required. By sending the form you agree to the Terms & Conditions and Privacy Policy.</p>
              </div>

              <div>
                <motion.button
                  ref={buttonRef}
                  type="submit"
                  className="inline-flex items-center px-8 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 group relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                  }}
                  whileTap={{ 
                    scale: 0.98,
                    transition: { duration: 0.1 }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8,
                    ease: "easeOut"
                  }}
                >
                  <motion.span
                    className="relative z-10"
                    whileHover={{ x: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    SEND MESSAGE
                  </motion.span>
                  <motion.span 
                    className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10"
                    whileHover={{ 
                      x: 4,
                      rotate: -15
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                  
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gray-900 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ 
                      scale: 1, 
                      opacity: 1,
                      transition: { duration: 0.3 }
                    }}
                    style={{ originX: 0.5, originY: 0.5 }}
                  />
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
