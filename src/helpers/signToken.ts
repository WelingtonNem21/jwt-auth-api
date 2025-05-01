import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

interface Props {
  id: Number
  nome: string,
  email: string
}

async function signToken({ id, nome, email }: Props) {

  const token = await jwt.sign({ id, nome, email }, "TESTE", {
    expiresIn: '1h'
  })

  return token
}

export { signToken }

