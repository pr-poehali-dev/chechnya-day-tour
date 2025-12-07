import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import SEO from '@/components/SEO';

const ContactsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
  };

  const contacts = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (879) 371-00-00',
      subtitle: 'Ежедневно 08:00-20:00',
      link: 'tel:+78793710000'
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@kislovodsk-kmv.ru',
      subtitle: 'Ответим в течение часа',
      link: 'mailto:info@kislovodsk-kmv.ru'
    },
    {
      icon: 'MessageCircle',
      title: 'Telegram / WhatsApp',
      value: '+7 (999) 888-77-66',
      subtitle: 'Быстрые ответы 24/7',
      link: 'https://t.me/kislovodsk_kmv'
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'г. Кисловодск, Курортный бульвар, 12',
      subtitle: 'Ставропольский край, 357700',
      link: '#'
    }
  ];

  const emergencyServices = [
    { service: 'МЧС', number: '112', icon: 'AlertCircle' },
    { service: 'Скорая помощь', number: '103', icon: 'HeartPulse' },
    { service: 'Полиция', number: '102', icon: 'Shield' }
  ];

  return (
    <>
      <SEO
        title="Контакты - Кисловодск КМВ: телефон, email, адрес, обратная связь"
        description="Свяжитесь с нами: +7 (879) 371-00-00, info@kislovodsk-kmv.ru. Telegram/WhatsApp 24/7. Консультации по отдыху, бронированию, экскурсиям в Кисловодске и КМВ."
        keywords="контакты Кисловодск, телефон туристического центра КМВ, заказ экскурсий Кисловодск, связаться курорт"
      />
      <div className="pt-20">
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="text-6xl mb-6">📞</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Контакты
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Свяжитесь с нами любым удобным способом. Мы всегда на связи!
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Напишите нам</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Иван Петров"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="ivan@example.com"
                    className="mt-1"
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
                    placeholder="+7 (999) 123-45-67"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Сообщение *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Расскажите, чем мы можем вам помочь..."
                    rows={5}
                    className="mt-1"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                  <Icon name="Send" className="w-5 h-5 mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground mb-6">Контактная информация</h2>
              
              <div className="space-y-4">
                {contacts.map((contact, idx) => (
                  <Card key={idx} className="border-2 hover:border-primary transition-colors">
                    <CardContent className="p-6">
                      <a 
                        href={contact.link}
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                          <Icon name={contact.icon} className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground mb-1">{contact.title}</h3>
                          <p className="text-primary font-semibold">{contact.value}</p>
                          <p className="text-sm text-muted-foreground">{contact.subtitle}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-br from-accent to-orange-600 text-white border-0">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Icon name="Clock" className="w-5 h-5" />
                    График работы
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Пн-Вс:</span>
                      <span className="font-bold">08:00 - 20:00</span>
                    </div>
                    <p className="text-sm text-white/90 mt-3">
                      Экскурсии и трансферы по предварительной записи
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-destructive/10 border-2 border-destructive">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-destructive">
                    <Icon name="AlertTriangle" className="w-5 h-5" />
                    Экстренные службы
                  </h3>
                  <div className="space-y-3">
                    {emergencyServices.map((service, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Icon name={service.icon} className="w-5 h-5 text-destructive" />
                          <span className="font-medium">{service.service}</span>
                        </div>
                        <a href={`tel:${service.number.replace(/\D/g, '')}`} className="font-bold text-destructive">
                          {service.number}
                        </a>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Как добраться до нас
            </h2>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=42.4391,43.3529&z=10&l=map"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Карта Эльбрус"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Icon name="Users" className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Следите за нами в соцсетях
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Актуальная информация, красивые фотографии и полезные советы каждый день
            </p>
            <div className="flex gap-4 justify-center">
              {['Instagram', 'MessageCircle', 'Youtube'].map((icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-14 h-14 bg-primary/10 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all hover:scale-110"
                >
                  <Icon name={icon} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default ContactsPage;