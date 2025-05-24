import "./styles/main.scss";

// Icon imports
import houseIcon from "../public/houseIcon.svg";
import settingsIcon from "../public/settingsIcon.svg";

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
      <body></body>
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
