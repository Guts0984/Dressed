export interface SendEmailProps {
  to: string;
  subject: string;
  message: React.ReactElement;
}

export interface EmailVerficationProps {
  user: {
    email: string;
    name: string;
  };
  url: string;
}
