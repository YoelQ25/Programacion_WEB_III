// Crear una promesa que devuelva un mensaje de éxito después de 3 segundos.

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Exito');
    }, 3000);
})

promesa.then((mensaje) => {
    console.log(mensaje);
}).catch((error) => {
    console.error('Error:', error);
});