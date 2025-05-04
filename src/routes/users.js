const Router = require('koa-router');
const { Op } = require('sequelize');
const User = require('../models/user'); // modelo user

const router = new Router();

// ruta para obtener a todos los usuarios
router.get("/users", async (ctx) => {
	try {
		const users = await User.findAll();
		// si no hay usuarios creados
		if (users.length === 0) {
			ctx.body = "No hay usuarios creados en la base de datos";
			ctx.status = 404;
			return;
			// si solicitud es exitosa
		} else {
			ctx.body = users;
			ctx.status = 200;
		}
		// si solicitud falla
	} catch (err) {
		console.log("Error", err);
		ctx.body = "Hubo un error al intentar obtener los usuarios";
		ctx.status = 500;
	}
});


module.exports = router;