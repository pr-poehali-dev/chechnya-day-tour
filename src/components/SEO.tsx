import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({
  title = 'Курорт Эльбрус - Высочайшая вершина Европы',
  description = 'Эльбрус - всесезонный горный курорт у высочайшей вершины Европы (5642 м). Горные лыжи, треккинг, отели, рестораны. Отдых в Приэльбрусье круглый год.',
  keywords = 'Эльбрус, курорт Эльбрус, отдых на Эльбрусе, горные лыжи Эльбрус, Приэльбрусье, горнолыжный курорт, восхождение на Эльбрус, отели Эльбрус, треккинг Кавказ',
  image = 'https://elbrus-resort.ru/og-image.jpg',
  url = 'https://elbrus-resort.ru',
  type = 'website'
}: SEOProps) => {
  const siteName = 'Курорт Эльбрус';
  const fullTitle = title.includes('Эльбрус') ? title : `${title} - ${siteName}`;

  return (
    <Helmet>
      {/* Основные мета-теги */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="ru_RU" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Дополнительные мета-теги */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content={siteName} />
      <meta name="geo.region" content="RU-KB" />
      <meta name="geo.placename" content="Терскол, Эльбрус" />
      <meta name="geo.position" content="43.2585;42.5756" />
      <meta name="ICBM" content="43.2585, 42.5756" />
      
      {/* Канонический URL */}
      <link rel="canonical" href={url} />
      
      {/* Альтернативные языки */}
      <link rel="alternate" hrefLang="ru" href={url} />
      <link rel="alternate" hrefLang="en" href={`${url}/en`} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      
      {/* Структурированные данные JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'TouristDestination',
          name: 'Курорт Эльбрус',
          description: description,
          url: url,
          image: image,
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'с. Терскол',
            addressLocality: 'Терскол',
            addressRegion: 'Кабардино-Балкария',
            postalCode: '361605',
            addressCountry: 'RU'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '43.2585',
            longitude: '42.5756'
          },
          telephone: '+7-800-500-50-50',
          priceRange: '₽₽₽',
          openingHours: 'Mo-Su 08:00-22:00',
          sameAs: [
            'https://vk.com/elbrusresort',
            'https://instagram.com/elbrusresort',
            'https://facebook.com/elbrusresort'
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
