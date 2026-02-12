export type FeatureStatus = 'completed' | 'in_progress' | 'to_implement';

export type FeatureCategory = 
  | 'core'
  | 'strategic_ai_machines'
  | 'platform'
  | 'additional_ai_machines'
  | 'business_strategy'
  | 'enhanced_platform';

export interface ImplementationStep {
  step: string;
  description: string;
  code?: string;
  checklist?: string[];
}

export interface DatabaseModel {
  name: string;
  fields: string[];
}

export interface APIEndpoint {
  method: string;
  path: string;
  description: string;
}

export interface Feature {
  id: string;
  title: string;
  status: FeatureStatus;
  category: FeatureCategory;
  description: string;
  whatItDoes: string;
  implementationSteps?: ImplementationStep[];
  databaseModels?: DatabaseModel[];
  apiEndpoints?: APIEndpoint[];
  frontendPages?: string[];
  notes?: string[];
  priority?: number;
  phase?: string;
}
