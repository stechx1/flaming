import GalleryComponent from '@/components/gallery/GalleryComponent'
import ProductPagination from '@/components/pagination/ProductPagination'
import useGallery from '@/hooks/useGallery'
import React, { useState } from 'react'

function Gallery() {
   
   const [page,setPage] = useState(1)
   const {gallery,total} = useGallery(page)
   console.log("total ",total)
  return (
    <div className='max-w-7xl my-3 mx-1 sm:mx-auto min-h-screen p-0 sm:p-2'>
           <div className='flex flex-col gap-y-2 text-center my-5'>
               <h2 className='text-2xl font-bold'>Wood Engraving</h2>
               <p>Discover the versatility of our wood engraving services, tailored to accommodate any wood type and size of timber. Our skilled artisans employ cutting-edge techniques such as Laser Engraved timber and Sand Blasted timber etching, ensuring remarkable outcomes. Laser engraving imparts a distinctive burnt timber appearance, while sand blasting delivers a natural, non-burnt color finish. Whether you provide the wood or opt for our supply, we guarantee precision engraving according to your specifications, even on challenging, rough, or hard-to-reach surfaces. Elevate your wood with our craftsmanship and bring your vision to life.</p>
           </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 min-h-full gap-y-4 gap-x-2'>
              {gallery.map((item,index)=>(
                  <GalleryComponent key={index} galleryData ={item} />
              ))}
          </div>
          <div>
            {total>30 && <ProductPagination page={page} setPage={setPage} total={total}/>}
          </div>
    </div>
  )
}

export default Gallery
