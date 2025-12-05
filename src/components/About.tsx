import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const features = [
    {
      icon: 'Heart',
      title: 'Любовь к природе',
      description: 'Мы не просто катаем — мы открываем красоту Кавказских гор'
    },
    {
      icon: 'Users',
      title: 'Индивидуальный подход',
      description: 'Подберем лошадь по характеру: спокойную для новичка или энергичную для опытного всадника'
    },
    {
      icon: 'Mountain',
      title: 'Уникальные маршруты',
      description: 'Живописные тропы над Березовским ущельем с захватывающими видами'
    },
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Опытные инструкторы, спокойные лошади и подробный инструктаж'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Наша философия
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Мы не просто катаем, мы открываем природу. Наш конный клуб — это команда единомышленников, 
            которые любят горы и лошадей. Наша цель — дать вам почувствовать гармонию с природой 
            и мощью грациозного животного.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <Card key={idx} className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name={feature.icon} className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
