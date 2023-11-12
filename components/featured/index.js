import React, { useEffect, useState } from "react";
import FeaturedBox from "./FeaturedBox";
import { useRouter } from "next/router";
import { axiosInstance } from "@/axios/axios";
import useProducts from "@/hooks/useProducts";
import ProdcutLoading from "../skeleton/ProdcutLoading";

const Featured = () => {
  const router = useRouter();
  const { product, loading } = useProducts();

  if (loading) {
    return (
      <div className="flex flex-col">
        <div className="flex justify-center py-7 bg-[#E7E1CC]">
          <span className="text-[#003933] sm:text-[40px] text-[30px] text-center font-[600]">
            Products
          </span>
        </div>
       <div className="mt-5">
          <ProdcutLoading />
        </div> 
      </div>
    );
  }
  return (
    <div className="bg-[#f0eeef]  pb-10">
      {!loading && <div className="flex justify-center py-7 bg-[#E7E1CC]">
        <span className="text-[#003933] sm:text-[40px] text-[30px] text-center font-[600]">
          Products
        </span>
      </div>}
      <div className="bg-[#f0eeef] py-5 flex justify-center">
        <div class=" sm:max-w-[1400px] mx-auto ">
          <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 gap-x-15">
            {product?.slice?.(0,6).map((item, index) => {
              return (
                <div key={index}>
                  <FeaturedBox productDetails={item?.attributes} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex items-center mt-5 justify-center">
        <button
          onClick={() => router.push("/products")}
          className="text-white bg-[#003933] px-2 py-1"
        >
          See all Products
        </button>
      </div>
    </div>
  );
};

export default Featured;
