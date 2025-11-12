import {insertProducto, muestraProductos, muestraProductoPorId, actualizProducto, actualizStockProducto} from '../controller/productoControlador.js'
import express from 'express';

const rutas = express.Router();

rutas.post('/productos', insertProducto);
rutas.get('/productos', muestraProductos);
rutas.get('/productos/:id', muestraProductoPorId);
rutas.put('/productos/:id', actualizProducto);
rutas.patch('/productos/:id/stock', actualizStockProducto);

export default rutas;