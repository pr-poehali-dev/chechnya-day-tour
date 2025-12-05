import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Tours = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const steps = [
    {
      icon: 'MapPin',
      title: 'Встреча',
      description: 'Мы забираем вас от центрального входа в Кисловодский парк (Колоннада)'
    },
    {
      icon: 'Car',
      title: 'Трансфер',
      description: 'Доставляем на комфортном транспорте к месту начала прогулки'
    },
    {
      icon: 'Handshake',
      title: 'Знакомство',
      description: 'Инструктор познакомит вас с лошадью и расскажет об основах управления'
    },
    {
      icon: 'Mountain',
      title: 'Прогулка',
      description: 'Неспешная или активная прогулка по маршруту над Березовским ущельем'
    },
    {
      icon: 'Home',
      title: 'Возвращение',
      description: 'После прогулки мы отвезем вас обратно к Колоннаде'
    }
  ];

  const tours = [
    {
      title: 'Знакомство с горами',
      duration: '2 часа',
      price: '1 500 ₽',
      features: [
        'Трансфер от Колоннады',
        'Инструктаж и сопровождение гида',
        'Фотосессия на маршруте',
        'Базовый маршрут над ущельем'
      ]
    },
    {
      title: 'Глубина ущелья',
      duration: '3 часа',
      price: '2 250 ₽',
      features: [
        'Всё из 2-часового маршрута',
        'Более глубокий путь по тропам',
        'Остановка у живописного места',
        'Чай и снеки на природе'
      ],
      popular: true
    },
    {
      title: 'Индивидуальный поход',
      duration: 'от 2 часов',
      price: 'По запросу',
      features: [
        'Персональный гид',
        'Гибкий график и маршрут',
        'Углубленное обучение верховой езде',
        'Индивидуальная программа'
      ]
    }
  ];

  return (
    <section id="tours" className="py-20 bg-gradient-to-b from-muted/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Скачки над Березовским ущельем
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Наш фирменный маршрут, с которого началась наша история. Вы проедете по живописным горным тропам, 
            откуда открываются захватывающие дух виды на ущелье и окрестности Кисловодска.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
            Как это происходит
          </h3>
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  {idx + 1}
                </div>
                <Icon name={step.icon} className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold mb-2 text-foreground">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
            Варианты прогулок
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tours.map((tour, idx) => (
              <Card 
                key={idx} 
                className={`relative ${tour.popular ? 'border-primary border-4 shadow-xl' : 'border-2'} hover:shadow-lg transition-all`}
              >
                {tour.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold">
                    Популярный
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2 text-foreground">{tour.title}</CardTitle>
                  <div className="text-muted-foreground mb-2">{tour.duration}</div>
                  <div className="text-4xl font-bold text-primary">{tour.price}</div>
                  {tour.price !== 'По запросу' && <div className="text-sm text-muted-foreground">с человека</div>}
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tour.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-2">
                        <Icon name="Check" className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={scrollToContact}
                    className={`w-full ${tour.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={tour.popular ? 'default' : 'outline'}
                  >
                    {tour.price === 'По запросу' ? 'Запросить' : 'Забронировать'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tours;
