import React from 'react'
import CustomBox from './CustomBox'

const CreateCustomSign = () => {
  return (
    <div className='bg-[#E7E1CC]'>

      <div className='flex max-w-7xl m-auto flex-col  py-10'>

        <div className='flex items-end justify-end px-10'>
          <button className='text-white bg-[#FE5B26] px-2 py-1'>Gift Vouchers available</button>

        </div>

        <div className=' flex flex-col'>
          <span className='text-[#003933] text-[40px] text-center font-[600]'>Create your custom signs and boxes</span>
          <span className='text-[#1C1C1C] text-center text-[18px]'>The one stop gift shop for the person who is hard to buy for, or who has everything.</span>

          <div className='flex md:flex-row flex-col gap-3 max-w-screen-2xl my-10 justify-between px-5'>

            <div className='flex flex-col gap-3'>
              <CustomBox content={"100% Australian made"} />
              <CustomBox content={"Laser Engraved Timber Signs and Plaques"} />
              <CustomBox content={"Mango Wood Jewellery / Trinket boxes "} />
              <CustomBox content={"Olive Wood Sentimental Hearts"} />
              <CustomBox content={'Custom Engraved Acacia Wood Chopping/Serving Boards'} />
            </div>

            <div className='flex flex-col gap-3'>
              <CustomBox content={"Any custom/personalised content  catered for"} />
              <CustomBox content={"Free Postage within Australia "} />
              <CustomBox content={"International rates apply"} />
              <CustomBox content={"All products can be made & shipped within 6 days"} />
              <CustomBox content={"Except waterproof signs which need 11 days"} />
            </div>

          </div>

        </div>


      </div>
    </div>

  )
}

export default CreateCustomSign
