import React, { useState } from 'react';
import { CLIENT_TESTIMONIALS } from '../data/edtechData';
import { ChevronLeft, ChevronRight, Quote, Star, MapPin, Building, ArrowRight } from 'lucide-react';

interface TestimonialsProps {
  onOpenDemoModal: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenDemoModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? CLIENT_TESTIMONIALS.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === CLIENT_TESTIMONIALS.length - 1 ? 0 : prevIdx + 1));
  };

  const current = CLIENT_TESTIMONIALS[currentIndex];

  return (
    <section id="case-studies" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold mb-3">
              <Star className="w-3.5 h-3.5 fill-indigo-600 text-indigo-600" />
              <span>Verified Client Success</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Transforming EdTech Outcomes Globally
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Read how leading institutions scaled their digital footprint with Ficus Valley engineering.
            </p>
          </div>

          {/* Carousel controls */}
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <button
              onClick={prev}
              className="p-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 transition cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 transition cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 relative overflow-hidden transition-all duration-300">
          <Quote className="absolute top-6 right-8 w-24 h-24 text-slate-200/60 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800">
                  {current.clientCategory}
                </span>
                <span className="flex items-center text-xs text-slate-500 font-medium">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400" />
                  {current.location}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                "{current.headline}"
              </h3>

              <p className="text-base sm:text-lg text-slate-700 italic leading-relaxed">
                "{current.quote}"
              </p>

              <div className="pt-2">
                <div className="font-bold text-base text-slate-900">
                  {current.author}
                </div>
                <div className="text-xs sm:text-sm text-slate-500">
                  {current.role} • <span className="font-semibold text-slate-700">{current.clientName}</span>
                </div>
              </div>
            </div>

            {/* Right Metrics Box */}
            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Verified Architectural Metrics
              </div>

              <div className="space-y-3">
                {current.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-600 font-medium">{m.label}</span>
                    <span className="font-mono text-base font-extrabold text-indigo-600">{m.value}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onOpenDemoModal}
                className="w-full mt-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center space-x-2 mt-8">
            {CLIENT_TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-indigo-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Jump to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
