function findMax(arr) {
    // TODO: Agregar la condición del caso base
     if (arr.length === 1) {
        return arr[0];
    }

    // TODO: Dividir el arreglo en dos mitades
    /* calcular el punto medio */
    const mid = Math.floor(arr.length / 2);
    /* obtener la primera mitad */
    const left =arr.slice(0, mid); 
    /* obtener la segunda mitad */
    const right = arr.slice(mid);

    // TODO: Llamar recursivamente a la función para ambas mitades
    // /* llamada recursiva */
    const leftMax = findMax(left) ;
    /* llamada recursiva */
    const rightMax = findMax(right);

    // TODO: Combinar las soluciones comparando los máximos
    let maxnumber = Math.max(leftMax,rightMax)
    return maxnumber /* máximo entre leftMax y rightMax */;
}
// Ejemplo de entrada
const numbers = [3, 8,45, 2, 10, 5, 7, 15];
console.log(findMax(numbers)); // Salida esperada: 10