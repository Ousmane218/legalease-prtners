import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Calendar, Clock, Building2, User, Mail, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { useContent } from '../data/content';
import { useTranslation } from 'react-i18next';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPillar?: string;
}

export default function BookingModal({ isOpen, onClose, preselectedPillar }: BookingModalProps) {
  const { PILLARS_DATA, LEGAL_INFO } = useContent();
  const { t } = useTranslation();
  const [pillar, setPillar] = useState<string>(preselectedPillar || 'Juridique & Fiscal');
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    preferredDate: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update selected pillar if preselected changes
  React.useEffect(() => {
    if (preselectedPillar) {
      setPillar(preselectedPillar);
    }
  }, [preselectedPillar]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      preferredDate: '',
      message: '',
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#0D0D0C]/90"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-[#F9F9F6] text-[#111111] border border-[#111111]/20 shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden rounded-none"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-[#111111]/60 hover:text-[#111111] hover:bg-[#111111]/5 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <div>
              {/* Header */}
              <div className="mb-6 pb-4 border-b border-[#111111]/10 pr-8">
                <span className="text-[10px] font-mono tracking-wide text-[#C5A880] uppercase">
                  {t('booking.badge')}
                </span>
                <h3 className="font-serif-title text-2xl sm:text-3xl font-semibold text-[#111111] mt-1">
                  {t('booking.title')}
                </h3>
                <p className="text-xs text-[#111111]/70 font-sans-ui mt-1.5">
                  {t('booking.desc')}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans-ui">
                {/* Pillar selector */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#111111] mb-1.5">
                    {t('booking.department')}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {PILLARS_DATA.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setPillar(p.name)}
                        className={`p-2.5 text-left border text-[11px] transition-all cursor-pointer ${
                          pillar === p.name
                            ? 'bg-[#111111] text-[#F9F9F6] border-[#111111]'
                            : 'bg-white text-[#111111]/80 border-[#111111]/20 hover:border-[#111111]'
                        }`}
                      >
                        <div className="font-semibold">{p.name}</div>
                        <div className="text-[9px] opacity-70 truncate">{p.lead}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#111111] mb-1">
                      {t('booking.name')} *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Ex: Babacar Ndiaye"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white border border-[#111111]/25 focus:border-[#111111] focus:outline-none text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#111111] mb-1">
                      {t('booking.company')} *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Ex: Sahel Entreprise"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white border border-[#111111]/25 focus:border-[#111111] focus:outline-none text-xs"
                      />
                    </div>
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#111111] mb-1">
                      {t('booking.email')} *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="contact@societe.sn"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2.5 bg-white border border-[#111111]/25 focus:border-[#111111] focus:outline-none text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#111111] mb-1">
                      {t('booking.phone', 'Téléphone / WhatsApp')} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+221 77 000 00 00"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2.5 bg-white border border-[#111111]/25 focus:border-[#111111] focus:outline-none text-xs"
                    />
                  </div>
                </div>

                {/* Strategic challenge message */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#111111] mb-1">
                    {t('booking.message')}
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Précisez brièvement l'objet de votre demande..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white border border-[#111111]/25 focus:border-[#111111] focus:outline-none text-xs"
                  />
                </div>

                {/* Confidentiality notice */}
                <div className="flex items-center space-x-2 text-[10px] text-[#111111]/60 font-mono pt-1">
                  <ShieldCheck className="w-4 h-4 text-[#B6966B] shrink-0" />
                  <span>{t('booking.confidentiality')}</span>
                </div>

                {/* Submit button */}
                <div className="pt-3">
                  <button
                    className="w-full py-3 px-6 bg-[#111111] hover:bg-[#0D0D0C] text-[#F9F9F6] font-mono uppercase text-xs tracking-wide flex items-center justify-center space-x-2 transition-colors cursor-pointer"
                  >
                    <span>{t('booking.submit')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 bg-[#B6966B]/15 text-[#B6966B] rounded-full flex items-center justify-center mx-auto">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="font-serif-title text-2xl font-bold text-[#111111]">
                {t('booking.successTitle', 'Demande transmise avec succès')}
              </h3>
              <p className="font-serif-editorial text-sm text-[#111111]/80 max-w-md mx-auto leading-relaxed mb-6">
                {t('booking.successDesc')} {formData.fullName}. {t('booking.successDesc2')}
              </p>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#111111] text-[#F9F9F6] font-mono text-xs uppercase tracking-wide"
                >
                  {t('booking.close')}
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
