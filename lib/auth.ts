import { betterAuth } from "better-auth";
import pool from "@/lib/db";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  database: pool,
  emailAndPassword: {
    enabled: true,
    //   requireEmailVerification: true,
    //   sendResetPassword: async ({ user, url }) => {
    //     await sendPasswordResetEmail({ user, url });
  },
  // },
  // emailVerification: {
  //   autoSignInAfterVerification: true,
  //   sendOnSignUp: true,
  //   sendVerificationEmail: async ({ user, url }) => {
  //     await sendVerificationEmail({ user, url });
  //   },
  //},
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 60, //1 min
    },
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "user",
        input: false,
      },
    },
  },
  plugins: [nextCookies()],
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  rateLimit: {
    window: 10,
    max: 100,
  },
});
