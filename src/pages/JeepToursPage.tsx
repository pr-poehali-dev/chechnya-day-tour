import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import SEO from '@/components/SEO';

type Difficulty = 'easy' | 'medium' | 'hard';
type Category = 'short' | 'medium' | 'long' | 'all';

interface Route {
  id: string;
  title: string;
  description: string;
  duration: string;
  distance: string;
  group: string;
  difficulty: Difficulty;
  category: Category;
  highlights: string[];
  stops: string[];
  bestSeason: string;
  price: string;
  image: string;
}

interface Vehicle {
  name: string;
  capacity: string;
  features: string[];
  terrain: string;
}

const JeepToursPage = () => {
  const [activeFilter, setActiveFilter] = useState<Category>('all');
  const [selectedRoute, setSelectedRoute] = useState<string>('');

  const routes: Route[] = [
    {
      id: 'chegem',
      title: 'Чегемское ущелье и водопады',
      description: 'Живописный маршрут вдоль Чегемского ущелья с посещением знаменитых водопадов, замерзающих зимой. Теснина Сузгин — одно из самых узких мест в Приэльбрусье.',
      duration: '4-5 часов',
      distance: '80 км',
      group: '1-6 человек',
      difficulty: 'easy',
      category: 'short',
      highlights: ['Чегемские водопады (высота до 60м)', 'Теснина Сузгин (ширина 15м)', 'Хвойные леса', 'Горная река Чегем'],
      stops: ['Водопады Девичьи Косы', 'Смотровая площадка', 'Село Эль-Тюбю', 'Чегемская теснина'],
      bestSeason: 'Круглый год (зимой водопады замерзают)',
      price: '6 000',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070'
    },
    {
      id: 'blue-lakes',
      title: 'Голубые озера и Черекское ущелье',
      description: 'Уникальный карстовый комплекс Голубых озер — одно из самых глубоких озер в мире. Черекское ущелье с его отвесными скалами высотой 500 метров.',
      duration: '6-7 часов',
      distance: '120 км',
      group: '1-6 человек',
      difficulty: 'medium',
      category: 'medium',
      highlights: ['Нижнее Голубое озеро (глубина 368м)', 'Черекское ущелье - самый глубокий каньон России', 'Балкарские села', 'Термальный источник'],
      stops: ['Нижнее Голубое озеро', 'Черекская теснина', 'Аушигер (термальный источник)', 'Село Бабугент'],
      bestSeason: 'Апрель - ноябрь',
      price: '9 000',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070'
    },
    {
      id: 'djily-su',
      title: 'Джилы-Су: целебные источники',
      description: 'Экстремальный маршрут к легендарным источникам Джилы-Су с видом на северные склоны Эльбруса. Грунтовые дороги, броды рек, высокогорные плато.',
      duration: '8-10 часов',
      distance: '150 км',
      group: '1-4 человека',
      difficulty: 'hard',
      category: 'long',
      highlights: ['Термальные источники Джилы-Су', 'Водопад Султан (40м)', 'Каменные грибы', 'Северный приют Эльбруса'],
      stops: ['Долина Нарзанов', 'Водопад Каракая-Су', 'Поляна Эммануэля', 'Источники Джилы-Су'],
      bestSeason: 'Июнь - сентябрь (зависит от погоды)',
      price: '12 000',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070'
    },
    {
      id: 'elbrus-foothills',
      title: 'К подножию Эльбруса',
      description: 'Захватывающая поездка по альпийским лугам к ледникам Эльбруса. Высота до 3000 метров. Панорамные виды на обе вершины.',
      duration: '5-6 часов',
      distance: '60 км',
      group: '1-6 человек',
      difficulty: 'medium',
      category: 'medium',
      highlights: ['Поляна Азау', 'Вид на ледники', 'Альпийские луга', 'Обсерватория'],
      stops: ['Поляна Чегет', 'Поляна Азау', 'Ледник Большой Азау', 'Терскольский водопад'],
      bestSeason: 'Май - октябрь',
      price: '8 500',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070'
    },
    {
      id: 'baksan-valley',
      title: 'Баксанское ущелье до Тызыла',
      description: 'Полный маршрут по Баксанскому ущелью до села Тызыл. Посещение памятных мест, обсерватории, панорамных точек.',
      duration: '5 часов',
      distance: '90 км',
      group: '1-6 человек',
      difficulty: 'easy',
      category: 'medium',
      highlights: ['Астрофизическая обсерватория', 'Панорама 5 вершин', 'Памятники ВОВ', 'Минеральные источники'],
      stops: ['Обсерватория', 'Поляна Нарзанов', 'Село Верхний Баксан', 'Тызыл'],
      bestSeason: 'Круглый год',
      price: '7 500',
      image: 'https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b?q=80&w=2069'
    },
    {
      id: 'adyl-su',
      title: 'Адыл-Су: альпинистская Мекка',
      description: 'Маршрут в долину Адыл-Су — колыбель советского альпинизма. Виды на 4-тысячники, альплагеря, горные озера.',
      duration: '6 часов',
      distance: '100 км',
      group: '1-6 человек',
      difficulty: 'medium',
      category: 'medium',
      highlights: ['Долина Адыл-Су', 'Вид на пик Джантуган', 'Альпинистские лагеря', 'Горные озера'],
      stops: ['Поселок Эльбрус', 'Вход в ущелье Адыл-Су', 'Альплагерь Джайлык', 'Озеро Башкара'],
      bestSeason: 'Май - октябрь',
      price: '9 500',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070'
    }
  ];

  const vehicles: Vehicle[] = [
    {
      name: 'УАЗ Патриот',
      capacity: '5-6 человек',
      features: ['Полный привод', 'Усиленная подвеска', 'Просторный салон', 'Панорамные окна'],
      terrain: 'Грунтовые дороги, луга'
    },
    {
      name: 'Mitsubishi L200',
      capacity: '4-5 человек',
      features: ['4x4', 'Комфортный салон', 'Кондиционер', 'Аудиосистема'],
      terrain: 'Средний off-road'
    },
    {
      name: 'Toyota Land Cruiser',
      capacity: '5-7 человек',
      features: ['Premium класс', 'Климат-контроль', 'Кожаный салон', 'Максимальная проходимость'],
      terrain: 'Экстремальное бездорожье'
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
    }
  };

  const getDifficultyText = (difficulty: Difficulty): string => {
    switch (difficulty) {
      case 'easy': return 'Легкий';
      case 'medium': return 'Средний';
      case 'hard': return 'Сложный';
    }
  };

  return (
    <>
      <SEO
        title="Джип-туры из Терскола на Эльбрусе 2024: маршруты, цены, бронирование"
        description="Забронируйте джип-тур из Терскола по самым живописным местам Приэльбрусья. 8 маршрутов разной сложности. Цены от 6000 руб. Онлайн-бронирование."
        keywords="джип-туры из Терскола, джип-туры Эльбрус, внедорожные экскурсии Эльбрус, маршруты джип-туров Терскол, бронирование джип-тура"
        url="https://elbrus-resort.ru/activities/jeep-tours"
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
              <div className="text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-6">🚙</div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Джип-туры по Приэльбрусью
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Экскурсии на внедорожниках по самым живописным и труднодоступным местам Кавказа
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-white">
                <div className="flex items-center gap-2">
                  <Icon name="Route" className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="text-sm sm:text-base">10+ маршрутов</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="text-sm sm:text-base">4-10 часов</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Wallet" className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="text-sm sm:text-base">от 6 000 ₽</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Почему джип-туры?</h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                Джип-туры — это уникальная возможность увидеть те места Приэльбрусья, куда не доберется 
                обычный автомобиль. Наши внедорожники преодолевают горные серпантины, броды рек, 
                каменистые тропы и высокогорные плато, открывая вам доступ к самым живописным уголкам Кавказа.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="border-2 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <Icon name="ShieldCheck" className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Безопасность</h3>
                    <p className="text-sm text-muted-foreground">Опытные водители со стажем 10+ лет в горах</p>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <Icon name="Camera" className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Фотостопы</h3>
                    <p className="text-sm text-muted-foreground">Остановки в самых красивых местах для фото</p>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <Icon name="BookOpen" className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Экскурсия</h3>
                    <p className="text-sm text-muted-foreground">Рассказ о истории, культуре и природе региона</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
                    <Icon name="CheckCircle2" className="w-5 h-5 text-primary" />
                    Что включено в тур:
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {[
                      'Внедорожник 4x4 с опытным водителем-гидом',
                      'Трансфер от вашего отеля и обратно',
                      'Остановки для фото в живописных местах',
                      'Подробный рассказ о достопримечательностях',
                      'Минеральная вода и снеки в дороге',
                      'Страховка пассажиров'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-6xl mx-auto mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
                Наш автопарк
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {vehicles.map((vehicle, idx) => (
                  <Card key={idx} className="border-2 hover:border-primary transition-all">
                    <CardContent className="p-6">
                      <div className="text-4xl mb-4">🚙</div>
                      <h3 className="text-xl font-bold mb-2">{vehicle.name}</h3>
                      <div className="text-sm text-muted-foreground mb-4">{vehicle.capacity}</div>
                      
                      <div className="mb-4">
                        <div className="text-sm font-semibold mb-2">Особенности:</div>
                        <ul className="space-y-1">
                          {vehicle.features.map((feature, i) => (
                            <li key={i} className="text-xs flex items-center gap-2">
                              <Icon name="Check" className="w-3 h-3 text-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="p-2 bg-muted/50 rounded text-xs text-center">
                        <strong>Подходит для:</strong> {vehicle.terrain}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
                Маршруты джип-туров
              </h2>
              
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
                {[
                  { id: 'all' as Category, label: 'Все маршруты' },
                  { id: 'short' as Category, label: 'Короткие (4-5 ч)' },
                  { id: 'medium' as Category, label: 'Средние (5-7 ч)' },
                  { id: 'long' as Category, label: 'Длительные (8-10 ч)' }
                ].map((filter) => (
                  <Button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
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
                          <Icon name="Users" className="w-4 h-4" />
                          <span>{route.group}</span>
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

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-2">Остановки маршрута:</h4>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {route.stops.map((stop, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <Icon name="MapPin" className="w-3 h-3 text-primary" />
                              {stop}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                        <div className="text-xs font-semibold mb-1">Сезон: {route.bestSeason}</div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div>
                          <div className="text-xs text-muted-foreground">от</div>
                          <div className="text-xl sm:text-2xl font-bold text-primary">{route.price} ₽</div>
                          <div className="text-xs text-muted-foreground">за машину</div>
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

        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-muted/30 to-white dark:from-muted/10 dark:to-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
              Полезная информация
            </h2>
            
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-2">
                <CardContent className="p-6">
                  <Icon name="Users" className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-bold mb-3">Группа</h3>
                  <p className="text-sm text-muted-foreground">
                    Индивидуальные и групповые туры. Цена за машину, не за человека.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2">
                <CardContent className="p-6">
                  <Icon name="Clock" className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-bold mb-3">Время начала</h3>
                  <p className="text-sm text-muted-foreground">
                    Туры начинаются в 9:00, 11:00 или 14:00 по вашему выбору.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2">
                <CardContent className="p-6">
                  <Icon name="Shirt" className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-bold mb-3">Что взять</h3>
                  <p className="text-sm text-muted-foreground">
                    Удобная одежда, закрытая обувь, солнцезащитные очки, камера.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2">
                <CardContent className="p-6">
                  <Icon name="Ban" className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-bold mb-3">Отмена</h3>
                  <p className="text-sm text-muted-foreground">
                    Бесплатная отмена за 24 часа. При плохой погоде — полный возврат.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="border-2">
                <CardContent className="p-6 sm:p-8 md:p-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
                    Забронировать джип-тур
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
                            {route.title} ({route.duration}) — {route.price} ₽
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
                        <Label htmlFor="time">Время начала *</Label>
                        <select id="time" className="w-full h-10 px-3 border rounded-md bg-background" required>
                          <option>09:00</option>
                          <option>11:00</option>
                          <option>14:00</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="people">Количество человек *</Label>
                      <select id="people" className="w-full h-10 px-3 border rounded-md bg-background" required>
                        <option>1 человек</option>
                        <option>2 человека</option>
                        <option>3 человека</option>
                        <option>4 человека</option>
                        <option>5 человек</option>
                        <option>6 человек</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="vehicle">Предпочтения по автомобилю</Label>
                      <select id="vehicle" className="w-full h-10 px-3 border rounded-md bg-background">
                        <option>Любой подходящий</option>
                        <option>УАЗ Патриот (бюджет)</option>
                        <option>Mitsubishi L200 (комфорт)</option>
                        <option>Toyota Land Cruiser (премиум)</option>
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
                      <Label htmlFor="hotel">Название отеля (для трансфера)</Label>
                      <Input id="hotel" type="text" placeholder="Гостиница Чегет" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="notes">Дополнительные пожелания</Label>
                      <Textarea id="notes" rows={3} placeholder="Особые запросы, вопросы о маршруте..." />
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

export default JeepToursPage;
