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

router.get("/clinics/:clinicId/reviews", async (ctx) => {
  const { clinicId } = ctx.params;
  try {
    const reviews = await Review.findAll({
      where: { clinicId },
      include: [{ model: User, attributes: ["username"] }],
    });
    ctx.body = reviews;
  } catch (err) {
    ctx.status = 500;
    ctx.body = { error: "Error al obtener las reseñas" };
  }
});

router.post("/clinics/:clinicId/reviews", async (ctx) => {
  const { clinicId } = ctx.params;
  const { comment, rating } = ctx.request.body;
  try {
    const newReview = await Review.create({
      comment,
      rating,
      clinicId,
      userId: ctx.state.user.id, // extraído del token
    });
    ctx.status = 201;
    ctx.body = newReview;
  } catch (err) {
    ctx.status = 500;
    ctx.body = { error: "Error al enviar la reseña" };
  }
});


module.exports = router;
