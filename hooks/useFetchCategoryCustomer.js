import { axiosInstance } from '@/axios/axios'
import React, { useEffect, useState } from 'react'

function useFetchCategoryCustomer(active) {
  
     const [data,setData] = useState([])

     const activeTab = active == 2 ? 'sign' :active == 3 ? 'box': active == 4 ? 'chopping_serving_board' :active == 5 ? 'timber_serving_board':active == 6 ? 'olive_wood_heart':''

     useEffect(()=>{
          if(active != 1){
            const getData =async()=>{
                  try {

                    const response = await axiosInstance.get(`/customers?populate[0]=${activeTab}&populate[1]=${activeTab}.heroImg&populate[2]=${activeTab}.categories_data`)
                    const getData = response?.data?.data?.filter(item=>item?.attributes[activeTab]?.data) 
                    console.log("get data ==> ",getData)
                    setData(getData)
                  } catch (error) {
                    
                       console.log("errors => ",error)
                  }
                    

          }

          getData()
          }
          

     },[active])

     return {data:data}
}

export default useFetchCategoryCustomer