import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import { blur } from '@/components/AnimatedHeader/animations';
import AnimatedHeader from "@/components/AnimatedHeader";
import Footer from "@/components/Footer";
import calendappVideo from "@/assets/calendapp.mp4";

const CalendApp = () => {
  const { isMenuOpen } = useNavigation();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <AnimatedHeader />
      <motion.div
        variants={blur}
        animate={isMenuOpen ? "open" : "closed"}
        className="relative will-change-transform"
        style={{ transform: "translate3d(0, 0, 0)" }}
      >
        {/* Main Content Section */}
        <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              {/* Left Column */}
              <div className="space-y-6 md:space-y-8 text-center lg:text-left">
                {/* Large Title (similar to "PIERRE") */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-foreground leading-none"
                  style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
                >
                  CalendApp.
                </motion.h1>

                {/* Project Type and Year */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="space-y-2"
                >
                  <div className="text-base md:text-lg text-gray-600" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>Web Application / 2024</div>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-wrap gap-2 md:gap-3 justify-center lg:justify-start"
                >
                  <div className="px-3 md:px-4 py-2 bg-gray-300 text-gray-700 rounded-[35px] text-xs md:text-sm" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>SpringBoot</div>
                  <div className="px-3 md:px-4 py-2 bg-gray-300 text-gray-700 rounded-[35px] text-xs md:text-sm" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>Next.js</div>
                  <div className="px-3 md:px-4 py-2 bg-gray-300 text-gray-700 rounded-[35px] text-xs md:text-sm" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>PostgresSQL</div>
                  <div className="px-3 md:px-4 py-2 bg-gray-300 text-gray-700 rounded-[35px] text-xs md:text-sm" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>Apache Tomcat</div>
                </motion.div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col justify-center lg:justify-end items-center lg:items-end space-y-6 mt-8 lg:mt-0">
                {/* Project Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="max-w-md text-center lg:text-right"
                >
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
                    CalendApp represents a modern approach to calendar management, focusing on simplicity and user experience. 
                    The application was designed to address the common pain points users face with traditional calendar apps.
                  </p>
                </motion.div>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full max-w-sm lg:max-w-none lg:justify-end"
                >
                  <button className="px-6 md:px-8 py-3 bg-gray-500 text-white rounded-[35px] hover:bg-gray-600 transition-colors duration-300 text-sm md:text-base w-full sm:w-auto" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
                    Source Code
                  </button>
                  <button className="px-6 md:px-8 py-3 bg-black text-white rounded-[35px] hover:bg-gray-800 transition-colors duration-300 text-sm md:text-base w-full sm:w-auto" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
                    Live Preview
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Large Video Section */}
        <section className="pb-12 md:pb-20 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative overflow-hidden"
            >
              <video
                src={calendappVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl"
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="pb-12 md:pb-20 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-6 md:space-y-8">
              {/* Features Title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
                style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
              >
                CalendApp Features
              </motion.h3>

              {/* Features Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto"
              >
                <h4 className="text-lg md:text-xl font-medium text-gray-900 mb-3" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
                  Creating Events
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
                  Effortlessly create and manage events with our intuitive interface. Set reminders, add locations, and invite participants with just a few taps.
                </p>
              </motion.div>

              {/* Feature Images */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto mt-8"
              >
                <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg">
                  <img
                    src="/src/assets/calendar.png"
                    alt="Calendar Interface"
                    className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg">
                  <img
                    src="/src/assets/estate_hub.png"
                    alt="Event Creation"
                    className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </motion.div>
    </div>
  );
};

export default CalendApp;
