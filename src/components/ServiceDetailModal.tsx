import React from 'react';
import { ServiceItem } from '../types';
import { X, CheckCircle, Cpu, ArrowRight, Layers, ShieldCheck, Sparkles } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookCall: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookCall,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-slate-900 text-white p-6 rounded-t-2xl flex items-start justify-between border-b border-slate-800">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {service.badge}
              </span>
              <span className="text-xs text-emerald-400 font-mono">
                {service.metrics}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              {service.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Ficus Valley Principal Engineering Blueprint • Trivandrum Delivery Center
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 text-slate-700">
          {/* Executive Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Executive Architectural Summary
            </h4>
            <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
              {service.fullDesc}
            </p>
          </div>

          {/* Key Engineering Capabilities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center space-x-1.5">
              <Layers className="w-4 h-4 text-indigo-600" />
              <span>Core Architecture Specifications</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-slate-800 leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Handover */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center space-x-1.5">
              <Cpu className="w-4 h-4 text-indigo-600" />
              <span>Production Tech Stack Handover</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 font-mono text-xs font-medium border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Guaranteed Deliverables */}
          <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-900 mb-2 flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-indigo-700" />
              <span>Client Deliverables & IP Protection</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-indigo-950">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-slate-50 p-4 sm:p-6 border-t border-slate-200 rounded-b-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            <span>Includes 100% source code repository handover & 60-day post-launch warranty</span>
          </div>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-100 transition cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookCall(service.title);
              }}
              className="w-1/2 sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 shadow-sm transition cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Consult Principal Architect</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
