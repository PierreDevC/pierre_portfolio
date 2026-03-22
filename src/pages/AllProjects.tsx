import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedHeader from "@/components/AnimatedHeader";
import { useTranslation } from "@/hooks/useTranslation";

import mortwiseImg from "@/assets/mortwise_mockup.jpg";
import calendappImg from "@/assets/calendapp_img_mockup.jpg";
import cryptotradeImg from "@/assets/cryptotrade_img.jpg";
import mockupMagazineImg from "@/assets/Mockup_magazine_couverture.jpg";
import aux33ToursImg from "@/assets/10cypre_1304_EDIT.jpg";
import artMondeImg from "@/assets/search-background.jpg";
import gymGearImg from "@/assets/Maquette Originale.jpg";
import baleineBleuImg from "@/assets/Maquette_FBG.png";
import mamaBenzImg from "@/assets/mamabenz.jpg";

const geist = { fontFamily: '"Geist", system-ui, -apple-system, sans-serif' };

const projects = [
  {
    id: "mortwise",
    title: "MortWise",
    year: "2025",
    categoryKey: "projects.categories.mobileApplication",
    tech: ["Flutter", "Firebase", "Provider"],
    image: mortwiseImg,
    descKey: "projects.details.mortwise.description",
    href: "https://mortwise.web.app/",
  },
  {
    id: "calendapp",
    title: "CalendApp",
    year: "2024",
    categoryKey: "projects.categories.webApplication",
    tech: ["SpringBoot", "Vite", "MySQL"],
    image: calendappImg,
    descKey: "projects.details.calendapp.description",
    href: "https://mina-scheduler-delta.vercel.app/",
  },
  {
    id: "cryptotrade",
    title: "CryptoTrade",
    year: "2024",
    categoryKey: "projects.categories.webApplication",
    tech: ["PHP", "JavaScript", "MySQL"],
    image: cryptotradeImg,
    descKey: "projects.details.cryptotrade.description",
    href: "https://cryptotrade-production-5b56.up.railway.app/",
  },
  {
    id: "mama-benz",
    title: "Mama Benz",
    year: "2025",
    categoryKey: "projects.categories.printAndWeb",
    tech: ["WordPress", "InDesign", "Photoshop"],
    image: mamaBenzImg,
    descKey: "projects.details.mamabenz.description",
    href: "#",
  },
  {
    id: "aux-33-tours",
    title: "Aux 33 Tours",
    year: "2025",
    categoryKey: "projects.categories.photography",
    tech: ["PhotoShop", "Lightroom", "Camera RAW"],
    image: aux33ToursImg,
    descKey: "projects.details.aux33tours.description",
    href: "#",
  },
  {
    id: "art-monde",
    title: "Art Monde",
    year: "2025",
    categoryKey: "projects.categories.webApplication",
    tech: ["HTML", "CSS", "JavaScript"],
    image: artMondeImg,
    descKey: "projects.details.artmonde.description",
    href: "https://pierredevc.github.io/portfolio/projects/projet/index.html",
  },
  {
    id: "magazine",
    title: "GQ Magazine",
    year: "2025",
    categoryKey: "projects.categories.printDesign",
    tech: ["Illustrator", "Photoshop"],
    image: mockupMagazineImg,
    descKey: "projects.details.magazine.description",
    href: "#",
  },
  {
    id: "gym-gear",
    title: "Gym Gear",
    year: "2023",
    categoryKey: "projects.categories.packaging",
    tech: ["Illustrator", "Photoshop"],
    image: gymGearImg,
    descKey: "projects.details.gymgear.description",
    href: "#",
  },
  {
    id: "baleine-bleue",
    title: "Fondation La Baleine Grise",
    year: "2023",
    categoryKey: "projects.categories.illustration",
    tech: ["Photoshop", "Illustrator"],
    image: baleineBleuImg,
    descKey: "projects.details.baleinebleue.description",
    href: "#",
  },
];

