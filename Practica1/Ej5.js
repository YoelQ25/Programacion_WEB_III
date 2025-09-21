// Crear una función que determine si una cadena es palíndromo (se lee igual al derecho y al revés).

function palindromo(palabra) {
    let revez = '';
    for(let i = palabra.length-1; i >= 0 ; i--){
        revez += palabra[i];
    }

    if(palabra === revez)
        return true;
    else
        return false;
}

let cadena = palindromo('oruro');
console.log(cadena);

cadena = palindromo('hola');
console.log(cadena);