import conexao from "../database/conexao.js"; // Ajuste o caminho da sua conexão

export default class PedidoRepository {

    async #executarQuery(sql, parametros) {
        return new Promise((resolve, reject) => {
            conexao.query(sql, parametros, (erro, resultado) => {
                if (erro) return reject(erro);
                return resolve(resultado);
            });
        });
    }

    async salvarItem(item) {
        const sql = "INSERT INTO itens_pedido (produto_id, quantidade, valor_unitario, pedido_id) VALUES (?, ?, ?, ?)";
        const params = [item.produtoId, item.quantidade, item.valorItem, item.pedidoId];
        return await this.#executarQuery(sql, params);
    }
    async atualizarQuantidadeItem(itemId, novaQuantidade) {
        const sql = "UPDATE itens_pedido SET quantidade = ? WHERE id = ?";
        return await this.#executarQuery(sql, [novaQuantidade, itemId]);
    }
    async deletarItem(itemId) {
        const sql = "DELETE FROM itens_pedido WHERE id = ?";
        return await this.#executarQuery(sql, [itemId]);
    }

    async buscarItensPorPedido(pedidoId) {
        const sql = "SELECT * FROM itens_pedido WHERE pedido_id = ?";
        return await this.#executarQuery(sql, [pedidoId]);
    }

    async atualizarSubTotalPedido(pedidoId, novoTotal) {
        const sql = "UPDATE pedidos SET subtotal = ? WHERE id = ?";
        return await this.#executarQuery(sql, [novoTotal, pedidoId]);
    }
    async atualizarStatusPedido(pedidoId, status) {
        const sql = "UPDATE pedidos SET status = ? WHERE id = ?";
        return await this.#executarQuery(sql, [status, pedidoId]);
    }
}