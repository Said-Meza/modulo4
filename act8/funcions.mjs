import fs from "fs";

// Ruta del archivo de notas
const filePath = './notas.json';
// array de mis notas
let notas = [];

//rectificamos si existe un archivo de noptas si no lo creamos
export const existefile = () =>{

  if (fs.existsSync(filePath)) {
    console.log('El archivo existe.');
    return false
  } else {
    console.log('El archivo no existe.');
    return true
  }
}

/**
 * Agrega una nueva nota al archivo.
 * @param {string} titulo - El título de la nota.
 * @param {string} contenido - El contenido de la nota.
 */

export const agregarNota=(titulo, contenido) =>{
  
   const nuevaNota = { 
    titulo:titulo, 
    contenido:contenido 
  };

    // notas.push(nuevaNota);
    // console.log(notas);

   if (fs.existsSync(notas.json)) {

     // COMPLETAR: Usa fs.readFileSync para leer el archivo.
     
     // PISTA: Aquí debes leer las notas existentes antes de agregar la nueva.
     const texto = JSON.parse(fs.readFileSync(notas.json, "utf8"))

      if(texto){
        notas= texto;
        notas.push(nuevaNota);
        // console.log(notas)

        fs.writeFile("notas.json", JSON.stringify(notas), (err) => {
           if (err) {
             console.log("Ocurrió un error");
             return;
           }

           console.log("se agrego las nota correctamente");
         });

      }else{
        console.log("no hay contenido en el archivo")
      }
      

      
   }else{
        //si no existe crea el archivo e inserta el contenido
        notas.push(nuevaNota);
       fs.writeFile("notas.json", JSON.stringify(notas), (err) => {
           if (err) {
             console.log("Ocurrió un error");
             return;
           }

           console.log("se creo ls nota correctamente");
         });

   }

 

  // PISTA: Ahora debes sobrescribir el archivo con las notas actualizadas.
  // COMPLETAR: Usa fs.writeFileSync para guardar las notas.
  // console.log('Nota agregada con éxito.');
}

/**
 * Lista todas las notas guardadas.
 */
export const listarNotas=()=> {
  if (fs.existsSync(filePath)) {
    
    
    console.log("-------lista de mandado-------")
    const texto = JSON.parse(fs.readFileSync(filePath, "utf8"))
     notas= texto;
     notas.forEach(el => {
        console.log(el.titulo)
        console.log(el.contenido)
        console.log("------------")
     });


  } else {
    console.log('No hay notas guardadas.');
  }
}

/**
 * Elimina una nota por su título.
 * @param {string} titulo - El título de la nota a eliminar.
 */
export const eliminarNota=(titulo)=> {
  if (fs.existsSync(filePath)) {
    // PISTA: Primero lee todas las notas.
    // COMPLETAR: Usa fs.readFileSync para leer el archivo.

    const texto = JSON.parse(fs.readFileSync(filePath, "utf8"))


     if(texto.length > 0){
        notas= texto;
        
       let newnotas = notas.filter(el=> el.titulo != titulo)
      

        fs.writeFileSync("notas.json", JSON.stringify(newnotas) );
        console.log(`Nota con título "${titulo}" eliminada.`);

      }else{
        console.log("no hay contenido para eliminar")
      }

  } else {
    console.log('No hay notas para eliminar.');
  }
}

