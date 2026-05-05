const { connection } = require("../configs/Database"); 
const clienteRepository = {
    criar: async (cliente) => {
        const conn = await connection.getConnection();
        try {
        await conn.beginTransaction();

        const [resCliente] = await conn.execute(
                'INSERT INTO clientes (Nome, Cpf) VALUES (?, ?)', 
                [cliente.nome, cliente.cpf]
            );
         const idCliente = resCliente.insertId;
         const { logradouro, numero, complemento, bairro, localidade, cep } = cliente.endereco;
            
        await conn.execute(
                `INSERT INTO enderecos (IdCliente, Cep, Logradouro, Numero, Complemento, Bairro, Cidade ) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
                [idCliente, cliente.cep, logradouro, numero, complemento || null, bairro, localidade ]
            );
            if (cliente.telefones && cliente.telefones.length > 0) {
                const queryTelefone = 'INSERT INTO telefones (IdCliente, Numero) VALUES (?, ?)';
                for (const tel of cliente.telefones) {
                    await conn.execute(queryTelefone, [idCliente, tel]);
                }
            }
            connection.commit();
            return { id: idCliente, ...cliente };
        } catch (error) {
            await conn.rollback();
            throw error;
        } finally {
            conn.release();
        }
    }
}
export default clienteRepository();