import {db} from '../config/db.js';

// 1. Crea un endpoint POST /categorias que permita registrar una nueva categoría
// enviando nombre y descripcion en el body de la petición.
export const insertaC = async (categoria) => {
    const {nombre, descripcion} = categoria;
    const [resultado] = await db.query(
        'INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)', [nombre, descripcion]
    );
    return resultado;
}


// 2. Crea un endpoint GET /categorias que devuelva todas las categorías registradas
// en la base de datos.
export const obtieneCategorias = async () => {
    const [resultado] = await db.query(
        'SELECT * FROM categorias'
    );
    return resultado;
}


// 3. Crea un endpoint GET /categorias/:id que devuelva la categoría con el ID
// especificado y además, incluya todos los productos que pertenecen a esa categoría.
export const obtieneCategoriaPorId = async (id) => {
    const [categoria] = await db.query(
        'SELECT id FROM categorias WHERE id = ?', [id]
    );
    
    const [productos] = await db.query(
        'SELECT * FROM productos WHERE categoria_id = ?', [id]
    );
    
    return {
        categoria,
        productos
    };
}


// 4. Crea un endpoint PUT /categorias/:id que permita actualizar todos los datos de
// la categoría con el ID especificado.
export const actualiza = async (id, categoria) => {
    const {nombre, descripcion, fecha_alta, fecha_act} = categoria;
    const [resultado] = await db.query(
        'UPDATE categorias SET nombre = ?, descripcion = ?, fecha_alta = ?, fecha_act = ? WHERE id = ?', 
        [nombre, descripcion, fecha_alta, fecha_act, id]
    );
    return resultado;
}


// 5. Crea un endpoint DELETE /categorias/:id que elimine la categoría indicada y,
// al mismo tiempo, elimine automáticamente todos los productos que pertenecen a esa categoría.
export const eliminaCategoria = async (id) => {
    await db.query(
        'DELETE FROM productos WHERE categoria_id = ?', [id]
    );
    
    const [resultado] = await db.query(
        'DELETE FROM categorias WHERE id = ?', [id]
    );
    
    return resultado;
}