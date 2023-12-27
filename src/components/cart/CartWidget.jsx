import React from 'react'
import { FaShoppingCart } from "react-icons/fa";


const CartWidget = () => {
  return (
    <div className='bg-[#EDEDED] flex rounded-md p-1 mr-4'>
        <span  className='text-center font-bold text-xl mr-1'>1</span>
        <FaShoppingCart className='text-center text-xl mt-[5px]'/>
    </div>
  )
}

export default CartWidget