// Realizar un código para ejecutar una función callback después 2 segundos.

const f = (callback) => {
    setTimeout(() => {
        callback();
    }, 2000);
}

const funcion = () => {
    console.log("Hola a todos");
}

f(funcion);