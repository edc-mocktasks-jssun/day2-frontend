"use client";

import { useState } from "react";

type WeatherData = {
  city: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  description: string;
};

const weatherDescriptions: Record<number, string> = {
  0: "Clear sky", 1: "Mainly clear", 2: "Partly cloudy", 3: "Overcast",
  45: "Foggy", 48: "Icy fog", 51: "Light drizzle", 53: "Drizzle",
  55: "Heavy drizzle", 61: "Slight rain", 63: "Rain", 65: "Heavy rain",
  71: "Slight snow", 73: "Snow", 75: "Heavy snow", 80: "Rain showers",
  81: "Heavy showers", 82: "Violent showers", 95: "Thunderstorm",
};

export default function WeatherPage() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city.trim()) return;
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      // Step 1: convert city name to coordinates
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("City not found");
      }

      const { latitude, longitude, name } = geoData.results[0];

      // Step 2: get weather using coordinates
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code`
      );
      const weatherData = await weatherRes.json();
      const current = weatherData.current;

      setWeather({
        city: name,
        temperature: Math.round(current.temperature_2m),
        feelsLike: Math.round(current.apparent_temperature),
        humidity: current.relative_humidity_2m,
        windSpeed: current.wind_speed_10m,
        description: weatherDescriptions[current.weather_code] || "Unknown",
      });
    } catch {
      setError("City not found. Please check the spelling and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-2 text-blue-900">Weather</h1>
      <p className="text-gray-500 mb-8">Enter any city to get live weather data</p>

      <div className="flex gap-3 mb-8 w-full max-w-md">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
          placeholder="e.g. Mumbai, London, Tokyo"
          className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-gray-900
                     placeholder-gray-400 focus:outline-none focus:border-blue-900"
        />
        <button
          onClick={fetchWeather}
          className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Search
        </button>
      </div>

      {loading && (
        <p className="text-blue-900 animate-pulse">Fetching weather data...</p>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-6 py-4 rounded-xl max-w-md w-full text-center">
          ⚠️ {error}
        </div>
      )}

      {weather && !loading && (
        <div className="border border-gray-200 rounded-2xl p-8 max-w-md w-full text-center shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 mb-1">{weather.city}</h2>
          <p className="text-gray-500 mb-4">{weather.description}</p>
          <p className="text-6xl font-bold text-blue-900 mb-6">{weather.temperature}°C</p>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-gray-400">Feels Like</p>
              <p className="font-semibold text-gray-900">{weather.feelsLike}°C</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-gray-400">Humidity</p>
              <p className="font-semibold text-gray-900">{weather.humidity}%</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-gray-400">Wind</p>
              <p className="font-semibold text-gray-900">{weather.windSpeed} km/h</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}