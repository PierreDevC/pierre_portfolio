import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import LogoLoop from "@/blocks/Animations/LogoLoop/LogoLoop";

const TechStack = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const logoLoopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial states
    gsap.set([headerRef.current, logoLoopRef.current], {
      y: 40,
      opacity: 0
    });

    // Create staggered animation
    const timeline = gsap.timeline();
    timeline
      .to(headerRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      })
      .to(logoLoopRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }, "-=0.4");

    return () => {
      timeline.kill();
    };
  }, []);

  // Technology stack with logos from CDN
  const logos = [
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg", 
      alt: "C#",
      title: "C#"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", 
      alt: "Python",
      title: "Python"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg", 
      alt: "SQL",
      title: "SQL"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", 
      alt: "JavaScript",
      title: "JavaScript"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", 
      alt: "TypeScript",
      title: "TypeScript"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", 
      alt: "React",
      title: "React"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", 
      alt: "Node.js",
      title: "Node.js"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", 
      alt: "Java",
      title: "Java"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", 
      alt: "Spring Boot",
      title: "Spring Boot"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg", 
      alt: "WordPress",
      title: "WordPress"
    },
    { 
      node: (
        <div className="flex items-center justify-center">
          <span className="font-bold text-studio-gray text-lg">Webflow</span>
        </div>
      ),
      title: "Webflow"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", 
      alt: "AWS CDK",
      title: "AWS CDK"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", 
      alt: "Docker",
      title: "Docker"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg", 
      alt: "Swift",
      title: "Swift"
    },
    
    
  ];

  return (
    <motion.section 
      ref={sectionRef}
      className="py-16 bg-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Optional header */}
        <motion.div 
          ref={headerRef}
          className="text-center mb-12"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
        >
          <p className="text-sm text-studio-gray uppercase tracking-wide mb-2">
            Technologies & Tools
          </p>
        </motion.div>
        
        {/* LogoLoop with fade effect */}
        <div ref={logoLoopRef}>
          <LogoLoop
          logos={logos}
          speed={60}
          direction="left"
          logoHeight={24}
          gap={64}
          pauseOnHover={false}
          slowOnHover={true}
          hoverSpeedRatio={0.1}
          fadeOut={true}
          fadeOutColor="hsl(var(--background))"
          scaleOnHover={false}
          ariaLabel="Technologies and tools we use"
          className="opacity-70 hover:opacity-90 transition-opacity duration-300 [&_img]:grayscale [&_img]:hover:grayscale-0 [&_img]:transition-all [&_img]:duration-300"
        />
        </div>
      </div>
    </motion.section>
  );
};

export default TechStack;
