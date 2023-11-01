const pelisContainer = document.querySelector(".pelis_container");

const listaPelis = [
  "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/peliculas/john-wick-pacto-de-sangre/120113874-1-esl-ES/John-Wick-Pacto-de-sangre.png",
  "https://es.web.img2.acsta.net/pictures/23/02/13/13/48/4422250.jpg",
  "https://pics.filmaffinity.com/Oppenheimer-828933592-large.jpg",
  "https://pics.filmaffinity.com/Alicia_en_el_paais_de_las_maravillas-108542060-large.jpg",
  "https://pics.filmaffinity.com/Spider-Man-Un-nuevo-universo-705785300-large.jpg",
  "https://pics.filmaffinity.com/the_parent_trap-594999557-large.jpg"
];
const nombrePelicula = [
  "John Wick",
  "Guardianes de la Galaxia",
  "Oppenheimer",
  "Alicia País Maravillas",
  "Spider-Man",
  "The Parent Trap"
];

const agregarPeli = () => {
  const urlPeli = document.querySelector(".peli").value;
  const nombrePeli = document.querySelector(".nombre_peli").value;

  if (urlPeli && nombrePeli) {
    listaPelis.push(urlPeli);
    nombrePelicula.push(nombrePeli);

    pelisContainer.innerHTML += `
      <div>
        <img class="imgxd" src="${urlPeli}">
        <p>${nombrePeli}</p>
      </div>
    `;
  } else {
    alert("Ingresa una url y un nombre de la película");
  }

  document.querySelector(".peli").value = "";
  document.querySelector(".nombre_peli").value = "";
};

document.querySelector(".btnAgregar").addEventListener("click", agregarPeli);

// Agrega las películas predeterminadas
for (let i = 0; i < listaPelis.length; i++) {
  pelisContainer.innerHTML += `
    <div>
      <img class="imgxd" src="${listaPelis[i]}">
      <p>${nombrePelicula[i]}</p>
    </div>
  `;
}
