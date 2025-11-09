import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';

export default function NavigationFooter() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:gap-16 mt-8">
      <ul className="list-none p-0 m-0 flex flex-row gap-4">
        <li className="text-gray-600 text-sm hover:text-black transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); window.open('https://github.com/PierreDevC', '_blank'); }}>{t('navbar.social.github')}</li>
        <li className="text-gray-600 text-sm hover:text-black transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); window.open('https://www.behance.net/pierre-cypr', '_blank'); }}>{t('navbar.social.behance')}</li>
        <li className="text-gray-600 text-sm hover:text-black transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); window.open('https://www.linkedin.com/in/pierre-sylvestre-cypre/', '_blank'); }}>{t('navbar.social.linkedin')}</li>
      </ul>
    </div>
  );
}
