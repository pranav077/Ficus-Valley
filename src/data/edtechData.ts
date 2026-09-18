import { ServiceItem, SolutionBlueprint, CaseStudyItem, FAQItem } from '../types';

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'virtual-classrooms',
    title: 'Virtual Classroom Architecture',
    shortDesc: 'Sub-second ultra-low latency WebRTC and adaptive HLS live broadcast engines engineered for zero-jitter lectures at massive scale.',
    fullDesc: 'We architect carrier-grade live virtual classrooms supporting multi-tier audio/video switching, interactive collaborative canvases, sub-room pods, and encrypted session recording with automated transcription.',
    badge: 'Real-Time Streaming',
    iconName: 'Video',
    metrics: '< 160ms Edge Latency | 50k+ Concurrent Rooms',
    keyFeatures: [
      'Multi-bitrate adaptive WebRTC (Selective Forwarding Unit / SFU)',
      'Sub-second live streaming fallback with automated HLS transcode',
      'Synchronized multi-user vector canvas with mathematical equation renderer',
      'Dynamic breakout rooms with teacher surveillance dashboard',
      'Automated cloud recording pipeline with AES-128 stream DRM encryption'
    ],
    techStack: ['Mediasoup', 'LiveKit', 'WebRTC', 'AWS IVS', 'FFmpeg', 'Redis PubSub'],
    deliverables: [
      'Self-hosted WebRTC SFU cluster or managed cloud bridge',
      'White-label Web & Mobile video player SDK',
      'Real-time Q&A, Polls, and Hand-Raise moderation console',
      'Network degradation and jitter recovery telemetry'
    ]
  },
  {
    id: 'custom-lms',
    title: 'Custom LMS & Mobile App Development',
    shortDesc: 'Bespoke, enterprise-grade learning management systems for Web, iOS, and Android with encrypted offline downloads and custom curricula workflows.',
    fullDesc: 'Break free from restrictive off-the-shelf SaaS limits. We build tailor-made, 100% white-label learning portals and native mobile apps designed specifically around your instructional methodology, branding, and student lifecycle.',
    badge: 'White-Label Platform',
    iconName: 'Layout',
    metrics: '100% IP Ownership | iOS & Android Native',
    keyFeatures: [
      'Full white-label branding with custom domains, subdomains & themes',
      'Offline video caching with Widevine & FairPlay hardware DRM protection',
      'Modular curriculum builders supporting SCORM, xAPI, and custom interactive widgets',
      'Gamified learning tracks, XP streak badges, and leaderboard mechanics',
      'Role-Based Access Control (Super Admin, Teacher, Mentor, Parent, Student)'
    ],
    techStack: ['Next.js', 'React Native', 'Flutter', 'FastAPI', 'PostgreSQL', 'Tailwind'],
    deliverables: [
      'Complete production source code and repository handover',
      'Google Play Store & Apple App Store launch management',
      'Parental monitoring companion apps with WhatsApp SMS alerts',
      'SCORM 1.2 / 2004 & xAPI LRS compliant integration'
    ]
  },
  {
    id: 'ai-grading-analytics',
    title: 'AI-Driven Grading & Automated Analytics',
    shortDesc: 'Automated subjective scoring, adaptive question bank generators, and real-time student drop-off predictive models.',
    fullDesc: 'Empower faculty with AI assistants that evaluate open-ended student responses, provide rubric-based formative feedback, generate targeted practice sets, and detect at-risk students before they drop out.',
    badge: 'AI & Intelligence',
    iconName: 'BrainCircuit',
    metrics: '82% Faster Grading | 94% Rubric Alignment',
    keyFeatures: [
      'Subjective essay & mathematical step-by-step AI evaluation engines',
      'Automated question-bank generator grounded in your proprietary textbooks',
      'Computer-vision assisted proctoring with non-invasive audio/face telemetry',
      'Early churn & dropout warning signals based on study pacing telemetry',
      'Instant conversational AI doubt-solver grounded purely in course materials'
    ],
    techStack: ['Google Gemini', 'PyTorch', 'FastAPI', 'Qdrant / Milvus', 'LangChain', 'OpenCV'],
    deliverables: [
      'Custom rubric calibration console for academic deans',
      'Fine-tuned evaluation pipelines with zero student data leakage',
      'Automated report-card generator with diagnostic feedback',
      'Real-time student comprehension heatmaps for instructors'
    ]
  },
  {
    id: 'monetization-payments',
    title: 'Monetization & Payment Gateways',
    shortDesc: 'Frictionless checkout funnels with multi-currency support, Indian UPI/Razorpay, global Stripe billing, and automated GST compliance.',
    fullDesc: 'Maximize student conversion with optimized 1-click checkout experiences. Support recurring subscriptions, tiered cohorts, EMI finance options, coupon management, and automated tax invoicing globally.',
    badge: 'Revenue Architecture',
    iconName: 'CreditCard',
    metrics: '99.4% Payment Success | Multi-Currency',
    keyFeatures: [
      'Native Indian payment suite: UPI AutoPay, Razorpay, Cashfree, and PayU',
      'Global card processing via Stripe, Paddle, and PayPal in 135+ currencies',
      'Zero-cost EMI & Buy-Now-Pay-Later (BNPL) integrations for higher ticket courses',
      'Automated GST compliant e-invoicing and localized tax receipts',
      'Dynamic pricing engine by country purchasing power parity (PPP)'
    ],
    techStack: ['Stripe Billing', 'Razorpay Webhooks', 'Node.js', 'Redis', 'PostgreSQL'],
    deliverables: [
      'High-converting checkout funnel templates tested for education',
      'Abandoned cart recovery hooks with automated WhatsApp notifications',
      'Affiliate and academic partner revenue-share ledger',
      'Real-time MRR, cohort LTV, and churn analytics dashboard'
    ]
  },
  {
    id: 'hybrid-infra',
    title: 'Hybrid Infrastructure Integration',
    shortDesc: 'Bridging physical smart classrooms with digital LMS ecosystems via automated PTZ tracking, digital podiums, and attendance IoT.',
    fullDesc: 'Unify your physical campus and remote learners into one frictionless experience. We integrate hardware cameras, interactive flat panels, RFID attendance, and lecture capture appliances directly into your cloud repository.',
    badge: 'Campus IoT Bridge',
    iconName: 'Server',
    metrics: 'Zero-Touch Stream Sync | Hardware Agnostic',
    keyFeatures: [
      'Auto-tracking PTZ camera protocol integration (NDI / RTSP / SIP)',
      'Digital podium & interactive smartboard live screen sync',
      'RFID and facial recognition biometric campus attendance synchronization',
      'Edge recording encoders that upload directly to your cloud S3 bucket',
      'Centralized IT device management console for multi-branch campuses'
    ],
    techStack: ['RTSP/WebRTC Gateway', 'MQTT', 'Docker Edge', 'AWS IoT Core', 'Go'],
    deliverables: [
      'Campus appliance gateway software and firmware drivers',
      'Zero-configuration setup for classroom lecturers (1-touch start)',
      'Automated timetable scheduler linked to classroom hardware switches',
      'Campus bandwidth optimizer with local LAN caching nodes'
    ]
  }
];

