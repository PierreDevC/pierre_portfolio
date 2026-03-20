import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import mortwiseImage from "@/assets/mortwise.jpg";
import calendappVideo from "@/assets/calendapp.mp4";
import cryptotradeVideo from "@/assets/cryptotrade.mp4";
import { useTranslation } from '@/hooks/useTranslation';

// Import project images for carousel
import mortwise1 from "@/assets/calendapp1.png";
import mortwise2 from "@/assets/calendapp2.png";
import mortwise3 from "@/assets/calendapp3.png";
import mortwise4 from "@/assets/calendapp4.png";

import calendapp1 from "@/assets/calendapp1.png";
import calendapp2 from "@/assets/calendapp2.png";
import calendapp3 from "@/assets/calendapp3.png";
import calendapp4 from "@/assets/calendapp4.png";

import cryptotrade1 from "@/assets/cryptotrade1.png";
import cryptotrade2 from "@/assets/cryptotrade2.png";
import cryptotrade3 from "@/assets/cryptotrade3.png";
import cryptotrade4 from "@/assets/cryptotrade4.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@/components/CalendAppSwiper.css';

gsap.registerPlugin(ScrollTrigger);

const PortfolioGrid = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(titleRef.current, 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
          }
        }
      );
    }
  }, []);

  const projects = [
    {
      id: "mortwise",
      media: mortwiseImage,
      type: 'image',
      projectType: t('projects.items.mortwise.category'),
      projectKind: t('projects.items.mortwise.kind'),
      title: t('projects.items.mortwise.title'),
      category: t('projects.items.mortwise.category'),
      year: t('projects.items.mortwise.year'),
      description: t('projects.details.mortwise.description'),
      featuresTitle: t('projects.details.mortwise.featuresTitle'),
      techStack: ["Flutter", "Firebase", "Provider", "Dart"],
      github: "https://github.com/PierreDevC/flutter_testing.git",
      live: "https://mortwise.web.app/",
      features: [
        { title: t('projects.details.mortwise.features.prequalification.title'), description: t('projects.details.mortwise.features.prequalification.description'), image: mortwise1 },
        { title: t('projects.details.mortwise.features.calculator.title'), description: t('projects.details.mortwise.features.calculator.description'), image: mortwise2 },
        { title: t('projects.details.mortwise.features.simulator.title'), description: t('projects.details.mortwise.features.simulator.description'), image: mortwise3 },
        { title: t('projects.details.mortwise.features.fhsa.title'), description: t('projects.details.mortwise.features.fhsa.description'), image: mortwise4 },
      ]
    },
    {
      id: "calendapp",
      media: calendappVideo,
      type: 'video',
      projectType: t('projects.items.calendapp.category'),
      projectKind: t('projects.items.calendapp.kind'),
      title: t('projects.items.calendapp.title'),
      category: t('projects.items.calendapp.category'),
      year: t('projects.items.calendapp.year'),
      description: t('projects.details.calendapp.description'),
      featuresTitle: t('projects.details.calendapp.featuresTitle'),
      techStack: ["SpringBoot", "Next.js", "PostgresSQL"],
      github: "https://github.com/coffee-only/CalendarProject",
      live: "https://mina-scheduler-delta.vercel.app/",
      collaborators: [
        { name: "Lililatortue", github: "https://github.com/orgs/coffee-only/people/Lililatortue" },
        { name: "colXavGig", github: "https://github.com/colXavGig" },
        { name: "a3emond", github: "https://github.com/a3emond" }
      ],
      features: [
        { title: t('projects.details.calendapp.features.createEvents.title'), description: t('projects.details.calendapp.features.createEvents.description'), image: calendapp1 },
        { title: t('projects.details.calendapp.features.availabilities.title'), description: t('projects.details.calendapp.features.availabilities.description'), image: calendapp2 },
        { title: t('projects.details.calendapp.features.realtime.title'), description: t('projects.details.calendapp.features.realtime.description'), image: calendapp3 },
        { title: t('projects.details.calendapp.features.sync.title'), description: t('projects.details.calendapp.features.sync.description'), image: calendapp4 },
      ]
    },
    {
      id: "cryptotrade",
      media: cryptotradeVideo,
      type: 'video',
      projectType: t('projects.items.cryptotrade.category'),
      projectKind: t('projects.items.cryptotrade.kind'),
      title: t('projects.items.cryptotrade.title'),
      category: t('projects.items.cryptotrade.category'),
      year: t('projects.items.cryptotrade.year'),
      description: t('projects.details.cryptotrade.description'),
      featuresTitle: t('projects.details.cryptotrade.featuresTitle'),
      techStack: ["PHP", "JavaScript", "MySQL"],
      github: "https://github.com/PierreDevC/cryptotrade",
      live: "https://cryptotrade-production-5b56.up.railway.app/",
      collaborators: [
        { name: "Doumbouya94", github: "https://github.com/Doumbouya94" },
        { name: "JRMosey", github: "https://github.com/JRMosey" },
        { name: "seydina107", github: "https://github.com/seydina107" }
      ],
      features: [
        { title: t('projects.details.cryptotrade.features.portfolio.title'), description: t('projects.details.cryptotrade.features.portfolio.description'), image: cryptotrade1 },
        { title: t('projects.details.cryptotrade.features.simulation.title'), description: t('projects.details.cryptotrade.features.simulation.description'), image: cryptotrade2 },
        { title: t('projects.details.cryptotrade.features.custom.title'), description: t('projects.details.cryptotrade.features.custom.description'), image: cryptotrade3 },
        { title: t('projects.details.cryptotrade.features.analysis.title'), description: t('projects.details.cryptotrade.features.analysis.description'), image: cryptotrade4 },
      ]
    }
  ];

  const ProjectModal = ({ project, onClose }: { project: any, onClose: () => void }) => {
    useEffect(() => {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }, []);

    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 lg:p-12">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
          onClick={onClose}
        />
        
        <motion.div 
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 50, opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-7xl max-h-[90vh] bg-background rounded-3xl overflow-y-auto shadow-2xl hide-scrollbar"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-colors group"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-foreground group-hover:rotate-90 transition-transform duration-300">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <div className="p-8 md:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Info Column */}
              <div className="space-y-10">
                <div>
                  <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-4" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
                    {project.title}
                  </h2>
                  <div className="text-xl text-studio-gray font-medium" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
                    {project.category} / {project.projectKind} / {project.year}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech: string) => (
                    <span key={tech} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.collaborators && (
                  <div className="space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-widest text-studio-gray">
                      {t('projects.details.collaborators')}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.collaborators.map((collab: any) => (
                        <a 
                          key={collab.name}
                          href={collab.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          {collab.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                  {project.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-8 py-4 bg-gray-100 dark:bg-gray-800 text-foreground rounded-2xl font-medium text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    {t('projects.details.sourceCode')}
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-medium text-center transition-colors shadow-lg shadow-green-900/20"
                  >
                    {t('projects.details.livePreview')}
                  </a>
                </div>
              </div>

              {/* Media Column */}
              <div className="space-y-12">
                <div className="rounded-3xl overflow-hidden shadow-xl aspect-video lg:aspect-auto">
                  {project.type === 'video' ? (
                    <video
                      src={project.media}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={project.media}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {project.id !== 'mortwise' && (
                  <div className="space-y-8">
                    <h4 className="text-3xl font-bold tracking-tight">{project.featuresTitle}</h4>
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      spaceBetween={20}
                      slidesPerView={1}
                      navigation
                      pagination={{ clickable: true }}
                      autoplay={{ delay: 4000 }}
                      loop={true}
                      className="rounded-3xl overflow-hidden"
                    >
                      {project.features.map((feature: any, idx: number) => (
                        <SwiperSlide key={idx}>
                          <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-6 md:p-10 space-y-6">
                            <div className="space-y-2">
                              <h5 className="text-xl font-bold">{feature.title}</h5>
                              <p className="text-studio-gray">{feature.description}</p>
                            </div>
                            <img src={feature.image} alt={feature.title} className="w-full rounded-2xl object-cover h-64 md:h-80" />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  };

  const ProjectCard = ({ project, className = "" }: { project: any, className?: string }) => (
    <div
      onClick={() => setSelectedProject(project)}
      className={`group cursor-pointer flex flex-col transition-transform duration-500 hover:scale-[1.01] ${className}`}
    >
      {/* Media Layer - No rounded corners */}
      <div className="w-full h-full overflow-hidden bg-gray-100 dark:bg-gray-900">
        {project.type === 'video' ? (
          <video
            src={project.media}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={project.media}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Project Details Outside Media */}
      <div className="mt-6 flex justify-between items-start">
        <div className="space-y-2">
          <div className="relative inline-block">
            <h3 
              className="text-2xl md:text-3xl font-medium tracking-tight text-foreground"
              style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
            >
              {project.title}
            </h3>
            {/* Left-to-right underline on hover */}
            <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-black dark:bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left group-hover:origin-left group-[:not(:hover)]:origin-right" />
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm md:text-base text-studio-gray font-medium uppercase tracking-wider">
            <span>{project.projectType}</span>
            <span>•</span>
            <span>{project.projectKind}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>
        </div>

        {/* Arrow Icon */}
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-gray-800 border border-black/10 dark:border-white/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:-rotate-45">
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-5 h-5 md:w-6 md:h-6 text-black dark:text-white"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full pt-20 pb-32 md:pb-48 px-4 sm:px-6 md:px-10">
      {/* Top Separator */}
      <div className="h-[2px] bg-black mb-20 opacity-100" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-24">
        {/* Left Column: Greyed Title */}
        <div className="lg:col-span-4">
          <h3 
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-300 dark:text-gray-700 tracking-tight"
            style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
          >
            {t('projects.subheading')}
          </h3>
        </div>

        {/* Right Column: Main Header */}
        <div className="lg:col-span-8">
          <h2 
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-medium text-foreground tracking-tight leading-tight"
            style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
          >
            {t('projects.heading')}
          </h2>
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column (Smaller Projects) */}
        <div className="lg:col-span-5 flex flex-col gap-16 lg:gap-20">
          <div className="aspect-[4/3] lg:aspect-auto lg:h-[450px]">
            <ProjectCard project={projects[1]} className="h-full" />
          </div>
          <div className="aspect-[4/3] lg:aspect-auto lg:h-[450px]">
            <ProjectCard project={projects[2]} className="h-full" />
          </div>
        </div>

        {/* Right Column (Featured Large Project) */}
        <div className="lg:col-span-7 aspect-[4/3] lg:aspect-auto lg:h-[932px]">
          <ProjectCard project={projects[0]} className="h-full" />
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioGrid;
