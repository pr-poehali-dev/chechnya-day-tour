import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import SEO from '@/components/SEO';

interface QuadBike {
  id: string;
  model: string;
  engine: string;
  power: string;
  capacity: string;
  transmission: string;
  price: {
    hour: number;
    day: number;
    week: number;
  };
  image: string;
  features: string[];
  suitable: string;
}

interface Route {
  id: string;
  title: string;
  description: string;
  duration: string;
  distance: string;
  difficulty: 'easy' | 'medium' | 'hard';
  price: string;
  image: string;
}

const QuadBikesPage = () => {
  const [selectedBike, setSelectedBike] = useState('');
  const [rentalPeriod, setRentalPeriod] = useState<'hour' | 'day' | 'week'>('hour');

  const quadBikes: QuadBike[] = [
    {
      id: 'cfmoto-550',
      model: 'CFMOTO X5 550',
      engine: '550 куб.см',
      power: '38 л.с.',
      capacity: '2 места',
      transmission: 'Автомат',
      price: { hour: 2000, day: 12000, week: 70000 },
      image: 'https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2070',
      features: ['Полный привод 4x4', 'Лебедка', 'Защита днища', 'Багажник'],
      suitable: 'Для новичков и опытных'
    },
    {
      id: 'yamaha-700',
      model: 'Yamaha Grizzly 700',
      engine: '700 куб.см',
      power: '48 л.с.',
      capacity: '1 место',
      transmission: 'Автомат',
      price: { hour: 2500, day: 15000, week: 85000 },
      image: 'https://images.unsplash.com/photo-1592500595497-d1f5f1c6d8cc?q=80&w=2070',
      features: ['Мощный двигатель', 'EPS рулевое управление', 'Дифференциал', 'LED фары'],
      suitable: 'Для опытных водителей'
    },
    {
      id: 'polaris-570',
      model: 'Polaris Sportsman 570',
      engine: '570 куб.см',
      power: '44 л.с.',
      capacity: '1 место',
      transmission: 'Автомат',
      price: { hour: 2200, day: 13000, week: 75000 },
      image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069',
      features: ['Подвеска IRS', 'Блокировка AWD', 'Буксировка 635 кг', 'Цифровой дисплей'],
      suitable: 'Универсальный'
    }
  ];

  const routes: Route[] = [
    {
      id: 'beginner-trail',
      title: 'Трасса для новичков',
      description: 'Пологие грунтовые дороги вдоль реки Баксан с минимальными препятствиями.',
      duration: '1-2 часа',
      distance: '15 км',
      difficulty: 'easy',
      price: 'Входит в стоимость аренды',
      image: 'https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2070'
    },
    {
      id: 'mountain-route',
      title: 'Горная трасса',
      description: 'Маршрут через альпийские луга с подъемами и спусками. Живописные виды на Эльбрус.',
      duration: '2-3 часа',
      distance: '25 км',
      difficulty: 'medium',
      price: 'Входит в стоимость аренды',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070'
    },
    {
      id: 'extreme-trail',
      title: 'Экстремальный маршрут',
      description: 'Сложная горная трасса с бродами, каменистыми участками и крутыми склонами.',
      duration: '3-4 часа',
      distance: '35 км',
      difficulty: 'hard',
      price: 'Входит в стоимость аренды',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070'
    }
  ];

  const getDifficultyColor = (difficulty: 'easy' | 'medium' | 'hard'): string => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'medium': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300';
      case 'hard': return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
    }
  };

  const getDifficultyText = (difficulty: 'easy' | 'medium' | 'hard'): string => {
    switch (difficulty) {
      case 'easy': return 'Легкий';
      case 'medium': return 'Средний';
      case 'hard': return 'Сложный';
    }
  };

  const calculatePrice = (bikeId: string): number => {
    const bike = quadBikes.find(b => b.id === bikeId);
    if (!bike) return 0;
    return bike.price[rentalPeriod];
  };

  return (
    <>
      <SEO
        title="Прокат квадроциклов на Эльбрусе 2024: аренда, цены, маршруты"
        description="Аренда квадроциклов на курорте Эльбрус. Современные модели, маршруты для новичков и экспертов. Цены от 2000 руб./час. Бронирование онлайн."
        keywords="прокат квадроциклов Эльбрус, аренда квадроциклов Терскол, квадроциклы Приэльбрусье, маршруты на квадроциклах"
        url="https://elbrus-resort.ru/activities/quad-bikes"
      />

      <div className="pt-16 md:pt-20">
        <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2070)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-6">🏍️</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Прокат квадроциклов на Эльбрусе
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Аренда современных квадроциклов для экстремальных приключений в горах
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-white">
              <div className="flex items-center gap-2">
                <Icon name="Bike" className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">5 моделей</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Route" className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">3 маршрута</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Wallet" className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">от 2 000 ₽/час</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Почему квадроциклы?</h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                Квадроциклы — это лучший способ исследовать горные тропы Приэльбрусья. 
                Вы получите незабываемые эмоции и адреналин, управляя мощным внедорожником 
                по живописным маршрутам с видом на Эльбрус.
              </p>
              
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
                    <Icon name="ShieldCheck" className="w-5 h-5 text-primary" />
                    Требования к водителям:
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Возраст от 18 лет (с правами категории B)',
                      'Возраст от 16 лет (под присмотром инструктора)',
                      'Инструктаж по технике безопасности (15 минут)',
                      'Пробная поездка по учебной трассе',
                      'Защитное снаряжение (шлем, перчатки) обязательно'
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

            <div className="max-w-6xl mx-auto mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
                Каталог квадроциклов
              </h2>

              <div className="mb-8 flex justify-center gap-3">
                <Button
                  onClick={() => setRentalPeriod('hour')}
                  variant={rentalPeriod === 'hour' ? 'default' : 'outline'}
                  size="sm"
                >
                  Час
                </Button>
                <Button
                  onClick={() => setRentalPeriod('day')}
                  variant={rentalPeriod === 'day' ? 'default' : 'outline'}
                  size="sm"
                >
                  День
                </Button>
                <Button
                  onClick={() => setRentalPeriod('week')}
                  variant={rentalPeriod === 'week' ? 'default' : 'outline'}
                  size="sm"
                >
                  Неделя
                </Button>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {quadBikes.map((bike) => (
                  <Card key={bike.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={bike.image}
                        alt={bike.model}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    
                    <CardContent className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold mb-3">{bike.model}</h3>
                      
                      <div className="grid grid-cols-2 gap-3 mb-4 text-xs sm:text-sm">
                        <div className="flex items-center gap-1">
                          <Icon name="Gauge" className="w-4 h-4 text-primary" />
                          <span>{bike.engine}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Zap" className="w-4 h-4 text-primary" />
                          <span>{bike.power}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Users" className="w-4 h-4 text-primary" />
                          <span>{bike.capacity}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Settings" className="w-4 h-4 text-primary" />
                          <span>{bike.transmission}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-2">Особенности:</h4>
                        <div className="flex flex-wrap gap-2">
                          {bike.features.map((feature, idx) => (
                            <span key={idx} className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                        <div className="text-xs text-muted-foreground mb-1">Подходит для:</div>
                        <div className="text-sm font-medium">{bike.suitable}</div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div>
                          <div className="text-xs text-muted-foreground">от</div>
                          <div className="text-xl sm:text-2xl font-bold text-primary">
                            {bike.price[rentalPeriod].toLocaleString()} ₽
                          </div>
                          <div className="text-xs text-muted-foreground">
                            / {rentalPeriod === 'hour' ? 'час' : rentalPeriod === 'day' ? 'день' : 'неделю'}
                          </div>
                        </div>
                        <Button 
                          onClick={() => setSelectedBike(bike.id)}
                          className="bg-primary hover:bg-primary/90"
                        >
                          Забронировать
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
                Маршруты для квадроциклов
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {routes.map((route) => (
                  <Card key={route.id} className="overflow-hidden hover:shadow-xl transition-all border-2 hover:border-primary">
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
                      
                      <div className="flex flex-wrap gap-3 mb-4 text-xs sm:text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Icon name="Clock" className="w-4 h-4" />
                          <span>{route.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Route" className="w-4 h-4" />
                          <span>{route.distance}</span>
                        </div>
                      </div>
                      
                      <p className="text-sm sm:text-base text-muted-foreground mb-4">{route.description}</p>
                      
                      <div className="text-sm text-primary font-medium">{route.price}</div>
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
                    Забронировать квадроцикл
                  </h2>
                  
                  <form className="space-y-4 sm:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="quad-model">Модель квадроцикла *</Label>
                        <select 
                          id="quad-model" 
                          value={selectedBike}
                          onChange={(e) => setSelectedBike(e.target.value)}
                          className="w-full h-10 px-3 border rounded-md bg-background" 
                          required
                        >
                          <option value="">Выберите модель</option>
                          {quadBikes.map(bike => (
                            <option key={bike.id} value={bike.id}>
                              {bike.model} - {bike.price[rentalPeriod].toLocaleString()} ₽
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="rental-period">Период аренды *</Label>
                        <select 
                          id="rental-period"
                          value={rentalPeriod}
                          onChange={(e) => setRentalPeriod(e.target.value as 'hour' | 'day' | 'week')}
                          className="w-full h-10 px-3 border rounded-md bg-background" 
                          required
                        >
                          <option value="hour">Час (от 2000 ₽)</option>
                          <option value="day">День (от 12000 ₽)</option>
                          <option value="week">Неделя (от 70000 ₽)</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="start-date">Дата начала *</Label>
                        <Input id="start-date" type="date" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="start-time">Время *</Label>
                        <select id="start-time" className="w-full h-10 px-3 border rounded-md bg-background">
                          <option>09:00</option>
                          <option>10:00</option>
                          <option>11:00</option>
                          <option>12:00</option>
                          <option>13:00</option>
                          <option>14:00</option>
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
                      <Label htmlFor="experience">Опыт вождения квадроцикла</Label>
                      <select id="experience" className="w-full h-10 px-3 border rounded-md bg-background">
                        <option>Первый раз</option>
                        <option>Есть базовый опыт</option>
                        <option>Опытный водитель</option>
                      </select>
                    </div>

                    {selectedBike && (
                      <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary">
                        <CardContent className="p-4">
                          <div className="text-center">
                            <div className="text-sm text-muted-foreground mb-1">Примерная стоимость:</div>
                            <div className="text-3xl font-bold text-primary">
                              {calculatePrice(selectedBike).toLocaleString()} ₽
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                    
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

export default QuadBikesPage;
