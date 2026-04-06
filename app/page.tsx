"use client";

import { Button } from "@/components/ui/button";
import BetterAuthActionButton from "@/features/auth/components/BetterAuthActionButton";
import { signOut, useSession } from "@/lib/auth-client";

import Link from "next/link";

export default function Home() {
  const { data: session, isPending: loading } = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="my-6 px-4 max-w-md mx-auto">
      <div className="text-center space-y-6">
        {session == null ? (
          <>
            <h1 className="text-3xl font-bold">Welcome</h1>
            <Button
              render={<Link href="/auth/login" />}
              size="lg"
              nativeButton={false}
            >
              Sign In / Sign Up
            </Button>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold">Welcome {session.user.name}</h1>
            <BetterAuthActionButton
              size="lg"
              variant="destructive"
              successMessage="Signed out successfully"
              action={() => signOut()}
            >
              Sign Out
            </BetterAuthActionButton>
          </>
        )}
      </div>
    </div>
  );
}
