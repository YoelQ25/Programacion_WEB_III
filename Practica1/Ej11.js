// Proporcione un ejemplo concreto de encadenamiento de promesas.

const sumar = new Promise((resolve, reject) => {
    let a = 5;
    let b = 10;
    resolve(a + b);
})

sumar.then((resultado) => {
    console.log(resultado);
    return resultado * 2;
}).then((doble) => {
    console.log("Su doble es: " + doble);
});