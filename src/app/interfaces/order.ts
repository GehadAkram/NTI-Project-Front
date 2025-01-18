export interface IOrder {
  user: string;
  products: {
    product: string;
    quantity: number;
  }[];
  total: number;
  state: string;
  shippingAddresss: string;
  createdAt?: Date;
  updatedAt?: Date;
}
