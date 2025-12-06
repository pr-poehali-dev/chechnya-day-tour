import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import SEO from '@/components/SEO';

interface Destination {
  id: string;
  name: string;
  distance: string;
  duration: string;
  prices: {
    economy: number;
    comfort: number;
    minivan: number;
    minibus: number;
  };
}

type CarType = 'economy' | 'comfort' | 'minivan' | 'minibus';

const TransferCalculatorPage = () => {
  const [destination, setDestination] = useState('miv');
  const [carType, setCarType] = useState<CarType>('economy');
  const [passengers, setPassengers] = useState(2);
  const [calculatedPrice, setCalculatedPrice] = useState(4500);
  const [selectedDistance, setSelectedDistance] = useState('180 км');
  const [selectedDuration, setSelectedDuration] = useState('3-4 часа');

  const destinations: Destination[] = [
    {
      id: 'miv',
      name: 'Аэропорт Минеральные Воды',
      distance: '180 км',
      duration: '3-4 часа',
      prices: { economy: 4500, comfort: 6000, minivan: 8500, minibus: 12000 }
    },
    {
      id: 'pyatigorsk',
      name: 'Пятигорск',
      distance: '150 км',
      duration: '2.5-3 часа',
      prices: { economy: 4000, comfort: 5500, minivan: 7500, minibus: 11000 }
    },
    {
      id: 'kislovodsk',
      name: 'Кисловодск',
      distance: '170 км',
      duration: '3-3.5 часа',
      prices: { economy: 4300, comfort: 5800, minivan: 8000, minibus: 11500 }
    },
    {
      id: 'essentuki',
      name: 'Ессентуки',
      distance: '160 км',
      duration: '2.5-3 часа',
      prices: { economy: 4200, comfort: 5700, minivan: 7800, minibus: 11200 }
    },
    {
      id: 'zheleznovodsk',
      name: 'Железноводск',
      distance: '155 км',
      duration: '2.5-3 часа',
      prices: { economy: 4100, comfort: 5600, minivan: 7600, minibus: 11000 }
    }
  ];

  const carTypes = [
    { id: 'economy' as CarType, name: 'Эконом', icon: '🚗', capacity: '1-3 чел' },
    { id: 'comfort' as CarType, name: 'Комфорт', icon: '🚙', capacity: '1-3 чел' },
    { id: 'minivan' as CarType, name: 'Минивэн', icon: '🚐', capacity: '4-7 чел' },
    { id: 'minibus' as CarType, name: 'Микроавтобус', icon: '🚌', capacity: '8-18 чел' }
  ];

  useEffect(() => {
    const selectedDest = destinations.find(d => d.id === destination);
    if (selectedDest) {
      setCalculatedPrice(selectedDest.prices[carType]);
      setSelectedDistance(selectedDest.distance);
      setSelectedDuration(selectedDest.duration);
    }
  }, [destination, carType]);

  return (
    <>
      <SEO
        title="Трансфер из Терскола в Минеральные Воды, Пятигорск, Кисловодск 2024"
        description="Заказ трансфера с курорта Эльбрус (Терскол) в аэропорт Минеральные Воды, Пятигорск, Кисловодск. Калькулятор стоимости, онлайн-бронирование."
        keywords="трансфер из Терскола, трансфер Эльбрус, такси Терскол Минводы, заказ трансфера Эльбрус, стоимость трансфера"
        url="https://elbrus-resort.ru/transfer"
      />

      <div className="pt-16 md:pt-20">
        <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-6">🚗</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Трансфер из Терскола
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto px-4">
              Комфортная доставка до аэропортов и городов КМВ
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 shadow-xl">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                    Калькулятор стоимости трансфера
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Откуда</Label>
                        <Input value="Терскол, курорт Эльбрус" readOnly className="bg-muted" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="destination">Куда *</Label>
                        <select 
                          id="destination"
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                          className="w-full h-10 px-3 border rounded-md bg-background"
                        >
                          {destinations.map(dest => (
                            <option key={dest.id} value={dest.id}>{dest.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="datetime">Дата и время</Label>
                      <Input id="datetime" type="datetime-local" />
                    </div>
                    
                    <div className="space-y-3">
                      <Label>Тип автомобиля *</Label>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                        {carTypes.map((car) => (
                          <label key={car.id} className="cursor-pointer">
                            <input
                              type="radio"
                              name="car-type"
                              value={car.id}
                              checked={carType === car.id}
                              onChange={() => setCarType(car.id)}
                              className="sr-only"
                            />
                            <div className={`border-2 rounded-lg p-4 text-center transition-all ${
                              carType === car.id 
                                ? 'border-primary bg-primary/10' 
                                : 'border-border hover:border-primary/50'
                            }`}>
                              <div className="text-3xl mb-2">{car.icon}</div>
                              <div className="font-semibold text-sm">{car.name}</div>
                              <div className="text-xs text-muted-foreground mt-1">{car.capacity}</div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="passengers">Количество человек: {passengers}</Label>
                      <input
                        id="passengers"
                        type="range"
                        min="1"
                        max="18"
                        value={passengers}
                        onChange={(e) => setPassengers(Number(e.target.value))}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>1</span>
                        <span>9</span>
                        <span>18</span>
                      </div>
                    </div>
                    
                    <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary">
                      <CardContent className="p-6">
                        <div className="text-center mb-4">
                          <h3 className="text-lg font-bold mb-2">Примерная стоимость:</h3>
                          <div className="text-4xl sm:text-5xl font-bold text-primary">
                            {calculatedPrice.toLocaleString()} ₽
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div className="text-center">
                            <div className="text-muted-foreground mb-1">Расстояние</div>
                            <div className="font-semibold">{selectedDistance}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-muted-foreground mb-1">Время в пути</div>
                            <div className="font-semibold">{selectedDuration}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-muted-foreground mb-1">Тип авто</div>
                            <div className="font-semibold capitalize">{carTypes.find(c => c.id === carType)?.name}</div>
                          </div>
                        </div>
                        
                        <Button className="w-full mt-6 bg-primary hover:bg-primary/90" size="lg">
                          <Icon name="Calendar" className="w-5 h-5 mr-2" />
                          Забронировать трансфер
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-muted/30 to-white dark:from-muted/10 dark:to-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
              Стоимость трансфера по направлениям
            </h2>
            
            <div className="max-w-6xl mx-auto overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-3 text-left">Направление</th>
                    <th className="p-3 text-center hidden md:table-cell">Расстояние</th>
                    <th className="p-3 text-center hidden md:table-cell">Время</th>
                    <th className="p-3 text-center">Эконом</th>
                    <th className="p-3 text-center">Комфорт</th>
                    <th className="p-3 text-center hidden lg:table-cell">Минивэн</th>
                    <th className="p-3 text-center hidden lg:table-cell">Микроавтобус</th>
                  </tr>
                </thead>
                <tbody>
                  {destinations.map((dest, idx) => (
                    <tr key={dest.id} className={idx % 2 === 0 ? 'bg-muted/30' : 'bg-white dark:bg-background'}>
                      <td className="p-3 font-medium">Терскол → {dest.name}</td>
                      <td className="p-3 text-center hidden md:table-cell text-muted-foreground">{dest.distance}</td>
                      <td className="p-3 text-center hidden md:table-cell text-muted-foreground">{dest.duration}</td>
                      <td className="p-3 text-center font-semibold">{dest.prices.economy.toLocaleString()} ₽</td>
                      <td className="p-3 text-center font-semibold">{dest.prices.comfort.toLocaleString()} ₽</td>
                      <td className="p-3 text-center font-semibold hidden lg:table-cell">{dest.prices.minivan.toLocaleString()} ₽</td>
                      <td className="p-3 text-center font-semibold hidden lg:table-cell">{dest.prices.minibus.toLocaleString()} ₽</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
              Дополнительная информация
            </h2>
            
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="text-3xl mb-4">🚗</div>
                  <h3 className="font-bold mb-3">Что включено:</h3>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>• Трансфер от/до адреса</li>
                    <li>• Встреча с табличкой</li>
                    <li>• Помощь с багажом</li>
                    <li>• Вода в автомобиле</li>
                    <li>• Wi-Fi</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="text-3xl mb-4">⏰</div>
                  <h3 className="font-bold mb-3">Время подачи:</h3>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>• Аэропорт: за 60 мин</li>
                    <li>• Вокзал: за 40 мин</li>
                    <li>• Отель: за 15 мин</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="text-3xl mb-4">📞</div>
                  <h3 className="font-bold mb-3">Контакты:</h3>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>• 8 800 500-50-50</li>
                    <li>• WhatsApp</li>
                    <li>• Telegram</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="text-3xl mb-4">✅</div>
                  <h3 className="font-bold mb-3">Отмена:</h3>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>• >24ч: бесплатно</li>
                    <li>• 12-24ч: 50%</li>
                    <li>• <12ч: 100%</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TransferCalculatorPage;
