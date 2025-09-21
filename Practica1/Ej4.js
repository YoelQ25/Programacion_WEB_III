// Crear una función que reciba un arreglo de números y devuelva el número mayor y el menor, en un objeto.

const miFuncion = (num) => {
    let obj = {mayor: num[0], menor: num[0]}
    for(let  i = 1; i < num.length; i++){
        if(num[i] < obj.menor)
            obj.menor = num[i];
        if(num[i] > obj.mayor)
            obj.mayor = num[i];
    }
    return obj;
}

let numeros = miFuncion([3,1,5,4,2])
console.log(numeros)