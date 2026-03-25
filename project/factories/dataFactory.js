import { faker } from "@faker-js/faker";

/** Gera dados aleatórios para criação de usuário
 */
export function gerarUsuario() {
    return {
        email: faker.internet.email(),
        nome: faker.person.firstName(),
        password: faker.internet.password(),
        administrador: 'true'
    }
}
/** Gera dados aleatórios para criação de produto
 */
export function gerarProduto() {
    return {
        nomeProduto: faker.commerce.productName(),
        preco: faker.number.int({ min: 1, max: 1000 }),
        descricao: faker.lorem.sentence(),
        quantidade: faker.number.int({ min: 1, max: 100 })
    }
}