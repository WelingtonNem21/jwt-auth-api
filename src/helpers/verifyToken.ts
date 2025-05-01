import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'



async function verifyToken(req: Request, res: Response, next: NextFunction) {


  const berer = req.headers.authorization

  if (!berer) {
    throw new Error("Token não infrmando")
  }

  const parts = berer.split(" ");

  const token = parts[1]

  if (!token) {
    throw new Error("Token não infrmando")
  }




  try {

    const verToken = await jwt.verify(token, "TESTE")

    if (!verToken) {
      throw new Error("Token não ivalindo")
    }

    const { id } = verToken as { id: number }

    req.user_id = id

    next()
  } catch (error) {
    throw new Error("Token inválido ou expirado")
  }

}

export { verifyToken }