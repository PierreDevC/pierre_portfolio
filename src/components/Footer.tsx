import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

const Footer = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const followRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial states
    gsap.set([projectsRef.current, skillsRef.current, contactRef.current, followRef.current], {
      y: 40,
      opacity: 0
    });

    // Create staggered animation
    const timeline = gsap.timeline();
    timeline
      .to(projectsRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      })
      .to(skillsRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      .to(contactRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      .to(followRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6");

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <motion.footer 
      ref={sectionRef}
      className="py-40 bg-studio-charcoal text-studio-light"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
          {/* Projects Column */}
          <motion.div 
            ref={projectsRef}
            className="space-y-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
          >
            <div className="text-studio-gray text-sm">PROJECTS</div>
            <div className="space-y-3 text-studio-light">
              <div className="hover:text-studio-gray transition-colors cursor-pointer">CalendApp</div>
              <div className="hover:text-studio-gray transition-colors cursor-pointer">EstateHub</div>
              <div className="hover:text-studio-gray transition-colors cursor-pointer">Thrift App</div>
              <div className="hover:text-studio-gray transition-colors cursor-pointer">Work in Progress...</div>
            </div>
          </motion.div>

          {/* Skills & Services Column */}
          <motion.div 
            ref={skillsRef}
            className="space-y-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
          >
            <div className="text-studio-gray text-sm">SKILLS & SERVICES</div>
            <div className="space-y-3 text-studio-light">
              <div className="hover:text-studio-gray transition-colors">Web Development</div>
              <div className="hover:text-studio-gray transition-colors">UI/UX Design</div>
              <div className="hover:text-studio-gray transition-colors">Mobile Development</div>
              <div className="hover:text-studio-gray transition-colors">Brand Development</div>
            </div>
          </motion.div>

          {/* Contact Column */}
          <motion.div 
            ref={contactRef}
            className="space-y-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
          >
            <div className="text-studio-gray text-sm">CONTACT</div>
            <div className="space-y-3 text-studio-light">
              <div className="hover:text-studio-gray transition-colors">pscypre@gmail.com</div>
              <div className="hover:text-studio-gray transition-colors">+1 (438) 926-1340</div>
              <div className="text-studio-gray">
                Montreal, Canada<br />
              </div>
            </div>
          </motion.div>

          {/* Follow Column */}
          <motion.div 
            ref={followRef}
            className="space-y-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
          >
            <div className="text-studio-gray text-sm">FOLLOW</div>
            <div className="space-y-3">
              <a href="#" className="block text-studio-light hover:text-studio-gray transition-colors">
                Github
              </a>
              <a href="#" className="block text-studio-light hover:text-studio-gray transition-colors">
                Behance
              </a>
              <a href="#" className="block text-studio-light hover:text-studio-gray transition-colors">
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>

        {/* Pierre Branding Section */}
        <div className="border-t border-studio-gray/20 mt-16 pt-8" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
          <div className="text-center mb-8">
            <div className="text-3xl font-bold">
              Pierre<sup className="text-sm">®</sup>
            </div>
            <p className="text-studio-gray leading-relaxed mt-4 max-w-md mx-auto">
              A creative developer focused on thoughtful design and meaningful experiences.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-studio-gray">
            <div>© 2024 PierreDevC. All rights reserved.</div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-studio-light transition-colors">Privacy</a>
              <a href="#" className="hover:text-studio-light transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;