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

// Crear nuevo usuario
router.post("/users", async (ctx) => {
	try {
		const newUser = await User.create(ctx.request.body);
		ctx.body = newUser;
		ctx.status = 201;
	} catch (err) {
		ctx.body = "Error al crear usuario";
		ctx.status = 400;
	}
});
  
// Obtener un solo usuario
router.get("/users/:id", async (ctx) => {
	try {
		const user = await User.findByPk(ctx.params.id);
		if (!user) {
			ctx.status = 404;
			ctx.body = "Usuario no encontrado";
			return;
	}
	  	ctx.body = user;
	} catch (err) {
		ctx.body = "Error al obtener el usuario";
		ctx.status = 500;
	}
});
  
// Actualizar un usuario
router.put("/users/:id", async (ctx) => {
	try {
		const user = await User.findByPk(ctx.params.id);
		if (!user) {
			ctx.status = 404;
			ctx.body = "Usuario no encontrado";
			return;
	}
		await user.update(ctx.request.body);
		ctx.body = user;
	} catch (err) {
		ctx.body = "Error al actualizar el usuario";
		ctx.status = 500;
	}
});
  
// Eliminar usuario
router.delete("/users/:id", async (ctx) => {
	try {
		const user = await User.findByPk(ctx.params.id);
		if (!user) {
			ctx.status = 404;
			ctx.body = "Usuario no encontrado";
			return;
	}
		await user.destroy();
		ctx.body = "Usuario eliminado";
	} catch (err) {
		ctx.body = "Error al eliminar el usuario";
		ctx.status = 500;
	}
});
  
module.exports = router;