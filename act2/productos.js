
// viajes.js

// Array para guardar los destinos
let listadecompras = [];

// Función para registrar un destino de viaje
export const agregarProductos = (producto) => {
     
    if (listadecompras.length != 0) {

        if (!listadecompras.includes(producto)) {
            listadecompras.push(producto);
        }

    } else {
        listadecompras.push(producto);
    }

}

export const eliminarProducto = (producto) => {
    // elimina producto
    listadecompras = listadecompras.filter(el => el !== producto);
         
}



// Función para mostrar el itinerario de los viajes registrados
export const mostrarLista = () => {
    // TODO: Recorrer el arreglo de productos y mostrar la información de cada uno
    for (let i = 0; i < listadecompras.length; i++) {
        let producto = listadecompras[i];
        console.log("producto: " + producto);
        console.log("---------------------------");
        // console.log(listadecompras[0].producto);

    }
}