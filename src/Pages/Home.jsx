import React from 'react'
import HomeImg from "../Utilities/1.png";
import SecondImg from "../Utilities/2.png";
import Button2 from '../Components/Button2';
import Petcare from "../Utilities/pet-care.png";
import Petgift from "../Utilities/gift.png";
import Homevisit from "../Utilities/home.png";
import Veterinery from "../Utilities/interaction.png";
import AnimalsMean from "../Utilities/3.png";
import Pedigree from "../Utilities/pedigree.png";
import { BsCart } from "react-icons/bs";
import CustomerSays from "../Utilities/4.png";
import { IoIosStar } from "react-icons/io";
import User from "../Utilities/user.jpg";
import Footer from "../Layouts/Footer";
export default function Home() {
    return (
        <>
            <div className='container lg:px-28 flex flex-col md:flex-row py-16'>
                <div className='md:w-1/2 lg:w-[30%] flex flex-col gap-1 md:gap-4 justify-center'>
                    <h2 className='text-[16px] md:text-[20px] font-medium font-popp'>The best patcore services</h2>
                    <h1 className='text-[25px] md:text-[46px] font-popp leading-[30px] sm:leading-[50px] tracking-wide font-bold'>We'are Here to Care of Little Pets</h1>
                    <p className='text-[14px] font-popp md:text-[16px]'>Our Highly skilled professional associates love pets as much as you do. and we offer a wide range of pet services.</p>
                    <Button2 btn2="Our Services" />
                </div>
                <div className='md:w-1/2 lg:w-[70%] flex justify-center my-5 sm:my-0'><img src={HomeImg} className='w-[100%] md:w-[80%]' alt="my-img" /></div>
            </div>
            <div className='md:px-20 lg:px-32 bg-[#ffebd6] flex flex-col md:flex-row gap-4 md:h-28 pb-10 my-10'>
                <div className='md:w-[40%] bg-transparent'><img src={SecondImg} className='-mt-[60px] mx-auto bg-transparent' alt="my-img" /></div>
                <div className='md:w-[60%] lg:w-[50%] bg-transparent flex flex-col sm:flex-row gap-4'>
                    <div className='flex flex-col bg-transparent sm:gap-1 items-center justify-center w-full'>
                        <h4 className='text-[35px] bg-transparent font-popp font-bold'>120K</h4>
                        <p className='text-[12px] bg-transparent font-popp font-normal'>Nutritional complete</p>
                    </div>
                    <div className='flex flex-col sm:gap-1 bg-transparent items-center justify-center w-full'>
                        <h4 className='text-[35px] bg-transparent font-popp font-bold'>24+</h4>
                        <p className='text-[12px] bg-transparent font-popp font-normal'>Products sale</p>
                    </div>
                    <div className='flex flex-col bg-transparent sm:gap-1 justify-center items-center w-full'>
                        <h4 className='text-[35px] bg-transparent font-popp font-bold'>70%</h4>
                        <p className='text-[12px] bg-transparent font-popp font-normal'>Client Satisfaction</p>
                    </div>
                </div>
            </div>
            {/*Our Services here */}
            <div className='container my-16'>
                <h1 className='text-center font-bold text-[33px] font-popp'>Our Services</h1>
                <p className='mx-auto text-center font-normal sm:w-3/4 md:w-1/2 lg:w-[33%] leading-snug font-popp text-[14px] md:text-[16px]'>As a team of experienced Pet owners and lovers, we really get to know you and your pet.</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5'>
                    <div className='flex flex-col gap-1 shadow-xl rounded-xl px-5 py-7 bg-[#f7e7d4] border border-[#fff6ed] text-center'>
                        <img src={Petcare} className='bg-[#90ccff] p-3 m-auto rounded-md' alt="my-img" />
                        <h4 className='text-[20px] bg-transparent font-bold font-popp'>Pet Care</h4>
                        <p className='text-[13px] md:text-[14px] bg-transparent px-3 font-normal font-popp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla enim ullam, distinctio nesciunt officia.</p>
                    </div>
                    <div className='flex flex-col gap-1 shadow-xl rounded-xl px-5 py-7 bg-[#f7e7d4] border border-[#fff6ed] text-center'>
                        <img src={Petgift} className='bg-[#cccccc] p-3 m-auto rounded-md' alt="my-img" />
                        <h4 className='text-[20px] bg-transparent font-bold font-popp'>Pet Gifts</h4>
                        <p className='text-[13px] md:text-[14px] bg-transparent px-3 font-normal font-popp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla enim ullam, distinctio nesciunt officia.</p>
                    </div>
                    <div className='flex flex-col gap-1 shadow-xl rounded-xl px-5 py-7 bg-[#f7e7d4] border border-[#fff6ed] text-center'>
                        <img src={Homevisit} className='bg-[#3b4172b0] p-3 m-auto rounded-md' alt="my-img" />
                        <h4 className='text-[20px] bg-transparent font-bold font-popp'>Home Visit</h4>
                        <p className='text-[13px] md:text-[14px] bg-transparent px-3 font-normal font-popp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla enim ullam, distinctio nesciunt officia.</p>
                    </div>
                    <div className='flex flex-col gap-1 shadow-xl rounded-xl px-5 py-7 bg-[#f7e7d4] border border-[#fff6ed] text-center'>
                        <img src={Veterinery} className='bg-[#67676ab5] p-3 m-auto rounded-md' alt="my-img" />
                        <h4 className='text-[20px] bg-transparent font-bold font-popp'>Veterinary</h4>
                        <p className='text-[13px] md:text-[14px] bg-transparent px-3 font-normal font-popp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla enim ullam, distinctio nesciunt officia.</p>
                    </div>

                </div>
            </div>
            {/*Animals mean section */}
            <div className='my-10 bg-[#ffebd6] flex flex-col md:flex-row pt-10 md:pr-20'>
                <div className='md:w-1/2 bg-transparent'><img src={AnimalsMean} className='w-[100%] md:w-[70%]' alt="" /></div>
                <div className='md:w-1/2 bg-transparent flex flex-col gap-2 p-5 sm:p-10 md:p-0 justify-center'>
                    <h1 className='text-[25px] sm:text-[30px] md:text-[35px] font-[900] bg-transparent leading-[25px] sm:leading-[40px] font-popp'>Animals have come to mean so much in our lives</h1>
                    <p className='text-[13px] md:text-[15px] bg-transparent '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dignissimos sapiente neque quam voluptatibus doloribus, ab obcaecati alias eius sit, eligendi repellat culpa officia, dolorem deleniti qui fugiat reprehenderit repellendus quae. Nisi, enim excepturi expedita fugit natus tenetur itaque ea.</p>
                    <Button2 btn2="Our Services" />
                </div>
            </div>
            {/* Best Selling Products */}
            <div className='container my-16 flex flex-col gap-10'>
                <h1 className='text-center font-bold text-[25px] leading-[30px] md:text-[33px] md:leading-[40px] font-popp'>Our Best Selling Products</h1>
                <div className='flex flex-wrap gap-3 justify-around'>
                    <button className='text-[#ffebd6] px-5 lg:px-10 py-2 pb-[10px] rounded-md bg-[#fb6518] font-medium font-popp'>All Products</button>
                    <button className='bg-[#ffebd6] px-5 text-[13px] md:text-[16px] lg:px-10 py-2 pb-[10px] duration-700 hover:text-[#ffebd6] hover:bg-[#fb6518] rounded-md text-[#fb6518] font-medium font-popp'>Dog Foods</button>
                    <button className='bg-[#ffebd6] px-5 text-[13px] md:text-[16px] lg:px-10 py-2 pb-[10px] duration-700 hover:text-[#ffebd6] hover:bg-[#fb6518] rounded-md text-[#fb6518] font-medium font-popp'>Cat Foods</button>
                    <button className='bg-[#ffebd6] px-5 text-[13px] md:text-[16px] lg:px-10 py-2 pb-[10px] duration-700 hover:text-[#ffebd6] hover:bg-[#fb6518] rounded-md text-[#fb6518] font-medium font-popp'>Cat Treats</button>
                    <button className='bg-[#ffebd6] px-5 text-[13px] md:text-[16px] lg:px-10 py-2 pb-[10px] duration-700 hover:text-[#ffebd6] hover:bg-[#fb6518] rounded-md text-[#fb6518] font-medium font-popp'>Dog Treats</button>
                    <button className='bg-[#ffebd6] px-5 text-[13px] md:text-[16px] lg:px-10 py-2 pb-[10px] duration-700 hover:text-[#ffebd6] hover:bg-[#fb6518] rounded-md text-[#fb6518] font-medium font-popp'>Pet Foods</button>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 '>
                    <div className='bg-[#ffebd6] p-5 rounded-xl flex flex-col gap-1 relative shadow-2xl'>
                        <img src={Pedigree} alt="my-img" className='bg-wite p-5 rounded-md' />
                        <h3 className='bg-transparent text-[16px] md:text-[18px] font-semibold'>Sonima style BBQ</h3>
                        <h4 className='bg-transparent text-[16px] md:text-[18px]'>All cat size</h4>
                        <h5 className='bg-transparent text-[15px] md:text-[17px] font-bold'>$70.00</h5>
                        <div className='absolute bottom-0 right-0 p-3 lg:p-5 rounded-br-xl bg-[#fb6518]'><BsCart className='text-white text-[22px] bg-transparent' /></div>
                    </div>
                    <div className='bg-[#ffebd6] p-5 rounded-xl flex flex-col gap-1 relative shadow-2xl'>
                        <img src={Pedigree} alt="my-img" className='bg-wite p-5 rounded-md' />
                        <h3 className='bg-transparent text-[16px] md:text-[18px] font-semibold'>Sonima style BBQ</h3>
                        <h4 className='bg-transparent text-[16px] md:text-[18px]'>All cat size</h4>
                        <h5 className='bg-transparent text-[15px] md:text-[17px] font-bold'>$70.00</h5>
                        <div className='absolute bottom-0 right-0 p-3 lg:p-5 rounded-br-xl bg-[#fb6518]'><BsCart className='text-white text-[22px] bg-transparent' /></div>
                    </div>
                    <div className='bg-[#ffebd6] p-5 rounded-xl flex flex-col gap-1 relative shadow-2xl'>
                        <img src={Pedigree} alt="my-img" className='bg-wite p-5 rounded-md' />
                        <h3 className='bg-transparent text-[16px] md:text-[18px] font-semibold'>Sonima style BBQ</h3>
                        <h4 className='bg-transparent text-[16px] md:text-[18px]'>All cat size</h4>
                        <h5 className='bg-transparent text-[15px] md:text-[17px] font-bold'>$70.00</h5>
                        <div className='absolute bottom-0 right-0 p-3 lg:p-5 rounded-br-xl bg-[#fb6518]'><BsCart className='text-white text-[22px] bg-transparent' /></div>
                    </div>
                </div>
            </div>
            {/*Client says section */}
            <div className='container my-16'>
                <div className='flex flex-col md:flex-row p-5 sm:p-10 pb-0 pl-0 bg-[#ffebd6] rounded-xl'>
                <div className='md:w-1/2 bg-transparent '><img src={CustomerSays} className='w-[100%] lg:w-[90%]' alt="" /></div>
                <div className='md:w-1/2 p-5 sm:p-10 md:p-0 bg-transparent flex flex-col gap-3 justify-center'>
                    <h1 className=' text-[25px] leading-[30px] md:text-[35px] font-bold bg-transparent md:leading-[40px] font-popp'>What Our Client Says</h1>
                    <p className='text-[13px] md:text-[15px] bg-transparent '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dignissimos sapiente neque quam voluptatibus doloribus, ab obcaecati alias eius sit, eligendi repellat culpa officia, dolorem deleniti qui fugiat reprehenderit repellendus quae. Nisi, enim excepturi expedita fugit natus tenetur itaque ea.</p>
                   <div className='bg-transparent flex gap-1'>
                     <IoIosStar className='bg-transparent text-[15px] text-[#f96b40] md:text-[19px]'/>
                     <IoIosStar className='bg-transparent text-[15px] text-[#f96b40] md:text-[19px]'/>
                     <IoIosStar className='bg-transparent text-[15px] text-[#f96b40] md:text-[19px]'/>
                     <IoIosStar className='bg-transparent text-[15px] text-[#f96b40] md:text-[19px]'/>
                     <IoIosStar className='bg-transparent text-[15px] text-[#f96b40] md:text-[19px]'/>
                   </div>
                   <div className='bg-transparent flex items-center gap-1 mt-3'>
                    <img src={User} className='w-[50px] h-[50px] rounded-full bg-transparent' alt="my-img" />
                    <div className='bg-transparent'>
                        <h3 className='bg-transparent text-[15px] md:text-[17px] font-bold'>Adelle Petricia</h3>
                        <p className='bg-transparent text-[13px] md:text-[15px]'>CEO & Founder @Bellet</p>
                    </div>
                   </div>
                </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
