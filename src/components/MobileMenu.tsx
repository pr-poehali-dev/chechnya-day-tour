import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navSections = [
    {
      title: 'Основное',
      items: [
        { path: '/', label: 'Главная', icon: 'Home' },
        { path: '/about', label: 'О курорте', icon: 'Info' },
        { path: '/contacts', label: 'Контакты', icon: 'Phone' }
      ]
    },
    {
      title: 'Чем заняться',
      items: [
        { path: '/activities', label: 'Все активности', icon: 'Compass' },
        { path: '/activities/jeep-tours', label: 'Джип-туры', icon: 'Truck' },
        { path: '/activities/horse-riding', label: 'Конные прогулки', icon: 'Horse' },
        { path: '/activities/quad-bikes', label: 'Квадроциклы', icon: 'Bike' },
        { path: '/activities/trekking', label: 'Треккинг', icon: 'Footprints' },
        { path: '/top-places', label: 'ТОП-5 мест', icon: 'MapPin' },
        { path: '/facts', label: 'Интересные факты', icon: 'Lightbulb' }
      ]
    },
    {
      title: 'Услуги',
      items: [
        { path: '/hotels', label: 'Отели и жильё', icon: 'Hotel' },
        { path: '/restaurants', label: 'Рестораны', icon: 'UtensilsCrossed' },
        { path: '/transfer', label: 'Трансфер', icon: 'Car' }
      ]
    },
    {
      title: 'Сообщество',
      items: [
        { path: '/gallery', label: 'Фотогалерея', icon: 'Image' },
        { path: '/reviews', label: 'Отзывы', icon: 'Star' }
      ]
    }
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 hover:bg-accent/10 rounded-lg transition-colors"
        aria-label="Меню"
      >
        <Icon name={isOpen ? 'X' : 'Menu'} className="w-6 h-6" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 bottom-0 w-80 bg-background z-50 lg:hidden transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⛰️</span>
              <span className="font-bold text-lg">ЭЛЬБРУС</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
            >
              <Icon name="X" className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-6">
              {navSections.map((section, idx) => (
                <div key={idx}>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
                    {section.title}
                  </div>
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                          location.pathname === item.path
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-accent/10'
                        }`}
                      >
                        <Icon name={item.icon} className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 border-t space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Тема оформления</span>
              <ThemeToggle />
            </div>
            <Button className="w-full bg-accent hover:bg-accent/90" size="lg">
              <Icon name="Calendar" className="w-5 h-5 mr-2" />
              Забронировать
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;