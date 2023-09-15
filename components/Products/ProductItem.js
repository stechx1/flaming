import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Radio, Select } from 'antd';
import CustomizationForm from './CustomizationForm';

const ProductItem = () => {
  const [price, setPrice] = useState(100);
  const [selectedWeatherproofing, setselectedWeatherproofing] = useState(0);
  const [selectedEdging, setSelectedEdging] = useState(0);
  const [selectedHanging, setSelectedHanging] = useState(0);
  const [selectedImageOption, setSelectedImageOption] = useState(0);
  const [selectedPostage, setSelectedPostage] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const router = useRouter();
  return (
    <div className='flex flex-col my-5'>
      <div className='flex md:flex-row flex-col gap-3 justify-between'>
        <div className='flex flex-1'>
          <img src='/custom-timber.jpg' className='rounded-md' alt='hero' />
        </div>

        <div className='flex flex-1 flex-col gap-3 px-5'>
          <span className='text-[#003933] sm:text-[40px] text-[30px] font-[600]'>
            {router.query.name}
          </span>
          <span className='text-[#003933] font-bold text-7xl'>
            ${' '}
            {+price +
              +selectedWeatherproofing +
              +selectedHanging +
              +selectedEdging +
              +selectedImageOption +
              +selectedPostage}
          </span>
          <span>Base Price - $ 100 for size 60cm x 14cm x 20xm</span>

          <p className='text-gray-600'>
            Any content, any image, any font catered for. Indoor, Outdoor nut
            undercover or full outdoor signs. Various hanging options available.
            Straight edge and Natural edge with burnt effect options or cut out
            corners with border edge along with various hanging options. Using
            Grade 1 outdoor use Australian Hardwood timbers such as, Blackbutt
            Eucalyptus, Birdseye Stringy Bark Eucalyptus, Spotted Gum Eucalyptus
            and Red Ironbark Eucalyptus
          </p>

          <p className='text-gray-600'>
            Below are some examples of the wood timber signs, go through them
            so, you better know, what option to select.
          </p>
        </div>
      </div>

      <div className='my-12'>
        <h2 className='text-3xl font-bold mb-5'>Pictures</h2>
        <div className='grid grid-cols-4 gap-8'>
          <img src='/custom-wood/wood1.jpg' alt='wood1' />
          <img src='/custom-wood/wood2.jpg' alt='wood2' />
          <img src='/custom-wood/wood3.jpg' alt='wood3' />
          <img src='/custom-wood/wood4.jpg' alt='wood4' />
          <img src='/custom-wood/wood5.jpg' alt='wood5' />
          <img src='/custom-wood/wood6.jpg' alt='wood6' />
          <img src='/custom-wood/wood7.webp' alt='wood7' />
          <img src='/custom-wood/wood8.jpg' alt='wood8' />
          <img src='/custom-wood/wood9.jpg' alt='wood9' />
          <img src='/custom-wood/wood10.jpg' alt='wood10' />
          <img src='/custom-wood/wood11.jpg' alt='wood11' />
        </div>
      </div>
      <span className='text-[#003933] font-bold text-4xl'>
        Price: ${' '}
        {+price +
          +selectedWeatherproofing +
          +selectedHanging +
          +selectedEdging +
          +selectedImageOption +
          +selectedPostage}
      </span>
      <div className='p-5 my-12 flex flex-col gap-6 border xl:w-1/2 border-[#BDBDBD] rounded-xl'>
        <div className='flex gap-6 items-center'>
          <p className='text-[#003933] font-bold my-3'>Choose Size</p>
          <Select
            defaultValue='60 cm x 12cm x 12cm'
            style={{ width: 230 }}
            onChange={(value) => {
              console.log(value);
              setPrice(value);
            }}
            options={[
              { value: '200', label: '60 cm x 12cm x 12cm - $ 200' },
              { value: '300', label: '60 cm x 12cm x 12cm - $ 300' },
              { value: '400', label: '60 cm x 12cm x 12cm - $ 400' },
            ]}
          />
        </div>

        <div className='flex flex-col gap-2'>
          <h2>
            Choose Weatherproofing (Indoor varnish is included in base price)
          </h2>
          <Radio.Group
            onChange={(e) => setselectedWeatherproofing(e.target.value)}
          >
            <div className=''>
              <Radio value={15}>Semi weatherprooofed - $15</Radio>
              <Radio value={20}>Full weatherprooofed - $20</Radio>
            </div>
          </Radio.Group>
        </div>

        <div className='flex flex-col gap-2'>
          <h2>Choose Sign Edging (Straight edge is included in base price)</h2>
          <Radio.Group onChange={(e) => setSelectedEdging(e.target.value)}>
            <div className=''>
              <Radio value={10}>Straight Burnt Edge - $ 10</Radio>
              <Radio value={20}>Natural Edge - $20</Radio>
              <Radio value={25}>Burnt Natural Edge - $25</Radio>
              <Radio value={35}>Cut corners with border edge - $35</Radio>
            </div>
          </Radio.Group>
        </div>

        <div className='flex flex-col gap-2'>
          <h2>Hanging Options</h2>
          <Radio.Group onChange={(e) => setSelectedHanging(e.target.value)}>
            <div className=''>
              <Radio value={0}>No fixings - $ 0</Radio>
              <Radio value={0}>Hangers on back - $ 0</Radio>
              <Radio value={0}>Pilot holes - $ 0</Radio>
              <Radio value={15}>Eyebolts and chain - $15</Radio>
            </div>
          </Radio.Group>
        </div>

        {/* <div className='flex flex-col gap-2'>
          <h2>Hanging Options</h2>
          <Radio.Group onChange={(value) => console.log(value)} value={price}>
            <div className=''>
              <Radio value={0}>No fixings - $ 0</Radio>
              <Radio value={0}>Hangers on back - $ 0</Radio>
              <Radio value={0}>Pilot holes - $ 0</Radio>
              <Radio value={15}>Eyebolts and chain - $15</Radio>
            </div>
          </Radio.Group>
        </div> */}

        <div className='flex flex-col gap-2'>
          <h2>Images: </h2>
          <Radio.Group onChange={(e) => setSelectedImageOption(e.target.value)}>
            <div className=''>
              <Radio value={0}>No Image - $ 0</Radio>
              <Radio value={10}>Basic clipart logo type image - $ 10</Radio>
              <Radio value={20}>Photo image - $ 20</Radio>
            </div>
          </Radio.Group>
        </div>

        <div className='flex flex-col gap-2'>
          <h2>Postage: </h2>
          <Radio.Group onChange={(e) => setSelectedPostage(e.target.value)}>
            <div className=''>
              <Radio value={0}>
                Australia post Standard postage (Included in base price) - $ 0
              </Radio>
              <Radio value={20}>Australia Post Express postage - $ 20</Radio>
            </div>
          </Radio.Group>
          <p className='text-sm underline'>
            Signs over 1m need courier which will need quoting on size and
            weight of sign
          </p>
        </div>

        <div className='flex gap-8 items-center'>
          <button
            onClick={() => setShowForm(true)}
            className='bg-[#FE5B26] text-white w-fit px-3 py-2 my-4 rounded-[4px]'
          >
            Buy Now
          </button>

          <p>
            ${' '}
            {+price +
              +selectedWeatherproofing +
              +selectedHanging +
              +selectedEdging +
              +selectedImageOption +
              +selectedPostage}
          </p>
        </div>
      </div>

      {showForm && <CustomizationForm />}
    </div>
  );
};

export default ProductItem;
