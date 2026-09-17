import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, TrendingUp, Cpu, CheckCircle2, UserCheck, Sparkles, ArrowRight } from 'lucide-react';
import { useContent } from '../data/content';

interface ServicesWheelProps {
  onSelectPillarConsultation: (pillarName: string) => void;
}

export default function ServicesWheel({ onSelectPillarConsultation }: ServicesWheelProps) {
  const { PILLARS_DATA, STATS_DATA } = useContent();
  const [activePillarId, setActivePillarId] = useState<string>('juridique-fiscal');

  const activePillar = PILLARS_DATA.find((p) => p.id === activePillarId) || PILLARS_DATA[0];

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scale':
        return <Scale className="w-5 h-5" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      default:
        return <Scale className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="expertises"
      className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-[#0D0D0C] text-[#F9F9F6] border-b border-[#F9F9F6]/10 overflow-hidden"
    >
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#B6966B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-[#F9F9F6]/10">
          <div>
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#C5A880] uppercase">
              // 03. ARCHITECTURE DES COMPÉTENCES
            </span>
            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#F9F9F6] mt-3">
              Pôles d’Expertises & Direction
            </h2>
          </div>
          <p className="font-serif-editorial text-sm sm:text-base text-[#F9F9F6]/60 max-w-md mt-4 md:mt-0 leading-relaxed">
            Une synergie opérationnelle réunie sous un commandement unique pour dérisquer et propulser vos opérations de haut de bilan.
          </p>
        </div>

        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Key Statistics with Elegant Typography */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-10 lg:pr-6 lg:border-r lg:border-[#F9F9F6]/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#B6966B]">
                Indicateurs de Performance
              </span>
              <p className="text-xs text-[#F9F9F6]/50 mt-1 font-sans-ui">
                Mesure de notre impact auprès des leaders économiques régionaux
              </p>
            </div>

            <div className="space-y-8 sm:space-y-10">
              {STATS_DATA.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group relative"
                >
                  <div className="font-serif-title text-5xl sm:text-6xl font-light tracking-tight text-[#F9F9F6] group-hover:text-[#C5A880] transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold tracking-wider uppercase text-[#F9F9F6] mt-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-[#F9F9F6]/60 font-sans-ui mt-0.5">
                    {stat.sublabel}
                  </div>
                  <div className="w-12 h-[1px] bg-[#F9F9F6]/15 group-hover:bg-[#C5A880]/50 mt-4 transition-all duration-300" />
                </motion.div>
              ))}
            </div>

            {/* Quick Dakar Presence Card */}
            <div className="p-5 rounded-none border border-[#F9F9F6]/10 bg-[#161615] text-xs space-y-2">
              <div className="flex items-center space-x-2 text-[#C5A880]">
                <Sparkles className="w-4 h-4" />
                <span className="font-mono uppercase tracking-widest text-[11px] font-semibold">
                  Ancrage Régional
                </span>
              </div>
              <p className="text-[#F9F9F6]/70 leading-relaxed font-sans-ui">
                Interventions directes à Dakar, Abidjan, Bamako, Lomé, Cotonou et Ouagadougou.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Services Selector */}
          <div className="lg:col-span-8 flex flex-col space-y-8">
            
            {/* 3 Core Pillar Toggle Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {PILLARS_DATA.map((pillar) => {
                const isActive = pillar.id === activePillarId;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActivePillarId(pillar.id)}
                    onMouseEnter={() => setActivePillarId(pillar.id)}
                    className={`relative text-left p-4 sm:p-5 transition-all duration-300 border rounded-none cursor-pointer flex flex-col justify-between h-32 ${
                      isActive
                        ? 'bg-[#1C1C1A] border-[#C5A880] text-[#F9F9F6] shadow-lg'
                        : 'bg-[#141413] border-[#F9F9F6]/10 text-[#F9F9F6]/70 hover:border-[#F9F9F6]/30 hover:text-[#F9F9F6]'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className={`p-2 rounded ${isActive ? 'bg-[#C5A880]/20 text-[#C5A880]' : 'bg-[#F9F9F6]/5 text-[#F9F9F6]/60'}`}>
                        {getPillarIcon(pillar.iconName)}
                      </div>
                      {pillar.isFuturePractice && (
                        <span className="text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 border border-[#C5A880]/40 text-[#C5A880] bg-[#C5A880]/10">
                          Horizon
                        </span>
                      )}
                    </div>
                    <div>
                      <h3 className="font-serif-title text-base sm:text-lg font-semibold tracking-wide text-white">
                        {pillar.name}
                      </h3>
                      <p className="text-[11px] text-[#F9F9F6]/50 truncate font-sans-ui mt-0.5">
                        {pillar.lead}
                      </p>
                    </div>

                    {/* Active bottom line indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activePillarTab"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A880]"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Dynamic Detail Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8 bg-[#161615] border border-[#F9F9F6]/15 rounded-none relative overflow-hidden"
              >
                {/* Top header inside card */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#F9F9F6]/10 gap-4">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#C5A880] uppercase">
                      Pôle Stratégique Actif
                    </span>
                    <h3 className="font-serif-title text-2xl sm:text-3xl font-semibold text-[#F9F9F6] mt-0.5">
                      {activePillar.name}
                    </h3>
                  </div>

                  {/* Partner in Charge Badge */}
                  <div className="flex items-center space-x-2.5 px-3.5 py-2 bg-[#0D0D0C] border border-[#F9F9F6]/10 self-start sm:self-auto">
                    <UserCheck className="w-4 h-4 text-[#C5A880]" />
                    <div className="text-left">
                      <div className="text-[9px] uppercase tracking-widest text-[#F9F9F6]/50">
                        Direction du Pôle
                      </div>
                      <div className="text-xs font-medium text-[#F9F9F6]">
                        {activePillar.lead}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Short pitch description */}
                <p className="font-serif-editorial text-sm sm:text-base text-[#F9F9F6]/80 my-6 italic leading-relaxed">
                  "{activePillar.shortDesc}"
                </p>

                {/* Service Bullets Grid */}
                <div className="mb-8">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#B6966B] mb-4">
                    Domaines d'intervention & Spécialités :
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {activePillar.services.map((srv, idx) => (
                      <motion.div
                        key={srv}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, delay: idx * 0.05 }}
                        className="flex items-start space-x-3 p-2.5 bg-[#0D0D0C]/60 border border-[#F9F9F6]/5 hover:border-[#C5A880]/30 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#F9F9F6]/90 font-sans-ui">
                          {srv}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="pt-6 border-t border-[#F9F9F6]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs text-[#F9F9F6]/60 font-mono">
                    <span className="text-[#C5A880]">● </span>{activePillar.keyHighlight}
                  </div>
                  <button
                    onClick={() => onSelectPillarConsultation(activePillar.name)}
                    className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium tracking-widest uppercase text-[#0D0D0C] bg-[#C5A880] hover:bg-[#D4B991] transition-colors rounded-none cursor-pointer"
                  >
                    <span>Consulter sur ce Pôle</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
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
