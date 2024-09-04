import { SignUp } from "@clerk/nextjs";
import React from "react";

export default function SignUpPage() {
  return (
    <div className="flex item-center justify-center h-screen w-full">
      <SignUp />
    </div>
  );
}
