import { Button, Modal } from "antd";
import React from "react";

function EmailPopUp({ isModalOpen, setIsModalOpen, userData }) {
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleConfirm = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Modal
        title="Details"
        open={isModalOpen}
        onOk={handleConfirm}
        onCancel={handleCancel}
        okButtonProps={{ style: { backgroundColor: "#003933" } }}
        okText={'Send Email'}
      >
        <div className="grid grid-cols-1 items-center">
                 <div className="flex gap-x-5 border-b-[1px] py-1">
                     <span className="font-medium">Full Name</span>
                     <span>{userData?.first_name} - {userData?.last_name}</span>
                 </div>
                 <div className="flex gap-x-5 border-b-[1px] py-1">
                     <span className="font-medium">Email</span>
                     <span>{userData?.email}</span>
                 </div>
                 <div className="flex gap-x-5 border-b-[1px] py-1">
                     <span className="font-medium">Phone</span>
                     <span>{userData?.phone}</span>
                 </div>
                 <div className="flex gap-x-5 border-b-[1px] py-1">
                     <span className="font-medium">Customer Budget</span>
                     <span>{userData?.budget}</span>
                 </div>
                 <div className="flex gap-x-5 border-b-[1px] py-1">
                     <span className="font-medium">Size</span>
                     <span>{userData?.size}</span>
                 </div>
                 <div className="flex gap-x-5 border-b-[1px] py-1">
                     <span className="font-medium">Sign Content</span>
                     <span>{userData?.sign_content}</span>
                 </div>
                 <div className="flex gap-x-5 border-b-[1px] py-1">
                     <span className="font-medium">Actual Price</span>
                     <span>{userData?.totalPrice}</span>
                 </div>
                 <div className="flex gap-x-5 border-b-[1px] py-1">
                     <span className="font-medium">selected Edging</span>
                     <span>{userData?.selectedEdging}</span>
                 </div>
                 <div className="flex gap-x-5 border-b-[1px] py-1">
                     <span className="font-medium">selected Hanging</span>
                     <span>{userData?.selectedHanging}</span>
                 </div>
                 <div className="flex gap-x-5 border-b-[1px] py-1">
                     <span className="font-medium">selected Image Option</span>
                     <span>{userData?.selectedImageOption}</span>
                 </div>
                 <div className="flex gap-x-5 border-b-[1px] py-1">
                     <span className="font-medium">selected Weather proofing</span>
                     <span>{userData?.selectedWeatherproofing}</span>
                 </div>
                 
        </div>
      </Modal>
    </div>
  );
}

export default EmailPopUp;
