import { Request, Response } from "express";
import { GetUserService } from "../../services/user/GetUserService";


class GetUserController {

  async handle(req: Request, res: Response) {

    const id = req.user_id!


    const getUserService = new GetUserService()


    const user = await getUserService.execute({ id })

    await res.json(user)
  }
}

export { GetUserController }