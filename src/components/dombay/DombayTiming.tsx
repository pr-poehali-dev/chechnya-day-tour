import { useState } from 'react';
import Icon from '@/components/ui/icon';

const STEPS = [
  {
    time: '06:00–07:00',
    title: 'Выезд из КМВ',
    icon: '🚙',
    short: 'Выезд из вашего города КМВ',
    detail:
      'Гид забирает вас от адреса в Кисловодске, Пятигорске, Ессентуках, Железноводске или Минеральных Водах. Ранний старт позволяет объехать городские пробки и успеть всё без спешки.',
  },
  {
    time: '07:00–10:30',
    title: 'Дорога в горы',
    icon: '🗺️',
    short: 'Живописная дорога, рассказ гида',
    detail:
      'По пути гид рассказывает историю Кавказа, горных народов и легенды мест, через которые проезжаете. Пейзажи за окном становятся всё грандиознее с каждым километром.',
  },
  {
    time: '10:30–11:30',
    title: 'Перевал Гум-Баши',
    icon: '🏔',
    short: 'Панорама Эльбруса и Большого Кавказа',
    detail:
      'На высоте 2100 м открывается фантастический вид на Эльбрус — двуглавую вершину России. Гид расскажет легенды о Бештау и Машуке. Здесь делают лучшие фото всего тура.',
  },
  {
    time: '11:30–12:30',
    title: 'Сырные пещеры',
    icon: '🧀',
    short: 'Необычное фото, дегустация',
    detail:
      'Уникальное место: пещеры в скалах, где местные хранят и дозревают сыр при постоянной температуре. Дегустация карачаевского сыра, исторические рассказы о традициях молочного скотоводства.',
  },
  {
    time: '12:30–13:30',
    title: 'Шоанинский храм',
    icon: '⛪',
    short: 'Христианский храм X века',
    detail:
      'Один из старейших христианских храмов России, построенный в X веке на вершине горы. Виды на долину захватывают дух. Гид расскажет о загадочной истории аланского христианства.',
  },
  {
    time: '13:30–14:30',
    title: 'Обед',
    icon: '🍽️',
    short: 'Самостоятельно в местном кафе',
    detail:
      'Свободное время для обеда в уютном кафе с кавказской кухней. Рекомендуем попробовать хычины, шашлык и айран. Гид подскажет лучшие заведения по пути.',
  },
  {
    time: '14:30–15:30',
    title: 'Река Уллу-Муруджу',
    icon: '💧',
    short: 'Самая чистая река Кавказа',
    detail:
      'Кристально чистая горная река с бирюзовой водой. По чистоте входит в топ горных рек России. Можно набрать воду, сделать красивые фото у водопадов. Место заряжает энергией.',
  },
  {
    time: '15:30–18:00',
    title: 'Домбай',
    icon: '🚡',
    short: 'Канатные дороги, свободное время',
    detail:
      'Главное место тура! Канатная дорога поднимает на высоту 3000+ метров — над облаками, к вечным снегам. Свободное время: магазины, кафе, прогулки по курорту. Канатка оплачивается отдельно (~1500 руб).',
  },
  {
    time: '18:00–21:00',
    title: 'Возвращение',
    icon: '🌅',
    short: 'Возвращение в КМВ',
    detail:
      'Приятная дорога домой с впечатлениями от дня. Гид развозит по тем же точкам, откуда забирал. Закаты в горах по пути домой — финальный подарок тура.',
  },
];

export default function DombayTiming() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-4">
            <Icon name="Clock" size={14} className="text-gold" />
            <span className="text-gold text-sm font-semibold">Программа дня</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">
            Тайминг поездки 10–12 часов
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Нажмите на любой этап, чтобы узнать подробнее
          </p>
        </div>

        {/* Десктоп — горизонтальная тайм-линия */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="relative">
            {/* Линия */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-gold via-teal to-gold opacity-40" />

            <div className="grid grid-cols-9 gap-2 relative">
              {STEPS.map((step, i) => (
                <button
                  key={i}
                  onClick={() => setActive(active === i ? null : i)}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Точка */}
                  <div
                    className={`w-16 h-16 rounded-full border-2 flex items-center justify-center text-2xl transition-all duration-200 z-10 bg-white ${
                      active === i
                        ? 'border-gold shadow-lg shadow-gold/30 scale-110'
                        : 'border-gray-200 group-hover:border-gold/60'
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div className="mt-3">
                    <div className="text-gold font-bold text-xs leading-tight">{step.time}</div>
                    <div className="text-navy text-xs font-semibold mt-1 leading-tight">{step.title}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Развёрнутый блок */}
          {active !== null && (
            <div className="mt-8 bg-navy rounded-2xl p-6 text-white animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{STEPS[active].icon}</div>
                <div className="flex-1">
                  <div className="text-gold font-bold text-sm mb-1">{STEPS[active].time}</div>
                  <h3 className="text-xl font-black mb-2">{STEPS[active].title}</h3>
                  <p className="text-white/80 leading-relaxed">{STEPS[active].detail}</p>
                </div>
                <button onClick={() => setActive(null)} className="text-white/40 hover:text-white transition-colors">
                  <Icon name="X" size={20} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Мобильная — вертикальная лента */}
        <div className="lg:hidden max-w-lg mx-auto">
          <div className="relative pl-10">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-teal to-gold opacity-40" />

            <div className="space-y-3">
              {STEPS.map((step, i) => (
                <button
                  key={i}
                  onClick={() => setActive(active === i ? null : i)}
                  className="w-full text-left relative"
                >
                  {/* Точка на линии */}
                  <div
                    className={`absolute -left-9 top-3 w-7 h-7 rounded-full border-2 flex items-center justify-center text-sm transition-all bg-white ${
                      active === i ? 'border-gold scale-110 shadow-md shadow-gold/30' : 'border-gray-200'
                    }`}
                  >
                    {step.icon}
                  </div>

                  <div
                    className={`rounded-xl border-2 p-4 transition-all duration-200 ${
                      active === i
                        ? 'border-gold bg-navy text-white shadow-lg'
                        : 'border-gray-100 bg-white hover:border-gold/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className={`text-xs font-bold ${active === i ? 'text-gold' : 'text-gold'}`}>
                          {step.time}
                        </span>
                        <div className={`font-bold mt-0.5 ${active === i ? 'text-white' : 'text-navy'}`}>
                          {step.title}
                        </div>
                      </div>
                      <Icon
                        name={active === i ? 'ChevronUp' : 'ChevronDown'}
                        size={16}
                        className={active === i ? 'text-gold' : 'text-gray-400'}
                      />
                    </div>
                    {active === i && (
                      <p className="mt-3 text-white/80 text-sm leading-relaxed">{step.detail}</p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Кнопка PDF */}
        <div className="text-center mt-10">
          <button className="inline-flex items-center gap-2 border-2 border-gold/40 text-gold hover:bg-gold hover:text-navy px-6 py-3 rounded-xl font-bold transition-all duration-200">
            <Icon name="Download" size={18} />
            Скачать тайминг в PDF
          </button>
        </div>
      </div>
    </section>
  );
}
