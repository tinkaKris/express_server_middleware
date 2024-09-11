import { Router } from 'express'
import {
  deleteArticleByIdHandler,
  getArticleByIdHandler,
  getArticlesHandler,
  postArticlesHandler,
  putArticleByIdHandler
} from '../controllers/articles.mjs'
import { validateParamsArticleId, validateArticlePost, validateArticlePut } from '../validators/articleValidator.mjs'

const articlesRouter = Router()

articlesRouter.route('/').get(getArticlesHandler).post(validateArticlePost, postArticlesHandler)

articlesRouter
  .route('/:articleId')
  .get(validateParamsArticleId, getArticleByIdHandler)
  .put(validateParamsArticleId, validateArticlePut, putArticleByIdHandler)
  .delete(validateParamsArticleId, deleteArticleByIdHandler)

export default articlesRouter