export const SOLUTION_BLUEPRINTS: Record<string, SolutionBlueprint> = {
  k12: {
    id: 'k12',
    label: 'K-12 School Networks',
    subtitle: 'Integrated digital ecosystems for multi-branch school groups and charter systems',
    summary: 'Tailored for multi-branch school networks requiring strict parental controls, daily homework workflows, student safety compliance, and hybrid smart classroom connectivity.',
    audience: 'School groups, CBSE/ICSE/IB schools, and regional charter networks (500 to 50,000 students).',
    timeToLaunch: '4 to 6 Weeks',
    estimatedCostRange: '45% lower TCO than legacy ERP vendors',
    complianceLevel: 'COPPA, FERPA & Indian Data Protection (DPDP) compliant',
    recommendedInfra: 'Multi-tenant AWS ECS with private VPC and localized S3 media storage',
    corePillars: [
      {
        title: 'Parent & Teacher Bridge',
        description: 'Dedicated mobile app with daily homework diaries, bus tracking, and direct teacher messaging with privacy shielding.',
        icon: 'Smartphone'
      },
      {
        title: 'Child-Safe Virtual Rooms',
        description: 'Hardened WebRTC classrooms with locked participant feeds, AI chat filtering, and instant recording for audits.',
        icon: 'ShieldCheck'
      },
      {
        title: 'CBSE / IB / ICSE Gradebooks',
        description: 'Pre-configured scholastic and co-scholastic report cards adhering strictly to national educational boards.',
        icon: 'GraduationCap'
      }
    ],
    customFeatures: [
      'Automated parent WhatsApp attendance notifications at 9:15 AM',
      'Digital assignment submission with handwriting OCR scanner',
      'School fee installment gateway with auto-receipt generation',
      'Subdomain per campus branch with central management oversight'
    ]
  },
  testprep: {
    id: 'testprep',
    label: 'High-Stakes Test Prep',
    subtitle: 'High-concurrency testing engines for JEE, NEET, UPSC, SAT, and IELTS institutes',
    summary: 'Built for rigorous competitive exam institutes where thousands of students test simultaneously with zero millisecond lag, strict anti-cheating, and in-depth rank predictive analytics.',
    audience: 'Competitive exam academies, national coaching brands, and digital-first test series publishers.',
    timeToLaunch: '3 to 5 Weeks',
    estimatedCostRange: 'Saves ~$65,000/yr on streaming & testing SaaS licensing',
    complianceLevel: 'ISO 27001 audited, End-to-End Encrypted question vaults',
    recommendedInfra: 'Auto-scaling Kubernetes cluster with Redis cache tier handling 100k+ concurrent exam submissions',
    corePillars: [
      {
        title: '100k+ Concurrent Mock Engine',
        description: 'Exact NTA/JEE/UPSC replica test interface with zero latency during high-stakes question loads.',
        icon: 'Timer'
      },
      {
        title: 'AIR Rank & Percentile Predictor',
        description: 'Instant statistical normalization, negative marking breakdown, and percentile projections.',
        icon: 'TrendingUp'
      },
      {
        title: 'Military-Grade Question Bank DRM',
        description: 'Watermarked dynamic video playback, disabled screen capture, and encrypted question payloads.',
        icon: 'Lock'
      }
    ],
    customFeatures: [
      'Question-level time analysis highlighting guess-work vs conceptual mastery',
      'Live doubts chat with instant AI audio/latex solution solver',
      'Integrated batch rank leaderboards with motivational streak counters',
      'Daily 15-minute high-yield booster tests with automated revision cycles'
    ]
  },
  university: {
    id: 'university',
    label: 'Universities & Higher Ed',
    subtitle: 'Accreditation-ready digital learning infrastructure and credit-transfer management',
    summary: 'Enterprise architectures designed for universities modernizing their distance education, NAAC/UGC accreditation tracking, thesis submissions, and multi-department course catalogs.',
    audience: 'Public/private universities, autonomous degree colleges, and polytechnic institutes.',
    timeToLaunch: '6 to 10 Weeks',
    estimatedCostRange: '60% cost reduction vs enterprise Blackboard / Canvas license bloat',
    complianceLevel: 'LTI 1.3 Advantage, SCORM, xAPI, WCAG 2.1 AA Accessibility',
    recommendedInfra: 'Hybrid Cloud or On-Premise Kubernetes with disaster recovery across multi-AZ datacenters',
    corePillars: [
      {
        title: 'Accreditation & NAAC Telemetry',
        description: 'One-click exports of student learning outcomes (SLO) and program outcome attainment reports.',
        icon: 'Award'
      },
      {
        title: 'Plagiarism & Turnitin/AI Detection',
        description: 'Integrated thesis and assignment originality verification with similarity scoring.',
        icon: 'FileCheck'
      },
      {
        title: 'Credit-Based Course Electives',
        description: 'Automated student course registration with prerequisite check and prerequisite enrollment locks.',
        icon: 'BookOpen'
      }
    ],
    customFeatures: [
      'LTI 1.3 integration with existing campus ERPs and student information systems',
      'Faculty research repository and peer-reviewed capstone project vault',
      'Single Sign-On (SSO) via SAML, Microsoft Azure AD, and Google Workspace',
      'Multi-lingual UI support (English, Hindi, Malayalam, Arabic, Spanish)'
    ]
  },
  coaching: {
    id: 'coaching',
    label: 'Boutique Coaching & Academies',
    subtitle: 'Agile, conversion-focused academy engines for independent educators and creators',
    summary: 'Built for high-growth coaching academies, corporate trainers, and creator-educators seeking an ultra-clean, branded learning experience with powerful marketing and checkout funnels.',
    audience: 'Subject matter experts, regional tuition academies, bootcamps, and executive trainers.',
    timeToLaunch: '2 to 3 Weeks',
    estimatedCostRange: 'Zero recurring revenue-share fees; 100% margin retention',
    complianceLevel: 'Global consumer privacy & secure PCI-DSS tokenized payments',
    recommendedInfra: 'Serverless Edge architecture with Cloudflare CDN for lightning-fast global page loads',
    corePillars: [
      {
        title: 'High-Converting Sales Funnels',
        description: 'Pre-built landing pages, lead capture webinars, automated email/WhatsApp sequences.',
        icon: 'Sparkles'
      },
      {
        title: 'Branded Mobile Learning App',
        description: 'Launch your academy app on iOS and Android under your own brand identity.',
        icon: 'Smartphone'
      },
      {
        title: 'Community & Peer Discussions',
        description: 'Moderated community channels, direct messaging, and cohort-based masterminds.',
        icon: 'Users'
      }
    ],
    customFeatures: [
      '1-Click UPI & credit card checkouts with instant course unlock',
      'Pre-recorded drip schedule combined with weekly live masterclasses',
      'Automated completion certificates with verifiable LinkedIn share links',
      'Affiliate referral engine for student advocates and ambassadors'
    ]
  }
};

