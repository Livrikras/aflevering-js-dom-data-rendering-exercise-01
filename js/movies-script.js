"use script";

const movies = [
  {
    id: 1,
    titel: "Inception",
    genre: "science-fiction",
    year: 2010,
    duration: 2.28,
    img: "img/inception.webp",
    url: "https://www.imdb.com/title/tt1375666/",
  },
  {
    id: 2,
    titel: "The Dark Knight",
    genre: "action",
    year: 2008,
    duration: 2.32,
    img: "img/the-dark-knight.webp",
    url: "https://www.imdb.com/title/tt0468569/",
  },
  {
    id: 3,
    titel: "Forrest Gump",
    genre: "drama",
    year: 1994,
    duration: 2.22,
    img: "img/forrest-gump.webp",
    url: "https://www.imdb.com/title/tt0109830/",
  },
  {
    id: 4,
    titel: "Superbad",
    genre: "comedy",
    year: 2007,
    duration: 1.53,
    img: "img/superbad.webp",
    url: "https://www.imdb.com/title/tt0829482/",
  },
  {
    id: 5,
    titel: "It",
    genre: "horror",
    year: 2017,
    duration: 2.15,
    img: "img/it.webp",
    url: "https://www.imdb.com/title/tt1396484/",
  },
  {
    id: 6,
    titel: "The Hangover",
    genre: "comedy",
    year: 2009,
    duration: 1.4,
    img: "img/the-hangover.webp",
    url: "https://www.imdb.com/title/tt1119646/",
  },
  {
    id: 7,
    titel: "The Conjuring",
    genre: "horror",
    year: 2013,
    duration: 1.52,
    img: "img/the-conjuring.webp",
    url: "https://www.imdb.com/title/tt1457767/",
  },
  {
    id: 8,
    titel: "Interstellar",
    genre: "science-fiction",
    year: 2014,
    duration: 2.55,
    img: "img/interstellar.jpg",
    url: "https://www.imdb.com/title/tt0816692/",
  },
  {
    id: 9,
    titel: "The Matrix",
    genre: "science-fiction",
    year: 1999,
    duration: 3.02,
    img: "img/the-matrix.webp",
    url: "https://www.imdb.com/title/tt0133093/",
  },
  {
    id: 10,
    titel: "Pulp Fiction",
    genre: "drama",
    year: 1994,
    duration: 1.39,
    img: "img/pulp-fiction.webp",
    url: "https://www.imdb.com/title/tt0110912/",
  },
];

const moviesContainer = document.querySelector("#movies-container");

function displayMovies(movieList) {
  // moviesContainer.innerHTML = "";

  // movies.forEach((item) => {
  //   moviesContainer.innerHTML += `
  //       <div class="movie-card">
  //           <article>
  //               <h2>${item.titel}</h2>
  //               <p>Genre: ${item.genre}</p>
  //               <p>År: ${item.year}</p>
  //               <p>Varighed: ${item.duration} timer</p>
  //           </article>
  //           <figure>
  //               <a href="${item.url}" target="_blank" rel="noopener noreferrer"><img src="${item.img}" alt="${item.titel}"></a>
  //               <figcaption>${item.titel}</figcaption>
  //           </figure>
  //       </div>
  //       `;
  // });

  const html = movieList
    .map((item) => {
      return `
        <div class="movie-card">
            <article>
                <h2>${item.titel}</h2>
                <p>Genre: ${item.genre}</p>
                <p>År: ${item.year}</p>
                <p>Varighed: ${item.duration} timer</p>
            </article>
            <figure>
                <a href="${item.url}" target="_blank" rel="noopener noreferrer"><img src="${item.img}" alt="${item.titel}"></a>
                <figcaption>${item.titel}</figcaption>
            </figure>
        </div>
        `;
    })
    .join("");
  moviesContainer.innerHTML = html;
}

displayMovies(movies);

// Henter de HTML elementer, vi skal arbejde med og gemmer dem i nogle variabler
const selectedCategory = document.querySelector("#category-select");

const searchInput = document.querySelector("#gsearch");

// søger efter et tag (den tager den første formular på index.html)
const form = document.querySelector("form");

// Filtrering------------------------------------------------------------------
function filterMovies() {
  const selectedValue = selectedCategory.value; // Henter den valgte værdi fra dropdown-menuen

  const searchTerm = searchInput.value.toLowerCase().trim(); // Henter søgetermen og konverterer den til små bogstaver og fjerner mellemrum

  // Vi starter med alle udstillinger fra listen (array-exhibitions)
  let filteredMovies = movies;

  // alle betyder alle perioder
  // Vi filtrere kun hvis brugeren har valgt noget andet end "alle"
  // ! betyder not, så hvis selectedValue ikke er "alle", så er det en af filtreringerne.
  if (selectedValue != "alle") {
    filteredMovies = filteredMovies.filter((item) => {
      return item.genre === selectedValue; // Hvis item.genre er lig med selectedValue, så bliver det inkluderet i det nye array
    });
  }
  if (searchTerm !== "") {
    filteredMovies = filteredMovies.filter((item) => {
      return item.titel.toLowerCase().includes(searchTerm);
    });
  }
  displayMovies(filteredMovies);
}

// Lave en listener på exhibitionContainer, som lytter efter ændringer i dropdown-menuen (change) og kalder på filterExhibitions-funktionen
selectedCategory.addEventListener("change", filterMovies);

// Lave en listener på searchInput, som lytter efter ændringer i input-feltet (input) og kalder på filterExhibitions-funktionen
searchInput.addEventListener("input", filterMovies);
// fjerner backend:
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Forhindrer formularen i at blive sendt, så siden ikke genindlæses
  filterMovies(); // Kalder på filterExhibitions-funktionen, når formularen bliver indsendt
});
