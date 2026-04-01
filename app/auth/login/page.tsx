"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignInTab from "@/features/auth/components/SignInTab";
import SignUpTab from "@/features/auth/components/SignUpTab";
import SocialAuthButtons from "@/features/auth/components/SocialAuthButtons";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// TODO: add email verification and password reset
type TabsValue = "signin" | "signup";

export default function LoginPage() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState<TabsValue>("signin");

  useEffect(() => {
    authClient.getSession().then((session) => {
      if (session.data != null) router.push("/");
    });
  }, [router]);

  return (
    <Tabs
      value={selectedTab}
      onValueChange={(t: TabsValue) => setSelectedTab(t)}
      className="max-auto w-full my-6 px-4"
    >
      <TabsList>
        <TabsTrigger value="signin">Sign In</TabsTrigger>
        <TabsTrigger value="signup">Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value="signin">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
          </CardHeader>
          <CardContent>
            <SignInTab />
          </CardContent>
          <Separator />

          <CardFooter className="grid grid-cols-2 gap-3">
            <SocialAuthButtons />
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="signup">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
          </CardHeader>
          <CardContent>
            <SignUpTab />
          </CardContent>
          <Separator />

          <CardFooter className="grid grid-cols-2 gap-3">
            <SocialAuthButtons />
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

// "use client";

// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import SignInTab from "@/features/auth/components/SignInTab";
// import SignUpTab from "@/features/auth/components/SignUpTab";
// import SocialAuthButtons from "@/features/auth/components/SocialAuthButtons";
// import { authClient } from "@/lib/auth-client";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// export default function LoginPage() {
//   const router = useRouter();
//   useEffect(() => {
//     authClient.getSession().then((session) => {
//       if (session.data != null) router.push("/");
//     });
//   }, [router]);

//   return (
//     <Tabs defaultValue="signin" className="max-auto w-full my-6 px-4">
//       <TabsList>
//         <TabsTrigger value="signin">Sign In</TabsTrigger>
//         <TabsTrigger value="signup">Sign Up</TabsTrigger>
//       </TabsList>
//       <TabsContent value="signin">
//         <Card>
//           <CardHeader>
//             <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <SignInTab />
//           </CardContent>
//           <Separator />

//           <CardFooter className="grid grid-cols-2 gap-3">
//             <SocialAuthButtons />
//           </CardFooter>
//         </Card>
//       </TabsContent>

//       <TabsContent value="signup">
//         <Card>
//           <CardHeader>
//             <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <SignUpTab />
//           </CardContent>
//           <Separator />

//           <CardFooter className="grid grid-cols-2 gap-3">
//             <SocialAuthButtons />
//           </CardFooter>
//         </Card>
//       </TabsContent>
//     </Tabs>
//   );
// }
