import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../../../../components/ui/button";

export default function SuccessPage() {
  return (
    <div className="w-full h-[60vh] flex items-center justify-center flex-col">
      <Image src={"/images/order.svg"} alt="success" width={300} height={300} />
      <h1 className="mb-8 text-3xl mt-2 font-bold uppercase text-green-600">
        Thank you for your order
      </h1>
      <Link href={"/"}>
        <Button>Continue Shopping</Button>
      </Link>
    </div>
  );
}
