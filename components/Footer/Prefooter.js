import React from 'react'
import { Input, Button } from "@material-tailwind/react";

const Prefooter = () => {
  return (
    <div className='bg-[#CAD28F]  mt-10 py-16 pb-28 px-5'>

      <div className='flex lg:flex-row flex-col justify-between gap-5 max-w-7xl  m-auto'>
        <div className='flex flex-col gap-2 flex-1'>

          <span className='font-semibold text-[32px] '>Get Started with us today.</span>
          <span className='text-base font-normal'>We're committed to safeguarding your present and future. Our comprehensive coverage and passionate professionals prioritize your protection.</span>

        </div>

        <div className='flex relative items-center justify-center flex-1'>
          {/* <input type="text" name="" id="" className='border-none bg-white p-4 rounded-md ' />
          <button className='absolute r-0'>Hello</button> */}
          <div className="relative flex w-full max-w-[24rem]">
            <Input
              size=' lg'
              type="text"
              placeholder="Enter Zip Code"
              className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 "
              labelProps={{
                className: "hidden",
              }}
              containerProps={{
                className: "min-w-0",
              }}
            />
            <Button
              size="sm"
              color={"green"}
              className="!absolute right-1 top-1 rounded"
            >
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Prefooter
