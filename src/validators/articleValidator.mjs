import { celebrate, Joi, Segments } from 'celebrate'

const articleScheme = Joi.object({
  id: Joi.number().integer().positive().required(),
  title: Joi.string().min(1).max(80).required(),
  body: Joi.string().min(1).max(600).required()
})

const validateArticlePost = celebrate({
  [Segments.BODY]: articleScheme
})

const validateArticlePut = celebrate({
  [Segments.BODY]: articleScheme
})

const validateParamsArticleId = celebrate({
  [Segments.PARAMS]: {
    articleId: Joi.number().integer().positive().required()
  }
})

export { validateArticlePost, validateArticlePut, validateParamsArticleId }
