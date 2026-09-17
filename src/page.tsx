'use client';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import ServicesWheel from './components/ServicesWheel';
import ClientLifecycle from './components/ClientLifecycle';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import TeamSection from './components/TeamSection';

export default function LegalEaseLandingPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPillarForBooking, setSelectedPillarForBooking] = useState<string | undefined>();

  const handleOpenBooking = (pillarName?: string) => {
    setSelectedPillarForBooking(pillarName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedPillarForBooking(undefined);
  };

  return (
    <div className="min-h-screen bg-[#F9F9F6] text-[#111111] flex flex-col font-sans selection:bg-[#C5A880]/30 selection:text-[#111111]">
      {/* Section A: Modern Navigation Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-grow">
        {/* Section B: Premium Hero Fold (Visualizing "Une Seule Signature") */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Section C: Dynamic Philosophy Section (Scroll-to-Highlight Text) */}
        <Philosophy />

        {/* Section D: Interactive Services Wheel (Dark Mode Transition) */}
        <ServicesWheel onSelectPillarConsultation={(pillar) => handleOpenBooking(pillar)} />

        {/* Section E: Interactive Client Lifecycle Tool (The Timeline Slider) */}
        <ClientLifecycle onOpenBooking={() => handleOpenBooking()} />

        {/* Section F: Team Section */}
        <TeamSection />
      </main>

      {/* Section G: Corporate Footer (B2B Trust & Legal Declarations) */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Consultation / Appointment Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedPillar={selectedPillarForBooking}
      />
    </div>
  );
}
