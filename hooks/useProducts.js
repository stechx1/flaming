import { axiosInstance } from '@/axios/axios';
import React, { useEffect, useState } from 'react'

function useProducts() {
const [product,setProducts] = useState([])
const [loading,setLoading] = useState(false)


    useEffect(() => {

        const getProduct =async()=>{

            setLoading(true)
            try {
                
                const response = await axiosInstance.get("/products?populate=*")
                console.log("product pagination", response.data)
                if (response.data?.data) {
                    setProducts(response.data?.data);
                    
                  }

            } catch (error) {
                console.log("get data error", err);
            }
            finally{
                  setLoading(false)
            }
          
        }

      getProduct()
        
}, []);

      return {product,loading}
}

export default useProducts
