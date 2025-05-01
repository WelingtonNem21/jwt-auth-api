import prismaClient from "../../prisma/db"


interface Props {
  id: number
}

class GetUserService {

  async execute({ id }: Props) {

    const user = await prismaClient.user.findUnique({
      where: {
        id: id
      }
    })

    return user
  }
}

export { GetUserService }