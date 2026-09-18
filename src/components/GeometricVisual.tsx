import React from 'react';
import { motion } from 'framer-motion';

export default function GeometricVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto h-72 sm:h-84 flex items-center justify-center select-none">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center"
      >
        {/* Static Geometric Diagram */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          viewBox="0 0 200 200"
        >
          {/* Subtle concentric grid lines */}
          <circle cx="100" cy="100" r="90" fill="none" stroke="#111111" strokeWidth="0.2" strokeOpacity="0.3" strokeDasharray="2 4" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#111111" strokeWidth="0.2" strokeOpacity="0.3" />
          <circle cx="100" cy="100" r="30" fill="none" stroke="#111111" strokeWidth="0.2" strokeOpacity="0.3" />

          {/* Golden Triangle connecting the 3 disciplines */}
          <polygon
            points="100,15 174,142 26,142"
            fill="none"
            stroke="#111111"
            strokeOpacity="0.8"
            strokeWidth="0.5"
            strokeLinejoin="round"
          />

          {/* Internal convergence lines meeting at the center */}
          <line x1="100" y1="15" x2="100" y2="100" stroke="#111111" strokeWidth="0.3" strokeOpacity="0.5" strokeDasharray="2 2" />
          <line x1="174" y1="142" x2="100" y2="100" stroke="#111111" strokeWidth="0.3" strokeOpacity="0.5" strokeDasharray="2 2" />
          <line x1="26" y1="142" x2="100" y2="100" stroke="#111111" strokeWidth="0.3" strokeOpacity="0.5" strokeDasharray="2 2" />
          
          {/* Subtle bronze accent on the inner circle */}
          <circle cx="100" cy="100" r="32" fill="none" stroke="#C5A880" strokeWidth="0.5" strokeOpacity="0.5" />
        </svg>

        {/* Central Core */}
        <div className="relative z-10 w-20 h-20 rounded-full bg-transparent flex flex-col items-center justify-center p-2 text-center">
          <span className="text-[8px] uppercase tracking-widest text-[#111111] font-mono leading-none">LegalEase</span>
          <div className="w-4 h-[1px] bg-[#C5A880] my-1" />
          <span className="font-serif-title text-[10px] font-semibold tracking-widest text-[#111111] uppercase leading-tight">
            PARTNERS
          </span>
        </div>

        {/* Discipline Vertex 1: Droit (Top) */}
        <div className="absolute -top-1 sm:-top-2 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
          <div className="bg-[#F9F9F6] px-2 py-1 flex flex-col items-center">
            <span className="text-[10px] font-medium tracking-widest uppercase text-[#111111]">DROIT</span>
            <span className="text-[8px] font-serif-editorial italic text-[#111111]/70 mt-0.5">Sécurisation & Contentieux</span>
          </div>
        </div>

        {/* Discipline Vertex 2: Finance (Bottom Right) */}
        <div className="absolute bottom-5 -right-6 sm:-right-8 z-20 flex flex-col items-center">
          <div className="bg-[#F9F9F6] px-2 py-1 flex flex-col items-center">
            <span className="text-[10px] font-medium tracking-widest uppercase text-[#111111]">FINANCE</span>
            <span className="text-[8px] font-serif-editorial italic text-[#111111]/70 mt-0.5">Modélisation & Levées</span>
          </div>
        </div>

        {/* Discipline Vertex 3: Fiscalité (Bottom Left) */}
        <div className="absolute bottom-5 -left-6 sm:-left-8 z-20 flex flex-col items-center">
          <div className="bg-[#F9F9F6] px-2 py-1 flex flex-col items-center">
            <span className="text-[10px] font-medium tracking-widest uppercase text-[#111111]">FISCALITÉ</span>
            <span className="text-[8px] font-serif-editorial italic text-[#111111]/70 mt-0.5">Ingénierie & Structuration</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
