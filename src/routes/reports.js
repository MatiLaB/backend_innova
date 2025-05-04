const Router = require('koa-router');
const Report = require('../models/report');

const router = new Router();

router.get("/reports", async (ctx) => {
  ctx.body = await Report.findAll();
});

router.post("/reports", async (ctx) => {
  ctx.body = await Report.create(ctx.request.body);
  ctx.status = 201;
});

router.get("/reports/:id", async (ctx) => {
  const report = await Report.findByPk(ctx.params.id);
  if (!report) ctx.throw(404, "Reporte no encontrado");
  ctx.body = report;
});

router.put("/reports/:id", async (ctx) => {
  const report = await Report.findByPk(ctx.params.id);
  if (!report) ctx.throw(404, "Reporte no encontrado");
  await report.update(ctx.request.body);
  ctx.body = report;
});

router.delete("/reports/:id", async (ctx) => {
  const report = await Report.findByPk(ctx.params.id);
  if (!report) ctx.throw(404, "Reporte no encontrado");
  await report.destroy();
  ctx.body = "Reporte eliminado";
});

module.exports = router;
