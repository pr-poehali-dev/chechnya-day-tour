import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    date: '',
    people: '1'
  });

  const heroImages = [
    { src: '/img/75a7501b-cb81-4ee7-b206-7f15e65132f8.jpg', alt: 'Панорама Домбая' },
    { src: '/img/1105052e-04c0-4574-ab3c-900536dad784.jpg', alt: 'Шоанинский храм' },
    { src: '/img/7356c587-3891-48e3-a723-88df0ca571f9.jpg', alt: 'Река Уллу-Муруджу' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking:', formData);
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in leading-tight">
            Домбай: Путешествие в Сердце Гор из КМВ
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-95">
            Однодневный тур на высоту 1750 метров. Захватывающие дух пейзажи,<br />
            древние храмы и чистейший горный воздух.
          </p>

          <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto mb-12">
            {[
              { icon: 'Clock', label: '10-12 часов', desc: 'Продуманный маршрут' },
              { icon: 'Car', label: 'Комфортный трансфер', desc: 'От вашего адреса' },
              { icon: 'User', label: 'Профессиональный гид', desc: 'Полная безопасность' },
              { icon: 'Mountain', label: 'Невероятные локации', desc: 'От храмов до канатки' },
              { icon: 'Users', label: 'До 8 человек', desc: 'Малые группы' }
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

          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg font-bold shadow-2xl"
            onClick={() => scrollToSection('booking')}
          >
            Забронировать экскурсию
          </Button>

          <div className="flex gap-2 justify-center mt-8">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Ваш день в Домбае
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Детальная программа путешествия с временной шкалой
          </p>

          <div className="max-w-5xl mx-auto space-y-8">
            {[
              {
                time: '06:00 - 07:00',
                title: 'Ранний выезд',
                desc: 'Встреча с гидом, комфортабельный внедорожник или минивэн забирает вас прямо от дома. Начинаем наше путешествие.',
                icon: 'Sunrise',
                color: 'bg-orange-500'
              },
              {
                time: '07:30',
                title: 'Перевал Гум-Баши',
                subtitle: 'Панорама Главного Кавказского Хребта',
                desc: 'Первая и незабываемая остановка на высоте. С идеальной смотровой площадки вам откроется величественный вид на Эльбрус и весь Кавказский хребет как на ладони.',
                icon: 'Mountain',
                color: 'bg-primary',
                img: '/img/75a7501b-cb81-4ee7-b206-7f15e65132f8.jpg'
              },
              {
                time: '08:30',
                title: 'Сырные пещеры',
                subtitle: 'Самая необычная фотолокация',
                desc: 'Причудливые скальные образования, которые действительно напоминают гигантский сыр «Маасдам» с его крупными дырками. Идеально для креативных фото!',
                icon: 'Camera',
                color: 'bg-gold'
              },
              {
                time: '09:30',
                title: 'Шоанинский храм',
                subtitle: 'Прикосновение к истории X века',
                desc: 'Древний христианский храм на вершине горы Шоана. Место с мощной энергетикой и историей. Возможность поставить свечку, ударить в колокол и насладиться невероятным видом.',
                icon: 'Church',
                color: 'bg-secondary',
                img: '/img/1105052e-04c0-4574-ab3c-900536dad784.jpg'
              },
              {
                time: '10:30',
                title: 'Окрестности Теберды',
                subtitle: 'Дорога через сказочный лес',
                desc: 'Путь через живописнейшую дорогу, пролегающую по дну огромной межгорной котловины. Склоны, покрытые густым хвойным лесом.',
                icon: 'Trees',
                color: 'bg-green-700'
              },
              {
                time: '11:30',
                title: 'Река Уллу-Муруджу',
                subtitle: 'Сила и чистота горной воды',
                desc: 'Одна из самых чистых рек России. Бирюзовые воды, рожденные в ледниках, обладают целебными свойствами благодаря природным залежам серебра.',
                icon: 'Waves',
                color: 'bg-turquoise',
                img: '/img/7356c587-3891-48e3-a723-88df0ca571f9.jpg'
              },
              {
                time: '12:30 - 16:00',
                title: 'Курорт Домбай',
                subtitle: 'Свобода и полет над облаками',
                desc: 'Кульминация путешествия! Канатные дороги над тайгой, прогулка по поселку, обед в кафе (доп. оплата), покупка сувениров. Свободное время для ваших впечатлений.',
                icon: 'Cable',
                color: 'bg-blue-600'
              },
              {
                time: '16:00',
                title: 'Возвращение домой',
                desc: 'Выезд обратно на КМВ. Прибытие к вашим адресам вечером.',
                icon: 'Home',
                color: 'bg-purple-600'
              }
            ].map((item, idx) => (
              <div key={idx} className="relative flex gap-6 group">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon name={item.icon} className="w-8 h-8" />
                  </div>
                  {idx < 7 && <div className="w-1 h-full bg-gradient-to-b from-primary/30 to-transparent mt-2"></div>}
                </div>

                <Card className="flex-1 hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1">
                        <div className="text-sm font-bold text-primary mb-2">{item.time}</div>
                        <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                        {item.subtitle && (
                          <p className="text-lg text-gold font-semibold mb-3">{item.subtitle}</p>
                        )}
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Стоимость и условия
          </h2>

          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-turquoise p-6 text-white">
                <h3 className="text-2xl font-bold text-center">Стоимость экскурсии с человека</h3>
              </div>
              <CardContent className="pt-8">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-primary/20">
                      <th className="text-left py-4 text-lg font-bold">Город выезда</th>
                      <th className="text-right py-4 text-lg font-bold">Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { city: 'Кисловодск', price: '3 700 руб.' },
                      { city: 'Ессентуки', price: '3 700 руб.' },
                      { city: 'Железноводск', price: '4 000 руб.' },
                      { city: 'Минеральные Воды', price: '4 500 руб.' }
                    ].map((item, idx) => (
                      <tr key={idx} className="border-b hover:bg-muted/30 transition-colors">
                        <td className="py-4 font-medium">{item.city}</td>
                        <td className="text-right py-4 text-xl font-bold text-primary">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-green-50 border-2 border-primary/30">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
                    <Icon name="CheckCircle" className="w-6 h-6" />
                    Что включено
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Трансфер от/до вашего адреса в городах КМВ',
                      'Услуги профессионального гида-водителя',
                      'Транспорт на комфортабельном внедорожнике/минивэне',
                      'Все остановки и экскурсии по программе'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon name="Check" className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-amber-50 border-2 border-gold/30">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: '#FFD700' }}>
                    <Icon name="AlertCircle" className="w-6 h-6" />
                    Оплачивается отдельно
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Канатная дорога на Домбае (от ~600 руб./чел.)',
                      'Питание (обед в кафе)'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon name="Circle" className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#FFD700' }} />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6 bg-blue-50 border-2 border-turquoise/30">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-turquoise">
                  <Icon name="Info" className="w-6 h-6" />
                  Важная информация
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-start gap-2">
                    <Icon name="Users" className="w-5 h-5 text-turquoise flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Размер группы</p>
                      <p className="text-muted-foreground">до 8 человек</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Clock" className="w-5 h-5 text-turquoise flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Длительность</p>
                      <p className="text-muted-foreground">10-12 часов</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Backpack" className="w-5 h-5 text-turquoise flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Возьмите с собой</p>
                      <p className="text-muted-foreground">Удобную обувь, куртку, воду</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Забронируйте место в группе
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
                        <SelectItem value="kislovodsk">Кисловодск (3700₽)</SelectItem>
                        <SelectItem value="essentuki">Ессентуки (3700₽)</SelectItem>
                        <SelectItem value="zheleznovodsk">Железноводск (4000₽)</SelectItem>
                        <SelectItem value="minvody">Минеральные Воды (4500₽)</SelectItem>
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
                  <Label htmlFor="date" className="text-base font-semibold">Желаемая дата *</Label>
                  <Input 
                    id="date" 
                    type="date" 
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="h-12"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-turquoise hover:opacity-90 transition-opacity"
                >
                  Отправить заявку
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary to-turquoise text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Экскурсии на Домбай</h3>
              <p className="text-white/90">Незабываемые путешествия в горы из городов КМВ</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Контакты</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Icon name="Phone" className="w-5 h-5" />
                  <a href="tel:+79999999999" className="hover:text-gold transition-colors">+7 (999) 999-99-99</a>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Mail" className="w-5 h-5" />
                  <a href="mailto:info@dombay-tour.ru" className="hover:text-gold transition-colors">info@dombay-tour.ru</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Icon name="Instagram" fallback="Share2" className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Icon name="MessageCircle" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/30 pt-6 text-center text-white/80">
            <p>© Экскурсии на Домбай из КМВ, 2024</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
