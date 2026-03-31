import { Router } from "express";
import produtoController from "../controllers/produtoController.js";

const produtoRoutes = Router();

produtoRoutes.post('/', produtoController.criar);
produtoRoutes.put('/:id', produtoController.editar);
produtoRoutes.delete('/:id', produtoController.deletar);
produtoRoutes.get('/', produtoController.selecionar);

export default produtoRoutes;