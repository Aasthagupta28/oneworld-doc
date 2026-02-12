import { Feature, FeatureStatus, FeatureCategory } from './types';

export const features: Feature[] = [
  {
    id: 'department-management',
    title: 'Department Management System',
    status: 'completed',
    category: 'core',
    description: 'Manages production departments and assigns them to assets and shots',
    whatItDoes: 'Manages production departments (Concept Art, Modeling, Animation, etc.), assigns departments to assets and shots, and tracks department progress and costs.',
    priority: 1,
    phase: 'Phase 1'
  },
  {
    id: 'talent-pool',
    title: 'Talent Pool System',
    status: 'to_implement',
    category: 'core',
    description: 'Manages external contractors and assigns talent to projects',
    whatItDoes: 'Manages external contractors (voice actors, 3D artists, animators), assigns talent to characters, assets, and shots, and tracks talent costs and availability.',
    priority: 2,
    phase: 'Phase 2'
  },
  {
    id: 'ai-chat-assistant',
    title: 'AI Chat Assistant',
    status: 'to_implement',
    category: 'core',
    description: 'AI-powered chat interface for story management and insights',
    whatItDoes: 'Provides AI-powered chat interface for story management, answers questions about story, costs, progress, and provides recommendations and insights.',
    priority: 3,
    phase: 'Phase 2'
  },
  {
    id: 'generation-system',
    title: 'Generation System',
    status: 'to_implement',
    category: 'core',
    description: 'Generates visual content from story breakdowns',
    whatItDoes: 'Generates visual content from story breakdowns, creates storyboards, asset images, videos, and generates full animated movies (expensive).',
    priority: 4,
    phase: 'Phase 2'
  },
  {
    id: 'mcp-server-integration',
    title: 'MCP Server Integration',
    status: 'completed',
    category: 'core',
    description: 'Centralizes AI service management',
    whatItDoes: 'Centralizes AI service management, provides standardized interface for AI tools, and enables context sharing between AI operations.',
    priority: 1,
    phase: 'Phase 1'
  },
  {
    id: 'ai-project-pipeline-manager',
    title: 'AI Project Pipeline Manager (Machine 1)',
    status: 'to_implement',
    category: 'strategic_ai_machines',
    description: 'Automates project workflows from pitch to delivery',
    whatItDoes: 'Automates project workflows from pitch to delivery, dynamic project timelines with AI-driven Gantt charts, auto-assigns roles by expertise and availability, real-time milestone tracking and alerts, predicts bottlenecks and delays.',
    priority: 1,
    phase: 'Phase 2'
  },
  {
    id: 'smart-asset-management',
    title: 'Smart Asset Management System - SAMS (Machine 2)',
    status: 'to_implement',
    category: 'strategic_ai_machines',
    description: 'Centralized 3D asset storage and version control',
    whatItDoes: 'Centralized 3D asset storage and version control, AI-powered tagging and classification, search by keyword, visual similarity, or sketch, integration with Blender, Maya, Unreal, Unity, cloud-sync for global collaboration.',
    priority: 2,
    phase: 'Phase 2'
  },
  {
    id: 'ai-model-generator',
    title: 'AI Model Generator Machine (Machine 3)',
    status: 'to_implement',
    category: 'strategic_ai_machines',
    description: 'Generates 3D models from text prompts or sketches',
    whatItDoes: 'Generates 3D models from text prompts or sketches, auto-rigging for characters, LOD optimization (Level of Detail), style matching to project art direction, direct export to Blender, Maya, Unreal, Unity.',
    priority: 3,
    phase: 'Phase 3'
  },
  {
    id: 'ai-storyboard-script',
    title: 'AI Storyboard & Script Generator (Machine 4)',
    status: 'to_implement',
    category: 'strategic_ai_machines',
    description: 'Converts concepts into scripts and storyboards',
    whatItDoes: 'Converts concepts into scripts and storyboards, genre-aware structure templates, shot-by-shot camera framing, auto-animatic creation, export to pre-vis tools.',
    priority: 4,
    phase: 'Phase 2'
  },
  {
    id: 'ai-voice-motion',
    title: 'AI Voice + Motion Performance Synthesizer (Machine 5)',
    status: 'to_implement',
    category: 'strategic_ai_machines',
    description: 'Voice cloning and synthetic voice generation',
    whatItDoes: 'Voice cloning and synthetic voice generation, emotion-driven lip-sync, full-body motion synthesis, performance editing tools, multi-language support.',
    priority: 5,
    phase: 'Phase 3'
  },
  {
    id: 'production-leasing',
    title: 'Production Leasing Manager Machine (Machine 6)',
    status: 'to_implement',
    category: 'strategic_ai_machines',
    description: 'Manages rental/leasing of AI tools and machines',
    whatItDoes: 'Manages rental/leasing of AI tools and machines, usage-based billing, AI-driven resource allocation, cross-project cost tracking, marketplace for tool leasing.',
    priority: 6,
    phase: 'Phase 4'
  },
  {
    id: 'ai-collaboration-dashboard',
    title: 'AI Collaboration Dashboard - One World OS (Machine 7)',
    status: 'to_implement',
    category: 'strategic_ai_machines',
    description: 'Central operating system for all collaborators',
    whatItDoes: 'Central operating system for all collaborators, project rooms with real-time collaboration, live feedback and approvals, integration with all machines (1-10), multi-language support, AI-powered project summaries.',
    priority: 7,
    phase: 'Phase 3'
  },
  {
    id: 'auto-qc-delivery',
    title: 'Auto QC & Delivery Machine (Machine 8)',
    status: 'to_implement',
    category: 'strategic_ai_machines',
    description: 'Automated quality control for 3D assets',
    whatItDoes: 'Automated quality control for 3D assets, detects mesh errors, texture issues, optimization problems, animation and rigging validation, auto-packaging for delivery, platform-specific optimization.',
    priority: 8,
    phase: 'Phase 4'
  },
  {
    id: 'client-vision-builder',
    title: 'Client Vision Builder (Machine 9)',
    status: 'to_implement',
    category: 'strategic_ai_machines',
    description: 'Converts client briefs into visual prototypes',
    whatItDoes: 'Converts client briefs into visual prototypes, AI moodboard generation, real-time animatics, brand-aligned visual suggestions, feedback loop integration.',
    priority: 9,
    phase: 'Phase 3'
  },
  {
    id: 'training-dataset-refinement',
    title: 'Training + Dataset Refinement Engine (Machine 10)',
    status: 'to_implement',
    category: 'strategic_ai_machines',
    description: 'Continuously improves AI tools from project data',
    whatItDoes: 'Continuously improves AI tools from project data, reinforcement learning from feedback, custom dataset creation, cross-machine optimization, bias detection and reduction.',
    priority: 10,
    phase: 'Phase 4'
  },
  {
    id: 'global-collaboration-hub',
    title: 'Global Collaboration Hub',
    status: 'to_implement',
    category: 'platform',
    description: 'Real-time collaboration across time zones',
    whatItDoes: 'Real-time collaboration across time zones, multi-language support, global talent network, cloud-synced workflows.',
    priority: 15,
    phase: 'Phase 5'
  },
  {
    id: 'multi-language-support',
    title: 'Multi-Language Support',
    status: 'to_implement',
    category: 'platform',
    description: 'Interface and content translation',
    whatItDoes: 'Interface translation, content translation, voice localization, cultural adaptation.',
    priority: 16,
    phase: 'Phase 5'
  },
  {
    id: 'marketplace-system',
    title: 'Marketplace System',
    status: 'to_implement',
    category: 'platform',
    description: 'Tool and asset marketplace',
    whatItDoes: 'Tool and asset marketplace, talent marketplace, service listings, revenue sharing.',
    priority: 17,
    phase: 'Phase 5'
  },
  {
    id: 'one-world-academy',
    title: 'One World Academy',
    status: 'to_implement',
    category: 'platform',
    description: 'AI production training courses',
    whatItDoes: 'AI production training courses, certification programs, talent pipeline development, knowledge sharing.',
    priority: 18,
    phase: 'Phase 5'
  },
  {
    id: 'real-time-collaboration',
    title: 'Real-Time Collaboration Tools',
    status: 'to_implement',
    category: 'platform',
    description: 'Live editing sessions and real-time commenting',
    whatItDoes: 'Live editing sessions, real-time commenting, screen sharing, voice/video calls, collaborative whiteboards.',
    priority: 19,
    phase: 'Phase 5'
  },
  {
    id: 'ai-environment-generator',
    title: 'AI Environment Generator Machine',
    status: 'to_implement',
    category: 'additional_ai_machines',
    description: 'Generates 3D backgrounds and environments from prompts',
    whatItDoes: 'Generates 3D backgrounds and environments from prompts, creates game-ready and film-ready environments, supports multiple genres, time-of-day, and weather variations, produces multi-layered scenes (terrain, props, lighting, atmospheric effects).',
    priority: 11,
    phase: 'Phase 2'
  },
  {
    id: 'procedural-world-generator',
    title: 'Procedural World Generator',
    status: 'to_implement',
    category: 'additional_ai_machines',
    description: 'Instantly creates vast game-ready or film-ready worlds',
    whatItDoes: 'Instantly creates vast game-ready or film-ready worlds, uses AI and procedural logic for infinite variations, foundation tool for metaverse, sandbox games, AI-animated films, generates consistent, high-fidelity environments at scale.',
    priority: 12,
    phase: 'Phase 3'
  },
  {
    id: 'ai-localization-engine',
    title: 'AI-Powered Localization Engine',
    status: 'to_implement',
    category: 'additional_ai_machines',
    description: 'Translates content to multiple languages',
    whatItDoes: 'Translates content to multiple languages, revoices scenes with AI voice models, adapts scenes culturally for different markets, auto lip-sync for multiple languages, enables global content release at scale.',
    priority: 13,
    phase: 'Phase 3'
  },
  {
    id: 'training-ai-directors',
    title: 'Training Machine for AI Directors/Artists',
    status: 'to_implement',
    category: 'additional_ai_machines',
    description: 'Trains AI agents to learn director\'s/artist\'s style',
    whatItDoes: 'Trains AI agents to learn director\'s/artist\'s style, creates personalized "virtual creative assistant", automates stylistic consistency, extends director\'s vision across projects, suggests creative direction based on learned style.',
    priority: 14,
    phase: 'Phase 3'
  },
  {
    id: 'ai-production-coordinator',
    title: 'AI Production Coordinator (Virtual Producer)',
    status: 'to_implement',
    category: 'additional_ai_machines',
    description: 'Automates scheduling, budgeting, talent matching',
    whatItDoes: 'Automates scheduling, budgeting, talent matching, resource allocation across multiple projects globally, reduces management overhead, enables infinite scaling, minimizes production delays.',
    priority: 20,
    phase: 'Phase 3'
  },
  {
    id: 'ai-previsualization',
    title: 'AI-Powered Previsualization Engine',
    status: 'to_implement',
    category: 'additional_ai_machines',
    description: 'Converts scripts/storyboards into AI-generated animatics',
    whatItDoes: 'Converts scripts/storyboards into AI-generated animatics, creates 3D pre-vis scenes automatically, cuts pre-production time by 80%, helps directors visualize before animation investment.',
    priority: 21,
    phase: 'Phase 2'
  },
  {
    id: 'asset-customization',
    title: 'Asset Customization Machine',
    status: 'to_implement',
    category: 'additional_ai_machines',
    description: 'Drag-and-drop AI system for asset generation/adaptation',
    whatItDoes: 'Drag-and-drop AI system for asset generation/adaptation, stylizes assets (characters, props, UI, VFX), makes asset production modular and scalable, reduces dependency on fixed teams.',
    priority: 22,
    phase: 'Phase 3'
  },
  {
    id: 'video-production-storyboard',
    title: 'Video Production & Storyboard System',
    status: 'to_implement',
    category: 'additional_ai_machines',
    description: 'Creates professional video storyboards',
    whatItDoes: 'Creates professional video storyboards, generates explainer videos, commercials, presentations, scene-by-scene breakdown with timing, export to video production pipelines.',
    priority: 23,
    phase: 'Phase 3'
  },
  {
    id: 'sales-marketing-strategy',
    title: 'Sales & Marketing Strategy System',
    status: 'to_implement',
    category: 'business_strategy',
    description: 'Manages studio partnerships and relationships',
    whatItDoes: 'Manages studio partnerships and relationships, tracks sales pipeline and opportunities, manages marketing campaigns, tracks ROI and conversion metrics.',
    priority: 24,
    phase: 'Phase 2'
  },
  {
    id: 'investor-relations',
    title: 'Investor Relations & Deck Management',
    status: 'to_implement',
    category: 'business_strategy',
    description: 'Manages investor relationships',
    whatItDoes: 'Manages investor relationships, tracks funding rounds, generates investor decks, manages investor communications.',
    priority: 25,
    phase: 'Phase 2'
  },
  {
    id: 'partnership-management',
    title: 'Partnership Management System',
    status: 'to_implement',
    category: 'business_strategy',
    description: 'Manages content acquisition partnerships',
    whatItDoes: 'Manages content acquisition partnerships, tracks licensing agreements, manages library access, tracks partnership performance.',
    priority: 26,
    phase: 'Phase 2'
  },
  {
    id: 'content-acquisition-licensing',
    title: 'Content Acquisition & Licensing System',
    status: 'to_implement',
    category: 'business_strategy',
    description: 'Manages content acquisition from 20-30 companies',
    whatItDoes: 'Manages content acquisition from 20-30 companies, tracks licensing deals and agreements, manages content libraries (animation, 3D models, mocap), handles revenue sharing and royalties.',
    priority: 27,
    phase: 'Phase 2'
  },
  {
    id: 'smart-resource-matching',
    title: 'Smart Resource Matching AI',
    status: 'to_implement',
    category: 'enhanced_platform',
    description: 'Matches freelancers/talent to projects in seconds',
    whatItDoes: 'Matches freelancers/talent to projects in seconds, considers project scope, skillset, budget, and availability, enables unlimited project capacity, reduces overhead while scaling project loads.',
    priority: 28,
    phase: 'Phase 3'
  },
  {
    id: 'production-heatmaps',
    title: 'Production Heatmaps & Forecasting Tools',
    status: 'to_implement',
    category: 'enhanced_platform',
    description: 'Visual heatmaps showing project load distribution',
    whatItDoes: 'Visual heatmaps showing project load distribution, forecasts future capacity and bottlenecks, enables fixed-cost bids at high scale, makes One World 3D go-to for overflow partnerships.',
    priority: 29,
    phase: 'Phase 3'
  },
  {
    id: 'ai-powered-review-tools',
    title: 'AI-Powered Review Tools',
    status: 'to_implement',
    category: 'enhanced_platform',
    description: 'Auto-feedback on animation errors',
    whatItDoes: 'Auto-feedback on animation errors, rendering previews and quality checks, automated review cycles, reduces manual review time.',
    priority: 30,
    phase: 'Phase 3'
  },
  {
    id: 'branded-collaboration-platform',
    title: 'Branded Collaboration Platform',
    status: 'to_implement',
    category: 'enhanced_platform',
    description: 'Secure, branded collaboration platform',
    whatItDoes: 'Secure, branded collaboration platform (like "Notion meets Frame.io"), private workspace for each client/studio, custom branding options, professional presentation.',
    priority: 31,
    phase: 'Phase 4'
  },
  {
    id: 'multi-timezone-coordination',
    title: 'Multi-Timezone Coordination System',
    status: 'to_implement',
    category: 'enhanced_platform',
    description: 'Automated scheduling across time zones',
    whatItDoes: 'Automated scheduling across time zones, task routing based on timezone, multi-timezone calendar views, coordination for global teams.',
    priority: 32,
    phase: 'Phase 4'
  },
  {
    id: 'short-form-monetization',
    title: 'Short-Form Content Monetization System',
    status: 'to_implement',
    category: 'enhanced_platform',
    description: 'Production track for AI-generated short videos',
    whatItDoes: 'Production track for AI-generated short videos, ideal for social platforms, ads, rapid storytelling, high-volume, low-effort monetization, passive income stream.',
    priority: 33,
    phase: 'Phase 4'
  },
  {
    id: 'client-support-portal',
    title: 'Client Support & Service Portal',
    status: 'to_implement',
    category: 'enhanced_platform',
    description: 'Direct support for client creative vision',
    whatItDoes: 'Direct support for client creative vision, work with experienced creatives, reduce stress and streamline production, extension of internal team.',
    priority: 34,
    phase: 'Phase 4'
  },
  {
    id: 'strategic-positioning-branding',
    title: 'Strategic Positioning & Branding System',
    status: 'to_implement',
    category: 'enhanced_platform',
    description: 'Positions One World 3D as "Top AI Leader in Creative Production"',
    whatItDoes: 'Positions One World 3D as "Top AI Leader in Creative Production", manages brand identity and messaging, tracks market positioning, manages strategic partnerships.',
    priority: 35,
    phase: 'Phase 4'
  }
];

