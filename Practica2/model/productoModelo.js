import {db} from '../config/db.js';

// 6. Crea un endpoint POST /productos que permita registrar un nuevo producto enviando 
// nombre, precio, stock y categoria_id para asociarlo a una categoría existente.
export const insertaProducto = async (producto) => {
    const {nombre, precio, stock, categoria_id} = producto;
    const [resultado] = await db.query(
        'INSERT INTO productos (nombre, precio, stock, categoria_id) VALUES (?, ?, ?, ?)', 
        [nombre, precio, stock, categoria_id]
    );
    return resultado;
}



// 7. Crea un endpoint GET /productos que devuelva todos los productos y muestre el nombre 
// de la categoría a la que pertenece cada uno.
export const obtieneProductos = async () => {
    const [resultado] = await db.query(
        'SELECT p.*, c.nombre AS nombre_categoria FROM productos p, categorias c WHERE p.categoria_id = c.id'
    );
    return resultado;
}



// 8. Crea un endpoint GET /productos/:id que devuelva la información de un producto por su ID, 
// incluyendo el nombre de la categoría asociada.
export const obtieneProductoPorId = async (id) => {
    const [resultado] = await db.query(
        'SELECT p.*, c.nombre AS nombre_categoria FROM productos p, categorias c WHERE p.id = 3 AND p.categoria_id = c.id', [id]
    );
    
    return resultado[0];
}



// 9. Crea un endpoint PUT /productos/:id que permita actualizar todos los datos de un producto, 
// incluyendo la opción de cambiar la categoría a la que pertenece mediante categoria_id.
export const actualizaProducto = async (id, producto) => {
    const {nombre, precio, stock, categoria_id} = producto;
    const [resultado] = await db.query(
        'UPDATE productos SET nombre = ?, precio = ?, stock = ?, categoria_id = ? WHERE id = ?',
        [nombre, precio, stock, categoria_id, id]
    );
    return resultado;
}



// 10. Crea un endpoint PATCH /productos/:id/stock que permita incrementar o decrementar el stock 
// de un producto enviando al body la cantidad que se desea sumar o restar.
export const actualizaStock = async (id, cantidad) => {
    const [resultado] = await db.query(
        'UPDATE productos SET stock = stock + ? WHERE id = ?', [cantidad, id]
    );
    return resultado;
}
