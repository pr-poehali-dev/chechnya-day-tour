import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const HomePage = () => {
  const stats = [
    { icon: 'Mountain', number: '5642', label: 'Высота западной вершины', unit: 'метров' },
    { icon: 'Snowflake', number: '23', label: 'Ледника питают реки', unit: '' },
    { icon: 'Cable', number: '1969', label: 'Год открытия канатки', unit: '' }
  ];

  const highlights = [
    {
      icon: 'Ski',
      title: 'Горные лыжи',
      description: '35 км подготовленных трасс для всех уровней подготовки',
      link: '/activities'
    },
    {
      icon: 'Hiking',
      title: 'Треккинг',
      description: 'Живописные маршруты по горным тропам Кавказа',
      link: '/activities'
    },
    {
      icon: 'Hotel',
      title: 'Проживание',
      description: 'Отели и гостевые дома на любой бюджет',
      link: '/hotels'
    },
    {
      icon: 'Camera',
      title: 'Достопримечательности',
      description: 'ТОП-5 мест, которые обязательно нужно посетить',
      link: '/top-places'
    }
  ];

  return (
    <div className="pt-16 md:pt-20">
      <section className="relative min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'multiply'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4 sm:mb-6 inline-block animate-fade-in">
              <div className="text-5xl sm:text-6xl md:text-7xl mb-2 sm:mb-4">⛰️</div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-4 sm:mb-6 leading-tight tracking-tight animate-fade-in px-4">
              ВЫСОЧАЙШАЯ ВЕРШИНА<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>ЕВРОПЫ ЖДЕТ ТЕБЯ
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-3 sm:mb-4 font-light px-4">
              Всесезонный горный курорт • 5642 метра • Кавказ
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto px-4">
              Покорите легендарный Эльбрус, наслаждайтесь горнолыжными трассами мирового уровня 
              и откройте для себя удивительную природу Приэльбрусья
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link to="/activities" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg">
                  <Icon name="Snowflake" className="w-5 h-5 mr-2" />
                  Зимний отдых
                </Button>
              </Link>
              <Link to="/activities" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg">
                  <Icon name="Sun" className="w-5 h-5 mr-2" />
                  Летние приключения
                </Button>
              </Link>
            </div>
            <div className="mt-8 sm:mt-12 animate-bounce hidden sm:block">
              <Icon name="ChevronDown" className="w-8 h-8 text-white/80 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-muted/30 dark:from-background dark:to-muted/10">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
            {stats.map((stat, idx) => (
              <Card key={idx} className="border-2 hover:border-primary transition-all hover:shadow-xl">
                <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 text-center">
                  <Icon name={stat.icon} className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-primary mx-auto mb-3 sm:mb-4" />
                  <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-2">
                    {stat.number}
                    {stat.unit && <span className="text-lg sm:text-xl md:text-2xl ml-1">{stat.unit}</span>}
                  </div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Откройте для себя Эльбрус
            </h2>
            <p className="text-xl text-muted-foreground">
              Всесезонный курорт мирового уровня в самом сердце Кавказских гор. 
              Здесь каждый найдет свое приключение.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {highlights.map((item, idx) => (
              <Link key={idx} to={item.link}>
                <Card className="h-full border-2 hover:border-primary transition-all hover:shadow-xl group">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                      <Icon name={item.icon} className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                      Подробнее
                      <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Курорт мирового уровня
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Эльбрус — это не просто гора. Это место, где современная инфраструктура 
                  сочетается с первозданной природой Кавказа.
                </p>
                <ul className="space-y-4">
                  {[
                    'Современные канатные дороги до высоты 3800 метров',
                    'Горнолыжные трассы общей протяженностью 35 км',
                    'Комфортабельные отели и гостевые дома',
                    'Профессиональные гиды и инструкторы',
                    'Близость к горнолыжному курорту Чегет'
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                      <span className="text-foreground">{text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link to="/about">
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      Узнать больше о курорте
                      <Icon name="ArrowRight" className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070"
                    alt="Вид на Эльбрус"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-xl shadow-xl">
                  <div className="text-4xl font-bold">5642м</div>
                  <div className="text-sm">над уровнем моря</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы к приключению?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Свяжитесь с нами для планирования вашей поездки на Эльбрус. 
            Мы поможем организовать незабываемый отдых.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contacts">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg">
                <Icon name="Phone" className="w-5 h-5 mr-2" />
                Связаться с нами
              </Button>
            </Link>
            <Link to="/hotels">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg">
                <Icon name="Hotel" className="w-5 h-5 mr-2" />
                Забронировать жилье
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;