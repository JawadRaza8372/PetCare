import React from 'react'
import { BsCart } from "react-icons/bs";
import Pedigree from "../Utilities/pedigree.png";
export default function Products(props) {
  return (
    <>
          <div className='mx-2 bg-transparent'>
                        <div className='bg-[#ffebd6] p-5 rounded-xl flex flex-col gap-1 relative z-0'>
                            <img src={Pedigree} alt="my-img" className='bg-wite p-5 rounded-md ' />
                            <h3 className='bg-transparent text-[16px] md:text-[18px] font-semibold'>{props.heading}</h3>
                            <h4 className='bg-transparent text-[16px] md:text-[18px]'>{props.size}</h4>
                            <h5 className='bg-transparent text-[15px] md:text-[17px] font-bold'>{props.price}</h5>
                            <div className='absolute bottom-0 right-0 p-3 lg:p-5 rounded-br-xl bg-[#fb6518]'><BsCart className='text-white text-[22px] bg-transparent' /></div>
                        </div>
                     </div>
                    
    </>
  )
}
