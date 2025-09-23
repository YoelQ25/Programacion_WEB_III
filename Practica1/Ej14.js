// Proporcione un ejemplo para convertir una promesa en un callback.


// Usando la promesa
const saludoP = new Promise((resolve) => {
    resolve("Hola a todos");
})

saludoP.then((exito) => {
    console.log(exito);
})


// Usando callback

const saludar = (x) => {
    console.log(x);
}

const saludoC = (mensaje, callback) => {
    callback(mensaje);
}

saludoC("Hola a todos", saludar);