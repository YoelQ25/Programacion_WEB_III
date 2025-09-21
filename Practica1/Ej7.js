// Almacenar el resto de los elementos de un arreglo 
// sin tomar en cuenta los dos primeros elementos de 
// un arreglo, mediante desestructuración.

arreglo = ['Juan', 'Jose', 'Maria', 'Pablo', 'Juana'];

let [ , , ...restoElementos] = arreglo;
console.log(restoElementos);