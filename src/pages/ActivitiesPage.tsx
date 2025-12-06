import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const ActivitiesPage = () => {
  const [activeSeason, setActiveSeason] = useState<'winter' | 'summer'>('winter');

  const winterActivities = [
    {
      icon: 'Ski',
      title: 'Горные лыжи и сноуборд',
      subtitle: '35 км подготовленных трасс',
      description: 'Эльбрус предлагает трассы для всех уровней подготовки: от пологих учебных склонов до экстремальных фрирайд-зон. Сезон катания длится с декабря по май.',
      highlights: [
        'Зеленые трассы для начинающих (5)',
        'Синие трассы среднего уровня (12)',
        'Красные сложные трассы (8)',
        'Черные экспертные трассы (3)',
        'Фрирайд-зоны с целинным снегом',
        'Прокат оборудования и школа инструкторов'
      ],
      price: 'Ски-пасс: от 1500 руб./день',
      image: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?q=80&w=2052'
    },
    {
      icon: 'Snowflake',
      title: 'Снегоходы и тюбинг',
      subtitle: 'Экстрим на снегу',
      description: 'Прокатитесь на снегоходе по заснеженным склонам Эльбруса или испытайте адреналин на специальных тюбинг-трассах.',
      highlights: [
        'Прокат снегоходов с инструктором',
        'Маршруты разной сложности',
        'Тюбинг-парк с безопасными трассами',
        'Групповые и индивидуальные туры',
        'Фотосессия на фоне гор'
      ],
      price: 'от 2500 руб./час',
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=2070'
    },
    {
      icon: 'Wind',
      title: 'Зимний треккинг',
      subtitle: 'Прогулки по зимним горам',
      description: 'Пешие прогулки на снегоступах по живописным маршрутам Приэльбрусья. Невероятные виды и первозданная природа.',
      highlights: [
        'Маршруты для разного уровня подготовки',
        'Профессиональные гиды',
        'Прокат снегоступов и треккинговых палок',
        'Горячий чай на маршруте',
        'Знакомство с флорой и фауной региона'
      ],
      price: 'от 3000 руб./чел',
      image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=2076'
    },
    {
      icon: 'Waves',
      title: 'СПА и термальные источники',
      subtitle: 'Отдых после катания',
      description: 'После активного дня на склонах расслабьтесь в термальных бассейнах или СПА-центрах отелей.',
      highlights: [
        'Термальные источники с целебной водой',
        'СПА-центры в отелях',
        'Массаж и wellness-процедуры',
        'Бани и сауны',
        'Панорамные виды из бассейнов'
      ],
      price: 'от 1000 руб./сеанс',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070'
    }
  ];

  const summerActivities = [
    {
      icon: 'Mountain',
      title: 'Восхождение на Эльбрус',
      subtitle: 'Покорите высочайшую вершину Европы',
      description: 'Классический альпинистский маршрут на западную вершину (5642 м). Требуется хорошая физическая подготовка и акклиматизация.',
      highlights: [
        'Южный маршрут (классический, 5-7 дней)',
        'Северный маршрут (для опытных, 7-9 дней)',
        'Профессиональные гиды-альпинисты',
        'Все необходимое снаряжение',
        'Проживание в приютах',
        'Сертификат покорителя Эльбруса'
      ],
      price: 'от 40000 руб. программа',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070'
    },
    {
      icon: 'Hiking',
      title: 'Треккинг к водопадам',
      subtitle: 'Однодневные и многодневные походы',
      description: 'Исследуйте живописные ущелья, посетите водопады Девичьи косы, Азау, прогуляйтесь по Долине Нарзанов.',
      highlights: [
        'Водопад Девичьи косы (1-2 часа)',
        'Водопады Азау (3-4 часа)',
        'Долина Нарзанов (целый день)',
        'Озера Донгуз-Орун',
        'Без специальной подготовки',
        'Маршруты для семей с детьми'
      ],
      price: 'от 1500 руб./чел',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070'
    },
    {
      icon: 'Cable',
      title: 'Канатные дороги',
      subtitle: 'Подъем до 3800 метров',
      description: 'Современные гондольные подъемники доставят вас на высоту 3800 м, откуда открываются потрясающие виды на Кавказский хребет.',
      highlights: [
        'Станция "Азау" → "Старый Кругозор" (3000 м)',
        'Станция "Мир" (3500 м)',
        'Станция "Гара-Баши" (3800 м)',
        'Кафе и смотровые площадки',
        'Безопасные современные кабины',
        'Работа в летний сезон'
      ],
      price: 'от 1200 руб. туда-обратно',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070'
    },
    {
      icon: 'Truck',
      title: 'Джип-туры',
      subtitle: 'Экстремальные маршруты на внедорожниках',
      description: 'Исследуйте труднодоступные уголки Приэльбрусья на подготовленных внедорожниках с опытными водителями.',
      highlights: [
        'Поездка к ледникам',
        'Заброска к высокогорным озерам',
        'Панорамные точки для фотосессий',
        'Пикник на природе',
        'Безопасные мощные джипы',
        'Трассы разной сложности'
      ],
      price: 'от 5000 руб. за машину',
      image: 'https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b?q=80&w=2069'
    },
    {
      icon: 'Bike',
      title: 'Велотуризм',
      subtitle: 'Горные и равнинные маршруты',
      description: 'Прокат горных велосипедов и организованные велотуры по живописным маршрутам разной сложности.',
      highlights: [
        'Прокат профессиональных велосипедов',
        'Маршруты от 10 до 50 км',
        'Гиды-велосипедисты',
        'Защитное снаряжение в комплекте',
        'Маршруты для новичков и профи',
        'Сопровождение машиной поддержки'
      ],
      price: 'Прокат от 800 руб./день',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070'
    },
    {
      icon: 'Droplet',
      title: 'Термальные источники',
      subtitle: 'Лечебные минеральные воды',
      description: 'Посетите природные термальные источники с целебной минеральной водой, богатой полезными элементами.',
      highlights: [
        'Температура воды 35-45°C',
        'Лечение кожных заболеваний',
        'Улучшение кровообращения',
        'Снятие мышечного напряжения',
        'Купание на фоне гор',
        'Организованные туры с трансфером'
      ],
      price: 'от 500 руб. вход',
      image: 'https://images.unsplash.com/photo-1571019613576-2b22c76fd955?q=80&w=2070'
    }
  ];

  const activities = activeSeason === 'winter' ? winterActivities : summerActivities;

  return (
    <div className="pt-20">
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Активный отдых на Эльбрусе
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10">
            Выберите сезон и найдите свое приключение
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              onClick={() => setActiveSeason('winter')}
              className={`px-8 py-6 text-lg ${
                activeSeason === 'winter'
                  ? 'bg-white text-primary hover:bg-white/90'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <Icon name="Snowflake" className="w-5 h-5 mr-2" />
              ЗИМА
            </Button>
            <Button
              size="lg"
              onClick={() => setActiveSeason('summer')}
              className={`px-8 py-6 text-lg ${
                activeSeason === 'summer'
                  ? 'bg-white text-primary hover:bg-white/90'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <Icon name="Sun" className="w-5 h-5 mr-2" />
              ЛЕТО
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-4">
          <Accordion type="single" collapsible className="max-w-6xl mx-auto space-y-6">
            {activities.map((activity, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-0">
                <Card className="border-2 hover:border-primary transition-all overflow-hidden">
                  <AccordionTrigger className="hover:no-underline">
                    <CardHeader className="w-full">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                          <Icon name={activity.icon} className="w-8 h-8 text-primary" />
                        </div>
                        <div className="flex-1 text-left">
                          <CardTitle className="text-2xl mb-2">{activity.title}</CardTitle>
                          <p className="text-muted-foreground font-normal">{activity.subtitle}</p>
                        </div>
                      </div>
                    </CardHeader>
                  </AccordionTrigger>
                  <AccordionContent>
                    <CardContent className="pt-0">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                            <img
                              src={activity.image}
                              alt={activity.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="bg-accent/10 p-4 rounded-lg border-2 border-accent">
                            <div className="font-bold text-foreground mb-1">Стоимость</div>
                            <div className="text-2xl font-bold text-accent">{activity.price}</div>
                          </div>
                        </div>
                        <div>
                          <p className="text-lg text-foreground mb-6 leading-relaxed">
                            {activity.description}
                          </p>
                          <h4 className="font-bold text-lg mb-4">Что включено:</h4>
                          <ul className="space-y-3">
                            {activity.highlights.map((highlight, hidx) => (
                              <li key={hidx} className="flex items-start gap-3">
                                <Icon name="Check" className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                                <span className="text-foreground">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                          <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                            <Icon name="Phone" className="w-4 h-4 mr-2" />
                            Забронировать
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Icon name="Info" className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Нужна помощь с выбором?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Свяжитесь с нами, и наши эксперты помогут составить идеальную программу отдыха 
              с учетом вашего уровня подготовки и предпочтений.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                <Icon name="Phone" className="w-5 h-5 mr-2" />
                +7 (866) 388-77-00
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="MessageCircle" className="w-5 h-5 mr-2" />
                Написать в Telegram
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActivitiesPage;
