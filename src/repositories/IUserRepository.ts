import { IUserDTO } from '../entities/User';

// A interface do repository serve para criar um padrão de como o repository deve ser, todos os métodos que estiverem aqui, são obrigatórios no repository
interface IUserRepository {
  cadUser(user: IUserDTO): Promise<void>;
}

export { IUserRepository };
