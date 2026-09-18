import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { useContent } from '../data/content';
import { useTranslation } from 'react-i18next';

interface ClientLifecycleProps {
  onOpenBooking: () => void;
}

export default function ClientLifecycle({ onOpenBooking }: ClientLifecycleProps) {
  const { LIFECYCLE_STAGES } = useContent();
  const { t } = useTranslation();
  const [activeStageIndex, setActiveStageIndex] = useState<number | null>(2);

  const currentStage = activeStageIndex !== null ? LIFECYCLE_STAGES[activeStageIndex] : null;

  // Extracted content renderer to reuse for desktop (bottom) and mobile (inline)
  const renderStageContent = (stage: typeof LIFECYCLE_STAGES[0]) => (
    <div className="space-y-8 md:space-y-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-[#111111]/10">
        <div className="max-w-2xl">
          <p className="font-serif-editorial text-2xl sm:text-3xl text-[#111111] font-light italic leading-snug">
            "{stage.tagline}"
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

      {/* 3-Column Split Grid - Open Editorial Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 pt-2">
        
        {/* Volet Juridique */}
        <div className="flex flex-col">
          <h3 className="font-mono text-[11px] tracking-widest uppercase text-[#111111] border-b border-[#111111]/10 pb-3 mb-5">
            {stage.voletJuridique.title}
          </h3>
          <ul className="space-y-4">
            {stage.voletJuridique.points.map((pt, i) => (
              <li key={i} className="text-sm text-[#111111]/80 font-light leading-relaxed">
                {pt}
              </li>
            ))}
          </ul>
        </div>

        {/* Volet Fiscal */}
        <div className="flex flex-col">
          <h3 className="font-mono text-[11px] tracking-widest uppercase text-[#111111] border-b border-[#111111]/10 pb-3 mb-5">
            {stage.voletFiscal.title}
          </h3>
          <ul className="space-y-4">
            {stage.voletFiscal.points.map((pt, i) => (
              <li key={i} className="text-sm text-[#111111]/80 font-light leading-relaxed">
                {pt}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Volet Financier */}
        <div className="flex flex-col">
          <h3 className="font-mono text-[11px] tracking-widest uppercase text-[#111111] border-b border-[#111111]/10 pb-3 mb-5">
            {stage.voletFinancier.title}
          </h3>
          <ul className="space-y-4">
            {stage.voletFinancier.points.map((pt, i) => (
              <li key={i} className="text-sm text-[#111111]/80 font-light leading-relaxed">
                {pt}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );

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

        {/* --- DESKTOP VIEW --- */}
        <div className="hidden md:block">
          {/* Desktop Editorial Index */}
          <div className="flex items-center justify-between border-b border-[#111111]/10 mb-16">
            {LIFECYCLE_STAGES.map((stage, index) => {
              const isSelected = index === activeStageIndex;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageIndex(index)}
                  className={`relative flex-1 py-4 text-left transition-all cursor-pointer group`}
                >
                  <div className={`text-xs font-mono mb-1 ${isSelected ? 'text-[#C5A880]' : 'text-[#111111]/40 group-hover:text-[#111111]/60'}`}>
                    0{index + 1}
                  </div>
                  <div className={`text-sm font-medium tracking-wide uppercase ${isSelected ? 'text-[#111111]' : 'text-[#111111]/50 group-hover:text-[#111111]'}`}>
                    {stage.name}
                  </div>
                  {isSelected && (
                    <motion.div
                      layoutId="activeTimelineRule"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#111111]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop Content Area */}
          <AnimatePresence mode="wait">
            {currentStage && (
              <motion.div
                key={currentStage.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {renderStageContent(currentStage)}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* --- MOBILE VIEW --- */}
        <div className="md:hidden space-y-0 border-t border-[#111111]/10">
          {LIFECYCLE_STAGES.map((stage, index) => {
            const isSelected = index === activeStageIndex;
            return (
              <div key={stage.id} className="border-b border-[#111111]/10">
                <button
                  onClick={() => setActiveStageIndex(isSelected ? null : index)}
                  className={`w-full py-5 flex items-center justify-between text-left`}
                >
                  <div className="flex items-center space-x-4">
                    <span className={`text-xs font-mono ${isSelected ? 'text-[#C5A880]' : 'text-[#111111]/40'}`}>
                      0{index + 1}
                    </span>
                    <span className={`text-sm font-medium tracking-wide uppercase ${isSelected ? 'text-[#111111]' : 'text-[#111111]/60'}`}>
                      {stage.name}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isSelected ? 'rotate-90 text-[#111111]' : 'text-[#111111]/40'}`} />
                </button>
                
                {/* Mobile Inline Content */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pt-2">
                        {renderStageContent(stage)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
