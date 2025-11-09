export const en = {
  navbar: {
    brand: "Pierre",
    menu: "Menu",
    close: "Close",
    links: {
      home: "Home",
      projects: "Projects",
      services: "Services",
      contact: "Contact",
    },
    social: {
      github: "GitHub",
      behance: "Behance",
      linkedin: "LinkedIn",
    },
  },
  hero: {
    title: "PIERRE",
    greeting: "Hey, I'm Pierre",
    role: "a Software Developer",
    location: "Based in Montréal",
    description: "I specialize in creating thoughtful and impactful digital experiences, collaborating with startups and leading brands",
    cta: "View Projects",
    profile: {
      name: "Pierre",
      title: "Software Developer",
      handle: "pierredevc",
      status: "Available",
      action: "Get in touch",
    },
  },
  technologies: {
    heading: "Technologies & Tools",
  },
  projects: {
    heading: "Projects",
    description: "A curated selection of my work showcasing innovative solutions across web development, mobile applications, and digital experiences. Each project represents a unique challenge solved with creativity and technical expertise.",
    items: {
      calendapp: {
        title: "CalendApp",
        category: "Web Application",
        year: "2025",
      },
      cryptotrade: {
        title: "CryptoTrade",
        category: "Web Application",
        year: "2025",
      },
    },
    details: {
      collaborators: "Collaborators",
      sourceCode: "Source Code",
      livePreview: "Live Preview",
      calendapp: {
        description: "CalendApp represents a modern approach to calendar management, focusing on simplicity and user experience. The application was designed to address the common pain points users face with traditional calendar apps.",
        featuresTitle: "CalendApp Features",
        features: {
          createEvents: {
            title: "Create Events and Invite People",
            description: "Effortlessly create and manage events with our intuitive interface. Set reminders, add locations, and invite participants with just a few taps.",
          },
          availabilities: {
            title: "Create Your Availabilities Easily",
            description: "Set your availability preferences with simple drag-and-drop controls. Define your working hours, break times, and personal commitments in seconds.",
          },
          realtime: {
            title: "Get Real-Time Availability",
            description: "See everyone's availability instantly when planning meetings. No more back-and-forth emails or scheduling conflicts - find the perfect time slot for all participants.",
          },
          sync: {
            title: "Sync with Your Favorite Apps",
            description: "Seamlessly integrate with Google Calendar, Apple Calendar, and Microsoft Teams. Keep all your events synchronized across platforms without any manual work.",
          },
        },
      },
      cryptotrade: {
        description: "CryptoTrade is a risk-free crypto exchange simulator with real-time market data, virtual portfolio management, and transaction tracking—ideal for beginners learning the basics and experienced traders testing strategies without financial risk.",
        featuresTitle: "CryptoTrade Features",
        features: {
          portfolio: {
            title: "Dynamic Portfolio Tracking",
            description: "Efficiently track your cryptocurrency portfolio with real-time updates and performance analytics.",
          },
          simulation: {
            title: "Risk-Free Trading Simulation",
            description: "Practice trading without risking real money with our risk-free simulation feature.",
          },
          custom: {
            title: "Custom Crypto Creation",
            description: "Create your own cryptocurrencies and add them to your portfolio for analysis and trading.",
          },
          analysis: {
            title: "Professional Analysis Tools",
            description: "Access advanced analytics, charts, and reports to make informed trading decisions.",
          },
        },
      },
    },
  },
  services: {
    heading: "Services",
    description: "Comprehensive digital solutions tailored to your needs. From concept to deployment, delivering exceptional results across all touchpoints.",
    items: {
      fullstack: {
        title: "Full Stack Development",
        description: "End-to-end web solutions with modern frameworks and scalable architectures.",
      },
      uiux: {
        title: "UI/UX Design",
        description: "User-centered design solutions that deliver exceptional digital experiences.",
      },
      mobile: {
        title: "Mobile Development",
        description: "Native and cross-platform mobile applications for iOS and Android.",
      },
      brand: {
        title: "Brand Development",
        description: "Strategic brand identity design and visual communication solutions.",
      },
    },
  },
  contact: {
    heading: "Contact",
    description: "Ready to bring your ideas to life? Let's start a conversation about your next project. I'm here to help transform your vision into exceptional digital experiences.",
    form: {
      name: {
        label: "Name:",
        placeholder: "Enter your name",
      },
      email: {
        label: "Email:",
        placeholder: "Enter your email",
      },
      projectType: {
        label: "Project Type:",
        placeholder: "Select a project type",
        options: {
          webdev: "Web Development",
          mobile: "Mobile App",
          uiux: "UI/UX Design",
          fullstack: "Full-Stack Application",
          consulting: "Consulting",
          other: "Other",
        },
      },
      details: {
        label: "Project Details:",
        placeholder: "Tell me about your project, timeline, budget, and any specific requirements...",
      },
      submit: "SEND MESSAGE",
    },
  },
  footer: {
    brand: "Pierre",
    tagline: "A software developer focused on thoughtful design and meaningful experiences.",
    copyright: "© 2024 PierreDevC. All rights reserved.",
    columns: {
      projects: {
        heading: "PROJECTS",
        items: {
          calendapp: "CalendApp",
          cryptotrade: "CryptoTrade",
        },
      },
      services: {
        heading: "SERVICES",
        items: {
          webdev: "Web Development",
          uiux: "UI/UX Design",
          mobile: "Mobile Development",
          brand: "Brand Development",
        },
      },
      contact: {
        heading: "CONTACT",
        email: "pscypre@gmail.com",
        phone: "+1 (438) 926-1340",
        location: "Montreal, Canada",
      },
      follow: {
        heading: "FOLLOW",
        github: "Github",
        behance: "Behance",
        linkedin: "LinkedIn",
      },
    },
    legal: {
      privacy: "Privacy",
      terms: "Terms",
    },
  },
};

export type TranslationKeys = typeof en;
