import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { useContent } from '../data/content';
import { useTranslation } from 'react-i18next';

interface ServicesWheelProps {
  onSelectPillarConsultation: (pillarName: string) => void;
}

export default function ServicesWheel({ onSelectPillarConsultation }: ServicesWheelProps) {
  const { PILLARS_DATA } = useContent();
  const { t } = useTranslation();
  const [activePillarId, setActivePillarId] = useState<string>('juridique-fiscal');

  const activePillar = PILLARS_DATA.find((p) => p.id === activePillarId) || PILLARS_DATA[0];

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scale':
        return <Scale className="w-5 h-5" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <Scale className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="expertises"
      className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-[#0D0D0C] text-[#F9F9F6] border-b border-[#F9F9F6]/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-[#F9F9F6]/10">
          <div>
            <span className="text-xs uppercase tracking-wide text-[#C5A880]">
              Expertises
            </span>
            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#F9F9F6] mt-3">
              Pôles d’Expertises & Direction
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Firm Intro */}
          <div className="lg:col-span-4 flex flex-col space-y-6 lg:pr-6 lg:border-r lg:border-[#F9F9F6]/10">
            <h3 className="font-serif-title text-3xl font-light text-[#F9F9F6] leading-tight">
              Deux départements.<br />Une lecture commune.
            </h3>
            <p className="font-serif-editorial text-base text-[#F9F9F6]/70 leading-relaxed">
              LegalEase Partners réunit les compétences juridiques, fiscales et financières nécessaires à l’accompagnement des opérations de l’entreprise.
            </p>
          </div>

          {/* Right Column: Interactive Services Selector */}
          <div className="lg:col-span-8 flex flex-col space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PILLARS_DATA.map((pillar) => {
                const isActive = pillar.id === activePillarId;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActivePillarId(pillar.id)}
                    className={`relative text-left p-4 sm:p-5 transition-all duration-300 border-b cursor-pointer flex items-center space-x-4 ${
                      isActive
                        ? 'border-[#C5A880] text-[#F9F9F6]'
                        : 'border-[#F9F9F6]/10 text-[#F9F9F6]/60 hover:text-[#F9F9F6]'
                    }`}
                  >
                    <div className={`p-2 ${isActive ? 'text-[#C5A880]' : 'text-[#F9F9F6]/50'}`}>
                      {getPillarIcon(pillar.iconName)}
                    </div>
                    <div>
                      <h3 className="font-serif-title text-lg font-semibold tracking-wide">
                        {pillar.name}
                      </h3>
                      <p className="text-xs text-[#F9F9F6]/60 mt-1">
                        Dirigé par {pillar.lead}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="pt-4"
              >
                <p className="font-serif-editorial text-lg text-[#F9F9F6]/90 mb-8 leading-relaxed">
                  {activePillar.shortDesc}
                </p>

                <div className="mb-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    {activePillar.services.map((srv, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-[#C5A880] mt-2 rounded-full" />
                        <span className="text-sm text-[#F9F9F6]/80">{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-[#F9F9F6]/10 flex items-center justify-between">
                  <span className="text-xs text-[#F9F9F6]/50 italic">
                    {activePillar.keyHighlight}
                  </span>
                  <button
                    onClick={() => onSelectPillarConsultation(activePillar.name)}
                    className="group inline-flex items-center text-sm font-medium tracking-wide uppercase text-[#C5A880] hover:text-[#F9F9F6] transition-colors"
                  >
                    Prendre rendez-vous
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
