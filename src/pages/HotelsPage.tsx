import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

const HotelsPage = () => {
  const [priceRange, setPriceRange] = useState([1500, 25000]);

  const hotels = [
    {
      name: 'Отель Вершина',
      location: 'Терскол, 200м до канатки',
      rating: 4.8,
      reviews: 156,
      price: 4500,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070',
      amenities: ['parking', 'breakfast', 'spa', 'wifi'],
      popular: true
    },
    {
      name: 'Гостиница Эльбрус',
      location: 'Поляна Азау, у подъемников',
      rating: 4.5,
      reviews: 203,
      price: 6500,
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070',
      amenities: ['parking', 'breakfast', 'restaurant', 'spa', 'wifi']
    },
    {
      name: 'Коттедж Горный приют',
      location: 'Чегет, 500м до подъемника',
      rating: 4.3,
      reviews: 87,
      price: 3200,
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070',
      amenities: ['parking', 'kitchen', 'fireplace', 'wifi']
    },
    {
      name: 'Гостевой дом Уют',
      location: 'Терскол, центр',
      rating: 4.6,
      reviews: 124,
      price: 2800,
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2069',
      amenities: ['parking', 'breakfast', 'kitchen', 'wifi']
    },
    {
      name: 'Азау Отель & СПА',
      location: 'Поляна Азау, у канатки',
      rating: 4.9,
      reviews: 198,
      price: 8900,
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070',
      amenities: ['parking', 'breakfast', 'restaurant', 'spa', 'pool', 'wifi'],
      popular: true
    },
    {
      name: 'Апартаменты Горизонт',
      location: 'Тегенекли',
      rating: 4.4,
      reviews: 76,
      price: 2200,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070',
      amenities: ['parking', 'kitchen', 'wifi']
    }
  ];

  const amenityIcons: Record<string, { icon: string; label: string }> = {
    parking: { icon: 'ParkingCircle', label: 'Парковка' },
    breakfast: { icon: 'Coffee', label: 'Завтрак' },
    restaurant: { icon: 'UtensilsCrossed', label: 'Ресторан' },
    spa: { icon: 'Sparkles', label: 'СПА' },
    pool: { icon: 'Waves', label: 'Бассейн' },
    kitchen: { icon: 'CookingPot', label: 'Кухня' },
    fireplace: { icon: 'Flame', label: 'Камин' },
    wifi: { icon: 'Wifi', label: 'Wi-Fi' }
  };

  return (
    <div className="pt-20">
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Размещение на Эльбрусе
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Отели, гостевые дома и апартаменты для комфортного отдыха в горах
          </p>
        </div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <label className="text-sm font-bold mb-2 block">Поиск по названию</label>
                <Input placeholder="Название отеля..." />
              </div>
              <div>
                <label className="text-sm font-bold mb-2 block">Локация</label>
                <select className="w-full h-10 px-3 border rounded-md">
                  <option>Все локации</option>
                  <option>Поляна Азау</option>
                  <option>Терскол</option>
                  <option>Чегет</option>
                  <option>Тегенекли</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-bold mb-2 block">
                  Цена: {priceRange[0]} - {priceRange[1]} ₽
                </label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  min={1000}
                  max={30000}
                  step={500}
                  className="mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {hotels.map((hotel, idx) => (
              <Card key={idx} className={`h-full flex flex-col ${hotel.popular ? 'border-4 border-accent shadow-xl' : 'border-2'} hover:shadow-2xl transition-all`}>
                {hotel.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold z-10">
                    Популярный
                  </div>
                )}
                <div className="relative h-52 overflow-hidden">
                  <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                    <Icon name="Heart" className="w-5 h-5" />
                  </button>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl">{hotel.name}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="MapPin" className="w-4 h-4" />
                    {hotel.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex text-accent">
                      {'★'.repeat(Math.floor(hotel.rating))}
                      {'☆'.repeat(5 - Math.floor(hotel.rating))}
                    </div>
                    <span className="text-sm font-bold">{hotel.rating}</span>
                    <span className="text-sm text-muted-foreground">({hotel.reviews} отзывов)</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded-full" title={amenityIcons[amenity].label}>
                        <Icon name={amenityIcons[amenity].icon} className="w-3 h-3" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <div className="text-sm text-muted-foreground mb-1">от</div>
                    <div className="text-3xl font-bold text-primary mb-1">{hotel.price} ₽</div>
                    <div className="text-sm text-muted-foreground mb-4">за ночь</div>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Забронировать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HotelsPage;
