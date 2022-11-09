//Desarrollado por Victor Manuel Morales  - Santiago Orozco
let boton = document.querySelector(".btn");
let botonSelection = document.querySelectorAll(".botonSelection");
let botonClicked;
let respuesta = document.querySelector(".answer");//Span
let card1 = document.querySelector(".card1-container");
let card2 = document.querySelector(".card2-container");

let bandera = false;// Bool

var cadena;// Scope Global

//Click
document.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.value >= 1 && e.target.value <= 5) {
    cadena = e.target.value;
    console.log(cadena);
    bandera = true;

  }
});

// Submit
boton.addEventListener("click", (event) => {
  event.preventDefault();
  if (bandera) {
    card1.style.display = "none";
    card2.style.display = "flex";

    let newText = document.createTextNode(cadena);
    respuesta.appendChild(newText);
  }
});
