import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import { useTranslation } from '@/hooks/useTranslation';
import AnimatedHeader from "@/components/AnimatedHeader";
import Footer from "@/components/Footer";
import mortwiseVideo from "@/assets/calendapp.mp4";
import mortwise1 from "@/assets/calendapp1.png";
import mortwise2 from "@/assets/calendapp2.png";
import mortwise3 from "@/assets/calendapp3.png";
import mortwise4 from "@/assets/calendapp4.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import custom Swiper styles
import '@/components/CalendAppSwiper.css';

const MortWise = () => {
  const { isMenuOpen } = useNavigation();
  const { t } = useTranslation();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Feature slides data
  const featureSlides = [
    {
      id: 1,
      title: t('projects.details.mortwise.features.prequalification.title'),
      description: t('projects.details.mortwise.features.prequalification.description'),
      image: mortwise1,
      alt: "Pre-Qualification Tool"
    },
    {
      id: 2,
      title: t('projects.details.mortwise.features.calculator.title'),
      description: t('projects.details.mortwise.features.calculator.description'),
      image: mortwise2,
      alt: "Mortgage Calculator"
    },
    {
      id: 3,
      title: t('projects.details.mortwise.features.simulator.title'),
      description: t('projects.details.mortwise.features.simulator.description'),
      image: mortwise3,
      alt: "What-If Scenario Simulator"
    },
    {
      id: 4,
      title: t('projects.details.mortwise.features.fhsa.title'),
      description: t('projects.details.mortwise.features.fhsa.description'),
      image: mortwise4,
      alt: "FHSA Calculator"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <AnimatedHeader />
      <div className="relative will-change-transform pt-[100px] md:pt-[80px]">
        {/* Main Content Section */}
        <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              {/* Left Column */}
              <div className="space-y-6 md:space-y-8 text-center lg:text-left">
                {/* Large Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-foreground leading-none"
                  style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
                >
                  MortWise
                </motion.h1>

                {/* Project Type and Year */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="space-y-2"
                >
                  <div className="text-base md:text-lg text-gray-600 dark:text-gray-300" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>{t('projects.items.mortwise.category')} / {t('projects.items.mortwise.year')}</div>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-wrap gap-2 md:gap-3 justify-center lg:justify-start"
                >
                  <div className="px-3 md:px-4 py-2 bg-gray-300 text-gray-700 rounded-[35px] text-xs md:text-sm" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>Flutter</div>
                  <div className="px-3 md:px-4 py-2 bg-gray-300 text-gray-700 rounded-[35px] text-xs md:text-sm" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>Firebase</div>
                  <div className="px-3 md:px-4 py-2 bg-gray-300 text-gray-700 rounded-[35px] text-xs md:text-sm" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>Provider</div>
                  <div className="px-3 md:px-4 py-2 bg-gray-300 text-gray-700 rounded-[35px] text-xs md:text-sm" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>Dart</div>
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
                  <p className="text-gray-600 dark:text-gray-100 leading-relaxed text-sm md:text-base" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
                    {t('projects.details.mortwise.description')}
                  </p>
                </motion.div>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full max-w-sm lg:max-w-none lg:justify-end"
                >
                  <button className="px-6 md:px-8 py-3 bg-gray-500 text-white rounded-[35px] hover:bg-gray-600 transition-colors duration-300 text-sm md:text-base w-full sm:w-auto" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }} onClick={() => window.open("https://github.com/PierreDevC/flutter_testing.git", "_blank")}>
                    {t('projects.details.sourceCode')}
                  </button>
                  <button className="px-6 md:px-8 py-3 bg-black text-white rounded-[35px] hover:bg-gray-800 transition-colors duration-300 text-sm md:text-base w-full sm:w-auto" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }} onClick={() => window.open("https://mortwise.web.app/", "_blank")}>
                    {t('projects.details.livePreview')}
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
                src={mortwiseVideo}
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

        {/* Features Carousel Section */}
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
                {t('projects.details.mortwise.featuresTitle')}
              </motion.h3>

              {/* Features Carousel */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto"
              >
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  className="feature-swiper"
                >
                  {featureSlides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                      <div className="space-y-6">
                        {/* Feature Content */}
                        <div className="max-w-2xl mx-auto text-center">
                          <h4 className="text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100 mb-3" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
                            {slide.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-100 leading-relaxed text-sm md:text-base" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
                            {slide.description}
                          </p>
                        </div>

                        {/* Feature Image */}
                        <div className="max-w-5xl mx-auto">
                          <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg">
                            <img
                              src={slide.image}
                              alt={slide.alt}
                              className="w-full h-80 md:h-96 lg:h-[500px] object-cover transition-transform duration-500"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default MortWise;
