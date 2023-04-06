import { v4 as uuidv4 } from 'uuid';

export interface IUserDTO {
  userName: string;
  email: string;
  password: string;
}
class User {
  id?: string;
  userName!: string;
  email!: string;
  password!: string;
  createdAt!: Date;
  updatedAt!: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { User };
