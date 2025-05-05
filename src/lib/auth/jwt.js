var jwt = require('jsonwebtoken')
const dotenv = require('dotenv');

dotenv.config();

function getJWTScope(token) {
    const secret = process.env.JWT_SECRET;
    var payload = jwt.verify(token, secret);
    return payload.scope;
}

async function isUser(ctx, next) {
    await next();

    const authHeader = ctx.request.header.authorization;

    ctx.assert(authHeader, 401, "No se proporcionó token de autorización");

    const parts = authHeader.split(' ');

    ctx.assert(parts.length === 2 && parts[0] === 'Bearer', 401, "Formato de token inválido");

    const token = parts[1];
    const scope = getJWTScope(token);

    ctx.assert(scope.includes('user'), 403, "Debes iniciar sesión");
}


module.exports = {
    isUser
};