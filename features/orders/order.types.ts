import { Types } from "mongoose";

interface IItem {
  productId: Types.ObjectId;
  title: string;
  price: number;
  quantity: number;
}

interface IShippingAddress {
  street: string;
  city: string;
  country: string;
  zip: string;
}

export interface IOrder {
  user: Types.ObjectId;
  items: IItem[];
  totalPrice: number;
  status: "pending" | "paid" | "shipped" | "completed" | "cancelled";
  shippingAddress: IShippingAddress;
}