function ProjectInfo({ project, index, total }: { project: typeof projects[0]; index: number; total: number }) {
  const { t } = useTranslation();
  return (
    <>
      <p className="text-[11px] text-studio-gray font-medium uppercase tracking-[0.2em] mb-8" style={geist}>
        {String(index + 1).padStart(2, "0")}&nbsp;&nbsp;/&nbsp;&nbsp;{String(total).padStart(2, "0")}
      </p>
      <h2 className="text-4xl lg:text-5xl font-medium text-foreground tracking-tight mb-4 leading-tight" style={geist}>
        {project.title}
      </h2>
      <p className="text-[11px] uppercase tracking-[0.18em] text-studio-gray font-medium mb-7" style={geist}>
        {t(project.categoryKey)}&nbsp;&nbsp;—&nbsp;&nbsp;{project.year}
      </p>
      <p className="text-sm text-studio-gray leading-relaxed mb-8" style={geist}>
        {t(project.descKey)}
      </p>
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.map((tech) => (
          <span key={tech} className="px-3 py-1 text-[10px] font-medium bg-black/5 dark:bg-white/10 text-foreground rounded-full uppercase tracking-wider" style={geist}>
            {tech}
          </span>
        ))}
      </div>
      {project.href !== "#" && (
        <a href={project.href} target={project.href.startsWith("http") ? "_blank" : undefined} rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined} className="group relative inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-foreground no-underline py-1" style={geist}>
          {t('projects.viewProject')}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
          <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black dark:bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
        </a>
      )}
    </>
  );
}

export default function AllProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const desktopRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observers: IntersectionObserver[] = [];
    desktopRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIndex(i); },
        { threshold: 0.5 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="bg-background">
      <AnimatedHeader />

      {/* ── MOBILE layout (< lg) ── */}
      <div className="lg:hidden pt-24">
        {projects.map((project, i) => (
          <div key={project.id} className="border-t border-black/10 dark:border-white/10">
            {/* Image */}
            <div className="w-full aspect-[4/3]">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
            {/* Info */}
            <div className="px-6 py-10">
              <ProjectInfo project={project} index={i} total={projects.length} />
            </div>
          </div>
        ))}
      </div>

      {/* ── DESKTOP layout (>= lg) ── */}
      <div className="hidden lg:flex">

        {/* Left: scrollable images */}
        <div className="w-1/2">
          {projects.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => { desktopRefs.current[i] = el; }}
              className="w-full"
              style={{ height: "100vh" }}
            >
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Right: fixed info panel */}
        <div className="fixed top-0 right-0 w-1/2 h-screen flex items-center px-16 bg-background z-10">

          {/* Table of contents */}
          <div className="absolute top-28 right-12 flex-col items-end gap-0 hidden [@media(min-width:1200px)]:flex">
            <div className="relative flex flex-col">
              {/* Vertical connecting line */}
              <div className="absolute right-[calc(100%+12px)] top-0 bottom-0 w-[1px] bg-black/10 dark:bg-white/10" />

              {projects.map((project, i) => (
                <button
                  key={project.id}
                  onClick={() => desktopRefs.current[i]?.scrollIntoView({ behavior: "smooth" })}
                  className="group flex items-center gap-3 py-1.5 text-right cursor-pointer bg-transparent border-0 outline-none"
                  style={geist}
                >
                  <motion.span
                    className="text-[10px] font-medium uppercase tracking-widest"
                    animate={{ opacity: i === activeIndex ? 1 : 0.3, x: i === activeIndex ? 0 : 4 }}
                    transition={{ duration: 0.3 }}
                    style={geist}
                  >
                    {project.title}
                  </motion.span>

                  {/* Dot indicator */}
                  <div className="relative flex-shrink-0 w-[5px] h-[5px]">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-black dark:bg-white"
                      animate={{ scale: i === activeIndex ? 1.8 : 1, opacity: i === activeIndex ? 1 : 0.25 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div style={{ maxWidth: "400px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <ProjectInfo project={projects[activeIndex]} index={activeIndex} total={projects.length} />
              </motion.div>
            </AnimatePresence>

            {/* Progress indicators */}
            <div className="absolute bottom-10 flex gap-3 items-center">
              {projects.map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-black dark:bg-white"
                  animate={{ width: i === activeIndex ? 28 : 8, opacity: i === activeIndex ? 1 : 0.25 }}
                  transition={{ duration: 0.4 }}
                  style={{ height: 2, borderRadius: 1 }}
                />
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Back to top — fixed bottom right */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full border border-black/20 dark:border-white/20 bg-background flex items-center justify-center hover:border-black dark:hover:border-white transition-colors duration-300 group"
          >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-foreground transition-transform duration-300 group-hover:-translate-y-0.5">
          <polyline points="18 15 12 9 6 15" />
        </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
