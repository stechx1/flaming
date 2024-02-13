import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button, Radio, Select } from "antd";
import CustomizationForm from "./CustomizationForm";
import { baseImgUri } from "@/constants/baseImgUri";
import { axiosInstance } from "@/axios/axios";

const ProductItem = () => {
  const router = useRouter();
  const productId = router.query?.itemId;
  console.log("product details ", productId);
  const [price, setPrice] = useState();
  
  const [ItemDetails, setItemDetails] = useState({
    heroImg: null,
    childImages: [],
    base_price_description: "",
    description: "",
    title: "",
  });

  const totalPrice = price;
  let item;
  if (typeof window !== "undefined") {
    // Perform localStorage action
    item = localStorage.getItem("type");
  }


  useEffect(() => {
    if (productId) {
      const api =
        item == "Custom Wood Signs"
          ? `/products/${productId}?populate=*`
          : item == "Custom Wood Boxes"
          ? `/boxes/${productId}?populate=*`
          : item == "Chopping/Serving Boards"
          ? `/chopping-serving-boards/${productId}?populate=*`
          : item == "Timber serving Board"
          ? `/timber-serving-boards/${productId}?populate=*`
          : item == "Olive Wood Hearts"
          ? `/olive-wood-hearts/${productId}?populate=*`
          : `/products/${productId}?populate=*`;
      const getProductDetails = async () => {
        try {
          const response = await axiosInstance.get(api);
          console.log("response ", response.data);
          const id = response.data?.data?.id;
          const getData = response.data?.data?.attributes;
          setPrice(response.data?.data?.attributes?.price);
          setItemDetails({
            id: id,
            title: getData?.title,
            heroImg: getData?.heroImg?.data?.attributes?.url,
            childImages: getData?.gallery?.data,
            description: getData.description,
            size: getData?.initial_size,
            type: getData?.categories_id?.data?.attributes?.type,
            Postage:getData?.Postage,
            postage_price:getData?.postage_price,
            timber_specie:getData?.timber_specie || null
          });
        } catch (error) {
          console.log("failed to fetch data", error);
        }
      };

      getProductDetails();
    }
  }, [productId]);

  const handleNavigate = () => {
    router.push({ pathname: "/detail_form", query: { itemId: productId } });
  };

  return (
    <div className="flex flex-col my-5">
      <div className="flex md:flex-row flex-col gap-3 justify-between">
        <div className="flex flex-1">
          <img
            src={`${baseImgUri}${ItemDetails.heroImg}`}
            className="rounded-md  w-full sm:object-cover "
            alt="hero"
          />
        </div>

        <div className="flex flex-1 flex-col gap-3 px-5">
          <span className="text-[#003933] text-[24px] sm:text-[40px] font-[600]">
            {ItemDetails.title}
          </span>
          <span className="text-[#003933] font-bold text-lg sm:text-2xl">
            Price - $ {parseInt(totalPrice)}
          </span>

          {ItemDetails?.size && <div className="flex gap-x-2 items-center" >
           <span className="text-[#003933] font-bold text-lg sm:text-[20px]"> Size - {ItemDetails?.size}</span>
           {ItemDetails?.timber_specie && <span className="text-[#003933] font-bold text-lg sm:text-[20px]">  {ItemDetails?.timber_specie}</span>}
          </div>}

          <p className="text-[#003933] font-bold text-base sm:text-xl">Postage : {ItemDetails?.Postage} {ItemDetails?.postage_price != 0 && `$${ItemDetails?.postage_price}`}</p>
          <p className="text-gray-600 text-lg">{ItemDetails?.description}</p>
        </div>
      </div>
      <div className="flex items-start gap-x-10 flex-col-reverse">
        <div
          className={`my-12 flex flex-col gap-y-2 w-[100%] md:${
            item == "Custom Wood Boxes" || item == "Custom Wood Signs"
              ? "w-[50%]"
              : "w-[100%]"
          }`}
        >
          <h2 className="text-3xl font-bold mb-5">Gallery</h2>
          <p className="text-gray-600 text-xl">Gallery Images</p>
          <div className={`flex flex-wrap gap-8`}>
            {ItemDetails.childImages?.map((picture, index) => {
              return (
                <img
                  key={index}
                  src={`${baseImgUri}${picture?.attributes?.url}`}
                  className="rounded max-w-[100%] sm:w-[100%] sm:max-w-[280px] flex-1 bg-cover"
                />
              );
            })}
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleNavigate}
              className="bg-[#003933] text-white py-2 px-2 rounded max-w-sm w-full  text-xl md:text-xl flex-1 my-4"
            >
              Proceed
            </button>
          </div>
        </div>
        <div
          style={{
            display:
              item == "Custom Wood Boxes" || item == "Custom Wood Signs"
                ? "flex"
                : "none",
          }}
          className={`flex flex-col sm:flex-row  items-center justify-center gap-x-3 gap-y-3 mt-[150px] w-[100%] `}
        >
          {item == "Custom Wood Signs" && (
            <div className="flex-1">
            <p className="text-lg text-center">
            To get an idea of the price of the signs, click the button to view the sign pricing guide
            </p>
            <button
              onClick={() => {
                router.push({
                  pathname: "/custome-design",
                });
              }}
              className="bg-[#003933] text-white py-2 px-2 rounded  text-base md:text-xl w-full"
            >
              Sign Pricing Guide
            </button>
            </div>
          )}

          {item == "Custom Wood Signs" && (
            <div className="flex-1">
               <p className="text-lg text-center">
              Click on the button below and fill out the form with details of your sign. I will send back a design draft and quote for your consideration.
               </p>
              <button
              onClick={() => router.push({ pathname: "/detail_custom_form" })}
              className="bg-[#003933] text-white py-2 px-2 rounded  text-base md:text-xl w-full"
            >
              Design Your Own Sign
            </button>
            </div>
            
          )}
          {item == "Custom Wood Boxes" && (
            <div>
              <p className="text-lg text-center">
               Click on the button below and fill out the form with details of your Box. I will send back a design draft and quote for your consideration.
               </p>
            <button
              onClick={() => router.push({ pathname: "custome-box" })}
              className="bg-[#003933] text-white py-2 px-2 rounded  text-xl md:text-xl"
            >
              Design Your Own Box
            </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
