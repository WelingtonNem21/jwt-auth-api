import prismaClient from "../../prisma/db"


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

    if (!userexitem) {
      throw new Error("email ou senha ja em uso")
    }


    const userCreate = await prismaClient.user.create({
      data: {
        nome: nome,
        email: email,
        senha: senha
      }
    })
  }
}

export { CreateServices }