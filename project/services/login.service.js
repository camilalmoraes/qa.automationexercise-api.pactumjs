import pactum from 'pactum';
const { spec } = pactum;

/** Envia as credenciais do usuário para o endpoint POST /login e retorna a resposta.
 */

export async function serviceRealizarLogin(email, password){
    return await spec()
      .post('/login')
      .withJson({ email, password })
      .toss();
  };