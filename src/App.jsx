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
import gymIcon from "../public/gymIcon.svg";
import receiptIcon from "../public/receiptIcon.svg";
import booksIcon from "../public/booksIcon.svg";

import githubIcon from "../public/githubIcon.svg";
import collegeIcon from "../public/collegeIcon.svg";
import fullStackIcon from "../public/fullStackIcon.svg";
import terminalIcon from "../public/terminalIcon.svg";
import chatgptIcon from "../public/chatgptIcon.svg";
import colorIcon from "../public/colorIcon.svg";
import svgIcon from "../public/svgIcon.svg";
import microsoftIcon from "../public/microsoftIcon.svg";
import translatorIcon from "../public/translatorIcon.svg";

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
        {Page(gymIcon, "Gym")}
        {Page(booksIcon, "Books")}
        {Page(receiptIcon, "Receipts")}
        {Page(settingsIcon, "Settings")}
      </article>
      <div className="body">
        <div className="links">
          <div className="links-title">
            <span>Links</span>
          </div>
          <div className="links-content">
            <div className="link-item-1">
              <a
                href="https://github.com/ArtemSpr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="link-image">
                  <img src={githubIcon}></img>
                </div>
              </a>
              <span>GitHub</span>
            </div>
            <div className="link-item-2">
              <a
                href="https://login.microsoftonline.com/common/DeviceAuthTls/reprocess"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="link-image">
                  <img src={collegeIcon}></img>
                </div>
              </a>
              <span>College</span>
            </div>
            <div className="link-item-3">
              <a
                href="https://fullstackopen.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="link-image">
                  <img src={fullStackIcon}></img>
                </div>
              </a>
              <span>Fullstack</span>
            </div>
            <div className="link-item-4">
              <a
                href="https://dev.to/alagrede/terminal-setup-make-your-mac-terminal-awesome-4ecc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="link-image">
                  <img src={terminalIcon}></img>
                </div>
              </a>
              <span>Terminal</span>
            </div>
            <div className="link-item-5">
              <a
                href="https://chatgpt.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="link-image">
                  <img src={chatgptIcon}></img>
                </div>
              </a>
              <span>Chat Gpt</span>
            </div>
            <div className="link-item-6">
              <a
                href="https://colorhunt.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="link-image">
                  <img src={colorIcon}></img>
                </div>
              </a>
              <span>Color Hut</span>
            </div>
            <div className="link-item-7">
              <a
                href="https://www.svgrepo.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="link-image">
                  <img src={svgIcon}></img>
                </div>
              </a>
              <span>SVG icons</span>
            </div>
            <div className="link-item-8">
              <a
                href="https://m365.cloud.microsoft/?auth=2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="link-image">
                  <img src={microsoftIcon}></img>
                </div>
              </a>
              <span>Microsoft 365</span>
            </div>
            <div className="link-item-9">
              <a
                href="https://translate.google.com/?sl=uk&tl=ru&op=translate"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="link-image">
                  <img src={translatorIcon}></img>
                </div>
              </a>
              <span>Translator</span>
            </div>
          </div>
        </div>
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
