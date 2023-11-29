import { axiosInstance } from "@/axios/axios";
import React, { useEffect, useState } from "react";

function useFetchCustomer(pageNum, searchTerm, token) {
  const [customers, setCustomer] = useState([]);
  const [total, setTotal] = useState();

  console.log("current token ", token);

  useEffect(() => {
    const getCustomer = async () => {
      const api = searchTerm
        ? `/consumers?populate=*&filters[$or][0][first_name][$containsi]=${searchTerm}&filters[$or][1][last_name][$containsi]=${searchTerm}&filters[$or][2][email][$containsi]=${searchTerm}&sort[1]=first_name`
        : `/consumers?pagination[page]=${pageNum}&pagination[pageSize]=12&sort[1]=first_name&populate=*`;
      try {
        const response = await axiosInstance.get(api, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("customer response ", response.data);

        if (response.data.data) {
          setTotal(response.data?.meta?.pagination?.total);
          const customerResponse = response.data?.data;
          const filteredData = customerResponse?.map((item) => {
            const data = {
              id: item?.id,
              first_name: item?.attributes?.first_name,
              last_name: item?.attributes?.last_name,
              email: item?.attributes?.email,
              has_pay: item?.attributes?.has_pay,
              budget: item?.attributes?.budget,
              phone: item?.attributes?.phone,
              selectedEdging: item?.attributes?.selectedEdging || "-",
              selectedHanging: item?.attributes?.selectedHanging || "-",
              selectedImageOption: item?.attributes?.selectedImageOption || "-",
              selectedWeatherproofing:item?.attributes?.selectedWeatherproofing || "-",
              sign_content: item?.attributes?.sign_content,
              size: item?.attributes?.size,
              totalPrice: item?.attributes?.totalPrice,
              imageOne:item?.attributes?.image1?.data?.attributes?.url || '',
              imageTwo:item?.attributes?.image2?.data?.attributes?.url || '',
              heroImg:item?.attributes?.heroImg,
              originalPrice:item?.attributes?.originalPrice,
              electedPostage:item?.attributes?.electedPostage
            };

            return data;
          });

          setCustomer(filteredData);
        }

        // setCustomer(response.data?.data)
      } catch (error) {
        console.log("response fetch error", error);
      }
    };

    getCustomer();
  }, [pageNum, searchTerm]);

  return { customerData: customers, total: total };
}

export default useFetchCustomer;
