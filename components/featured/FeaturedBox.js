

import { axiosInstance } from '@/axios/axios'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const FeaturedBox = ({productDetails}) => {
const router = useRouter()
const baseImgUrl = 'http://localhost:1339'

useEffect(()=>{

     axiosInstance.get(`/products?filters[category][$eqi]=BBQ`)
     .then(res=>{

          console.log("bbq data ",res.data)
     })
     .catch(err=>{

         console.log("BBq error",err)
     })
   
},[])

  return (
    <div className='bg-white h-[440px] relative flex flex-col rounded-[4px] p-[0.5rem] sm:w-[100%] px-5 '>

      {/* <img src="/hero.png" alt="car-img" className='w-2/3' /> */}
      <div style={{ backgroundImage: `url(${baseImgUrl}${productDetails?.heroImg?.data?.attributes?.url})` }} className="bg-center bg-no-repeat bg-cover w-full h-[220px]">
                 {/* <img src={`(${baseImgUrl}/${productDetails?.heroImg?.data?.attributes?.url})`} className='w-full h-full object-cover' />     */}
      </div>
   
          <span className='text-[#003933] text-[20px] sm:text-[22px] font-[700]'>{productDetails?.title} </span>

          <span className='text-black font-[400] mt-2 featuer_box_description'>{productDetails?.description}
          </span>

          <div className='flex justify-between items-center absolute bottom-0'>
          <button onClick={() => { router.push({ pathname: '/productitem', query: {itemDetails:JSON.stringify(productDetails)} }) }} className='bg-[#003933] text-white w-fit px-3 py-2 my-4 rounded-[4px]'>Explore</button>

            <div className='cursor-pointer'>
              {/* <img src="/cart1.png" alt="cart" className='' /> */}
            </div>

          </div>
         
    </div>
  )
}

export default FeaturedBox
