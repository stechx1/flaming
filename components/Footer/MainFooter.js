import React from 'react'

const MainFooter = () => {
  return (
    <div className='bg-[#003933] p-10  pb-3'>
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-32 gap-10'>

        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-2'>
            <img src="/logo.png" alt="logo" />
          </div>
          <span className='text-white text-sm'>We're committed to safeguarding your present and future. Our comprehensive coverage and passionate professionals prioritize your protection.</span>
        </div>

        <div className='flex gap-5'>

          <div className='flex flex-col gap-3'>
            <span className='font-bold text-white'>Services</span>
            <span className=' text-white text-sm'>Life Insurance</span>
            <span className=' text-white text-sm'>Super Visa Insurance</span>
            <span className=' text-white text-sm'>Visitor to Canada</span>
            <span className=' text-white text-sm'>Travel insurance</span>
          </div>

          <div className='flex flex-col gap-3'>
            <span className='font-bold text-[#003933]'>Services</span>
            <span className=' text-white text-sm'>Life Insurance</span>
            <span className=' text-white text-sm'>Super Visa Insurance</span>
            <span className=' text-white text-sm'>Visitor to Canada</span>
            <span className=' text-white text-sm'>Travel insurance</span>
          </div>

        </div>

        <div className='flex flex-col gap-2'>

          <span className='font-bold text-white'>Contact Us</span>
          <span className=' text-white'>vidya@insurancebuzz.ca</span>
          <span className=' text-white'>+1 647 469 8766</span>

          <div className='flex gap-3 mt-5 items-center'>
            <i style={{ fontSize: "24px", cursor: "pointer" }} className="fa text-white fa-facebook-official" aria-hidden="true"></i>
            <i style={{ fontSize: "24px", cursor: "pointer" }} className="fa text-white fa-twitter-square" aria-hidden="true"></i>
            <i style={{ fontSize: "24px", cursor: "pointer" }} className="fa text-white fa-linkedin-square" aria-hidden="true"></i>


          </div>

        </div>

      </div>
      <div className='mt-14 text-sm text-white flex md:flex-row flex-col gap-5 justify-between'>
        <span>2023 © InsuranceBuzz - All right reserved</span>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-4'>

          <span className=' hover:underline cursor-pointer'>Term of Service</span>
          <span className=' hover:underline cursor-pointer'>Privacy Policy</span>
          <span className=' hover:underline cursor-pointer'>Partners & Affiliates</span>
          <span className=' hover:underline cursor-pointer'>Privacy Policy</span>

        </div>
      </div>
    </div>
  )
}

export default MainFooter
