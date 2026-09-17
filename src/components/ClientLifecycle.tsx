import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import { useContent } from '../data/content';
import { useTranslation } from 'react-i18next';

interface ClientLifecycleProps {
  onOpenBooking: () => void;
}

export default function ClientLifecycle({ onOpenBooking }: ClientLifecycleProps) {
  const { LIFECYCLE_STAGES } = useContent();
  const { t } = useTranslation();
  const [activeStageIndex, setActiveStageIndex] = useState<number>(2);

  const currentStage = LIFECYCLE_STAGES[activeStageIndex];

  const handleNext = () => {
    setActiveStageIndex((prev) => (prev < LIFECYCLE_STAGES.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setActiveStageIndex((prev) => (prev > 0 ? prev - 1 : LIFECYCLE_STAGES.length - 1));
  };

  return (
    <section
      id="cycle-de-vie"
      className="py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-[#F9F9F6] text-[#111111] border-b border-[#111111]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <span className="text-xs uppercase tracking-wide text-[#C5A880]">
            Accompagnement
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#111111] mt-3">
            {t('lifecycle.title', "L'accompagnement de votre entreprise à chaque étape")}
          </h2>
          <p className="font-serif-editorial text-base sm:text-lg text-[#111111]/70 mt-4 leading-relaxed">
            {t('lifecycle.desc', "De l'immatriculation initiale à la cession capitalistique, nous alignons droit, fiscalité et finance à chaque jalon critique.")}
          </p>
        </div>

        {/* Interactive Horizontal Timeline with Clickable Stages */}
        <div className="relative mb-12 sm:mb-16">
          <div className="flex items-center justify-between overflow-x-auto pb-4 md:pb-0 gap-3 sm:gap-4 z-10 relative no-scrollbar border-b border-[#111111]/10">
            {LIFECYCLE_STAGES.map((stage, index) => {
              const isSelected = index === activeStageIndex;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageIndex(index)}
                  className={`relative shrink-0 px-4 py-3 text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'text-[#111111]'
                      : 'text-[#111111]/50 hover:text-[#111111]'
                  }`}
                >
                  <span>{stage.name}</span>
                  {isSelected && (
                    <motion.div
                      layoutId="activeTimelinePill"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#111111]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-end space-x-2 mt-4 md:hidden">
            <button
              onClick={handlePrev}
              className="p-2 text-[#111111]/50 hover:text-[#111111]"
              aria-label="Étape précédente"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm font-medium">
              {activeStageIndex + 1} / {LIFECYCLE_STAGES.length}
            </span>
            <button
              onClick={handleNext}
              className="p-2 text-[#111111]/50 hover:text-[#111111]"
              aria-label="Étape suivante"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Customized Visual Grid for Selected Stage */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-12"
          >
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-[#111111]/10">
              <div className="max-w-2xl">
                <p className="font-serif-editorial text-2xl sm:text-3xl text-[#111111] font-light italic leading-snug">
                  "{currentStage.tagline}"
                </p>
              </div>

              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center text-sm font-medium tracking-wide uppercase text-[#111111] hover:text-[#C5A880] transition-colors shrink-0"
              >
                Prendre rendez-vous
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* 3-Column Split Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              
              {/* Volet Financier */}
              <div className="flex flex-col space-y-4">
                <h3 className="font-serif-title text-xl tracking-wide text-[#111111] border-b border-[#111111]/10 pb-4">
                  {currentStage.voletFinancier.title}
                </h3>
                <p className="text-sm text-[#111111]/80 font-medium">
                  {currentStage.voletFinancier.description}
                </p>
                <ul className="space-y-3 pt-2">
                  {currentStage.voletFinancier.points.map((pt, i) => (
                    <li key={i} className="text-sm text-[#111111]/70 flex items-start space-x-2">
                      <span className="text-[#C5A880] mt-1 text-[10px]">●</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Volet Juridique */}
              <div className="flex flex-col space-y-4">
                <h3 className="font-serif-title text-xl tracking-wide text-[#111111] border-b border-[#111111]/10 pb-4">
                  {currentStage.voletJuridique.title}
                </h3>
                <p className="text-sm text-[#111111]/80 font-medium">
                  {currentStage.voletJuridique.description}
                </p>
                <ul className="space-y-3 pt-2">
                  {currentStage.voletJuridique.points.map((pt, i) => (
                    <li key={i} className="text-sm text-[#111111]/70 flex items-start space-x-2">
                      <span className="text-[#C5A880] mt-1 text-[10px]">●</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Volet Fiscal */}
              <div className="flex flex-col space-y-4">
                <h3 className="font-serif-title text-xl tracking-wide text-[#111111] border-b border-[#111111]/10 pb-4">
                  {currentStage.voletFiscal.title}
                </h3>
                <p className="text-sm text-[#111111]/80 font-medium">
                  {currentStage.voletFiscal.description}
                </p>
                <ul className="space-y-3 pt-2">
                  {currentStage.voletFiscal.points.map((pt, i) => (
                    <li key={i} className="text-sm text-[#111111]/70 flex items-start space-x-2">
                      <span className="text-[#C5A880] mt-1 text-[10px]">●</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
