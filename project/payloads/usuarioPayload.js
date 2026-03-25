import { gerarUsuario } from "../factories/dataFactory.js";

/** Monta o body para criação de um usuário com dados gerados dinamicamente.
 */

export function payloadCriarUsuario(){
    const dados = gerarUsuario();

    return {
        email: dados.email,
        nome: dados.nome,
        password: dados.password,
        administrador: dados.administrador
    }
}