import { Resend } from "resend";
import { SendEmailProps } from "./email.types";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({ to, subject, message }: SendEmailProps) {
  const { data, error } = await resend.emails.send({
    from: "Dariy <noreply@portfoliostore.net>",
    to: to,
    subject: subject,
    react: message,
  });

  if (error) throw new Error(error.message);

  return data;
}
