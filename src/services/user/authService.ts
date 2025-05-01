import { signToken } from "../../helpers/signToken"
import prismaClient from "../../prisma/db"
import bcrypt from 'bcrypt'

interface Props {
  email: string,
  senha: string
}


class AuthService {

  async execute({ email, senha }: Props) {

    const userExistem = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    })

    if (!userExistem) {
      throw new Error("email ou senha errado1")
    }


    const senhaCompare = await bcrypt.compare(senha, userExistem.senha)

    if (!senhaCompare) {
      throw new Error("email ou senha errado2")
    }

    const token = await signToken({
      id: userExistem.id,
      nome: userExistem.nome,
      email: userExistem.email
    })

    const userFinal = {
      id: userExistem.id,
      email: userExistem.email,
      token: token
    }

    return userFinal
  }
}

export { AuthService }