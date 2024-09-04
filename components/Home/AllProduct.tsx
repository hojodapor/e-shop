"use client";

import React, { useEffect, useState } from "react";
import { Product } from "../../type";
import { getAllProduct } from "../../Request/request";
import { Loader } from "lucide-react";
import ProductCard from "./ProductCard";

export default function AllProduct({}) {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const products: Product[] = await getAllProduct();
        setProducts(products);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="pt-16 pb-12">
      <h1 className="text-center font-bold text-2xl">All Products</h1>
      {loading ? (
        <div className="flex justify-center items-center mt-16">
          <Loader size={32} className="animate-spin" />
        </div>
      ) : (
        <div className="w-4/5 mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid_cols-3 lg:grid-cols-4 gap-12">
          {products?.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      )}
    </div>
  );
}
