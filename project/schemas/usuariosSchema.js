import Joi from 'joi';

/** Schema de contrato esperado para a resposta do endpoint POST /usuarios
 */

export const criarUsuarioSchema = Joi.object({
    message: Joi.string().required(),
    _id: Joi.string().required(),
});