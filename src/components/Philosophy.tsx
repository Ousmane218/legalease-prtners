import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Philosophy() {
  const [activePhraseIndex, setActivePhraseIndex] = useState<number | null>(null);

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

      {/* Decorative hairline grid marks */}
      <div className="absolute top-12 left-8 text-[10px] font-mono tracking-widest text-[#B6966B] uppercase opacity-70">
        [ {t('philosophy.badge')} ]
      </div>
      <div className="absolute bottom-12 right-8 text-[10px] font-mono tracking-widest text-[#111111]/40 uppercase">
        02 / CONVERGENCE
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
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#B6966B]">
            — {t('philosophy.subtitle')} —
          </p>

          {/* Centered, impactful statement with scroll/hover highlight */}
          <div className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] leading-[1.35] sm:leading-[1.38] text-[#111111]/50">
            {phrases.map((phrase, idx) => {
              const isHighlighted = activePhraseIndex === null || activePhraseIndex === idx;
              return (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0.4 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ amount: 0.6 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  onMouseEnter={() => setActivePhraseIndex(idx)}
                  onMouseLeave={() => setActivePhraseIndex(null)}
                  className={`inline transition-all duration-300 cursor-pointer ${
                    activePhraseIndex === idx
                      ? 'text-[#111111] font-medium bg-[#B6966B]/15 px-1.5 py-0.5 rounded'
                      : activePhraseIndex !== null
                      ? 'text-[#111111]/30'
                      : 'text-[#111111] hover:text-[#B6966B]'
                  }`}
                >
                  <span className="font-normal">{phrase.lead} </span>
                  <span className="italic font-normal">{phrase.focus} </span>
                </motion.span>
              );
            })}
          </div>

          {/* Dynamic interactive guide / micro-caption */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="pt-6 sm:pt-8 flex flex-col items-center space-y-2"
          >
            <div className="w-12 h-[1px] bg-[#B6966B]/40" />
            <p className="text-xs text-[#111111]/60 font-sans-ui tracking-wide">
              {activePhraseIndex !== null 
                ? `${t('philosophy.hover_prefix')}${phrases[activePhraseIndex].accent}` 
                : t('philosophy.hover_default')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
