import { Feature } from './types';

export const featureDetails: Record<string, Partial<Feature>> = {
  'department-management': {
    implementationSteps: [
      {
        step: 'Backend Setup',
        description: 'Create default departments',
        code: 'cd backend\npython manage.py create_default_departments',
        checklist: ['View departments list', 'Create new department', 'Edit department', 'Delete department', 'Assign department to asset', 'Assign department to shot', 'View multiple assignments', 'Delete assignment', 'Pagination works']
      },
      {
        step: 'Frontend Pages',
        description: 'Create Department Management Page at /departments with list view, add/edit/delete buttons, and pagination'
      },
      {
        step: 'API Endpoints',
        description: 'Create endpoints for listing, creating, updating, deleting departments, and assigning departments to assets/shots'
      }
    ],
    apiEndpoints: [
      { method: 'GET', path: '/api/departments/', description: 'List all departments' },
      { method: 'POST', path: '/api/departments/', description: 'Create department' },
      { method: 'PUT', path: '/api/departments/{id}/', description: 'Update department' },
      { method: 'DELETE', path: '/api/departments/{id}/', description: 'Delete department' },
      { method: 'POST', path: '/api/stories/{story_id}/assets/{asset_id}/assign-department/', description: 'Assign department to asset' },
      { method: 'POST', path: '/api/stories/{story_id}/shots/{shot_id}/assign-department/', description: 'Assign department to shot' }
    ],
    notes: ['Status: Partially Complete', 'Need to finish frontend testing', 'Add missing features', 'Fix any bugs']
  },
  'talent-pool': {
    implementationSteps: [
      {
        step: 'Database Models',
        description: 'Create Talent, CharacterTalentAssignment, AssetTalentAssignment, and ShotTalentAssignment models'
      },
      {
        step: 'Backend API Endpoints',
        description: 'Create endpoints for managing talent and assignments'
      },
      {
        step: 'Frontend Pages',
        description: 'Create Talent Pool page with filters, search, and assignment UI'
      },
      {
        step: 'Cost Integration',
        description: 'Calculate talent costs per story and department'
      }
    ],
    databaseModels: [
      {
        name: 'Talent',
        fields: ['name', 'talent_type', 'email', 'phone', 'portfolio_url', 'hourly_rate', 'daily_rate', 'availability_status', 'specializations', 'languages']
      },
      {
        name: 'CharacterTalentAssignment',
        fields: ['character', 'talent', 'role_type', 'status', 'rate_agreed']
      }
    ],
    notes: ['MVP Priority', 'Development: 2-3 months']
  },
  'ai-chat-assistant': {
    implementationSteps: [
      {
        step: 'Database Models',
        description: 'Create ChatConversation, ChatMessage, and ChatContext models'
      },
      {
        step: 'Context Gathering Service',
        description: 'Create StoryContext class to gather story data, characters, assets, shots, department progress, costs, talent assignments'
      },
      {
        step: 'AI Analysis Functions',
        description: 'Create analysis functions for story, cost, progress, talent, and art consistency'
      },
      {
        step: 'API Endpoints',
        description: 'Create chat endpoints for sending messages and getting history'
      },
      {
        step: 'Frontend Chat Interface',
        description: 'Create chat UI on Story Detail Page with history, input field, and quick suggestions'
      }
    ],
    notes: ['Connect to OpenAI GPT-4', 'Use MCP server for AI operations', 'Cache context for faster responses']
  },
  'generation-system': {
    implementationSteps: [
      {
        step: 'Database Models',
        description: 'Create GenerationJob, GeneratedContent, and GenerationSettings models'
      },
      {
        step: 'Generation Services',
        description: 'Create services for storyboard generation, asset image generation, asset video generation, and full movie generation'
      },
      {
        step: 'Queue System',
        description: 'Use Celery for background tasks, track progress, handle failures'
      },
      {
        step: 'API Endpoints',
        description: 'Create endpoints for generating storyboards, images, videos, and movies'
      },
      {
        step: 'Frontend UI',
        description: 'Add generation sections to Story and Asset detail pages with progress modals'
      }
    ],
    notes: ['⚠️ Full Movie Generation is VERY EXPENSIVE ($50-$500+)', 'Always show cost estimates', 'Require explicit confirmation', 'Set generation limits']
  },
  'mcp-server-integration': {
    notes: ['✅ Status: Complete', 'MCP Server already implemented', 'Tools registered: parse_story, generate_character_image, generate_asset_image, generate_location_image', 'No additional implementation needed']
  },
  'ai-project-pipeline-manager': {
    implementationSteps: [
      {
        step: 'Database Models',
        description: 'Create ProjectPipeline, PipelineTask, and PipelineMilestone models'
      },
      {
        step: 'AI Scheduling Engine',
        description: 'Create AI service that analyzes historical data, predicts task durations, auto-assigns tasks, detects bottlenecks'
      },
      {
        step: 'API Endpoints',
        description: 'Create endpoints for pipeline overview, task management, auto-scheduling, bottleneck detection, timeline data'
      },
      {
        step: 'Frontend Dashboard',
        description: 'Create interactive Gantt chart view, task board (Kanban), timeline visualization, bottleneck alerts'
      }
    ],
    notes: ['Development: 2-3 months data aggregation, 4-6 months AI engine', 'Priority 1 for Phase 2']
  },
  'smart-asset-management': {
    implementationSteps: [
      {
        step: 'Database Models',
        description: 'Create enhanced Asset model, AssetVersion, and AssetCollection models'
      },
      {
        step: 'AI Tagging Service',
        description: 'Visual recognition AI to classify assets, auto-tag by style/complexity/type, suggest similar assets'
      },
      {
        step: 'API Endpoints',
        description: 'Create endpoints for asset management, versioning, search, and collections'
      },
      {
        step: 'Frontend Interface',
        description: 'Asset browser with filters, visual search, version history, collection management'
      }
    ],
    notes: ['Development: 3-4 months data ingestion, 2-3 months version control', 'Priority 2 for Phase 2']
  },
  'ai-model-generator': {
    implementationSteps: [
      {
        step: 'Database Models',
        description: 'Create GeneratedModel model'
      },
      {
        step: 'AI Generation Service',
        description: 'Text-to-3D model generation, sketch-to-3D conversion, auto-rigging AI, LOD generation, style transfer'
      },
      {
        step: 'API Endpoints',
        description: 'Create endpoints for model generation, rigging, LOD optimization, style matching'
      },
      {
        step: 'Frontend Interface',
        description: 'Prompt input interface, sketch upload, style selector, real-time preview, export options'
      }
    ],
    notes: ['Priority 3 for Phase 3', 'Requires advanced AI models']
  },
  'ai-storyboard-script': {
    implementationSteps: [
      {
        step: 'Database Models',
        description: 'Create GeneratedScript and GeneratedStoryboard models'
      },
      {
        step: 'AI Services',
        description: 'Script generation from prompts, storyboard panel generation, camera angle suggestions, animatic creation'
      },
      {
        step: 'API Endpoints',
        description: 'Create endpoints for script generation, storyboard generation, animatic creation'
      },
      {
        step: 'Frontend Interface',
        description: 'Script editor, storyboard viewer, animatic player, export options'
      }
    ],
    notes: ['Priority 4 for Phase 2', 'Cuts pre-production time by 80%']
  },
  'ai-voice-motion': {
    implementationSteps: [
      {
        step: 'Database Models',
        description: 'Create VoiceModel and GeneratedPerformance models'
      },
      {
        step: 'AI Services',
        description: 'Text-to-speech with emotion, voice cloning (with permissions), lip-sync generation, motion synthesis from voice'
      },
      {
        step: 'API Endpoints',
        description: 'Create endpoints for voice generation, cloning, lip-sync, motion synthesis'
      },
      {
        step: 'Frontend Interface',
        description: 'Voice model selector, script input with emotion markers, performance preview, editing sliders'
      }
    ],
    notes: ['Priority 5 for Phase 3', 'Requires voice cloning permissions']
  },
  'production-leasing': {
    implementationSteps: [
      {
        step: 'Database Models',
        description: 'Create LeasableMachine, MachineLease, and UsageLog models'
      },
      {
        step: 'Billing System',
        description: 'Calculate usage costs, generate invoices, track usage per project, cost optimization suggestions'
      },
      {
        step: 'API Endpoints',
        description: 'Create endpoints for machine listing, leasing, usage tracking, billing'
      },
      {
        step: 'Frontend Interface',
        description: 'Machine marketplace, lease management dashboard, usage tracking, billing reports'
      }
    ],
    notes: ['Priority 6 for Phase 4', 'Foundation for marketplace']
  },
  'ai-collaboration-dashboard': {
    implementationSteps: [
      {
        step: 'Database Models',
        description: 'Create ProjectRoom, CollaborationComment, and Approval models'
      },
      {
        step: 'Real-Time Features',
        description: 'WebSocket for live updates, real-time commenting, live notifications, multi-language translation'
      },
      {
        step: 'API Endpoints',
        description: 'Create endpoints for rooms, comments, approvals, project summaries, translation'
      },
      {
        step: 'Frontend Dashboard',
        description: 'Unified dashboard view, project rooms, real-time activity feed, approval workflow, integrated machine controls'
      }
    ],
    notes: ['Priority 7 for Phase 3', 'Central OS for all collaborators']
  },
  'auto-qc-delivery': {
    implementationSteps: [
      {
        step: 'Database Models',
        description: 'Create QCCheck and DeliveryPackage models'
      },
      {
        step: 'QC AI Service',
        description: 'Mesh integrity checks, texture validation, animation error detection, optimization suggestions, auto-fix capabilities'
      },
      {
        step: 'API Endpoints',
        description: 'Create endpoints for QC checks, reports, auto-fix, delivery packaging'
      },
      {
        step: 'Frontend Interface',
        description: 'QC dashboard, error visualization, auto-fix suggestions, delivery packaging tool'
      }
    ],
    notes: ['Priority 8 for Phase 4', 'Automated quality control']
  },
  'client-vision-builder': {
    implementationSteps: [
      {
        step: 'Database Models',
        description: 'Create ClientBrief, GeneratedMoodboard, and ClientFeedback models'
      },
      {
        step: 'AI Services',
        description: 'Brief-to-visual conversion, moodboard generation, brand matching, style consistency'
      },
      {
        step: 'API Endpoints',
        description: 'Create endpoints for brief creation, moodboard generation, animatic creation, feedback submission'
      },
      {
        step: 'Frontend Interface',
        description: 'Brief input form, moodboard viewer, annotation tools, feedback system, real-time refinement'
      }
    ],
    notes: ['Priority 9 for Phase 3', 'Converts client briefs into visual prototypes']
  },
  'training-dataset-refinement': {
    implementationSteps: [
      {
        step: 'Database Models',
        description: 'Create TrainingDataset, ModelTraining, and FeedbackLog models'
      },
      {
        step: 'Training Infrastructure',
        description: 'Data collection pipeline, model training system, feedback loop integration, continuous improvement'
      },
      {
        step: 'API Endpoints',
        description: 'Create endpoints for dataset management, training, feedback, metrics'
      },
      {
        step: 'Frontend Interface',
        description: 'Dataset management, training dashboard, feedback collection UI, model version tracking'
      }
    ],
    notes: ['Priority 10 for Phase 4', 'Continuous improvement engine']
  },
  'ai-environment-generator': {
    implementationSteps: [
      {
        step: 'Database Models',
        description: 'Create EnvironmentTemplate and GeneratedEnvironment models'
      },
      {
        step: 'Content Requirements',
        description: '3D Scene Assets: Terrain meshes, architecture sets, natural elements, skyboxes & HDRI maps, VFX layers'
      },
      {
        step: 'AI Generation Service',
        description: 'Text-to-environment generation, style matching, multi-variation generation (time-of-day, weather), LOD optimization'
      },
      {
        step: 'API Endpoints',
        description: 'Create endpoints for environment generation, templates, variations, categories'
      },
      {
        step: 'Frontend Interface',
        description: 'Environment category browser, prompt input, time-of-day/weather selectors, real-time preview'
      }
    ],
    notes: ['Requires extensive 3D asset library', 'Multiple environment categories needed']
  }
};

export const getFeatureDetails = (featureId: string): Partial<Feature> | undefined => {
  return featureDetails[featureId];
};
