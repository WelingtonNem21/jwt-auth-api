import express, { Response, Request } from 'express'


const app = express()

app.get("/", (req: Request, res: Response) => {
  res.json({ teste: true })
})


app.listen(8080, () => {
  console.log("TESTE")
})
//jwt-auth-client