export class ItemPedido {
    #id;
    #pedidoId;
    #produtoId;
    #quantidade;
    #valorItem;

    // CONSTRUTOR
    constructor(pProdutoId, pQuantidade, pValorItem, pId, pPedidoId) {
        this.#produtoId = pProdutoId;
        this.#quantidade = pQuantidade;
        this.#valorItem = pValorItem;
        this.#id = pId;
        this.#pedidoId = pPedidoId;
    }

    // GETTERS
    get id() { return this.#id; }
    get pedidoId() { return this.#pedidoId; }
    get produtoId() { return this.#produtoId; }
    get quantidade() { return this.#quantidade; }
    get valorItem() { return this.#valorItem; }

    // SETTERS
    set id(value) {
        this.#validarId(value);
        this.#id = value;
    }

    set pedidoId(value) {
        this.#validarPedidoId(value);
        this.#pedidoId = value;
    }

    set quantidade(value) {
        this.#validarQuantidade(value);
        this.#quantidade = value;
    }

    set valorItem(value) {
        this.#validarValorItem(value);
        this.#valorItem = value;
    }

    #validarId(value) {
        if (value && value <= 0) throw new Error("ID do item inválido");
    }

    #validarPedidoId(value) {
        if (!value || value <= 0) {
            throw new Error("Verifique o ID do pedido informado");
        }
    }

    #validarQuantidade(value) {
        if (!value || value <= 0) {
            throw new Error("A quantidade deve ser maior que zero");
        }
    }

    #validarValorItem(value) {
        if (!value || value <= 0) {
            throw new Error("Informe um valor válido para o item");
        }
    }
    static calcularSubTotalItens(itens) {
        return itens.reduce((total, item) => {
            return total + (item.valorItem * item.quantidade);
        }, 0);
    }

    // DESIGN PATTERN
    static criar(dados, id = null) {
        return new ItemPedido(
            dados.produtoId, 
            dados.quantidade, 
            dados.valorItem, 
            id, 
            dados.pedidoId || null
        );
    }
}