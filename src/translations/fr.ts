import { TranslationKeys } from './en';

export const fr: TranslationKeys = {
  navbar: {
    brand: "Pierre",
    menu: "Menu",
    close: "Fermer",
    links: {
      home: "Accueil",
      projects: "Projets",
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
    title: "Pierre",
    greeting: "Salut, je suis Pierre",
    role: "un Développeur & Designer",
    location: "Basé à Montréal",
    description: "Je suis spécialisé dans la création de solutions digitales pensées et impactantes, en collaborant avec des startups et des marques leaders.",
    cta: "Me Contacter",
    profile: {
      name: "Pierre",
      title: "Développeur Logiciel",
      handle: "pierredevc",
      status: "Disponible",
      action: "Me contacter",
    },
  },
  technologies: {
    heading: "Technologies & Outils",
  },
  projects: {
    heading: "Projets sur lesquels j'ai travaillé",
    subheading: "Projets Vedettes",
    description: "Une sélection de mes réalisations qui illustrent des solutions innovantes en développement web, applications mobiles et expériences digitales. Chaque projet représente un défi unique résolu avec créativité et expertise technique.",
    items: {
      mortwise: {
        title: "MortWise",
        category: "Application Mobile",
        kind: "Hypothèques",
        year: "2025",
      },
      calendapp: {
        title: "CalendApp",
        category: "Application Web",
        kind: "Productivité",
        year: "2025",
      },
      cryptotrade: {
        title: "CryptoTrade",
        category: "Application Web",
        kind: "Cryptomonnaie",
        year: "2025",
      },
    },
    details: {
      collaborators: "Collaborateurs",
      sourceCode: "Code Source",
      livePreview: "Aperçu en Direct",
      mortwise: {
        description: "MortWise aide les utilisateurs à comprendre ce qu'ils peuvent se permettre, à modéliser leurs paiements et à explorer des stratégies pour rembourser leur hypothèque plus rapidement — sans vérification de crédit ni rendez-vous avec un prêteur. Il dispose d'un système de scénarios unifié où les données circulent sans friction entre tous les outils.",
        featuresTitle: "Fonctionnalités de MortWise",
        features: {
          prequalification: {
            title: "Outil de Préqualification",
            description: "Assistant guidé qui estime le prix d'achat maximal en fonction des revenus, des dettes, du score de crédit et des règles canadiennes de prêt (ratios ABD/ATD, test de résistance).",
          },
          calculator: {
            title: "Calculateur Hypothécaire",
            description: "Calculateur dynamique avec curseurs pour le paiement, le montant, le taux d'intérêt, l'amortissement et l'hypothèque inversée, avec résultats en temps réel et visualisation en graphique circulaire.",
          },
          simulator: {
            title: "Simulateur de Scénarios",
            description: "Modélisez des paiements forfaitaires, des changements de taux, des refinancements et des pauses de paiement pour voir leur impact sur la durée de remboursement et les intérêts totaux.",
          },
          fhsa: {
            title: "Calculateur CELIAPP",
            description: "Projette le solde du Compte d'épargne libre d'impôt pour l'achat d'une première propriété à une date cible, incluant les économies d'impôt et les retraits dans le cadre du Régime d'accession à la propriété (RAP).",
          },
        },
      },
      calendapp: {
        description: "CalendApp représente une approche moderne de la gestion de calendrier, axée sur la simplicité et l'expérience utilisateur. L'application a été conçue pour résoudre les problèmes courants rencontrés avec les applications de calendrier traditionnelles.",
        featuresTitle: "Fonctionnalités de CalendApp",
        features: {
          createEvents: {
            title: "Créez des Événements et Invitez des Participants",
            description: "Créez et gérez facilement vos événements grâce à notre interface intuitive. Définissez des rappels, ajoutez des emplacements et invitez des participants en quelques clics.",
          },
          availabilities: {
            title: "Créez Vos Disponibilités Facilement",
            description: "Définissez vos préférences de disponibilité avec de simples contrôles glisser-déposer. Configurez vos heures de travail, pauses et engagements personnels en quelques secondes.",
          },
          realtime: {
            title: "Obtenez les Disponibilités en Temps Réel",
            description: "Visualisez instantanément la disponibilité de chacun lors de la planification de réunions. Fini les allers-retours par email ou les conflits d'horaires - trouvez le créneau parfait pour tous les participants.",
          },
          sync: {
            title: "Synchronisez avec Vos Applications Favorites",
            description: "Intégrez-vous parfaitement avec Google Calendar, Apple Calendar et Microsoft Teams. Gardez tous vos événements synchronisés entre les plateformes sans aucun travail manuel.",
          },
        },
      },
      cryptotrade: {
        description: "CryptoTrade est un simulateur d'échange crypto sans risque avec des données de marché en temps réel, gestion de portefeuille virtuel et suivi des transactions—idéal pour les débutants qui apprennent les bases et les traders expérimentés qui testent des stratégies sans risque financier.",
        featuresTitle: "Fonctionnalités de CryptoTrade",
        features: {
          portfolio: {
            title: "Suivi Dynamique du Portefeuille",
            description: "Suivez efficacement votre portefeuille de cryptomonnaies avec des mises à jour en temps réel et des analyses de performance détaillées.",
          },
          simulation: {
            title: "Simulation de Trading Sans Risque",
            description: "Pratiquez le trading sans risquer d'argent réel grâce à notre fonctionnalité de simulation totalement sécurisée.",
          },
          custom: {
            title: "Création de Crypto Personnalisées",
            description: "Créez vos propres cryptomonnaies et ajoutez-les à votre portefeuille pour analyse et trading expérimental.",
          },
          analysis: {
            title: "Outils d'Analyse Professionnels",
            description: "Accédez à des analyses avancées, des graphiques détaillés et des rapports complets pour prendre des décisions éclairées.",
          },
        },
      },
    },
  },
  services: {
    heading: "Ce que je fais et comment je peux aider",
    subheading: "Services",
    items: {
      uiux: {
        title: "01 Design UX/UI",
        description: "Création d'interfaces centrées sur l'utilisateur, à la fois esthétiques et fonctionnelles.",
      },
      webdev: {
        title: "02 Développement Web",
        description: "Construction d'applications web évolutives et performantes utilisant des technologies modernes.",
      },
      mobile: {
        title: "03 Apps Mobiles",
        description: "Développement d'expériences mobiles multiplateformes avec des performances natives.",
      },
      brand: {
        title: "04 Marque & Marketing",
        description: "Création d'identités visuelles uniques et de campagnes marketing stratégiques qui résonnent avec votre audience.",
      },
    },
  },
  contact: {
    heading: "Me contacter ici",
    subheading: "Contact",
    description: "Prêt à donner vie à vos idées ? Entamons une conversation sur votre prochain projet.",
    form: {
      name: {
        label: "Nom :",
        placeholder: "Entrez votre nom",
      },
      email: {
        label: "Email :",
        placeholder: "Entrez votre email",
      },
      projectType: {
        label: "Type de Projet :",
        placeholder: "Sélectionnez un type de projet",
        options: {
          webdev: "Développement Web",
          mobile: "Application Mobile",
          uiux: "Design UI/UX",
          fullstack: "Application Full-Stack",
          consulting: "Consultation",
          other: "Autre",
        },
      },
      details: {
        label: "Détails du Projet :",
        placeholder: "Parlez-moi de votre projet, des délais, du budget et de vos exigences spécifiques...",
      },
      submit: "ENVOYER LE MESSAGE",
    },
  },
  footer: {
    brand: "Pierre",
    tagline: "Un développeur logiciel passionné par le design réfléchi et les expériences significatives.",
    copyright: "© 2026 PierreDevC. Tous droits réservés.",
    columns: {
      projects: {
        heading: "PROJETS",
        items: {
          mortwise: "MortWise",
          calendapp: "CalendApp",
          cryptotrade: "CryptoTrade",
        },
      },
      services: {
        heading: "SERVICES",
        items: {
          webdev: "Développement Web",
          uiux: "Design UI/UX",
          mobile: "Développement Mobile",
          brand: "Développement de Marque",
        },
      },
      contact: {
        heading: "CONTACT",
        email: "pscypre@gmail.com",
        phone: "+1 (438) 926-1340",
        location: "Montréal, Canada",
      },
      follow: {
        heading: "SUIVRE",
        github: "Github",
        behance: "Behance",
        linkedin: "LinkedIn",
      },
    },
    legal: {
      privacy: "Confidentialité",
      terms: "Conditions",
    },
  },
};
