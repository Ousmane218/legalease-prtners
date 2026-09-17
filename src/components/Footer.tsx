import React from 'react';
import { ArrowUpRight, Shield, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { useContent } from '../data/content';
import { useTranslation } from 'react-i18next';

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { LEGAL_INFO } = useContent();
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-[#0D0D0C] text-[#F9F9F6] border-t border-[#F9F9F6]/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Institutional Slogan Section */}
        <div className="pb-12 border-b border-[#F9F9F6]/10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <span className="font-serif-title text-2xl sm:text-3xl tracking-widest uppercase text-[#F9F9F6] font-semibold block">
              LegalEase Partners
            </span>
            <p className="font-serif-editorial text-lg sm:text-xl text-[#C5A880] mt-2 italic font-light">
              "{LEGAL_INFO.slogan}"
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center px-6 py-3 text-xs font-mono uppercase tracking-widest text-[#0D0D0C] bg-[#F9F9F6] hover:bg-[#C5A880] transition-colors rounded-none cursor-pointer"
            >
              <span>{t('footer.book', 'Prendre RDV à Dakar')}</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </button>
            <a
              href="mailto:contact@legalease-partners.sn"
              className="inline-flex items-center justify-center px-5 py-3 text-xs font-mono uppercase tracking-widest text-[#F9F9F6] border border-[#F9F9F6]/30 hover:border-[#F9F9F6] transition-colors rounded-none"
            >
              <span>{t('footer.write', 'Nous Écrire')}</span>
            </a>
          </div>
        </div>

        {/* Minimalist Charcoal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-[#F9F9F6]/10 text-xs">
          
          {/* Col 1: Siège & Contact */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#C5A880]">
              {t('footer.hq', 'Siège Opérationnel')}
            </div>
            <div className="space-y-2 text-[#F9F9F6]/80 font-sans-ui">
              <p className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span>{LEGAL_INFO.siege}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>{LEGAL_INFO.contactEmail}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>{LEGAL_INFO.phone}</span>
              </p>
            </div>
          </div>

          {/* Col 2: Expertises & Pôles */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#C5A880]">
              {t('footer.poles', "Pôles d'intervention")}
            </div>
            <ul className="space-y-2 text-[#F9F9F6]/70 font-sans-ui">
              <li>
                <a href="#expertises" className="hover:text-[#F9F9F6] transition-colors">
                  • Juridique & Droit des Sociétés (Dir. I. S. MBAYE)
                </a>
              </li>
              <li>
                <a href="#expertises" className="hover:text-[#F9F9F6] transition-colors">
                  • Corporate Finance & Levées (Dir. S. S. M. GUEYE)
                </a>
              </li>
              <li>
                <a href="#expertises" className="hover:text-[#F9F9F6] transition-colors">
                  • Fiscalité des Groupes & UEMOA
                </a>
              </li>
              <li>
                <a href="#expertises" className="hover:text-[#F9F9F6] transition-colors">
                  • Horizon Tech, IA & LegalTech
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Juridictions & Cadre Réglementaire */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#C5A880]">
              {t('footer.jurisdiction', 'Juridiction & Écosystème')}
            </div>
            <p className="text-[#F9F9F6]/70 font-sans-ui leading-relaxed">
              {t('footer.jurisdiction_desc', 'Intervention accréditée sous le cadre de l’OHADA (17 pays membres), des directives bancaires et fiscales de l’UEMOA, et du droit commercial de la République du Sénégal.')}
            </p>
            <div className="flex items-center space-x-3 text-[10px] font-mono text-[#C5A880]">
              <span>[ SÉNÉGAL ]</span>
              <span>[ OHADA ]</span>
              <span>[ UEMOA ]</span>
              <span>[ CEDEAO ]</span>
            </div>
          </div>
        </div>

        {/* Explicit Legal Compliance Declarations (B2B Trust) */}
        <div className="pt-8 text-xs text-[#F9F9F6]/60 font-mono space-y-3">
          <div className="p-4 bg-[#141413] border border-[#F9F9F6]/10 grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <span className="text-[#C5A880]">• {t('footer.structure', 'Structure : ')}</span>
              <span>{LEGAL_INFO.entity} — {t('footer.capital', 'Capital social : ')}{LEGAL_INFO.capital}</span>
            </div>
            <div>
              <span className="text-[#C5A880]">• {t('footer.registration', 'Enregistrements : ')}</span>
              <span>RCCM : {LEGAL_INFO.rccm} | NINEA : {LEGAL_INFO.ninea}</span>
            </div>
            <div className="md:col-span-2">
              <span className="text-[#C5A880]">• {t('footer.framework', "Cadre d'intervention : ")}</span>
              <span>{LEGAL_INFO.cadre}</span>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#F9F9F6]/40 pt-4">
            <div>
              © {currentYear} LegalEase Partners SAS. {t('footer.rights')}
            </div>
            <div className="flex items-center space-x-4 mt-2 sm:mt-0">
              <span className="hover:text-[#F9F9F6] cursor-pointer">{t('footer.legal')}</span>
              <span>•</span>
              <span className="hover:text-[#F9F9F6] cursor-pointer">{t('footer.privacy', 'Politique de Confidentialité')}</span>
              <span>•</span>
              <span className="hover:text-[#F9F9F6] cursor-pointer">{t('footer.ethics', 'Déontologie & Secret Professionnel')}</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
