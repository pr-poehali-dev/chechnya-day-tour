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
  price: string;
  image: string;
}

const JeepToursPage = () => {
  const [activeFilter, setActiveFilter] = useState<Category>('all');
  const [selectedRoute, setSelectedRoute] = useState<string>('');

  const routes: Route[] = [
    {
      id: 'chegem',
      title: 'Чегемское ущелье',
      description: 'Посещение Чегемских водопадов, Сузгинской теснины, обзорных площадок с видом на ущелье.',
      duration: '4 часа',
      distance: '80 км',
      group: '1-6 человек',
      difficulty: 'easy',
      category: 'short',
      highlights: ['Водопады', 'Фотостопы', 'Хвойный лес'],
      price: '6 000',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070'
    },
    {
      id: 'blue-lakes',
      title: 'Голубые озера + Черекское ущелье',
      description: 'Экскурсия к знаменитым Голубым озерам и по самому глубокому каньону России — Черекскому ущелью.',
      duration: '6 часов',
      distance: '120 км',
      group: '1-6 человек',
      difficulty: 'medium',
      category: 'medium',
      highlights: ['Карстовые озера', 'Каньон', 'Панорамные виды'],
      price: '9 000',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070'
    },
    {
      id: 'djily-su',
      title: 'Джилы-Су и водопады',
      description: 'Экстремальный маршрут к целебным источникам Джилы-Су, водопадам и минеральным источникам.',
      duration: '8 часов',
      distance: '150 км',
      group: '1-4 человека',
      difficulty: 'hard',
      category: 'long',
      highlights: ['Термальные источники', 'Вулканические ландшафты', 'Экстрим-вождение'],
      price: '12 000',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070'
    },
    {
      id: 'elbrus-foothills',
      title: 'Подножие Эльбруса',
      description: 'Поездка к подножию западной вершины Эльбруса через альпийские луга и ледники.',
      duration: '5 часов',
      distance: '60 км',
      group: '1-6 человек',
      difficulty: 'medium',
      category: 'medium',
      highlights: ['Ледники', 'Альпийские луга', 'Вид на вершины'],
      price: '8 500',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070'
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
                Джип-туры из Терскола
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Экскурсии на внедорожниках по самым живописным местам Приэльбрусья
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-white">
                <div className="flex items-center gap-2">
                  <Icon name="Route" className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="text-sm sm:text-base">8 маршрутов</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="text-sm sm:text-base">4-8 часов</span>
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Что такое джип-тур на Эльбрусе?</h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                Джип-туры — это комфортный способ увидеть самые красивые и труднодоступные места Приэльбрусья. 
                Наши внедорожники проходят там, куда не доедет обычный автомобиль. Вы увидите горные водопады, 
                ущелья, панорамные виды и почувствуете настоящий адреналин.
              </p>
              
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
                    <Icon name="CheckCircle2" className="w-5 h-5 text-primary" />
                    Что включено:
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Внедорожник с опытным водителем',
                      'Трансфер от отеля и обратно',
                      'Остановки для фото в самых красивых местах',
                      'Рассказ гида о местных достопримечательностях',
                      'Минеральная вода в дорогу'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon name="Check" className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">Маршруты джип-туров</h2>
              
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
                {[
                  { id: 'all' as Category, label: 'Все маршруты' },
                  { id: 'short' as Category, label: 'Короткие (2-4 ч)' },
                  { id: 'medium' as Category, label: 'Средние (4-6 ч)' },
                  { id: 'long' as Category, label: 'Длительные (6-8 ч)' }
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
                      
                      <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 text-xs sm:text-sm text-muted-foreground">
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
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {route.highlights.map((highlight, idx) => (
                          <span key={idx} className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
                            {highlight}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div>
                          <div className="text-xs text-muted-foreground">от</div>
                          <div className="text-xl sm:text-2xl font-bold text-primary">{route.price} ₽</div>
                          <div className="text-xs text-muted-foreground">за тур</div>
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
            <div className="max-w-3xl mx-auto">
              <Card className="border-2">
                <CardContent className="p-6 sm:p-8 md:p-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
                    Бронирование джип-тура
                  </h2>
                  
                  <form className="space-y-4 sm:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="route">Маршрут *</Label>
                        <select id="route" className="w-full h-10 px-3 border rounded-md bg-background" required>
                          <option value="">Выберите маршрут</option>
                          {routes.map(route => (
                            <option key={route.id} value={route.id}>
                              {route.title} ({route.duration})
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="date">Дата *</Label>
                        <Input id="date" type="date" required />
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="time">Время</Label>
                        <select id="time" className="w-full h-10 px-3 border rounded-md bg-background">
                          <option>09:00</option>
                          <option>10:00</option>
                          <option>11:00</option>
                          <option>12:00</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="people">Количество человек *</Label>
                        <select id="people" className="w-full h-10 px-3 border rounded-md bg-background" required>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                        </select>
                      </div>
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
                      <Label htmlFor="notes">Дополнительные пожелания</Label>
                      <Textarea id="notes" rows={3} placeholder="Укажите особые пожелания или вопросы..." />
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
