/** Monta o body para realizar o login
 */
export function payloadLogin(email, password) {
    return {
        email: email,
        password: password
    }
}