import React from 'react'
import FeaturedBox from './FeaturedBox'

const Featured = () => {
  return (
    <>

      <div className='flex justify-center py-7 bg-[#E7E1CC]'>
        <span className='text-[#003933] text-[40px] text-center font-[600]'>Featured Products</span>

      </div>

      <div className='bg-[#f0eeef] py-5 flex justify-center'>

        <div class=" sm:max-w-7xl ">
          <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
            <div>
              <FeaturedBox />
            </div>
            <div>
              <FeaturedBox />
            </div>
            <div>
              <FeaturedBox />
            </div>
            <div>
              <FeaturedBox />
            </div>
            <div>
              <FeaturedBox />
            </div>
            <div>
              <FeaturedBox />
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default Featured
