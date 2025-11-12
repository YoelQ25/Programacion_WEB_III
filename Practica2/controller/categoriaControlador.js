import {insertaC, obtieneCategorias, obtieneCategoriaPorId, actualiza, eliminaCategoria} from '../module/categoriaModelo.js';

export const insertaCategoria = async(req, res) => {
    try{
        const resultado = await insertaC(req.body);
        res.json(resultado);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

export const muestraCategorias = async(req, res) => {
    try{
        const resultado = await obtieneCategorias();
        res.json(resultado);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

export const muestraCategoriaPorId = async(req, res) => {
    try{
        const resultado = await obtieneCategoriaPorId(req.params.id);
        res.json(resultado);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

export const actualizaCategoria = async(req, res) => {
    try{
        const resultado = await actualiza(req.params.id, req.body);
        res.json(resultado);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

export const eliminaCategoriaYProductos = async(req, res) => {
    try{
        const resultado = await eliminaCategoria(req.params.id);
        res.json(resultado);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}