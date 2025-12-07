import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import SEO from '@/components/SEO';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070',
      title: 'Откройте для себя жемчужину Кавказа!',
      subtitle: 'Уникальный климат, целебные нарзаны, знаменитый парк'
    },
    {
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070',
      title: 'Кисловодский курортный парк',
      subtitle: 'Один из крупнейших рукотворных парков в Европе'
    },
    {
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070',
      title: 'Колоннада — визитная карточка города',
      subtitle: 'Архитектурный памятник в центре курорта'
    },
    {
      image: 'https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b?q=80&w=2069',
      title: 'Целебные нарзанные источники',
      subtitle: 'Природная минеральная вода для здоровья и долголетия'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const topPlaces = [
    {
      icon: '🏛️',
      title: 'Колоннада',
      description: 'Архитектурный символ Кисловодска',
      link: '/about'
    },
    {
      icon: '🌳',
      title: 'Курортный парк',
      description: '965 гектаров зелени и терренкуров',
      link: '/about'
    },
    {
      icon: '💧',
      title: 'Нарзанная галерея',
      description: 'Дегустация целебных минеральных вод',
      link: '/about'
    },
    {
      icon: '🏔️',
      title: 'Гора Кольцо',
      description: 'Природный памятник с видом на Эльбрус',
      link: '/activities/trekking'
    },
    {
      icon: '🎭',
      title: 'Дача Шаляпина',
      description: 'Музей и концертный зал',
      link: '/culture'
    }
  ];

  const activities = [
    {
      icon: 'Truck',
      title: 'Джип-туры',
      description: 'К Эльбрусу, Домбаю, водопадам',
      link: '/activities/jeep-tours',
      color: 'bg-primary'
    },
    {
      icon: 'Bus',
      title: 'Автобусные экскурсии',
      description: 'По КМВ и Кавказу',
      link: '/activities/bus-tours',
      color: 'bg-secondary'
    },
    {
      icon: 'Horse',
      title: 'Конные прогулки',
      description: 'По живописным маршрутам',
      link: '/activities/horse-riding',
      color: 'bg-accent'
    },
    {
      icon: 'Bike',
      title: 'Квадроциклы',
      description: 'Покорение предгорий',
      link: '/activities/quad-bikes',
      color: 'bg-green-600'
    },
    {
      icon: 'Footprints',
      title: 'Треккинг',
      description: 'Пешие маршруты по Кавказу',
      link: '/activities/trekking',
      color: 'bg-orange-600'
    },
    {
      icon: 'Car',
      title: 'Трансфер',
      description: 'Из аэропорта Минводы',
      link: '/transfer',
      color: 'bg-blue-600'
    }
  ];

  return (
    <>
      <SEO
        title="Отдых в Кисловодске 2024: санатории, экскурсии, цены, бронирование"
        description="Планируйте отдых в Кисловодске: санатории и отели от 2000₽, джип-туры к Эльбрусу от 6000₽, трансфер из аэропорта. Онлайн-бронирование, карта достопримечательностей, отзывы туристов."
        keywords="Кисловодск отдых 2024, санатории Кисловодска, что посмотреть в Кисловодске, экскурсии из Кисловодска, трансфер Минводы Кисловодск, цены на отдых КМВ"
        url="https://kislovodsk-kmv.ru"
      />

      {/* Hero Slider */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
            
            <div className="relative h-full container mx-auto px-4 flex items-center justify-center">
              <div className="text-center max-w-4xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-12 animate-fade-in">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                    <Link to="/hotels">
                      <Icon name="Hotel" className="w-5 h-5 mr-2" />
                      Найти жилье
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white text-lg px-8">
                    <Link to="/activities">
                      <Icon name="Compass" className="w-5 h-5 mr-2" />
                      Экскурсии
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`Слайд ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Quick Search Widget */}
      <section className="relative z-20 -mt-24 pb-12">
        <div className="container mx-auto px-4">
          <Card className="border-2 shadow-2xl max-w-4xl mx-auto">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Быстрый поиск жилья</h2>
              <form className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Заезд</label>
                  <Input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Выезд</label>
                  <Input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Гостей</label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full h-10 px-3 border rounded-md bg-background"
                  >
                    <option>1 человек</option>
                    <option>2 человека</option>
                    <option>3 человека</option>
                    <option>4 человека</option>
                    <option>5+ человек</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <Button asChild className="w-full bg-accent hover:bg-accent/90" size="lg">
                    <Link to="/hotels">
                      <Icon name="Search" className="w-5 h-5 mr-2" />
                      Найти
                    </Link>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Top 5 Places */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              ТОП-5 мест Кисловодска
            </h2>
            <p className="text-lg text-muted-foreground">
              Главные достопримечательности, которые обязательно нужно посетить
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {topPlaces.map((place, idx) => (
              <Link key={idx} to={place.link}>
                <Card className="border-2 hover:border-primary transition-all hover:shadow-xl h-full group">
                  <CardContent className="p-6 text-center">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                      {place.icon}
                    </div>
                    <h3 className="font-bold mb-2 text-lg">{place.title}</h3>
                    <p className="text-sm text-muted-foreground">{place.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/about">
                Узнать больше о городе
                <Icon name="ArrowRight" className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Activities */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-muted/30 to-white dark:from-muted/10 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Популярные активности
            </h2>
            <p className="text-lg text-muted-foreground">
              Выберите развлечение по душе
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {activities.map((activity, idx) => (
              <Link key={idx} to={activity.link}>
                <Card className="border-2 hover:border-primary transition-all hover:shadow-xl h-full group overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`${activity.color} p-6 text-white`}>
                      <Icon name={activity.icon} className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                      <p className="text-white/90 text-sm">{activity.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/activities">
                Все активности
                <Icon name="ArrowRight" className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Kislovodsk */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Почему выбирают Кисловодск?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Sun" className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Уникальный климат</h3>
                  <p className="text-muted-foreground">
                    Умеренно-континентальный климат с 300 солнечными днями в году. Идеально для оздоровления круглый год.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Droplets" className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Целебные нарзаны</h3>
                  <p className="text-muted-foreground">
                    7 типов минеральной воды для лечения сердечно-сосудистой, нервной и пищеварительной систем.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Trees" className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Знаменитый парк</h3>
                  <p className="text-muted-foreground">
                    965 гектаров зелени с терренкурами разной сложности. Один из крупнейших парков Европы.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Готовы к путешествию?
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Забронируйте трансфер из аэропорта Минеральные Воды прямо сейчас и начните свой отдых комфортно
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
              <Link to="/transfer">
                <Icon name="Car" className="w-5 h-5 mr-2" />
                Заказать трансфер
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white text-lg px-8">
              <Link to="/contacts">
                <Icon name="Phone" className="w-5 h-5 mr-2" />
                Связаться с нами
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
