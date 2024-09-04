"use client";

import { ShoppingBagIcon } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import CartSidebar from "./CartSidebar";

export default function ShoppingCartButton() {
  const items = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger>
        <div className="relative">
          <span className="absolute -top-3 -right-2 bg-red-500 rounded-full w-6 h-6 text-center flex items-center justify-center flex-col text-xs text-white">
            {totalQuantity}
          </span>
          <ShoppingBagIcon cursor={"pointer"} size={26} />
        </div>
      </SheetTrigger>
      <SheetContent className="overflow-auto h-full">
        {/* Cart Sidebar */}
        <CartSidebar items={items} />
      </SheetContent>
    </Sheet>
  );
}
