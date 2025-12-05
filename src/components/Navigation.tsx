import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'about', label: 'О нас' },
    { id: 'tours', label: 'Прогулки' },
    { id: 'gallery', label: 'Галерея' },
    { id: 'faq', label: 'Вопросы' },
    { id: 'contact', label: 'Контакты' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="text-3xl">🐎</div>
            <div>
              <h1 className={`text-2xl font-bold transition-colors ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}>
                ГОРНЫЙ ГАЛОП
              </h1>
              <p className={`text-xs transition-colors ${
                isScrolled ? 'text-muted-foreground' : 'text-white/90'
              }`}>
                Увидь Кавказские горы с седла
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors hover:text-primary ${
                  isScrolled ? 'text-foreground' : 'text-white'
                } ${activeSection === item.id ? 'text-primary' : ''}`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90"
            >
              Забронировать
            </Button>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Icon 
              name={isMobileMenuOpen ? 'X' : 'Menu'} 
              className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`}
            />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2 font-medium transition-colors hover:bg-muted ${
                  activeSection === item.id ? 'text-primary bg-muted' : 'text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-primary hover:bg-primary/90"
              >
                Забронировать
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
