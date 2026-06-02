const capacidadMaxima = 344;
let ocupados = 0;
const formulario = document.getElementById("formulario");
const entrada = document.getElementById("entrada");
const salida = document.getElementById("salida");

const inputBoleta = document.getElementById("boleta");
const inputNombre = document.getElementById("nombre");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  actualizarAforo();
});

// Boton de entrada
entrada.addEventListener("click", (e) => {
  e.preventDefault();
  if (formulario.checkValidity()) {
    registrarEntrada();
  } else {
    formulario.reportValidity();
  }
});

// Boton de salida
salida.addEventListener("click", (e) => {
  e.preventDefault();
  if (formulario.checkValidity()) {
    registrarEntrada();
  } else {
    formulario.reportValidity();
  }
});

function actualizarAforo() {
  let disponibles = capacidadMaxima - ocupados;

  document.getElementById("ocupados").textContent = ocupados;
  document.getElementById("disponibles").textContent = disponibles;

  let porcentaje = (ocupados / capacidadMaxima) * 100;

  document.getElementById("barraProgreso").style.width = porcentaje + "%";
}

function registrarEntrada() {
  if (ocupados < capacidadMaxima) {
    ocupados++;
    actualizarAforo();
    inputBoleta.value = "";
    inputNombre.value = "";
  } else {
    alert("La biblioteca ha alcanzado su capacidad máxima.");
  }
}

function registrarSalida() {
  if (ocupados > 0) {
    ocupados--;
    actualizarAforo();
  }
}

actualizarAforo();
