import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Radio, Select } from "antd";
import CustomizationForm from "./CustomizationForm";
import { baseImgUri } from "@/constants/baseImgUri";
import { axiosInstance } from "@/axios/axios";

const ProductItem = () => {
  const router = useRouter();
  const productId = router.query?.itemId;
  console.log("product details ", productId);
  const [price, setPrice] = useState();
  const [selectedWeatherproofing, setselectedWeatherproofing] = useState(0);
  const [selectedEdging, setSelectedEdging] = useState(0);
  const [selectedHanging, setSelectedHanging] = useState(0);
  const [selectedImageOption, setSelectedImageOption] = useState(0);
  const [selectedPostage, setSelectedPostage] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [ItemDetails, setItemDetails] = useState({
    heroImg: null,
    childImages: [],
    base_price_description: "",
    description: "",
    title: "",
  });

  const totalPrice =
    +price +
    selectedWeatherproofing +
    selectedHanging +
    selectedEdging +
    selectedImageOption +
    selectedPostage;

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const response = await axiosInstance.get(
          `/products/${productId}?populate=*`
        );
        console.log("response ", response.data);
        const getData = response.data?.data?.attributes;
        setPrice(response.data?.data?.attributes?.price);
        setItemDetails({
          title: getData?.title,
          heroImg: getData?.heroImg?.data?.attributes?.url,
          childImages: getData?.childImages?.data,
          description: getData.description,
          base_price_description: getData?.base_price_description,
        });
      } catch (error) {
        console.log("failed to fetch data", error);
      }
    };

    getProductDetails();
  }, [productId]);

  return (
    <div className="flex flex-col my-5">
      <div className="flex md:flex-row flex-col gap-3 justify-between">
        <div className="flex flex-1">
          <img
            src={`${ItemDetails.heroImg}`}
            className="rounded-md sm:h-96 w-full sm:object-cover "
            alt="hero"
          />
        </div>

        <div className="flex flex-1 flex-col gap-3 px-5">
          <span className="text-[#003933] text-[24px] sm:text-[40px] font-[600]">
            {ItemDetails.title}
          </span>
          <span className="text-[#003933] font-bold text-lg sm:text-4xl">
            $ {totalPrice}
          </span>
          <span>
            Base Price - $ {price} {ItemDetails?.base_price_description}
          </span>

          <p className="text-gray-600">{ItemDetails?.description}</p>

          <p className="text-gray-600">
            Below are some examples of the wood timber signs, go through them
            so, you better know, what option to select.
          </p>
        </div>
      </div>

      <div className="my-12">
        <h2 className="text-3xl font-bold mb-5">Pictures</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {ItemDetails.childImages?.map((picture, index) => {
            return (
              <img
                key={index}
                src={`${picture?.attributes?.url}`}
                className="rounded"
              />
            );
          })}
        </div>
      </div>
      <span className="text-[#003933] font-bold text-base sm:text-4xl">
        Price: ${" "}
        {+price +
          +selectedWeatherproofing +
          +selectedHanging +
          +selectedEdging +
          +selectedImageOption +
          +selectedPostage}
      </span>
      <div className="p-5 my-12 flex flex-col gap-6 border xl:w-1/2 border-[#BDBDBD] rounded-xl">
        <div className="flex gap-6 items-center">
          <p className="text-[#003933] font-bold my-3">Choose Size</p>
          <Select
            defaultValue="60 cm x 12cm x 12cm"
            style={{ width: 230 }}
            onChange={(value) => {
              console.log(value);
              setPrice(value);
            }}
            options={[
              { value: "200", label: "60 cm x 12cm x 12cm - $ 200" },
              { value: "300", label: "60 cm x 12cm x 12cm - $ 300" },
              { value: "400", label: "60 cm x 12cm x 12cm - $ 400" },
            ]}
          />
        </div>

        <div className="flex flex-col gap-2">
          <h2>
            Choose Weatherproofing (Indoor varnish is included in base price)
          </h2>
          <Radio.Group
            onChange={(e) => setselectedWeatherproofing(e.target.value)}
          >
            <div className="">
              <Radio value={15}>Semi weatherprooofed - $15</Radio>
              <Radio value={20}>Full weatherprooofed - $20</Radio>
            </div>
          </Radio.Group>
        </div>

        <div className="flex flex-col gap-2">
          <h2>Choose Sign Edging (Straight edge is included in base price)</h2>
          <Radio.Group onChange={(e) => setSelectedEdging(e.target.value)}>
            <div className="">
              <Radio value={10}>Straight Burnt Edge - $ 10</Radio>
              <Radio value={20}>Natural Edge - $20</Radio>
              <Radio value={25}>Burnt Natural Edge - $25</Radio>
              <Radio value={35}>Cut corners with border edge - $35</Radio>
            </div>
          </Radio.Group>
        </div>

        <div className="flex flex-col gap-2">
          <h2>Hanging Options</h2>
          <Radio.Group onChange={(e) => setSelectedHanging(e.target.value)}>
            <Radio value={0}>No fixings - $ 0</Radio>
            <Radio value={1}>Hangers on back - $ 0</Radio>
            <Radio value={2}>Pilot holes - $ 0</Radio>
            <Radio value={15}>Eyebolts and chain - $15</Radio>
          </Radio.Group>
        </div>

        {/* <div className='flex flex-col gap-2'>
          <h2>Hanging Options</h2>
          <Radio.Group onChange={(value) => console.log(value)} value={price}>
            <div className=''>
              <Radio value={0}>No fixings - $ 0</Radio>
              <Radio value={0}>Hangers on back - $ 0</Radio>
              <Radio value={0}>Pilot holes - $ 0</Radio>
              <Radio value={15}>Eyebolts and chain - $15</Radio>
            </div>
          </Radio.Group>
        </div> */}

        <div className="flex flex-col gap-2">
          <h2>Images: </h2>
          <Radio.Group onChange={(e) => setSelectedImageOption(e.target.value)}>
            <div className="">
              <Radio value={0}>No Image - $ 0</Radio>
              <Radio value={10}>Basic clipart logo type image - $ 10</Radio>
              <Radio value={20}>Photo image - $ 20</Radio>
            </div>
          </Radio.Group>
        </div>

        <div className="flex flex-col gap-2">
          <h2>Postage: </h2>
          <Radio.Group onChange={(e) => setSelectedPostage(e.target.value)}>
            <div className="">
              <Radio value={0}>
                Australia post Standard postage (Included in base price) - $ 0
              </Radio>
              <Radio value={20}>Australia Post Express postage - $ 20</Radio>
            </div>
          </Radio.Group>
          <p className="text-sm underline">
            Signs over 1m need courier which will need quoting on size and
            weight of sign
          </p>
        </div>

        <div className="flex gap-8 items-center">
          <button
            onClick={() => setShowForm(true)}
            className="bg-[#FE5B26] text-white w-fit px-3 py-2 my-4 rounded-[4px]"
          >
            Buy Now
          </button>

          <p>
            ${" "}
            {+price +
              +selectedWeatherproofing +
              +selectedHanging +
              +selectedEdging +
              +selectedImageOption +
              +selectedPostage}
          </p>
        </div>
      </div>

      {showForm && (
        <CustomizationForm
          totalPrice={totalPrice}
          selectedWeatherproofing={selectedWeatherproofing}
          selectedEdging={selectedEdging}
          selectedHanging={selectedHanging}
          selectedImageOption={selectedImageOption}
          selectedPostage={selectedPostage}
          electedPostage={selectedPostage}
          heroImg={ItemDetails.heroImg}
          price={price}
        />
      )}
    </div>
  );
};

export default ProductItem;
