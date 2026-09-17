import { useTranslation } from 'react-i18next';
import { PillarService, LifecycleStage, StatItem } from '../types';

export const useContent = () => {
  const { t } = useTranslation();

  const PILLARS_DATA: PillarService[] = [
    {
      id: 'juridique-fiscal',
      name: t('pillars.juridique.name', 'Juridique & Fiscal'),
      lead: 'Ibrahima Souleymane MBAYE',
      shortDesc: t('pillars.juridique.desc', 'Sécurisation juridique exhaustive, conformité réglementaire et ingénierie fiscale au Sénégal et dans la zone OHADA.'),
      keyHighlight: t('pillars.juridique.highlight', 'Expertise reconnue en droit des affaires et contentieux complexes'),
      iconName: 'Scale',
      services: t('pillars.juridique.services', { returnObjects: true, defaultValue: [
        'Droit des sociétés & gouvernance',
        'Fiscalité des groupes & prix de transfert',
        'Négociation et rédaction de contrats complexes',
        'Droit du travail & restructurations sociales',
        'Contentieux d’affaires & arbitrage OHADA',
        'Propriété intellectuelle & actifs immatériels',
        'Support réglementaire & conformité sectorielle (Mines, Énergie, Telecoms)',
      ]}) as string[],
    },
    {
      id: 'corporate-finance',
      name: t('pillars.finance.name', 'Corporate Finance'),
      lead: 'Serigne Saliou Mbacke GUEYE',
      shortDesc: t('pillars.finance.desc', 'Modélisation avancée, levées de fonds et opérations capitalistiques stratégiques pour entreprises en forte croissance.'),
      keyHighlight: t('pillars.finance.highlight', 'Plus de 100 transactions conseillées dans l’espace UEMOA'),
      iconName: 'TrendingUp',
      services: t('pillars.finance.services', { returnObjects: true, defaultValue: [
        'Ingénierie financière & modélisation',
        'Évaluation d’entreprise & fairness opinions',
        'Levées de fonds (Equity, Dette privée, Mezzanine)',
        'Montages capitalistiques & LBO / MBO',
        'Restructurations de bilans & dettes bancaires',
        'Prises de participation & joint-ventures',
      ]}) as string[],
    },
    {
      id: 'technologie-ia',
      name: t('pillars.tech.name', 'Technologie & IA'),
      lead: 'Future Practice — LegalTech & FinTech',
      isFuturePractice: true,
      shortDesc: t('pillars.tech.desc', 'Anticipation des ruptures technologiques, conformité des algorithmes et sécurisation des actifs numériques.'),
      keyHighlight: t('pillars.tech.highlight', 'Pôle d’avant-garde dédié à la souveraineté numérique africaine'),
      iconName: 'Cpu',
      services: t('pillars.tech.services', { returnObjects: true, defaultValue: [
        'Transformation digitale des fonctions support',
        'Due Diligence technologique & cybersécurité',
        'Automatisation des processus juridiques & fiscaux',
        'Alignement stratégique & gouvernance de l’IA',
      ]}) as string[],
    },
  ];

  const LIFECYCLE_STAGES: LifecycleStage[] = t('lifecycle', { returnObjects: true, defaultValue: [
    {
      id: 'creation',
      name: 'Création',
      tagline: 'Poser des fondations institutionnelles, fiscales et financières inattaquables.',
      voletFinancier: {
        title: 'Volet Financier',
        description: 'Cadrage de la viabilité et structuration initiale du capital.',
        points: [
          'Élaboration du business plan financier prévisionnel',
          'Dimensionnement des besoins en fonds de roulement (BFR)',
          'Structuration du capital d’amorçage & apports en compte courant',
        ],
      },
      voletJuridique: {
        title: 'Volet Juridique',
        description: 'Choix de structure et formalités institutionnelles intégrales.',
        points: [
          'Choix de la forme sociale optimale (SAS, SA, SARL OHADA)',
          'Rédaction sur-mesure des statuts constitutifs',
          'Immatriculation RCCM, attribution NINEA & formalités de publicité légale',
        ],
      },
      voletFiscal: {
        title: 'Volet Fiscal',
        description: 'Optimisation dès le premier jour d’activité.',
        points: [
          'Sélection du régime d’imposition le plus avantageux',
          'Agrément au Code des Investissements du Sénégal (exonérations fiscales)',
          'Mise en place du calendrier fiscal & déclarations obligatoires',
        ],
      },
    },
    {
      id: 'structuration',
      name: 'Structuration',
      tagline: 'Consolider les opérations, la gouvernance et les flux intra-groupe.',
      voletFinancier: {
        title: 'Volet Financier',
        description: 'Outils de pilotage et rentabilité opérationnelle.',
        points: [
          'Mise en place de tableaux de bord financiers et KPI de gestion',
          'Audit de rentabilité par centre de profit',
          'Optimisation de la trésorerie et relation bancaire',
        ],
      },
      voletJuridique: {
        title: 'Volet Juridique',
        description: 'Cadre contractuel et gouvernance des instances de direction.',
        points: [
          'Mise en place des délégations de pouvoirs & gouvernance',
          'Standardisation des contrats commerciaux et conditions générales',
          'Audit de conformité sociale et contrats de travail cadres',
        ],
      },
      voletFiscal: {
        title: 'Volet Fiscal',
        description: 'Cohérence transfrontalière et politique fiscale de groupe.',
        points: [
          'Documentation de prix de transfert et flux intra-groupe',
          'Gestion des retenues à la source selon les conventions fiscales UEMOA',
          'Revue fiscale annuelle préventive et sécurisation des déductions',
        ],
      },
    },
    {
      id: 'levee-de-fonds',
      name: 'Levée de Fonds',
      tagline: 'Aligner valorisation financière, pacte d’actionnaires et neutralité fiscale.',
      voletFinancier: {
        title: 'Volet Financier',
        description: 'Valorisation & Structuration financière',
        points: [
          'Évaluation multi-critères (DCF, Multiples, Scorecard)',
          'Préparation de l’Info Memo & du Data Room financier',
          'Négociation des termsheets & structuration des tranches de financement',
        ],
      },
      voletJuridique: {
        title: 'Volet Juridique',
        description: 'Pacte d’actionnaires & Due diligence investisseurs',
        points: [
          'Rédaction du pacte d’actionnaires (clauses de liquidité, ratchet, drag/tag)',
          'Émission d’instruments complexes (BSA, obligations convertibles)',
          'Accompagnement lors de la Due Diligence juridique & closing',
        ],
      },
      voletFiscal: {
        title: 'Volet Fiscal',
        description: 'Analyse d’exposition fiscale',
        points: [
          'Audit d’exposition fiscale pré-investissement',
          'Impact fiscal des plus-values d’émission et droits d’enregistrement',
          'Optimisation du schéma de détention post-entrée des investisseurs',
        ],
      },
    },
    {
      id: 'transaction',
      name: 'Transaction',
      tagline: 'M&A, cessions, acquisitions et partenariats stratégiques majeurs.',
      voletFinancier: {
        title: 'Volet Financier',
        description: 'Due diligence financière & closing accounts',
        points: [
          'Due diligence financière acquéreur / vendeur (Vendor DD)',
          'Modélisation des synergies et impact sur la rentabilité future',
          'Calcul des ajustements de dette nette et BFR cible au closing',
        ],
      },
      voletJuridique: {
        title: 'Volet Juridique',
        description: 'Protocole de cession (SPA) & Garanties d’actif/passif',
        points: [
          'Négociation du contrat de cession d’actions / d’actifs (SPA)',
          'Rédaction de la convention de Garantie d’Actif et de Passif (GAP)',
          'Obtention des autorisations réglementaires (Contrôle des concentrations UEMOA)',
        ],
      },
      voletFiscal: {
        title: 'Volet Fiscal',
        description: 'Fiscalité des plus-values & structuration de l’acquisition',
        points: [
          'Structuration de holding d’acquisition et déductibilité des intérêts',
          'Traitement des plus-values de cession au Sénégal et à l’international',
          'Sécurisation des exonérations fiscales sous le régime de fusion',
        ],
      },
    },
    {
      id: 'restructuration',
      name: 'Restructuration',
      tagline: 'Réorganisation capitalistique, rééchelonnement et renouveau stratégique.',
      voletFinancier: {
        title: 'Volet Financier',
        description: 'Renégociation de dettes bancaires & plans de continuité',
        points: [
          'Diagnostic financier indépendant & test de liquidité',
          'Négociation de moratoires et réaménagement des dettes financières',
          'Cession d’actifs non stratégiques pour désendettement rapide',
        ],
      },
      voletJuridique: {
        title: 'Volet Juridique',
        description: 'Procédures préventives OHADA & réorganisation statutaire',
        points: [
          'Mise en œuvre du règlement préventif et de la conciliation OHADA',
          'Restructuration du capital social (coup d’accordéon, réduction de capital)',
          'Gestion des plans de sauvegarde de l’emploi et aspects sociaux',
        ],
      },
      voletFiscal: {
        title: 'Volet Fiscal',
        description: 'Traitement des abandons de créances & reports déficitaires',
        points: [
          'Régime fiscal des abandons de créances à caractère financier ou commercial',
          'Préservation des reports déficitaires lors des restructurations',
          'Optimisation des coûts fiscaux liés aux fusions-absorptions',
        ],
      },
    },
  ] }) as LifecycleStage[];

  const STATS_DATA: StatItem[] = t('stats', { returnObjects: true, defaultValue: [
    {
      value: '12+',
      label: 'Départements',
      sublabel: 'Pratiques sectorielles & transversales',
    },
    {
      value: '100+',
      label: 'Transactions',
      sublabel: 'Conseillées dans l’espace OHADA/UEMOA',
    },
    {
      value: '95%',
      label: 'Taux de Réussite',
      sublabel: 'Sur les dossiers contentieux et levées accompagnées',
    },
  ] }) as StatItem[];

  const LEGAL_INFO = {
    entity: 'LegalEase Partners SAS',
    capital: '1 000 000 FCFA',
    siege: 'Villa N°112B Centenaire, Dakar, Sénégal',
    rccm: 'SN DKR 2026 B 16076',
    ninea: '013018818 2A5',
    cadre: t('legal_info.cadre', 'Droit sénégalais, Actes uniformes OHADA, Directives UEMOA'),
    contactEmail: 'contact@legalease-partners.sn',
    phone: '+221 33 820 00 00',
    slogan: t('hero.title', 'Le droit, la fiscalité, la finance — une seule signature.'),
  };

  return { PILLARS_DATA, LIFECYCLE_STAGES, STATS_DATA, LEGAL_INFO };
};
