import { Router } from 'express'
import rootRouter from './root.mjs'
import usersRouter from './users.mjs'
import articlesRouter from './articles.mjs'
import basicAuth from '../middlewares/basicAuth.mjs'

const router = Router()

router.use('/', rootRouter)
router.use('/users', basicAuth, usersRouter)
router.use('/articles', basicAuth, articlesRouter)

export default router
