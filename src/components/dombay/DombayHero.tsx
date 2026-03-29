import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

function getNextTourDate() {
  const now = new Date();
  const day = now.getDay(); // 0=вс, 6=сб
  const daysToSat = day === 6 ? 7 : (6 - day);
  const next = new Date(now);
  next.setDate(now.getDate() + daysToSat);
  next.setHours(6, 0, 0, 0);
  return next;
}

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = getNextTourDate().getTime() - Date.now();
      if (diff <= 0) { setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return; }
      setTimeLeft({
        days:    Math.floor(diff / 86400000),
        hours:   Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000)  / 60000),
        seconds: Math.floor((diff % 60000)    / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return timeLeft;
}

const SLIDES = [
  {
    bg: 'https://cdn.poehali.dev/projects/67416aab-80dd-49a8-b3bb-c84961b6ace9/files/01b2c2e5-b67a-4f6b-ba23-5aa52daffffb.jpg',
    label: 'Домбай — горный курорт',
  },
  {
    bg: 'https://cdn.poehali.dev/projects/67416aab-80dd-49a8-b3bb-c84961b6ace9/files/049a698a-f655-4d71-876c-8978322b9d40.jpg',
    label: 'Внедорожник на серпантине',
  },
  {
    bg: 'https://cdn.poehali.dev/projects/67416aab-80dd-49a8-b3bb-c84961b6ace9/files/479d6782-1726-43e4-bc11-5fa390ef887d.jpg',
    label: 'Перевал Гум-Баши — вид на Эльбрус',
  },
];

const FACTS = [
  { icon: 'Clock', text: '10–12 часов' },
  { icon: 'MapPin', text: 'Выезд со всех городов КМВ' },
  { icon: 'Car', text: 'Внедорожники / минивэны' },
  { icon: 'Users', text: 'до 8 человек' },
];

export default function DombayHero() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const { days, hours, minutes, seconds } = useCountdown();

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % SLIDES.length);
        setVisible(true);
      }, 400);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToBooking = () => {
    const el = document.querySelector('#booking');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy">
      {/* Фоновый слайдер */}
      <div className="absolute inset-0">
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{
              opacity: i === current && visible ? 1 : 0,
              backgroundImage: `url(${slide.bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: 'scale(1.05)',
              animation: i === current ? 'slowZoom 10s ease-out forwards' : 'none',
            }}
          />
        ))}
        {/* Градиентный оверлей */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
      </div>

      <style>{`
        @keyframes slowZoom {
          from { transform: scale(1.05); }
          to   { transform: scale(1.0); }
        }
      `}</style>

      {/* Контент */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-32 md:pt-28 md:pb-20">
        <div className="max-w-3xl">
          {/* Бейдж */}
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-gold text-sm font-semibold tracking-wide">Джип-тур из КМВ</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            Тур «Домбай —{' '}
            <span className="text-gold">сердце гор</span>»:
            <br className="hidden md:block" />{' '}
            канатные дороги, храм X века и сырные пещеры
          </h1>

          {/* Подзаголовок */}
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
            Выезд <span className="text-gold font-bold">6:00–7:00</span> из любого города КМВ. 
            Возвращение <span className="text-gold font-bold">20:00–21:00</span>. 
            Группы до 8 человек.
          </p>

          {/* Таймер до ближайшего тура */}
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-gold/30 rounded-2xl px-5 py-3 mb-8">
            <div className="flex items-center gap-1.5 text-gold">
              <Icon name="Timer" size={16} />
              <span className="text-xs font-semibold uppercase tracking-wider text-white/70">До ближайшего тура</span>
            </div>
            <div className="flex items-center gap-3">
              {[{ v: days, l: 'дн' }, { v: hours, l: 'ч' }, { v: minutes, l: 'мин' }, { v: seconds, l: 'сек' }].map(({ v, l }) => (
                <div key={l} className="flex flex-col items-center">
                  <span className="text-2xl font-black text-gold tabular-nums leading-none">
                    {String(v).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] text-white/50 uppercase tracking-wide">{l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Кнопка */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={scrollToBooking}
              className="btn-gold flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-black shadow-2xl shadow-gold/30 hover:shadow-gold/50 transition-all"
            >
              <Icon name="Calendar" size={22} />
              Забронировать место
            </button>
            <a
              href="tel:+79678284699"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all backdrop-blur-sm"
            >
              <Icon name="Phone" size={22} className="text-gold" />
              +7 967 828-46-99
            </a>
          </div>

          {/* Быстрые факты */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {FACTS.map((fact, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-3 py-3"
              >
                <div className="w-8 h-8 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={fact.icon} size={16} className="text-gold" />
                </div>
                <span className="text-white/90 text-xs font-medium leading-tight">{fact.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Индикаторы слайдов */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {SLIDES.map((slide, i) => (
          <button
            key={i}
            onClick={() => { setVisible(false); setTimeout(() => { setCurrent(i); setVisible(true); }, 300); }}
            className={`transition-all duration-300 rounded-full ${
              i === current ? 'w-8 h-2 bg-gold' : 'w-2 h-2 bg-white/40 hover:bg-white/60'
            }`}
            title={slide.label}
          />
        ))}
      </div>

      {/* Скролл-хинт */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 text-white/40 z-10">
        <span className="text-xs tracking-widest uppercase rotate-90 origin-center translate-y-6">Скролл</span>
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/30" />
      </div>
    </section>
  );
}