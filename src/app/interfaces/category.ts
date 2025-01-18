export interface ICategory {
  _id: string;
  name: string;
  image: string;
  isActive: boolean;
  isDeleted: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
