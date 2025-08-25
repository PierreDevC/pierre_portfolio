const Footer = () => {
  return (
    <footer className="py-20 bg-studio-charcoal text-studio-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="space-y-6">
            <div className="text-3xl font-bold">
              Kanso<sup className="text-sm">®</sup> Studio
            </div>
            <p className="text-studio-gray leading-relaxed">
              A creative studio focused on thoughtful design and meaningful experiences.
            </p>
          </div>

          <div className="space-y-6">
            <div className="text-studio-gray text-sm">CONTACT</div>
            <div className="space-y-3 text-studio-light">
              <div>hello@kansostudio.com</div>
              <div>+1 (555) 123-4567</div>
              <div className="text-studio-gray">
                San Francisco, CA<br />
                New York, NY
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-studio-gray text-sm">FOLLOW</div>
            <div className="space-y-3">
              <a href="#" className="block text-studio-light hover:text-studio-gray transition-colors">
                Instagram
              </a>
              <a href="#" className="block text-studio-light hover:text-studio-gray transition-colors">
                Behance
              </a>
              <a href="#" className="block text-studio-light hover:text-studio-gray transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-studio-gray/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-studio-gray">
            <div>© 2024 Kanso Studio. All rights reserved.</div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-studio-light transition-colors">Privacy</a>
              <a href="#" className="hover:text-studio-light transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;