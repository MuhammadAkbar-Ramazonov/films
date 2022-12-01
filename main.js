// Variables
const elFilmList = document.querySelector(".film-list");
const elFilmTemplate = document.querySelector(".film-temp").content;
const FilmFragment = document.createDocumentFragment();

AOS.init();

// For Loop
for (const  kino of kinolar) {
  const elFilmTemplate = document.querySelector(".film-temp").content.cloneNode(true);
  
  elFilmTemplate.querySelector(".film-title").textContent = kino.title;
  elFilmTemplate.querySelector(".film-year").textContent = kino.year;
  elFilmTemplate.querySelector(".film-cast").textContent = kino.cast.join(", ");
  elFilmTemplate.querySelector(".film-genres").textContent = kino.genres.join(", ");
  
  FilmFragment.appendChild(elFilmTemplate);
}
elFilmList.appendChild(FilmFragment);





