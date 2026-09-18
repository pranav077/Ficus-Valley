import React, { useState, useEffect } from 'react';
import { OrgType } from '../types';
import { X, CheckCircle2, Calendar, Clock, Sparkles, Building, Mail, User, ShieldCheck, ArrowRight } from 'lucide-react';

interface ScheduleDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetRequirement?: string;
  presetOrg?: OrgType;
}

export const ScheduleDemoModal: React.FC<ScheduleDemoModalProps> = ({
  isOpen,
  onClose,
  presetRequirement = '',
  presetOrg = 'testprep',
}) => {
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [orgType, setOrgType] = useState<OrgType>(presetOrg);
  const [studentVolume, setStudentVolume] = useState('5,000 - 25,000');
  const [requirement, setRequirement] = useState(presetRequirement || 'Full-Stack White-Label LMS & Live Streaming');
  const [preferredSlot, setPreferredSlot] = useState('Tomorrow (IST 3:00 PM / UTC 9:30 AM)');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  useEffect(() => {
    if (presetRequirement) {
      setRequirement(presetRequirement);
    }
  }, [presetRequirement]);

  useEffect(() => {
    if (presetOrg) {
      setOrgType(presetOrg);
    }
  }, [presetOrg]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `FV-TRV-${Math.floor(1000 + Math.random() * 9000)}`;
    setRefId(generatedRef);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-slate-900 text-white p-6 rounded-t-3xl border-b border-slate-800 flex items-start justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Direct Engineering Access
              </span>
              <span className="text-xs text-emerald-400 font-mono">
                Attingal, Trivandrum
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Schedule Your Architecture Consultation
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Connect directly with our Principal EdTech Architects for a 30-minute tailored tech review.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-mono text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md font-semibold border border-indigo-200">
                  BOOKING REFERENCE: {refId}
                </span>
                <h4 className="text-2xl font-bold text-slate-900 mt-3">
                  Architecture Review Confirmed!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                  Thank you, <strong className="text-slate-900">{fullName || 'there'}</strong>. We have routed your requirements to our Senior Systems Architect at Ficus Valley, Behind KSRTC Bus Stand, Attingal, Trivandrum.
                </p>
              </div>

              {/* Consultation Details Card */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-left text-xs space-y-2.5 max-w-md mx-auto">
                <div className="flex justify-between text-slate-500">
                  <span>Organization:</span>
                  <span className="font-semibold text-slate-800">{organizationName || 'Your Institution'}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Scope Focus:</span>
                  <span className="font-semibold text-slate-800">{requirement}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Target Slot:</span>
                  <span className="font-semibold text-emerald-700">{preferredSlot}</span>
                </div>
                <div className="flex justify-between text-slate-500 border-t border-slate-200/80 pt-2">
                  <span>Lead Architect:</span>
                  <span className="font-mono text-slate-700">EdTech Labs // Attingal Hub, Trivandrum</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-indigo-50 border border-indigo-100 text-xs text-indigo-900 max-w-md mx-auto">
                A calendar invitation with a secure Google Meet link has been dispatched to <strong>{workEmail || 'your email'}</strong>.
              </div>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 flex items-center space-x-1">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>Your Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Rajesh Pillai"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-indigo-600 transition"
                  />
                </div>

                {/* Work Email */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 flex items-center space-x-1">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>Institutional Work Email *</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@institution.edu"
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-indigo-600 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Organization Name */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 flex items-center space-x-1">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    <span>Organization / Institution *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Global Academy"
                    value={organizationName}
                    onChange={(e) => setOrganizationName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-indigo-600 transition"
                  />
                </div>

                {/* Organization Type */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">
                    Institution Model *
                  </label>
                  <select
                    value={orgType}
                    onChange={(e) => setOrgType(e.target.value as OrgType)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-indigo-600 bg-white transition"
                  >
                    <option value="testprep">High-Stakes Test Prep (JEE / NEET / SAT)</option>
                    <option value="k12">K-12 Multi-Branch School Network</option>
                    <option value="university">University / Higher Education</option>
                    <option value="coaching">Boutique Coaching & Creator Academy</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Active Student Volume */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">
                    Active Monthly Learners
                  </label>
                  <select
                    value={studentVolume}
                    onChange={(e) => setStudentVolume(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-indigo-600 bg-white transition"
                  >
                    <option value="Under 2,500">Under 2,500 Students</option>
                    <option value="2,500 - 15,000">2,500 – 15,000 Students</option>
                    <option value="15,000 - 50,000">15,000 – 50,000 Students</option>
                    <option value="50,000+">50,000+ Enterprise Scale</option>
                  </select>
                </div>

                {/* Preferred Consultation Slot */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Preferred Review Slot</span>
                  </label>
                  <select
                    value={preferredSlot}
                    onChange={(e) => setPreferredSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-indigo-600 bg-white transition"
                  >
                    <option value="Tomorrow (IST 3:00 PM / UTC 9:30 AM)">Tomorrow (IST 3:00 PM / UTC 9:30 AM)</option>
                    <option value="Tomorrow (US Eastern 10:00 AM / IST 7:30 PM)">Tomorrow (US Eastern 10:00 AM)</option>
                    <option value="This Thursday (UK 2:00 PM / IST 7:30 PM)">This Thursday (UK 2:00 PM)</option>
                    <option value="Urgent - Within 4 Hours">Urgent Architecture Review (Next 4 Hours)</option>
                  </select>
                </div>
              </div>

              {/* Requirement Focus */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">
                  Primary Technical Requirement
                </label>
                <input
                  type="text"
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                  placeholder="e.g. Migrate 20,000 students from Moodle to custom WebRTC LMS"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-indigo-600 transition"
                />
              </div>

              {/* Notes */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">
                  Current Pain Points / Existing Tech Stack (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Currently experiencing video buffering during high concurrency; need DRM video protection..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-indigo-600 transition"
                />
              </div>

              {/* Trust Callout */}
              <div className="flex items-center space-x-2 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>NDA & Confidentiality Protected • No Sales Pitch • Direct Senior Architect Call</span>
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  id="modal-confirm-booking-btn"
                  className="w-full py-3.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition flex items-center justify-center space-x-2 shadow-lg shadow-indigo-600/25 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Confirm Architecture Session</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
