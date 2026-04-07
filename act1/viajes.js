
// viajes.js

// Array para guardar los destinos
const destinos = [];

// Función para registrar un destino de viaje
export const registrarDestino= (destino, fecha, transporte, persona)=> {
    // TODO: Crear un objeto con los datos del destino
    const nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        persona:persona,
        costo: calcularCosto(destino, transporte, persona)
    };

    destinos.push(nuevoViaje);
}

// Función para calcular el costo del viaje
export const calcularCosto=(destino, transporte, persona) => {
    let costoBase = 0;

    // Costo base por destino
    if (destino === "Paris") {
        costoBase = 500;
    } else if (destino === "Londres") {
        costoBase = 400;
    } else if (destino === "New York") {
        costoBase = 600;
    }

    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;
    }

    // Costo adicional por persona
    if (persona === 1) {
        costoBase += 0;
    } else if (persona === 2) {
        costoBase += 400;
    }else if (persona === 3) {
        costoBase += 800;
    }else if (persona === 2) {
        costoBase += 1100;
    }

    return costoBase;
}

// Función para mostrar el itinerario de los viajes registrados
export const mostrarItinerario = () => {
    // TODO: Recorrer el arreglo de destinos y mostrar la información de cada uno
    for (let i = 0; i < destinos.length; i++) {
        var viaje = destinos[i];
        console.log("Destino: " + viaje.destino);
        console.log("Fecha: " + viaje.fecha);
        console.log("Transporte: " + viaje.transporte);
        console.log("Costo: $" + viaje.costo);
        console.log("---------------------------");
    }
}