// Proporcione un ejemplo para migrar una función con 
// promesas a async/await.

// Funcion con promesas:

const promesas = (valor) => {
    return new Promise((resolve, reject) => {
        if(valor)
            resolve(valor);
        else
            reject(valor);
    })

    .then((exito) => {
        console.log(exito);
    }).catch((error) => {
        console.log(error);
    })
}
promesas(false);

// Migrado a async/await.

const promesas2 = async(valor) => {
    try{
        const resultado = await new Promise((resolve, reject) => {
        if(valor)
            resolve(valor);
        else
            reject(valor);
        })

        console.log(resultado);
    }catch(error){
        console.log(error);
    }
}
promesas2(true);