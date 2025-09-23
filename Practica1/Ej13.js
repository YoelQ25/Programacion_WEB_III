// Proporcione un ejemplo concreto donde el anidamiento de 
// promesas se puede reescribir mejor con async/await haciendo 
// el código más limpio y mantenible.


// Usando anidamiento de promesas
// const promesa1 = new Promise((resolve) => {
//     resolve("Promesa 1 tuvo exito");
// })

// const promesa2 = new Promise((resolve) => {
//     resolve("Promesa 2 tuvo exito");
// })

// const promesa3 = new Promise((resolve) => {
//     resolve("Promesa 3 tuvo exito");
// })

// promesa1.then((exito1) => {
//     console.log(exito1);
//     promesa2.then((exito2) => {
//         console.log(exito2);
//         promesa3.then((exito3) => {
//             console.log(exito3);
//         })
//     })
// })


// Usando async/await

const promesa1 = new Promise((resolve) => {
    resolve("Promesa 1 tuvo exito");
})

const promesa2 = new Promise((resolve) => {
    resolve("Promesa 2 tuvo exito");
})

const promesa3 = new Promise((resolve) => {
    resolve("Promesa 3 tuvo exito");
})

const funcion = async() => {
    try{
        const exito1 = await promesa1;
        console.log(exito1);
        const exito2 = await promesa2;
        console.log(exito2);
        const exito3 = await promesa3;
        console.log(exito3);
    }catch(error){
        console.log(error);
    }
}
funcion();