const Router = require('koa-router');
const { Op } = require('sequelize');
const Clinic = require('../models/clinic');

const router = new Router();

// CRUD Básico
router.get("/clinics", async (ctx) => {
  try {
    const { name, location, procedures, minRating } = ctx.query;

    const where = {};

    if (name) {
      where.name = {
        [Op.iLike]: `%${name}%`
      };
    }

    if (location) {
      where.location = {
        [Op.iLike]: `%${location}%`
      };
    }

    if (minRating) {
      where.rating = {
        [require('sequelize').Op.gte]: parseFloat(minRating)
      };
    }

    if (procedures) {
      where.procedures = {
        [require('sequelize').Op.contains]: [procedures]
      };
    }

    const clinics = await Clinic.findAll({ where });

    ctx.status = 200;
    ctx.body = clinics;
  } catch (err) {
    console.error("Error al filtrar clínicas:", err);
    ctx.status = 500;
    ctx.body = "Error interno del servidor";
  }
});

router.post("/clinics", async (ctx) => {
  ctx.body = await Clinic.create(ctx.request.body);
  ctx.status = 201;
});

router.get("/clinics/:id", async (ctx) => {
  const clinic = await Clinic.findByPk(ctx.params.id);
  if (!clinic) ctx.throw(404, "Clínica no encontrada");
  ctx.body = clinic;
});

router.put("/clinics/:id", async (ctx) => {
  const clinic = await Clinic.findByPk(ctx.params.id);
  if (!clinic) ctx.throw(404, "Clínica no encontrada");
  await clinic.update(ctx.request.body);
  ctx.body = clinic;
});

router.delete("/clinics/:id", async (ctx) => {
  const clinic = await Clinic.findByPk(ctx.params.id);
  if (!clinic) ctx.throw(404, "Clínica no encontrada");
  await clinic.destroy();
  ctx.body = "Clínica eliminada";
});

module.exports = router;