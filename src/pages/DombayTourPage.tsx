import { useEffect } from 'react';
import DombayHeader from '@/components/dombay/DombayHeader';
import DombayHero from '@/components/dombay/DombayHero';
import DombayTiming from '@/components/dombay/DombayTiming';
import DombayLocations from '@/components/dombay/DombayLocations';
import DombayConditions from '@/components/dombay/DombayConditions';
import DombayReviews from '@/components/dombay/DombayReviews';
import DombayBooking from '@/components/dombay/DombayBooking';
import DombayFooter from '@/components/dombay/DombayFooter';

export default function DombayTourPage() {
  useEffect(() => {
    document.title = 'Джип-тур на Домбай из КМВ | 10–12 часов, внедорожники, канатные дороги';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content',
        'Поездка на Домбай из Кисловодска, Пятигорска и других городов КМВ. Подготовленные внедорожники, гид, канатные дороги и храм X века. Забронируйте сейчас +7 967 828-46-99.'
      );
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans" style={{ fontFamily: '"Inter", sans-serif' }}>
      {/* Структурированные данные Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TouristTrip',
            name: 'Джип-тур на Домбай из КМВ',
            description: 'Однодневный тур на Домбай из городов КМВ на внедорожниках. Канатные дороги, Шоанинский храм X века, сырные пещеры, перевал Гум-Баши.',
            touristType: ['Семьи', 'Пары', 'Активный отдых'],
            itinerary: {
              '@type': 'ItemList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Перевал Гум-Баши' },
                { '@type': 'ListItem', position: 2, name: 'Сырные пещеры' },
                { '@type': 'ListItem', position: 3, name: 'Шоанинский храм X века' },
                { '@type': 'ListItem', position: 4, name: 'Река Уллу-Муруджу' },
                { '@type': 'ListItem', position: 5, name: 'Домбай — канатные дороги' },
              ],
            },
            provider: {
              '@type': 'Organization',
              name: 'Jeep Tour Dombay',
              telephone: '+79678284699',
              areaServed: 'Кавказские Минеральные Воды',
            },
          }),
        }}
      />

      <DombayHeader />
      <DombayHero />
      <DombayTiming />
      <DombayLocations />
      <DombayConditions />
      <DombayReviews />
      <DombayBooking />
      <DombayFooter />

      {/* Отступ снизу для мобильного фиксированного бара */}
      <div className="h-20 lg:hidden" />
    </div>
  );
}
