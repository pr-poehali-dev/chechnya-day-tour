import Icon from '@/components/ui/icon';

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Главная', id: 'home' },
    { label: 'О нас', id: 'about' },
    { label: 'Прогулки', id: 'tours' },
    { label: 'Галерея', id: 'gallery' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Контакты', id: 'contact' }
  ];

  const socialLinks = [
    { icon: 'Instagram', label: 'Instagram', url: '#' },
    { icon: 'MessageCircle', label: 'Telegram', url: '#' },
    { icon: 'Phone', label: 'WhatsApp', url: '#' }
  ];

  return (
    <footer className="bg-gradient-to-b from-muted/30 to-muted border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-3xl">🐎</div>
              <div>
                <h3 className="text-xl font-bold text-foreground">ГОРНЫЙ ГАЛОП</h3>
                <p className="text-sm text-muted-foreground">Конные прогулки в Кисловодске</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Увидь Кавказские горы с седла. Незабываемые прогулки верхом над Березовским ущельем.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors"
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
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Контакты</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Icon name="Phone" className="w-5 h-5 shrink-0 mt-0.5" />
                <a href="tel:+7XXXXXXXXXX" className="hover:text-primary transition-colors">
                  +7 (XXX) XXX-XX-XX
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Mail" className="w-5 h-5 shrink-0 mt-0.5" />
                <a href="mailto:info@gornyy-galop.ru" className="hover:text-primary transition-colors">
                  info@gornyy-galop.ru
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPin" className="w-5 h-5 shrink-0 mt-0.5" />
                <span>Кисловодск, Колоннада</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Горный Галоп, Кисловодск. Конные прогулки в окрестностях Кисловодска.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            {' · '}
            <a href="#" className="hover:text-primary transition-colors">Договор публичной оферты</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
