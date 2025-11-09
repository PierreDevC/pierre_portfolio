import { motion } from 'framer-motion';
import { useLanguageContext } from '../contexts/LanguageContext';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguageContext();
  const isEnglish = language === 'en';

  const toggleLanguage = () => {
    setLanguage(isEnglish ? 'fr' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center gap-2 px-1 py-1 bg-[hsl(var(--studio-charcoal))] border border-[hsl(var(--studio-border))] rounded-full transition-all duration-300 hover:border-[hsl(var(--studio-gray))]"
      aria-label="Toggle language"
    >
      {/* Background slider */}
      <motion.div
        className="absolute top-1 left-1 w-10 h-8 bg-[hsl(var(--studio-light))] rounded-full"
        animate={{
          x: isEnglish ? 0 : 48,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />

      {/* Labels */}
      <motion.span
        className={`relative z-10 w-10 h-8 flex items-center justify-center text-xs font-medium rounded-full transition-colors duration-300 ${
          isEnglish ? 'text-[hsl(var(--studio-charcoal))]' : 'text-[hsl(var(--studio-gray))]'
        }`}
        animate={{
          color: isEnglish ? 'hsl(var(--studio-charcoal))' : 'hsl(var(--studio-gray))',
        }}
      >
        EN
      </motion.span>
      <motion.span
        className={`relative z-10 w-10 h-8 flex items-center justify-center text-xs font-medium rounded-full transition-colors duration-300 ${
          !isEnglish ? 'text-[hsl(var(--studio-charcoal))]' : 'text-[hsl(var(--studio-gray))]'
        }`}
        animate={{
          color: !isEnglish ? 'hsl(var(--studio-charcoal))' : 'hsl(var(--studio-gray))',
        }}
      >
        FR
      </motion.span>
    </button>
  );
};
