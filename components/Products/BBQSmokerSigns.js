import React, { useState } from 'react'
import ProductBox from './ProductBox'
import ProdcutLoading from '../skeleton/ProdcutLoading'
import NotFound from '../NotFound/NotFound'
import useCategoryProducts from '@/hooks/useCategoryProducts'
import ProductPagination from '../pagination/ProductPagination'

const BBQSmokerSigns = () => {
  const [page, setPage] = useState(1)
  const {products,loading,total} = useCategoryProducts('BBQ',page)

  if(loading){

    return(
       <ProdcutLoading/>
    )
  }
  else if(products.length == 0){

    return <NotFound/>
  }
  return (
   <div>
        <div className='grid min-h-[90vh] md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 gap-x-15 place-items-center'>
          {
          products.map((item,index)=>{
                return(
                  <ProductBox key={index} image='' productData={item?.attributes} />
                )
          }) }

        </div>
        {<div className='text-end'>
        <ProductPagination total={total} setPage={setPage} page={page} />
      </div>}
    </div>
  )
}

export default BBQSmokerSigns
