import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useTranslation } from '@/hooks/useTranslation';
import StyledButton from "./ui/styled-button";

const ContactSection = () => {
  const { t } = useTranslation();
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    details: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add logic here to send the form data
  };

  return (
    <section className="w-full py-20 px-4 sm:px-6 md:px-10">
      {/* Top Separator */}
      <div className="h-[2px] bg-black mb-20 opacity-100" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-24">
        {/* Left Column: Greyed Title */}
        <div className="lg:col-span-4">
          <h3
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-300 dark:text-gray-700 tracking-tight"
            style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
          >
            {t('contact.subheading')}
          </h3>
        </div>

        {/* Right Column: Main Header & Form */}
        <div className="lg:col-span-8 space-y-12">
          <div className="space-y-6">
            <h2
              className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-medium text-foreground tracking-tight leading-tight"
              style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
            >
              {t('contact.heading')}
            </h2>
            <p className="text-base sm:text-xl text-studio-gray max-w-2xl">
              {t('contact.description')}
            </p>
          </div>

          <div ref={formRef} className="bg-gray-50 dark:bg-gray-900/50 p-5 sm:p-8 md:p-12 rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-medium uppercase tracking-wider text-studio-gray">
                    {t('contact.form.name.label')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('contact.form.name.placeholder')}
                    className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 focus:border-black dark:focus:border-white transition-colors outline-none text-lg"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium uppercase tracking-wider text-studio-gray">
                    {t('contact.form.email.label')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact.form.email.placeholder')}
                    className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 focus:border-black dark:focus:border-white transition-colors outline-none text-lg"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium uppercase tracking-wider text-studio-gray">
                  {t('contact.form.projectType.label')}
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 focus:border-black dark:focus:border-white transition-colors outline-none text-lg appearance-none cursor-pointer"
                  required
                >
                  <option value="" disabled>{t('contact.form.projectType.placeholder')}</option>
                  <option value="web">{t('contact.form.projectType.options.webdev')}</option>
                  <option value="mobile">{t('contact.form.projectType.options.mobile')}</option>
                  <option value="design">{t('contact.form.projectType.options.uiux')}</option>
                  <option value="brand">{t('contact.form.projectType.options.fullstack')}</option>
                  <option value="other">{t('contact.form.projectType.options.other')}</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium uppercase tracking-wider text-studio-gray">
                  {t('contact.form.details.label')}
                </label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder={t('contact.form.details.placeholder')}
                  rows={4}
                  className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 focus:border-black dark:focus:border-white transition-colors outline-none text-lg resize-none"
                  required
                />
              </div>

              <div className="pt-4">
                <StyledButton type="submit" className="!min-w-0 !px-10 !py-3 !h-auto !text-base md:!px-12 md:!py-3 md:!text-base">
                  {t('contact.form.submit')}
                </StyledButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
