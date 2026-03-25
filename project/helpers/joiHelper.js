/** Valida um objeto de dados contra um schema Joi.
 * Lança um erro com a mensagem de validação caso o objeto não esteja em conformidade.
 */

export function validarSchema(schema, dados) {
    const { error } = schema.validate(dados);
    if (error) {
        throw new Error(error.details[0].message);
    }
}