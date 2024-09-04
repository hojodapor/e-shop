"use client";

import React from "react";
import { Product } from "../../type";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, StarIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/cartSlices";
import { RootState } from "../../store/store";
import { useToast } from "@/hooks/use-toast";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const number = Math.round(product.rating.rate);
  const ratingArray = Array(number).fill(0);
  const { toast } = useToast();

  const dispatch = useDispatch();

  const addToCartHandler = (product: Product) => {
    toast({
      description: "Item Added to Cart",
      variant: "success",
    });
    dispatch(addItem(product));
  };

  return (
    <div className="p-4">
      <div className="w-[200px] h-[150px]">
        <Image
          src={product.image}
          alt={product.title}
          width={100}
          height={100}
          className="w-[80%] h-[80%] object-contain"
        />
      </div>
      <p className="mt-5 text-xs capitalize text-gray-600">
        {product.category}
      </p>
      <Link href={`/product/product-details/${product.id}`}>
        <h1 className="text-lg cursor-pointer hover:text-blue-900 transition-all hover:underline sm:w-full sm:truncate mt-2 text-black font-semibold">
          {product.title}
        </h1>
      </Link>
      <div className="flex items-center">
        {ratingArray.map((star) => {
          return (
            <StarIcon
              key={Math.random() * 1000}
              className="text-yellow-500"
              size={16}
              fill="yellow"
            />
          );
        })}
      </div>
      {/* Pricing */}
      <div className="flex items-center mt-2 space-x-2">
        <p className="text-black text-base line-through font-semibold opacity-50">
          {`$${(product.price + 10).toFixed(2)}`}
        </p>
        <p className="text-black text-lg font-bold opacity-80">
          ${product.price}
        </p>
      </div>
      {/* Buttons */}
      <div className="mt-4 flex items-center space-x-2">
        <Button onClick={() => addToCartHandler(product)} size={"icon"}>
          <ShoppingBag size={18} />
        </Button>
        <Button size={"icon"} className="bg-red-500">
          <Heart size={15} />
        </Button>
      </div>
    </div>
  );
}
