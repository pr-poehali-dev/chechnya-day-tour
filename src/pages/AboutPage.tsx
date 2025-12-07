import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const attractions = [
    {
      icon: '🏛️',
      title: 'Колоннада',
      description: 'Архитектурный символ Кисловодска, построенный в 1912 году. Визитная карточка курорта у главного входа в парк.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070',
      location: 'Курортный бульвар',
      year: '1912'
    },
    {
      icon: '🌳',
      title: 'Курортный парк',
      description: 'Один из крупнейших рукотворных парков Европы площадью 965 гектаров. Терренкуры от 1700 до 6000 метров.',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070',
      location: 'Центр города',
      year: '1823'
    },
    {
      icon: '💧',
      title: 'Нарзанная галерея',
      description: 'Питьевая галерея с 7 типами минеральной воды разной температуры и минерализации. Красивое готическое здание.',
      image: 'https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b?q=80&w=2069',
      location: 'Курортный парк',
      year: '1851'
    },
    {
      icon: '🏔️',
      title: 'Гора Кольцо',
      description: 'Уникальный природный памятник — скала с 8-метровым сквозным отверстием. Вид на Эльбрус в ясную погоду.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070',
      location: '5 км от города',
      year: 'Природное'
    },
    {
      icon: '🎭',
      title: 'Дача Шаляпина',
      description: 'Музей-усадьба великого певца. Проводятся концерты, литературно-музыкальные вечера в атмосфере начала XX века.',
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2032',
      location: 'ул. Шаляпина, 1',
      year: '1903'
    },
    {
      icon: '🏰',
      title: 'Замок Коварства и Любви',
      description: 'Ресторан в виде средневекового замка на скале. Легенда о трагической любви карачаевской девушки и пастуха.',
      image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074',
      location: '3 км от города',
      year: '1939'
    }
  ];

  const facts = [
    {
      icon: 'Sun',
      title: '300 солнечных дней',
      description: 'Больше, чем в Сочи и Ялте',
      color: 'bg-yellow-500'
    },
    {
      icon: 'Droplets',
      title: '7 типов нарзанов',
      description: 'Разной минерализации и температуры',
      color: 'bg-blue-500'
    },
    {
      icon: 'Trees',
      title: '965 гектаров парка',
      description: 'Второй по величине в Европе',
      color: 'bg-green-600'
    },
    {
      icon: 'Users',
      title: '1 млн+ туристов',
      description: 'Посещают город ежегодно',
      color: 'bg-primary'
    }
  ];

  const history = [
    {
      year: '1803',
      title: 'Основание курорта',
      description: 'Врач Ф.П. Гааз обнаружил источник кислых минеральных вод, давший название городу.'
    },
    {
      year: '1823',
      title: 'Создание парка',
      description: 'Генерал А.П. Ермолов основал курортный парк, который стал главной достопримечательностью.'
    },
    {
      year: '1903',
      title: 'Расцвет курорта',
      description: 'Кисловодск становится самым популярным курортом Российской империи.'
    },
    {
      year: '2024',
      title: 'Современность',
      description: 'Федеральный курорт федерального значения с развитой инфраструктурой.'
    }
  ];

  const geography = [
    { label: 'Высота над уровнем моря', value: '800-1200 м' },
    { label: 'Население', value: '~130 000 человек' },
    { label: 'Площадь', value: '65,6 км²' },
    { label: 'Часовой пояс', value: 'UTC+3 (МСК)' },
    { label: 'От Москвы', value: '1620 км' },
    { label: 'От аэропорта Минводы', value: '45 км' }
  ];

  return (
    <>
      <SEO
        title="О Кисловодске: история курорта, достопримечательности, климат, как добраться"
        description="Полная информация о Кисловодске: история с 1803 года, уникальный климат, целебные нарзаны, курортный парк 965 га. Колоннада, Нарзанная галерея, Дача Шаляпина. Как добраться из Москвы и Минеральных Вод."
        keywords="Кисловодск история, о курорте Кисловодск, достопримечательности Кисловодска, климат КМВ, нарзаны Кисловодска, курортный парк"
        url="https://kislovodsk-kmv.ru/about"
      />

      <div className="pt-16 md:pt-20">
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="text-6xl md:text-7xl mb-6">🌳</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Кисловодск — жемчужина Кавказа
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              Федеральный курорт с 220-летней историей, уникальным климатом и целебными минеральными водами
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Где находится Кисловодск
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Кисловодск — самый южный курорт Кавказских Минеральных Вод, 
                    расположенный в долине рек Ольховка и Березовая на высоте 800-1200 метров 
                    над уровнем моря в Ставропольском крае.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Город окружен отрогами Главного Кавказского хребта, что создает уникальный 
                    микроклимат: защиту от ветров, обилие солнца и чистейший горный воздух. 
                    В ясную погоду с высоких точек парка виден Эльбрус.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {geography.map((item, idx) => (
                      <div key={idx} className="bg-muted/30 p-4 rounded-lg">
                        <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                        <div className="font-bold text-foreground">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070"
                      alt="Панорама Кисловодска"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Card className="bg-secondary text-white border-0">
                    <CardContent className="p-6">
                      <Icon name="MapPin" className="w-10 h-10 mb-4" />
                      <h3 className="text-2xl font-bold mb-2">Как добраться</h3>
                      <p className="text-white/90 mb-4">
                        Ближайший аэропорт — Минеральные Воды (45 км). 
                        Трансфер займет 45-50 минут по скоростной трассе.
                      </p>
                      <Button asChild variant="secondary" className="bg-white text-primary hover:bg-white/90">
                        <Link to="/transfer">
                          <Icon name="Car" className="w-5 h-5 mr-2" />
                          Заказать трансфер
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-muted/30 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Кисловодск в цифрах</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {facts.map((fact, idx) => (
                <Card key={idx} className="border-2 hover:shadow-xl transition-all">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 ${fact.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon name={fact.icon} className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{fact.title}</h3>
                    <p className="text-muted-foreground text-sm">{fact.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Главные достопримечательности</h2>
              <p className="text-lg text-muted-foreground">
                Места, которые обязательно нужно посетить
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {attractions.map((attr, idx) => (
                <Card key={idx} className="border-2 hover:border-primary transition-all hover:shadow-2xl overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={attr.image} 
                      alt={attr.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute top-4 left-4 text-5xl">{attr.icon}</div>
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold">
                      {attr.year}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{attr.title}</h3>
                    <p className="text-muted-foreground mb-3 text-sm">{attr.description}</p>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <Icon name="MapPin" className="w-4 h-4" />
                      <span>{attr.location}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-muted/30 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                История курорта
              </h2>
              <p className="text-lg text-muted-foreground">
                От открытия источника до федерального курорта
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary" />
                
                <div className="space-y-12">
                  {history.map((event, idx) => (
                    <div key={idx} className="relative pl-0 md:pl-24">
                      <div className="hidden md:flex absolute left-0 w-16 h-16 bg-white border-4 border-primary rounded-full items-center justify-center shadow-lg">
                        <span className="font-bold text-primary">{idx + 1}</span>
                      </div>
                      <Card className="border-2 hover:border-primary transition-all">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="shrink-0">
                              <div className="text-3xl font-bold text-primary mb-2">{event.year}</div>
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                              <p className="text-muted-foreground">{event.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Почему выбирают Кисловодск
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2">
                  <CardContent className="p-6">
                    <Icon name="Heart" className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">Лечебный профиль</h3>
                    <p className="text-muted-foreground">
                      Сердечно-сосудистые заболевания, нервная система, органы дыхания. 
                      Минеральные ванны, терренкуры, климатолечение.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-6">
                    <Icon name="Leaf" className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">Экология</h3>
                    <p className="text-muted-foreground">
                      Чистейший горный воздух, насыщенный фитонцидами хвойных лесов. 
                      Природоохранная зона вокруг курорта.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-6">
                    <Icon name="Sparkles" className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">Инфраструктура</h3>
                    <p className="text-muted-foreground">
                      Современные санатории, отели, рестораны, театры, концертные залы. 
                      Развитая туристическая инфраструктура.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-6">
                    <Icon name="Calendar" className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">Круглый год</h3>
                    <p className="text-muted-foreground">
                      Курорт работает 365 дней в году. Каждый сезон имеет свою прелесть 
                      и лечебные особенности.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Готовы открыть для себя Кисловодск?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Забронируйте санаторий или отель и начните свой путь к здоровью и отдыху
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                <Link to="/hotels">
                  <Icon name="Hotel" className="w-5 h-5 mr-2" />
                  Выбрать жильё
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
        </section>
      </div>
    </>
  );
};

export default AboutPage;
