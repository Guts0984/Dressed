import mongoose from "mongoose";

export interface IProduct {
  title: string;
  description?: string;
  price: number;
  stock?: number;
  owner: mongoose.Types.ObjectId;
  images?: string[];
  isActive: boolean;
}
