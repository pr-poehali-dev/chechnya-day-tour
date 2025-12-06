import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const AboutPage = () => {
  const timeline = [
    {
      year: '1829',
      title: 'Первое восхождение',
      icon: 'Compass',
      description: 'Экспедиция Российской академии наук совершила первое зафиксированное восхождение на восточную вершину Эльбруса.',
      details: 'Руководил экспедицией генерал Г. А. Эммануэль. Первым покорителем стал карачаевец Килар Хаширов.'
    },
    {
      year: '1934',
      title: 'Приют 11',
      icon: 'Home',
      description: 'Построена первая высокогорная гостиница СССР на высоте 4100 метров.',
      details: 'Деревянное здание вместимостью до 40 человек стало базой для альпинистов.'
    },
    {
      year: '1969',
      title: 'Канатная дорога',
      icon: 'Cable',
      description: 'Открыта первая очередь канатной дороги "Эльбрус-1" от Азау до станции "Кругозор".',
      details: 'Длина 1740 метров, перепад высот 900 метров. Революция в доступности горы.'
    },
    {
      year: '1976',
      title: 'Развитие курорта',
      icon: 'Building',
      description: 'Запущена вторая очередь канатки до станции "Мир" на высоте 3500 метров.',
      details: 'Эльбрус становится одним из ведущих горнолыжных курортов СССР.'
    },
    {
      year: '2006',
      title: 'Модернизация',
      icon: 'Wrench',
      description: 'Начало масштабной модернизации инфраструктуры курорта.',
      details: 'Установка новых гондольных подъемников, реконструкция гостиниц.'
    },
    {
      year: '2023',
      title: 'Современный курорт',
      icon: 'Star',
      description: 'Эльбрус - всесезонный курорт международного уровня.',
      details: '35 км трасс, современные отели, развитая инфраструктура для туристов.'
    }
  ];

  const geography = [
    { label: 'Республика', value: 'Кабардино-Балкария' },
    { label: 'Ближайший город', value: 'Тырныауз (35 км)' },
    { label: 'Координаты', value: '43°21′11″ с.ш., 42°26′13″ в.д.' },
    { label: 'От Москвы', value: '1800 км' },
    { label: 'От Минеральных Вод', value: '180 км' },
    { label: 'Высота курорта', value: '2100-3800 м' }
  ];

  return (
    <div className="pt-20">
      <section className="relative py-32 bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">⛰️</div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Эльбрус — легенда Кавказа
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Высочайшая вершина России и Европы. Место силы, которое вдохновляет миллионы путешественников.
          </p>
          <div className="mt-6 text-white/80">
            Главная → О курорте
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Где находится Эльбрус
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Эльбрус расположен на границе Кабардино-Балкарии и Карачаево-Черкесии, 
                  в самом сердце Большого Кавказа. Это стратовулкан с двумя вершинами: 
                  западной (5642 м) и восточной (5621 м).
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Курортная зона Приэльбрусья начинается от поселка Терскол на высоте 2100 метров. 
                  Отсюда система канатных дорог поднимает туристов до высоты 3800 метров, 
                  открывая доступ к горнолыжным трассам и альпинистским маршрутам.
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
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070"
                    alt="Панорама Эльбруса"
                    className="w-full h-full object-cover"
                  />
                </div>
                <Card className="bg-secondary text-white border-0">
                  <CardContent className="p-6">
                    <Icon name="MapPin" className="w-10 h-10 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Как добраться</h3>
                    <p className="text-white/90">
                      Ближайший аэропорт — Минеральные Воды (180 км). 
                      Трансфер на автобусе или такси займет 3-4 часа по живописной горной дороге.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              История покорения
            </h2>
            <p className="text-xl text-muted-foreground">
              От первых восхождений до современного горнолыжного курорта
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent" />
              
              <div className="space-y-12">
                {timeline.map((event, idx) => (
                  <div key={idx} className="relative pl-24">
                    <div className="absolute left-0 w-16 h-16 bg-white border-4 border-primary rounded-full flex items-center justify-center shadow-lg">
                      <Icon name={event.icon} className="w-8 h-8 text-primary" />
                    </div>
                    <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="shrink-0">
                            <div className="text-4xl font-bold text-primary mb-2">{event.year}</div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-foreground mb-3">{event.title}</h3>
                            <p className="text-lg text-foreground mb-3">{event.description}</p>
                            <p className="text-muted-foreground">{event.details}</p>
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
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Как добраться до Эльбруса
              </h2>
              <p className="text-xl text-muted-foreground">
                Выберите удобный для вас способ путешествия
              </p>
            </div>

            <Tabs defaultValue="plane" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="plane" className="gap-2">
                  <Icon name="Plane" className="w-4 h-4" />
                  Самолет
                </TabsTrigger>
                <TabsTrigger value="car" className="gap-2">
                  <Icon name="Car" className="w-4 h-4" />
                  Авто
                </TabsTrigger>
                <TabsTrigger value="transfer" className="gap-2">
                  <Icon name="Bus" className="w-4 h-4" />
                  Трансфер
                </TabsTrigger>
                <TabsTrigger value="train" className="gap-2">
                  <Icon name="Train" className="w-4 h-4" />
                  Поезд
                </TabsTrigger>
              </TabsList>

              <TabsContent value="plane">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="Plane" className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Самолет + Автобус</h3>
                        <p className="text-muted-foreground">Самый популярный способ</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                        <div>
                          <div className="font-bold mb-1">Перелет до Минеральных Вод</div>
                          <div className="text-muted-foreground">Время: 2-2.5 часа из Москвы. Цена: от 4000 руб.</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                        <div>
                          <div className="font-bold mb-1">Автобус до Терскола</div>
                          <div className="text-muted-foreground">Время: 3-4 часа. Цена: от 1000 руб.</div>
                        </div>
                      </div>
                      <div className="p-4 bg-accent/10 rounded-lg border-2 border-accent">
                        <div className="font-bold text-foreground mb-1">Итого: от 5000 руб. и 5-6 часов в пути</div>
                        <div className="text-sm text-muted-foreground">Автобусы отправляются ежедневно по расписанию</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="car">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="Car" className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Личный автомобиль</h3>
                        <p className="text-muted-foreground">Свобода передвижения</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-lg">Из Москвы: ~1800 км, 20-22 часа в пути через М4 «Дон» и А-157.</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-muted/30 rounded-lg">
                          <Icon name="Fuel" className="w-6 h-6 text-primary mb-2" />
                          <div className="font-bold mb-1">Топливо</div>
                          <div className="text-sm text-muted-foreground">~150-200 л (≈10000 руб.)</div>
                        </div>
                        <div className="p-4 bg-muted/30 rounded-lg">
                          <Icon name="AlertCircle" className="w-6 h-6 text-primary mb-2" />
                          <div className="font-bold mb-1">Важно</div>
                          <div className="text-sm text-muted-foreground">Горный серпантин, зимой цепи противоскольжения</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="transfer">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="Bus" className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Организованный трансфер</h3>
                        <p className="text-muted-foreground">Комфорт и надежность</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-lg">Индивидуальный или групповой трансфер из аэропорта Минеральных Вод прямо до вашего отеля.</p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 bg-muted/30 rounded-lg text-center">
                          <div className="text-3xl font-bold text-primary mb-2">2500₽</div>
                          <div className="font-bold mb-1">Групповой</div>
                          <div className="text-sm text-muted-foreground">до 6 человек</div>
                        </div>
                        <div className="p-4 bg-muted/30 rounded-lg text-center">
                          <div className="text-3xl font-bold text-primary mb-2">4000₽</div>
                          <div className="font-bold mb-1">Комфорт</div>
                          <div className="text-sm text-muted-foreground">до 4 человек</div>
                        </div>
                        <div className="p-4 bg-muted/30 rounded-lg text-center">
                          <div className="text-3xl font-bold text-primary mb-2">6000₽</div>
                          <div className="font-bold mb-1">VIP</div>
                          <div className="text-sm text-muted-foreground">до 3 человек</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="train">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="Train" className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Железная дорога + Автобус</h3>
                        <p className="text-muted-foreground">Бюджетный вариант</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                        <div>
                          <div className="font-bold mb-1">Поезд до Минеральных Вод или Нальчика</div>
                          <div className="text-muted-foreground">Время: 22-24 часа из Москвы. Цена: от 3000 руб.</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                        <div>
                          <div className="font-bold mb-1">Автобус до Терскола</div>
                          <div className="text-muted-foreground">Время: 3-4 часа. Цена: от 800 руб.</div>
                        </div>
                      </div>
                      <div className="p-4 bg-accent/10 rounded-lg border-2 border-accent">
                        <div className="font-bold text-foreground mb-1">Итого: от 3800 руб. и ~28 часов в пути</div>
                        <div className="text-sm text-muted-foreground">Комфортно и экономично</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
