"use client";
import React, { useState } from "react";
import "./page.css";
import Image from "next/image";
import search from "../../images/search.png";
import rain from "../../images/rain.png";
import clouds from "../../images/clouds.png";
import drizzle from "../../images/drizzle.png";
import mist from "../../images/mist.png";
import snow from "../../images/snow.png";
import clear from "../../images/clear.png";
import humidity from "../../images/humidity.png";
import wind from "../../images/wind.png";

const page = () => {
  const [city, setCity] = useState("");
  const [searchedCity, setSearchedCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [displayError, setDisplayError] = useState(false);

  const fetchWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=af7ba58617f130520b3612eb997a909e`
    );
    if (response.status === 404) {
      setDisplayError(true);
      setWeatherData(null);
    } else {
      const data = await response.json();
      setWeatherData(data);
      setSearchedCity(city.toUpperCase());
      setDisplayError(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchWeather();
    setCity("");
  };

  let weatherIcon = null;
  if (weatherData && weatherData.weather && weatherData.weather.length > 0) {
    const mainWeather = weatherData.weather[0].main;
    switch (mainWeather) {
      case "Rain":
        weatherIcon = rain;
        break;
      case "Clouds":
        weatherIcon = clouds;
        break;
      case "Drizzle":
        weatherIcon = drizzle;
        break;
      case "Mist":
        weatherIcon = mist;
        break;
      case "Snow":
        weatherIcon = snow;
        break;
      case "Clear":
        weatherIcon = clear;
        break;
      default:
        weatherIcon = null;
        break;
    }
  }

  return (
    <div className="weather-container">
      <div className="card">
        <form className="search" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter City"
            spellCheck="false"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button>
            <Image src={search} width={20} alt="#" />
          </button>
        </form>
        {weatherData && (
          <div className="weather">
            {weatherIcon && <Image src={weatherIcon} width={200} alt="#" />}
            <h1 className="temp">{weatherData.main.temp}°c</h1>
            <h2 className="city">{searchedCity}</h2>
            <div className="details">
              <div className="col">
                <Image src={humidity} width={50} alt="#" />
                <div>
                  <p className="humidity">{weatherData.main.humidity}%</p>
                  <p>Humidity</p>
                </div>
              </div>
              <div className="col">
                <Image src={wind} width={50} alt="#" />
                <div>
                  <p className="wind">{weatherData.wind.speed}km/h</p>
                  <p>Wind Speed</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
