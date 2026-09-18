import React, { useState } from 'react';
import { FAQS } from '../data/edtechData';
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';

interface FaqSectionProps {
  onOpenDemoModal: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenDemoModal }) => {
  const [openIds, setOpenIds] = useState<string[]>(['ip-ownership', 'security-compliance']);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const toggleItem = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const categories = ['All', 'Ownership', 'Security', 'Migration', 'Architecture'];

  const filteredFaqs = FAQS.filter((faq) => {
    if (selectedCategory === 'All') return true;
    return faq.category === selectedCategory;
  });

  return (
    <section id="faqs" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
            <span>Architecture & Contract Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Architecture Questions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Clear answers about white-label source code rights, student privacy compliance, 
            and data migration timelines.
          </p>

          {/* Category Filter */}
          <div className="mt-6 flex flex-wrap justify-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                      {faq.category}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-indigo-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Callout */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="text-left">
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">
              Have a specialized security audit or bespoke timeline requirement?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Speak directly with our Chief Technology Architect in Trivandrum.
            </p>
          </div>
          <button
            onClick={onOpenDemoModal}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm transition flex items-center justify-center space-x-2 shrink-0 shadow-xs cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask a Principal Architect</span>
          </button>
        </div>
      </div>
    </section>
  );
};
