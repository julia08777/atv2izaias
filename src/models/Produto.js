export class Produto {
    #id;
    #idCategoria;
    #nome;
    #valor;
    #caminhoImagem;
    #dataCad;

    constructor(pIdCategoria, pNome, pValor, pCaminhoImagem, pId) {
        this.idCategoria = pIdCategoria;
        this.nome = pNome;
        this.valor = pValor;
        this.caminhoImagem = pCaminhoImagem;
        this.id = pId;
        this.#dataCad = new Date();
    }

    get id() {
        return this.#id;
    }
    set id(value) {
        this.#validarId(value);
        this.#id = value;
    }

    get idCategoria() {
        return this.#idCategoria;
    }
    set idCategoria(value) {
        this.#validarIdCategoria(value);
        this.#idCategoria = value;
    }

    get nome() {
        return this.#nome;
    }
    set nome(value) {
        this.#validarNome(value);
        this.#nome = value;
    }

    get valor() {
        return this.#valor;
    }
    set valor(value) {
        this.#validarValor(value);
        this.#valor = value;
    }

    get caminhoImagem() {
        return this.#caminhoImagem;
    }
    set caminhoImagem(value) {
        this.#validarPathImagem(value);
        this.#caminhoImagem = value;
    }

    get dataCad() {
        return this.#dataCad;
    }

    #validarId(value) {
        if (value && value <= 0) {
            throw new Error('ID inválido');
        }
    }

    #validarIdCategoria(value) {
        if (!value || value <= 0) {
            throw new Error('ID da categoria inválido');
        }
    }

    #validarNome(value) {
        if (!value || value.trim().length < 3 || value.trim().length > 100) {
            throw new Error('Nome deve ter entre 3 e 100 caracteres');
        }
    }

    #validarValor(value) {
        if (!value || value <= 0) {
            throw new Error('Valor deve ser maior que zero');
        }
    }

    #validarPathImagem(value) {
        if (!value || value.trim().length < 5) {
            throw new Error('Caminho da imagem inválido');
        }
    }

    static criar(dados) {
        return new Produto(
            dados.idCategoria,
            dados.nome,
            dados.valor,
            dados.caminhoImagem,
            null
        );
    }

    static alterar(dados, id) {
        return new Produto(
            dados.idCategoria,
            dados.nome,
            dados.valor,
            dados.caminhoImagem,
            id
        );
    }
}

