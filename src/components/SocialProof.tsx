import React from 'react';
import { CLIENT_LOGOS } from '../data/edtechData';
import { Users, Clock, Globe, ShieldCheck, CheckCircle } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const metrics = [
    {
      value: '500,000+',
      label: 'Active Learners Powered',
      subtext: 'Across schools, universities & test-prep',
      icon: Users,
      color: 'text-indigo-600'
    },
    {
      value: '99.98%',
      label: 'Broadcast Uptime SLA',
      subtext: 'High-availability WebRTC & HLS mesh',
      icon: Clock,
      color: 'text-emerald-600'
    },
    {
      value: '< 180ms',
      label: 'Global Edge Latency',
      subtext: 'Optimized via regional point-of-presence',
      icon: ShieldCheck,
      color: 'text-indigo-600'
    },
    {
      value: '14+ Countries',
      label: 'Deployments Worldwide',
      subtext: 'India, UAE, UK, Singapore, US & Qatar',
      icon: Globe,
      color: 'text-emerald-600'
    }
  ];

  return (
    <section className="bg-white border-y border-slate-200/80 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scale Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 pb-12 border-b border-slate-100">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-slate-50 transition">
                <div className={`p-2 rounded-lg bg-slate-50 mb-3 ${m.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-mono">
                  {m.value}
                </div>
                <div className="text-sm font-semibold text-slate-800 mt-1">
                  {m.label}
                </div>
                <div className="text-xs text-slate-500 mt-0.5 max-w-[200px]">
                  {m.subtext}
                </div>
              </div>
            );
          })}
        </div>

        {/* Client Institutions Logo Bar */}
        <div className="pt-10">
          <p className="text-center text-xs font-bold tracking-wider uppercase text-slate-500 mb-8">
            Trusted by Leading Educational Institutions, Charter Networks & High-Stakes Academies
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
            {CLIENT_LOGOS.map((client, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-200/70 bg-slate-50/60 hover:bg-white hover:border-indigo-300 hover:shadow-xs transition group"
              >
                <div className="text-sm font-bold text-slate-700 group-hover:text-indigo-600 transition text-center leading-snug">
                  {client.name}
                </div>
                <div className="flex items-center space-x-1 mt-1.5 text-[10px] text-slate-600 font-medium">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>{client.badge}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Compliance certification micro-badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-600 font-medium pt-4">
            <div className="flex items-center space-x-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>ISO 27001:2022 Certified</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>SOC-2 Type II Ready Architecture</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>FERPA & GDPR Compliant Vaults</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>AWS Certified EdTech Solution Partner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
