import React, { useState } from 'react';
import { CORE_SERVICES } from '../data/edtechData';
import { ServiceItem } from '../types';
import { 
  Video, 
  Layout, 
  BrainCircuit, 
  CreditCard, 
  Server, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Layers
} from 'lucide-react';

interface ServicesGridProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenDemoModal: (presetRequirement?: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  onSelectService,
  onOpenDemoModal,
}) => {
  const [filter, setFilter] = useState<'all' | 'streaming' | 'lms' | 'ai' | 'payments' | 'hybrid'>('all');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Video':
        return <Video className="w-6 h-6 text-indigo-600" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-indigo-600" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-6 h-6 text-emerald-600" />;
      case 'CreditCard':
        return <CreditCard className="w-6 h-6 text-indigo-600" />;
      case 'Server':
        return <Server className="w-6 h-6 text-emerald-600" />;
      default:
        return <Layers className="w-6 h-6 text-indigo-600" />;
    }
  };

  const filteredServices = CORE_SERVICES.filter((svc) => {
    if (filter === 'all') return true;
    if (filter === 'streaming') return svc.id === 'virtual-classrooms';
    if (filter === 'lms') return svc.id === 'custom-lms';
    if (filter === 'ai') return svc.id === 'ai-grading-analytics';
    if (filter === 'payments') return svc.id === 'monetization-payments';
    if (filter === 'hybrid') return svc.id === 'hybrid-infra';
    return true;
  });

  return (
    <section id="services" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Spectrum Digital Education Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Enterprise EdTech Services Engineered for Massive Scale
            </h2>
            <p className="mt-3 text-base text-slate-600">
              From sub-second live classrooms to custom AI evaluation pipelines and campus IoT bridges, 
              we build robust architectures that you own outright.
            </p>
          </div>

          {/* Quick Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-1.5 bg-slate-200/60 p-1 rounded-xl self-start">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                filter === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Services ({CORE_SERVICES.length})
            </button>
            <button
              onClick={() => setFilter('streaming')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                filter === 'streaming'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Live Classrooms
            </button>
            <button
              onClick={() => setFilter('lms')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                filter === 'lms'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Custom LMS
            </button>
            <button
              onClick={() => setFilter('ai')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                filter === 'ai'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              AI Assessment
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Top Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                    {service.badge}
                  </span>
                </div>

                {/* Title and Short Description */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Key Metric Pill */}
                <div className="mt-4 inline-flex items-center px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-medium border border-emerald-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>
                  {service.metrics}
                </div>

                {/* Key Capabilities List */}
                <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    Architecture Highlights:
                  </span>
                  {service.keyFeatures.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                      <span className="leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Mini Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
                  {service.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-600 border border-slate-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onSelectService(service)}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center space-x-1 cursor-pointer"
                >
                  <span>Inspect Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenDemoModal(service.title)}
                  className="px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 text-xs font-semibold border border-slate-200 hover:border-indigo-200 transition cursor-pointer"
                >
                  Request Build
                </button>
              </div>
            </div>
          ))}

          {/* Consultation Highlight Box */}
          <div className="bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-800 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>
            <div>
              <div className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-[11px] font-semibold mb-4 border border-indigo-500/30">
                <Sparkles className="w-3 h-3" />
                <span>Custom Enterprise Consultation</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white">
                Need a Custom Hybrid Specification?
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Have existing student records, bespoke grading schemes, or campus hardware? 
                Our Trivandrum systems architects will draft a comprehensive Technical Architecture Document (TAD) for your organization.
              </p>
              <div className="mt-6 space-y-2 text-xs text-slate-300">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Direct CTO & Principal Architect review</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Complete cloud egress cost optimization audit</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Fixed milestone pricing with zero hidden vendor markups</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800">
              <button
                onClick={() => onOpenDemoModal('Custom Architecture Assessment')}
                className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition flex items-center justify-center space-x-2 shadow-md cursor-pointer"
              >
                <span>Schedule Free Architecture Review</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
