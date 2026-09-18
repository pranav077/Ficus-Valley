import React, { useState } from 'react';
import { TRIVANDRUM_ADVANTAGES, COMPARISON_DATA } from '../data/edtechData';
import { MapPin, ShieldCheck, Check, X, ArrowRight, Building2, Zap, Award, Sparkles } from 'lucide-react';

interface RegionalTrustProps {
  onOpenDemoModal: () => void;
}

export const RegionalTrust: React.FC<RegionalTrustProps> = ({ onOpenDemoModal }) => {
  const [activeTab, setActiveTab] = useState<'advantages' | 'benchmark'>('advantages');

  return (
    <section id="regional-trust" className="py-16 md:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>The Kerala EdTech Innovation Corridor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineered in India’s Premier Knowledge Corridor
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Headquartered at <strong className="text-slate-900 font-semibold">Behind KSRTC Bus Stand, Attingal, Trivandrum, Kerala</strong>, Ficus Valley bridges local engineering excellence with global virtual classroom scalability—delivering 100% IP ownership, senior team stability, and 50–60% capital efficiency.
          </p>

          {/* Toggle between Narrative & Comparison */}
          <div className="mt-6 inline-flex bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              onClick={() => setActiveTab('advantages')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition cursor-pointer ${
                activeTab === 'advantages'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Strategic Regional Strengths
            </button>
            <button
              onClick={() => setActiveTab('benchmark')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition cursor-pointer ${
                activeTab === 'benchmark'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Enterprise Comparison Matrix
            </button>
          </div>
        </div>

        {activeTab === 'advantages' ? (
          <div className="space-y-12">
            {/* 4 Pillars of Trivandrum Engineering */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TRIVANDRUM_ADVANTAGES.map((adv, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:border-emerald-300 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tracking-tight text-emerald-600">
                      {adv.stat}
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-0.5">
                      {adv.statLabel}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mt-4">
                      {adv.title}
                    </h3>
                    <div className="text-xs font-medium text-indigo-600 mb-2">
                      {adv.subtitle}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {adv.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-200/60 text-[11px] font-medium text-emerald-700 flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>{adv.highlight}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Attingal Headquarters Showcase Card */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                <div className="lg:col-span-2 space-y-2">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Physical Engineering Center</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Ficus Valley Headquarters: Attingal, Trivandrum
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Located <strong>Behind KSRTC Bus Stand in Attingal, Trivandrum</strong>, our engineering lab houses our core WebRTC real-time systems architects, cloud infrastructure specialists, and educational UX researchers. We welcome educational leaders, university chancellors, and institution founders for in-person architecture reviews and live virtual classroom stress-testing sessions.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-500 font-medium">
                    <span className="flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span>Behind KSRTC Bus Stand Transit Junction</span>
                    </span>
                    <span className="flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                      <span>NH-66 Educational & IT Corridor</span>
                    </span>
                    <span className="flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                      <span>25 Mins to Technopark & Airport</span>
                    </span>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-3">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Visit Our Innovation Lab
                  </div>
                  <div className="text-xs text-slate-600 space-y-1">
                    <p className="font-semibold text-slate-800">Ficus Valley Technologies</p>
                    <p>Behind KSRTC Bus Stand, Attingal</p>
                    <p>Trivandrum, Kerala 695101, India</p>
                    <p className="text-emerald-700 font-medium pt-1">Open Mon–Sat • 9:00 AM – 7:30 PM IST</p>
                  </div>
                  <button
                    onClick={onOpenDemoModal}
                    className="w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <span>Plan Campus Visit / Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Technopark Spotlight Feature Banner */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 p-6 sm:p-8 text-white border border-slate-800 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2 space-y-4">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Technopark Phase III Campus</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                    Why the World’s Leading EdTechs are Moving Engineering to Trivandrum
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                    Unlike hyper-volatile metropolitan agency markets with 30%+ annual turnover, our senior engineering leads in Trivandrum stay with your project for years. You get continuous domain mastery, zero knowledge leakage, and 24/7 follow-the-sun uptime covering UK, US, Middle East, and Asia-Pacific time zones.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-300">
                    <div className="flex items-center space-x-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Dedicated Senior Tech Leads</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-amber-400" />
                      <span>4-Hour Timezone Overlap with US & EMEA</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-indigo-400" />
                      <span>Direct Subsea Fiber Connectivity</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-950/80 rounded-xl p-5 border border-slate-800 space-y-4 text-center sm:text-left">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Capital Allocation Comparison
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-300">Silicon Valley / London Agency</span>
                        <span className="font-mono text-slate-400">$180k - $320k</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-rose-500 h-full w-[90%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-300">Bengaluru Tier-1 Agency</span>
                        <span className="font-mono text-slate-400">$95k - $160k</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-amber-500 h-full w-[65%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-emerald-400 font-bold">Ficus Valley (Trivandrum)</span>
                        <span className="font-mono text-emerald-400 font-bold">$38k - $72k</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full w-[35%]"></div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={onOpenDemoModal}
                    className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition flex items-center justify-center space-x-2 shadow-xs cursor-pointer"
                  >
                    <span>Request Engineering Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Enterprise Comparison Matrix */
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white border-b border-slate-800">
                  <th className="py-4 px-5 font-semibold">Strategic Dimension</th>
                  <th className="py-4 px-5 font-bold text-emerald-400 bg-slate-950">
                    Ficus Valley (Trivandrum)
                  </th>
                  <th className="py-4 px-5 font-semibold text-slate-300">
                    Off-The-Shelf SaaS (Zoom/Kajabi)
                  </th>
                  <th className="py-4 px-5 font-semibold text-slate-300">
                    Metro Software Agencies
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition">
                    <td className="py-4 px-5 font-semibold text-slate-900">
                      {row.feature}
                    </td>
                    <td className="py-4 px-5 font-medium text-slate-900 bg-emerald-50/40 border-x border-emerald-100">
                      <div className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-emerald-950 font-medium">{row.ficusValley}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-slate-600">
                      <div className="flex items-start space-x-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.legacySaaS}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-slate-600">
                      <div className="flex items-start space-x-2">
                        <span className="w-4 h-4 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-[10px] shrink-0 mt-0.5">!</span>
                        <span>{row.metroAgencies}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};
