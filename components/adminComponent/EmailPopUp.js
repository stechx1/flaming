import { axiosInstance } from "@/axios/axios";
import { generateRandomToken } from "@/utils/randomToken";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { Button, Input, Modal } from "antd";
import React, { useState } from "react";
import { toast } from "react-toastify";

function EmailPopUp({ isModalOpen, setIsModalOpen, userData }) {
  console.log("user data ",userData)
  const [isSending, setIsSending] = useState(false)
  const [images, setImages] = useState([])
  const [estimatedPrice,setEstimatedPrice] = useState()

  const handleCancel = () => {
    setIsModalOpen(false);
    setImages([])
    
  };
  console.log("estimated price ",estimatedPrice)
  const handleConfirm = async() => {
    const data = new FormData()
    const newData ={
         email:userData?.email,
         first_name:userData?.first_name,
         last_name:userData?.last_name,
         totalPrice:userData?.totalPrice,
         user_id:userData?.id,
         sign_content:userData?.sign_content,
         budget:userData?.budget,
         has_pay:false,
         size:userData?.size,
         selectedImageOption:userData?.selectedImageOption,
         selectedHanging:userData?.selectedHanging,
         selectedWeatherproofing:userData?.selectedWeatherproofing,
         selectedEdging:userData?.selectedEdging,
         electedPostage:userData?.electedPostage,
         originalPrice:userData?.originalPrice,
         verificationToken:generateRandomToken(),
         estimated_price:estimatedPrice

    }
    data.append("data", JSON.stringify(newData));

    for (const file of images) {
      data.append('files.images', file,);
    }
    let id
    try {
      setIsSending(true)
       const createConsumer = await axiosInstance.post('/consumer-responds?populate=*',data)
       console.log("create customer response => ",createConsumer)
       id = createConsumer.data?.data?.id
      if(createConsumer.data?.data?.attributes){
        const getData = createConsumer.data?.data?.attributes
        const emailData ={
              
               first_name:getData?.first_name,
               last_name:getData?.last_name,
               sign_content:getData?.sign_content,
               pay:getData?.totalPrice,
               budget:getData?.budget,
               email:getData?.email,
               imagesArr:getData?.images?.data?.map(item=>{return item?.attributes?.url}),
               size:getData?.size,
               custId:id,
               token:getData?.verificationToken,
               estimated_price:getData?.estimated_price
        }

        console.log(" email data ==> ",emailData)
        const response = await axiosInstance.post("/user/admin/email",{...emailData,to:userData?.email,from:'husain.saqib31@gmail.com'})
         toast.success("Email has been sent to customer successfully",{style:{color:'white',backgroundColor:'green'}})
      }
     
    setIsModalOpen(false);
    setImages([])
    } catch (error) {
          alert("some thing went wrong")
     }
     finally{
        setIsSending(false)
        }
};


const handleImge =(e)=>{
 
     const arrOfImage = Array.from(e.target.files)
     console.log("arrofImage ",arrOfImage.length)
     if(arrOfImage.length >3){
            toast.error('You can upload maximum three photos',{style:{color:'white',backgroundColor:'red'}})
     }
     else{
     setImages(arrOfImage)
     }
}


console.log("array of object ",images)
  return (
    <div className="max-w-2xl" >
      <Modal
        title="Details"
        open={isModalOpen}
        onOk={handleConfirm}
        onCancel={handleCancel}
        okButtonProps={{ style: { backgroundColor: "#003933",color:'white'},disabled:(images.length == 0 || !estimatedPrice || estimatedPrice <= 0 )? true:false }}
        okText={<span className="text-white">{isSending?'Sending...' : 'Send Email'}</span>}
        width={550}
        
      >
        <div className="grid grid-cols-1 gap-y-2  gap-x-2  w-full">
               <div className="flex flex-col gap-y-2">
               <div className="flex flex-col gap-y-2">
                    <label>Estimated Price</label>
                    <Input  type={'number'} value={estimatedPrice} onChange={(e)=>setEstimatedPrice(e.target.value)} min={0}/>
                  </div>
                <div className="flex items-center gap-x-2"><h3>Pictures</h3><small>(Maximum 3 pictures)</small></div>
               <label  htmlFor="image" className="w-[100%] h-60 flex item-center justify-center border-2 border-dashed rounded-md">
                       
                       <div className="h-full flex flex-col items-center justify-center">
                       <ArrowUpTrayIcon width={50}/>
                       <p>Upload</p>
                        </div>
                 </label>
                  
               </div>
                <div className="mt-4 md:mt-0 min-w-fit hidden">
                 <div className="flex justify-between border-b-[1px] py-1">
                     <span className="font-medium">Full Name :</span>
                     <span>{userData?.first_name} - {userData?.last_name}</span>
                 </div>
                 <div className="flex gap-x-5 justify-between border-b-[1px] py-1">
                     <span className="font-medium">Email:</span>
                     <span>{userData?.email}</span>
                 </div>
                 <div className="flex gap-x-5 justify-between border-b-[1px] py-1">
                     <span className="font-medium">Phone:</span>
                     <span>{userData?.phone}</span>
                 </div>
                 <div className="flex gap-x-5 justify-between border-b-[1px] py-1">
                     <span className="font-medium">Total Price:</span>
                     <span>${userData?.totalPrice}</span>
                 </div>
                 <div className="flex gap-x-5 justify-between border-b-[1px] py-1">
                     <span className="font-medium">Customer Budget:</span>
                     <span>${userData?.budget}</span>
                 </div>
                 <div className="flex gap-x-5 justify-between border-b-[1px] py-1">
                     <span className="font-medium">Size :</span>
                     <span>{userData?.size}</span>
                 </div>
                 <div className="flex gap-x-5 justify-between border-b-[1px] py-1">
                     <span className="font-medium">Sign Content</span>
                     <span>{userData?.sign_content}</span>
                 </div>
                
                 </div> 
                 
                 <input type="file" id="image" className="hidden" multiple accept="image/*" onChange={(e)=>handleImge(e)} />
        </div>
        {images.length >0  &&
                  <div className="flex flex-col mt-2 border-b-[1px] py-1">
                       <span className="font-medium">Uploaded Images</span>
                       <div className="flex flex-col gap-y-1 w-full">
                            {images.map((item,index)=>(
                                 <div className="flex w-full border-[1px] border-slate-200 py-1 px-2" key={index}>
                                     <img src={URL.createObjectURL(item)} className="w-9 h-9 rounded"/>
                                 </div>
                            ))}
                       </div>
                  </div>
                  }
      </Modal>
    </div>
  );
}

export default EmailPopUp;
