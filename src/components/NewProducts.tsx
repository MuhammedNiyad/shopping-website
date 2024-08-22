import { productData } from "@/data/productData";
import React from "react";
import ProductCard from "./ProductCard";

const NewProducts = () => {
  return (
    <div className="container pt-16">
      <div className="">
        <h2 className="pb-4 text-2xl font-medium">New Products</h2>
      </div>
      <div className="grid grid-cols-1 gap-10 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-10 xl:gap-y-10">
        {productData.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
