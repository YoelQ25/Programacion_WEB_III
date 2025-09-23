// Proporcione un ejemplo para convertir un callback en una promesa.

// Usando un callback
const funcionC = (callback) => {
    let suma = 10 + 5;
    callback(suma);
}

funcionC((x) => {
    console.log(x);
})

// Usando promesa
const funcionP = new Promise((resolve) => {
    let operacion = 10 + 5;
    resolve(operacion);
})

const funcion = async() => {
    try{
        const exito = await funcionP;
        console.log(exito);
    }catch(error){
        console.log(error);
    }
}
funcion();