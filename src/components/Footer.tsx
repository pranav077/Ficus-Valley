import React, { useState } from 'react';
import { FicusValleyLogo } from './FicusValleyLogo';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Globe2,
  Lock,
  Compass
} from 'lucide-react';

interface FooterProps {
  onOpenDemoModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemoModal }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#0F172A] text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-slate-800">
          {/* Brand & Regional HQ Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <FicusValleyLogo variant="light" size="md" showTagline={true} />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm pt-2">
              Working to build a better learning platform. Helping global education providers, universities, and K-12 networks architect, scale, and automate virtual classrooms with 100% intellectual property ownership.
            </p>

            {/* Regional Address & Contact Details */}
            <div className="space-y-2.5 text-xs text-slate-400 pt-2">
              <div className="flex items-start space-x-2.5 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-200 block text-xs">
                    Engineering Headquarters & Delivery Center:
                  </span>
                  <span className="text-slate-300">
                    Ficus valley, Behind KSRTC Bus stand, Attingal, Trivandrum, Kerala, India - 695101
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>architects@ficusvalley.com</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>+91 (471) 270-0891 / +91 94470 12890</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Timezone: IST (UTC +5:30) • 24/7 Global Follow-the-Sun SLA</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column 1: Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Platform Solutions
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-white transition">Virtual Classroom WebRTC</a></li>
              <li><a href="#services" className="hover:text-white transition">Custom White-Label LMS</a></li>
              <li><a href="#services" className="hover:text-white transition">AI Assessment & Grading</a></li>
              <li><a href="#services" className="hover:text-white transition">Monetization & UPI Gateways</a></li>
              <li><a href="#services" className="hover:text-white transition">Campus Hybrid Smart Rooms</a></li>
              <li><a href="#solution-builder" className="hover:text-white transition">Interactive Solution Builder</a></li>
            </ul>
          </div>

          {/* Quick Links Column 2: Tech & Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Architecture & Insights
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#regional-trust" className="hover:text-white transition">Why Trivandrum Hub?</a></li>
              <li><a href="#tech-stack" className="hover:text-white transition">Enterprise Tech Stack</a></li>
              <li><a href="#roi-calculator" className="hover:text-white transition">TCO & ROI Calculator</a></li>
              <li><a href="#case-studies" className="hover:text-white transition">Global Case Studies</a></li>
              <li><a href="#faqs" className="hover:text-white transition">Security & Migration FAQ</a></li>
              <li>
                <button
                  onClick={onOpenDemoModal}
                  className="text-indigo-400 hover:text-indigo-300 font-medium"
                >
                  Schedule Tech Demo →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter Sign-up */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>EdTech Systems Dispatch</span>
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Bi-weekly engineering briefs on sub-second WebRTC tuning, AI rubric calibration, and cloud egress optimization.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Subscribed! Welcome to the Ficus Valley Dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-indigo-500 transition"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition cursor-pointer"
                  >
                    Join
                  </button>
                </div>
                <div className="flex items-center space-x-1 text-[10px] text-slate-400">
                  <Lock className="w-3 h-3 text-slate-400" />
                  <span>Strict privacy. No marketing spam. Unsubscribe anytime.</span>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Compliance Badges & Certifications Row */}
        <div className="py-8 flex flex-wrap items-center justify-between gap-4 text-xs border-b border-slate-800 text-slate-400">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="font-semibold text-slate-400 uppercase tracking-wider text-[10px]">
              Security & Compliance:
            </span>
            <div className="flex items-center space-x-1.5 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>ISO 27001:2022</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>SOC-2 Type II Ready</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
              <span>FERPA & COPPA</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
              <span>GDPR / DPDP Compliant</span>
            </div>
          </div>

          <div className="text-slate-400 font-mono text-[11px]">
            Delivery Hub: Behind KSRTC Bus Stand, Attingal, Trivandrum, Kerala
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Ficus Valley Technologies Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-slate-400">
            <a href="#faqs" className="hover:text-slate-300 transition">Source Code Handover Terms</a>
            <a href="#faqs" className="hover:text-slate-300 transition">SLA Guarantee (99.98%)</a>
            <a href="#faqs" className="hover:text-slate-300 transition">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
