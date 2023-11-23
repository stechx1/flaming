import React, { useState } from "react";
import { Button, Space, Table, Tag } from "antd";
import useFetchCustomer from "@/hooks/useFetchCustomer";
import EmailPopUp from "./EmailPopUp";
const { Column, ColumnGroup } = Table;
import { Input } from 'antd';
import ProductPagination from "../pagination/ProductPagination";
const { Search } = Input;

function CustomerTable({token}) {
  const [input, setInput] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [page,setPage] = useState(1)
  const { customerData,total } = useFetchCustomer(pageNum, search,token);

  console.log("customer data ", customerData);
  
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(input);
  };

  const handlePopUp =(data)=>{

          setIsModalOpen(true)
           setUserData(data)
          console.log("user data ",data)
  }



  return (
    <div className="min-h-screen">
      <div className="flex flex-col  min-h-screen  max-w-7xl mx-auto mt-5">
        <form onSubmit={handleSearch} className="flex w-full justify-end my-1">
          <div className="max-w-sm w-full flex mx-1 ">
          
            <Search onChange={(e) => handleInput(e)} className="outline-offset-0" placeholder="search..." enterButton={<button  style={{backgroundColor:'#003933',color:'white',padding:'8px 10px'}}>Search</button>} size="middle" />
    
          </div>
        </form>
        <Table
          dataSource={customerData}
          className="w-full bg-slate-50 overflow-x-auto"
          pagination={false}
          showHeader
        >
          <Column title="First Name" dataIndex="first_name" key="first_name" />
          <Column title="Last Name" dataIndex="last_name" key="last_name" />
          <Column title="Email" dataIndex="email" key="email" />
          <Column
            title="Sign content"
            dataIndex={"sign_content"}
            key={"sign_content"}
          />
          <Column title="Size" dataIndex="size" key="size" />
          <Column title="Total Price" dataIndex="totalPrice" key="totalPrice" />
          <Column title="User Budget" dataIndex="budget" key="budget" />
          <Column
            title="Selected Edging"
            dataIndex="selectedEdging"
            key="selectedEdging"
          />
          <Column
            title="selected Hanging"
            dataIndex="selectedHanging"
            key="selectedHanging"
          />
          <Column
            title="selected Image Option"
            dataIndex="selectedImageOption"
            key="selectedImageOption"
          />
          <Column
            title="Action"
            key={"Send"}
            render={(text,record) => (
              <button onClick={()=>handlePopUp(record)} className="text-white bg-blue-500 px-2 py-2 text-sm whitespace-nowrap rounded">
                Send Email
              </button>
            )}
          />
        </Table>
        {total > 12 && search == '' && <div className="my-2 mx-3 flex items-end justify-end">
          <ProductPagination page={pageNum} setPage={setPageNum} total={total} />
        </div>} 
      </div>
      <EmailPopUp isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} userData={userData} />
    </div>
  );
}

export default CustomerTable;
