import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const NAV_LINKS = [
  { label: 'О туре', href: '#about' },
  { label: 'Локации', href: '#locations' },
  { label: 'Наши авто', href: '#cars' },
  { label: 'Другие туры', href: '#other-tours' },
  { label: 'Контакты', href: '#contacts' },
];

const PHONE = '+7 967 828-46-99';
const PHONE_RAW = '+79678284699';

export default function DombayHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy/95 backdrop-blur-md shadow-2xl shadow-black/30'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Логотип */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-lg">🏔</span>
              </div>
              <div className="hidden sm:block leading-tight">
                <div className="font-black text-white text-sm tracking-wide uppercase">Jeep Tour</div>
                <div className="text-gold text-xs font-semibold tracking-widest uppercase">Dombay</div>
              </div>
            </button>

            {/* Навигация ПК */}
            <nav className="hidden lg:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-white/80 hover:text-gold text-sm font-medium transition-colors duration-200 hover:scale-105"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Правая часть ПК */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${PHONE_RAW}`}
                className="flex items-center gap-2 text-white hover:text-gold transition-colors text-sm font-semibold"
              >
                <Icon name="Phone" size={16} className="text-gold" />
                {PHONE}
              </a>
              <button
                onClick={() => handleNavClick('#booking')}
                className="btn-gold flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold"
              >
                <Icon name="Calendar" size={16} />
                Забронировать
              </button>
            </div>

            {/* Мобильная правая часть */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href={`tel:${PHONE_RAW}`}
                className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold/30 transition-colors"
              >
                <Icon name="Phone" size={18} className="text-gold" />
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Icon name={menuOpen ? 'X' : 'Menu'} size={20} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Мобильное меню */}
        <div
          className={`lg:hidden bg-navy/98 backdrop-blur-md border-t border-white/10 transition-all duration-300 overflow-hidden ${
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-white/80 hover:text-gold py-3 px-4 rounded-lg hover:bg-white/5 transition-all text-base font-medium border-b border-white/5 last:border-0"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#booking')}
              className="btn-gold mt-3 py-3 rounded-lg text-base font-bold flex items-center justify-center gap-2"
            >
              <Icon name="Calendar" size={18} />
              Забронировать место
            </button>
          </div>
        </div>
      </header>

      {/* Плавающий бар — только мобильные */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <div className="bg-navy/95 backdrop-blur-md border-t border-white/10 px-4 py-3 flex items-center gap-3">
          <a
            href={`tel:${PHONE_RAW}`}
            className="flex-1 flex items-center justify-center gap-2 bg-white/10 rounded-lg py-3 text-white font-semibold text-sm hover:bg-white/20 transition-colors"
          >
            <Icon name="Phone" size={16} className="text-gold" />
            {PHONE}
          </a>
          <button
            onClick={() => handleNavClick('#booking')}
            className="flex-1 btn-gold rounded-lg py-3 text-sm font-bold flex items-center justify-center gap-2"
          >
            <Icon name="Calendar" size={16} />
            Забронировать
          </button>
        </div>
      </div>
    </>
  );
}
