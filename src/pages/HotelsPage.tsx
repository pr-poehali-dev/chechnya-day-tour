import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import SEO from '@/components/SEO';

const HotelsPage = () => {
  const [priceRange, setPriceRange] = useState([2000, 15000]);

  const hotels = [
    {
      name: 'Санаторий "Нарзан"',
      location: 'Курортный бульвар, 17',
      rating: 4.7,
      reviews: 342,
      price: 4500,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070',
      amenities: ['spa', 'pool', 'restaurant', 'medical', 'wifi'],
      type: 'Санаторий',
      popular: true
    },
    {
      name: 'Гранд Отель "Колоннада"',
      location: 'Курортный парк, у входа',
      rating: 4.9,
      reviews: 287,
      price: 8900,
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070',
      amenities: ['spa', 'pool', 'restaurant', 'parking', 'wifi', 'gym'],
      type: 'Отель',
      popular: true
    },
    {
      name: 'Санаторий "Долина Нарзанов"',
      location: 'Проспект Ленина, 25',
      rating: 4.6,
      reviews: 198,
      price: 5200,
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070',
      amenities: ['medical', 'spa', 'restaurant', 'parking', 'wifi'],
      type: 'Санаторий'
    },
    {
      name: 'Бутик-отель "Курортный"',
      location: 'Улица Кирова, 12',
      rating: 4.8,
      reviews: 156,
      price: 6500,
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070',
      amenities: ['breakfast', 'restaurant', 'parking', 'wifi'],
      type: 'Отель'
    },
    {
      name: 'Гостевой дом "Парковый"',
      location: 'Улица Желябова, 8',
      rating: 4.5,
      reviews: 124,
      price: 3200,
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2069',
      amenities: ['breakfast', 'kitchen', 'parking', 'wifi'],
      type: 'Гостевой дом'
    },
    {
      name: 'Санаторий "Кавказ"',
      location: 'Красная улица, 3',
      rating: 4.4,
      reviews: 267,
      price: 4800,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070',
      amenities: ['medical', 'spa', 'pool', 'restaurant', 'wifi'],
      type: 'Санаторий'
    },
    {
      name: 'Апартаменты "Центральные"',
      location: 'Проспект Мира, 15',
      rating: 4.3,
      reviews: 89,
      price: 2800,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2070',
      amenities: ['kitchen', 'wifi', 'parking'],
      type: 'Апартаменты'
    },
    {
      name: 'Санаторий "Родник"',
      location: 'Курортный бульвар, 42',
      rating: 4.6,
      reviews: 213,
      price: 5500,
      image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074',
      amenities: ['medical', 'spa', 'restaurant', 'parking', 'wifi'],
      type: 'Санаторий'
    },
    {
      name: 'Отель "Замок"',
      location: 'Улица Шаляпина, 5',
      rating: 4.7,
      reviews: 178,
      price: 7200,
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2032',
      amenities: ['restaurant', 'spa', 'parking', 'wifi', 'gym'],
      type: 'Отель'
    }
  ];

  const amenityIcons: Record<string, { icon: string; label: string }> = {
    parking: { icon: 'ParkingCircle', label: 'Парковка' },
    breakfast: { icon: 'Coffee', label: 'Завтрак' },
    restaurant: { icon: 'UtensilsCrossed', label: 'Ресторан' },
    spa: { icon: 'Sparkles', label: 'СПА' },
    pool: { icon: 'Waves', label: 'Бассейн' },
    kitchen: { icon: 'CookingPot', label: 'Кухня' },
    medical: { icon: 'Heart', label: 'Лечение' },
    wifi: { icon: 'Wifi', label: 'Wi-Fi' },
    gym: { icon: 'Dumbbell', label: 'Тренажёрный зал' }
  };

  return (
    <>
      <SEO
        title="Санатории и отели Кисловодска - цены 2024, бронирование онлайн"
        description="Выбирайте из 50+ санаториев, отелей и гостевых домов Кисловодска. Цены от 2000₽/ночь. Рейтинги, отзывы, онлайн-бронирование. Лечение, СПА, минеральные ванны."
        keywords="санатории Кисловодска, отели Кисловодск, бронирование санаториев КМВ, цены на санатории, лечение в Кисловодске"
      />
      
      <div className="pt-20">
        <section className="relative py-32 bg-gradient-to-br from-primary to-secondary">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Санатории и отели Кисловодска
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Выберите идеальное место для отдыха и оздоровления на курорте
            </p>
          </div>
        </section>

        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <label className="text-sm font-bold mb-2 block">Поиск по названию</label>
                  <Input placeholder="Название..." />
                </div>
                <div>
                  <label className="text-sm font-bold mb-2 block">Тип размещения</label>
                  <select className="w-full h-10 px-3 border rounded-md">
                    <option>Все типы</option>
                    <option>Санатории</option>
                    <option>Отели</option>
                    <option>Гостевые дома</option>
                    <option>Апартаменты</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-bold mb-2 block">
                    Цена: {priceRange[0]} - {priceRange[1]} ₽
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    min={1500}
                    max={20000}
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
                <Card key={idx} className={`h-full flex flex-col ${hotel.popular ? 'border-4 border-accent shadow-xl' : 'border-2'} hover:shadow-2xl transition-all relative`}>
                  {hotel.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold z-10">
                      Популярный
                    </div>
                  )}
                  <div className="relative h-52 overflow-hidden">
                    <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                      {hotel.type}
                    </div>
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
                          <span className="text-xs">{amenityIcons[amenity].label}</span>
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

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Как выбрать жильё в Кисловодске?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon name="Hospital" className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Санатории</h3>
                    <p className="text-muted-foreground mb-3">
                      Идеально для оздоровительного отдыха. Полный пансион, лечебные процедуры, 
                      минеральные ванны, консультации врачей.
                    </p>
                    <p className="text-sm font-semibold text-primary">От 4000₽ за сутки</p>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon name="Hotel" className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Отели</h3>
                    <p className="text-muted-foreground mb-3">
                      Комфортное проживание с современными удобствами. СПА-центры, 
                      рестораны, фитнес-залы, близость к достопримечательностям.
                    </p>
                    <p className="text-sm font-semibold text-primary">От 3500₽ за сутки</p>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon name="Home" className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Гостевые дома</h3>
                    <p className="text-muted-foreground mb-3">
                      Уютная домашняя атмосфера по доступной цене. Отличный выбор 
                      для семейного отдыха и длительного проживания.
                    </p>
                    <p className="text-sm font-semibold text-primary">От 2500₽ за сутки</p>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon name="Building" className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Апартаменты</h3>
                    <p className="text-muted-foreground mb-3">
                      Максимальная свобода и независимость. Собственная кухня, 
                      гибкий график, экономия на питании.
                    </p>
                    <p className="text-sm font-semibold text-primary">От 2000₽ за сутки</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HotelsPage;
