const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

clienteRoutes.post('/', clienteController.criar);
clienteRoutes.put('/:id', clienteController.editar);
clienteRoutes.delete('/:id', clienteController.deletar);
clienteRoutes.get('/', clienteController.selecionar);
export default clienteRoutes;
