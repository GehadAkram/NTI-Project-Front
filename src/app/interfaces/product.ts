import { ICategory } from "./category";
import { ISuperCategory } from "./super-category";

export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: ICategory;
  supercategory: ISuperCategory;
  quantity: number;
  inStock: boolean;
  isActive: boolean;
  isDeleted: boolean;
  bestSeller: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
