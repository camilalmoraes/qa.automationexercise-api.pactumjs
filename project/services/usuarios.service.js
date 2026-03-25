import pactum from 'pactum';
const { spec } = pactum;

/** Envia os dados do usuário para o endpoint POST /usuarios e retorna a resposta.
 */

export async function serviceCriarUsuario(payload) {
  return await spec()
    .post('/usuarios')
    .withJson(payload)
    .toss();
};

/** Realiza a exclusão do usuário pelo ID informado no endpoint DELETE /usuarios/:id.
 */

export async function serviceDeletarUsuario(id) {
  return await spec()
    .delete(`/usuarios/${id}`)
    .toss();
};