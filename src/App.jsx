import "./styles/main.scss";

// Icon imports
import houseIcon from "../public/houseIcon.svg";
import settingsIcon from "../public/settingsIcon.svg";

// import components

import { useState, useEffect } from "react";
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

  console.log(time);

  return <span className="time-text">{time}</span>;
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
            <span className="header-weather">dfdfsdsd</span>
            {Time()}
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
