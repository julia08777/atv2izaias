export class Telefone {
  #id;
  #idCliente;
  #telefone;
  

  constructor(pidCliente, ptelefone, pId) {
    this.#idCliente = pidCliente;
    this.#telefone = ptelefone;
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

  get telefone() {
    return this.#telefone;
  }

  set telefone(value) {
    this.#validarTelefone(value);
    this.#telefone = value;
  }




  #validarId(value) {
    if (value && value <= 0) {
      throw new Error("O valor do Id não corresponde ao numero necessario");
    }
  }

  #validarIdCliente(value) {
    if (!value || isNaN(value) || value <= 0) {
      throw new Error("idCliente inválido");
    }
  }

  #validarTelefone(value) {
    console.log(value)
    if (!value || value.trim().length < 3 || value.trim().length > 100) {
      throw new Error("O numero de telefone é obrigatorio deve conter entre 9 e 20 números");
    }
  }

  
  static criar(dados) {
    return new Telefone(
      null,
      dados.telefone,
      null
    );
  }

  static editar(dados, id) {
    return new Telefone(
      dados.idCliente,
      dados.telefone,
      id
    );
  }
}