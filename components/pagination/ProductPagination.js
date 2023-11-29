import { Pagination } from 'antd'
import React from 'react'


function ProductPagination({total,setPage,page}) {
  return (
    <div>
      <Pagination
          size="small"
          total={total}
          showQuickJumper
          hideOnSinglePage
          current={page}
          onChange={(e)=>setPage(e)}
          pageSize={9}
    />
    </div>
  )
}

export default ProductPagination
