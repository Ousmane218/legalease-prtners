import { useTranslation } from 'react-i18next';
import { PillarService, LifecycleStage, StatItem } from '../types';

export const useContent = () => {
  const { t } = useTranslation();

  const PILLARS_DATA: PillarService[] = [
    {
      id: 'juridique-fiscal',
      name: t('pillars.juridique.name', 'Juridique & Fiscal'),
      lead: 'Ibrahima Souleymane MBAYE',
      shortDesc: t('pillars.juridique.desc', 'Accompagnement juridique, conformité et fiscalité au Sénégal et dans la zone OHADA.'),
      keyHighlight: t('pillars.juridique.highlight', 'Droit des affaires et fiscalité'),
      iconName: 'Scale',
      services: t('pillars.juridique.services', { returnObjects: true, defaultValue: [
        'Droit des sociétés',
        'Fiscalité',
        'Droit du travail',
        'Contrats',
        'Contentieux',
        'Réglementaire',
        'Propriété intellectuelle'
      ]}) as string[],
    },
    {
      id: 'corporate-finance',
      name: t('pillars.finance.name', 'Corporate Finance'),
      lead: 'Serigne Saliou Mbacke GUEYE',
      shortDesc: t('pillars.finance.desc', 'Ingénierie financière, levées de fonds et opérations capitalistiques.'),
      keyHighlight: t('pillars.finance.highlight', 'Corporate Finance et Transactions'),
      iconName: 'TrendingUp',
      services: t('pillars.finance.services', { returnObjects: true, defaultValue: [
        'Ingénierie financière',
        'Levées de fonds',
        'Évaluation',
        'Structuration',
        'Restructuration',
        'Prises de participation'
      ]}) as string[],
    }
  ];

  const LIFECYCLE_STAGES: LifecycleStage[] = t('lifecycle_stages', { returnObjects: true, defaultValue: [
    {
      id: 'creation',
      name: 'Création',
      tagline: 'Poser les fondations institutionnelles, fiscales et financières.',
      voletFinancier: {
        title: 'Volet Financier',
        description: 'Cadrage et structuration initiale du capital.',
        points: [
          'Élaboration du business plan financier',
          'Structuration du capital d’amorçage'
        ],
      },
      voletJuridique: {
        title: 'Volet Juridique',
        description: 'Choix de structure et formalités institutionnelles.',
        points: [
          'Choix de la forme sociale',
          'Rédaction des statuts constitutifs'
        ],
      },
      voletFiscal: {
        title: 'Volet Fiscal',
        description: 'Optimisation et choix du régime.',
        points: [
          'Sélection du régime d’imposition',
          'Mise en place du calendrier fiscal'
        ],
      },
    },
    {
      id: 'structuration',
      name: 'Structuration',
      tagline: 'Consolider les opérations et la gouvernance.',
      voletFinancier: {
        title: 'Volet Financier',
        description: 'Outils de pilotage.',
        points: [
          'Tableaux de bord financiers',
          'Optimisation de la trésorerie'
        ],
      },
      voletJuridique: {
        title: 'Volet Juridique',
        description: 'Cadre contractuel et gouvernance.',
        points: [
          'Mise en place de la gouvernance',
          'Standardisation des contrats commerciaux'
        ],
      },
      voletFiscal: {
        title: 'Volet Fiscal',
        description: 'Cohérence et politique fiscale.',
        points: [
          'Documentation des flux',
          'Revue fiscale annuelle'
        ],
      },
    },
    {
      id: 'financement',
      name: 'Financement',
      tagline: 'Levée de fonds, valorisation et structuration financière.',
      voletFinancier: {
        title: 'Volet Financier',
        description: 'Valorisation & Structuration.',
        points: [
          'Levée de fonds',
          'Valorisation',
          'Structuration financière'
        ],
      },
      voletJuridique: {
        title: 'Volet Juridique',
        description: 'Documentation et engagements.',
        points: [
          'Pactes d\'actionnaires',
          'Documentation contractuelle',
          'Due diligence'
        ],
      },
      voletFiscal: {
        title: 'Volet Fiscal',
        description: 'Analyse d’impact.',
        points: [
          'Analyse d’impact fiscal',
          'Structuration'
        ],
      },
    },
    {
      id: 'croissance',
      name: 'Croissance',
      tagline: 'M&A, cessions, acquisitions et joint-ventures.',
      voletFinancier: {
        title: 'Volet Financier',
        description: 'Due diligence & modélisation.',
        points: [
          'Due diligence financière',
          'Modélisation des impacts'
        ],
      },
      voletJuridique: {
        title: 'Volet Juridique',
        description: 'Contrats et garanties.',
        points: [
          'Contrats d\'acquisition',
          'Garanties d’actif et de passif'
        ],
      },
      voletFiscal: {
        title: 'Volet Fiscal',
        description: 'Structuration de l\'acquisition.',
        points: [
          'Structuration fiscale',
          'Traitement des plus-values'
        ],
      },
    },
    {
      id: 'transformation',
      name: 'Transformation',
      tagline: 'Restructuration, réorganisation capitalistique et renouveau.',
      voletFinancier: {
        title: 'Volet Financier',
        description: 'Renégociation et liquidité.',
        points: [
          'Diagnostic financier',
          'Réaménagement des dettes'
        ],
      },
      voletJuridique: {
        title: 'Volet Juridique',
        description: 'Procédures et réorganisation.',
        points: [
          'Restructuration du capital',
          'Gestion des aspects sociaux'
        ],
      },
      voletFiscal: {
        title: 'Volet Fiscal',
        description: 'Traitement des abandons et déficits.',
        points: [
          'Régime fiscal des créances',
          'Préservation des déficits'
        ],
      },
    },
  ] }) as LifecycleStage[];

  const STATS_DATA: StatItem[] = []; // Removed

  const LEGAL_INFO = {
    entity: 'LegalEase Partners SAS',
    siege: 'Villa N°112B Centenaire, Dakar',
    rccm: 'SN DKR 2026 B 16076',
    ninea: '013018818 2A5',
    cadre: t('legal_info.cadre', 'Sénégal, OHADA, UEMOA'),
    slogan: t('hero.title', 'LE DROIT, LA FISCALITÉ, LA FINANCE — UNE SEULE SIGNATURE.'),
  };

  return { PILLARS_DATA, LIFECYCLE_STAGES, STATS_DATA, LEGAL_INFO };
};
