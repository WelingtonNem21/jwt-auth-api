import { Response, Request } from 'express'
import { CreateServices } from '../../services/user/createService'


class CreateController {

  async handle(req: Request, res: Response) {

    const { nome, email, senha } = req.body as { nome: string, email: string, senha: string }

    if (!nome || !email || !senha) {
      throw new Error("por favor, precher os caompos")
    }

    const createServices = new CreateServices()

    const user = await createServices.excute({ nome, email, senha })

    await res.json(user)
  }
}


export { CreateController }