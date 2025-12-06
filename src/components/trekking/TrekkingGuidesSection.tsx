import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Guide {
  name: string;
  experience: string;
  specialization: string;
  rating: number;
  tours: number;
}

interface TrekkingGuidesSectionProps {
  guides: Guide[];
}

const TrekkingGuidesSection = ({ guides }: TrekkingGuidesSectionProps) => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-muted/30 dark:from-background dark:to-muted/10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
          Наши гиды
        </h2>
        
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide, idx) => (
            <Card key={idx} className="border-2">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{guide.name}</h3>
                <div className="text-sm text-muted-foreground mb-3">{guide.experience}</div>
                <div className="text-sm mb-4">{guide.specialization}</div>
                <div className="flex items-center justify-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Icon name="Star" className="w-4 h-4 text-accent fill-accent" />
                    <span className="font-semibold">{guide.rating}</span>
                  </div>
                  <div className="text-muted-foreground">
                    {guide.tours} походов
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrekkingGuidesSection;
