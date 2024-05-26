import React,{useState} from 'react'
import Button1 from '../Components/Button1'
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
export default function Navbar() {
  const [open, setOpen] = useState(true);
  const toggleMenu = () => {
    setOpen(true);
  }
  return (
    <>
      {/* Header Section */}
      <header className='container flex justify-between py-2 items-center relative'>
        <h3 className='text-[#fb6518] font-bold text-3xl font-popp'>Pet.care</h3>
        <div className=' text-2xl ml-auto md:hidden' onClick={() => setOpen(!open)}>
            {open ? <IoReorderThreeOutline className='text-3xl' /> : <IoCloseSharp />}
          </div>
        <ul className=' gap-6 py-2 hidden md:flex border-b-2 border-[#ebdfd3]'>
            <li><a className='text-[14px] font-medium cursor-pointer md:text-[16px]' href="">Dry Food</a></li>
            <li><a className='text-[14px] font-medium cursor-pointer md:text-[16px]' href="">Services</a></li>
            <li><a className='text-[14px] font-medium cursor-pointer md:text-[16px]' href="">Products</a></li>
            <li><a className='text-[14px] font-medium cursor-pointer md:text-[16px]' href="">About us</a></li>
            <li><a className='text-[14px] font-medium cursor-pointer md:text-[16px]' href="">Blog</a></li>
        </ul>
       <div className='hidden md:flex'> <Button1 btn1="Sign up"/></div>
       {
            open ? null :
            <>
             <ul className='flex flex-col gap-3 py-8 px-2  border-b-2 absolute top-10 w-full left-0 shadowxl text-center border-[#ebdfd3]'>
            <li><a onClick={toggleMenu} className='text-[14px] font-medium cursor-pointer md:text-[16px]' href="">Dry Food</a></li>
            <li><a onClick={toggleMenu} className='text-[14px] font-medium cursor-pointer md:text-[16px]' href="">Services</a></li>
            <li><a onClick={toggleMenu} className='text-[14px] font-medium cursor-pointer md:text-[16px]' href="">Products</a></li>
            <li><a onClick={toggleMenu} className='text-[14px] font-medium cursor-pointer md:text-[16px]' href="">About us</a></li>
            <li><a onClick={toggleMenu} className='text-[14px] font-medium cursor-pointer md:text-[16px]' href="">Blog</a></li>
        <Button1 btn1="Sign up"/>
        </ul>
            </>
       }
    </header>
    </>
  )
}
