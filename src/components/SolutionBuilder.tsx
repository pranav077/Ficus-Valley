import React, { useState } from 'react';
import { OrgType } from '../types';
import { SOLUTION_BLUEPRINTS } from '../data/edtechData';
import { 
  GraduationCap, 
  Timer, 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  Server, 
  Download,
  Calendar
} from 'lucide-react';

interface SolutionBuilderProps {
  onOpenDemoModal: (presetRequirement?: string, presetOrg?: OrgType) => void;
}

export const SolutionBuilder: React.FC<SolutionBuilderProps> = ({ onOpenDemoModal }) => {
  const [selectedOrg, setSelectedOrg] = useState<OrgType>('testprep');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'Automated Attendance & WhatsApp SMS',
    'AI-Assisted Doubt Solver'
  ]);
  const [blueprintGenerated, setBlueprintGenerated] = useState(false);

  const blueprint = SOLUTION_BLUEPRINTS[selectedOrg];

  const toggleAddon = (feature: string) => {
    if (selectedAddons.includes(feature)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== feature));
    } else {
      setSelectedAddons([...selectedAddons, feature]);
    }
  };

  const handleGenerateBlueprint = () => {
    setBlueprintGenerated(true);
    setTimeout(() => {
      onOpenDemoModal(`Tailored ${blueprint.label} Blueprint with ${selectedAddons.length} custom modules`, selectedOrg);
    }, 600);
  };

  const getOrgIcon = (type: OrgType) => {
    switch (type) {
      case 'k12':
        return <GraduationCap className="w-5 h-5" />;
      case 'testprep':
        return <Timer className="w-5 h-5" />;
      case 'university':
        return <BookOpen className="w-5 h-5" />;
      case 'coaching':
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="solution-builder" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Dynamic Architecture Configurator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Interactive Solution Builder
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Select your educational model to simulate your tailored virtual classroom architecture, 
            recommended cloud topology, and compliance roadmap.
          </p>
        </div>

        {/* Organization Type Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          {(['k12', 'testprep', 'university', 'coaching'] as OrgType[]).map((type) => {
            const bp = SOLUTION_BLUEPRINTS[type];
            const isSelected = selectedOrg === type;
            return (
              <button
                key={type}
                onClick={() => setSelectedOrg(type)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/10 scale-[1.02]'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-indigo-300 hover:bg-slate-50'
                }`}
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${
                  isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {getOrgIcon(type)}
                </div>
                <div>
                  <div className="font-bold text-sm sm:text-base leading-snug">
                    {bp.label}
                  </div>
                  <div className={`text-[11px] mt-1 line-clamp-1 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                    {bp.subtitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Blueprint Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-5xl mx-auto">
          {/* Top Banner */}
          <div className="bg-slate-900 text-white p-6 sm:p-8 border-b border-slate-800">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Tailored for: {blueprint.label}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Timeframe: {blueprint.timeToLaunch}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  {blueprint.subtitle}
                </h3>
                <p className="mt-2 text-sm text-slate-300 max-w-3xl leading-relaxed">
                  {blueprint.summary}
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 shrink-0 text-center md:text-right">
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  Target Audience Scope
                </div>
                <div className="text-xs text-emerald-400 font-medium mt-1 max-w-[220px]">
                  {blueprint.audience}
                </div>
              </div>
            </div>
          </div>

          {/* Core Content Body */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Core Pillars Grid */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-4 flex items-center space-x-1.5">
                <Layers className="w-4 h-4 text-indigo-600" />
                <span>Default Recommended Architecture Pillars</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {blueprint.corePillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-indigo-50/30 hover:border-indigo-200 transition"
                  >
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs mb-3">
                      0{idx + 1}
                    </div>
                    <div className="font-bold text-sm text-slate-900 mb-1.5">
                      {pillar.title}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Feature Customizer Checklist */}
            <div className="pt-4 border-t border-slate-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center space-x-1.5">
                    <Sparkles className="w-4 h-4 text-indigo-600" />
                    <span>Select Additional Modules to Include in Blueprint</span>
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Click to toggle features based on your institutional roadmap.
                  </p>
                </div>
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-lg self-start">
                  {selectedAddons.length} Modules Active
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {blueprint.customFeatures.map((feat, idx) => {
                  const isChecked = selectedAddons.includes(feat);
                  return (
                    <button
                      key={idx}
                      onClick={() => toggleAddon(feat)}
                      className={`p-3 rounded-xl border text-left flex items-start space-x-3 transition cursor-pointer ${
                        isChecked
                          ? 'bg-indigo-50/80 border-indigo-300 text-slate-900'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 ${
                        isChecked ? 'bg-indigo-600 text-white' : 'border border-slate-400'
                      }`}>
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <span className="text-xs font-medium leading-snug">{feat}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Infrastructure & Compliance Meta Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center space-x-2 text-slate-600 font-bold mb-1">
                  <Server className="w-4 h-4 text-indigo-600" />
                  <span>Recommended Cloud Topology</span>
                </div>
                <p className="text-slate-600 leading-relaxed font-mono text-[11px]">
                  {blueprint.recommendedInfra}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center space-x-2 text-slate-600 font-bold mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Regulatory Compliance Baseline</span>
                </div>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  {blueprint.complianceLevel}
                </p>
              </div>
            </div>

            {/* Call to Action Footer inside Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold">
                  Ready to inspect the full {blueprint.label} architecture spec?
                </div>
                <div className="text-xs text-slate-300 mt-0.5">
                  Receive a custom 14-page Technical Architecture Document with cost estimates.
                </div>
              </div>

              <button
                onClick={handleGenerateBlueprint}
                id="builder-generate-blueprint-btn"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold transition flex items-center justify-center space-x-2 shadow-md shrink-0 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Generate Custom Solution Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
