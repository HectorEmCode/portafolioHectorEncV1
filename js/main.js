
/* ==========================================
   PORTAFOLIO - HÉCTOR ENCARNACIÓN
   JavaScript: Interactividad
========================================== */

// ==========================================
// 1. VARIABLES Y ELEMENTOS DEL DOM
// ==========================================

// String: almacena el tema inicial
const temaInicial = "oscuro";

// Boolean: indica si el tema claro está activo
let modoClaro = false;

// Number: cuenta los cambios de tema
let cambiosTema = 0;

// Seleccionar elementos del HTML
const botonTema = document.getElementById("cambiar-tema");

const botonesVerMas = document.querySelectorAll(".btn-ver-mas");


// ==========================================
// 2. FUNCIÓN: CAMBIAR TEMA
// ==========================================

function cambiarTema() {

    // Alternar entre true y false
    modoClaro = !modoClaro;

    // Aumentar el contador
    cambiosTema++;

    // Agregar o quitar la clase del body
    document.body.classList.toggle("modo-claro", modoClaro);

    // Actualizar el botón
    botonTema.textContent = modoClaro ? "☾ Modo oscuro" : "☀ Modo claro";

    // Actualizar accesibilidad
    botonTema.setAttribute("aria-pressed", String(modoClaro));

    console.log("Tema inicial:", temaInicial);
    console.log("Cambios de tema:", cambiosTema);
}


// ==========================================
// 3. FUNCIÓN: VER MÁS / VER MENOS
// ==========================================

function mostrarDetalle(boton) {

    // Obtener el ID del contenido relacionado
    const idProyecto = boton.dataset.proyecto;

    // Buscar el contenido
    const detalle = document.getElementById(idProyecto);

    if (!detalle) {
        return;
    }

    // Mostrar u ocultar el contenido
    detalle.classList.toggle("hidden");

    // Comprobar si está visible
    const estaVisible = !detalle.classList.contains("hidden");

    // Cambiar texto del botón
    boton.textContent = estaVisible ? "Ver menos ↑" : "Ver más ↗";

    // Actualizar accesibilidad
    boton.setAttribute("aria-expanded", String(estaVisible));
}


// ==========================================
// 4. EVENTOS
// ==========================================

// Evento del botón de tema
if (botonTema) {

    botonTema.addEventListener("click", cambiarTema);

}

// Eventos de las tarjetas de proyectos
botonesVerMas.forEach(function(boton) {

    boton.addEventListener("click", function() {

        mostrarDetalle(boton);

    });

});
