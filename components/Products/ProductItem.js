import React from 'react'
import { useRouter } from 'next/router'
import { Checkbox } from 'antd';
import CustomizationForm from './CustomizationForm';

const ProductItem = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const router = useRouter();
  return (
    <div className='flex flex-col my-5'>

      <div className='flex md:flex-row flex-col gap-3 justify-between'>

        <div className='flex flex-1'>

          <img src="/hero.png" alt="hero" />

        </div>

        <div className='flex flex-1 flex-col gap-3 px-5'>
          <span className='text-[#003933] sm:text-[40px] text-[30px] font-[600]'>{router.query.name}</span>
          <span className='text-[#003933] font-bold text-[26px]'>$ 100</span>
          <span>Base Price - $ 100</span>

          <span>All about the product what it includes by default, things that won’t change the price of the product. </span>

          <div className='p-5 flex flex-col border xl:w-1/2 border-[#BDBDBD] rounded-xl'>
            <span className='text-[#003933] font-bold my-3'>Extras</span>


            <Checkbox onChange={onChange}>Semi Waterproofed - $10</Checkbox>
            <Checkbox onChange={onChange}>Natural Edge - $15</Checkbox>
            <Checkbox onChange={onChange}>Express Postage - $15</Checkbox>

          </div>


        </div>

      </div>

      <CustomizationForm />

    </div>
  )
}

export default ProductItem
