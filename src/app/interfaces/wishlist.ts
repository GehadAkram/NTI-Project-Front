import { IProduct } from "./product";
import { IUser } from "./user";

export interface IWishlist {
  user: IUser;
  products: IProduct[];
  createdAt?: Date;
  updatedAt?: Date;
}
