const Footer = () => {

  return (
    <footer className="py-40 bg-studio-charcoal text-studio-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
          {/* Projects Column */}
          <div 
            className="space-y-6"
            style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
          >
            <div className="text-studio-gray text-sm">PROJECTS</div>
            <div className="space-y-3 text-studio-light">
              <div className="hover:text-studio-gray transition-colors cursor-pointer">CalendApp</div>
              <div className="hover:text-studio-gray transition-colors cursor-pointer">CryptoTrade</div>
            </div>
          </div>

          {/* Skills & Services Column */}
          <div 
            className="space-y-6"
            style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
          >
            <div className="text-studio-gray text-sm">SERVICES</div>
            <div className="space-y-3 text-studio-light">
              <div className="hover:text-studio-gray transition-colors">Web Development</div>
              <div className="hover:text-studio-gray transition-colors">UI/UX Design</div>
              <div className="hover:text-studio-gray transition-colors">Mobile Development</div>
              <div className="hover:text-studio-gray transition-colors">Brand Development</div>
            </div>
          </div>

          {/* Contact Column */}
          <div 
            className="space-y-6"
            style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
          >
            <div className="text-studio-gray text-sm">CONTACT</div>
            <div className="space-y-3 text-studio-light">
              <div className="hover:text-studio-gray transition-colors">pscypre@gmail.com</div>
              <div className="hover:text-studio-gray transition-colors">+1 (438) 926-1340</div>
              <div className="text-studio-gray">
                Montreal, Canada<br />
              </div>
            </div>
          </div>

          {/* Follow Column */}
          <div 
            className="space-y-6"
            style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
          >
            <div className="text-studio-gray text-sm">FOLLOW</div>
            <div className="space-y-3">
              <a href="#" className="block text-studio-light hover:text-studio-gray transition-colors">
                Github
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

        {/* Pierre Branding Section */}
        <div className="border-t border-studio-gray/20 mt-16 pt-8" style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}>
          <div className="text-center mb-8">
            <div className="text-3xl font-bold">
              Pierre
            </div>
            <p className="text-studio-gray leading-relaxed mt-4 max-w-md mx-auto">
              A software developer focused on thoughtful design and meaningful experiences .
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-studio-gray">
            <div>© 2024 PierreDevC. All rights reserved.</div>
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