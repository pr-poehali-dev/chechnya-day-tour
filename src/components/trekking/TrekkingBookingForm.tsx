import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

type Duration = 'short' | 'medium' | 'long' | 'multiday';

interface TrekkingRoute {
  id: string;
  title: string;
  duration: string;
  category: Duration;
}

interface TrekkingBookingFormProps {
  routes: TrekkingRoute[];
  selectedRoute: string;
  onRouteChange: (routeId: string) => void;
}

const TrekkingBookingForm = ({ routes, selectedRoute, onRouteChange }: TrekkingBookingFormProps) => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-muted/30 to-white dark:from-muted/10 dark:to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2">
            <CardContent className="p-6 sm:p-8 md:p-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
                Забронировать треккинг
              </h2>
              
              <form className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="route">Маршрут *</Label>
                  <select 
                    id="route" 
                    value={selectedRoute}
                    onChange={(e) => onRouteChange(e.target.value)}
                    className="w-full h-10 px-3 border rounded-md bg-background" 
                    required
                  >
                    <option value="">Выберите маршрут</option>
                    {routes.map(route => (
                      <option key={route.id} value={route.id}>
                        {route.title} ({route.duration})
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Дата *</Label>
                    <Input id="date" type="date" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="people">Количество человек *</Label>
                    <select id="people" className="w-full h-10 px-3 border rounded-md bg-background" required>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5+</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="experience-level">Уровень подготовки</Label>
                  <select id="experience-level" className="w-full h-10 px-3 border rounded-md bg-background">
                    <option>Новичок</option>
                    <option>Есть опыт походов в горах</option>
                    <option>Опытный треккер</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="guide-needed">Нужен гид?</Label>
                  <select id="guide-needed" className="w-full h-10 px-3 border rounded-md bg-background">
                    <option>Да, с гидом</option>
                    <option>Нет, самостоятельно</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input id="name" type="text" placeholder="Иван Иванов" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="ivan@example.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="notes">Дополнительная информация</Label>
                  <Textarea id="notes" rows={3} placeholder="Особые пожелания, вопросы о маршруте..." />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Send" className="w-5 h-5 mr-2" />
                  Отправить заявку
                </Button>
                
                <p className="text-xs text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrekkingBookingForm;
