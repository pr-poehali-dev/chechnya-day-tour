import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import SEO from '@/components/SEO';

const TransferPage = () => {
  const [passengers, setPassengers] = useState(2);

  const routes = [
    {
      from: 'Кисловодск',
      to: 'Аэропорт Минеральные Воды',
      distance: '45 км',
      duration: '45 мин',
      prices: {
        economy: 2500,
        comfort: 3500,
        minivan: 5000
      }
    },
    {
      from: 'Кисловодск',
      to: 'Пятигорск',
      distance: '42 км',
      duration: '50 мин',
      prices: {
        economy: 2200,
        comfort: 3000,
        minivan: 4500
      }
    },
    {
      from: 'Кисловодск',
      to: 'Приэльбрусье',
      distance: '180 км',
      duration: '3 ч',
      prices: {
        economy: 6000,
        comfort: 8000,
        minivan: 11000
      }
    }
  ];

  const vehicles = [
    {
      type: 'economy',
      name: 'Эконом',
      icon: '🚗',
      description: 'Sedан (4 места)',
      features: ['Кондиционер', 'Багажник 400л', 'Опытный водитель']
    },
    {
      type: 'comfort',
      name: 'Комфорт',
      icon: '🚙',
      description: 'Кроссовер (4 места)',
      features: ['Климат-контроль', 'Большой багажник', 'Wi-Fi', 'Вода']
    },
    {
      type: 'minivan',
      name: 'Минивэн',
      icon: '🚐',
      description: 'Минивэн (6-8 мест)',
      features: ['Климат-контроль', 'Просторный салон', 'Wi-Fi', 'Вода', 'Детские кресла']
    }
  ];

  return (
    <>
      <SEO
        title="Трансфер из аэропорта Минводы в Кисловодск - цены 2024, онлайн бронирование"
        description="Надёжный трансфер Минеральные Воды - Кисловодск от 2500₽. Встреча с табличкой, комфортные авто, опытные водители. Онлайн-заказ трансфера по КМВ и в Приэльбрусье."
        keywords="трансфер Минводы Кисловодск, такси аэропорт Минеральные Воды, трансфер КМВ, заказать трансфер Кисловодск"
      />
      <div className="pt-16 md:pt-20">
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary to-secondary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 text-9xl animate-pulse-slow">🚗</div>
            <div className="absolute bottom-20 right-10 text-9xl animate-pulse-slow animation-delay-1000">🏔️</div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="text-5xl md:text-6xl mb-6 animate-scale-in">🚕</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 animate-fade-in">
              Трансфер в Кисловодск
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto animate-fade-in">
              Комфортная доставка из аэропорта Минеральные Воды. Встречаем с табличкой, помогаем с багажом
            </p>
          </div>
        </section>

      <section className="py-12 md:py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 shadow-xl">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Заказать трансфер</h2>
                
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <Label htmlFor="from" className="text-sm md:text-base">Откуда</Label>
                      <select 
                        id="from"
                        className="w-full h-10 px-3 border rounded-md mt-1.5 bg-background"
                      >
                        <option>Аэропорт Минеральные Воды</option>
                        <option>Пятигорск</option>
                        <option>Ессентуки</option>
                        <option>Железноводск</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="to" className="text-sm md:text-base">Куда</Label>
                      <select 
                        id="to"
                        className="w-full h-10 px-3 border rounded-md mt-1.5 bg-background"
                      >
                        <option>Кисловодск (центр)</option>
                        <option>Кисловодск (Курортный парк)</option>
                        <option>Приэльбрусье</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <Label htmlFor="datetime" className="text-sm md:text-base">Дата и время</Label>
                      <Input 
                        id="datetime"
                        type="datetime-local" 
                        className="mt-1.5"
                      />
                    </div>

                    <div>
                      <Label htmlFor="passengers" className="text-sm md:text-base">Количество пассажиров</Label>
                      <Input 
                        id="passengers"
                        type="number"
                        min="1"
                        max="8"
                        value={passengers}
                        onChange={(e) => setPassengers(Number(e.target.value))}
                        className="mt-1.5"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-3 md:gap-4 pt-4">
                    {vehicles.map((vehicle) => (
                      <Card 
                        key={vehicle.type}
                        className="cursor-pointer hover:border-primary hover:shadow-lg transition-all"
                      >
                        <CardContent className="p-4">
                          <div className="text-center">
                            <div className="text-4xl mb-2">{vehicle.icon}</div>
                            <h3 className="font-bold text-sm md:text-base">{vehicle.name}</h3>
                            <p className="text-xs text-muted-foreground mb-3">{vehicle.description}</p>
                            <div className="text-xl md:text-2xl font-bold text-primary mb-2">
                              {routes[0].prices[vehicle.type as keyof typeof routes[0]['prices']]} ₽
                            </div>
                            <Button className="w-full" size="sm">
                              Выбрать
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-muted/30 dark:from-background dark:to-muted/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Популярные маршруты</h2>
          
          <div className="max-w-5xl mx-auto space-y-4 md:space-y-6">
            {routes.map((route, idx) => (
              <Card key={idx} className="border-2 hover:border-primary hover:shadow-xl transition-all">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                    <div className="md:col-span-2">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Icon name="MapPin" className="w-5 h-5 text-primary shrink-0" />
                          <span className="font-bold text-sm sm:text-base">{route.from}</span>
                        </div>
                        <Icon name="ArrowRight" className="w-5 h-5 text-muted-foreground hidden sm:block" />
                        <div className="flex items-center gap-2">
                          <Icon name="MapPinOff" className="w-5 h-5 text-accent shrink-0" />
                          <span className="font-bold text-sm sm:text-base">{route.to}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Icon name="Route" className="w-4 h-4 text-muted-foreground" />
                          <span>{route.distance}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Clock" className="w-4 h-4 text-muted-foreground" />
                          <span>{route.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center items-start md:items-end gap-2">
                      <div className="text-sm text-muted-foreground">от</div>
                      <div className="text-2xl md:text-3xl font-bold text-primary">
                        {route.prices.economy} ₽
                      </div>
                      <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                        Заказать
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">Почему выбирают нас</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { icon: 'UserCheck', title: 'Встреча с табличкой', text: 'Водитель встретит вас в зоне прилёта' },
                { icon: 'Shield', title: 'Безопасность', text: 'Опытные водители со стажем 10+ лет' },
                { icon: 'Clock', title: 'Без ожидания', text: 'Отслеживаем рейсы, ждём при задержке' },
                { icon: 'CreditCard', title: 'Удобная оплата', text: 'Онлайн или наличными водителю' }
              ].map((feature, idx) => (
                <div key={idx} className="text-center animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                  <Icon name={feature.icon} className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="font-bold mb-2 text-base md:text-lg">{feature.title}</h3>
                  <p className="text-sm text-white/90">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default TransferPage;