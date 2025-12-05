import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    { 
      src: 'https://cdn.poehali.dev/files/4d5d62e9-b095-4964-a630-40d0623792a8.jpeg', 
      alt: 'Конная прогулка над Березовским ущельем' 
    },
    { 
      src: 'https://cdn.poehali.dev/projects/67416aab-80dd-49a8-b3bb-c84961b6ace9/files/61bfb01f-1cb7-43ca-8234-6fe2a6fb6c49.jpg', 
      alt: 'Панорама Кавказских гор' 
    },
    { 
      src: 'https://cdn.poehali.dev/projects/67416aab-80dd-49a8-b3bb-c84961b6ace9/files/e95008f6-2d89-4d96-a7e4-986c6557ba9c.jpg', 
      alt: 'Лошади на горной тропе' 
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {heroImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in leading-tight">
          КОННЫЕ ПРОГУЛКИ<br />В СЕРДЦЕ КАВКАЗА
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
          Откройте для себя Кисловодск с новой высоты.<br />
          Прогулки верхом над Березовским ущельем.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg font-bold shadow-2xl"
            onClick={() => scrollToSection('tours')}
          >
            Выбрать маршрут
          </Button>
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-white px-10 py-6 text-lg font-bold shadow-2xl"
            onClick={() => scrollToSection('contact')}
          >
            Забронировать
          </Button>
        </div>

        <div className="flex gap-2 justify-center">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentSlide ? 'bg-secondary w-8' : 'bg-white/50'
              }`}
              aria-label={`Слайд ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
