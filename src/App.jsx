import "./styles/main.scss";

// Icon imports
import houseIcon from "../public/houseIcon.svg";
import settingsIcon from "../public/settingsIcon.svg";
import tempIcon from "../public/tempIcon.svg";
import humIcon from "../public/humIcon.svg";
import rainIcon from "../public/rainIcon.svg";
import windIcon from "../public/windIcon.svg";
import sunsetIcon from "../public/sunsetIcon.svg";
import sunriseIcon from "../public/sunriseIcon.svg";
import snowIcon from "../public/snowIcon.svg";
import cloudsIcon from "../public/cloudsIcon.svg";

// import components
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

function Page(img, title) {
  return (
    <section>
      <a href="/">
        <img src={img}></img>
        <div className="link-title">{title}</div>
      </a>
    </section>
  );
}

function Time() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // console.log(time);

  return <span className="time-text">{time}</span>;
}

function WeatherWidget() {
  const API_KEY = "5fcf12dc7ab9215a2f9a553a494db439";
  const [temperature, setTemperature] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [clouds, setClouds] = useState("");
  const [rain, setRain] = useState("");
  const [snow, setSnow] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=Espoo&appid=${API_KEY}`
          )
          .then((response) => {
            const weatherData = response.data;
            console.log("Weather data was collected successfully");
            console.log(weatherData);
            setTemperature((weatherData.main.temp - 273.15).toFixed(1));
            setFeelsLike((weatherData.main.feels_like - 273.15).toFixed(1));
            setMaxTemp((weatherData.main.temp_max - 273.15).toFixed(1));
            setHumidity(weatherData.main.humidity);
            setWindSpeed(weatherData.wind.speed);
            setClouds(weatherData.clouds.all);
            setRain(weatherData.rain ? weatherData.rain["1h"] : 0);
            setSnow(weatherData.snow ? weatherData.snow["1h"] : 0);
            setSunrise(
              new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()
            );
            setSunset(
              new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()
            );
          })
          .catch((error) => {
            console.error(error);
          });
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="weather-widget">
      <div className="weather-cards">
        <div className="card">
          <span className="temperature">{temperature} °C</span>
          <br />
          <span className="feels-like">
            <img src={tempIcon}></img> Feels like: {feelsLike} °C
          </span>
        </div>
        <div className="card">
          <img src={tempIcon}></img> Max temp: {maxTemp}°C
        </div>
        <div className="card">
          <img src={humIcon}></img> Humidity: {humidity}%
        </div>
        <div className="card">
          <img src={windIcon}></img> Wind: {windSpeed} m/s
        </div>
        <div className="card">
          <img src={cloudsIcon}></img>Clouds: {clouds}%
        </div>
        <div className="card">
          <span>
            <img src={rainIcon}></img>Rain: {rain} mm/h
          </span>
          <br />
          <span>
            <img src={snowIcon}></img>Snow: {snow} mm/h
          </span>
        </div>
        <div className="card">
          <span>
            <img src={sunriseIcon}></img>Sunrise: {sunrise}
          </span>
          <br />
          <span>
            <img src={sunsetIcon}></img>Sunset: {sunset}
          </span>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="main">
      <article>
        {Page(houseIcon, "Home")}
        {Page(houseIcon, "Home")}
        {Page(houseIcon, "Home")}
        {Page(houseIcon, "Home")}
        {Page(settingsIcon, "Settings")}
      </article>
      <div className="body">
        <header>
          <nav className="header-clock">
            {Time()}
            <span className="header-weather">
              <WeatherWidget />
            </span>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default App;

// Сторінка посилань
// Додавання елементів не використовуючи код
// Сторінка тренування
// Сторінка книг
// Сторінка фінансів
// Сторінка фільмів
