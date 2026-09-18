import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('fr') ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.team'), href: '/equipe' },
    { label: t('nav.expertise'), href: '/#expertises' },
    { label: t('nav.approach'), href: '/#notre-approche' },
    { label: t('nav.contact'), href: '/#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (href.startsWith('/#')) {
      const hash = href.substring(1);
      if (location.pathname === '/') {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(href);
      }
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F9F9F6]/85 backdrop-blur-md border-b border-[#111111]/10 py-3.5 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Text Logo */}
        <a
          href="#accueil"
          onClick={(e) => handleNavClick(e, '#accueil')}
          className="group flex flex-col focus:outline-none"
          id="brand-logo"
        >
          <span className="font-serif-title text-xl sm:text-2xl font-semibold tracking-widest uppercase text-[#111111] group-hover:text-[#B6966B] transition-colors">
            LegalEase Partners
          </span>
          <span className="text-[9px] tracking-[0.1em] uppercase text-[#111111]/60 font-sans-ui -mt-0.5">
            {t('nav.subtitle')}
          </span>
        </a>

        {/* Center: Minimalist Menu Links in a Pill-shaped Bordered Container */}
        <nav
          id="desktop-nav"
          className="hidden md:flex items-center space-x-1 px-5 py-1.5 rounded-full border border-[#111111]/15 bg-[#F9F9F6]/90 shadow-sm"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-[#111111]/80 hover:text-[#111111] hover:bg-[#111111]/5 rounded-full transition-all duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: CTA & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="hidden sm:inline-flex text-xs font-semibold tracking-widest text-[#111111]/60 hover:text-[#111111] transition-colors focus:outline-none"
          >
            {i18n.language?.startsWith('fr') ? 'EN' : 'FR'}
          </button>
          
          <button
            id="nav-cta-btn"
            onClick={onOpenBooking}
            className="group relative inline-flex items-center justify-center px-4 sm:px-5 py-2 text-xs font-medium tracking-wide uppercase text-[#111111] border border-[#111111] rounded-none hover:bg-[#111111] hover:text-[#F9F9F6] transition-all duration-200 focus:outline-none cursor-pointer"
          >
            <span>{t('nav.book')}</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-[#111111] hover:bg-[#111111]/5 focus:outline-none"
            aria-label="Ouvrir le menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#F9F9F6] border-b border-[#111111]/10 px-6 py-5 shadow-lg"
          >
            <div className="flex justify-end mb-4">
              <button
                onClick={toggleLanguage}
                className="text-xs font-semibold tracking-widest text-[#111111]/60 hover:text-[#111111] transition-colors focus:outline-none"
              >
                {i18n.language?.startsWith('fr') ? 'Switch to English' : 'Passer en Français'}
              </button>
            </div>
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium tracking-wider uppercase text-[#111111] py-2 border-b border-[#111111]/5"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-medium tracking-wide uppercase text-white bg-[#111111] rounded-none"
                >
                  <span>{t('nav.book')}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
