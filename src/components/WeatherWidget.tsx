import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface WeatherData {
  temperature: number;
  feelsLike: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  pressure: number;
  visibility: number;
  icon: string;
}

const WeatherWidget = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const API_KEY = 'af87df24c14b0c3e44ea1f8afa1d88d7';
        const lat = 43.2585;
        const lon = 42.5756;
        
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=ru&appid=${API_KEY}`
        );
        
        if (!response.ok) {
          throw new Error('Не удалось загрузить данные о погоде');
        }
        
        const data = await response.json();
        
        setWeather({
          temperature: Math.round(data.main.temp),
          feelsLike: Math.round(data.main.feels_like),
          condition: data.weather[0].description,
          humidity: data.main.humidity,
          windSpeed: Math.round(data.wind.speed),
          pressure: Math.round(data.main.pressure * 0.75),
          visibility: Math.round(data.visibility / 1000),
          icon: getWeatherIcon(data.weather[0].main)
        });
        
        setError(null);
      } catch (err) {
        setError('Не удалось загрузить погоду');
        console.error('Weather fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 600000);
    
    return () => clearInterval(interval);
  }, []);

  const getWeatherIcon = (condition: string): string => {
    const icons: Record<string, string> = {
      'Clear': '☀️',
      'Clouds': '☁️',
      'Rain': '🌧️',
      'Snow': '❄️',
      'Thunderstorm': '⛈️',
      'Drizzle': '🌦️',
      'Mist': '🌫️',
      'Fog': '🌫️'
    };
    return icons[condition] || '🌤️';
  };

  if (loading) {
    return (
      <Card className="border-2 bg-gradient-to-br from-primary/5 to-secondary/5">
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-center justify-center h-32">
            <div className="animate-pulse text-4xl">🌤️</div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error || !weather) {
    return (
      <Card className="border-2 bg-gradient-to-br from-primary/5 to-secondary/5">
        <CardContent className="p-4 sm:p-6">
          <div className="text-center text-muted-foreground">
            <Icon name="CloudOff" className="w-8 h-8 mx-auto mb-2" />
            <p className="text-sm">{error || 'Нет данных'}</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2 hover:border-primary transition-all hover:shadow-xl bg-gradient-to-br from-primary/5 to-secondary/5">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
              <Icon name="MapPin" className="w-4 h-4 text-primary" />
              Эльбрус, Терскол
            </h3>
            <p className="text-xs text-muted-foreground">Сейчас</p>
          </div>
          <div className="text-4xl sm:text-5xl">{weather.icon}</div>
        </div>

        <div className="mb-4">
          <div className="flex items-end gap-2">
            <span className="text-4xl sm:text-5xl font-bold text-primary">
              {weather.temperature > 0 ? '+' : ''}{weather.temperature}°
            </span>
            <span className="text-lg text-muted-foreground mb-2">
              ощущается как {weather.feelsLike > 0 ? '+' : ''}{weather.feelsLike}°
            </span>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground mt-2 capitalize">
            {weather.condition}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4 border-t">
          <div className="flex items-center gap-2">
            <Icon name="Droplets" className="w-4 h-4 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Влажность</p>
              <p className="text-sm sm:text-base font-semibold">{weather.humidity}%</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Icon name="Wind" className="w-4 h-4 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Ветер</p>
              <p className="text-sm sm:text-base font-semibold">{weather.windSpeed} м/с</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Icon name="Gauge" className="w-4 h-4 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Давление</p>
              <p className="text-sm sm:text-base font-semibold">{weather.pressure} мм</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Icon name="Eye" className="w-4 h-4 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Видимость</p>
              <p className="text-sm sm:text-base font-semibold">{weather.visibility} км</p>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t">
          <p className="text-xs text-muted-foreground text-center">
            Обновляется каждые 10 минут
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;
