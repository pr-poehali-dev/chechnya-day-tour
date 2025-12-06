import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import SEO from '@/components/SEO';
import TrekkingEquipmentSection from '@/components/trekking/TrekkingEquipmentSection';
import TrekkingRouteCard from '@/components/trekking/TrekkingRouteCard';
import TrekkingGuidesSection from '@/components/trekking/TrekkingGuidesSection';
import TrekkingBookingForm from '@/components/trekking/TrekkingBookingForm';

type Difficulty = 'easy' | 'medium' | 'hard' | 'expert';
type Duration = 'short' | 'medium' | 'long' | 'multiday';

interface TrekkingRoute {
  id: string;
  title: string;
  description: string;
  duration: string;
  distance: string;
  elevation: string;
  difficulty: Difficulty;
  category: Duration;
  highlights: string[];
  equipment: string[];
  bestSeason: string;
  guideRequired: boolean;
  price: string;
  image: string;
}

interface Guide {
  name: string;
  experience: string;
  specialization: string;
  rating: number;
  tours: number;
}

const TrekkingPage = () => {
  const [activeFilter, setActiveFilter] = useState<Duration | 'all'>('all');
  const [selectedRoute, setSelectedRoute] = useState('');

  const routes: TrekkingRoute[] = [
    {
      id: 'maiden-braids',
      title: 'К водопаду Девичьи Косы',
      description: 'Легкая прогулка к одному из самых живописных водопадов Приэльбрусья. Маршрут подходит для семей с детьми.',
      duration: '2-3 часа',
      distance: '4 км',
      elevation: '+200 м',
      difficulty: 'easy',
      category: 'short',
      highlights: ['Водопад высотой 30 м', 'Березовый лес', 'Альпийские луга'],
      equipment: ['Удобная обувь', 'Вода', 'Легкая куртка'],
      bestSeason: 'Май - октябрь',
      guideRequired: false,
      price: 'Бесплатно',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070'
    },
    {
      id: 'cheget-panorama',
      title: 'Обзорная площадка Чегет',
      description: 'Подъем к обзорной площадке с захватывающим видом на Эльбрус и ущелье Баксан.',
      duration: '3-4 часа',
      distance: '6 км',
      elevation: '+600 м',
      difficulty: 'medium',
      category: 'short',
      highlights: ['Панорама Эльбруса', 'Вид на 7 вершин', 'Горное озеро'],
      equipment: ['Трекинговые ботинки', 'Треккинговые палки', 'Теплая одежда'],
      bestSeason: 'Июнь - сентябрь',
      guideRequired: false,
      price: 'Бесплатно',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070'
    },
    {
      id: 'azau-glade',
      title: 'Поляна Азау - Гара-Баши',
      description: 'Среднего уровня маршрут к станции Гара-Баши (3800 м) с посещением приюта 11 и ледников.',
      duration: '5-6 часов',
      distance: '12 км',
      elevation: '+1200 м',
      difficulty: 'medium',
      category: 'medium',
      highlights: ['Ледники Эльбруса', 'Приют 11', 'Высокогорье'],
      equipment: ['Горные ботинки', 'Палки', 'Солнцезащитные очки', 'Теплая одежда', 'Крем от солнца'],
      bestSeason: 'Июль - август',
      guideRequired: true,
      price: '5 000 ₽ (с гидом)',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070'
    },
    {
      id: 'djily-su-trekking',
      title: 'Треккинг к Джилы-Су',
      description: 'Двухдневный поход к целебным источникам Джилы-Су через альпийские луга и горные перевалы.',
      duration: '2 дня',
      distance: '35 км',
      elevation: '+1500 м',
      difficulty: 'hard',
      category: 'multiday',
      highlights: ['Термальные источники', 'Каменные грибы', 'Водопады Султан и Каракая-Су'],
      equipment: ['Полный треккинговый набор', 'Палатка', 'Спальник', 'Горелка', 'Запас еды'],
      bestSeason: 'Июль - август',
      guideRequired: true,
      price: '12 000 ₽ (с гидом)',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070'
    },
    {
      id: 'elbrus-circle',
      title: 'Кругосветка Эльбруса',
      description: 'Легендарный 5-дневный маршрут вокруг Эльбруса через четыре ущелья и несколько перевалов.',
      duration: '5 дней',
      distance: '85 км',
      elevation: '+3000 м',
      difficulty: 'hard',
      category: 'multiday',
      highlights: ['Обход Эльбруса', '4 горных ущелья', 'Уникальные виды', 'Дикая природа'],
      equipment: ['Полное альпинистское снаряжение', 'Палатка', 'Спальник', 'Горелка', 'GPS-навигатор'],
      bestSeason: 'Июль - август',
      guideRequired: true,
      price: '35 000 ₽ (с гидом)',
      image: 'https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b?q=80&w=2069'
    },
    {
      id: 'summit-elbrus',
      title: 'Восхождение на Эльбрус',
      description: 'Классический 7-дневный маршрут восхождения на западную вершину Эльбруса (5642 м).',
      duration: '7 дней',
      distance: '50 км',
      elevation: '+3000 м',
      difficulty: 'expert',
      category: 'multiday',
      highlights: ['Вершина Европы', 'Ледники', 'Высота 5642 м', 'Сертификат восхождения'],
      equipment: ['Альпинистское снаряжение', 'Кошки', 'Ледоруб', 'Страховка', 'Высотное снаряжение'],
      bestSeason: 'Июль - август',
      guideRequired: true,
      price: '65 000 ₽ (с гидом)',
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=2070'
    }
  ];

  const guides: Guide[] = [
    {
      name: 'Александр Петров',
      experience: '15 лет в горах',
      specialization: 'Восхождения на Эльбрус, высотная акклиматизация',
      rating: 4.9,
      tours: 150
    },
    {
      name: 'Магомед Ахмедов',
      experience: '12 лет',
      specialization: 'Треккинг, многодневные походы',
      rating: 4.8,
      tours: 120
    },
    {
      name: 'Елена Смирнова',
      experience: '8 лет',
      specialization: 'Семейные маршруты, экологический туризм',
      rating: 4.9,
      tours: 95
    }
  ];

  const filteredRoutes = activeFilter === 'all' 
    ? routes 
    : routes.filter(route => route.category === activeFilter);

  return (
    <>
      <SEO
        title="Треккинговые маршруты Эльбруса 2024: пешие походы, карты, GPS-треки"
        description="15 пеших маршрутов по Приэльбрусью от легких прогулок к водопадам до сложных многодневных походов и восхождения на Эльбрус. Подробные карты, GPS-треки, опытные гиды."
        keywords="треккинг Эльбрус, пешие походы Эльбрус, маршруты Приэльбрусье, восхождение на Эльбрус, горные походы"
        url="https://elbrus-resort.ru/activities/trekking"
      />

      <div className="pt-16 md:pt-20">
        <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b?q=80&w=2069)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-6">🥾</div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Треккинговые маршруты Эльбруса
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                От легких прогулок до восхождения на вершину Европы
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-white">
                <div className="flex items-center gap-2">
                  <Icon name="Route" className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="text-sm sm:text-base">15+ маршрутов</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mountain" className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="text-sm sm:text-base">до 5642 м</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Users" className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="text-sm sm:text-base">опытные гиды</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <TrekkingEquipmentSection />

            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
                Популярные маршруты
              </h2>
              
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
                {[
                  { id: 'all', label: 'Все маршруты' },
                  { id: 'short', label: 'Короткие (2-4 ч)' },
                  { id: 'medium', label: 'Средние (4-8 ч)' },
                  { id: 'long', label: 'Длительные (1 день)' },
                  { id: 'multiday', label: 'Многодневные' }
                ].map((filter) => (
                  <Button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id as Duration | 'all')}
                    variant={activeFilter === filter.id ? 'default' : 'outline'}
                    size="sm"
                    className={`transition-all ${activeFilter === filter.id ? 'scale-105' : ''}`}
                  >
                    {filter.label}
                  </Button>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                {filteredRoutes.map((route) => (
                  <TrekkingRouteCard
                    key={route.id}
                    route={route}
                    onSelect={setSelectedRoute}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <TrekkingGuidesSection guides={guides} />

        <TrekkingBookingForm
          routes={routes}
          selectedRoute={selectedRoute}
          onRouteChange={setSelectedRoute}
        />
      </div>
    </>
  );
};

export default TrekkingPage;
