import {insertaProducto, obtieneProductos, obtieneProductoPorId, actualizaProducto, actualizaStock} from '../module/productoModelo.js';

export const insertProducto = async (req, res) => {
    try {
        const resultado = await insertaProducto(req.body);
        res.json(resultado);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const muestraProductos = async (req, res) => {
    try {
        const resultado = await obtieneProductos();
        res.json(resultado);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const muestraProductoPorId = async (req, res) => {
    try {
        const resultado = await obtieneProductoPorId(req.params.id);
        res.json(resultado);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const actualizProducto = async (req, res) => {
    try {
        const resultado = await actualizaProducto(req.params.id, req.body);
        res.json({resultado});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const actualizStockProducto = async (req, res) => {
    try {
        const {cantidad} = req.body;
        const resultado = await actualizaStock(req.params.id, cantidad);
        res.json({resultado});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};
