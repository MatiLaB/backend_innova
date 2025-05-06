const Router = require('koa-router');
var jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User = require('../models/user'); // modelo user
const bcrypt = require('bcryptjs');

dotenv.config();
const router = new Router();

// ruta para crear un usuario
router.post("/createUser", async (ctx) => {
	const {  username, email, password } = ctx.request.body;

    // validar campos
    if (!username || !email || !password) {
		ctx.status = 400;
		ctx.body = "Por favor ingresa un nombre de usuario, correo y contraseña";
		return;
	}

    // verificar si existe
	const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
		ctx.status = 400;
		ctx.body = "El correo ya está registrado, intenta con otro";
		return;
	}

    const existingUsername = await User.findOne({ where: { username } });
    if (existingUsername) {
		ctx.status = 400;
		ctx.body = "El nombre de usuario ya está registrado, intenta con otro";
		return;
	}

    try{
        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(String(password), saltRounds);
        const newUser = await User.create({
			username,
			email,
			password: hashPassword,
			balance: 0 
		});
		console.log("usuario creado!")
        const expirationSeconds = 1 * 60 * 60 * 24;
        const JWT_PRIVATE_KEY = process.env.JWT_SECRET;
        var token = jwt.sign(
            { scope: ['user'], id: newUser.id },
            JWT_PRIVATE_KEY,
            {
            subject: newUser.id.toString(),
            expiresIn: expirationSeconds,
            issuer: 'https://backend-innova-8do9.onrender.com',
            audience: 'https://estetica-vs.netlify.app'
            }
        );
        ctx.body = {
            "message": `Usuario creado correctamente, el id es: ${newUser.id}`,
            "access_token": token,
            "user": newUser,
            "token_type": "Bearer",
            "expires_in": expirationSeconds,
            }
        ctx.status = 200;
    } catch (err) {
        console.log(err)
		ctx.status = 500;
		ctx.body = err;
    }
});

router.post("/login", async (ctx) => {
    let user;
    const authInfo = ctx.request.body
    try {
        user = await User.findOne({where:{email:authInfo.email}});
    } catch(error) {
        ctx.body = error;
        ctx.status = 400;
        return;
    }
    if (!user) {
        ctx.body = "Este usuario no existe";
        ctx.status = 402;
        return;
    }

    const validPassword = await bcrypt.compare(authInfo.password, user.password)

    if (validPassword) {
        ctx.body = {
            username: user.username,
            email: user.email,
        };
        ctx.status = 200;
    } else {
        ctx.body = "Contraseña Incorrecta";
        ctx.status = 401;
        return;
    }
    const expirationSeconds = 1 * 60 * 60 * 24;
    const JWT_PRIVATE_KEY = process.env.JWT_SECRET;
    var token = jwt.sign(
        { scope: ['user'] ,  id: user.id },
        JWT_PRIVATE_KEY,
        {
        subject: user.id.toString(),
        expiresIn: expirationSeconds,
        issuer: 'https://backend-innova-8do9.onrender.com',
        audience: 'https://estetica-vs.netlify.app'
        }
    );
    ctx.body = {
    "access_token": token,
    "user": user,
    "token_type": "Bearer",
    "expires_in": expirationSeconds,
    }
    ctx.status = 200;
});

module.exports = router;