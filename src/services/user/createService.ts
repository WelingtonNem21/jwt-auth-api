import prismaClient from "../../prisma/db"


interface Props {
  nome: string,
  email: string,
  senha: string
}

class CreateServices {

  async excute({ nome, email, senha }: Props) {


  }
}

export { CreateServices }