import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    date: '',
    people: '1',
    address: ''
  });

  const heroImages = [
    { src: '/img/08c10103-a025-4d65-b8c8-f6f5ca66a4d7.jpg', alt: 'Мечеть Сердце Чечни ночью' },
    { src: '/img/acb4228e-280b-4ea1-980e-11027cd8ab5e.jpg', alt: 'Грозный Сити' },
    { src: '/img/96f25a02-c30f-4f9c-a433-e49d4300b136.jpg', alt: 'Мечеть Сердце Матери' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Новая заявка на экскурсию в Чечню!\n\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nEmail: ${formData.email}\nГород: ${formData.city}\nДата: ${formData.date}\nКоличество: ${formData.people} чел.\nАдрес: ${formData.address}`;
    const whatsappUrl = `https://wa.me/79678284699?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in leading-tight">
            Экскурсия в Чечню на один день:<br />от великих мечетей до небоскребов
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-4 max-w-4xl mx-auto opacity-95">
            Комфортный тур в мини-группе. Забираем от вашего дома в городах КМВ.<br />
            Всё самое главное за один день.
          </p>
          <p className="text-xl md:text-2xl font-semibold mb-12 text-islamic-gold">
            Комфортные мини-группы. Вас заберут от дома.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
            {[
              { icon: 'Home', label: 'Трансфер от дома', desc: 'Заберём и привезём по адресу' },
              { icon: 'Users', label: 'Группа до 8 человек', desc: 'Индивидуальная атмосфера' },
              { icon: 'Building2', label: 'Вся Чечня за день', desc: 'Главные святыни и чудеса архитектуры' },
              { icon: 'Car', label: 'Комфортный транспорт', desc: 'Внедорожник или минивэн' }
            ].map((item, idx) => (
              <Card key={idx} className="bg-white/15 backdrop-blur-md border-white/25 text-white hover:bg-white/20 transition-all">
                <CardContent className="pt-6 pb-4 text-center">
                  <Icon name={item.icon} className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold text-sm mb-1">{item.label}</p>
                  <p className="text-xs opacity-90">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-islamic-green hover:bg-islamic-green/90 text-white px-10 py-6 text-lg font-bold shadow-2xl"
              onClick={() => scrollToSection('program')}
            >
              Посмотреть программу
            </Button>
            <Button 
              size="lg" 
              className="bg-islamic-gold hover:bg-islamic-gold/90 text-foreground px-10 py-6 text-lg font-bold shadow-2xl"
              onClick={() => scrollToSection('booking')}
            >
              Забронировать место
            </Button>
          </div>

          <div className="flex gap-2 justify-center mt-8">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentSlide ? 'bg-islamic-gold w-8' : 'bg-white/50'
                }`}
                aria-label={`Слайд ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="program" className="py-20 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Маршрут путешествия: от завтрака до самой большой мечети Европы
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Временная шкала вашего незабываемого дня
          </p>

          <div className="max-w-5xl mx-auto space-y-8">
            {[
              {
                time: '06:00 - 08:00',
                title: 'Сбор группы и трансфер',
                desc: 'Вас забирают от указанного адреса. Комфортная дорога по живописным предгорьям Кавказа.',
                icon: 'MapPin',
                color: 'bg-islamic-green'
              },
              {
                time: '08:00 - 09:00',
                title: 'Завтрак',
                desc: 'Остановка в дорожном кафе для полноценного завтрака (оплачивается отдельно).',
                icon: 'Coffee',
                color: 'bg-orange-500'
              },
              {
                time: '09:30 - 10:30',
                title: 'Магас: Башня Согласия',
                desc: 'Знакомство с новой столицей Ингушетии и фото на фоне уникальной башни в стиле хай-тек.',
                icon: 'Building',
                color: 'bg-blue-600'
              },
              {
                time: '11:00 - 13:30',
                title: 'Грозный: "Сердце Чечни"',
                desc: 'Посещение одной из самых величественных мечетей мира. Осмотр православного храма Михаила Архангела — символа межконфессионального мира.',
                icon: 'Church',
                color: 'bg-islamic-green',
                img: '/img/08c10103-a025-4d65-b8c8-f6f5ca66a4d7.jpg'
              },
              {
                time: '13:30 - 14:30',
                title: 'Обед (по желанию)',
                desc: 'Возможность попробовать блюда национальной кухни в кафе Грозного.',
                icon: 'UtensilsCrossed',
                color: 'bg-red-600'
              },
              {
                time: '14:30 - 15:30',
                title: '"Грозный Сити"',
                desc: 'Подъем на смотровую площадку (доп. расход 200 руб.). Панорамные виды на город и мечеть.',
                icon: 'Building2',
                color: 'bg-islamic-gold',
                img: '/img/acb4228e-280b-4ea1-980e-11027cd8ab5e.jpg'
              },
              {
                time: '16:00 - 16:45',
                title: 'Аргун: "Сердце Матери"',
                desc: 'Посещение ультрасовременной мечети, поражающей своим футуристическим дизайном.',
                icon: 'Sparkles',
                color: 'bg-purple-600',
                img: '/img/96f25a02-c30f-4f9c-a433-e49d4300b136.jpg'
              },
              {
                time: '17:30 - 18:30',
                title: 'Шали: "Гордость Мусульман"',
                desc: 'Финальный аккорд — самая большая мечеть в Европе, впечатляющая своими масштабами.',
                icon: 'Crown',
                color: 'bg-islamic-gold',
                img: '/img/c1586c9b-47ba-4d02-bb3d-308a82e26fc7.jpg'
              },
              {
                time: '18:30',
                title: 'Возвращение домой',
                desc: 'Выезд в сторону КМВ. Прибытие к вашим адресам поздно вечером.',
                icon: 'Home',
                color: 'bg-primary'
              }
            ].map((item, idx) => (
              <div key={idx} className="relative flex gap-6 group">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon name={item.icon} className="w-8 h-8" />
                  </div>
                  {idx < 8 && <div className="w-1 h-full bg-gradient-to-b from-islamic-green/30 to-transparent mt-2"></div>}
                </div>

                <Card className="flex-1 hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1">
                        <div className="text-sm font-bold text-islamic-green mb-2">{item.time}</div>
                        <h3 className="text-xl md:text-2xl font-bold mb-3">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                      {item.img && (
                        <div className="md:w-64 h-48 rounded-lg overflow-hidden flex-shrink-0">
                          <img src={item.img} alt={item.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Узнайте стоимость из вашего города
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Прозрачное ценообразование без скрытых платежей
          </p>

          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 overflow-hidden shadow-xl">
              <div className="bg-gradient-to-r from-islamic-green to-islamic-gold p-6 text-white">
                <h3 className="text-2xl font-bold text-center">Стоимость экскурсии с человека</h3>
              </div>
              <CardContent className="pt-8">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-islamic-green/20">
                      <th className="text-left py-4 text-lg font-bold">Город отправления</th>
                      <th className="text-right py-4 text-lg font-bold">Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { city: 'Кисловодск', price: '6 000 руб.' },
                      { city: 'Ессентуки', price: '5 800 руб.' },
                      { city: 'Пятигорск', price: '5 700 руб.' },
                      { city: 'Минеральные Воды', price: '6 000 руб.' }
                    ].map((item, idx) => (
                      <tr key={idx} className="border-b hover:bg-muted/30 transition-colors">
                        <td className="py-4 font-medium text-base">{item.city}</td>
                        <td className="text-right py-4 text-xl font-bold text-islamic-green">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-green-50 border-2 border-islamic-green/30">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-islamic-green">
                    <Icon name="CheckCircle" className="w-6 h-6" />
                    Что включено в стоимость
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Трансфер от/до вашего адреса в городах КМВ',
                      'Комфортный проезд на внедорожнике/минивэне',
                      'Сопровождение профессионального гида',
                      'Все экскурсии по программе'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon name="Check" className="w-5 h-5 text-islamic-green flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-amber-50 border-2 border-islamic-gold/30">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-islamic-gold">
                    <Icon name="AlertCircle" className="w-6 h-6" />
                    Оплачивается отдельно
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Питание (завтрак, обед) — от 500 руб.',
                      'Смотровая площадка «Грозный Сити» — 200 руб.'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon name="Circle" className="w-5 h-5 text-islamic-gold flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6 bg-blue-50 border-2 border-blue-400/30">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-700">
                  <Icon name="Info" className="w-6 h-6" />
                  Важно знать перед бронированием
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-start gap-2">
                    <Icon name="Users" className="w-5 h-5 text-blue-700 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Размер группы</p>
                      <p className="text-muted-foreground">до 8 человек</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Clock" className="w-5 h-5 text-blue-700 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Продолжительность</p>
                      <p className="text-muted-foreground">15-16 часов</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="CreditCard" className="w-5 h-5 text-blue-700 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Паспорт</p>
                      <p className="text-muted-foreground">Обязательно!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Backpack" className="w-5 h-5 text-blue-700 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Что взять</p>
                      <p className="text-muted-foreground">Удобная обувь, платок (женщинам)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Один день — миллион впечатлений
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Фотографии мест, которые вы посетите
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              { src: '/img/fcc83cff-a341-4279-9812-08bf0818756e.jpg', title: 'Комфортный транспорт' },
              { src: '/img/08c10103-a025-4d65-b8c8-f6f5ca66a4d7.jpg', title: 'Сердце Чечни' },
              { src: '/img/acb4228e-280b-4ea1-980e-11027cd8ab5e.jpg', title: 'Грозный Сити' },
              { src: '/img/96f25a02-c30f-4f9c-a433-e49d4300b136.jpg', title: 'Сердце Матери' },
              { src: '/img/c1586c9b-47ba-4d02-bb3d-308a82e26fc7.jpg', title: 'Гордость Мусульман' },
              { src: '/img/4d6267f5-eabf-454f-8525-ee7fa9d9d138.jpg', title: 'Наши туристы' }
            ].map((item, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white font-bold">{item.title}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
            Частые вопросы
          </h2>

          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-semibold">
                Точно меня заберут от моего адреса?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да! Мы осуществляем трансфер по адресу вашего проживания (отель, квартира) в пределах Кисловодска, Ессентуков, Пятигорска и Минеральных Вод.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-semibold">
                Нужен ли паспорт?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, оригинал паспорта обязателен для пересечения границы субъектов РФ.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-semibold">
                Сколько всего мы проедем за день?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Общий километраж около 500-600 км. Дорога комфортная, с остановками для отдыха и перекусов.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-semibold">
                Можно ли с детьми?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, дети от 7 лет допускаются в сопровождении взрослых. Для детей могут быть предусмотрены скидки - уточните у организатора.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-semibold">
                Как происходит оплата?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Предоплата 50% онлайн для бронирования места, остальное — гиду в день экскурсии.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="booking" className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Забронируйте ваше место в мини-группе
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Заполните форму и мы свяжемся с вами для подтверждения
          </p>

          <Card className="max-w-2xl mx-auto shadow-2xl">
            <CardContent className="pt-8 pb-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base font-semibold">Имя и Фамилия *</Label>
                    <Input 
                      id="name" 
                      required
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base font-semibold">Телефон *</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      required
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-semibold">Email</Label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="example@mail.ru"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="h-12"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-base font-semibold">Город отправления *</Label>
                    <Select required value={formData.city} onValueChange={(val) => setFormData({...formData, city: val})}>
                      <SelectTrigger id="city" className="h-12">
                        <SelectValue placeholder="Выберите город" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kislovodsk">Кисловодск (6000₽)</SelectItem>
                        <SelectItem value="essentuki">Ессентуки (5800₽)</SelectItem>
                        <SelectItem value="pyatigorsk">Пятигорск (5700₽)</SelectItem>
                        <SelectItem value="minvody">Минеральные Воды (6000₽)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="people" className="text-base font-semibold">Количество человек *</Label>
                    <Select required value={formData.people} onValueChange={(val) => setFormData({...formData, people: val})}>
                      <SelectTrigger id="people" className="h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1,2,3,4,5,6,7,8].map(num => (
                          <SelectItem key={num} value={String(num)}>{num}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date" className="text-base font-semibold">Предпочтительная дата *</Label>
                  <Input 
                    id="date" 
                    type="date" 
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-base font-semibold">Адрес для трансфера *</Label>
                  <Input 
                    id="address" 
                    required
                    placeholder="Улица, дом, отель..."
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="h-12"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-14 text-lg font-bold bg-gradient-to-r from-islamic-green to-islamic-gold hover:opacity-90 transition-opacity text-white"
                >
                  Забронировать со скидкой 50%
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-islamic-green to-islamic-gold text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Тур в Чечню из КМВ</h3>
              <p className="text-white/90">Незабываемые путешествия в сердце Кавказа</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Контакты</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Icon name="Phone" className="w-5 h-5" />
                  <a href="tel:+79678284699" className="hover:text-islamic-gold transition-colors">+7 (967) 828-46-99</a>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Mail" className="w-5 h-5" />
                  <a href="mailto:info@tour-kmv.ru" className="hover:text-islamic-gold transition-colors">info@tour-kmv.ru</a>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="MessageCircle" className="w-5 h-5" />
                  <a href="https://wa.me/79678284699" target="_blank" rel="noopener noreferrer" className="hover:text-islamic-gold transition-colors">WhatsApp / Telegram</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors" aria-label="Instagram">
                  <Icon name="Instagram" fallback="Share2" className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors" aria-label="VKontakte">
                  <Icon name="MessageSquare" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/30 pt-6 text-center text-white/80 text-sm">
            <p className="mb-2">© Тур в Чечню из КМВ, 2024</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Публичная оферта</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
