import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import SEO from '@/components/SEO';

interface Route {
  id: string;
  title: string;
  description: string;
  duration: string;
  distance: string;
  level: string;
  price: string;
  image: string;
}

const HorseRidingPage = () => {
  const [selectedRoute, setSelectedRoute] = useState('');

  const routes: Route[] = [
    {
      id: 'beginner',
      title: 'Прогулка для начинающих',
      description: 'Спокойная прогулка по живописным тропам вокруг Терскола. Идеально для первого знакомства с лошадьми.',
      duration: '1 час',
      distance: '3 км',
      level: 'Для начинающих',
      price: '2 000',
      image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2071'
    },
    {
      id: 'meadow',
      title: 'По альпийским лугам',
      description: 'Маршрут через альпийские луга с видом на Эльбрус. Остановки для фото на самых красивых площадках.',
      duration: '2 часа',
      distance: '7 км',
      level: 'Базовая подготовка',
      price: '3 500',
      image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=2070'
    },
    {
      id: 'waterfall',
      title: 'К водопадам Девичьи Косы',
      description: 'Длительная прогулка к живописным водопадам. Включает инструктаж и сопровождение опытного гида.',
      duration: '3 часа',
      distance: '12 км',
      level: 'Средний уровень',
      price: '5 000',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070'
    },
    {
      id: 'full-day',
      title: 'Полный день в горах',
      description: 'Маршрут на целый день с посещением самых живописных мест Приэльбрусья. Включает обед у костра.',
      duration: '6 часов',
      distance: '25 км',
      level: 'Опытные всадники',
      price: '8 500',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070'
    }
  ];

  const stables = [
    {
      name: 'Конный клуб "Эльбрус"',
      location: 'Терскол, ул. Главная, 15',
      horses: 12,
      rating: 4.8,
      features: ['Крытый манеж', 'Детские пони', 'Прокат снаряжения']
    },
    {
      name: 'Конюшня "Горные тропы"',
      location: 'Поляна Азау',
      horses: 8,
      rating: 4.7,
      features: ['Опытные инструкторы', 'Фототур', 'Групповые выезды']
    }
  ];

  return (
    <>
      <SEO
        title="Конные прогулки на Эльбрусе 2024: маршруты, конюшни Терскола, цены"
        description="Конные прогулки по живописным маршрутам Эльбруса. Прогулки для начинающих и опытных всадников. 5 конюшен в Терсколе. Бронирование онлайн."
        keywords="конные прогулки Эльбрус, конные туры Терскол, верховая езда Эльбрус, конюшни Терскола, прокат лошадей Эльбрус"
        url="https://elbrus-resort.ru/activities/horse-riding"
      />

      <div className="pt-16 md:pt-20">
        <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2071)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-6">🐎</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Конные прогулки на Эльбрусе
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Исследуйте горные тропы верхом на лошади
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Конные прогулки в горах</h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                Конные прогулки — это уникальная возможность исследовать живописные горные тропы Приэльбрусья 
                в компании верного четвероногого друга. Наши опытные инструкторы помогут вам освоить азы 
                верховой езды или усовершенствовать навыки.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">Маршруты</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {routes.map((route) => (
                  <Card key={route.id} className="overflow-hidden hover:shadow-2xl transition-all border-2 hover:border-primary">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={route.image}
                        alt={route.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
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
                        <div className="flex items-center gap-1">
                          <Icon name="Award" className="w-4 h-4" />
                          <span>{route.level}</span>
                        </div>
                      </div>
                      
                      <p className="text-sm sm:text-base text-muted-foreground mb-4">{route.description}</p>
                      
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div>
                          <div className="text-xs text-muted-foreground">от</div>
                          <div className="text-xl sm:text-2xl font-bold text-primary">{route.price} ₽</div>
                        </div>
                        <Button 
                          onClick={() => setSelectedRoute(route.id)}
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
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-muted/30 dark:from-background dark:to-muted/10">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">Конюшни в Терсколе</h2>
            
            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
              {stables.map((stable, idx) => (
                <Card key={idx} className="border-2">
                  <CardContent className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{stable.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Icon name="MapPin" className="w-4 h-4" />
                      <span>{stable.location}</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Icon name="Horse" className="w-5 h-5 text-primary" />
                        <span className="text-sm">{stable.horses} лошадей</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Star" className="w-4 h-4 text-accent fill-accent" />
                        <span className="font-semibold">{stable.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {stable.features.map((feature, fidx) => (
                        <span key={fidx} className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs">
                          {feature}
                        </span>
                      ))}
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
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                    Забронировать прогулку
                  </h2>
                  
                  <form className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="route">Маршрут *</Label>
                        <select id="route" className="w-full h-10 px-3 border rounded-md bg-background" required>
                          <option value="">Выберите маршрут</option>
                          {routes.map(route => (
                            <option key={route.id} value={route.id}>{route.title}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="date">Дата *</Label>
                        <Input id="date" type="date" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя *</Label>
                      <Input id="name" type="text" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input id="phone" type="tel" required />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                      <Icon name="Send" className="w-5 h-5 mr-2" />
                      Отправить заявку
                    </Button>
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

export default HorseRidingPage;
