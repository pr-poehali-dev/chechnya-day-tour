import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const RestaurantsPage = () => {
  const restaurants = [
    {
      name: 'Кафе "Ай"',
      location: 'Гора Чегет, верхняя станция',
      cuisine: 'Кавказская, Европейская',
      rating: 4.7,
      reviews: 342,
      priceRange: '₽₽',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070',
      features: ['Панорамный вид', 'Шашлык', 'Хычины', 'Горячий чай'],
      avgCheck: '800-1200 ₽',
      hours: '10:00-17:00',
      popular: true
    },
    {
      name: 'Ресторан "Вершина"',
      location: 'Терскол, отель Вершина',
      cuisine: 'Русская, Кавказская',
      rating: 4.5,
      reviews: 189,
      priceRange: '₽₽₽',
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070',
      features: ['Камин', 'Живая музыка', 'Банкеты', 'Детское меню'],
      avgCheck: '1500-2500 ₽',
      hours: '08:00-23:00'
    },
    {
      name: 'Столовая "Поляна"',
      location: 'Поляна Азау',
      cuisine: 'Домашняя кухня',
      rating: 4.3,
      reviews: 456,
      priceRange: '₽',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2070',
      features: ['Комплексные обеды', 'Быстро', 'Недорого', 'Большие порции'],
      avgCheck: '400-600 ₽',
      hours: '09:00-20:00'
    },
    {
      name: 'Кафе "Эльбрус"',
      location: 'Терскол, центр',
      cuisine: 'Грузинская, Кавказская',
      rating: 4.6,
      reviews: 278,
      priceRange: '₽₽',
      image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=2074',
      features: ['Хинкали', 'Хачапури', 'Вино', 'Уютная атмосфера'],
      avgCheck: '900-1400 ₽',
      hours: '11:00-22:00',
      popular: true
    },
    {
      name: 'Пиццерия "Альпийская"',
      location: 'Терскол, главная улица',
      cuisine: 'Итальянская, Европейская',
      rating: 4.4,
      reviews: 201,
      priceRange: '₽₽',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070',
      features: ['Пицца на дровах', 'Паста', 'Доставка', 'Wi-Fi'],
      avgCheck: '700-1100 ₽',
      hours: '12:00-23:00'
    },
    {
      name: 'Буфет на Гара-Баши',
      location: 'Станция Гара-Баши, 3800м',
      cuisine: 'Быстрое питание',
      rating: 4.1,
      reviews: 512,
      priceRange: '₽₽',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074',
      features: ['Горячий чай', 'Бутерброды', 'Супы', 'Снэки'],
      avgCheck: '300-500 ₽',
      hours: '09:00-16:00'
    }
  ];

  return (
    <div className="pt-16 md:pt-20">
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-accent to-orange-600">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="text-5xl md:text-6xl mb-6">🍴</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Рестораны и кафе Эльбруса
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            От горных столовых до ресторанов с панорамными видами
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-muted/30 dark:from-background dark:to-muted/10">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {restaurants.map((restaurant, idx) => (
              <Card 
                key={idx}
                className={`h-full flex flex-col ${
                  restaurant.popular ? 'border-4 border-accent shadow-2xl' : 'border-2'
                } hover:shadow-2xl hover:scale-105 transition-all duration-300`}
              >
                {restaurant.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs sm:text-sm font-bold z-10 whitespace-nowrap">
                    Популярное
                  </div>
                )}
                
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white dark:bg-background px-3 py-1 rounded-full font-bold text-sm">
                    {restaurant.priceRange}
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg sm:text-xl">{restaurant.name}</CardTitle>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <Icon name="MapPin" className="w-4 h-4 shrink-0" />
                    <span className="line-clamp-1">{restaurant.location}</span>
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <div className="flex text-accent">
                      {'★'.repeat(Math.floor(restaurant.rating))}
                      {'☆'.repeat(5 - Math.floor(restaurant.rating))}
                    </div>
                    <span className="text-xs sm:text-sm font-bold">{restaurant.rating}</span>
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      ({restaurant.reviews})
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-xs sm:text-sm">
                      <Icon name="UtensilsCrossed" className="w-4 h-4 text-muted-foreground shrink-0" />
                      <span>{restaurant.cuisine}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs sm:text-sm">
                      <Icon name="Clock" className="w-4 h-4 text-muted-foreground shrink-0" />
                      <span>{restaurant.hours}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-primary">
                      <Icon name="CreditCard" className="w-4 h-4 shrink-0" />
                      <span>{restaurant.avgCheck}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                    {restaurant.features.map((feature, fidx) => (
                      <span 
                        key={fidx}
                        className="text-xs bg-muted px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                      <Icon name="MapPin" className="w-4 h-4 mr-1" />
                      Маршрут
                    </Button>
                    <Button size="sm" className="bg-accent hover:bg-accent/90 text-xs sm:text-sm">
                      <Icon name="Phone" className="w-4 h-4 mr-1" />
                      Позвонить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-muted/50 dark:bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Рекомендации по питанию
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 text-left">
              {[
                {
                  icon: 'Info',
                  title: 'На высоте',
                  text: 'В горах метаболизм ускоряется. Питайтесь чаще небольшими порциями.'
                },
                {
                  icon: 'Droplets',
                  title: 'Пейте больше',
                  text: 'В горах быстрее происходит обезвоживание. Пейте горячий чай или воду.'
                },
                {
                  icon: 'Clock',
                  title: 'Бронируйте заранее',
                  text: 'В популярных местах в выходные лучше резервировать столик.'
                },
                {
                  icon: 'Wallet',
                  title: 'Наличные',
                  text: 'Не везде принимают карты. Имейте с собой наличные.'
                }
              ].map((tip, idx) => (
                <Card key={idx} className="border-2">
                  <CardContent className="p-4 sm:p-6">
                    <Icon name={tip.icon} className="w-8 h-8 sm:w-10 sm:h-10 text-accent mb-3" />
                    <h3 className="font-bold mb-2 text-base sm:text-lg">{tip.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{tip.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantsPage;
