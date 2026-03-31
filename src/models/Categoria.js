export class Categoria {
    #id;
    #nome;
    #descricao;
    #dataCad;

    constructor(pNome, pDescricao, pId) {
        this.nome = pNome;
        this.descricao = pDescricao;
        this.id = pId;
    }


    //metodos acessores getters e setters
get id(){
    return this.#id;
}
set id(value){
    this.#validarId(value);
    this.#id = value;
}

get nome(){
    return this.#nome;
}

set nome(value){
    this.#validarNome(value);
    this.#nome = value;
}

get descricao(){
    return this.#descricao;
}

set descricao(value){
    this.#validarDescricao(value);
    this.#descricao = value;
}

//metodos auxiliares
#validarId(value){
    if(value && value <= 0){
        throw new Error('verifique o id informado');
    }
}
#validarNome(value){
    if(!value || value.trim().length < 3 || value.trim().length > 45){
        throw new Error('o campo nome é obrigatório e deve conter entre 3 e 45 caracteres');
    }
}
#validarDescricao(value){
    if(value && (value.trim().length < 10 || value.trim().length > 100)){
        throw new Error('o campo descrição deve conter entre 10 e 100 caracteres');
    }
}

//criacao de objetos utilizando o design pattern factory method
static criar(dados) {
    return new Categoria(dados.nome, dados.descricao, null);
}
static alterar(dados, id) {
    return new Categoria(dados.nome, dados.descricao, id);
}

}