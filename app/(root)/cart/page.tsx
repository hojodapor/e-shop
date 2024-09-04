"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import { useUser } from "@clerk/nextjs";
import {
  addItem,
  CartItem,
  clearCart,
  removeItem,
} from "../../../store/cartSlices";
import PayPalButton from "../../../components/Helper/PayPalButton";
import { useRouter } from "next/navigation";

export default function Cart() {
  //router
  const router = useRouter();
  const dispatch = useDispatch();
  // Get cart Items
  const items = useSelector((state: RootState) => state.cart.items);
  //Calculating Total Quantity
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  // calculate total price
  const totalPrice = items
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);
  //Calculate vat (15% of total price)
  const vat = (+totalPrice * 0.15).toFixed(2);
  //   total price with vat
  const totalPriceWithVat = (+totalPrice + +vat).toFixed(2);

  // Get authentic user
  const { user } = useUser();

  // Add Item
  const addCartHandler = (item: CartItem) => {
    dispatch(addItem(item));
  };

  // Remove Item
  const removeCartHandler = (id: number) => {
    dispatch(removeItem({ id }));
  };

  //Handle payment success
  const handleSuccess = (details: any) => {
    router.push("/success");
    dispatch(clearCart());
  };

  return (
    <div className="mt-8 min-h-[60vh]">
      {/* check if the cart is empty */}
      {items.length == 0 && (
        <div className="flex items-center w-full h-[80vh] flex-col justify-center">
          <Image
            src="/images/cart.svg"
            alt="empty_cart"
            width={400}
            height={400}
            className="object-cover mx-auto"
          />
          <h1 className="mt-8 text-2xl font-semibold">Your Cart is empty</h1>
          <Link href={"/"} className="text-primary-500 underline">
            <Button mt-4>Shop Now</Button>
          </Link>
        </div>
      )}
      {/* if cart item exist */}
      {items.length > 0 && (
        <div className="md:w-4/5 w-[95%] mx-auto grid grid-cols-1 xl:grid-cols-6 gap-12">
          {/* cart items */}
          <div className="rounded-lg shadow-md overflow-hidden xl:col-span-4 ">
            <h1 className="p-4 text-xl sm:text-2xl md:text-3xl font-bold text-white bg-blue-700">
              <span className="text-3xl font-bold ">
                Your Cart ({totalQuantity} items)
              </span>
            </h1>

            {items.map((item) => {
              return (
                <div key={item.id}>
                  <div className="pb-6 flex mt-2 p-5 border-b-[1.5px] border-opacity-25 border-gray-700 items-center space-x-10">
                    <div>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={100}
                        height={100}
                      />
                    </div>
                    <div>
                      <h1 className="md:text-xl text-base font-bold text-black">
                        {item.title}
                      </h1>
                      <h1 className="md:text-lg text-sm font-semibold">
                        ${item.category}
                      </h1>
                      <h1 className="md:text-2xl text-lg font-bold text-blue-950">
                        {item.price}
                      </h1>
                      <h1 className="md:text-lg text-sm font-semibold">
                        Quantity: {item.quantity}
                      </h1>
                      <div className="flex items-center mt-4 space-x-2">
                        <Button onClick={() => addCartHandler(item)}>
                          Add More
                        </Button>
                        <Button
                          onClick={() => removeCartHandler(item.id)}
                          variant={"destructive"}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Cart summary */}
          <div className="xl:col-span-2">
            <div className="bg-indigo-950 sticky top-[25vh] p-6 rounded-lg">
              <h1 className="text-center mt-8 mb-8 font-semibold text-white text-3xl">
                Summary
              </h1>
              <div className="w-full h-[1.2px] bg-white bg-opacity-20"></div>
              <div className="flex mt-4 text-xl uppercase font-semibold text-white items-center justify-between">
                <span>Subtotal</span>
                <span>{totalPrice}</span>
              </div>
              <div className="flex mt-10 mb-10 text-xl uppercase font-semibold text-white items-center justify-between">
                <span>VAT</span>
                <span>${vat}</span>
              </div>
              <div className="flex mb-6 text-xl uppercase font-semibold text-white items-center justify-between">
                <span>Shipping</span>
                <span>free</span>
              </div>
              <div className="w-full h-[1.2px] bg-white bg-opacity-20"></div>
              <div className="flex mt-6 mb-6 text-xl uppercase font-semibold text-white items-center justify-between">
                <span>Total</span>
                <span>${totalPriceWithVat}</span>
              </div>
              {!user && (
                <Link href={"/sign-in"}>
                  <Button className="bg-orange-500 w-full">
                    Sign In to Checkout
                  </Button>
                </Link>
              )}
              {user && (
                <PayPalButton
                  amount={totalPriceWithVat}
                  onSuccess={handleSuccess}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
