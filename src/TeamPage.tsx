import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import ibrahimaImg from './assets/ibrahima.jpeg';
import saliouImg from './assets/saliou.jpeg';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function TeamPage() {
  const { t } = useTranslation();
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
      {/* Reusing existing Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center text-sm font-medium uppercase tracking-wider text-[#111111]/60 hover:text-[#111111] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('team.back', "Retour à l'accueil")}
          </Link>
        </div>

        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="inline-block text-xs uppercase tracking-wide text-[#C5A880] mb-4">
            {t('team.badge')}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif-title text-[#111111] leading-tight mb-6">
            {t('team.title')}
          </h1>
          <p className="text-lg md:text-xl text-[#111111]/70 font-light leading-relaxed">
            {t('team.intro')}
          </p>
        </div>

        <div className="space-y-24">
          {/* Partner 1: Ibrahima */}
          <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start group">
            <div className="w-full lg:w-1/3 relative">
              <div className="aspect-[3/4] overflow-hidden rounded-sm">
                <img 
                  src={ibrahimaImg} 
                  alt="Ibrahima Souleymane MBAYE" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
              </div>
            </div>
            <div className="w-full lg:w-2/3 lg:pt-8">
              <div className="mb-6 border-b border-[#111111]/10 pb-6">
                <h2 className="text-3xl md:text-4xl font-serif-title text-[#111111] mb-2">Ibrahima Souleymane MBAYE</h2>
                <p className="text-[#B6966B] font-medium tracking-wide uppercase text-sm">{t('team.roles.ibrahima')}</p>
              </div>
              <h3 className="text-xl font-medium mb-4 text-[#111111]/90">{t('team.departments.ibrahima_title')}</h3>
              <p className="text-[#111111]/70 font-light leading-relaxed text-lg mb-6">
                {t('team.departments.ibrahima_desc')}
              </p>
              <button 
                onClick={() => handleOpenBooking('Juridique et Fiscal')}
                className="inline-flex items-center text-sm font-medium uppercase tracking-wider text-[#111111] border-b border-[#111111] pb-1 hover:text-[#B6966B] hover:border-[#B6966B] transition-colors"
              >
                {t('team.cta', 'Solliciter ce département')}
              </button>
            </div>
          </div>

          {/* Partner 2: Saliou */}
          <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start group">
            <div className="w-full lg:w-1/3 lg:order-last relative">
              <div className="aspect-[3/4] overflow-hidden rounded-sm">
                <img 
                  src={saliouImg} 
                  alt="Serigne Saliou Mbacke Gueye" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
              </div>
            </div>
            <div className="w-full lg:w-2/3 lg:pt-8 lg:text-right">
              <div className="mb-6 border-b border-[#111111]/10 pb-6">
                <h2 className="text-3xl md:text-4xl font-serif-title text-[#111111] mb-2">Serigne Saliou Mbacke Gueye</h2>
                <p className="text-[#B6966B] font-medium tracking-wide uppercase text-sm">{t('team.roles.saliou')}</p>
              </div>
              <h3 className="text-xl font-medium mb-4 text-[#111111]/90">{t('team.departments.saliou_title')}</h3>
              <p className="text-[#111111]/70 font-light leading-relaxed text-lg mb-6">
                {t('team.departments.saliou_desc')}
              </p>
              <button 
                onClick={() => handleOpenBooking('Corporate Finance')}
                className="inline-flex items-center text-sm font-medium uppercase tracking-wider text-[#111111] border-b border-[#111111] pb-1 hover:text-[#B6966B] hover:border-[#B6966B] transition-colors"
              >
                {t('team.cta')}
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer onOpenBooking={() => handleOpenBooking()} />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedPillar={selectedPillarForBooking}
      />
    </div>
  );
}
