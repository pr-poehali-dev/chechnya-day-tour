import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import SEO from '@/components/SEO';

const ActivitiesPage = () => {
  const activities = [
    {
      title: 'Джип-туры к Эльбрусу',
      description: 'Захватывающие поездки к подножию высочайшей вершины Европы через горные перевалы',
      price: 'от 6000₽',
      duration: '8-10 часов',
      groupSize: 'до 6 человек',
      image: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=2070',
      icon: 'Truck',
      color: 'bg-primary',
      highlights: ['Поляна Нарзанов', 'Чегемские водопады', 'Поляна Азау', 'Вид на Эльбрус']
    },
    {
      title: 'Автобусные экскурсии по КМВ',
      description: 'Комфортные поездки по городам-курортам Кавказских Минеральных Вод',
      price: 'от 2500₽',
      duration: '6-8 часов',
      groupSize: 'до 40 человек',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069',
      icon: 'Bus',
      color: 'bg-secondary',
      highlights: ['Пятигорск', 'Ессентуки', 'Железноводск', 'Замок Коварства']
    },
    {
      title: 'Конные прогулки',
      description: 'Романтические поездки верхом по живописным горным тропам Кавказа',
      price: 'от 3000₽',
      duration: '2-4 часа',
      groupSize: 'до 10 человек',
      image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2071',
      icon: 'Horse',
      color: 'bg-accent',
      highlights: ['Предгорье', 'Альпийские луга', 'Горные реки', 'Фотосессия']
    },
    {
      title: 'Квадроциклы и багги',
      description: 'Экстремальные покатушки по бездорожью в окрестностях Кисловодска',
      price: 'от 4500₽',
      duration: '2-3 часа',
      groupSize: 'до 8 человек',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070',
      icon: 'Bike',
      color: 'bg-green-600',
      highlights: ['Бездорожье', 'Горные склоны', 'Адреналин', 'Инструктаж']
    },
    {
      title: 'Пешие походы и треккинг',
      description: 'Организованные походы по самым красивым маршрутам Приэльбрусья',
      price: 'от 2000₽',
      duration: '4-6 часов',
      groupSize: 'до 15 человек',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070',
      icon: 'Footprints',
      color: 'bg-orange-600',
      highlights: ['Терренкуры', 'Водопады', 'Гора Кольцо', 'Экологические тропы']
    },
    {
      title: 'Экскурсия в Домбай',
      description: 'Поездка на один из красивейших горнолыжных курортов Кавказа',
      price: 'от 7500₽',
      duration: '12-14 часов',
      groupSize: 'до 6 человек',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070',
      icon: 'Mountain',
      color: 'bg-blue-600',
      highlights: ['Канатная дорога', 'Гора Мусса-Ачитара', 'Горное озеро', 'Обед в кафе']
    },
    {
      title: 'Рафтинг на реке Баксан',
      description: 'Сплав по горной реке для любителей острых ощущений',
      price: 'от 5000₽',
      duration: '3-4 часа',
      groupSize: 'до 12 человек',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2032',
      icon: 'Waves',
      color: 'bg-cyan-600',
      highlights: ['Порог II-III', 'Снаряжение', 'Инструктор', 'Безопасность']
    },
    {
      title: 'Полёт на параплане',
      description: 'Незабываемые виды Кавказских гор с высоты птичьего полёта',
      price: 'от 8000₽',
      duration: '30-60 минут',
      groupSize: 'индивидуально',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070',
      icon: 'Plane',
      color: 'bg-purple-600',
      highlights: ['Тандем-полёт', 'Инструктор', 'Видеосъёмка', 'Эльбрус с высоты']
    },
    {
      title: 'Винные туры',
      description: 'Дегустация лучших вин Кавказа с посещением виноделен',
      price: 'от 4000₽',
      duration: '5-6 часов',
      groupSize: 'до 20 человек',
      image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2070',
      icon: 'Wine',
      color: 'bg-red-600',
      highlights: ['3-4 винодельни', 'Дегустация', 'Сыры', 'История виноделия']
    }
  ];

  return (
    <>
      <SEO
        title="Экскурсии и активности в Кисловодске 2024 - цены, бронирование"
        description="Джип-туры к Эльбрусу от 6000₽, конные прогулки от 3000₽, треккинг, квадроциклы, рафтинг. Организованные экскурсии по КМВ и Кавказу. Онлайн-бронирование, опытные гиды."
        keywords="экскурсии из Кисловодска, джип-туры Эльбрус, активный отдых КМВ, конные прогулки, треккинг Кавказ, экскурсия в Домбай"
      />

      <div className="pt-20">
        <section className="relative py-32 bg-gradient-to-br from-primary to-secondary">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Активности и экскурсии
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Выберите приключение по душе в Кисловодске и окрестностях
            </p>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-white to-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {activities.map((activity, idx) => (
                <Card key={idx} className="h-full flex flex-col border-2 hover:shadow-2xl transition-all hover:border-primary overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={activity.image} 
                      alt={activity.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className={`absolute top-4 left-4 ${activity.color} text-white px-3 py-2 rounded-full flex items-center gap-2`}>
                      <Icon name={activity.icon} className="w-5 h-5" />
                      <span className="font-bold">{activity.price}</span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl mb-3">{activity.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{activity.description}</p>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Clock" className="w-4 h-4 text-primary" />
                        <span>{activity.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Users" className="w-4 h-4 text-primary" />
                        <span>{activity.groupSize}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-semibold mb-2">Маршрут включает:</p>
                      <div className="flex flex-wrap gap-2">
                        {activity.highlights.map((highlight, i) => (
                          <span key={i} className="text-xs bg-muted px-2 py-1 rounded-full">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto">
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        Забронировать тур
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
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Почему стоит заказать экскурсию?
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Мы организуем незабываемые путешествия по самым красивым местам Кавказа
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Shield" className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Безопасность</h3>
                  <p className="text-muted-foreground">
                    Опытные гиды, страховка, проверенные маршруты и транспорт
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Award" className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Опыт</h3>
                  <p className="text-muted-foreground">
                    Более 10 лет работы, тысячи довольных туристов, высокие рейтинги
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="MapPin" className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Локальные знания</h3>
                  <p className="text-muted-foreground">
                    Покажем места, которые не найдёшь в путеводителях
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8">
                  <Link to="/contacts">
                    <Icon name="Phone" className="w-5 h-5 mr-2" />
                    Связаться для консультации
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ActivitiesPage;
