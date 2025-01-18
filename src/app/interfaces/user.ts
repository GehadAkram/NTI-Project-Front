export interface IUser {
  name: string;
  email: string;
  password: string;
  phone: number;
  addresss?: string;
  isAdmin: boolean;
  isSuspended: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
