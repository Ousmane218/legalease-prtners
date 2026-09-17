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
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-radial from-[#C5A880]/15 via-transparent to-transparent blur-2xl pointer-events-none rounded-full" />

      {/* Main rotating orbital assembly */}
      <div className="relative w-56 h-56 sm:w-68 sm:h-68 flex items-center justify-center transform-style-3d animate-float-subtle">
        
        {/* Outer Ring 1 - Law Axis */}
        <div 
          className="absolute inset-0 rounded-full border border-[#111111]/25 border-dashed animate-spin-slow pointer-events-none"
          style={{
            transformStyle: 'preserve-3d',
            boxShadow: '0 0 30px rgba(197, 168, 128, 0.08)',
          }}
        />

        {/* Outer Ring 2 - Tax Axis */}
        <div 
          className="absolute inset-4 rounded-full border border-[#B6966B]/50 animate-spin-reverse pointer-events-none"
          style={{
            transformStyle: 'preserve-3d',
          }}
        />

        {/* Inner Ring 3 - Finance Axis */}
        <div 
          className="absolute inset-8 rounded-full border border-[#111111]/15 pointer-events-none"
          style={{
            transform: 'rotateX(60deg) rotateY(20deg)',
          }}
        />

        {/* Sacred Geometry Triangle & Convergence Matrix */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          viewBox="0 0 200 200"
        >
          {/* Subtle concentric grid lines */}
          <circle cx="100" cy="100" r="90" fill="none" stroke="#111111" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="2 4" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#B6966B" strokeWidth="0.75" strokeOpacity="0.3" />
          <circle cx="100" cy="100" r="30" fill="none" stroke="#111111" strokeWidth="0.5" strokeOpacity="0.2" />

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

        {/* Central Core: Une Seule Signature */}
        <motion.div 
          className="relative z-10 w-20 h-20 rounded-full bg-[#0D0D0C] text-[#F9F9F6] border border-[#C5A880]/60 flex flex-col items-center justify-center p-2 text-center shadow-xl cursor-pointer"
          whileHover={{ scale: 1.08 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <span className="text-[9px] uppercase tracking-[0.25em] text-[#C5A880] font-mono leading-none">Pôle</span>
          <span className="font-serif-title text-xs font-semibold tracking-wider text-white mt-1 leading-tight">
            SIGNATURE
          </span>
          <div className="w-4 h-[1px] bg-[#C5A880] my-1" />
          <span className="text-[7.5px] uppercase tracking-widest text-[#F9F9F6]/70 leading-none">Dakar</span>
        </motion.div>

        {/* Discipline Vertex 1: Droit (Top) */}
        <motion.div
          className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer group"
          onMouseEnter={() => setHoveredNode('law')}
          onMouseLeave={() => setHoveredNode(null)}
          whileHover={{ y: -3 }}
        >
          <div className="w-8 h-8 rounded-full bg-[#F9F9F6] border-2 border-[#111111] flex items-center justify-center text-[10px] font-bold text-[#111111] shadow-md group-hover:border-[#B6966B] transition-colors">
            01
          </div>
          <div className="mt-1 px-2.5 py-0.5 rounded-full bg-[#111111] text-[#F9F9F6] text-[10px] font-medium tracking-widest uppercase shadow-sm">
            DROIT
          </div>
        </motion.div>

        {/* Discipline Vertex 2: Finance (Bottom Right) */}
        <motion.div
          className="absolute bottom-2 -right-3 sm:-right-4 z-20 flex flex-col items-center cursor-pointer group"
          onMouseEnter={() => setHoveredNode('fin')}
          onMouseLeave={() => setHoveredNode(null)}
          whileHover={{ x: 3, y: 2 }}
        >
          <div className="w-8 h-8 rounded-full bg-[#F9F9F6] border-2 border-[#111111] flex items-center justify-center text-[10px] font-bold text-[#111111] shadow-md group-hover:border-[#B6966B] transition-colors">
            03
          </div>
          <div className="mt-1 px-2.5 py-0.5 rounded-full bg-[#111111] text-[#F9F9F6] text-[10px] font-medium tracking-widest uppercase shadow-sm">
            FINANCE
          </div>
        </motion.div>

        {/* Discipline Vertex 3: Fiscalité (Bottom Left) */}
        <motion.div
          className="absolute bottom-2 -left-3 sm:-left-4 z-20 flex flex-col items-center cursor-pointer group"
          onMouseEnter={() => setHoveredNode('tax')}
          onMouseLeave={() => setHoveredNode(null)}
          whileHover={{ x: -3, y: 2 }}
        >
          <div className="w-8 h-8 rounded-full bg-[#F9F9F6] border-2 border-[#111111] flex items-center justify-center text-[10px] font-bold text-[#111111] shadow-md group-hover:border-[#B6966B] transition-colors">
            02
          </div>
          <div className="mt-1 px-2.5 py-0.5 rounded-full bg-[#111111] text-[#F9F9F6] text-[10px] font-medium tracking-widest uppercase shadow-sm">
            FISCALITÉ
          </div>
        </motion.div>
      </div>

      {/* Dynamic descriptor tooltip under visual */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-center pointer-events-none">
        <span className="text-[11px] font-mono tracking-widest text-[#B6966B] uppercase">
          {hoveredNode === 'law' && '— Sécurisation juridique & contentieux OHADA —'}
          {hoveredNode === 'tax' && '— Ingénierie fiscale & prix de transfert UEMOA —'}
          {hoveredNode === 'fin' && '— Modélisation financière & levées de fonds —'}
          {!hoveredNode && '— Convergence des 3 piliers stratégiques —'}
        </span>
      </div>
    </div>
  );
}
