import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Layers, ShieldCheck, DollarSign, FileText } from 'lucide-react';
import { useContent } from '../data/content';
import { useTranslation } from 'react-i18next';

interface ClientLifecycleProps {
  onOpenBooking: () => void;
}

export default function ClientLifecycle({ onOpenBooking }: ClientLifecycleProps) {
  const { LIFECYCLE_STAGES } = useContent();
  const { t } = useTranslation();
  const [activeStageIndex, setActiveStageIndex] = useState<number>(2); // Default to "Levée de Fonds" as requested in examples

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
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#B6966B] uppercase">
            // {t('lifecycle.badge', '04. VISION TEMPORELLE & CROISSANCE')}
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
          
          {/* Background Timeline Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-4 right-4 h-[1px] bg-[#111111]/15 -translate-y-1/2 z-0" />

          {/* Stages Row */}
          <div className="flex items-center justify-between overflow-x-auto pb-4 md:pb-0 gap-3 sm:gap-4 z-10 relative no-scrollbar">
            {LIFECYCLE_STAGES.map((stage, index) => {
              const isSelected = index === activeStageIndex;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageIndex(index)}
                  className={`group relative shrink-0 px-4 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-mono tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
                    isSelected
                      ? 'bg-[#111111] text-[#F9F9F6] border-[#111111] shadow-md scale-105'
                      : 'bg-[#F9F9F6] text-[#111111]/70 border-[#111111]/20 hover:border-[#111111] hover:text-[#111111]'
                  }`}
                >
                  <span className="inline-block mr-1.5 opacity-60">[{String(index + 1).padStart(2, '0')}]</span>
                  <span>{stage.name}</span>

                  {/* Little active dot indicator */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeTimelinePill"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#B6966B]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Navigation Arrows for Mobile & Desktop */}
          <div className="flex items-center justify-end space-x-2 mt-4 md:hidden">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-[#111111]/20 text-[#111111] hover:bg-[#111111]/5"
              aria-label="Étape précédente"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono">
              {activeStageIndex + 1} / {LIFECYCLE_STAGES.length}
            </span>
            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-[#111111]/20 text-[#111111] hover:bg-[#111111]/5"
              aria-label="Étape suivante"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Customized Visual Grid for Selected Stage */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="space-y-8"
          >
            {/* Stage Tagline Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-[#111111]/[0.03] border border-[#111111]/15 gap-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#B6966B]">
                    {t('lifecycle.selectedStage', 'Étape Clé Sélectionnée :')}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    [ {currentStage.name} ]
                  </span>
                </div>
                <p className="font-serif-editorial text-lg sm:text-xl text-[#111111] mt-1 font-medium italic">
                  {currentStage.tagline}
                </p>
              </div>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center px-4 py-2 text-xs font-mono uppercase tracking-wider text-[#111111] border border-[#111111] hover:bg-[#111111] hover:text-[#F9F9F6] transition-colors self-start sm:self-auto shrink-0"
              >
                {t('lifecycle.auditPhase', 'Auditer cette phase ↗')}
              </button>
            </div>

            {/* 3-Column Split Grid: Volet Financier | Volet Juridique | Volet Fiscal */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Volet Financier */}
              <div className="p-6 sm:p-7 bg-[#FFFFFF] border border-[#111111]/15 shadow-sm flex flex-col justify-between group hover:border-[#B6966B] transition-colors">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#111111]/10">
                    <div className="flex items-center space-x-2 text-[#111111]">
                      <DollarSign className="w-4 h-4 text-[#B6966B]" />
                      <h3 className="font-serif-title text-xl font-bold tracking-wide">
                        {currentStage.voletFinancier.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono text-[#B6966B] uppercase tracking-widest">
                      Finance
                    </span>
                  </div>
                  <p className="text-xs font-medium text-[#111111]/80 mt-3 mb-4 font-sans-ui">
                    {currentStage.voletFinancier.description}
                  </p>
                  <ul className="space-y-2.5">
                    {currentStage.voletFinancier.points.map((pt, i) => (
                      <li key={i} className="text-xs text-[#111111]/70 flex items-start space-x-2">
                        <span className="text-[#B6966B] font-bold mt-0.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-5 mt-6 border-t border-[#111111]/10 text-[10px] font-mono uppercase text-[#111111]/40">
                  Livrable : Modèle financier & Mémorandum
                </div>
              </div>

              {/* Volet Juridique */}
              <div className="p-6 sm:p-7 bg-[#FFFFFF] border border-[#111111]/15 shadow-sm flex flex-col justify-between group hover:border-[#B6966B] transition-colors">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#111111]/10">
                    <div className="flex items-center space-x-2 text-[#111111]">
                      <ShieldCheck className="w-4 h-4 text-[#B6966B]" />
                      <h3 className="font-serif-title text-xl font-bold tracking-wide">
                        {currentStage.voletJuridique.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono text-[#B6966B] uppercase tracking-widest">
                      Droit
                    </span>
                  </div>
                  <p className="text-xs font-medium text-[#111111]/80 mt-3 mb-4 font-sans-ui">
                    {currentStage.voletJuridique.description}
                  </p>
                  <ul className="space-y-2.5">
                    {currentStage.voletJuridique.points.map((pt, i) => (
                      <li key={i} className="text-xs text-[#111111]/70 flex items-start space-x-2">
                        <span className="text-[#B6966B] font-bold mt-0.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-5 mt-6 border-t border-[#111111]/10 text-[10px] font-mono uppercase text-[#111111]/40">
                  Livrable : Actes certifiés & Pactes OHADA
                </div>
              </div>

              {/* Volet Fiscal */}
              <div className="p-6 sm:p-7 bg-[#FFFFFF] border border-[#111111]/15 shadow-sm flex flex-col justify-between group hover:border-[#B6966B] transition-colors">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#111111]/10">
                    <div className="flex items-center space-x-2 text-[#111111]">
                      <FileText className="w-4 h-4 text-[#B6966B]" />
                      <h3 className="font-serif-title text-xl font-bold tracking-wide">
                        {currentStage.voletFiscal.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono text-[#B6966B] uppercase tracking-widest">
                      Fiscalité
                    </span>
                  </div>
                  <p className="text-xs font-medium text-[#111111]/80 mt-3 mb-4 font-sans-ui">
                    {currentStage.voletFiscal.description}
                  </p>
                  <ul className="space-y-2.5">
                    {currentStage.voletFiscal.points.map((pt, i) => (
                      <li key={i} className="text-xs text-[#111111]/70 flex items-start space-x-2">
                        <span className="text-[#B6966B] font-bold mt-0.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-5 mt-6 border-t border-[#111111]/10 text-[10px] font-mono uppercase text-[#111111]/40">
                  Livrable : Note d’impact fiscal & Rescrits
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
