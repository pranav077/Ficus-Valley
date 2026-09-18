import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, Sparkles, ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenDemoModal: (presetRequirement?: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenDemoModal }) => {
  const [students, setStudents] = useState<number>(8500);
  const [liveHours, setLiveHours] = useState<number>(120);

  // Dynamic cost models:
  // Legacy SaaS: Typically charges per student tier ($1.50 - $3.50/active student) + Zoom Enterprise Large Meeting ($500-$2000/mo) + Vimeo OTT bandwidth
  const legacyMonthlyPerStudentCost = students < 5000 ? 2.4 : students < 20000 ? 1.8 : 1.3;
  const legacyLiveZoomAddon = liveHours * 18;
  const legacyMonthlyTotal = Math.round(students * legacyMonthlyPerStudentCost + legacyLiveZoomAddon + 450);
  const legacyAnnualTotal = legacyMonthlyTotal * 12;

  // Ficus Valley White-Label Custom Infra on AWS/Cloudflare:
  // Cloud infrastructure cost only (EC2/EKS + Cloudflare stream egress at ~$0.001/min) + small ops reserve
  const cloudInfraMonthly = Math.round((students * 0.22) + (liveHours * 4.2) + 380);
  const ficusAnnualInfra = cloudInfraMonthly * 12;

  // Annual Savings:
  const annualSavings = Math.max(0, legacyAnnualTotal - ficusAnnualInfra);
  const threeYearSavings = Math.round(annualSavings * 3);
  const breakEvenMonths = Math.max(2.5, Math.min(6.2, Number((42000 / (annualSavings / 12)).toFixed(1))));

  return (
    <section id="roi-calculator" className="py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            <span>Financial & Infrastructure Modeling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Calculate Your Total Cost of Ownership (TCO)
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            See how much your organization saves by replacing bloated monthly per-seat SaaS 
            with high-efficiency white-label infrastructure engineered by Ficus Valley.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Controls Side */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-8">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-lg font-bold text-slate-900">
                Institutional Scale Parameters
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Adjust sliders to model your monthly learner base and broadcast requirements.
              </p>
            </div>

            {/* Slider 1: Active Learners */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-slate-800">
                  Monthly Active Learners
                </label>
                <span className="px-3 py-1 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 font-mono font-bold text-sm">
                  {students.toLocaleString()} Students
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="75000"
                step="500"
                value={students}
                onChange={(e) => setStudents(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>1,000 (Small Academy)</span>
                <span>25,000</span>
                <span>75,000+ (Large Network)</span>
              </div>
            </div>

            {/* Slider 2: Live Lecture Hours */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-slate-800">
                  Live Streaming Lectures / Month
                </label>
                <span className="px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono font-bold text-sm">
                  {liveHours} Hours / mo
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="400"
                step="10"
                value={liveHours}
                onChange={(e) => setLiveHours(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>20 Hours</span>
                <span>200 Hours</span>
                <span>400+ Hours</span>
              </div>
            </div>

            {/* Breakdown details */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs text-slate-600">
              <div className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">
                Underlying Cost Structure Assumptions:
              </div>
              <div className="flex items-center justify-between">
                <span>Legacy Multi-SaaS per-seat tax:</span>
                <span className="font-mono text-slate-800 font-medium">~$1.30 - $2.40 / student / mo</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Ficus Valley AWS Cloudflare direct cost:</span>
                <span className="font-mono text-emerald-700 font-bold">~$0.22 / student / mo</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Intellectual Property Ownership:</span>
                <span className="text-emerald-700 font-semibold">100% Client Owned (Zero recurring licensing)</span>
              </div>
            </div>
          </div>

          {/* Results Side */}
          <div className="lg:col-span-5 bg-slate-900 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800">
            <div>
              <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-[11px] font-mono font-semibold mb-4 border border-emerald-500/30">
                PROJECTION SUMMARY
              </span>

              {/* Annual Savings Highlight Box */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 mb-6">
                <div className="text-xs text-slate-400 font-medium">
                  Estimated Annual Savings
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono mt-1">
                  ${annualSavings.toLocaleString()}
                  <span className="text-sm text-slate-400 font-sans font-normal ml-1">/ year</span>
                </div>
                <div className="text-xs text-slate-300 mt-2 flex items-center space-x-1">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>3-Year Projected Savings: <strong>${threeYearSavings.toLocaleString()}</strong></span>
                </div>
              </div>

              {/* Comparison breakdown */}
              <div className="space-y-3 text-xs mb-6">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/60">
                  <span className="text-slate-300">Legacy Multi-SaaS Cost:</span>
                  <span className="font-mono text-rose-400 font-bold">${legacyAnnualTotal.toLocaleString()} / yr</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/60">
                  <span className="text-slate-300">Ficus Valley Cloud Infra:</span>
                  <span className="font-mono text-emerald-400 font-bold">${ficusAnnualInfra.toLocaleString()} / yr</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/60">
                  <span className="text-slate-300">Estimated Break-Even:</span>
                  <span className="font-mono text-indigo-300 font-bold">~{breakEvenMonths} Months</span>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => onOpenDemoModal(`TCO Audit for ${students.toLocaleString()} students with ${annualSavings.toLocaleString()} estimated savings`)}
                id="calculator-schedule-audit-btn"
                className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm transition flex items-center justify-center space-x-2 shadow-lg shadow-indigo-600/30 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Request Detailed TCO Audit Report</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-[10px] text-slate-400 mt-2.5">
                Includes custom cloud topology blueprint and bandwidth pricing audit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
