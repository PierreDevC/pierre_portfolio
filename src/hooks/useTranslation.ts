import { useLanguageContext } from '../contexts/LanguageContext';
import { en } from '../translations/en';
import { fr } from '../translations/fr';

const translations = {
  en,
  fr,
};

export const useTranslation = () => {
  const { language } = useLanguageContext();

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to key if translation not found
        console.warn(`Translation missing for key: ${key} in language: ${language}`);
        return key;
      }
    }

    return typeof value === 'string' ? value : key;
  };

  return { t, language };
};
