import prismaClient from "../../prisma/db"
import bcrypt from 'bcrypt'

interface Props {
  nome: string,
  email: string,
  senha: string
}

class CreateServices {

  async excute({ nome, email, senha }: Props) {

    const userexitem = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    })

    if (userexitem) {
      throw new Error("email ou senha ja em uso")
    }

    const salt = await bcrypt.genSalt(8);
    const senhaHash = await bcrypt.hash(senha, salt);

    const userCreate = await prismaClient.user.create({
      data: {
        nome: nome,
        email: email,
        senha: senhaHash
      }
    })

    return userCreate
  }
}

export { CreateServices }