import pactum from 'pactum'
const { request } = pactum

/** Configurações globais aplicadas antes da execução de todos os testes.
 * Define a URL base e o timeout padrão para todas as requisições.
 */

export const mochaHooks = {
    beforeAll() {
        request.setBaseUrl('https://serverest.dev');
        request.setDefaultTimeout(15000);
    }
};