import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
export default function Footer() {
  return (
    <>
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 bg-[#fa6e43] px-20 py-10'>
        <div className='bg-transparent flex flex-col gap-3'>
            <h3 className='bg-transparent text-[20px] text-white text-center sm:text-start font-medium'>Pet.care</h3>
            <p className='bg-transparent text-[13px] md:text-[14px] text-white text-center sm:text-start'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <div className='bg-transparent mx-auto sm:mx-0'>
                <h2 className='bg-transparent flex gap-3 items-center font-medium text-[18px]  text-white'>Follow US: <FaTwitter className='bg-transparent text-white' /> <FaFacebookF className='bg-transparent text-white' /> <GrInstagram className='bg-transparent text-white' />  </h2>
            </div>
        </div>
        <div className='flex flex-col gap-2 bg-transparent md:mx-auto'>
            <h3 className='bg-transparent text-[20px] font-bold text-white text-center sm:text-start'>Information</h3>
            <ul className='bg-transparent flex flex-col gap-1'>
                <li className='bg-transparent text-white text-center sm:text-start font-medium text-[13px] md:text-[14px]'>History</li>
                <li className='bg-transparent text-white text-center sm:text-start font-medium text-[13px] md:text-[14px]'>Awards</li>
                <li className='bg-transparent text-white text-center sm:text-start font-medium text-[13px] md:text-[14px]'>Contact Us</li>
                <li className='bg-transparent text-white text-center sm:text-start font-medium text-[13px] md:text-[14px]'>Delivery Information</li>
                <li className='bg-transparent text-white text-center sm:text-start font-medium text-[13px] md:text-[14px]'>Terms & Conditions</li>
                <li className='bg-transparent text-white text-center sm:text-start font-medium text-[13px] md:text-[14px]'>Privacy Policy</li>
            </ul>
        </div>
        <div className='flex flex-col gap-2 bg-transparent md:mx-auto'>
            <h3 className='bg-transparent text-[20px] font-bold text-white text-center sm:text-start'>Customer Service</h3>
            <ul className='bg-transparent flex flex-col gap-1'>
                <li className='bg-transparent text-white text-center sm:text-start font-medium text-[13px] md:text-[14px]'>Helps & Faqs</li>
                <li className='bg-transparent text-white text-center sm:text-start font-medium text-[13px] md:text-[14px]'>Wishlist</li>
                <li className='bg-transparent text-white text-center sm:text-start font-medium text-[13px] md:text-[14px]'>Site map</li>
                <li className='bg-transparent text-white text-center sm:text-start font-medium text-[13px] md:text-[14px]'>Carriers</li>
                <li className='bg-transparent text-white text-center sm:text-start font-medium text-[13px] md:text-[14px]'>Delivery Information</li>
                <li className='bg-transparent text-white text-center sm:text-start font-medium text-[13px] md:text-[14px]'>Refund & Return</li>
            </ul>
        </div>
        <div className='flex flex-col gap-2 bg-transparent lg:mx-auto'>
            <h3 className='bg-transparent text-[20px] font-bold text-white text-center sm:text-start'>Contact Us</h3>
            <ul className='bg-transparent flex flex-col gap-1'>
                <li className='bg-transparent text-white text-center sm:text-start font-medium text-[13px] md:text-[14px]'>Helps & Faqs</li>
                <li className='bg-transparent text-white text-center sm:text-start font-medium text-[13px] md:text-[14px]'>Wishlist</li>
                <li className='bg-transparent text-white text-center sm:text-start font-medium text-[13px] md:text-[14px]'>Site map</li>
                <li className='bg-transparent text-white text-center sm:text-start font-medium text-[13px] md:text-[14px]'>Carriers</li>
                <li className='bg-transparent text-white text-center sm:text-start font-medium text-[13px] md:text-[14px]'>Delivery Information</li>
                <li className='bg-transparent text-white text-center sm:text-start font-medium text-[13px] md:text-[14px]'>Refund & Return</li>
            </ul>
        </div>
       
     </div>
    </>
  )
}
