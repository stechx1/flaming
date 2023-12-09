import { axiosInstance } from "@/axios/axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function useCategoryProducts(category, pageNum) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const Abort = new AbortController();
    const getProduct = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get(
          `/products?pagination[page]=${pageNum}&pagination[pageSize]=9&populate=*&filters[category][$eqi]=${category}`
        );
        console.log("grage sign", res.data);
        if (res.data?.data) {
          setProducts(res.data?.data);

          setTotal(res.data?.meta?.pagination?.total);
        }
      } catch (error) {
        console.log("error,",error)
        toast.error("Something went wrong. Please try again.",{style:{color:'white',backgroundColor:'red'}})
      } finally {
        setLoading(false);
      }
    };

    getProduct();
    return ()=> Abort.abort()
  }, [category, pageNum]);

  return { products, loading, total };
}

export default useCategoryProducts;
