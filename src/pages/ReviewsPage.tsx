import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const ReviewsPage = () => {
  const [sortBy, setSortBy] = useState<'newest' | 'highest' | 'lowest'>('newest');
  const [filterType, setFilterType] = useState<'all' | 'hotels' | 'activities' | 'restaurants'>('all');
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const reviews = [
    {
      id: 1,
      author: 'Анна Смирнова',
      avatar: '👩‍💼',
      date: '15 января 2024',
      rating: 5,
      title: 'Незабываемый отдых!',
      text: 'Отдыхали на Эльбрусе с 3 по 10 января. Погода была отличная, снега много. Особенно понравился джип-тур в Чегемское ущелье - невероятные виды! Отель "Вершина" превзошел все ожидания: чистые номера, вкусная еда, внимательный персонал. Обязательно вернемся!',
      tags: ['Отель "Вершина"', 'Джип-туры', 'Семейный отдых'],
      type: 'hotels',
      helpful: 24,
      photos: 3
    },
    {
      id: 2,
      author: 'Дмитрий Козлов',
      avatar: '👨‍💻',
      date: '10 января 2024',
      rating: 5,
      title: 'Лучший горнолыжный курорт!',
      text: 'Катаюсь на лыжах уже 15 лет, объездил много курортов. Эльбрус - один из лучших! Трассы отлично подготовлены, очередей на подъемники почти нет. Фрирайд-зоны просто огонь! Единственный минус - на вершине иногда очень ветрено, но это горы. Рекомендую!',
      tags: ['Горные лыжи', 'Фрирайд'],
      type: 'activities',
      helpful: 18,
      photos: 5
    },
    {
      id: 3,
      author: 'Елена Волкова',
      avatar: '👩‍🎓',
      date: '8 января 2024',
      rating: 4,
      title: 'Отличное место для активного отдыха',
      text: 'Первый раз на Эльбрусе, очень понравилось! Брали экскурсию к водопадам - это что-то невероятное. Гид очень интересно рассказывал об истории и природе региона. Из минусов: дороговато, но оно того стоит. Планируем вернуться летом на треккинг.',
      tags: ['Экскурсии', 'Водопады', 'Природа'],
      type: 'activities',
      helpful: 15,
      photos: 4
    },
    {
      id: 4,
      author: 'Михаил Петров',
      avatar: '👨‍🔧',
      date: '5 января 2024',
      rating: 5,
      title: 'Кафе "Ай" - must visit!',
      text: 'Поднялись на канатке на Чегет специально в кафе "Ай". Шашлык просто божественный! Атмосфера уютная, персонал приветливый, а вид на Эльбрус - это отдельная история. Цены умеренные. Всем советую!',
      tags: ['Кафе "Ай"', 'Кухня', 'Чегет'],
      type: 'restaurants',
      helpful: 31,
      photos: 2
    },
    {
      id: 5,
      author: 'Ольга Новикова',
      avatar: '👩‍⚕️',
      date: '3 января 2024',
      rating: 4,
      title: 'Красиво, но есть нюансы',
      text: 'Природа потрясающая, виды захватывающие! Отель хороший, но wi-fi слабый - для тех, кто работает удаленно, это проблема. Также стоит учитывать акклиматизацию - первые дни была одышка. В целом отдых удался.',
      tags: ['Отель', 'Акклиматизация'],
      type: 'hotels',
      helpful: 12,
      photos: 6
    },
    {
      id: 6,
      author: 'Сергей Морозов',
      avatar: '👨‍🚀',
      date: '1 января 2024',
      rating: 5,
      title: 'Встретили Новый год на высоте!',
      text: 'Организовали встречу Нового года в отеле на Эльбрусе - это было потрясающе! Праздничный ужин, шампанское под звёздным небом, фейерверк на фоне заснеженных вершин. Незабываемые впечатления! Спасибо организаторам!',
      tags: ['Новый год', 'Праздники', 'Отель'],
      type: 'hotels',
      helpful: 28,
      photos: 8
    }
  ];

  const stats = {
    overall: 4.7,
    total: 1234,
    distribution: {
      5: 65,
      4: 22,
      3: 8,
      2: 3,
      1: 2
    }
  };

  const filteredReviews = reviews.filter(review => {
    if (filterType === 'all') return true;
    return review.type === filterType;
  });

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    if (sortBy === 'highest') {
      return b.rating - a.rating;
    }
    return a.rating - b.rating;
  });

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
          <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">⭐</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Отзывы об отдыхе на Эльбрусе
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Истории наших гостей о приключениях в горах
          </p>
          <div className="text-sm sm:text-base text-white/80">
            Главная → Отзывы
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto mb-8 sm:mb-12 border-2">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="text-center md:text-left">
                  <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary mb-2">
                    {stats.overall}
                  </div>
                  <div className="flex gap-1 mb-2 justify-center md:justify-start">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon
                        key={star}
                        name="Star"
                        className={`w-5 h-5 sm:w-6 sm:h-6 ${
                          star <= Math.round(stats.overall)
                            ? 'text-accent fill-accent'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    на основе {stats.total} отзывов
                  </p>
                </div>

                <div className="flex-1 w-full space-y-2">
                  {Object.entries(stats.distribution)
                    .reverse()
                    .map(([stars, percent]) => (
                      <div key={stars} className="flex items-center gap-3">
                        <span className="text-sm font-medium w-12 text-right">
                          {stars} ★
                        </span>
                        <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-accent rounded-full transition-all"
                            style={{ width: `${percent}%` }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground w-12">
                          {percent}%
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="flex-1 h-10 px-3 border rounded-md bg-background"
              >
                <option value="newest">Сначала новые</option>
                <option value="highest">Сначала с высоким рейтингом</option>
                <option value="lowest">Сначала с низким рейтингом</option>
              </select>

              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value as any)}
                className="flex-1 h-10 px-3 border rounded-md bg-background"
              >
                <option value="all">Все отзывы</option>
                <option value="hotels">Об отелях</option>
                <option value="activities">Об активностях</option>
                <option value="restaurants">О ресторанах</option>
              </select>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {sortedReviews.map((review) => (
              <Card key={review.id} className="border-2 hover:border-primary transition-all hover:shadow-xl">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center text-2xl sm:text-3xl">
                        {review.avatar}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="font-bold text-base sm:text-lg text-foreground">
                            {review.author}
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {review.date}
                          </p>
                        </div>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Icon
                              key={star}
                              name="Star"
                              className={`w-4 h-4 sm:w-5 sm:h-5 ${
                                star <= review.rating
                                  ? 'text-accent fill-accent'
                                  : 'text-muted-foreground'
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                        {review.title}
                      </h4>
                      <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                        {review.text}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {review.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {review.photos > 0 && (
                        <div className="flex items-center gap-4 text-xs sm:text-sm text-muted-foreground mb-4">
                          <span className="flex items-center gap-1">
                            <Icon name="Image" className="w-4 h-4" />
                            {review.photos} фото
                          </span>
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <Button variant="outline" size="sm" className="w-full sm:w-auto">
                          <Icon name="ThumbsUp" className="w-4 h-4 mr-2" />
                          Полезно ({review.helpful})
                        </Button>
                        <Button variant="ghost" size="sm" className="w-full sm:w-auto">
                          <Icon name="MessageCircle" className="w-4 h-4 mr-2" />
                          Ответить
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-muted/30 to-white dark:from-muted/10 dark:to-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto border-2">
            <CardContent className="p-6 sm:p-8 md:p-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8 text-center">
                Оставьте свой отзыв
              </h2>

              <form className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input id="name" placeholder="Иван Иванов" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ivan@example.com"
                      required
                    />
                    <p className="text-xs text-muted-foreground">
                      Не публикуется
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Оценка *</Label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        className="transition-transform hover:scale-125"
                      >
                        <Icon
                          name="Star"
                          className={`w-8 h-8 sm:w-10 sm:h-10 ${
                            star <= (hoveredRating || rating)
                              ? 'text-accent fill-accent'
                              : 'text-muted-foreground'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title">Заголовок отзыва *</Label>
                  <Input
                    id="title"
                    placeholder="Незабываемый отдых на Эльбрусе"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="text">Текст отзыва *</Label>
                  <Textarea
                    id="text"
                    rows={6}
                    placeholder="Расскажите о вашем опыте..."
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Категория</Label>
                  <select id="category" className="w-full h-10 px-3 border rounded-md">
                    <option>Общий отзыв</option>
                    <option>Об отеле</option>
                    <option>Об активности</option>
                    <option>О ресторане</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="photos">Фотографии</Label>
                  <Input
                    id="photos"
                    type="file"
                    multiple
                    accept="image/*"
                    className="cursor-pointer"
                  />
                  <p className="text-xs text-muted-foreground">
                    До 5 фото, не более 10 МБ каждое
                  </p>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Icon name="Send" className="w-5 h-5 mr-2" />
                  Отправить отзыв
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Отзыв будет опубликован после модерации
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage;
