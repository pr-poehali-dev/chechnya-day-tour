import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import WeatherWidget from '@/components/WeatherWidget';

const Footer = () => {
  const navLinks = [
    { label: 'О Кисловодске', path: '/about' },
    { label: 'Чем заняться', path: '/activities' },
    { label: 'Где остановиться', path: '/hotels' },
    { label: 'Где поесть', path: '/restaurants' },
    { label: 'Культура и досуг', path: '/culture' },
    { label: 'Контакты', path: '/contacts' }
  ];

  const socialLinks = [
    { icon: 'MessageCircle', label: 'Telegram', url: 'https://t.me/kislovodsk_kmv' },
    { icon: 'Youtube', label: 'Дзен', url: '#' },
    { icon: 'Instagram', label: 'VK', url: 'https://vk.com/kislovodsk' }
  ];

  return (
    <footer className="bg-gradient-to-b from-muted/30 to-primary/10 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 text-center">
            Погода в Кисловодске
          </h3>
          <div className="max-w-md mx-auto">
            <WeatherWidget />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-8 mt-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-3xl">🌳</div>
              <div>
                <h3 className="text-xl font-bold text-primary">КИСЛОВОДСК</h3>
                <p className="text-xs text-muted-foreground">Город-курорт</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Жемчужина Кавказских Минеральных Вод. Здравница с уникальным климатом, целебными нарзанами и знаменитым парком.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all"
                  aria-label={social.label}
                >
                  <Icon name={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Навигация</h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 3).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">&nbsp;</h4>
            <ul className="space-y-2">
              {navLinks.slice(3).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Контакты</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Icon name="Phone" className="w-5 h-5 shrink-0 mt-0.5" />
                <a href="tel:+78793972345" className="hover:text-primary transition-colors">
                  +7 (879) 397-23-45
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Mail" className="w-5 h-5 shrink-0 mt-0.5" />
                <a href="mailto:info@kislovodsk-kmv.ru" className="hover:text-primary transition-colors">
                  info@kislovodsk-kmv.ru
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPin" className="w-5 h-5 shrink-0 mt-0.5" />
                <span>Ставропольский край, г. Кисловодск</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Отдых в Кисловодске. Все права защищены.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            {' · '}
            <a href="#" className="hover:text-primary transition-colors">Публичная оферта</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;