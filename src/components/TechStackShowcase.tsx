import React, { useState } from 'react';
import { 
  Radio, 
  Cpu, 
  Database, 
  Cloud, 
  Lock, 
  Sparkles, 
  Terminal, 
  CheckCircle,
  Zap
} from 'lucide-react';

export const TechStackShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'streaming' | 'frontend' | 'backend' | 'cloud' | 'ai'>('streaming');

  const categories = [
    { id: 'streaming', label: 'Real-Time Streaming', icon: Radio },
    { id: 'frontend', label: 'Web & Native Mobile', icon: Cpu },
    { id: 'backend', label: 'APIs & Microservices', icon: Database },
    { id: 'cloud', label: 'Cloud & Kubernetes', icon: Cloud },
    { id: 'ai', label: 'AI & Assessment Models', icon: Sparkles },
  ];

  const stackDetails = {
    streaming: {
      title: 'Ultra-Low Latency Broadcast & Media Pipeline',
      description: 'Carrier-grade WebRTC and selective forwarding units (SFU) capable of streaming high-definition synchronous video with bidirectional data channels under 180ms worldwide.',
      techs: [
        { name: 'Mediasoup / LiveKit', desc: 'SFU WebRTC engine for multi-participant rooms', tag: 'Core WebRTC' },
        { name: 'AWS IVS / Cloudflare Stream', desc: 'Low-latency HLS broadcast for 50k+ passive viewers', tag: 'Global CDN' },
        { name: 'FFmpeg Audio Transcode', desc: 'Hardware-accelerated live audio normalization', tag: 'Media DSP' },
        { name: 'Redis Pub/Sub & WebSockets', desc: 'Sub-millisecond interactive polls & Q&A messaging', tag: 'Realtime Data' },
      ],
      benchmark: 'P99 Latency: 142ms | Packet Loss Recovery: up to 35% jitter'
    },
    frontend: {
      title: 'Native Mobile & High-Performance Web Portals',
      description: 'Clean, responsive, accessible student interfaces built for seamless touch interaction on budget smartphones, tablets, smartboards, and desktop browsers.',
      techs: [
        { name: 'Next.js & React 19', desc: 'Server-rendered high-speed student web applications', tag: 'Web Portal' },
        { name: 'React Native & Flutter', desc: 'Native iOS & Android apps with offline DRM caching', tag: 'Cross-Platform' },
        { name: 'Tailwind CSS', desc: 'Zero-runtime utility CSS matching institutional design', tag: 'UI Design' },
        { name: 'Widevine & FairPlay DRM', desc: 'Hardware-backed video content piracy prevention', tag: 'Security' },
      ],
      benchmark: 'Lighthouse Performance Score: 98+ | Cold Load: < 1.1s'
    },
    backend: {
      title: 'Resilient Microservices & Distributed Databases',
      description: 'High-throughput transactional backends handling course enrollments, automated exam evaluations, and real-time student activity logging.',
      techs: [
        { name: 'FastAPI & Go Microservices', desc: 'High-concurrency microservices processing 40k req/sec', tag: 'High-Throughput' },
        { name: 'PostgreSQL & TimescaleDB', desc: 'ACID-compliant relational database and analytics logs', tag: 'Persistent Store' },
        { name: 'Redis Cluster', desc: 'Sub-millisecond session state and leaderboards', tag: 'In-Memory Cache' },
        { name: 'Qdrant & Milvus Vector DB', desc: 'Semantic textbook search and AI student doubt retrieval', tag: 'Vector Store' },
      ],
      benchmark: 'Zero-Drop Transaction SLA: 99.99% | ACID Enforced'
    },
    cloud: {
      title: 'Multi-Region Cloud Infrastructure & DevOps Automation',
      description: 'Production-ready Infrastructure as Code (IaC) utilizing automated autoscaling clusters deployed to your choice of AWS, GCP, or hybrid campus on-prem.',
      techs: [
        { name: 'Kubernetes (EKS / GKE)', desc: 'Auto-scaling pod clusters dynamically scaling with student load', tag: 'Orchestration' },
        { name: 'Terraform & GitHub Actions', desc: 'Immutable infrastructure definitions and CI/CD pipelines', tag: 'IaC & Automation' },
        { name: 'Prometheus & Grafana', desc: 'Real-time telemetry, error tracing, and stream quality alerts', tag: 'Observability' },
        { name: 'Cloudflare Enterprise Edge', desc: 'DDoS mitigation, WAF security, and edge caching nodes', tag: 'Edge Protection' },
      ],
      benchmark: 'Cold Pod Scaling: < 30 seconds | Automated Failover'
    },
    ai: {
      title: 'Fine-Tuned AI Scoring & Intelligent Tutoring Models',
      description: 'Specialized language models and computer vision pipelines fine-tuned exclusively on academic syllabi, grading rubrics, and non-invasive proctoring.',
      techs: [
        { name: 'Google Gemini 2.5 Flash', desc: 'Real-time formative grading and multimodal essay scoring', tag: 'LLM Evaluation' },
        { name: 'OpenCV Telemetry Engine', desc: 'Head movement & audio gaze detection for exam integrity', tag: 'Vision Proctoring' },
        { name: 'Whisper Audio Transcription', desc: 'Automated video lecture indexing and searchable transcripts', tag: 'Speech-to-Text' },
        { name: 'LangChain & RAG Workflows', desc: 'Zero-hallucination doubt clearing strictly from textbooks', tag: 'RAG Pipeline' },
      ],
      benchmark: 'Grading Rubric Alignment: 94.8% | Zero Student Data Leakage'
    }
  };

  const current = stackDetails[activeCategory];

  return (
    <section id="tech-stack" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold mb-3">
            <Terminal className="w-3.5 h-3.5 text-indigo-600" />
            <span>Enterprise Cloud & Media Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineered with Modern, Non-Proprietary Open Standards
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            We build with world-class open technologies so you never face vendor lock-in. 
            Your source code, containers, and databases remain 100% portable.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tech Showcase Panel */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white border border-slate-800 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                Architecture Specification
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mt-1 text-white">
                {current.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300 max-w-3xl leading-relaxed">
                {current.description}
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 shrink-0">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                Verified Benchmark
              </div>
              <div className="text-xs sm:text-sm font-mono text-emerald-400 font-semibold mt-1">
                {current.benchmark}
              </div>
            </div>
          </div>

          {/* Tech Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {current.techs.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/60">
                    {item.tag}
                  </span>
                  <Zap className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 transition-colors" />
                </div>
                <div className="font-bold text-base text-white group-hover:text-indigo-300 transition">
                  {item.name}
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Infrastructure Guarantee Note */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Full Docker Compose & Helm Chart manifests delivered with every codebase</span>
            </div>
            <div className="text-slate-400 font-mono text-[11px]">
              Trivandrum Cloud Engineering Labs
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
