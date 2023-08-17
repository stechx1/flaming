import React from 'react'
import ProductBox from './ProductBox'

const HomeHouseSign = () => {
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
      <ProductBox image={'/products/6.png'} />
      <ProductBox image={'/products/2.png'} />
      <ProductBox image={'/products/3.png'} />
      <ProductBox image={'/products/4.png'} />
      <ProductBox image={'/products/1.png'} />
      <ProductBox image={'/products/2.png'} />
      <ProductBox image={'/products/5.png'} />
      <ProductBox image={'/products/1.png'} />
    </div>
  )
}

export default HomeHouseSign
