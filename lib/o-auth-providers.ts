import { FcGoogle } from "react-icons/fc"; // Colored Google icon
import { FaGithub } from "react-icons/fa"; // Standard GitHub icon
import { IconType } from "react-icons/lib";

export const SUPPORTED_OAUTH_PROVIDERS = ["google", "github"] as const;
export type SupportedOAuthProvider = (typeof SUPPORTED_OAUTH_PROVIDERS)[number];

export const SUPPORTED_OAUTH_PROVIDER_DETAILS: Record<
  SupportedOAuthProvider,
  { name: string; Icon: IconType }
> = {
  google: { name: "Google", Icon: FcGoogle },
  github: { name: "GitHub", Icon: FaGithub },
};

provider: {
}
