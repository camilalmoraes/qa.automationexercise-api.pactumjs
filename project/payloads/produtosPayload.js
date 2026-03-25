import { gerarProduto } from "../factories/dataFactory.js";

/** Monta o body para cadastro de um produto com dados gerados dinamicamente.
 */

export function payloadCriarProduto(){
    const dados = gerarProduto()
    return {
        nome: dados.nomeProduto,
        preco: dados.preco,
        descricao: dados.descricao,
        quantidade: dados.quantidade
    }
}