export const TRIVANDRUM_ADVANTAGES = [
  {
    title: 'Technopark: India’s IT Pioneer',
    subtitle: 'World-Class Infrastructure',
    description: 'Technopark Trivandrum is India’s first, largest, and greenest IT park, housing 70,000+ technology professionals and tier-4 datacenters with 99.999% power redundancy.',
    stat: '70,000+',
    statLabel: 'Tech Workforce in Technopark',
    highlight: 'Zero downtime campus environment'
  },
  {
    title: 'Kerala: The Knowledge Capital',
    subtitle: 'Unrivaled Academic Foundations',
    description: 'Boasting India’s highest literacy rate (96.2%) and premier engineering institutions like CET, IIITM-K, and Kerala Digital University, providing elite software architects.',
    stat: '96.2%',
    statLabel: 'State Literacy & Tech Acumen',
    highlight: 'Premier computer science engineering talent'
  },
  {
    title: '50-60% TCO Advantage',
    subtitle: 'Capital Efficiency Without Compromise',
    description: 'By operating in Trivandrum instead of Silicon Valley or hyper-inflated metro hubs, we pass massive engineering savings directly to you with zero compromise on code quality.',
    stat: '55%',
    statLabel: 'Average Development TCO Savings',
    highlight: 'Fixed budgets with clear engineering deliverables'
  },
  {
    title: 'Submarine Cable Connectivity',
    subtitle: 'Direct Low-Latency Gateway',
    description: 'Direct maritime optical cable landings in Kerala ensure direct high-speed low-latency backbones to Europe, the Middle East, and Southeast Asia.',
    stat: '< 24ms',
    statLabel: 'Backbone Latency to Gulf & SEA',
    highlight: 'Direct global internet exchange links'
  }
];

