// Crear una función que cuente cuántas veces aparece cada vocal 
// en un texto y devuelva el resultado en un objeto.

function miFuncion(texto) {
    let vocales = {a:0,e:0,i:0,o:0,u:0};
    for(let  i = 0; i < texto.length; i++) {
        if(texto[i] == 'a')
            vocales.a++;
        if(texto[i] == 'e')
            vocales.e++;
        if(texto[i] == 'i')
            vocales.i++;
        if(texto[i] == 'o')
            vocales.o++;
        if(texto[i] == 'u')
            vocales.u++;
    }
    return vocales;
}

let obj = miFuncion('diccionario');
console.log(obj)