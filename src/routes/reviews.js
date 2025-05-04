const Router = require('koa-router');
const Review = require('../models/review');

const router = new Router();

router.get("/reviews", async (ctx) => {
  ctx.body = await Review.findAll();
});

router.post("/reviews", async (ctx) => {
  ctx.body = await Review.create(ctx.request.body);
  ctx.status = 201;
});

router.get("/reviews/:id", async (ctx) => {
  const review = await Review.findByPk(ctx.params.id);
  if (!review) ctx.throw(404, "Reseña no encontrada");
  ctx.body = review;
});

router.put("/reviews/:id", async (ctx) => {
  const review = await Review.findByPk(ctx.params.id);
  if (!review) ctx.throw(404, "Reseña no encontrada");
  await review.update(ctx.request.body);
  ctx.body = review;
});

router.delete("/reviews/:id", async (ctx) => {
  const review = await Review.findByPk(ctx.params.id);
  if (!review) ctx.throw(404, "Reseña no encontrada");
  await review.destroy();
  ctx.body = "Reseña eliminada";
});

module.exports = router;
