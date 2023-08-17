import React from 'react'

const ProductBox = ({ image }) => {
  return (
    <div className='bg-white flex flex-col rounded-[4px] p-[0.5rem] sm:w-[80%] px-5'>

      {/* <img src="/hero.png" alt="car-img" className='w-2/3' /> */}
      <div style={{ backgroundImage: `url(${image})` }} className="bg-cover bg-center bg-no-repeat w-full h-[150px]">

      </div>
      <span className='text-[#003933] text-[22px] font-[700]'>Engraved Olive Wood Hearts</span>

      <span className='text-black font-[400]'>Beautifully grained and fit in the palm of you hand. No two hearts are the same.
      </span>

      <div className='flex justify-between items-center'>
        <button className='bg-[#003933] text-white w-fit px-3 py-2 my-4 rounded-[4px]'>Explore</button>

        <div className='cursor-pointer'>
          <img src="/cart1.png" alt="cart" className='' />
        </div>

      </div>

    </div>
  )
}

export default ProductBox
