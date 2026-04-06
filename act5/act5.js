function findLongestWord(text) {
  // TODO: Dividir el texto en palabras y almacenarlas en una variable
  let words = [];
  words = text.split(" ");

  let longestWord = ""; // Inicializar la palabra más larga

  // TODO: Recorrer el arreglo de palabras con un ciclo
  for (let fin = 0; fin <= words.length - 1; fin++) {
    // TODO: Comparar la longitud de la palabra actual con la más larga

    if (words[fin].length >= longestWord.length) {
      // Actualizar la palabra más larga

      longestWord = words[fin];
    }
  }
  return longestWord;
}

 // Ejemplo de uso
const text ="JavaScript es un lenguaje de programación increíble para aprender. me chupo unos murcielagosssss en el pescuezo mi pana ";
 
console.log(findLongestWord(text)); // Resultado esperado: "programación"
