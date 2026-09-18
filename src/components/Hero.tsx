import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import GeometricVisual from './GeometricVisual';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const { t } = useTranslation();

  return (
    <section
      id="accueil"
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-[#F9F9F6] border-b border-[#111111]/10 overflow-hidden"
    >
      {/* Top micro-badge */}
      <div className="max-w-5xl mx-auto w-full text-center mb-4 sm:mb-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-[#B6966B]/20 bg-[#B6966B]/5 text-[#B6966B] text-[11px] uppercase tracking-wide mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#B6966B] animate-pulse" />
          <span>{t('hero.badge', 'Cabinet de Conseil Pluridisciplinaire • Dakar')}</span>
        </motion.div>

        {/* Large Serif Header in all-caps */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif-title text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] font-semibold text-[#111111] uppercase tracking-normal leading-[1.08] sm:leading-[1.1] max-w-5xl mx-auto"
        >
          {t('hero.title', 'LE DROIT, LA FISCALITÉ, LA FINANCE — UNE SEULE SIGNATURE.')}
        </motion.h1>

        {/* Sub-CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 sm:mt-8 flex justify-center"
        >
          <button
            id="hero-cta-btn"
            onClick={onOpenBooking}
            className="group inline-flex items-center justify-center px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-medium tracking-wide uppercase text-[#F9F9F6] bg-[#111111] rounded-none hover:bg-[#0D0D0C] transition-all duration-200 cursor-pointer"
          >
            <span>{t('hero.cta', 'Réserver un Conseil')}</span>
            <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </motion.div>
      </div>

      {/* Center-bottom 3D geometric visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.35 }}
        className="my-6 sm:my-8"
      >
        <GeometricVisual />
      </motion.div>

      {/* Split bottom metadata */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-end pt-6 border-t border-[#111111]/10 text-xs text-[#111111]"
      >
        {/* Left side: 2-line description */}
        <div className="md:col-span-7">
          <p className="font-serif-editorial text-base sm:text-lg text-[#111111]/90 leading-snug">
            {t('hero.desc', "Cabinet pluridisciplinaire basé à Dakar, structuré pour accompagner le cycle de vie des entreprises au Sénégal et dans l'espace OHADA/UEMOA.")}
          </p>
        </div>

        {/* Right side: Three minimalist badges */}
        <div className="md:col-span-5 flex flex-wrap items-center justify-start md:justify-end gap-3 text-sm text-[#111111]/70">
          <span>Sénégal</span>
          <span className="w-1 h-1 rounded-full bg-[#B6966B]/50" />
          <span>Droit OHADA</span>
          <span className="w-1 h-1 rounded-full bg-[#B6966B]/50" />
          <span>UEMOA</span>
        </div>
      </motion.div>
    </section>
  );
}
