import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.items.uiux.title'),
      description: t('services.items.uiux.description'),
    },
    {
      title: t('services.items.webdev.title'),
      description: t('services.items.webdev.description'),
    },
    {
      title: t('services.items.mobile.title'),
      description: t('services.items.mobile.description'),
    },
    {
      title: t('services.items.brand.title'),
      description: t('services.items.brand.description'),
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 md:px-10">
      {/* Top Separator */}
      <div className="h-[2px] bg-black mb-20 opacity-100" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
        {/* Left Column: Greyed Title */}
        <div className="lg:col-span-4">
          <h3 
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-300 dark:text-gray-700 tracking-tight sticky top-32"
            style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
          >
            {t('services.subheading')}
          </h3>
        </div>

        {/* Right Column: Main Header and Content */}
        <div className="lg:col-span-8 space-y-16">
          <h2 
            className="text-5xl md:text-7xl lg:text-8xl font-medium text-foreground tracking-tight leading-tight"
            style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
          >
            {t('services.heading')}
          </h2>

          <div className="space-y-0">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="h-[1px] bg-black/20 dark:bg-white/20 w-full" />
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-6 items-baseline group-hover:bg-gray-50 dark:group-hover:bg-gray-900/50 transition-colors px-4 rounded-xl -mx-4"
                >
                  <h4 
                    className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground"
                    style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
                  >
                    {service.title}
                  </h4>
                  <p 
                    className="text-lg md:text-xl lg:text-2xl font-bold text-foreground leading-relaxed"
                    style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
                  >
                    {service.description}
                  </p>
                </motion.div>
                {index === services.length - 1 && (
                  <div className="h-[1px] bg-black/20 dark:bg-white/20 w-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
