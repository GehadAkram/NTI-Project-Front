export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  supercategory: string;
  quantity: number;
  inStock: boolean;
  isActive: boolean;
  isDeleted: boolean;
  bestSeller: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
