import React from 'react'
import { useRouter } from "next/router";
import useProductById from '@/hooks/useProductById';
import { Card } from 'antd';
import CustomeDesigns from '@/components/CustomeDesigns/CustomeDesigns';
import useSignPricing from '@/hooks/useSignPricing';
import { baseImgUri } from '@/constants/baseImgUri';
function CustomeDesign() {
    const router = useRouter();
  const productId = router.query?.itemId;
  const {productData} = useProductById(productId)
 
  const {product} = useSignPricing()
 
  
 if(productData?.length == 0){
<div className='max-w-7xl sm:px-10 px-4 mx-auto'>
        
        <div className='mx-1 my-3'> 
              <h2>No Custome Design Found</h2>
        </div>
   </div>
           
 } 
  return (
    <div className='max-w-7xl sm:px-10 px-4 mx-auto h-[100vh]'>
        
         <div className='mx-1 my-3'> 
         <h2 className='text-3xl font-bold text-center my-5'>Custome designs for </h2>
         {/* <CustomeDesigns productData ={productData} /> */}
         <div className='grid grid-cols-3 items-stretch my-2 gap-4'>
             {product?.map((item,index)=>(

                   <div className='flex flex-col justify-between w-full cursor-pointer' onClick={()=>router.push({pathname:'/sign-pricing',query:{itemId:item?.id}})}>
                            <div className='h-52 '>
                               <img src={baseImgUri+item?.attributes?.heroImg?.data?.attributes?.url} className='w-full h-[100%]' />
                            </div>
                            <h3 className='p-2 text-center bg-slate-300'>{item?.attributes?.title}</h3>
                            
                   </div>
             ))}
         </div>
         </div>
    </div>
  )
}

export default CustomeDesign