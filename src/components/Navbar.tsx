import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, Sparkles, PhoneCall, MapPin } from 'lucide-react';
import { FicusValleyLogo } from './FicusValleyLogo';

interface NavbarProps {
  onOpenDemoModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemoModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Platform Solutions', href: '#services' },
    { label: 'Solution Builder', href: '#solution-builder' },
    { label: 'Attingal Hub', href: '#regional-trust' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'ROI Calculator', href: '#roi-calculator' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-[#0F172A] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
              EDTECH INNOVATION
            </span>
            <span className="hidden sm:inline font-medium text-slate-200">
              Powering 500,000+ Active Learners Globally
            </span>
            <span className="text-slate-400 flex items-center space-x-1">
              <MapPin className="w-3 h-3 text-indigo-400 inline shrink-0" />
              <span>Behind KSRTC Bus Stand, Attingal, Trivandrum, Kerala</span>
            </span>
          </div>
          <div className="flex items-center space-x-4 text-slate-400 text-xs">
            <span className="hidden md:flex items-center space-x-1 hover:text-white transition">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
              <span>ISO 27001 & SOC2 Verified</span>
            </span>
            <button
              onClick={onOpenDemoModal}
              className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center space-x-1 cursor-pointer"
            >
              <span>Schedule Tech Demo</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Sticky Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-md py-2.5 bg-white/95'
            : 'bg-[#F8FAFC]/95 backdrop-blur-md py-3.5 border-b border-slate-200/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Ficus Valley Brand Logo with geometric bear totem */}
          <a href="#" className="flex items-center group">
            <FicusValleyLogo variant="dark" size="sm" showTagline={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenDemoModal}
              id="nav-schedule-demo-btn"
              className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 shadow-sm hover:shadow-md hover:shadow-indigo-500/20 active:scale-[0.98] transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-indigo-200" />
              <span>Schedule Tech Demo</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/50 rounded-lg transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-slate-100 flex flex-col space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemoModal();
                }}
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-indigo-600 text-white font-semibold text-sm shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                <span>Schedule Tech Demo</span>
              </button>
              <div className="flex flex-col items-center justify-center space-y-1 text-xs text-slate-500 py-1 text-center">
                <div className="flex items-center space-x-1.5 font-medium text-slate-700">
                  <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Behind KSRTC Bus Stand, Attingal, Trivandrum</span>
                </div>
                <div className="flex items-center space-x-1.5 text-slate-400 text-[11px]">
                  <PhoneCall className="w-3 h-3 text-slate-400" />
                  <span>+91 (471) 270-0891</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
