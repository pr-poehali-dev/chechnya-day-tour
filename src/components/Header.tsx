import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import MobileMenu from './MobileMenu';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/about', label: 'О курорте' },
    { path: '/activities', label: 'Активности' },
    { path: '/hotels', label: 'Отели' },
    { path: '/restaurants', label: 'Рестораны' },
    { path: '/gallery', label: 'Галерея' },
    { path: '/reviews', label: 'Отзывы' },
    { path: '/contacts', label: 'Контакты' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-3xl md:text-4xl">⛰️</span>
            <div>
              <h1
                className={`text-xl md:text-2xl font-bold transition-colors ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                ЭЛЬБРУС
              </h1>
              <p
                className={`text-xs transition-colors hidden sm:block ${
                  isScrolled ? 'text-muted-foreground' : 'text-white/90'
                }`}
              >
                Всесезонный горный курорт
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-primary bg-primary/10'
                    : isScrolled
                    ? 'text-foreground hover:text-primary hover:bg-accent/10'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <ThemeToggle />
            </div>
            <Button className="hidden md:flex bg-accent hover:bg-accent/90" size="sm">
              Забронировать
            </Button>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;