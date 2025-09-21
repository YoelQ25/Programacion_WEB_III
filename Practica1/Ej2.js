// Crear una función que invierta el orden de las palabras en una frase.

const miFuncion = (frase) => {
    let fraseInv = '';
    for(let i = frase.length-1; i >= 0; i--){
        fraseInv += frase[i];
    }
    return fraseInv
}

let frase = miFuncion('computadora');
console.log(frase);