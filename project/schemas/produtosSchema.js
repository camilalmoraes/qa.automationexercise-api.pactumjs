import Joi from 'joi';

/** Schema de contrato esperado para a resposta do endpoint POST /produtos
 */

export const criarProdutoSchema = Joi.object({
    message: Joi.string().required(),
    _id: Joi.string().required(),
});