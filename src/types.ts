export type OrgType = 'k12' | 'testprep' | 'university' | 'coaching';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  badge: string;
  iconName: string;
  keyFeatures: string[];
  techStack: string[];
  metrics: string;
  deliverables: string[];
}

export interface SolutionBlueprint {
  id: OrgType;
  label: string;
  subtitle: string;
  summary: string;
  audience: string;
  timeToLaunch: string;
  estimatedCostRange: string;
  corePillars: {
    title: string;
    description: string;
    icon: string;
  }[];
  customFeatures: string[];
  recommendedInfra: string;
  complianceLevel: string;
}

export interface CaseStudyItem {
  id: string;
  clientName: string;
  clientCategory: string;
  location: string;
  headline: string;
  summary: string;
  metrics: {
    label: string;
    value: string;
  }[];
  quote: string;
  author: string;
  role: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Ownership' | 'Migration' | 'Architecture' | 'Security';
}

export interface BookingFormData {
  fullName: string;
  workEmail: string;
  organizationName: string;
  orgType: OrgType;
  studentVolume: string;
  primaryRequirement: string;
  preferredTimeline: string;
  notes?: string;
}
