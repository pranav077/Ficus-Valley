/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { ServicesGrid } from './components/ServicesGrid';
import { RegionalTrust } from './components/RegionalTrust';
import { SolutionBuilder } from './components/SolutionBuilder';
import { TechStackShowcase } from './components/TechStackShowcase';
import { RoiCalculator } from './components/RoiCalculator';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ScheduleDemoModal } from './components/ScheduleDemoModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ServiceItem, OrgType } from './types';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [presetRequirement, setPresetRequirement] = useState('');
  const [presetOrg, setPresetOrg] = useState<OrgType>('testprep');

  const handleOpenDemoModal = (requirement = '', org: OrgType = 'testprep') => {
    setPresetRequirement(requirement);
    setPresetOrg(org);
    setIsDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  const handleExploreSolutions = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 selection:bg-indigo-500/20 selection:text-indigo-950">
      {/* Sticky Navigation */}
      <Navbar onOpenDemoModal={() => handleOpenDemoModal('General Strategy & Tech Demo')} />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* 1. Hero Section with Live Virtual Classroom Telemetry Simulator */}
        <Hero
          onOpenDemoModal={() => handleOpenDemoModal('Hero Section Strategy Consultation')}
          onExploreSolutions={handleExploreSolutions}
        />

        {/* 2. Social Proof & Global Scale Metrics */}
        <SocialProof />

        {/* 3. Core Services Interactive Grid */}
        <ServicesGrid
          onSelectService={(service) => setSelectedService(service)}
          onOpenDemoModal={(serviceTitle) =>
            handleOpenDemoModal(serviceTitle ? `Architecture for ${serviceTitle}` : '')
          }
        />

        {/* 4. Regional Trust (Trivandrum & Technopark Kerala Innovation Hub) */}
        <RegionalTrust
          onOpenDemoModal={() => handleOpenDemoModal('Trivandrum Delivery Model Review')}
        />

        {/* 5. Interactive Solution-Builder Demo */}
        <SolutionBuilder
          onOpenDemoModal={(req, org) => handleOpenDemoModal(req, org)}
        />

        {/* 6. Enterprise Tech Stack Showcase */}
        <TechStackShowcase />

        {/* 7. Dynamic ROI & Infrastructure Calculator */}
        <RoiCalculator
          onOpenDemoModal={(preset) => handleOpenDemoModal(preset)}
        />

        {/* 8. Verified Testimonials & Case Studies */}
        <Testimonials
          onOpenDemoModal={() => handleOpenDemoModal('Case Study & Peer Review Consultation')}
        />

        {/* 9. Intuitive FAQ Accordion */}
        <FaqSection
          onOpenDemoModal={() => handleOpenDemoModal('Technical & Compliance Architecture Inquiry')}
        />
      </main>

      {/* 10. High-Impact Dark Footer with Trivandrum Details */}
      <Footer
        onOpenDemoModal={() => handleOpenDemoModal('Footer Consultation Inquiry')}
      />

      {/* Modals & Slide-overs */}
      <ScheduleDemoModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemoModal}
        presetRequirement={presetRequirement}
        presetOrg={presetOrg}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookCall={(serviceTitle) => {
          setSelectedService(null);
          handleOpenDemoModal(`Architectural Consultation for ${serviceTitle}`);
        }}
      />
    </div>
  );
}
