const app = document.querySelector("#root");
const logo = document.createElement("img");
const container = document.createElement("div");

logo.src = "../img/logo.png";

container.setAttribute("container", "class");
app.appendChild(logo);
app.appendChild(container);

fetch("https://ghibliapi.herokuapp.com/films")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((movie) => {
      const card = document.createElement("div");
      const h1 = document.createElement("h1");
      const p = document.createElement("p");

      card.setAttribute("class", "card");
      h1.textContent = movie.title;
      movie.description = movie.description.substring(0, 300);
      p.textContent = `${movie.description}...`;
      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  })
  .catch((error) => {
    const errorMessage = document.createElement("marquee");
    errorMessage.textContent = `${error.message}`;
    app.appendChild(errorMessage);
  });
