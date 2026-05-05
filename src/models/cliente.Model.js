class Cliente {
    constructor(id, nome, cpf, cep, enderecoObj, telefones, dataCad) {
        this.id = id;
        this.nome = this.validarNome(nome);
        this.cpf = this.validarCpf(cpf);
        this.cep = this.validarCep(cep);
        this.endereco = {
            logradouro: enderecoObj.logradouro,
            bairro: enderecoObj.bairro,
            localidade: enderecoObj.localidade,
            numero: enderecoObj.numero,
            complemento: enderecoObj.complemento
        };
        this.telefones = this.validarTelefone(telefones);
        this.dataCad = dataCad || new Date().toLocaleString('pt-BR');
    }
    validarNome(nome) {
        if (!nome || nome.length < 3) throw new Error("Nome inválido.");
        return nome;
    }
    validarCpf(cpf) {
        if (!cpf) throw new Error("CPF é obrigatório.");
        return cpf.replace(/\D/g, '');
    }
    validarCep(cep) {
        const cepLimpo = cep.replace(/\D/g, '');
        if (cepLimpo.length !== 8) throw new Error("CEP inválido.");
        return cepLimpo;
    }
    validarTelefone(telefones) {
        if (!Array.isArray(telefones) || telefones.length === 0) {
            throw new Error("Pelo menos um telefone deve ser informado.");
        }
        return telefones;
    }
}
export default Cliente.Model();