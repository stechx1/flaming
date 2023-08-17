import React from 'react'
import FeaturedBox from './FeaturedBox'

const Featured = () => {
  return (
    <div className='bg-[#f0eeef]  pb-10'>

      <div className='flex justify-center py-7 bg-[#E7E1CC]'>
        <span className='text-[#003933] text-[40px] text-center font-[600]'>Products</span>

      </div>

      <div className='bg-[#f0eeef] py-5 flex justify-center'>

        <div class=" sm:max-w-7xl ">
          <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
            <div>
              <FeaturedBox image={'/products/1.png'} />
            </div>
            <div>
              <FeaturedBox image={'/products/2.png'} />
            </div>
            <div>
              <FeaturedBox image={'/products/3.png'} />
            </div>
            <div>
              <FeaturedBox image={'/products/4.png'} />
            </div>
            <div>
              <FeaturedBox image={'/products/5.png'} />
            </div>
            <div>
              <FeaturedBox image={'/products/6.png'} />
            </div>

          </div>
        </div>


      </div>
      <div className='flex items-center mt-5 justify-center'>
        <button className='text-white bg-[#003933] px-2 py-1'>See all Products</button>
      </div>
    </div>
  )
}

export default Featured
