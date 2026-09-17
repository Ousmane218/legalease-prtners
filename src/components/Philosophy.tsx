import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Philosophy() {

  const { t } = useTranslation();
  
  const phrases = t('philosophy.phrases', { returnObjects: true }) as Array<{
    lead: string;
    focus: string;
    accent: string;
  }>;

  return (
    <section
      id="notre-approche"
      className="relative py-24 sm:py-32 md:py-40 px-4 sm:px-6 lg:px-8 bg-[#F9F9F6] border-b border-[#111111]/10 overflow-hidden flex items-center justify-center min-h-[70vh]"
    >
      {/* Background text: Large, ultra-faint, low-opacity (5%) uppercase text */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="font-serif-title text-[12vw] sm:text-[14vw] font-bold uppercase tracking-[0.18em] text-[#111111] opacity-[0.04] whitespace-nowrap">
          {t('philosophy.background')}
        </span>
      </div>

      {/* Foreground statement container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Subtitle tag */}
          <p className="text-xs tracking-wide uppercase text-[#B6966B]">
            {t('philosophy.subtitle')}
          </p>

          {/* Editorial Statements */}
          <div className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] leading-[1.35] sm:leading-[1.38] text-[#111111]">
            <p className="mb-8">
              {phrases[0]?.lead} <span className="italic font-normal">{phrases[0]?.focus}</span>
            </p>
            <p className="text-[#111111]/70 text-xl sm:text-2xl md:text-3xl font-light">
              {phrases[1]?.lead} <span className="italic font-normal">{phrases[1]?.focus}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
