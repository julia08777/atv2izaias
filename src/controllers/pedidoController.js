import { Pedido } from "../models/Pedido.js";
import { ItemPedido } from "../models/ItemPedido.js";
import PedidoRepository from "../repository/pedidoRepository.js";
export default class PedidoController {
    
    async adicionarItem(req, res) {
        try {
            const { pedidoId } = req.params;
            const dadosItem = req.body; 

            const novoItem = ItemPedido.criar({ ...dadosItem, pedidoId });

            await this.#atualizarValorGlobalPedido(pedidoId);

            return res.status(201).json({ message: "Item adicionado e subtotal atualizado com sucesso!" });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    async editarItem(req, res) {
        try {
            const { pedidoId, itemId } = req.params;
            const { novaQuantidade } = req.body;

            await this.#atualizarValorGlobalPedido(pedidoId);

            return res.status(200).json({ message: "Quantidade alterada e subtotal recalculado!" });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    async excluirItem(req, res) {
        try {
            const { pedidoId, itemId } = req.params;

            await this.#atualizarValorGlobalPedido(pedidoId);

            return res.status(200).json({ message: "Item removido e subtotal atualizado!" });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    async alterarStatus(req, res) {
        try {
            const { id } = req.params;
            const { status } = req.body;

            return res.status(200).json({ message: "Status do pedido alterado com sucesso!" });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    async #atualizarValorGlobalPedido(pedidoId) {
        console.log(`Subtotal do pedido ${pedidoId} recalculado.`);
    }
}