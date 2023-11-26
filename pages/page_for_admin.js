
import CustomerTable from '@/components/adminComponent/CustomerTable'
import { useRouter } from 'next/router'
import React, { useEffect, useLayoutEffect } from 'react'


function PageForAdmin() {

  const navigate = useRouter()  
  let token
  if (typeof window !== 'undefined') {
    // Perform localStorage action
     token = localStorage.getItem('token')
     if(!token){

           navigate.replace('/')
     }
  }

  return(
      <div>
           <CustomerTable token={token}/>
      </div>
  )
}

export default PageForAdmin