export const COMPARISON_DATA = [
  {
    feature: 'IP & Source Code Ownership',
    ficusValley: '100% Full Codebase Handover (Git repo belongs to you)',
    legacySaaS: 'Locked inside proprietary cloud; Zero code access',
    metroAgencies: 'Expensive IP buy-out clauses or shared ownership'
  },
  {
    feature: 'Custom Live Streaming Architecture',
    ficusValley: 'Dedicated WebRTC/HLS with custom low-cost AWS/Cloudflare egress',
    legacySaaS: 'Strict per-seat Zoom/Vimeo fees that balloon with scale',
    metroAgencies: 'Generic wrappers around third-party paid APIs'
  },
  {
    feature: 'Direct Access to Principal Architects',
    ficusValley: 'Direct Slack/Teams channel with Trivandrum Tech Leads',
    legacySaaS: 'Tier-1 chatbot and delayed email ticket queues',
    metroAgencies: 'Buffered through account managers and sales middlemen'
  },
  {
    feature: 'AI Grading & Assessment Customization',
    ficusValley: 'Bespoke fine-tuned rubrics grounded in your curriculum',
    legacySaaS: 'Basic generic multiple choice; no bespoke subjective AI',
    metroAgencies: 'High-cost experimental pilot projects'
  },
  {
    feature: 'Ongoing Cost Structure',
    ficusValley: 'Transparent infra cost + flexible SLA support (predictable)',
    legacySaaS: 'Per-student monthly tax that penalizes your success',
    metroAgencies: 'High hourly billing with frequent scope expansions'
  }
];

