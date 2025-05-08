import { IOrderState } from "./order-state";
import { IProduct } from "./product";
import { IUser } from "./user";

export interface IOrder {
  user: IUser;
  products: {
    product: IProduct;
    quantity: number;
  }[];
  total: number;
  state: IOrderState;
  shippingAddresss: string;
  createdAt?: Date;
  updatedAt?: Date;
}
