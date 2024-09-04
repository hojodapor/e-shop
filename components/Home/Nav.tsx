import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { HeartIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBox from "../Helper/SearchBox";
import ShoppingCartButton from "../Helper/ShoppingCartButton";

export default function Navbar() {
  return (
    <div className="h-[12vh] sticky top-0 z-[1] bg-white shadow-md">
      <div className="flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full">
        {/* logo */}
        <Link href={"/"}>
          <Image src="/images/logo.png" width={140} height={140} alt="logo" />
        </Link>
        {/* Icons */}
        <div className="flex items-center space-x-6">
          {/* SearchBox */}
          <SearchBox />
          <HeartIcon size={26} cursor={"pointer"} color={"#0c7c84"} />
          {/* ShoppingCartButton */}
          <ShoppingCartButton />
          {/* User Button */}

          {/* SignIn User */}
          <SignedIn>
            <UserButton />
          </SignedIn>

          {/* Not SignIn */}
          <SignedOut>
            <SignInButton>
              <UserIcon size={26} cursor={"pointer"} color={"#0c7c84"} />
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
