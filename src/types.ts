export interface PillarService {
  id: string;
  name: string;
  lead: string;
  isFuturePractice?: boolean;
  shortDesc: string;
  services: string[];
  keyHighlight: string;
  iconName: string;
}

export interface LifecycleStage {
  id: string;
  name: string;
  tagline: string;
  voletFinancier: {
    title: string;
    description: string;
    points: string[];
  };
  voletJuridique: {
    title: string;
    description: string;
    points: string[];
  };
  voletFiscal: {
    title: string;
    description: string;
    points: string[];
  };
}

export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
}

export interface ConsultationRequest {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  pillar: string;
  message: string;
  timeline: string;
}
