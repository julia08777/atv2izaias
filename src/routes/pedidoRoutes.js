import { Router } from "express";
import PedidoController from "../controllers/pedidoController.js";
const pedidoRoutes = Router();
const controller = new PedidoController();

pedidoRoutes.post('/', controller.criar);
pedidoRoutes.post('/:pedidoId/itens', controller.adicionarItem);
pedidoRoutes.put('/:pedidoId/itens/:itemId', controller.editarItem);
pedidoRoutes.delete('/:pedidoId/itens/:itemId', controller.excluirItem);

export default pedidoRoutes;