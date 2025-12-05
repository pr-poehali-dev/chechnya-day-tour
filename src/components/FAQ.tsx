import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'Нужен ли опыт верховой езды?',
      answer: 'Не нужен. Большинство наших гостей — новички. Наши лошади спокойные и послушные, а инструктаж подробный и понятный. Мы подберем подходящую лошадь и научим всем основам.'
    },
    {
      question: 'Что надеть на прогулку?',
      answer: 'Обязательны удобные брюки или джинсы (не шорты!), закрытая обувь на плоской подошве. По погоде рекомендуем куртку или ветровку. В солнечный день не забудьте головной убор и солнцезащитный крем.'
    },
    {
      question: 'Есть ли ограничения по возрасту и весу?',
      answer: 'Дети принимаются с 12 лет в сопровождении взрослого. Максимальный вес всадника — 110 кг. При наличии особых условий уточняйте при бронировании.'
    },
    {
      question: 'Что если будет плохая погода?',
      answer: 'Мы свяжемся с вами заранее для переноса прогулки на другой день или вернем полную стоимость. Безопасность превыше всего.'
    },
    {
      question: 'Как забронировать прогулку?',
      answer: 'Оставьте заявку через форму на сайте, позвоните нам или напишите в WhatsApp/Telegram. Мы перезвоним в течение часа для уточнения деталей и подтверждения бронирования.'
    },
    {
      question: 'Можно ли взять с собой камеру?',
      answer: 'Конечно! Мы даже рекомендуем это сделать. Виды с маршрута потрясающие. Также наш инструктор с радостью сделает ваши фотографии на фоне гор и ущелья.'
    },
    {
      question: 'Сколько человек в группе?',
      answer: 'Мы работаем с небольшими группами до 6 человек, чтобы обеспечить индивидуальное внимание каждому всаднику и комфортную атмосферу.'
    },
    {
      question: 'Где точка встречи?',
      answer: 'Мы забираем гостей от центрального входа в Кисловодский парк у Колоннады. Точное время и место встречи подтверждаем при бронировании.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Ответы на вопросы
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Всё, что нужно знать перед прогулкой
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`}
                className="bg-white border-2 rounded-lg px-6 hover:border-primary transition-colors"
              >
                <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
