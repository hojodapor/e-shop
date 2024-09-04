import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full h-[calc(100vh-12vh)] flex justify-center flex-col">
      {/* Define the Grid */}
      <div className="w-4/5 mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Content */}
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black font-bold uppercase">
            mega sale <span className="text-rose-600">Special</span> offer upto{" "}
            <span className="text-orange-500">60%</span> off
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-black text-opacity-70 mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            aperiam eveniet consequatur odit cum sapiente, iste vitae velit
            ipsam similique sint, doloribus laborum molestias fugit ab officiis
            enim ullam voluptatum!
          </p>
          <div className="flex mt-6 items-center space-x-4">
            <Button size={"lg"} className="bg-blue-700">
              Shop Now
            </Button>
            <Button size={"lg"}>Explore More</Button>
          </div>
        </div>
        {/* Image */}
        <div className="hidden lg:block">
          <Image
            src="/images/hero.svg"
            width={600}
            height={600}
            alt="hero"
            className="lg:h[50%] lg:w-[50%] xl:w-[80%] xl:h-[80%]"
          />
        </div>
      </div>
    </div>
  );
}
