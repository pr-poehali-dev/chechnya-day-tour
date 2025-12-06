import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface WeatherData {
  temperature: number;
  condition: string;
  icon: string;
  windSpeed: number;
  humidity: number;
}

const WeatherWidgetCompact = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

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
          condition: data.weather[0].description,
          icon: getWeatherIcon(data.weather[0].main),
          windSpeed: Math.round(data.wind.speed),
          humidity: data.main.humidity
        });
      } catch (err) {
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

  if (loading || !weather) {
    return (
      <Card className="border-2 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="animate-pulse text-3xl">🌤️</div>
            <div className="flex-1">
              <div className="h-4 bg-blue-200 dark:bg-blue-800 rounded w-24 mb-2 animate-pulse" />
              <div className="h-3 bg-blue-200 dark:bg-blue-800 rounded w-32 animate-pulse" />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2 hover:border-primary transition-all hover:shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
      <CardContent className="p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="text-4xl">{weather.icon}</div>
            <div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-semibold text-blue-900 dark:text-blue-100">Терскол</span>
              </div>
              <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                {weather.temperature > 0 ? '+' : ''}{weather.temperature}°C
              </div>
              <div className="text-xs text-blue-700 dark:text-blue-300 capitalize">
                {weather.condition}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-1 text-right">
            <div className="flex items-center gap-1 justify-end text-xs text-blue-700 dark:text-blue-300">
              <Icon name="Wind" className="w-3 h-3" />
              <span>{weather.windSpeed} м/с</span>
            </div>
            <div className="flex items-center gap-1 justify-end text-xs text-blue-700 dark:text-blue-300">
              <Icon name="Droplets" className="w-3 h-3" />
              <span>{weather.humidity}%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherWidgetCompact;
