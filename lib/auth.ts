import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import dbConnect from "./mongodb";

export const auth = betterAuth({
  database: mongodbAdapter(dbConnect),
});
