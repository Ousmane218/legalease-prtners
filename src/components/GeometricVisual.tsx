import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function GeometricVisual() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodes = [
    { id: 'law', label: 'DROIT', angle: 0, sub: 'OHADA & Sénégal', color: '#B6966B' },
    { id: 'tax', label: 'FISCALITÉ', angle: 120, sub: 'UEMOA & Prix de Transfert', color: '#C5A880' },
    { id: 'fin', label: 'FINANCE', angle: 240, sub: 'Corporate & M&A', color: '#E5D3B8' },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto h-72 sm:h-84 flex items-center justify-center select-none perspective-1000">
      {/* Removed artificial orbits and glows */}
      <div className="relative w-56 h-56 sm:w-68 sm:h-68 flex items-center justify-center">

        {/* Sacred Geometry Triangle & Convergence Matrix */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          viewBox="0 0 200 200"
        >
          {/* Subtle concentric grid lines */}
          <circle cx="100" cy="100" r="90" fill="none" stroke="#111111" strokeWidth="0.5" strokeOpacity="0.1" />

          {/* Golden Triangle connecting the 3 disciplines */}
          <polygon
            points="100,20 172,145 28,145"
            fill="rgba(197, 168, 128, 0.06)"
            stroke="#B6966B"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />

          {/* Internal convergence lines meeting at the signature center */}
          <line x1="100" y1="20" x2="100" y2="100" stroke="#B6966B" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="172" y1="145" x2="100" y2="100" stroke="#B6966B" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="28" y1="145" x2="100" y2="100" stroke="#B6966B" strokeWidth="0.8" strokeDasharray="3 3" />
        </svg>

        {/* Central Core: LegalEase */}
        <motion.div 
          className="relative z-10 w-20 h-20 rounded-full bg-[#111111] text-[#F9F9F6] border border-[#111111] flex flex-col items-center justify-center p-2 text-center cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <span className="font-serif-title text-sm tracking-wide text-white mt-1 leading-tight">
            LegalEase
          </span>
          <div className="w-4 h-[1px] bg-[#B6966B] my-1" />
          <span className="text-[9px] uppercase tracking-wide text-[#F9F9F6]/70 leading-none">Partners</span>
        </motion.div>

        <motion.div
          className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer group"
          onMouseEnter={() => setHoveredNode('law')}
          onMouseLeave={() => setHoveredNode(null)}
          whileHover={{ y: -2 }}
        >
          <div className="mt-1 px-3 py-1 rounded border border-[#111111]/20 bg-[#F9F9F6] text-[#111111] text-[11px] font-medium tracking-wide uppercase">
            DROIT
          </div>
        </motion.div>

        {/* Discipline Vertex 2: Finance (Bottom Right) */}
        <motion.div
          className="absolute bottom-2 -right-3 sm:-right-4 z-20 flex flex-col items-center cursor-pointer group"
          onMouseEnter={() => setHoveredNode('fin')}
          onMouseLeave={() => setHoveredNode(null)}
          whileHover={{ x: 2, y: 1 }}
        >
          <div className="mt-1 px-3 py-1 rounded border border-[#111111]/20 bg-[#F9F9F6] text-[#111111] text-[11px] font-medium tracking-wide uppercase">
            FINANCE
          </div>
        </motion.div>

        {/* Discipline Vertex 3: Fiscalité (Bottom Left) */}
        <motion.div
          className="absolute bottom-2 -left-3 sm:-left-4 z-20 flex flex-col items-center cursor-pointer group"
          onMouseEnter={() => setHoveredNode('tax')}
          onMouseLeave={() => setHoveredNode(null)}
          whileHover={{ x: -2, y: 1 }}
        >
          <div className="mt-1 px-3 py-1 rounded border border-[#111111]/20 bg-[#F9F9F6] text-[#111111] text-[11px] font-medium tracking-wide uppercase">
            FISCALITÉ
          </div>
        </motion.div>
      </div>

      {/* Dynamic descriptor tooltip under visual */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-center pointer-events-none">
        <span className="text-sm text-[#111111]/70 tracking-wide">
          {hoveredNode === 'law' && 'Sécurisation juridique & contentieux OHADA'}
          {hoveredNode === 'tax' && 'Ingénierie fiscale & structuration'}
          {hoveredNode === 'fin' && 'Modélisation financière & levées de fonds'}
          {!hoveredNode && 'Convergence des 3 piliers stratégiques'}
        </span>
      </div>
    </div>
  );
}
