import { useRouter } from 'next/router';
import React from 'react'

function CheckoutDetails() {
    // const router = useRouter();
    // const productId = router.query?.itemId;
  return (
    <div className='max-w-xl w-full bg-slate-100 mx-auto mt-6'>
        
         <div>
            <h3 className='m-2 my-4 text-2xl font-bold text-center '>Product Details</h3>
            <div className='flex flex-col gap-y-2'>
                  <div className='flex justify-between py-2 bg-white mx-2 p-2'>
                    <span>Type</span>
                    <span>Home appliences</span>
                  </div>
                  <div className='flex justify-between py-2 bg-white mx-2 p-2'>
                    <span>Type</span>
                    <span>Home appliences</span>
                  </div>
                  <div className='flex justify-between py-2 bg-white mx-2 p-2'>
                    <span>Type</span>
                    <span>Home appliences</span>
                  </div>
                  <div className='flex justify-between py-2 bg-white mx-2 p-2'>
                    <span>Type</span>
                    <span>Home appliences</span>
                  </div>
                  <div className='flex justify-between py-2 bg-white mx-2 p-2'>
                    <span>Type</span>
                    <span>Home appliences</span>
                  </div>
                  <div className='flex justify-between py-2 bg-white mx-2 p-2'>
                    <span>Type</span>
                    <span>Home appliences</span>
                  </div>
                  <div className='flex justify-between py-2 bg-black mx-2 p-2 my-3'>
                    <span className='text-white'>Type</span>
                    <span className='text-white'>Home appliences</span>
                  </div>
                    <div className='flex justify-between py-2 p-2 '>
                        <button className=' bg-[#003933] text-white p-2 w-full'>Process to Checkout</button>
                     </div>
            </div>
         </div>
    </div>
  )
}

export default CheckoutDetails
