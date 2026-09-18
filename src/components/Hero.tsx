import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Play, 
  Video, 
  CheckCircle2, 
  Radio, 
  Users, 
  Zap, 
  Activity, 
  Shield, 
  Cpu, 
  Sparkles,
  Layers,
  Award,
  Globe2
} from 'lucide-react';

interface HeroProps {
  onOpenDemoModal: () => void;
  onExploreSolutions: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemoModal, onExploreSolutions }) => {
  const [activeTab, setActiveTab] = useState<'stream' | 'ai' | 'mobile'>('stream');
  const [liveStudents, setLiveStudents] = useState(14892);
  const [latency, setLatency] = useState(136);
  const [isClassActive, setIsClassActive] = useState(true);

  // Subtle real-time metric fluctuations for living dashboard feel
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStudents((prev) => prev + Math.floor(Math.random() * 7) - 3);
      setLatency((prev) => Math.max(124, Math.min(152, prev + Math.floor(Math.random() * 5) - 2)));
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-[#F8FAFC]">
      {/* Background ambient lighting and subtle mesh */}
      <div className="absolute inset-0 mesh-grid-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] hero-glow pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow Badge */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-800 text-xs font-semibold shadow-xs">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            <span>EdTech Architecture Firm</span>
            <span className="text-slate-300">•</span>
            <span className="text-emerald-700 font-medium">Attingal, Trivandrum, Kerala</span>
          </div>
          <div className="hidden sm:inline-flex items-center text-xs text-slate-500 font-medium">
            <span className="w-1 h-1 rounded-full bg-slate-300 mx-2"></span>
            Working to build a better learning platform • 100% IP Ownership
          </div>
        </div>

        {/* Hero Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            Powering Next-Gen <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-700 to-emerald-600">
              Virtual Classrooms
            </span>{' '}
            from Trivandrum to the World
          </h1>

          {/* Subheadline as requested */}
          <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto">
            We architect carrier-grade <strong className="text-slate-900 font-semibold">white-label LMS platforms</strong>, 
            sub-second <strong className="text-slate-900 font-semibold">live streaming infrastructure</strong>, 
            fine-tuned <strong className="text-slate-900 font-semibold">AI assessment tools</strong>, and autoscale cloud systems 
            for global educational institutions and ambitious edtech creators.
          </p>

          {/* Dual Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={onOpenDemoModal}
              id="hero-book-call-cta"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-xl bg-indigo-600 text-white font-semibold text-base hover:bg-indigo-700 shadow-md hover:shadow-lg hover:shadow-indigo-500/25 active:scale-[0.98] transition cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-indigo-200" />
              <span>Book a Strategy Call</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={onExploreSolutions}
              id="hero-explore-solutions-cta"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-white text-slate-800 font-semibold text-base border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-xs transition cursor-pointer"
            >
              <span>Explore Solutions</span>
              <Layers className="w-4 h-4 text-slate-500" />
            </button>
          </div>

          {/* Key Value Guarantee Bullets */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-500">
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Full Source Code Handover</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Sub-180ms Ultra-Low Latency</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>SOC-2 & FERPA Certified</span>
            </div>
          </div>
        </div>

        {/* Dynamic Dashboard Preview Graphic */}
        <div className="mt-12 lg:mt-14 max-w-5xl mx-auto">
          <div className="relative rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden">
            {/* Top Window Bar */}
            <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
                  ficus-engine-v4.8 // live-classroom-node-trv.edu
                </span>
              </div>

              {/* View Switcher Tabs */}
              <div className="flex items-center bg-slate-900 rounded-lg p-1 border border-slate-800 text-xs">
                <button
                  onClick={() => setActiveTab('stream')}
                  className={`px-3 py-1 rounded-md font-medium transition cursor-pointer ${
                    activeTab === 'stream'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Live WebRTC Engine
                </button>
                <button
                  onClick={() => setActiveTab('ai')}
                  className={`px-3 py-1 rounded-md font-medium transition cursor-pointer ${
                    activeTab === 'ai'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  AI Assessment Core
                </button>
                <button
                  onClick={() => setActiveTab('mobile')}
                  className={`px-3 py-1 rounded-md font-medium transition cursor-pointer ${
                    activeTab === 'mobile'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  White-Label Mobile App
                </button>
              </div>

              {/* Live Connection Indicator */}
              <div className="flex items-center space-x-2">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono text-emerald-400 font-semibold">
                  TRV-EDGE-01 : {latency}ms
                </span>
              </div>
            </div>

            {/* Interactive Preview Canvas Body */}
            <div className="p-4 sm:p-6 bg-slate-900 text-slate-200">
              {activeTab === 'stream' && (
                <div className="space-y-4">
                  {/* Status telemetry row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3">
                      <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                        <span>Concurrent Learners</span>
                        <Users className="w-3.5 h-3.5 text-indigo-400" />
                      </div>
                      <div className="text-lg sm:text-xl font-bold text-white font-mono">
                        {liveStudents.toLocaleString()}
                      </div>
                      <div className="text-[10px] text-emerald-400 mt-0.5 flex items-center">
                        <span className="mr-1">↑</span> 99.98% stream health
                      </div>
                    </div>

                    <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3">
                      <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                        <span>Edge Latency</span>
                        <Zap className="w-3.5 h-3.5 text-amber-400" />
                      </div>
                      <div className="text-lg sm:text-xl font-bold text-white font-mono">
                        {latency} ms
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">
                        WebRTC SFU mesh
                      </div>
                    </div>

                    <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3">
                      <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                        <span>Video Protocol</span>
                        <Radio className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <div className="text-lg sm:text-xl font-bold text-white font-mono">
                        1080p60
                      </div>
                      <div className="text-[10px] text-emerald-400 mt-0.5">
                        Adaptive Bitrate (4.6 Mbps)
                      </div>
                    </div>

                    <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3">
                      <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                        <span>Regional Hub</span>
                        <Globe2 className="w-3.5 h-3.5 text-indigo-400" />
                      </div>
                      <div className="text-lg sm:text-xl font-bold text-white">
                        Trivandrum
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">
                        Technopark Datacenter
                      </div>
                    </div>
                  </div>

                  {/* Main Classroom Screen Layout Mock */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Primary Stage */}
                    <div className="lg:col-span-2 relative rounded-xl bg-slate-950 border border-slate-800 overflow-hidden min-h-[260px] sm:min-h-[300px] flex flex-col justify-between p-4">
                      {/* Teacher Stage Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-0.5 rounded-md bg-rose-600 text-[10px] font-bold tracking-wide uppercase text-white flex items-center space-x-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                            <span>LIVE BROADCAST</span>
                          </span>
                          <span className="text-xs font-semibold text-slate-300">
                            Advanced Physics: Quantum Electrodynamics
                          </span>
                        </div>
                        <span className="text-xs text-slate-400 font-mono">
                          Room ID: #TRV-8942
                        </span>
                      </div>

                      {/* Mock Interactive Teacher Blackboard Area */}
                      <div className="my-auto py-6 px-4 rounded-lg bg-slate-900/90 border border-slate-800/80 flex flex-col items-center justify-center text-center">
                        <div className="text-xs font-mono text-indigo-400 mb-2">
                          [ Synchronized Interactive Vector Canvas ]
                        </div>
                        <div className="font-mono text-sm sm:text-base text-emerald-300 font-semibold tracking-wide">
                          ∇ · E = ρ / ε₀ &nbsp;|&nbsp; ∇ × B - (1/c²) ∂E/∂t = μ₀J
                        </div>
                        <p className="text-xs text-slate-400 mt-2 max-w-md">
                          Sub-second delta synchronization enabled across 14,800+ student tablets simultaneously.
                        </p>
                      </div>

                      {/* Control Tray */}
                      <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => setIsClassActive(!isClassActive)}
                            className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition cursor-pointer"
                          >
                            {isClassActive ? 'Pause Lecture' : 'Resume Lecture'}
                          </button>
                          <span className="text-xs text-slate-400">
                            Teacher: Dr. S. K. Nambiar (Technopark Studio B)
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] bg-emerald-900/50 text-emerald-300 border border-emerald-700/50">
                            DRM Encrypted
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Secondary Student Interaction Panel */}
                    <div className="rounded-xl bg-slate-950 border border-slate-800 p-3.5 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
                          <span className="text-xs font-bold text-slate-300 flex items-center space-x-1.5">
                            <Activity className="w-3.5 h-3.5 text-indigo-400" />
                            <span>Live Doubts & Moderation</span>
                          </span>
                          <span className="text-[10px] text-slate-400">AI Filter Active</span>
                        </div>

                        <div className="space-y-2 text-xs">
                          <div className="p-2 rounded-lg bg-slate-900 border border-slate-800/70">
                            <div className="flex items-center justify-between text-slate-400 text-[11px]">
                              <span className="font-semibold text-indigo-300">Ananya R. (Kochi)</span>
                              <span>12s ago</span>
                            </div>
                            <p className="text-slate-300 text-[11px] mt-1">
                              "Does the divergence theorem apply directly in curved space-time here?"
                            </p>
                            <span className="mt-1 inline-block text-[9px] px-1.5 py-0.5 rounded bg-indigo-950 text-indigo-400 border border-indigo-800/40">
                              Rank 1 Upvoted (84 students)
                            </span>
                          </div>

                          <div className="p-2 rounded-lg bg-slate-900 border border-slate-800/70">
                            <div className="flex items-center justify-between text-slate-400 text-[11px]">
                              <span className="font-semibold text-emerald-300">David M. (London)</span>
                              <span>34s ago</span>
                            </div>
                            <p className="text-slate-300 text-[11px] mt-1">
                              "Screen resolution is crystal clear on 4K, latency under 150ms!"
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-800/80 mt-2">
                        <div className="flex items-center justify-between text-[11px] text-slate-400">
                          <span>AI Engagement Score:</span>
                          <span className="font-bold text-emerald-400">96.4% Attentive</span>
                        </div>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full mt-1.5 overflow-hidden">
                          <div className="bg-emerald-500 h-1.5 rounded-full w-[96%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'ai' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800">
                      <div>
                        <div className="text-sm font-bold text-white flex items-center space-x-2">
                          <Cpu className="w-4 h-4 text-indigo-400" />
                          <span>AI Formative Grading Engine // Rubric Calibration</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">
                          Autonomous essay & code grading grounded purely on syllabus rubrics without hallucinations.
                        </p>
                      </div>
                      <span className="self-start sm:self-auto px-2 py-1 rounded bg-indigo-950 text-indigo-300 border border-indigo-800 text-xs font-mono">
                        Model: Gemini-FineTuned-EdTech
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs space-y-2">
                        <div className="text-slate-400 font-semibold">Student Submission: Subjective Essay</div>
                        <div className="p-2.5 rounded bg-slate-950 font-mono text-slate-300 text-[11px] leading-relaxed border border-slate-800">
                          "Photosynthesis converts solar photons into chemical ATP via photosystem II and I, using chlorophyll pigments in thylakoid membranes..."
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-slate-400">
                          <span>Word count: 482 words</span>
                          <span className="text-emerald-400">Originality: 98%</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs space-y-2">
                        <div className="text-emerald-400 font-semibold flex items-center justify-between">
                          <span>Autonomous Rubric Evaluation</span>
                          <span className="bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800 text-[10px]">
                            Score: 19.5 / 20 (97.5%)
                          </span>
                        </div>
                        <ul className="space-y-1 text-[11px] text-slate-300 list-disc list-inside">
                          <li>Accurately details Z-scheme electron transport chain</li>
                          <li>Identified Calvin cycle carbon fixation enzymatic steps</li>
                          <li>Suggested improvement: Mention water photolysis byproduct (O₂)</li>
                        </ul>
                        <div className="text-[10px] text-slate-500 pt-1">
                          Evaluated in 420ms • Deans rubric audit trail logged
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'mobile' && (
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <div className="md:col-span-2 space-y-3">
                      <span className="px-2.5 py-1 rounded-md bg-indigo-950 text-indigo-300 border border-indigo-800 text-xs font-semibold">
                        White-Label iOS & Android Deployment
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        Your Academy Brand on the App Store & Google Play
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        We deliver 100% white-labeled mobile applications compiled under your enterprise Apple Developer and Google Play console accounts. Includes encrypted offline video downloads, push notification campaigns, and parent diaries.
                      </p>
                      <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                        <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                          ✓ Widevine & FairPlay Hardware DRM
                        </div>
                        <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                          ✓ Razorpay & UPI 1-Click Buy
                        </div>
                        <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                          ✓ Offline Video Playback Cache
                        </div>
                        <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                          ✓ Automated App Store Approvals
                        </div>
                      </div>
                    </div>

                    {/* App Mock Frame */}
                    <div className="mx-auto w-full max-w-[210px] p-2.5 rounded-2xl bg-slate-900 border-2 border-slate-700 shadow-xl">
                      <div className="bg-slate-950 rounded-xl p-3 border border-slate-800 text-center space-y-2">
                        <div className="w-8 h-8 rounded-lg bg-indigo-600 mx-auto flex items-center justify-center font-bold text-white text-xs">
                          FV
                        </div>
                        <div className="text-xs font-bold text-white">Your Academy App</div>
                        <div className="text-[10px] text-slate-400">Continue Learning: Physics Batch A</div>
                        <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                          <div className="bg-indigo-500 h-full w-3/4"></div>
                        </div>
                        <button className="w-full py-1 rounded bg-indigo-600 text-[10px] font-semibold text-white">
                          Join Live Class
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Terminal Bar */}
            <div className="bg-slate-950/80 px-4 py-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <div className="flex items-center space-x-3">
                <span className="text-emerald-400 font-mono">● LIVE KUBERNETES CLUSTER</span>
                <span className="hidden sm:inline">Region: ap-south-1 (Mumbai / Trivandrum Edge)</span>
              </div>
              <div className="font-mono text-slate-400">
                Ficus Valley EdTech Architecture Stack v4.2
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
