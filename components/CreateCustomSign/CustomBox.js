import React, { useState } from 'react'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { axiosInstance } from '@/axios/axios';

const CustomBox = () => {
  const schema = yup.object().shape({
    first_name: yup.string().required('first name is required'),
    last_name: yup.string().required('last name is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    phone:yup.number().required("phone number is required"),
    sign_content:yup.string().required("Content is required"),
    budget:yup.number().required("Budget is required"),
    timber_specie:yup.string().required("This field is required"),
    Postage:yup.string().required("postage is required"),
    post_code:yup.string().required("Post code is required"),
    font:yup.string().required("font is required"),
    size:yup.string().required("Size is required"),
    compartments:yup.number().required("field is required")
  });
  const [image,setImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const {register,handleSubmit,formState:{errors},reset} = useForm({resolver:yupResolver(schema)})

  const handleSubmitData =async(data)=>{

            setLoading(true)
            const type = "box"
            let formData= new FormData();
            const combineData = {...data,type}
            formData.append("files.image",image)
            formData.append("data",JSON.stringify(combineData))
             try {
              
                  const response = await axiosInstance.post('/customer-custom-designs?populate=*',formData)
                  console.log("Box response.data ",response.data)
                   const emailResponse = await  axiosInstance.post('/user/client/email',{product:response.data?.data?.attributes,to:'abc@gmail.com',from:'xyz@gmail.com'})
                console.log("email response ",emailResponse.data)
             } catch (error) {
                    console.log("box error ",error)
             }
             finally{

               setLoading(false)
             }
           
  }

  const handleImage =(e)=>{

          setImage(e.target.files[0])
  }

  return (
    <div className='bg-[#E7E1CC]'>

      <div className='flex max-w-5xl m-auto flex-col  py-10'>

        <div className='flex items-end justify-end px-10'>
          <button className='text-white bg-[#FE5B26] px-2 py-1'>Gift Vouchers available</button>

        </div>

        <div className=' flex flex-col'>
          <span className='text-[#003933] sm:text-[40px] text-[30px] text-center font-[600]'>Create your custom boxes</span>
          <span className='text-[#1C1C1C] text-center text-[18px]'>The one stop gift shop for the person who is hard to buy for, or who has everything.</span>

          <form onSubmit={handleSubmit(handleSubmitData)}  className='flex flex-col gap-3 gap-y-9 max-w-screen-2xl my-10 justify-between px-5'>
                   {/* <div>
                    <h3>Click here to view the fonts</h3>
                    <p>You can also use you own font,Paste link of fonts or type name of the font</p>
                     <a href={`${process.env.PUBLIC_URL}/assets/flaming-fonts.pdf`} without target='_blank' rel="noopener noreferrer">Click here to see fonts</a>
                   </div> */}
                   <div className='flex items-center gap-x-2 w-full'>
                   <SignInput label={'First Name'} events={register} name={'first_name'} errors={errors} type={'text'} />
                   <SignInput label={'Last Name'} events={register} name={'last_name'} errors={errors} type={'text'} />
                   </div>
                   <div className='flex items-center gap-x-2'>
                    <SignInput label={'Email'} events={register} name={'email'} errors={errors} type={'text'} />
                    <SignInput label={'Phone No'} events={register} name={'phone'} errors={errors} type={'number'} />
                   </div>
                    <div className='flex items-center gap-x-2'>
                    <SignInput label={'Timber Specie'} events={register} name={'timber_specie'} errors={errors} type={'text'} />
                    <SignInput label={'Font'} events={register} name={'font'} errors={errors} type={'text'} />
                   </div>
                   <SignInput label={'Budget'} events={register} name={'budget'} errors={errors} type={'number'} />
                   <SignInput label={'Wording on Top'} events={register} name={'sign_content'} errors={errors} type={'text'} />
                   <SignInput label={'Size of Sign'} events={register} name={'size'} errors={errors} type={'text'} />
                   

                   <div className='flex items-center gap-x-2'>
                    <div className='flex flex-col gap-y-2 w-full ' >
                     <label>Compartments</label>
                     <select {...register('compartments')} className='h-10 rounded border border-slate-400'>
                          <option selected disabled value={''}>Choose an option</option>
                          <option value={0}>No Compartments</option>
                          <option value={2}>2 Compartments</option>
                          <option value={3}>3 Compartments</option>
                          <option value={4}>4 Compartments</option>
                     </select>
                     {errors.compartments && <small>{errors.compartments.message}</small>}
                   </div>
                   <div className='flex flex-col gap-y-2 w-full '>
                     <label>Postage</label>
                     <select {...register('Postage')} className='h-10 rounded border border-slate-400'>
                          <option selected disabled value={''}>Choose an option</option>
                          <option value={0}>Aus Post Postage: Free Austrilia wide</option>
                          <option value={15}>Express Post $15 </option>
                          
                     </select>
                     {errors.Postage && <small>{errors.Postage.message}</small>}
                   </div>
                   </div>
                   
                   
                    <div className='mt-2 flex items-center w-full gap-x-2'>
                         <SignInput label={"Post Code"} name={'post_code'} events={register} type={'text'} errors={errors} />
                        <div className='flex flex-col w-full relative'>
                          <label>Upload an Image</label>
                          
                        <label htmlFor='image' className=' bg-white border rounded p-1 cursor-pointer  border-green-500'>Upload <span className='text-2xl'>+</span></label>
                        <input type='file' className='hidden' id='image' onChange={(e)=>handleImage(e)} />
                        <small className='absolute -bottom-5'>An image of what will look on box will be sent back for approval.</small>
                        </div>
                        
                    </div>  
                    {image && <img  src={URL.createObjectURL(image)} className='max-w-[400px] w-[100%]' />} 
                   <button disabled={loading} type='submit' className=' bg-green-400 text-white p-3' >{loading ? 'Sending...' :'Send Request' }</button>
          </form>
           
        </div>


      </div>
    </div>

  )
}

export default CustomBox

const SignInput =({label,events,name,errors,type})=>{
            
  return (
         
    <div className='flex flex-col gap-y-1 w-full relative'>
    <label>{label}</label>
    <input  {...events(name) } type={type} className={`border rounded p-1 h-10 border-slate-400`} />
    {errors[name]?<small className='absolute -bottom-4' style={{color:"red"}}>{errors[name].message}</small>:null}
    </div>
  )
}
