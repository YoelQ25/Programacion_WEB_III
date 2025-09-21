// Crear una función que reciba un arreglo de números y devuelva en un objeto a los pares e impares:

const miFuncion = (arreglo) => {
    let par_impar ={pares: [], impares: []};
    for(let  i = 0; i < arreglo.length; i++) {
        if(arreglo[i] % 2 === 0)
            par_impar.pares.push(arreglo[i]);
        else
            par_impar.impares.push(arreglo[i]);
    }
    return par_impar;
}

let arreglo = miFuncion([1,2,3,4,5,6,8]);
console.log(arreglo);