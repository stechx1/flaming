import { axiosInstance } from "@/axios/axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const FeaturedBox = ({ productDetails, id }) => {
  const router = useRouter();
  const baseImgUrl = process.env.NEXT_PUBLIC_IMG_URL;

  console.log("base url ", baseImgUrl);
  console.log("product detauls ", productDetails);

  const handleExplore = ()=>{

    router.push({ pathname: "/products", query: { itemId: id,type:productDetails?.type } });
  }

  return (
    <div className="bg-white  flex flex-col rounded-[4px] justify-between  sm:w-[100%] ">
      <img
        src={`${baseImgUrl}${productDetails?.image?.data?.attributes?.url}`}
        className="w-full h-[280px] object-cover"
      />

      <div>
        <div className="text-center">
          <span className="text-[#003933] text-[20px] sm:text-[22px] font-[700]">
          {productDetails?.Title}{" "}
        </span>

        <span className="text-black font-[400] my-3 h-20 featuer_box_description">
          {productDetails?.description}
        </span>
        </div>
        <div className="flex justify-between items-center w-full bottom-0">
          <button
            onClick={handleExplore}
            className="bg-[#003933] text-white w-full px-3 py-2  rounded-[4px]"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBox;
