import Joi from 'joi';

/** Schema de contrato esperado para a resposta do endpoint POST /login.
 */

export const loginSchema = Joi.object({
    message: Joi.string().required(),
    authorization: Joi.string().required(),
});