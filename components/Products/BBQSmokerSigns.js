import React from 'react'
import ProductBox from './ProductBox'

const BBQSmokerSigns = () => {
  return (
    <div className='grid grid-cols-3 gap-5'>
      <ProductBox image={'/products/3.png'} />
      <ProductBox image={'/products/4.png'} />
      <ProductBox image={'/products/2.png'} />
      <ProductBox image={'/products/3.png'} />
      <ProductBox image={'/products/1.png'} />
      <ProductBox image={'/products/5.png'} />
      <ProductBox image={'/products/1.png'} />
      <ProductBox image={'/products/2.png'} />
    </div>
  )
}

export default BBQSmokerSigns
