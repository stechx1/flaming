import React from 'react'

const CustomBox = ({ content }) => {
  return (
    <div className='flex gap-2 items-center'>
      <i className="fa fa-check-circle" style={{ color: "#003933", fontSize: "20px" }} aria-hidden="true"></i>

      <span>{content}</span>

    </div>
  )
}

export default CustomBox
