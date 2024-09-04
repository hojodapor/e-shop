import React from "react";
import {
  getProductByCategory,
  getSingleProduct,
} from "../../../../../Request/request";
import { Product } from "../../../../../type";
import Image from "next/image";
import { StarIcon } from "lucide-react";
import AddCart from "./AddCart";
import ProductCard from "../../../../../components/Home/ProductCard";

export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const singleProduct: Product = await getSingleProduct(id);
  const relatedProducts: Product[] = await getProductByCategory(
    singleProduct.category
  );

  const number = Math.round(singleProduct?.rating?.rate);
  const starArray = new Array(number).fill(0);

  return (
    <div className="mt-20">
      {/* define grid system */}
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-7 items-center gap-4">
        {/* Image */}
        <div className="col-span-3 mb-6 lg:mb-0">
          <Image
            src={singleProduct.image}
            alt={singleProduct.title}
            width={400}
            height={400}
          />
        </div>
        {/* Content */}
        <div className="col-span-4">
          {/* Title */}
          <h1 className="lg:text-3xl text-2xl font-bold text-black ">
            {singleProduct.title}
          </h1>
          {/* Rating */}
          <div className="mt-2 flex items-center space-x-2">
            <div className="flex items-center">
              {starArray.map((star) => {
                return (
                  <StarIcon
                    key={Math.random() * 5000}
                    className="text-yellow-600"
                    size={20}
                    fill="yellow"
                  />
                );
              })}
            </div>
            <p className="text-base text-gray-700 font-semibold">
              ({singleProduct?.rating.count} Reviews)
            </p>
          </div>
          {/* line */}
          <span className="w-1/4 h-[1.6px] bg-gray-400 rounded-lg block mt-4 opacity-20 mb-4 "></span>
          {/* price */}
          <h1 className="lg:text-6xl text-3xl md:text-4xl text-blue-950 font-bold">
            ${singleProduct?.price.toFixed(2)}
          </h1>
          {/* Description */}
          <p className="mt-4 text-base text-black opacity-70">
            {singleProduct?.description}
          </p>
          {/* Extra Information */}
          <p className="mt-4 text-base text-black text-opacity-70 font-semibold">
            Category : {singleProduct?.category}
          </p>
          <p className="mt-2 text-sm text-black text-opacity-70 font-semibold">
            Tag : Shop, WDW
          </p>
          <p className="mt-2 text-sm text-black text-opacity-70 font-semibold">
            SKU : {Math.random() * 500}
          </p>
          {/* Addtocartbutton */}
          <AddCart product={singleProduct} />
        </div>
      </div>
      <div className="w-4/5 mt-16 mx-auto">
        <h1 className="text-2xl font-semibold text-black mt-16">
          Related Product
        </h1>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {relatedProducts?.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
}
