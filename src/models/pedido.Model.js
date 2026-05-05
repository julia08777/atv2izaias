export class Pedido {
    #id;
    #clienteId;
    #subTotal;
    #status;

    // CONSTRUTOR
    constructor(pClienteId, pSubTotal, pStatus, pId) {
        this.#clienteId = pClienteId;
        this.#subTotal = pSubTotal;
        this.#status = pStatus;
        this.#id = pId;
    }

    // GETTERS
    get id() { return this.#id; }
    get clienteId() { return this.#clienteId; }
    get subTotal() { return this.#subTotal; }
    get status() { return this.#status; }

    // SETTERS
    set id(value) {
        this.#validarId(value);
        this.#id = value;
    }

    set clienteId(value) {
        this.#validarClienteId(value);
        this.#clienteId = value;
    }

    set subTotal(value) {
        if (value < 0) throw new Error("O subtotal não pode ser negativo");
        this.#subTotal = value;
    }

    set status(value) {
        this.#status = value;
    }

    #validarId(value) {
        if (value && value <= 0) {
            throw new Error("Verifique o ID informado");
        }
    }

    #validarClienteId(value) {
        if (value && value <= 0) {
            throw new Error("Verifique o ID do Cliente informado");
        }
    }

    static criar(dados, id = null) {
        return new Pedido(dados.clienteId, dados.subTotal, dados.status, id);
    }
}