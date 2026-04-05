// Instrucciones para resolver el problema:
// Usa un puntero al inicio del arreglo y otro al siguiente elemento.
// Compara las iniciales de los nombres en las posiciones de ambos punteros.
// Si coinciden, detén la búsqueda y devuelve los nombres.
// Si no coinciden, avanza ambos punteros y repite.
// Detén la búsqueda si recorres toda la lista sin encontrar un par.

const invitados = ["Ana", "Warlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;
    let match=[]

    while (siguiente < invitados.length) {
        // TODO: Compara las iniciales de los nombres en los punteros

        // invitados[inicio]
        if(invitados[inicio][0]===invitados[siguiente][0]){
            match.push(invitados[inicio])
            match.push(invitados[siguiente])
             return match
            break;

        }else{
            inicio++
            siguiente++
        }
       
    }

    return null; // Si no se encuentra ningún par
}

console.log(encontrarPareja(invitados));
