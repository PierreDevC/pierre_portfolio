import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import contactImage from "../assets/projects.jpg";
import { useTranslation } from '@/hooks/useTranslation';

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });

  const buttonRef = useRef<HTMLButtonElement>(null);

  const projectTypes = [
    { value: "", label: t('contact.form.projectType.placeholder') },
    { value: "web-development", label: t('contact.form.projectType.options.webdev') },
    { value: "mobile-app", label: t('contact.form.projectType.options.mobile') },
    { value: "ui-ux-design", label: t('contact.form.projectType.options.uiux') },
    { value: "full-stack", label: t('contact.form.projectType.options.fullstack') },
    { value: "consulting", label: t('contact.form.projectType.options.consulting') },
    { value: "other", label: t('contact.form.projectType.options.other') }
  ];

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', projectType: '', message: '' });
  };

  return (
    <section className="py-32 bg-white dark:bg-[hsl(var(--background))]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Call to action */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-6" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
              {t('contact.heading')}
            </h1>
            <p className="text-lg text-studio-gray leading-relaxed mb-8" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
              {t('contact.description')}
            </p>
            
            {/* Contact Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={contactImage} 
                alt="Contact Pierre" 
                className="w-full h-80 object-cover"
                style={{ objectPosition: 'center 40%' }}
              />
            </div>
          </div>

          {/* Right side - Contact form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                    {t('contact.form.name.label')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-gray-400 dark:focus:border-gray-500 focus:outline-none transition-colors bg-gray-50 dark:bg-gray-800"
                    placeholder={t('contact.form.name.placeholder')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                    {t('contact.form.email.label')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-gray-400 dark:focus:border-gray-500 focus:outline-none transition-colors bg-gray-50 dark:bg-gray-800"
                    placeholder={t('contact.form.email.placeholder')}
                  />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                  {t('contact.form.projectType.label')}
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={(e) => setFormData(prev => ({ ...prev, projectType: e.target.value }))}
                  required
                  className={`w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:border-gray-400 dark:focus:border-gray-500 focus:outline-none transition-colors bg-gray-50 dark:bg-gray-800 appearance-none bg-no-repeat bg-right pr-10 ${
                    formData.projectType
                      ? 'text-gray-900 dark:text-gray-100'
                      : 'text-gray-400 dark:text-gray-500'
                  }`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.75rem center',
                    backgroundSize: '1.5em 1.5em'
                  }}
                >
                  {projectTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2 ">
                  {t('contact.form.details.label')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-gray-400 dark:focus:border-gray-500 focus:outline-none transition-colors bg-gray-50 dark:bg-gray-800 resize-none"
                  placeholder={t('contact.form.details.placeholder')}
                />
              </div>
              
              {/* <div className="text-xs text-gray-500 space-y-1">
                <p>🔒 All the fields are required. By sending the form you agree to the Terms & Conditions and Privacy Policy.</p>
              </div> */}
                  
              <div>
                <motion.button
                  ref={buttonRef}
                  type="submit"
                  className="inline-flex items-center px-8 py-3 border-2 border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 font-medium rounded-xl hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all duration-300 group relative overflow-hidden"
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
                    {t('contact.form.submit')}
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
                    className="absolute inset-0 bg-gray-900 dark:bg-gray-100 rounded-xl"
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
