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

                {/* Collaborators */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-3"
                >
                  <div className="text-sm md:text-base text-gray-600 text-center lg:text-left" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
                    Collaborators
                  </div>
                  <div className="flex flex-wrap gap-2 md:gap-3 justify-center lg:justify-start">
                    <a
                      href="https://github.com/orgs/coffee-only/people/Lililatortue"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 md:px-4 py-2 bg-black text-white rounded-[35px] text-xs md:text-sm hover:bg-gray-800 transition-colors duration-300"
                      style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
                    >
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Lililatortue
                    </a>
                    <a
                      href="https://github.com/colXavGig"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 md:px-4 py-2 bg-black text-white rounded-[35px] text-xs md:text-sm hover:bg-gray-800 transition-colors duration-300"
                      style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
                    >
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      colXavGig
                    </a>
                    <a
                      href="https://github.com/a3emond"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 md:px-4 py-2 bg-black text-white rounded-[35px] text-xs md:text-sm hover:bg-gray-800 transition-colors duration-300"
                      style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
                    >
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      a3emond
                    </a>
                  </div>
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
                className="w-full h-auto rounded-2xl md:rounded-3xl shadow-2xl md:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]"
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="pb-12 md:pb-20 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-12 md:space-y-16">
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

              {/* Feature 1: Creating Events */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="max-w-2xl mx-auto">
                  <h4 className="text-lg md:text-xl font-medium text-gray-900 mb-3" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
                    Create Events and Invite People
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
                    Effortlessly create and manage events with our intuitive interface. Set reminders, add locations, and invite participants with just a few taps.
                  </p>
                </div>
                <div className="max-w-2xl mx-auto">
                  <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg">
                    <img
                      src="/src/assets/calendar.png"
                      alt="Create Events Interface"
                      className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Feature 2: Availabilities */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="max-w-2xl mx-auto">
                  <h4 className="text-lg md:text-xl font-medium text-gray-900 mb-3" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
                    Create Your Availabilities Easily
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
                    Set your availability preferences with simple drag-and-drop controls. Define your working hours, break times, and personal commitments in seconds.
                  </p>
                </div>
                <div className="max-w-2xl mx-auto">
                  <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg">
                    <img
                      src="/src/assets/calendar.png"
                      alt="Availability Management"
                      className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Feature 3: Real-time Availability */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="max-w-2xl mx-auto">
                  <h4 className="text-lg md:text-xl font-medium text-gray-900 mb-3" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
                    Get Real-Time Availability
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
                    See everyone's availability instantly when planning meetings. No more back-and-forth emails or scheduling conflicts - find the perfect time slot for all participants.
                  </p>
                </div>
                <div className="max-w-2xl mx-auto">
                  <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg">
                    <img
                      src="/src/assets/calendar.png"
                      alt="Real-time Availability"
                      className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Feature 4: Seamless Sync */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="max-w-2xl mx-auto">
                  <h4 className="text-lg md:text-xl font-medium text-gray-900 mb-3" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
                    Sync with Your Favorite Apps
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
                    Seamlessly integrate with Google Calendar, Apple Calendar, and Microsoft Teams. Keep all your events synchronized across platforms without any manual work.
                  </p>
                </div>
                <div className="max-w-2xl mx-auto">
                  <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg">
                    <img
                      src="/src/assets/calendar.png"
                      alt="App Integration"
                      className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
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
