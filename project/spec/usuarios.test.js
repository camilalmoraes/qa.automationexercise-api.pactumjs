
import assert from 'assert';
import { payloadCriarUsuario } from '../payloads/usuarioPayload.js';
import { serviceCriarUsuario, serviceDeletarUsuario } from '../services/usuarios.service.js';
import { criarUsuarioSchema } from '../schemas/usuariosSchema.js';
import { validarSchema } from '../helpers/joiHelper.js';

describe('Usuários', () => {

    let usuarioId;

    /** Remove o usuário criado nos testes após a execução da suíte, se o ID estiver disponível. */

    after(async () => {
        if (usuarioId) {
            await serviceDeletarUsuario(usuarioId);
        }
    });

    /** Verifica se a criação de usuário retorna status 201 e o ID do usuário criado. */

    it('1 - Criar usuário com sucesso', async () => {
        const payload = payloadCriarUsuario();

        const response = await serviceCriarUsuario(payload);

        usuarioId = response.body._id;
        assert.strictEqual(response.statusCode, 201);
    })

    /** Verifica se o corpo da resposta da criação de usuário está em conformidade com o schema definido. */

    it('2 - Contrato da criação do usuário com sucesso', async () => {
        const payload = payloadCriarUsuario();

        const response = await serviceCriarUsuario(payload);

        usuarioId = response.body._id;
        validarSchema(criarUsuarioSchema, response.body);
    });

    /** Verifica se a exclusão de usuário por ID retorna status 200. */

    it('3 - Deletar usuario com sucesso', async () => {
        const payload = payloadCriarUsuario();
        const criado = await serviceCriarUsuario(payload);

        const response = await serviceDeletarUsuario(criado.body._id);

        usuarioId = response.body._id;
        
        assert.strictEqual(response.statusCode, 200);
    });

});