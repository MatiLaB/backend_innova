const Router = require('koa-router');
const Clinic = require('../models/clinic');

const router = new Router();

// CRUD Básico
router.get("/clinics", async (ctx) => {
  ctx.body = await Clinic.findAll();
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