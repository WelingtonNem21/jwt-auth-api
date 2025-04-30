import { Response, Request } from 'express'


class CreateController {

  async handle(req: Request, res: Response) {

    const { nome, email, senha } = req.body as { nome: string, email: string, senha: string }


    await res.json({
      nome: nome,
      email: email,
      senha: senha
    })
  }
}


export { CreateController }