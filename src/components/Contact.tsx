import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    tour: '',
    people: '1',
    comment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Новая заявка на конную прогулку!\n\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nДата: ${formData.date}\nМаршрут: ${formData.tour}\nКоличество человек: ${formData.people}\nКомментарий: ${formData.comment}`;
    const whatsappUrl = `https://wa.me/79999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (XXX) XXX-XX-XX',
      link: 'tel:+7XXXXXXXXXX'
    },
    {
      icon: 'MessageCircle',
      title: 'WhatsApp / Telegram',
      value: '+7 (XXX) XXX-XX-XX',
      link: 'https://wa.me/79999999999'
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@gornyy-galop.ru',
      link: 'mailto:info@gornyy-galop.ru'
    },
    {
      icon: 'MapPin',
      title: 'Место встречи',
      value: 'Кисловодск, Колоннада (Центральный вход в парк)',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Бронирование и контакты
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Прогулки проходят ежедневно по предварительной записи.<br />
            Количество мест в группе ограничено.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Форма бронирования</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Ваше имя *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Иван Иванов"
                />
              </div>

              <div>
                <Label htmlFor="phone">Телефон *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+7 (999) 999-99-99"
                />
              </div>

              <div>
                <Label htmlFor="date">Желаемая дата *</Label>
                <Input
                  id="date"
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="tour">Выберите маршрут *</Label>
                <Select 
                  required
                  value={formData.tour}
                  onValueChange={(value) => setFormData({...formData, tour: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите маршрут" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2h">Знакомство с горами (2 часа)</SelectItem>
                    <SelectItem value="3h">Глубина ущелья (3 часа)</SelectItem>
                    <SelectItem value="individual">Индивидуальный поход</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="people">Количество человек *</Label>
                <Select 
                  required
                  value={formData.people}
                  onValueChange={(value) => setFormData({...formData, people: value})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? 'человек' : 'человека'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="comment">Комментарий</Label>
                <Textarea
                  id="comment"
                  value={formData.comment}
                  onChange={(e) => setFormData({...formData, comment: e.target.value})}
                  placeholder="Особые пожелания или вопросы..."
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                Отправить заявку
              </Button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Контактная информация</h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, idx) => (
                <Card key={idx} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="pt-6">
                    <a 
                      href={info.link}
                      className="flex items-start gap-4 hover:text-primary transition-colors"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                        <Icon name={info.icon} className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{info.title}</h4>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h4 className="font-bold mb-4 text-foreground">График работы</h4>
              <p className="text-muted-foreground mb-2">Ежедневно: 08:00 - 20:00</p>
              <p className="text-sm text-muted-foreground">Прогулки проходят по предварительной записи</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
