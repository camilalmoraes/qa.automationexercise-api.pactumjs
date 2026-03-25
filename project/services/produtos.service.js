import pactum from 'pactum';
const { spec } = pactum;

/** Envia os dados do produto para o endpoint POST /produtos autenticado com o token informado.
 */

export async function serviceCriarProduto(payload, token) {
  return await spec()
    .post('/produtos')
    .withJson(payload)
    .withHeaders('Authorization', token)
    .toss();

}