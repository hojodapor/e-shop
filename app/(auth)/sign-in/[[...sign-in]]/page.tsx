import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function SignInPage() {
  return (
    <div className="flex item-center justify-center h-screen w-full">
      <SignIn />
    </div>
  );
}
