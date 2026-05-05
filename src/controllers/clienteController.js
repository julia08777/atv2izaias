const Cliente = require('../models/Cliente.');
const axios = require('axios'); 
class ClienteController {
    async cadastrar(req, res) {
        try {
            const { nome, cpf, cep, telefone, numero, complemento } = req.body;
            const respApi = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            const dadosCep = respApi.data;

            if (dadosCep.erro) {
                return res.status(400).json({ error: "CEP não encontrado" });
            }
            const endereco = {
                logradouro: dadosCep.logradouro,
                bairro: dadosCep.bairro,
                localidade: dadosCep.localidade,
                numero: numero,
                complemento: complemento
            };
            const novoCliente = new Cliente(
                nome,
                cpf,
                cep,
                endereco, 
                Array.isArray(telefone) ? telefone : [telefone] 
            );
            return res.status(201).json(novoCliente);
            
        } catch (error) {
            return res.status(400).json({ error: "Erro ao processar cadastro: " + error.message });
        }
    }
}
export default new ClienteController();