export const CLIENT_TESTIMONIALS: CaseStudyItem[] = [
  {
    id: 'apex-global',
    clientName: 'Apex Global Academy',
    clientCategory: 'K-12 & International School Network',
    location: 'Dubai & Kochi',
    headline: 'Unified 18 campuses into one custom LMS with zero streaming jitter',
    summary: 'Apex Global needed to migrate 34,000 students from a clunky legacy LMS to a modern white-label portal with synchronized smart classroom hardware.',
    metrics: [
      { label: 'Latency Reduction', value: '-72%' },
      { label: 'Active Students', value: '34,000' },
      { label: 'AWS Egress Savings', value: '$48,000/yr' }
    ],
    quote: 'Ficus Valley transformed our entire digital learning stack. Their team in Trivandrum operates like our in-house engineering team—responsive, meticulous, and deeply committed to student experience.',
    author: 'Dr. Arvind Menon',
    role: 'Chief Academic Officer, Apex Global Network'
  },
  {
    id: 'horizon-testprep',
    clientName: 'Horizon National TestPrep',
    clientCategory: 'Competitive Exam Institute',
    location: 'Bangalore & New Delhi',
    headline: 'Scaled to 85,000 concurrent mock test-takers with zero downtime',
    summary: 'Facing server crashes during Sunday all-India tests on their previous vendor, Horizon brought Ficus Valley to re-architect their examination microservices.',
    metrics: [
      { label: 'Concurrent Capacity', value: '100k+' },
      { label: 'Test Load Speed', value: '120ms' },
      { label: 'Rank Engine Calc', value: 'Instant' }
    ],
    quote: 'When 85,000 students log in at precisely 9:00 AM for a national mock exam, failure is not an option. Ficus Valley’s Kubernetes architecture held rock solid without a single dropped packet.',
    author: 'Priya Nair',
    role: 'Founder & Managing Director, Horizon TestPrep'
  },
  {
    id: 'eduvance-global',
    clientName: 'EduVance Global Learning',
    clientCategory: 'Professional Healthcare EdTech',
    location: 'London & Singapore',
    headline: 'Deployed AI-automated clinical grading and interactive case studies',
    summary: 'EduVance needed an advanced clinical case simulator with subjective automated scoring calibrated to UK medical board standards.',
    metrics: [
      { label: 'Grading Time', value: '-84%' },
      { label: 'Student Completion', value: '+41%' },
      { label: 'Time to Launch', value: '5 Weeks' }
    ],
    quote: 'The engineering depth from Trivandrum blew us away. We evaluated London and US agencies at triple the price, but Ficus Valley delivered superior architecture with unmatched velocity.',
    author: 'Marcus Vance',
    role: 'Head of Digital Strategy, EduVance UK'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'ip-ownership',
    category: 'Ownership',
    question: 'Do we own 100% of the source code and intellectual property?',
    answer: 'Yes, absolutely. Unlike off-the-shelf LMS platforms that lock you into monthly student subscriptions, Ficus Valley delivers 100% unencumbered intellectual property. All GitHub/GitLab repositories, custom microservices, mobile app source codes, and deployment pipelines belong exclusively to your organization upon project handover.'
  },
  {
    id: 'migration-timeline',
    category: 'Migration',
    question: 'How do you handle migration from our existing Moodle, Canvas, or WordPress LMS?',
    answer: 'We deploy automated ETL data migration scripts that securely transfer your student records, historical quiz submissions, progress logs, video libraries, and course structures without breaking user credentials or losing historical analytics. We typically run parallel sandbox testing for 7-14 days before switching the DNS.'
  },
  {
    id: 'security-compliance',
    category: 'Security',
    question: 'What security standards and data privacy protections are implemented?',
    answer: 'Our architectures follow strict ISO 27001, SOC-2 Type II standards, and data protection compliance (FERPA for US, GDPR for Europe, and India’s DPDP Act). We implement AES-256 database encryption at rest, TLS 1.3 in transit, automated vulnerability scanning, and hardware-backed DRM for protected video streaming.'
  },
  {
    id: 'time-to-launch',
    category: 'Architecture',
    question: 'What is the typical timeframe from kickoff to full production deployment?',
    answer: 'A customized modular white-label LMS with our battle-tested streaming and assessment engines typically launches to staging within 3 to 4 weeks, with full production rollout in 5 to 7 weeks. For massive multi-campus university architectures with hardware integrations, timelines average 8 to 12 weeks.'
  },
  {
    id: 'trivandrum-advantage',
    category: 'Architecture',
    question: 'Why choose Ficus Valley in Trivandrum over a US, European, or Bengaluru agency?',
    answer: 'Trivandrum is Kerala’s premier technology hub, centered around Technopark—India’s greenest and first IT park. With world-class telecommunications infrastructure, lower attrition rates among senior architects, and 50-60% cost efficiency compared to metropolitan tech centers, you get senior-level craftsmanship and long-term continuity without inflated overheads.'
  },
  {
    id: 'concurrent-streaming',
    category: 'Architecture',
    question: 'Can your virtual classroom infrastructure handle 50,000+ simultaneous live students?',
    answer: 'Yes. Our hybrid streaming architecture utilizes an autoscaling WebRTC mesh for active two-way participants (interactive podium, student questions, breakout rooms) coupled with low-latency CDN broadcast (LL-HLS) for mass concurrent viewers. This architecture has been stress-tested to over 100,000 concurrent students with zero server degradation.'
  }
];

export const CLIENT_LOGOS = [
  { name: 'Apex Global Academy', badge: '34k Students', region: 'UAE & India' },
  { name: 'Kerala Digital University Partner', badge: 'State Network', region: 'India' },
  { name: 'EduVance Health UK', badge: 'MedTech', region: 'United Kingdom' },
  { name: 'Horizon TestPrep', badge: '85k Examinees', region: 'National' },
  { name: 'Vanguard International K-12', badge: 'IB World', region: 'Singapore' },
  { name: 'Cambridge Virtual College', badge: 'Vocational', region: 'Europe' }
];
