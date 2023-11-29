
"use client"
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import React, { useState } from 'react'
import CheckoutSuccess from './CheckoutSuccess'
import { useRouter } from 'next/router'

function PaypalCheckout({userData}) {

    const navigate = useRouter()
    const [isModalOpen, setIsModalOpen] = useState(false)
    console.log("user data ===>>>>",userData)

    const handleApprove = (data) => {
        setIsModalOpen(true)
        
    }
    const handleOk=()=>{
            setIsModalOpen(false)
            navigate.replace('/')
    }

  return (
   
          <div className='relative w-full'>  
          <button className='absolute w-full  text-white font-bold bg-[#2DA89A] px-3 py-2 mt-4 rounded '>Checkout</button>
            <PayPalButtons className='opacity-0'  style={{ layout: "horizontal",label:"checkout"}} 
             createOrder={(data,action)=>{
               return action.order.create({
                  intent:'CAPTURE',
                   purchase_units:[
                     {
                        custom_id:Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
                        invoice_id:Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
                        description:'wood analysis',
                        amount:{
                           value:userData || 20,
                           currency_code:'USD'
                        },
                        
                        payee:{
                           email_address:'sb-w5kp227699650@business.example.com'
                        }
                     }
                   ]
               })
             }}
            onApprove={async(data,action)=>{
                const order = await action.order.capture()
                console.log("order ",order)
                handleApprove(data)
            }}

              onError={(error)=>console.log("paypal error",error)}

            />
          <CheckoutSuccess handleOk={handleOk} isModalOpen={isModalOpen} />  
            
        </div>  
  
  )
}

export default PaypalCheckout
