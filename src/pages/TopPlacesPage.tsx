import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const TopPlacesPage = () => {
  const places = [
    {
      number: 1,
      title: 'Приют 11 и станция «Мир»',
      subtitle: '4100 метров над уровнем моря',
      description: 'Легендарная высокогорная гостиница, сгоревшая в 1998 году. Сейчас здесь современная станция канатной дороги «Мир» и новые приюты для альпинистов.',
      facts: [
        { icon: 'Mountain', label: 'Высота', value: '4100 м' },
        { icon: 'Thermometer', label: 'Температура', value: '-15°C средняя' },
        { icon: 'Wind', label: 'Кислород', value: '60% от нормы' },
        { icon: 'Clock', label: 'Время подъема', value: '3-4 часа' }
      ],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070',
      howTo: 'Канатная дорога от Азау → Старый Кругозор → Мир → ратрак до Приюта 11',
      price: '3000-5000 руб.'
    },
    {
      number: 2,
      title: 'Гора Чегет',
      subtitle: '3700 метров, соседняя вершина',
      description: 'Классический горнолыжный курорт с крутыми склонами и невероятным видом на Эльбрус. Считается одним из самых сложных курортов России.',
      facts: [
        { icon: 'Ski', label: 'Сложность', value: 'Высокая' },
        { icon: 'Mountain', label: 'Перепад высот', value: '1600 м' },
        { icon: 'Cable', label: 'Подъемники', value: '3 очереди' },
        { icon: 'Camera', label: 'Виды', value: 'На Эльбрус' }
      ],
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070',
      howTo: 'Канатная дорога от поселка Терскол, 3 очереди подъемников',
      price: '1500 руб. ски-пасс'
    },
    {
      number: 3,
      title: 'Долина Нарзанов',
      subtitle: 'Минеральные источники',
      description: 'Уникальное место с природными источниками целебной минеральной воды. Более 20 источников с разным составом воды бьют прямо из земли.',
      facts: [
        { icon: 'Droplet', label: 'Источников', value: '20+' },
        { icon: 'MapPin', label: 'Расстояние', value: '34 км от Терскола' },
        { icon: 'Heart', label: 'Польза', value: 'Лечебная вода' },
        { icon: 'Trees', label: 'Природа', value: 'Березовая роща' }
      ],
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070',
      howTo: 'Автомобиль или организованная экскурсия, дорога занимает 40-50 минут',
      price: 'Бесплатно (вход)'
    },
    {
      number: 4,
      title: 'Водопад Девичьи косы',
      subtitle: 'Самый известный водопад',
      description: 'Живописный водопад высотой 30 метров на склоне Эльбруса. Вода стекает тонкими струями, напоминающими девичьи косы.',
      facts: [
        { icon: 'Waves', label: 'Высота', value: '30 метров' },
        { icon: 'Clock', label: 'Время в пути', value: '1-2 часа' },
        { icon: 'Footprints', label: 'Сложность', value: 'Легкая' },
        { icon: 'Users', label: 'Подходит', value: 'Для всех' }
      ],
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=2070',
      howTo: 'Пешая прогулка от поляны Азау, хорошая тропа',
      price: 'Бесплатно'
    },
    {
      number: 5,
      title: 'Поляна Азау',
      subtitle: 'Сердце курорта',
      description: 'Главная курортная зона на высоте 2300 метров. Здесь расположены отели, рестораны, прокат оборудования и нижние станции канатных дорог.',
      facts: [
        { icon: 'Mountain', label: 'Высота', value: '2300 м' },
        { icon: 'Hotel', label: 'Отели', value: '20+' },
        { icon: 'Cable', label: 'Канатки', value: '3 подъемника' },
        { icon: 'Store', label: 'Инфраструктура', value: 'Развита' }
      ],
      image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=2076',
      howTo: 'Автомобиль от Терскола, 7 км по асфальтированной дороге',
      price: 'Различные отели и услуги'
    }
  ];

  return (
    <div className="pt-20">
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="text-6xl mb-6">🏔️</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            ТОП-5 мест Эльбруса
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Главные достопримечательности, которые обязательно нужно посетить
          </p>
        </div>
      </section>

      <div className="bg-gradient-to-b from-white to-muted/30">
        {places.map((place, idx) => (
          <section 
            key={idx} 
            className={`py-20 ${idx % 2 === 1 ? 'bg-muted/30' : ''}`}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center text-4xl font-bold shrink-0">
                    {place.number}
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-foreground mb-2">
                      {place.title}
                    </h2>
                    <p className="text-xl text-muted-foreground">{place.subtitle}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-6">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={place.image}
                        alt={place.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <p className="text-lg text-foreground leading-relaxed">
                      {place.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      {place.facts.map((fact, fidx) => (
                        <Card key={fidx} className="border-2">
                          <CardContent className="p-4">
                            <Icon name={fact.icon} className="w-8 h-8 text-primary mb-2" />
                            <div className="text-sm text-muted-foreground mb-1">{fact.label}</div>
                            <div className="font-bold text-foreground">{fact.value}</div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <Card className="bg-primary/5 border-2 border-primary">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <Icon name="Route" className="w-6 h-6 text-primary shrink-0 mt-1" />
                          <div>
                            <h4 className="font-bold text-foreground mb-2">Как добраться</h4>
                            <p className="text-muted-foreground mb-3">{place.howTo}</p>
                            <div className="font-bold text-accent">{place.price}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                      <Icon name="Info" className="w-5 h-5 mr-2" />
                      Узнать подробности
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <Icon name="Compass" className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">
            Готовы исследовать Эльбрус?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Закажите экскурсию с гидом или трансфер к любой из достопримечательностей
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            <Icon name="Phone" className="w-5 h-5 mr-2" />
            Связаться с нами
          </Button>
        </div>
      </section>
    </div>
  );
};

export default TopPlacesPage;
