import React from 'react'
import AllProduct from '../../components/AllProduct/AllProduct';
const Products = ({data}) => {
  console.log(data);
  return (
    <div>
      {
        data.map((data)=>{
          return(
            <AllProduct key={data.id} data={data} />
          )
        })
      }
    </div>
  )
}

export default Products