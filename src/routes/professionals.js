const Router = require('koa-router');
const Professional = require('../models/professional');

const router = new Router();

router.get("/professionals", async (ctx) => {
  ctx.body = await Professional.findAll();
});

router.post("/professionals", async (ctx) => {
  ctx.body = await Professional.create(ctx.request.body);
  ctx.status = 201;
});

router.get("/professionals/:id", async (ctx) => {
  const professional = await Professional.findByPk(ctx.params.id);
  if (!professional) ctx.throw(404, "Profesional no encontrado");
  ctx.body = professional;
});

router.put("/professionals/:id", async (ctx) => {
  const professional = await Professional.findByPk(ctx.params.id);
  if (!professional) ctx.throw(404, "Profesional no encontrado");
  await professional.update(ctx.request.body);
  ctx.body = professional;
});

router.delete("/professionals/:id", async (ctx) => {
  const professional = await Professional.findByPk(ctx.params.id);
  if (!professional) ctx.throw(404, "Profesional no encontrado");
  await professional.destroy();
  ctx.body = "Profesional eliminado";
});

module.exports = router;
