import assert from 'assert';
import { payloadCriarUsuario } from '../payloads/usuarioPayload.js';
import { payloadLogin } from '../payloads/loginPayload.js';
import { serviceCriarUsuario, serviceDeletarUsuario } from '../services/usuarios.service.js';
import { serviceRealizarLogin } from '../services/login.service.js';
import { loginSchema } from '../schemas/loginSchema.js';
import { validarSchema } from '../helpers/joiHelper.js';

describe('Login', () => {

    let usuario;
    let usuarioId;

    /** Cria um usuário antes da suíte para ser utilizado nos testes de login. */

    before(async () => {
        const payload = payloadCriarUsuario();
        const response = await serviceCriarUsuario(payload);
        usuarioId = response.body._id;
        usuario = payload;
    });

    /** Remove o usuário criado no before após a execução da suíte. */

    after(async () => {
        await serviceDeletarUsuario(usuarioId);
    });

    /** Verifica se o login retorna status 200 com credenciais válidas. */

    it('1 - Realizar Login com sucesso', async () => {

        const payload = payloadLogin(usuario.email, usuario.password);

        const response = await serviceRealizarLogin(payload.email, payload.password);

        assert.strictEqual(response.statusCode, 200)
    });

    /** Verifica se o corpo da resposta do login está em conformidade com o schema definido. */

    it('2 - Contrato do login com sucesso', async () => {
        const payload = payloadLogin(usuario.email, usuario.password);

        const response = await serviceRealizarLogin(payload.email, payload.password);

        validarSchema(loginSchema, response.body);
    });
})