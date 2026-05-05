export class Endereco {
  #id;
  #idCliente;
  #uf;
  #cep;
  #numero;
  #cidade;
  #bairro;
  #complemento;
  #logradoro;

  constructor(pIdCliente, pUf, pCep, pNumero, pCidade, pBairro, pComplemento, pLogradoro, pId) {
    this.idCliente = pIdCliente;
    this.uf = pUf;
    this.cep = pCep;
    this.numero = pNumero;
    this.cidade = pCidade;
    this.bairro = pBairro;
    this.complemento = pComplemento;
    this.logradoro = pLogradoro;
    this.id = pId;
  }

  get id() {
    return this.#id;
  }

  set id(value) {
    this.#validarId(value);
    this.#id = value;
  }

  get idCliente() {
    return this.#idCliente;
  }

  set idCliente(value) {
    this.#validarIdCliente(value);
    this.#idCliente = value;
  }

  get uf() {
    return this.#uf;
  }

  set uf(value) {
    this.#validarUf(value);
    this.#uf = value;
  }

  get cep() {
    return this.#cep;
  }

  set cep(value) {
    this.#validarCep(value);
    this.#cep = value;
  }

  get numero() {
    return this.#numero;
  }

  set numero(value) {
    this.#validarNumero(value);
    this.#numero = value;
  }

  get cidade() {
    return this.#cidade;
  }

  set cidade(value) {
    this.#validarCidade(value);
    this.#cidade = value;
  }

  get bairro() {
    return this.#bairro;
  }

  set bairro(value) {
    this.#validarBairro(value);
    this.#bairro = value;
  }

  get complemento() {
    return this.#complemento;
  }

  set complemento(value) {
    this.#complemento = value;
  }

  get logradoro() {
    return this.#logradoro;
  }

  set logradoro(value) {
    this.#validarLogradoro(value);
    this.#logradoro = value;
  }

 
  #validarId(value) {
    if (value && value <= 0) {
      throw new Error("O valor do Id não corresponde ao numero necessario");
    }
  }

  #validarIdCliente(value) {
    if (value && (isNaN(value) || value <= 0)) {
      throw new Error("idCliente inválido");
    }
  }

  #validarUf(value) {
    if (!value || value.length != 2) {
      throw new Error("UF inválida");
    }
  }

  #validarCep(value) {
    if (!value || value.length < 8) {
      throw new Error("CEP inválido");
    }
  }

  #validarNumero(value) {
    if (!value) {
      throw new Error("Número inválido");
    }
  }

  #validarCidade(value) {
    if (!value || value.trim().length < 3) {
      throw new Error("Cidade inválida");
    }
  }

  #validarBairro(value) {
    if (!value || value.trim().length < 3) {
      throw new Error("Bairro inválido");
    }
  }

  #validarLogradoro(value) {
    if (!value || value.trim().length < 3) {
      throw new Error("Logradouro inválido");
    }
  }
 

  static criar(dados) {
    return new Endereco(
      null,
      dados.uf,
      dados.cep,
      dados.numero,
      dados.cidade,
      dados.bairro,
      dados.complemento,
      dados.logradoro,
      null );
  }

  static editar(dados, id) {
    return new Endereco(dados.idCliente,dados.Uf,dados.Cep,dados.Numero,dados.Cidade,dados.Bairro,dados.Complemento,dados.Logradoro,id);
  }
}