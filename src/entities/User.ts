import { v4 as uuidv4 } from 'uuid';

export interface IUserDTO {
  username: string;
  email: string;
  password: string;
}
class User {
  id?: string;
  username!: string;
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
