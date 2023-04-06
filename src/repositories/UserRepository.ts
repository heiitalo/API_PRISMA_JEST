import prismaClient from '../../prisma/prismaClient';
import { IUserDTO } from '../entities/User';
import { IUserRepository } from './IUserRepository';

//o repositório é onde vamos de fato interagir com o banco de dados
class UserRepository implements IUserRepository {
  async cadUser({ email, password, userName }: IUserDTO): Promise<void> {
    await prismaClient.user.create({
      data: {
        email,
        password,
        userName
      }
    });
  }
}

export { UserRepository };
