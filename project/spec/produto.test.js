import assert from 'assert';
import { serviceCriarProduto } from '../services/produtos.service.js';
import { payloadCriarProduto } from '../payloads/produtosPayload.js';
import { serviceCriarUsuario, serviceDeletarUsuario } from '../services/usuarios.service.js';
import { payloadCriarUsuario } from '../payloads/usuarioPayload.js';
import { serviceRealizarLogin } from '../services/login.service.js';
import { criarProdutoSchema } from '../schemas/produtosSchema.js';
import { validarSchema } from '../helpers/joiHelper.js';

describe('Produtos', () => {

    let usuarioId;
    let token;

    /** Cria um usuário administrador e realiza login para obter o token antes da suíte. */

    before(async () => {

        const usuario = payloadCriarUsuario();
        const criado = await serviceCriarUsuario(usuario);
        usuarioId = criado.body._id;

        const login = await serviceRealizarLogin(usuario.email, usuario.password);
        token = login.body.authorization;
    });

    /** Remove o usuário criado no before após a execução da suíte. */

    after(async () => {
        await serviceDeletarUsuario(usuarioId);
    })

    /** Verifica se o cadastro de produto retorna status 201 e o ID do produto criado. */

    it('1 - Cadastrar produto com sucesso', async () => {

        const payload = payloadCriarProduto();

        const response = await serviceCriarProduto(payload, token);

        assert.strictEqual(response.statusCode, 201);
        assert.ok(response.body._id, 'Cadastro realizado com sucesso');
    });

    /** Verifica se o corpo da resposta do cadastro de produto está em conformidade com o schema definido. */

    it('2 - Validar contrato do cadastro de produto com sucesso', async () => {

        const payload = payloadCriarProduto();

        const response = await serviceCriarProduto(payload, token);

        validarSchema(criarProdutoSchema, response.body);
    });


})