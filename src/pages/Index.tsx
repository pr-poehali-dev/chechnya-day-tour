import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    date: '',
    people: '1',
    address: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/img/c97f09ae-8974-4ad1-b4d7-e83774d0f01b.jpg" 
            alt="Мечеть Сердце Чечни" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Экскурсия в Чечню на один день:<br />
            от великих мечетей до небоскрёбов
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Комфортный тур в мини-группе. Забираем от вашего дома в городах КМВ.<br />
            Всё самое главное за один день.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {[
              { icon: 'Bus', title: 'Трансфер от дома', desc: 'Заберём и привезём по адресу' },
              { icon: 'Users', title: 'Группа до 8 человек', desc: 'Индивидуальная атмосфера' },
              { icon: 'Building', title: 'Вся Чечня за день', desc: 'Главные святыни и архитектура' },
              { icon: 'Car', title: 'Комфортный транспорт', desc: 'Внедорожник или минивэн' }
            ].map((item, idx) => (
              <Card key={idx} className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardContent className="pt-6 text-center">
                  <Icon name={item.icon} className="w-10 h-10 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8"
              onClick={() => scrollToSection('program')}
            >
              Посмотреть программу
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/20 backdrop-blur-md border-white/40 text-white hover:bg-white/30"
              onClick={() => scrollToSection('booking')}
            >
              Забронировать место
            </Button>
          </div>
        </div>
      </section>

      <section id="program" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Маршрут путешествия
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            от завтрака до самой большой мечети Европы
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { time: '06:00 - 08:00', title: 'Сбор группы и трансфер', desc: 'Вас забирают от указанного адреса. Комфортная дорога по живописным предгорьям Кавказа.', icon: 'MapPin' },
              { time: '08:00 - 09:00', title: 'Завтрак', desc: 'Остановка в дорожном кафе для полноценного завтрака (оплачивается отдельно).', icon: 'Coffee' },
              { time: '09:30 - 10:30', title: 'Магас: Башня Согласия', desc: 'Знакомство с новой столицей Ингушетии и фото на фоне уникальной башни в стиле хай-тек.', icon: 'Building2' },
              { time: '11:00 - 13:30', title: 'Грозный: "Сердце Чечни"', desc: 'Посещение одной из самых величественных мечетей мира. Осмотр православного храма Михаила Архангела.', icon: 'Church' },
              { time: '13:30 - 14:30', title: 'Обед (по желанию)', desc: 'Возможность попробовать блюда национальной кухни в кафе Грозного.', icon: 'UtensilsCrossed' },
              { time: '14:30 - 15:30', title: '"Грозный Сити"', desc: 'Подъем на смотровую площадку (доп. расход 200 руб.). Панорамные виды на город и мечеть.', icon: 'Building' },
              { time: '16:00 - 16:45', title: 'Аргун: "Сердце Матери"', desc: 'Посещение ультрасовременной мечети, поражающей своим футуристическим дизайном.', icon: 'Heart' },
              { time: '17:30 - 18:30', title: 'Шали: "Гордость Мусульман"', desc: 'Финальный аккорд — самая большая мечеть в Европе, впечатляющая своими масштабами.', icon: 'Star' },
              { time: '18:30', title: 'Возвращение домой', desc: 'Выезд в сторону КМВ. Прибытие к вашим адресам поздно вечером.', icon: 'Home' }
            ].map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="flex gap-6 pt-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={item.icon} className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-secondary mb-1">{item.time}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Узнайте стоимость из вашего города
          </h2>
          
          <div className="max-w-3xl mx-auto mt-12">
            <Card>
              <CardContent className="pt-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 font-semibold">Город отправления</th>
                      <th className="text-right py-4 font-semibold">Стоимость с человека</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { city: 'Кисловодск', price: '6 000 руб.' },
                      { city: 'Ессентуки', price: '5 800 руб.' },
                      { city: 'Пятигорск', price: '5 700 руб.' },
                      { city: 'Минеральные Воды', price: '6 000 руб.' }
                    ].map((item, idx) => (
                      <tr key={idx} className="border-b last:border-0">
                        <td className="py-4">{item.city}</td>
                        <td className="text-right py-4 font-semibold text-primary">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <Icon name="CheckCircle" className="text-primary" />
                    Что включено в стоимость
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="w-4 h-4 text-primary mt-0.5" />
                      <span>Трансфер от/до вашего адреса</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="w-4 h-4 text-primary mt-0.5" />
                      <span>Комфортный проезд на внедорожнике/минивэне</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="w-4 h-4 text-primary mt-0.5" />
                      <span>Сопровождение профессионального гида</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="w-4 h-4 text-primary mt-0.5" />
                      <span>Все экскурсии по программе</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-muted/30">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <Icon name="Info" className="text-muted-foreground" />
                    Оплачивается отдельно
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" className="w-4 h-4 text-muted-foreground mt-0.5" />
                      <span>Питание (завтрак, обед) — от 500 руб.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" className="w-4 h-4 text-muted-foreground mt-0.5" />
                      <span>Смотровая площадка «Грозный Сити» — 200 руб.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Один день — миллион впечатлений
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="md:col-span-2 relative h-80 rounded-lg overflow-hidden group">
              <img 
                src="/img/c97f09ae-8974-4ad1-b4d7-e83774d0f01b.jpg" 
                alt="Мечеть Сердце Чечни" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-white text-2xl font-bold">Мечеть "Сердце Чечни"</h3>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden group">
              <img 
                src="/img/c9e3d576-0dc8-4fee-8167-33625ce654d2.jpg" 
                alt="Грозный Сити" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold">Грозный Сити</h3>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden group">
              <img 
                src="/img/e7c6e25d-f24c-4dba-9de4-111849e938a9.jpg" 
                alt="Комфортный транспорт" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold">Комфортный минивэн</h3>
              </div>
            </div>
            <div className="md:col-span-2 relative h-80 rounded-lg overflow-hidden group">
              <img 
                src="/img/c9e3d576-0dc8-4fee-8167-33625ce654d2.jpg" 
                alt="Панорама города" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-white text-2xl font-bold">Виды Грозного</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Важно знать перед бронированием
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: 'Users', title: 'Размер группы', desc: 'до 8 человек. Это гарантирует комфорт и индивидуальный подход.' },
              { icon: 'Car', title: 'Транспорт', desc: 'Вместительный внедорожник или минивэн с кондиционером.' },
              { icon: 'Backpack', title: 'Что взять с собой', desc: 'Паспорт (обязательно!), удобную обувь, воду, деньги на личные расходы.' },
              { icon: 'Info', title: 'Важно', desc: 'Для посещения мечетей женщинам желательно иметь платок (можно взять на месте).' },
              { icon: 'Clock', title: 'Продолжительность', desc: 'Весь тур занимает около 15-16 часов.' },
              { icon: 'Shield', title: 'Безопасность', desc: 'Опытный гид и комфортный маршрут. Все районы безопасны для туристов.' }
            ].map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <Icon name={item.icon} className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Частые вопросы
          </h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { q: 'Точно меня заберут от моего адреса?', a: 'Да! Мы осуществляем трансфер по адресу вашего проживания (отель, квартира) в пределах Кисловодска, Ессентуков, Пятигорска и Минеральных Вод.' },
                { q: 'Нужен ли паспорт?', a: 'Да, оригинал паспорта обязателен для пересечения границы субъектов РФ.' },
                { q: 'Сколько всего мы проедем за день?', a: 'Общий километраж около 500-600 км. Дорога комфортная, с остановками.' },
                { q: 'Можно ли с детьми?', a: 'Да, дети от 7 лет допускаются в сопровождении взрослых.' },
                { q: 'Как происходит оплата?', a: 'Предоплата 50% онлайн для бронирования места, остальное — гиду в день экскурсии.' }
              ].map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Забронируйте ваше место в мини-группе
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Заполните форму и мы свяжемся с вами для подтверждения
          </p>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя и Фамилия *</Label>
                    <Input 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      required
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">Город отправления *</Label>
                    <Select required value={formData.city} onValueChange={(val) => setFormData({...formData, city: val})}>
                      <SelectTrigger id="city">
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
                    <Label htmlFor="people">Количество человек *</Label>
                    <Select required value={formData.people} onValueChange={(val) => setFormData({...formData, people: val})}>
                      <SelectTrigger id="people">
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
                  <Label htmlFor="date">Предпочтительная дата *</Label>
                  <Input 
                    id="date" 
                    type="date" 
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Адрес для трансфера</Label>
                  <Input 
                    id="address" 
                    placeholder="Укажите точный адрес или название отеля"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Забронировать со скидкой 50%
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Чечня за один день</h3>
              <p className="text-white/80">Комфортные мини-группы. Вас заберут от дома.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="w-4 h-4" />
                  <a href="tel:+79678284699" className="hover:text-white transition-colors">+7 (967) 828-46-99</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="w-4 h-4" />
                  <a href="mailto:info@tour-kmv.ru" className="hover:text-white transition-colors">info@tour-kmv.ru</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="Instagram" className="w-5 h-5" fallback="Share2" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="MessageCircle" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
            <p>© Тур в Чечню из КМВ, 2024</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
