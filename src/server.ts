import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import cors from 'cors'
import routes from './routes'

const app = express()

app.use(cors())
app.use(routes)
app.use((erro: Error, req: Request, res: Response, next: NextFunction) => {

  if (erro instanceof Error) {
    res.status(400).json({
      error: erro.message
    })
  }

  res.status(500).json({
    status: 'error',
    messagem: 'internal server error'
  })
})


app.listen(8080, () => {
  console.log("ONLINE")
})
