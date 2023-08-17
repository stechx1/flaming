import React from 'react'

const CustomizationForm = () => {
  return (
    <div className='my-10 flex flex-col md:w-[80%]  gap-4'>

      <div className='flex sm:flex-row flex-col justify-between gap-10 '>

        <div className='flex flex-col gap-1 flex-1'>
          <span>First Name *</span>
          <input type="text" name="name" id="name" placeholder='First Name' className='bg-[#F8FAFC] border border-[#CDCDCD] rounded px-2 py-2' />
        </div>

        <div className='flex flex-col gap-1 flex-1'>
          <span>Last Name *</span>
          <input type="text" name="name" id="name" placeholder='Last Name' className='bg-[#F8FAFC] border border-[#CDCDCD] rounded px-2 py-2' />
        </div>

      </div>

      <div className='flex sm:flex-row flex-col justify-between gap-10 '>

        <div className='flex flex-col gap-1 flex-1'>
          <span>Email *</span>
          <input type="email" name="email" id="email" placeholder='Email' className='bg-[#F8FAFC] border border-[#CDCDCD] rounded px-2 py-2' />
        </div>

        <div className='flex flex-col gap-1 flex-1'>
          <span>Mobile Phone Number *</span>
          <input type="number" name="mobile" id="mobile" placeholder='Mobile Phone Number' className='bg-[#F8FAFC] border border-[#CDCDCD] rounded px-2 py-2' />
        </div>

      </div>

      <div className='flex flex-col gap-1 flex-1'>
        <span>Sign Content *</span>
        <input type="text" name="signcontent" id="signcontent" placeholder='Text to be engraved on sign/plague' className='bg-[#F8FAFC] border border-[#CDCDCD] rounded px-2 py-2' />
      </div>

      <div className='flex flex-col gap-1 flex-1'>
        <span>Size of sign *</span>
        <input type="text" name="size" id="size" placeholder='Text to be engraved on sign/plague' className='bg-[#F8FAFC] border border-[#CDCDCD] rounded px-2 py-2' />
      </div>
      <div className='flex flex-col gap-1 flex-1'>
        <span>Budget*</span>
        <input type="text" name="budget" id="budget" placeholder='Text to be engraved on sign/plague' className='bg-[#F8FAFC] border border-[#CDCDCD] rounded px-2 py-2' />
      </div>
      <div className='flex flex-col gap-1 flex-1'>
        <span>Timber Species (See examples in wood signs) Some types not available in all sizes. Natural timbers do vary batch to batch I get.*</span>
        <input type="text" name="name" id="name" className='bg-[#F8FAFC] border border-[#CDCDCD] rounded px-2 py-2' />
      </div>
      <div className='flex flex-col gap-1 flex-1'>
        <span>First Name *</span>
        <input type="text" name="name" id="name" className='bg-[#F8FAFC] border border-[#CDCDCD] rounded px-2 py-2' />
      </div>


      <div className='flex sm:flex-row flex-col justify-between gap-10 '>

        <div className='flex flex-col gap-1 flex-1'>
          <span>Images *</span>
          <input type="email" name="email" id="email" placeholder='Text to be engraved on sign/plague' className='bg-[#F8FAFC] border border-[#CDCDCD] rounded px-2 py-2' />
        </div>

        <div className='flex flex-col gap-1 flex-1'>
          <span>Images *</span>
          <input type="number" name="mobile" id="mobile" placeholder='Text to be engraved on sign/plague' className='bg-[#F8FAFC] border border-[#CDCDCD] rounded px-2 py-2' />
        </div>

      </div>

      <button className='text-white bg-[#003933] px-3 py-2 mt-4 rounded w-fit'>Submit</button>

    </div>
  )
}

export default CustomizationForm
