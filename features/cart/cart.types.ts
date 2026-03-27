import { Types } from "mongoose";

export interface ICart {
  user: Types.ObjectId;
  items: {
    product: Types.ObjectId;
    quantity: number;
  }[];
}
