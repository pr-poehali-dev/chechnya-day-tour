import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import SEO from '@/components/SEO';

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

  const getDifficultyColor = (difficulty: Difficulty): string => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'medium': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300';
      case 'hard': return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
      case 'expert': return 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300';
    }
  };

  const getDifficultyText = (difficulty: Difficulty): string => {
    switch (difficulty) {
      case 'easy': return 'Легкий';
      case 'medium': return 'Средний';
      case 'hard': return 'Сложный';
      case 'expert': return 'Экспертный';
    }
  };

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
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Треккинг в Приэльбрусье</h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                Приэльбрусье предлагает маршруты для любого уровня подготовки — от простых прогулок 
                к водопадам до многодневных походов и технических восхождений на Эльбрус. Живописные 
                ущелья, альпийские луга, ледники и панорамные виды ждут вас!
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
                      <Icon name="Backpack" className="w-5 h-5 text-primary" />
                      Базовое снаряжение:
                    </h3>
                    <ul className="space-y-2 text-sm">
                      {[
                        'Треккинговые ботинки с поддержкой голеностопа',
                        'Треккинговые палки (обязательно)',
                        'Рюкзак 30-50 литров',
                        'Мембранная куртка от дождя/ветра',
                        'Теплая флисовая кофта',
                        'Головной убор и солнцезащитные очки',
                        'Вода (минимум 1.5 литра)',
                        'Перекус (энергетические батончики, орехи)'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="Check" className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
                      <Icon name="Info" className="w-5 h-5 text-primary" />
                      Советы для новичков:
                    </h3>
                    <ul className="space-y-2 text-sm">
                      {[
                        'Начинайте с простых маршрутов для акклиматизации',
                        'Не торопитесь — горы требуют своего темпа',
                        'Пейте воду регулярно, даже если не хочется',
                        'Соблюдайте правила безопасности',
                        'Проверьте прогноз погоды перед выходом',
                        'Сообщите кому-то о своем маршруте',
                        'Не сходите с размеченных троп',
                        'Уважайте природу — не оставляйте мусор'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="AlertCircle" className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

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
                  <Card key={route.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={route.image}
                        alt={route.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${getDifficultyColor(route.difficulty)}`}>
                        {getDifficultyText(route.difficulty)}
                      </span>
                      {route.guideRequired && (
                        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                          Требуется гид
                        </span>
                      )}
                    </div>
                    
                    <CardContent className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold mb-3">{route.title}</h3>
                      
                      <div className="grid grid-cols-3 gap-2 mb-4 text-xs sm:text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Icon name="Clock" className="w-4 h-4" />
                          <span>{route.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Route" className="w-4 h-4" />
                          <span>{route.distance}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="TrendingUp" className="w-4 h-4" />
                          <span>{route.elevation}</span>
                        </div>
                      </div>
                      
                      <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                        {route.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-2">Основные точки:</h4>
                        <div className="flex flex-wrap gap-2">
                          {route.highlights.map((highlight, idx) => (
                            <span key={idx} className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                        <div className="text-xs font-semibold mb-2">Сезон: {route.bestSeason}</div>
                        <div className="text-xs text-muted-foreground">
                          Снаряжение: {route.equipment.slice(0, 2).join(', ')}
                          {route.equipment.length > 2 && ` +${route.equipment.length - 2}`}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div>
                          <div className="text-xl sm:text-2xl font-bold text-primary">{route.price}</div>
                        </div>
                        <Button 
                          onClick={() => setSelectedRoute(route.id)}
                          className="bg-primary hover:bg-primary/90"
                        >
                          <Icon name="Calendar" className="w-4 h-4 mr-2" />
                          Забронировать
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-muted/30 dark:from-background dark:to-muted/10">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
              Наши гиды
            </h2>
            
            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.map((guide, idx) => (
                <Card key={idx} className="border-2">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                      <Icon name="User" className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{guide.name}</h3>
                    <div className="text-sm text-muted-foreground mb-3">{guide.experience}</div>
                    <div className="text-sm mb-4">{guide.specialization}</div>
                    <div className="flex items-center justify-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Icon name="Star" className="w-4 h-4 text-accent fill-accent" />
                        <span className="font-semibold">{guide.rating}</span>
                      </div>
                      <div className="text-muted-foreground">
                        {guide.tours} походов
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-muted/30 to-white dark:from-muted/10 dark:to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="border-2">
                <CardContent className="p-6 sm:p-8 md:p-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
                    Забронировать треккинг
                  </h2>
                  
                  <form className="space-y-4 sm:space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="route">Маршрут *</Label>
                      <select 
                        id="route" 
                        value={selectedRoute}
                        onChange={(e) => setSelectedRoute(e.target.value)}
                        className="w-full h-10 px-3 border rounded-md bg-background" 
                        required
                      >
                        <option value="">Выберите маршрут</option>
                        {routes.map(route => (
                          <option key={route.id} value={route.id}>
                            {route.title} ({route.duration})
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Дата *</Label>
                        <Input id="date" type="date" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="people">Количество человек *</Label>
                        <select id="people" className="w-full h-10 px-3 border rounded-md bg-background" required>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5+</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="experience-level">Уровень подготовки</Label>
                      <select id="experience-level" className="w-full h-10 px-3 border rounded-md bg-background">
                        <option>Новичок</option>
                        <option>Есть опыт походов в горах</option>
                        <option>Опытный треккер</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="guide-needed">Нужен гид?</Label>
                      <select id="guide-needed" className="w-full h-10 px-3 border rounded-md bg-background">
                        <option>Да, с гидом</option>
                        <option>Нет, самостоятельно</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя *</Label>
                      <Input id="name" type="text" placeholder="Иван Иванов" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="ivan@example.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="notes">Дополнительная информация</Label>
                      <Textarea id="notes" rows={3} placeholder="Особые пожелания, вопросы о маршруте..." />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                      <Icon name="Send" className="w-5 h-5 mr-2" />
                      Отправить заявку
                    </Button>
                    
                    <p className="text-xs text-center text-muted-foreground">
                      Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TrekkingPage;
