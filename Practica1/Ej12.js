// Proporcione un ejemplo concreto donde el anidamiento de 
// callbacks se puede reescribir mejor con async/await haciendo 
// el código más limpio y mantenible.


// Con callbacks anidados
function datosEstudiante(callback) {
        const datos = { nombre: "Juan", edad: 30 };
        callback(datos);
}

function mostrarDatos(datos, callback) {
        const mensaje = `Nombre: ${datos.nombre}, Edad: ${datos.edad}`;
        callback(mensaje);
}

datosEstudiante((datos) => {
    mostrarDatos(datos, (mensaje) => {
        console.log(mensaje);
    });
});



// Con async/await

const obtenerDatos = new Promise((resolve) => {
        const datos = { nombre: "Juan", edad: 30 };
        resolve(datos);
});

function procesarDatos(datos) {
    return new Promise((resolve) => {
        const mensaje = `Nombre: ${datos.nombre}, Edad: ${datos.edad}`;
        resolve(mensaje);
    });
}

const funcion = async() => {
    try{
        const datos = await obtenerDatos;
        const mensaje = await procesarDatos(datos);
        console.log(mensaje);
    }catch(error){
        console.log(error);
    }
}

funcion();