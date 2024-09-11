import express from 'express'
import router from './routes/index.mjs'
import { errors } from 'celebrate'
import logRequests from './middlewares/logRequests.mjs'

const PORT = 3000
const app = express()

app.use(express.json())
app.use(logRequests)
app.use(router)
app.use(errors())

app.use((err, req, res, next) => {
  if (!res.headersSent) {
    res.status(err.status || 500).json({
      status: err.status || 500,
      message: err.message || 'Internal Server Error'
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
