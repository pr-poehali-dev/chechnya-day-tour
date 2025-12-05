const Gallery = () => {
  const images = [
    {
      src: 'https://cdn.poehali.dev/files/4d5d62e9-b095-4964-a630-40d0623792a8.jpeg',
      alt: 'Всадники на фоне горного ущелья'
    },
    {
      src: 'https://cdn.poehali.dev/projects/67416aab-80dd-49a8-b3bb-c84961b6ace9/files/61bfb01f-1cb7-43ca-8234-6fe2a6fb6c49.jpg',
      alt: 'Панорама Кавказских гор'
    },
    {
      src: 'https://cdn.poehali.dev/projects/67416aab-80dd-49a8-b3bb-c84961b6ace9/files/e95008f6-2d89-4d96-a7e4-986c6557ba9c.jpg',
      alt: 'Горная тропа с лошадьми'
    },
    {
      src: 'https://cdn.poehali.dev/projects/67416aab-80dd-49a8-b3bb-c84961b6ace9/files/841e916d-71e8-406b-af5d-39db5d22115c.jpg',
      alt: 'Лошадь на фоне гор'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Фотогалерея
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Моменты наших прогулок над Березовским ущельем
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {images.map((image, idx) => (
            <div 
              key={idx} 
              className="relative overflow-hidden rounded-lg aspect-[4/3] group cursor-pointer"
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Следите за нами в социальных сетях</p>
          <div className="flex justify-center gap-4">
            <a 
              href="#" 
              className="text-2xl hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              📸
            </a>
            <a 
              href="#" 
              className="text-2xl hover:text-primary transition-colors"
              aria-label="VK"
            >
              🎭
            </a>
            <a 
              href="#" 
              className="text-2xl hover:text-primary transition-colors"
              aria-label="Telegram"
            >
              ✈️
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-4">#горныйгалопкмв</p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
