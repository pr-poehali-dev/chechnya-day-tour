import Icon from '@/components/ui/icon';

const TOUR_LINKS = [
  { label: 'Домбай — сердце гор', href: '#about' },
  { label: 'Эльбрус', href: '#other-tours' },
  { label: 'Джилысу', href: '#other-tours' },
  { label: 'Плато Бермамыт', href: '#other-tours' },
  { label: 'Северная Осетия', href: '#other-tours' },
  { label: 'Чечня', href: '#other-tours' },
];

const PHONE = '+7 967 828-46-99';
const PHONE_RAW = '+79678284699';

export default function DombayFooter() {
  const scroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Лого и описание */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                <span className="text-lg">🏔</span>
              </div>
              <div>
                <div className="font-black text-white text-sm tracking-wide uppercase">Jeep Tour</div>
                <div className="text-gold text-xs font-semibold tracking-widest uppercase">Dombay</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Джип-туры по Северному Кавказу из городов КМВ. Домбай, Эльбрус, Джилысу, Бермамыт и другие маршруты на подготовленных внедорожниках.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-all text-white/60"
              >
                <Icon name="Instagram" size={16} />
              </a>
              <a
                href="https://vk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-all text-white/60"
              >
                <Icon name="MessageCircle" size={16} />
              </a>
              <a
                href={`https://t.me/JeepTourDombay`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-all text-white/60"
              >
                <Icon name="Send" size={16} />
              </a>
            </div>
          </div>

          {/* Туры */}
          <div>
            <div className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-4">Наши туры</div>
            <div className="space-y-2">
              {TOUR_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scroll(link.href)}
                  className="block text-white/60 hover:text-gold text-sm transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Контакты */}
          <div>
            <div className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-4">Контакты</div>
            <a
              href={`tel:${PHONE_RAW}`}
              className="text-white font-bold text-lg hover:text-gold transition-colors block mb-1"
            >
              {PHONE}
            </a>
            <div className="text-white/40 text-sm mb-5">8:00–20:00 ежедневно</div>

            <div className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-3">Выезд из городов</div>
            <p className="text-white/50 text-sm leading-relaxed">
              Кисловодск · Пятигорск · Ессентуки · Железноводск · Минеральные Воды
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © 2024 Jeep Tour Dombay. ИП, договор оферты. Все права защищены.
          </p>
          <p className="text-white/20 text-xs text-center">
            Джип-тур на Домбай из КМВ | Внедорожники | Гид | Канатные дороги
          </p>
        </div>
      </div>
    </footer>
  );
}
