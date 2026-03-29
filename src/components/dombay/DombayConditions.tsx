import Icon from '@/components/ui/icon';

const CONDITIONS = [
  { icon: 'Car', title: 'Транспорт', desc: 'Подготовленные внедорожники и минивэны с полным приводом' },
  { icon: 'Users', title: 'Группы до 8 человек', desc: 'Камерный формат — не толпа, а компания' },
  { icon: 'MapPin', title: 'Выезд со всех городов КМВ', desc: 'Забираем от вашего адреса: Кисловодск, Пятигорск, Ессентуки, Железноводск, Минеральные Воды' },
  { icon: 'Armchair', title: 'Рассадка', desc: 'Места в авто не бронируются заранее. Гид меняет местами на локациях' },
  { icon: 'Heart', title: 'Здоровье гостей', desc: 'При проблемах со здоровьем гид оставляет вас в комфортном кресле' },
  { icon: 'Mountain', title: 'Высота 1750 м', desc: 'Подходит для семей с детьми и людей постарше — лёгкий горный климат' },
];

const CARS = [
  {
    emoji: '🚙',
    name: 'Toyota Land Cruiser 200',
    seats: '4+1',
    feat: 'Полный привод',
    tags: ['Подготовленный', 'Кондиционер', 'Комфорт'],
  },
  {
    emoji: '🚙',
    name: 'Mitsubishi Pajero Sport',
    seats: '4+1',
    feat: 'Полный привод',
    tags: ['Полный привод', 'Кондиционер', 'Надёжный'],
  },
  {
    emoji: '🚐',
    name: 'Hyundai H-1 Минивэн',
    seats: '8',
    feat: 'Для компаний',
    tags: ['8 мест', 'Просторный', 'Кондиционер'],
  },
  {
    emoji: '🚙',
    name: 'UAZ Patriot',
    seats: '4+1',
    feat: 'Для сложных маршрутов',
    tags: ['Высокий клиренс', 'Полный привод', 'Надёжный'],
  },
  {
    emoji: '🚙',
    name: 'Kia Mohave',
    seats: '4+1',
    feat: 'Комфорт и мощь',
    tags: ['Полный привод', 'Кожаный салон', 'Тихий'],
  },
  {
    emoji: '🚙',
    name: 'Nissan Patrol',
    seats: '4+1',
    feat: 'Надёжность в горах',
    tags: ['V8 мотор', 'Полный привод', 'Проверен годами'],
  },
];

const OTHER_TOURS = [
  {
    emoji: '🏔',
    name: 'Эльбрус — джип-тур к подножию',
    duration: '10–12 ч',
    desc: 'К подножию высочайшей вершины Европы',
    img: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=800',
    color: 'from-blue-900',
  },
  {
    emoji: '💧',
    name: 'Джилысу — водопады и источники',
    duration: '10–11 ч',
    desc: 'Тёплые нарзаны и водопад Эмир',
    img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800',
    color: 'from-teal-900',
  },
  {
    emoji: '🌄',
    name: 'Плато Бермамыт',
    duration: '8–10 ч',
    desc: 'Лучшая смотровая на Эльбрус',
    img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800',
    color: 'from-indigo-900',
  },
  {
    emoji: '⚔️',
    name: 'Северная Осетия',
    duration: '10–12 ч',
    desc: 'Куртатинское ущелье, Мидаграбинские водопады',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800',
    color: 'from-gray-900',
  },
  {
    emoji: '🕌',
    name: 'Чечня',
    duration: '11–13 ч',
    desc: 'Озеро Кезеной-Ам, Аргунское ущелье',
    img: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=800',
    color: 'from-green-900',
  },
  {
    emoji: '🗼',
    name: 'Ингушетия',
    duration: '10–12 ч',
    desc: 'Башенные комплексы, средневековые замки',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800',
    color: 'from-amber-900',
  },
];

export default function DombayConditions() {
  const scrollToBooking = () => {
    const el = document.querySelector('#booking');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* Условия поездки */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-4">
              <Icon name="CheckCircle" size={14} className="text-gold" />
              <span className="text-gold text-sm font-semibold">Условия поездки</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">
              Всё включено для вашего комфорта
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {CONDITIONS.map((c, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-xl border-2 border-gray-100 hover:border-gold/30 transition-all">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name={c.icon} size={22} className="text-gold" />
                </div>
                <div>
                  <div className="font-black text-navy text-sm mb-1">{c.title}</div>
                  <div className="text-gray-500 text-sm leading-relaxed">{c.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Важно запомнить */}
          <div className="max-w-3xl mx-auto mt-10 p-6 rounded-2xl bg-amber-50 border-2 border-amber-200 flex gap-4">
            <div className="text-2xl flex-shrink-0">⚠️</div>
            <div>
              <div className="font-black text-amber-900 mb-2">Важно запомнить</div>
              <p className="text-amber-800 text-sm leading-relaxed">
                Места в авто не бронируются заранее. Гид меняет местами на локациях, но если у вас проблемы со здоровьем — вы остаётесь в комфортном кресле. Канатные дороги в Домбае оплачиваются отдельно (~1500 руб).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Наши авто */}
      <section id="cars" className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-4">
              <Icon name="Car" size={14} className="text-gold" />
              <span className="text-gold text-sm font-semibold">Наш автопарк</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Наши подготовленные внедорожники
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              6 автомобилей на любой маршрут и размер группы
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {CARS.map((car, i) => (
              <div
                key={i}
                className="group p-5 rounded-2xl border border-white/10 hover:border-gold/40 bg-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{car.emoji}</div>
                <h3 className="text-white font-black text-lg mb-1">{car.name}</h3>
                <div className="text-gold text-sm font-semibold mb-3">{car.feat} · {car.seats} мест</div>
                <div className="flex flex-wrap gap-2">
                  {car.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs bg-white/10 text-white/70 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={scrollToBooking}
              className="btn-gold px-8 py-3 rounded-xl font-bold flex items-center gap-2 mx-auto"
            >
              <Icon name="Calendar" size={18} />
              Закрепить авто при бронировании
            </button>
          </div>
        </div>
      </section>

      {/* Другие туры */}
      <section id="other-tours" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-4">
              <Icon name="Compass" size={14} className="text-gold" />
              <span className="text-gold text-sm font-semibold">Другие направления</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">
              Другие джип-туры по Кавказу
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Исследуем весь Северный Кавказ на подготовленных внедорожниках
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {OTHER_TOURS.map((tour, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                onClick={scrollToBooking}
              >
                <div className="relative h-52">
                  <img
                    src={tour.img}
                    alt={tour.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${tour.color}/80 to-transparent`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xl">{tour.emoji}</span>
                    <span className="text-xs text-gold font-bold bg-black/40 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Icon name="Clock" size={10} />
                      {tour.duration}
                    </span>
                  </div>
                  <h3 className="text-white font-black text-sm leading-tight">{tour.name}</h3>
                  <p className="text-white/60 text-xs mt-1">{tour.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
