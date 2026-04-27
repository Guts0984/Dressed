import * as React from "react";
import { EmailVerficationProps } from "./email.types";
import { sendEmail } from "./send-email";
import VerifyEmailTemplate from "./components/VerfiyEmailTemplate";

export async function sendVerificationEmail({
  user,
  url,
}: EmailVerficationProps) {
  return sendEmail({
    to: user.email,
    subject: "Verify your email address",
    message: <VerifyEmailTemplate user={user} url={url} />,
  });
}
