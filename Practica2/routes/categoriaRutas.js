import {insertaCategoria, muestraCategorias, muestraCategoriaPorId, actualizaCategoria, eliminaCategoriaYProductos} from '../controller/categoriaControlador.js'
import express from 'express';

const rutas = express.Router();

rutas.post('/categorias', insertaCategoria);
rutas.get('/categorias', muestraCategorias);
rutas.get('/categorias/:id', muestraCategoriaPorId);
rutas.put('/categorias/:id', actualizaCategoria);
rutas.delete('/categorias/:id', eliminaCategoriaYProductos);


export default rutas;
