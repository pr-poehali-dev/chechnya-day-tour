import { useState } from 'react';
import Icon from '@/components/ui/icon';

const REASONS = [
  { icon: 'Clock', title: 'Полный день без гонки', desc: '10–12 часов — видим всё, нигде не торопимся' },
  { icon: 'MapPin', title: 'Трансфер от вашего адреса', desc: 'Забираем по всему КМВ: Кисловодск, Пятигорск, Ессентуки и другие города' },
  { icon: 'Mic', title: 'Гид-профессионал', desc: 'Легенды, лучшие ракурсы, история каждого места' },
  { icon: 'Heart', title: 'Для всей семьи', desc: 'Программа для пар, семей с детьми и людей постарше' },
  { icon: 'Sunrise', title: 'Ранний выезд', desc: 'Выезжаем в 6:00 — успеваем всё без пробок и туристических толп' },
];

const REVIEWS = [
  {
    name: 'Анна К.',
    city: 'Кисловодск',
    rating: 5,
    text: 'Невероятный тур! Никогда не думала, что за один день можно увидеть столько красоты. Сырные пещеры произвели огромное впечатление, а вид с Гум-Баши на Эльбрус вообще не передать словами. Гид Руслан — профессионал, рассказывает так, что заслушаешься.',
    date: 'Октябрь 2024',
  },
  {
    name: 'Сергей и Наталья',
    city: 'Пятигорск',
    rating: 5,
    text: 'Ездили на годовщину свадьбы — лучший подарок! Канатная дорога в Домбае — что-то запредельное, стоишь буквально над облаками. Машина комфортная, гид знает каждый камень. Уже записались на тур к Эльбрусу.',
    date: 'Сентябрь 2024',
  },
  {
    name: 'Семья Петровых',
    city: 'Ессентуки',
    rating: 5,
    text: 'Брали с детьми 8 и 12 лет. Дети были в восторге — особенно от пещер с сыром и реки Уллу-Муруджу. Гид умеет работать с детьми, рассказывал интересные факты. Без усталости вернулись домой с кучей фото.',
    date: 'Август 2024',
  },
];

const FAQS = [
  {
    q: 'Что взять с собой?',
    a: 'Удобную обувь для ходьбы по горным тропам, тёплую куртку (в горах прохладно даже летом), документы, небольшой рюкзак. Воду можно набрать у реки Уллу-Муруджу. Деньги на обед и канатную дорогу.',
  },
  {
    q: 'Безопасно ли детям?',
    a: 'Абсолютно! Маршрут проходит по асфальтовым дорогам и обустроенным тропам. Высота на протяжении большей части маршрута — 1500–2100 м. Дети 6+ лет легко справляются. Гид следит за безопасностью всей группы.',
  },
  {
    q: 'Как работает рассадка в машине?',
    a: 'Места не закреплены заранее. На каждой остановке гид предлагает поменяться, чтобы все увидели виды с разных сторон. Если у вас проблемы с укачиванием или здоровьем — скажите гиду, он обеспечит вам комфортное место.',
  },
  {
    q: 'Что если погода плохая?',
    a: 'Тур проводится в любую погоду — горы красивы и в облаках, и в дождь, и в снег. Гид адаптирует маршрут под условия. В редких случаях сильного шторма или закрытия дорог — переносим на ближайший день.',
  },
  {
    q: 'Канатная дорога включена в стоимость?',
    a: 'Нет, канатная дорога в Домбае оплачивается отдельно на месте (~1500 руб. туда-обратно). Это позволяет гибко управлять бюджетом и не платить за то, что вам может быть не нужно.',
  },
];

export default function DombayReviews() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Почему выбирают */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
                  <Icon name="Star" size={14} className="text-gold" />
                  <span className="text-gold text-sm font-semibold">Наши преимущества</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-navy mb-8">
                  Почему выбирают этот тур
                </h2>
                <div className="space-y-5">
                  {REASONS.map((r, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon name={r.icon} size={18} className="text-gold" />
                      </div>
                      <div>
                        <div className="font-black text-navy mb-0.5">{r.title}</div>
                        <div className="text-gray-500 text-sm">{r.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/67416aab-80dd-49a8-b3bb-c84961b6ace9/files/479d6782-1726-43e4-bc11-5fa390ef887d.jpg"
                  alt="Джип-тур Домбай"
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 card-glass rounded-xl p-4">
                  <div className="text-gold font-black text-3xl mb-1">500+</div>
                  <div className="text-white text-sm">довольных путешественников в 2024 году</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-4">
              <Icon name="MessageSquare" size={14} className="text-gold" />
              <span className="text-gold text-sm font-semibold">Отзывы</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Что говорят путешественники
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {REVIEWS.map((rev, i) => (
              <div key={i} className="p-6 rounded-2xl border border-white/10 bg-white/5">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: rev.rating }).map((_, j) => (
                    <Icon key={j} name="Star" size={16} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-4">"{rev.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-bold text-sm">{rev.name}</div>
                    <div className="text-white/40 text-xs">{rev.city}</div>
                  </div>
                  <span className="text-white/30 text-xs">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-4">
                <Icon name="HelpCircle" size={14} className="text-gold" />
                <span className="text-gold text-sm font-semibold">Частые вопросы</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-navy">
                Ответы на вопросы
              </h2>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className="border-2 border-gray-100 rounded-xl overflow-hidden hover:border-gold/30 transition-colors"
                >
                  <button
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-navy hover:text-gold transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{faq.q}</span>
                    <Icon
                      name={openFaq === i ? 'ChevronUp' : 'ChevronDown'}
                      size={18}
                      className="text-gold flex-shrink-0 ml-4"
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}