import {
  Search,
  ClipboardCheck,
  Target,
} from "lucide-react";

export const profile = {
  fullName: "Chivez FOKAM BEKO",
  title: "Étudiante en BUT III GEA – Gestion Comptable, Fiscale et Financière",
  tagline:
    "Je recherche une alternance en Comptabilité, Contrôle et Audit afin de renforcer mes compétences en entreprise.",
  email: "fokamchivez4@gmail.com",
  phone: "07 59 29 19 72",
  location: "Sarcelles, France",
  cvUrl: "/cv/cv-chivez.pdf",
  photo: "/images/chivez.jpg",
};

export const navLinks = [
  { label: "Accueil", href: "#home" },
  { label: "À propos", href: "#about" },
  { label: "Expériences", href: "#experiences" },
  { label: "Compétences", href: "#skills" },
   { label: "Formation", href: "#education" },
  { label: "Projets", href: "#projects" },
  { label: "CV", href: "#cv" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "BUT GEA", label: "Formation" },
  { value: "GCF", label: "Parcours" },
  { value: "CCA", label: "Objectif" },
];

export const experiences = [
  {
    company: "CAF de Saint-Denis — Comité Social et Économique",
    role: "Stage en comptabilité",
    period: "Février 2026 – Août 2026",
    location: "Saint-Denis, France",
    logo: "/images/logos/caf-93.jpg",
    missions: [
      "Saisie des opérations comptables liées aux activités du CSE",
      "Participation à la préparation des documents de suivi budgétaire",
      "Réalisation de rapprochements bancaires",
      "Aide au contrôle et au suivi des dépenses du CSE",
      "Classement et archivage des pièces comptables",
    ],
  },
  {
    company: "AFG Bank Cameroun",
    role: "Stage en banque",
    period: "Mars 2025 – Août 2025",
    location: "Yaoundé, Cameroun",
    logo: "/images/logos/afg-bank.png",
    missions: [
      "Assistance aux chargés de clientèle dans la gestion des dossiers de crédit",
      "Participation aux ouvertures de comptes",
      "Promotion des produits et services bancaires",
      "Mise à jour des informations clients",
      "Accueil et orientation des clients particuliers et professionnels",
    ],
  },
  {
    company: "Phoenix Consulting Group",
    role: "Stagiaire analyste financier junior",
    period: "Septembre 2023 – Février 2025",
    location: "Yaoundé, Cameroun",
    logo: "/images/logos/phoenix-consulting.jpg",
    missions: [
      "Participation à l’élaboration des Déclarations Statistiques et Fiscales",
      "Montage de dossiers de demandes de financement auprès des banques",
      "Collecte et analyse des données financières des clients",
      "Recherche de nouveaux clients",
    ],
  },
  {
    company: "Afriland First Bank Cameroun",
    role: "Stage en banque",
    period: "Juillet 2022 – Août 2022",
    location: "Yaoundé, Cameroun",
    logo: "/images/logos/afriland-first-bank.png",
    missions: [
      "Accueil et orientation de la clientèle",
      "Traitement des dossiers de crédit",
      "Vente des produits bancaires",
    ],
  },
];

export const skills = [
  {
    icon: Search,
    title: "Analyser",
    color: "blue",
    description:
      "Analyser les données comptables, fiscales et financières afin d'évaluer la situation d'une organisation et identifier les axes d'amélioration.",
    items: [
      "Analyse des états financiers",
      "Diagnostic financier",
      "Contrôle de cohérence des données comptables",
      "Interprétation des indicateurs de performance",
    ],
  },

  {
    icon: ClipboardCheck,
    title: "Décider",
    color: "green",
    description:
      "Contribuer à la prise de décision grâce à la production d'informations fiables et à l'évaluation des impacts financiers et fiscaux.",
    items: [
      "Élaboration de tableaux de bord",
      "Analyse des coûts et de la rentabilité",
      "Prévisions budgétaires",
      "Aide à la décision stratégique",
    ],
  },

  {
    icon: Target,
    title: "Piloter",
    color: "orange",
    description:
      "Piloter et suivre l'activité financière de l'organisation en assurant le respect des objectifs et des procédures.",
    items: [
      "Gestion budgétaire",
      "Suivi de trésorerie",
      "Contrôle de gestion",
      "Coordination avec les différents services",
    ],
  },
];
export const projects = [
  {
    title: "SAE — Neyret Textile",
    category: "Analyse industrielle",
    description:
      "J’ai travaillé en équipe sur une problématique industrielle réelle chez Neyret Textile. Nous avons analysé un processus de production, identifié les limites et proposé des pistes d’amélioration.",
    points: [
      "Analyse de processus",
      "Diagnostic industriel",
      "Travail en équipe",
      "Recommandations",
    ],
  },
  {
    title: "SAE — Analyse financière d’une entreprise",
    category: "Finance d’entreprise",
    description:
      "J’ai réalisé une analyse financière à partir du bilan, du compte de résultat et d’indicateurs financiers afin d’évaluer la situation de l’entreprise.",
    points: ["Ratios financiers", "SIG", "Rentabilité", "Trésorerie"],
  },
];

