import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const TrekkingEquipmentSection = () => {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Треккинг в Приэльбрусье</h2>
      <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
        Приэльбрусье предлагает маршруты для любого уровня подготовки — от простых прогулок 
        к водопадам до многодневных походов и технических восхождений на Эльбрус. Живописные 
        ущелья, альпийские луга, ледники и панорамные виды ждут вас!
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-2 border-primary/20">
          <CardContent className="p-6">
            <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
              <Icon name="Backpack" className="w-5 h-5 text-primary" />
              Базовое снаряжение:
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                'Треккинговые ботинки с поддержкой голеностопа',
                'Треккинговые палки (обязательно)',
                'Рюкзак 30-50 литров',
                'Мембранная куртка от дождя/ветра',
                'Теплая флисовая кофта',
                'Головной убор и солнцезащитные очки',
                'Вода (минимум 1.5 литра)',
                'Перекус (энергетические батончики, орехи)'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Icon name="Check" className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary/20">
          <CardContent className="p-6">
            <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
              <Icon name="Info" className="w-5 h-5 text-primary" />
              Советы для новичков:
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                'Начинайте с простых маршрутов для акклиматизации',
                'Не торопитесь — горы требуют своего темпа',
                'Пейте воду регулярно, даже если не хочется',
                'Соблюдайте правила безопасности',
                'Проверьте прогноз погоды перед выходом',
                'Сообщите кому-то о своем маршруте',
                'Не сходите с размеченных троп',
                'Уважайте природу — не оставляйте мусор'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Icon name="AlertCircle" className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TrekkingEquipmentSection;
