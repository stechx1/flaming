"use client";
import { axiosInstance } from "@/axios/axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import PaypalCheckout from "./PaypalCheckout";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { toast } from "react-toastify";

function CheckoutDetails() {
  const router = useRouter();
  const { id, token } = router.query;
  const [userData, setUserData] = useState(null);
   console.log("all data ",userData)
  useEffect(() => {
    const abort = new AbortController();
    const signal = abort.signal;
    const fetchUser = async () => {
      try {
        const response = await axiosInstance.get(`/consumer-responds/${id}`, {
          signal,
        });
        
        setUserData(response.data?.data?.attributes);
      } catch (error) {
         if(error?.response?.data){
                toast.error(error?.response?.data?.message,{style:{color:'white',backgroundColor:'red'}})
         }
      }
    };
    fetchUser();
    return () => abort.abort();
  }, [id]);
  
console.log("user data ",userData)
  return (
    <div className="max-w-[1480px] w-full mx-auto mt-6">
      <div>
        <h3 className="m-2 my-4 text-2xl font-bold text-center ">
          Product Details
        </h3>
        <div className="flex flex-col gap-y-2">
          <div className="relative mx-auto w-full bg-[rgb(250,250,252)] ">
            <div className="grid min-h-screen grid-cols-10">
              <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
                <div className="mx-auto w-full max-w-lg">
                  <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
                    Secure Checkout
                    <span className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span>
                  </h1>
                  <form action="" className="mt-10 flex flex-col space-y-4">
                    <div>
                      <label
                        for="email"
                        className="text-xs font-semibold text-gray-500"
                      >
                        First Name
                      </label>
                      <div className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500">
                        {userData?.first_name}
                      </div>
                    </div>
                    <div className="relative">
                      <label className="text-xs font-semibold text-gray-500">
                        Last Name
                      </label>
                      <div className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500">
                        {userData?.last_name}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500">
                        Sign Content
                      </p>
                      <div className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500">
                        {userData?.sign_content}
                      </div>
                    </div>
                    <div className="flex flex-col text-sm ">
                      <label>Size of Content</label>
                      <div className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500">
                        {userData?.size}
                      </div>
                    </div>
                  </form>
                 <div className="hidden lg:flex my-4">
                  <PayPalScriptProvider
                options={{
                  clientId:
                    "ATF_cy6zZwHn4mHPgBaNcKm3094XLjpIJswgGiUCJeYFhLKSJDBIK_ZqGUhwdkqXeuVROllNGK8cZceM",
                 
                }}
              >
                <PaypalCheckout userData={userData?.estimated_price} />
              </PayPalScriptProvider>
              </div>
                </div>
              </div>
              <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
                <h2 className="sr-only">Order summary</h2>
                <div>
                  <div className="absolute inset-0 h-full lg:h-[80%] w-full bg-gradient-to-t from-teal-800 to-teal-400 opacity-95"></div>
                </div>
                <div className="relative">
                  <ul className="space-y-5">
                    <li className="flex justify-between">
                      <div className="inline-flex">
                        <div className="ml-3">
                          <p className="text-base font-semibold text-white">
                            selected Image Option
                          </p>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-white">
                        ${userData?.selectedImageOption || 0}
                      </p>
                    </li>
                    <li className="flex justify-between">
                      <div className="inline-flex">
                        <div className="ml-3">
                          <p className="text-base font-semibold text-white">
                            selected Hanging
                          </p>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-white">
                        ${userData?.selectedHanging || 0}
                      </p>
                    </li>
                    <li className="flex justify-between">
                      <div className="inline-flex">
                        <div className="ml-3">
                          <p className="text-base font-semibold text-white">
                            selected Edging
                          </p>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-white">
                        ${userData?.selectedEdging || 0}
                      </p>
                    </li>
                    <li className="flex justify-between">
                      <div className="inline-flex">
                        <div className="ml-3">
                          <p className="text-base font-semibold text-white">
                            selected Weather proofing
                          </p>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-white">
                        ${userData?.selectedWeatherproofing || 0}
                      </p>
                    </li>
                    <li className="flex justify-between">
                      <div className="inline-flex">
                        <div className="ml-3">
                          <p className="text-base font-semibold text-white">
                            Selected Postage
                          </p>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-white">
                        ${userData?.electedPostage || 0}
                      </p>
                    </li>
                    <li className="flex justify-between">
                      <div className="inline-flex">
                        <div className="ml-3">
                          <p className="text-xl font-semibold text-slate-100">
                            original Price
                          </p>
                        </div>
                      </div>
                      <p className="text-xl font-semibold text-white">
                        ${userData?.originalPrice}
                      </p>
                    </li>
                  </ul>
                  <div className="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
                  <div className="space-y-2">
                    <p className="flex justify-between text-lg font-bold text-white">
                      <span>Total price:</span>
                      <span>{userData?.totalPrice}</span>
                    </p>
                  </div>
                  <div className="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
                  <div className="text-white font-semibold flex justify-between">
                      <span>Estimated Price <small className="text-[#ffff81]">(amount to pay)</small>:</span>
                      <span>${userData?.estimated_price}</span>
                  </div>
                </div>
                <div className="relative mt-10 text-white">
                  <h3 className="mb-5 text-lg font-bold">Support</h3>
                  <p className="text-sm font-semibold">
                    +1111111111{" "}
                    <span className="font-light">(International)</span>
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    support@abc.com <span className="font-light">(Email)</span>
                  </p>
                  <p className="mt-2 text-xs font-medium">
                    Call us now for payment related issues
                  </p>
                </div>
               
              </div>
            </div>
            
            <div className="flex lg:hidden my-5">
              <PayPalScriptProvider
                options={{
                  clientId:
                    "ATF_cy6zZwHn4mHPgBaNcKm3094XLjpIJswgGiUCJeYFhLKSJDBIK_ZqGUhwdkqXeuVROllNGK8cZceM",
                  currency: "USD",
                  intent: "capture",
                }}
              >
                <PaypalCheckout userData={userData?.estimated_price} />
              </PayPalScriptProvider>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutDetails;