export const sectionContent = {
  about: {
    title: "Un profil orienté comptabilité, finance et analyse.",
    description:
      "Je suis étudiante en BUT III GEA, parcours Gestion Comptable, Fiscale et Financière. Mon parcours m’a permis de développer des bases solides en comptabilité générale, fiscalité, analyse financière et gestion budgétaire. Je recherche aujourd’hui une alternance en Comptabilité, Contrôle et Audit pour évoluer dans un environnement professionnel structuré.",
  },
  experiences: {
    title: "Des expériences concrètes en comptabilité, banque et analyse financière.",
    description:
      "Mes expériences m’ont permis de travailler sur des missions variées : saisie comptable, suivi budgétaire, rapprochements bancaires, dossiers de crédit, relation client, déclarations fiscales et accompagnement de dossiers de financement. Ces expériences renforcent mon sens de la rigueur, de l’organisation et de l’analyse.",
  },
  skills: {
    title: "Des compétences utiles pour la comptabilité, le contrôle et l’audit.",
    description:
      "Je développe des compétences à la fois techniques et transversales : comptabilité, analyse financière, contrôle budgétaire, relation bancaire, exploitation des données et outils bureautiques. Mon objectif est de progresser dans un cadre professionnel où la fiabilité, la méthode et la précision sont essentielles.",
  },
  projects: {
    title: "Des projets universitaires appliqués à des situations réelles.",
    description:
      "À travers mes SAE, j’ai travaillé sur des problématiques concrètes : analyse d’un processus industriel chez Neyret Textile, diagnostic financier d’entreprise, étude des documents comptables, calcul d’indicateurs et formulation de recommandations. Ces projets m’ont appris à analyser, structurer et présenter des solutions professionnelles.",
  },
  cv: {
    title: "Mon CV, consultable directement.",
    description:
      "Vous pouvez visualiser mon CV sur cette page ou le télécharger en PDF afin de consulter mon parcours, mes expériences, mes formations et mes compétences.",
  },
  contact: {
    title: "Échangeons autour d’une opportunité.",
    description:
      "Je suis disponible pour une alternance en comptabilité, contrôle, audit ou finance. Vous pouvez me contacter directement via le formulaire ou par email.",
  },
  education: {
  title: "Une formation solide en gestion, finance et comptabilité.",
  description:
    "Mon parcours académique m’a permis de construire des bases solides en comptabilité, fiscalité, finance d’entreprise, contrôle de gestion, audit et analyse financière.",
},
};


export const education = [
  {
    title: "BUT III Gestion des Entreprises et des Administrations",
    school: "Université Sorbonne Paris Nord — IUT de Villetaneuse",
    period: "Septembre 2025 – Juin 2026",
    location: "Villetaneuse, France",
    details:
      "Parcours Gestion Comptable, Fiscale et Financière : comptabilité approfondie, fiscalité, finance et contrôle de gestion.",
  },
  {
    title: "Master I en Gouvernance Financière",
    school: "Université de Yaoundé II",
    period: "Octobre 2022 – Juin 2023",
    location: "Yaoundé, Cameroun",
    details:
      "Fiscalité des affaires, audit et contrôle interne, comptabilité approfondie, marché financier, gestion de portefeuille et finance d’entreprise.",
  },
  {
    title: "Licence en Monnaie, Banque et Finance",
    school: "Université de Yaoundé II",
    period: "Septembre 2020 – Juin 2021",
    location: "Yaoundé, Cameroun",
    details:
      "Marché financier, mathématiques financières, théorie financière, finance d’entreprise et théorie de la firme bancaire.",
  },
];