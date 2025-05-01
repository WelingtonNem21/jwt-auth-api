import { Request, Response } from "express";
import { AuthService } from "../../services/user/authService";



class AuthController {

  async handle(req: Request, res: Response) {

    const { email, senha } = req.body as { email: string, senha: string }

    if (!email || !senha) {
      throw new Error("por favor, precher os caompos")
    }


    const authService = new AuthService()


    const userLogin = await authService.execute({ email, senha })

    await res.json(userLogin)
  }
}

export { AuthController }