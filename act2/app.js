
// app.js

// Iniciar la aplicación

import { agregarProductos,eliminarProducto,mostrarLista } from "./productos.js";

function iniciarApp() {
    // Ejemplo de cómo registrar destinos
        agregarProductos("manzana")
        agregarProductos("manzana")
        agregarProductos("manzana")
        agregarProductos("manzana")
        agregarProductos("tuna")
        agregarProductos("guayaba")
        agregarProductos("melocoton")
        agregarProductos("tuna")
        agregarProductos("tuna")
        eliminarProducto("tuna")
        eliminarProducto("manzana")
        
       
    // Mostrar la lista de los productos
    mostrarLista();
}

// Ejecutar la aplicación
iniciarApp();