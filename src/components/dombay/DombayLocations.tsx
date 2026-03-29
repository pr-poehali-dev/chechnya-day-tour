import { useState } from 'react';
import Icon from '@/components/ui/icon';

const LOCATIONS = [
  {
    emoji: '🏔',
    title: 'Перевал Гум-Баши',
    img: 'https://cdn.poehali.dev/projects/67416aab-80dd-49a8-b3bb-c84961b6ace9/files/479d6782-1726-43e4-bc11-5fa390ef887d.jpg',
    points: ['Панорама Эльбруса и Большого Кавказа', 'Лучшие фото тура на высоте 2100 м', 'Легенды о Бештау и Машуке от гида'],
    full: 'Перевал Гум-Баши — одна из лучших смотровых точек в регионе. На высоте 2100 метров открывается панорама на всю цепь Большого Кавказа. В ясную погоду отчётливо виден двуглавый Эльбрус — высочайшая вершина России и Европы.\n\nЧто делаем: выходим на смотровую площадку, гид показывает вершины и рассказывает их названия, делаем фото. Виды здесь фантастические в любую погоду.\n\nЧто расскажет гид: легенды о нарте Бештау и красавице Машуке, история горских народов, живших в этих местах.',
  },
  {
    emoji: '🧀',
    title: 'Сырные пещеры',
    img: 'https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b?q=80&w=800',
    points: ['Пещеры в скалах для хранения сыра', 'Дегустация карачаевского сыра', 'Уникальные фото внутри пещер'],
    full: 'Карачаевские сырные пещеры — редкое и совершенно необычное место. В естественных горных пещерах при постоянной температуре 8–12°С местные мастера хранят и дозревают карачаевский сыр — гордость национальной кухни.\n\nЧто делаем: заходим в пещеры, дегустируем разные виды сыра, делаем уникальные фото.\n\nЧто расскажет гид: история карачаевского сыроделия, насчитывающая несколько столетий, секреты выдержки и традиции пастушеской культуры.',
  },
  {
    emoji: '⛪',
    title: 'Шоанинский храм X века',
    img: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800',
    points: ['Один из старейших христианских храмов России', 'Вид на горную долину с вершины', 'История аланского христианства'],
    full: 'Шоанинский храм построен в X веке — в эпоху расцвета Аланского царства. Это один из немногих сохранившихся памятников аланского христианства, предшествовавшего исламизации Кавказа.\n\nХрам стоит на высокой скале, вид с которой захватывает дух: долина внизу, горы вокруг, вечное небо.\n\nЧто расскажет гид: история алан и их загадочного исчезновения, роль христианства на Кавказе, архитектурные особенности постройки X–XI веков.',
  },
  {
    emoji: '💧',
    title: 'Река Уллу-Муруджу',
    img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800',
    points: ['Кристально чистая бирюзовая вода', 'Горные водопады по пути', 'Фототочки у порогов и перекатов'],
    full: 'Уллу-Муруджу — одна из самых чистых горных рек Кавказа. Вода настолько прозрачная, что видно каждый камешек на дне. Бирюзовый цвет объясняется ледниковым происхождением — вода стекает с горных ледников.\n\nЧто делаем: гуляем по берегу, находим лучшие ракурсы, можно набрать воды (она питьевая), посидеть у порогов.\n\nЧто расскажет гид: геология горных рек, почему вода такого цвета, особенности горной гидрологии.',
  },
  {
    emoji: '🚡',
    title: 'Домбай — канатные дороги',
    img: 'https://cdn.poehali.dev/projects/67416aab-80dd-49a8-b3bb-c84961b6ace9/files/01b2c2e5-b67a-4f6b-ba23-5aa52daffffb.jpg',
    points: ['Подъём на высоту 3000+ метров', 'Вид над облаками на ледники', 'Свободное время на курорте'],
    full: 'Домбай — жемчужина Западного Кавказа. Канатная дорога поднимает за несколько минут на высоту более 3000 метров — туда, где облака под ногами, а ледники можно потрогать руками.\n\nЧто делаем: едем на канатке (оплачивается отдельно, ~1500 руб.), гуляем по верхней станции, делаем фото на фоне ледников.\n\nЧто расскажет гид: история курорта, породы вершин, откуда берётся постоянный снег, рекорды альпинистов.',
  },
  {
    emoji: '🏔',
    title: 'Замок Коварства и Любви',
    img: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=800',
    points: ['Скала со средневековой легендой', 'Живописное ущелье реки Теберда', 'Фотостоп у водопада'],
    full: 'Живописная скала в форме крепости у слияния рек. Местная легенда рассказывает о трагической любви карачаевской девушки и пастуха — история, достойная шекспировских страстей.\n\nЧто делаем: фотографируемся у скалы, гуляем по ущелью, осматриваем водопад рядом.\n\nЧто расскажет гид: полная легенда о Коварстве и Любви, история этого места, особенности горного ущелья Тебердинского заповедника.',
  },
];

export default function DombayLocations() {
  const [modal, setModal] = useState<number | null>(null);

  return (
    <section id="locations" className="py-20 section-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-4">
            <Icon name="MapPin" size={14} className="text-gold" />
            <span className="text-gold text-sm font-semibold">Маршрут</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Что вас ждёт на локациях
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            6 уникальных мест, каждое с историей и яркими впечатлениями
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {LOCATIONS.map((loc, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden border border-white/10 hover:border-gold/40 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/10 bg-white/5"
            >
              {/* Фото */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={loc.img}
                  alt={loc.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                <div className="absolute top-4 left-4 text-4xl">{loc.emoji}</div>
              </div>

              {/* Контент */}
              <div className="p-5">
                <h3 className="text-white font-black text-lg mb-3">{loc.title}</h3>
                <ul className="space-y-2 mb-4">
                  {loc.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2 text-white/70 text-sm">
                      <Icon name="ChevronRight" size={14} className="text-gold mt-0.5 flex-shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setModal(i)}
                  className="text-gold hover:text-gold-light font-semibold text-sm flex items-center gap-1 transition-colors"
                >
                  Подробнее
                  <Icon name="ArrowRight" size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Модальное окно */}
      {modal !== null && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setModal(null)}
        >
          <div
            className="bg-navy border border-white/10 rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56">
              <img
                src={LOCATIONS[modal].img}
                alt={LOCATIONS[modal].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="text-3xl mb-1">{LOCATIONS[modal].emoji}</div>
                <h3 className="text-white font-black text-2xl">{LOCATIONS[modal].title}</h3>
              </div>
              <button
                onClick={() => setModal(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <Icon name="X" size={16} />
              </button>
            </div>
            <div className="p-6">
              {LOCATIONS[modal].full.split('\n\n').map((para, i) => (
                <p key={i} className={`text-white/80 text-sm leading-relaxed ${i > 0 ? 'mt-3' : ''}`}>
                  {para}
                </p>
              ))}
              <button
                onClick={() => setModal(null)}
                className="btn-gold mt-6 w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2"
              >
                <Icon name="ArrowLeft" size={16} />
                Назад к маршруту
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}