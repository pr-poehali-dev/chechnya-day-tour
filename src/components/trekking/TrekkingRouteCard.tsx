import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

type Difficulty = 'easy' | 'medium' | 'hard' | 'expert';

interface TrekkingRoute {
  id: string;
  title: string;
  description: string;
  duration: string;
  distance: string;
  elevation: string;
  difficulty: Difficulty;
  category: string;
  highlights: string[];
  equipment: string[];
  bestSeason: string;
  guideRequired: boolean;
  price: string;
  image: string;
}

interface TrekkingRouteCardProps {
  route: TrekkingRoute;
  onSelect: (id: string) => void;
}

const getDifficultyColor = (difficulty: Difficulty): string => {
  switch (difficulty) {
    case 'easy': return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
    case 'medium': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300';
    case 'hard': return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
    case 'expert': return 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300';
  }
};

const getDifficultyText = (difficulty: Difficulty): string => {
  switch (difficulty) {
    case 'easy': return 'Легкий';
    case 'medium': return 'Средний';
    case 'hard': return 'Сложный';
    case 'expert': return 'Экспертный';
  }
};

const TrekkingRouteCard = ({ route, onSelect }: TrekkingRouteCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={route.image}
          alt={route.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${getDifficultyColor(route.difficulty)}`}>
          {getDifficultyText(route.difficulty)}
        </span>
        {route.guideRequired && (
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
            Требуется гид
          </span>
        )}
      </div>
      
      <CardContent className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold mb-3">{route.title}</h3>
        
        <div className="grid grid-cols-3 gap-2 mb-4 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Icon name="Clock" className="w-4 h-4" />
            <span>{route.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="Route" className="w-4 h-4" />
            <span>{route.distance}</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="TrendingUp" className="w-4 h-4" />
            <span>{route.elevation}</span>
          </div>
        </div>
        
        <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
          {route.description}
        </p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">Основные точки:</h4>
          <div className="flex flex-wrap gap-2">
            {route.highlights.map((highlight, idx) => (
              <span key={idx} className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
                {highlight}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4 p-3 bg-muted/50 rounded-lg">
          <div className="text-xs font-semibold mb-2">Сезон: {route.bestSeason}</div>
          <div className="text-xs text-muted-foreground">
            Снаряжение: {route.equipment.slice(0, 2).join(', ')}
            {route.equipment.length > 2 && ` +${route.equipment.length - 2}`}
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t">
          <div>
            <div className="text-xl sm:text-2xl font-bold text-primary">{route.price}</div>
          </div>
          <Button 
            onClick={() => onSelect(route.id)}
            className="bg-primary hover:bg-primary/90"
          >
            <Icon name="Calendar" className="w-4 h-4 mr-2" />
            Забронировать
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrekkingRouteCard;