export const getFeatureById = (id: string): Feature | undefined => {
  return features.find(f => f.id === id);
};

export const getFeaturesByStatus = (status: FeatureStatus): Feature[] => {
  return features.filter(f => f.status === status);
};

export const getFeaturesByCategory = (category: FeatureCategory): Feature[] => {
  return features.filter(f => f.category === category);
};

export const getCategoryLabel = (category: FeatureCategory): string => {
  const labels: Record<FeatureCategory, string> = {
    core: 'Core Features',
    strategic_ai_machines: 'Strategic AI Machines',
    platform: 'Platform Features',
    additional_ai_machines: 'Additional AI Machines',
    business_strategy: 'Business & Strategy',
    enhanced_platform: 'Enhanced Platform Features'
  };
  return labels[category];
};

export const getStatusLabel = (status: FeatureStatus): string => {
  const labels: Record<FeatureStatus, string> = {
    completed: '✅ Implemented',
    in_progress: '🔄 In Progress',
    to_implement: '📋 To Implement'
  };
  return labels[status];
};

export const getStatusColor = (status: FeatureStatus): string => {
  const colors: Record<FeatureStatus, string> = {
    completed: 'bg-green-100 text-green-800 border-green-300',
    in_progress: 'bg-blue-100 text-blue-800 border-blue-300',
    to_implement: 'bg-gray-100 text-gray-800 border-gray-300'
  };
  return colors[status];
};
