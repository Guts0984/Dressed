"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { LoadingSwap } from "@/components/ui/loading-swap";
import { PasswordInput } from "@/components/ui/password-input";
import { authClient } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const resetPasswordSchema = z.object({
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type ResetPasswordForm = z.infer<typeof resetPasswordSchema>;

export default function ResetPassword() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const error = searchParams.get("error");
  const form = useForm<ResetPasswordForm>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function handleResetPassword(data: ResetPasswordForm) {
    if (token == null) return;
    await authClient.resetPassword(
      {
        newPassword: data.password,
        token,
      },
      {
        onError: (error) => {
          toast.error(error.error.message || "Failed to reset password");
        },
        onSuccess: () => {
          toast.success("Password reset successfull", {
            description: "Redirecting to login...",
          });
          setTimeout(() => {
            router.push("/auth/login");
          }, 1000);
        },
      },
    );
  }

  if (token == null || error != null) {
    return (
      <div className="my-6 px-4 mx-auto">
        <Card className="w-full ">
          <CardHeader>
            <CardTitle>Invalid Reset Link</CardTitle>
            <CardDescription>
              The password reset link is invalid or has expired
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              className="w-full"
              nativeButton={false}
              render={(props) => <Link {...props} href="/auth/login" />}
            >
              Back to login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="my-6 px-4 mx-auto">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl">Reset Password</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(handleResetPassword)}>
            <FieldGroup>
              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Password</FieldLabel>
                    <PasswordInput {...field} />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Button type="submit" disabled={isSubmitting}>
                <LoadingSwap isLoading={isSubmitting}>
                  Reset Password
                </LoadingSwap>
              </Button>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
