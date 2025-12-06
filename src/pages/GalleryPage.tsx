import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

type Category = 'all' | 'nature' | 'winter' | 'summer' | 'infrastructure' | 'activities';

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const categories = [
    { id: 'all' as Category, label: 'Все фото', icon: 'Image' },
    { id: 'nature' as Category, label: 'Природа', icon: 'Trees' },
    { id: 'winter' as Category, label: 'Зимний Эльбрус', icon: 'Snowflake' },
    { id: 'summer' as Category, label: 'Летний Эльбрус', icon: 'Sun' },
    { id: 'infrastructure' as Category, label: 'Инфраструктура', icon: 'Building' },
    { id: 'activities' as Category, label: 'Активный отдых', icon: 'Bike' }
  ];

  const photos = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070',
      title: 'Эльбрус зимой',
      author: 'Иван Петров',
      category: ['nature', 'winter'],
      likes: 234
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070',
      title: 'Канатная дорога',
      author: 'Мария Смирнова',
      category: ['infrastructure', 'winter'],
      likes: 189
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?q=80&w=2052',
      title: 'Горные лыжи',
      author: 'Алексей Кузнецов',
      category: ['activities', 'winter'],
      likes: 312
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=2076',
      title: 'Летний треккинг',
      author: 'Елена Волкова',
      category: ['activities', 'summer'],
      likes: 156
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070',
      title: 'Водопад в горах',
      author: 'Дмитрий Соколов',
      category: ['nature', 'summer'],
      likes: 278
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=2070',
      title: 'Снегоходы на склоне',
      author: 'Сергей Морозов',
      category: ['activities', 'winter'],
      likes: 201
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070',
      title: 'Отель у гор',
      author: 'Ольга Белова',
      category: ['infrastructure'],
      likes: 143
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b?q=80&w=2069',
      title: 'Джип-тур',
      author: 'Павел Новиков',
      category: ['activities', 'summer'],
      likes: 167
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1571019613576-2b22c76fd955?q=80&w=2070',
      title: 'Термальные источники',
      author: 'Анна Романова',
      category: ['activities', 'nature'],
      likes: 192
    },
    {
      id: 10,
      url: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070',
      title: 'Велотуризм в горах',
      author: 'Максим Федоров',
      category: ['activities', 'summer'],
      likes: 145
    },
    {
      id: 11,
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070',
      title: 'Рассвет на Эльбрусе',
      author: 'Виктория Лебедева',
      category: ['nature', 'summer'],
      likes: 298
    },
    {
      id: 12,
      url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070',
      title: 'Вид с канатки',
      author: 'Игорь Козлов',
      category: ['infrastructure', 'nature'],
      likes: 221
    }
  ];

  const filteredPhotos = activeCategory === 'all'
    ? photos
    : photos.filter(photo => photo.category.includes(activeCategory));

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % filteredPhotos.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  return (
    <div className="pt-16 md:pt-20">
      <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">📸</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Фотогалерея Эльбруса
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Лучшие фотографии курорта и окрестностей от наших гостей
          </p>
          <div className="text-sm sm:text-base text-white/80">
            Главная → Фотогалерея
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8 sm:mb-12">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                variant={activeCategory === cat.id ? 'default' : 'outline'}
                size="sm"
                className={`transition-all ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white scale-105'
                    : 'hover:scale-105'
                }`}
              >
                <Icon name={cat.icon} className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">{cat.label}</span>
                <span className="sm:hidden">{cat.label.split(' ')[0]}</span>
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredPhotos.map((photo, idx) => (
              <Card
                key={photo.id}
                className="group overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={() => openLightbox(idx)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-bold text-base sm:text-lg mb-1">
                        {photo.title}
                      </h3>
                      <div className="flex items-center justify-between text-white/90 text-xs sm:text-sm">
                        <span>📷 {photo.author}</span>
                        <span className="flex items-center gap-1">
                          <Icon name="Heart" className="w-4 h-4" />
                          {photo.likes}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-muted-foreground mb-2">
                Фотографий не найдено
              </h3>
              <p className="text-muted-foreground">
                Попробуйте выбрать другую категорию
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-muted/30 to-white dark:from-muted/10 dark:to-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto border-2 border-primary">
            <div className="p-6 sm:p-8 md:p-10 text-center">
              <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">📤</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Добавьте свои фотографии
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
                Поделитесь своими впечатлениями от отдыха на Эльбрусе. 
                Лучшие фото будут опубликованы в галерее!
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Upload" className="w-5 h-5 mr-2" />
                Загрузить фотографии
              </Button>
              <p className="text-xs sm:text-sm text-muted-foreground mt-4">
                Принимаются файлы JPG, PNG до 10 МБ
              </p>
            </div>
          </Card>
        </div>
      </section>

      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors z-10"
            aria-label="Закрыть"
          >
            <Icon name="X" className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-2 sm:left-4 text-white p-2 sm:p-3 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Предыдущее фото"
          >
            <Icon name="ChevronLeft" className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <div className="max-w-6xl w-full max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredPhotos[currentImage].url}
              alt={filteredPhotos[currentImage].title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-white mt-4 text-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                {filteredPhotos[currentImage].title}
              </h3>
              <p className="text-sm sm:text-base text-white/80">
                Автор: {filteredPhotos[currentImage].author} • {filteredPhotos[currentImage].likes} ❤️
              </p>
              <p className="text-xs sm:text-sm text-white/60 mt-2">
                {currentImage + 1} из {filteredPhotos.length}
              </p>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-2 sm:right-4 text-white p-2 sm:p-3 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Следующее фото"
          >
            <Icon name="ChevronRight" className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
