
// app.js

// Iniciar la aplicación

import { registrarDestino,mostrarItinerario } from "./viajes.js";

function iniciarApp() {
    // Ejemplo de cómo registrar destinos
    registrarDestino("Paris", "2024-06-15", "Avión",2);
    registrarDestino("Londres", "2024-07-01", "Tren",3);
    console.log("registrado....")
    // Mostrar el itinerario de los viajes
    mostrarItinerario();
}

// Ejecutar la aplicación
iniciarApp();