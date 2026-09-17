import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ibrahimaImg from '../assets/ibrahima.jpeg';
import saliouImg from '../assets/saliou.jpeg';

export default function TeamSection() {
  const { t } = useTranslation();

  const partners = [
    {
      name: 'Ibrahima Souleymane MBAYE',
      role: t('team.roles.ibrahima', 'Managing Partner'),
      image: ibrahimaImg,
    },
    {
      name: 'Serigne Saliou Mbacke Gueye',
      role: t('team.roles.saliou', 'Co-Principal'),
      image: saliouImg,
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F9F9F6] relative border-t border-[#111111]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-[#111111]/5 border border-[#111111]/10 text-[#111111]/80 text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-6">
              {t('team.badge', 'Gouvernance')}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif-title text-[#111111] leading-tight">
              {t('team.title', 'Notre Équipe Dirigeante')}
            </h2>
          </div>
          
          <Link 
            to="/equipe" 
            className="group inline-flex items-center text-sm font-medium uppercase tracking-wider text-[#111111] hover:text-[#B6966B] transition-colors"
          >
            {t('team.discover', "Découvrir l'équipe complète")}
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {partners.map((partner, index) => (
            <Link to="/equipe" key={index} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-[#111111]/5 mb-6 relative">
                <img 
                  src={partner.image} 
                  alt={partner.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div>
                <h3 className="text-2xl font-serif-title text-[#111111] mb-1 group-hover:text-[#B6966B] transition-colors">{partner.name}</h3>
                <p className="text-[#111111]/60 font-medium tracking-widest uppercase text-xs">{partner.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
