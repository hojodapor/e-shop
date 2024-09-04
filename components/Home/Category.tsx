import React from "react";
import { getAllCategory } from "../../Request/request";

export default async function Category() {
  const categories: string[] = await getAllCategory();
  console.log(categories);
  return (
    <div className="text-center font-bold text-2xl capitalize">
      Shop by Category
      {/* Define Grid */}
      <div className="mt-12 w-4/5 mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {categories.map((Category) => {
          return (
            <div
              key={Category}
              className="p-6 rounded-lg cursor-pointer  text-center hover:scale-110 transition-all duration-300 bg-gray-200 shadow-md"
            >
              <h1 className="text-sm sm:text-base md:text-lg capitalize font-bold">
                {Category}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
