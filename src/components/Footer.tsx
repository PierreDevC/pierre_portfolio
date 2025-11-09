import { useTranslation } from '@/hooks/useTranslation';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-40 bg-studio-charcoal text-studio-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
          {/* Projects Column */}
          <div
            className="space-y-6"
            style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
          >
            <div className="text-studio-gray text-sm">{t('footer.columns.projects.heading')}</div>
            <div className="space-y-3 text-studio-light">
              <div className="hover:text-studio-gray transition-colors cursor-pointer">{t('footer.columns.projects.items.calendapp')}</div>
              <div className="hover:text-studio-gray transition-colors cursor-pointer">{t('footer.columns.projects.items.cryptotrade')}</div>
            </div>
          </div>

          {/* Skills & Services Column */}
          <div
            className="space-y-6"
            style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
          >
            <div className="text-studio-gray text-sm">{t('footer.columns.services.heading')}</div>
            <div className="space-y-3 text-studio-light">
              <div className="hover:text-studio-gray transition-colors">{t('footer.columns.services.items.webdev')}</div>
              <div className="hover:text-studio-gray transition-colors">{t('footer.columns.services.items.uiux')}</div>
              <div className="hover:text-studio-gray transition-colors">{t('footer.columns.services.items.mobile')}</div>
              <div className="hover:text-studio-gray transition-colors">{t('footer.columns.services.items.brand')}</div>
            </div>
          </div>

          {/* Contact Column */}
          <div
            className="space-y-6"
            style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
          >
            <div className="text-studio-gray text-sm">{t('footer.columns.contact.heading')}</div>
            <div className="space-y-3 text-studio-light">
              <div className="hover:text-studio-gray transition-colors">{t('footer.columns.contact.email')}</div>
              <div className="hover:text-studio-gray transition-colors">{t('footer.columns.contact.phone')}</div>
              <div className="text-studio-gray">
                {t('footer.columns.contact.location')}<br />
              </div>
            </div>
          </div>

          {/* Follow Column */}
          <div
            className="space-y-6"
            style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
          >
            <div className="text-studio-gray text-sm">{t('footer.columns.follow.heading')}</div>
            <div className="space-y-3">
              <a href="https://github.com/PierreDevC" target="_blank" rel="noopener noreferrer" className="block text-studio-light hover:text-studio-gray transition-colors">
                {t('footer.columns.follow.github')}
              </a>
              <a href="https://www.behance.net/pierre-cypr" target="_blank" rel="noopener noreferrer" className="block text-studio-light hover:text-studio-gray transition-colors">
                {t('footer.columns.follow.behance')}
              </a>
              <a href="https://www.linkedin.com/in/pierre-sylvestre-cypre/" target="_blank" rel="noopener noreferrer" className="block text-studio-light hover:text-studio-gray transition-colors">
                {t('footer.columns.follow.linkedin')}
              </a>
            </div>
          </div>
        </div>

        {/* Pierre Branding Section */}
        <div className="border-t border-studio-gray/20 mt-16 pt-8" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
          <div className="text-center mb-8">
            <div className="text-3xl font-bold">
              {t('footer.brand')}
            </div>
            <p className="text-studio-gray leading-relaxed mt-4 max-w-md mx-auto">
              {t('footer.tagline')}
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-studio-gray">
            <div>{t('footer.copyright')}</div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-studio-light transition-colors">{t('footer.legal.privacy')}</a>
              <a href="#" className="hover:text-studio-light transition-colors">{t('footer.legal.terms')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;