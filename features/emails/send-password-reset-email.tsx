import * as React from "react";
import { EmailVerficationProps } from "./email.types";
import { sendEmail } from "./send-email";
import ResetEmailPasswordTemplate from "./components/ResetEmailPasswordTemplate";

export async function sendPasswordResetEmail({
  user,
  url,
}: EmailVerficationProps) {
  return sendEmail({
    to: user.email,
    subject: "Password Reset",
    message: <ResetEmailPasswordTemplate user={user} url={url} />,
  });
}
