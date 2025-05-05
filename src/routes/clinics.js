const Router = require('koa-router');
const Clinic = require('../models/clinic');

const router = new Router();

// CRUD Básico
router.get("/clinics", async (ctx) => {
  try {
      const clinics = await Clinic.findAll();
      // si no hay usuarios creados
      if (clinics.length === 0) {
        ctx.body = "No hay clinicas en la base de datos";
        ctx.status = 404;
        return;
        // si solicitud es exitosa
      } else {
        ctx.body = clinics;
        ctx.status = 200;
      }
      // si solicitud falla
    } catch (err) {
      console.log("Error", err);
      ctx.body = "Hubo un error al intentar obtener las clinicas";
      ctx.status = 500;
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