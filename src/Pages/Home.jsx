import React, { useEffect, useLayoutEffect, useState } from "react";
import HomeImg from "../Utils/1.png";
import SecondImg from "../Utils/2.png";
import Button2 from "../Components/Button2";
import Petcare from "../Utils/pet-care.png";
import Petgift from "../Utils/gift.png";
import Homevisit from "../Utils/home.png";
import Veterinery from "../Utils/interaction.png";
import AnimalsMean from "../Utils/3.png";
// import CustomerSays from "../Utils/4.png";
// import { IoIosStar } from "react-icons/io";
// import User from "../Utils/user.jpg";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Petform from "../Utils/pet-form.png";
import textStrings from "../Utils/AllText";
import { useNavigate, useLocation } from "react-router-dom";
export default function Home() {
  const { home } = textStrings;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:theanimalsjourney@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;
    window.location.href = mailtoLink;
  };
  const hashlocation = useLocation()?.hash;
  const navigation = useNavigate();
  useEffect(() => {
    if (hashlocation) {
      const id = hashlocation.replace("#", "");
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }
  }, [hashlocation]);
  useLayoutEffect(() => {
    if (hashlocation) {
      const id = hashlocation.replace("#", "");
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }
  }, [hashlocation]);
  // const OurProducts = [
  //   {
  //     img: { Pedigree },
  //     heading: "Sonima style BBQ",
  //     size: "  All cat size",
  //     price: "$70.00",
  //   },
  //   {
  //     img: { Pedigree },
  //     heading: "Sonima style BBQ",
  //     size: "  All cat size",
  //     price: "$70.00",
  //   },
  //   {
  //     img: { Pedigree },
  //     heading: "Sonima style BBQ",
  //     size: "  All cat size",
  //     price: "$70.00",
  //   },
  // ];
  const ourWorkArray = [
    {
      img: Petcare,
      heading: home.container3.cardHeading1,
      subHeading: home.container3.cardSubHeading1,
      color: "bg-[#90ccff]",
      onClickFun: () => navigation("/journey"),
    },
    {
      img: Petgift,
      heading: home.container3.cardHeading2,
      subHeading: home.container3.cardSubHeading2,
      color: "bg-[#cccccc]",
      onClickFun: () => navigation("/hope"),
    },
    {
      img: Homevisit,
      heading: home.container3.cardHeading3,
      subHeading: home.container3.cardSubHeading3,
      color: "bg-[#3b4172b0]",
      onClickFun: () => navigation("/tnvr"),
    },
    {
      img: Veterinery,
      heading: home.container3.cardHeading4,
      subHeading: home.container3.cardSubHeading4,
      color: "bg-[#67676ab5]",
      onClickFun: () => navigation("/wings"),
    },
  ];
  // var settings = {
  //   dots: false,
  //   autoplay: true,
  //   infinite: true,
  //   speed: 700,
  //   arrows: false,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 640,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  return (
    <>
      <div className="container lg:px-28 flex flex-col md:flex-row py-16">
        <div className="md:w-1/3 lg:w-[60%] flex flex-col gap-1 md:gap-4 justify-center">
          <h2 className="text-[16px] md:text-[20px] font-medium font-popp">
            {home.container1.firstTxt}
          </h2>
          <h1 className="text-[20px] md:text-[38px] font-popp leading-[30px] sm:leading-[50px] tracking-wide font-bold">
            {home.container1.secondTxt}
          </h1>
          <p className="text-[14px] font-popp md:text-[16px]">
            {home.container1.thirdTxt}
          </p>
        </div>
        <div className="md:w-1/4 lg:w-[40%] flex justify-center my-5 sm:my-0">
          <img src={HomeImg} className="w-[100%] md:w-[80%]" alt="my-img" />
        </div>
      </div>
      <div className="md:px-20 lg:px-32 bg-[#e371253d] flex flex-col md:flex-row gap-4 md:h-28 pb-10 my-10">
        <div className="md:w-[40%] bg-transparent">
          <img
            src={SecondImg}
            className="-mt-[60px] mx-auto bg-transparent"
            alt="my-img"
          />
        </div>
        <div className="md:w-[60%] lg:w-[50%] bg-transparent flex flex-col md:h-28 justify-center items-center sm:flex-row gap-4">
          <div className="flex flex-col bg-transparent sm:gap-1 items-center justify-center w-full">
            <h4 className="text-[35px] bg-transparent font-popp font-bold">
              999+
            </h4>
            <p className="text-[12px] bg-transparent font-popp font-normal">
              {home.container2.firstTxt}
            </p>
          </div>
          <div className="flex flex-col sm:gap-1 bg-transparent items-center justify-center w-full">
            <h4 className="text-[35px] bg-transparent font-popp font-bold">
              24+
            </h4>
            <p className="text-[12px] bg-transparent font-popp font-normal">
              {home.container2.secondTxt}
            </p>
          </div>
          <div className="flex flex-col bg-transparent sm:gap-1 justify-center items-center w-full">
            <h4 className="text-[35px] bg-transparent font-popp font-bold">
              100+
            </h4>
            <p className="text-[12px] bg-transparent font-popp font-normal">
              {home.container2.thirdTxt}
            </p>
          </div>
        </div>
      </div>
      {/*Our Services here */}
      <div id="work" className="container my-8 py-8">
        <h1 className="text-center font-bold text-[33px] font-popp">
          {home.container3.firstTxt}
        </h1>
        <p className="mx-auto text-center font-normal sm:w-3/4 md:w-1/2 lg:w-[33%] leading-snug font-popp text-[14px] md:text-[16px]">
          {home.container3.secondTxt}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
          {ourWorkArray?.map((dat, index) => (
            <div
              style={{ cursor: "pointer" }}
              onClick={dat.onClickFun}
              key={index}
              className="flex flex-col gap-1 shadow-xl rounded-xl px-5 py-7 bg-[#e371253d] border border-[#fff6ed] text-center"
            >
              <img
                src={dat?.img}
                className={"p-3 m-auto rounded-md " + dat?.color}
                alt="my-img"
              />
              <h4 className="text-[16px] bg-transparent font-bold font-popp">
                {dat?.heading}
              </h4>
              <p className="text-[13px] md:text-[14px] bg-transparent px-3 font-normal font-popp">
                {`${dat?.subHeading}`.substring(0, 100)} ...
              </p>
            </div>
          ))}
        </div>
        <div
          onClick={() => navigation("/work")}
          className="flex items-center justify-center my-[40px] w-100"
        >
          <Button2 extraStyle={{ marginRight: 0 }} btn2={"Read More"} />
        </div>
      </div>
      {/*Animals mean section */}
      <div className="my-10 bg-[#e371253d] flex flex-col md:flex-row pt-10 md:pr-20">
        <div className="md:w-1/2 bg-transparent">
          <img
            src={AnimalsMean}
            className="bg-transparent w-[100%] md:w-[70%]"
            alt=""
          />
        </div>
        <div className="md:w-1/2 bg-transparent flex flex-col gap-2 p-5 sm:p-10 md:p-0 justify-center">
          <h1 className="text-[25px] sm:text-[30px] md:text-[35px] font-[900] bg-transparent leading-[25px] sm:leading-[40px] font-popp">
            {home.container4.mainHeading}
          </h1>
          <p className="text-[13px] md:text-[15px] bg-transparent ">
            {home.container4.subHeading}
          </p>
          {/* <Button2 btn2={home.container4.btnTxt} /> */}
        </div>
      </div>
      {/* Best Selling Products */}
      {/* <div className="container my-16 flex flex-col gap-10">
        <h1 className="text-center font-bold text-[25px] leading-[30px] md:text-[33px] md:leading-[40px] font-popp">
          Our Best Selling Products
        </h1>
        <div className="flex overflow-auto gap-3 justify-around">
          <button className="flex items-center text-[#ffebd6] px-5 lg:px-10 py-2 pb-[10px] rounded-md bg-[#E37025] font-medium font-popp">
            AllProducts
          </button>
          <button className="flex items-center bg-[#e371253d] px-5 text-[13px] md:text-[16px] lg:px-10 py-2 pb-[10px] duration-700 hover:text-[#ffebd6] hover:bg-[#E37025] rounded-md text-[#E37025] font-medium font-popp">
            DogFoods
          </button>
          <button className="flex items-center bg-[#e371253d] px-5 text-[13px] md:text-[16px] lg:px-10 py-2 pb-[10px] duration-700 hover:text-[#ffebd6] hover:bg-[#E37025] rounded-md text-[#E37025] font-medium font-popp">
            CatFoods
          </button>
          <button className="flex items-center bg-[#e371253d] px-5 text-[13px] md:text-[16px] lg:px-10 py-2 pb-[10px] duration-700 hover:text-[#ffebd6] hover:bg-[#E37025] rounded-md text-[#E37025] font-medium font-popp">
            CatTreats
          </button>
          <button className="flex items-center bg-[#e371253d] px-5 text-[13px] md:text-[16px] lg:px-10 py-2 pb-[10px] duration-700 hover:text-[#ffebd6] hover:bg-[#E37025] rounded-md text-[#E37025] font-medium font-popp">
            DogTreats
          </button>
          <button className="flex items-center bg-[#e371253d] px-5 text-[13px] md:text-[16px] lg:px-10 py-2 pb-[10px] duration-700 hover:text-[#ffebd6] hover:bg-[#E37025] rounded-md text-[#E37025] font-medium font-popp">
            PetFoods
          </button>
        </div>

        <Slider className="flex gap-3 bg-transparent z-0" {...settings}>
          {OurProducts.map((val) => {
            return (
              <Products
                img={val.img}
                heading={val.heading}
                size={val.size}
                price={val.price}
              />
            );
          })}
        </Slider>
      </div> */}
      {/*Client says section */}
      {/* <div className="container my-16">
        <div className="flex flex-col md:flex-row p-5 sm:p-10 lg:p-0 pb-0 pl-0 bg-[#e371253d] rounded-xl">
          <div className="md:w-1/2 bg-transparent ">
            <img
              src={CustomerSays}
              className=" bg-transparent w-[100%] lg:w-[90%]"
              alt=""
            />
          </div>
          <div className="md:w-1/2 p-5 sm:p-10 bg-transparent flex flex-col gap-1 md:gap-3 justify-center">
            <h1 className=" text-[25px] leading-[30px] md:text-[35px] font-bold bg-transparent md:leading-[40px] font-popp">
              {home.container5.mainHeading}
            </h1>
            <p className="text-[13px] md:text-[15px] bg-transparent ">
              {home.container4.subHeading}
            </p>
            <div className="bg-transparent flex gap-1">
              <IoIosStar className="bg-transparent text-[15px] text-[#f96b40] md:text-[19px]" />
              <IoIosStar className="bg-transparent text-[15px] text-[#f96b40] md:text-[19px]" />
              <IoIosStar className="bg-transparent text-[15px] text-[#f96b40] md:text-[19px]" />
              <IoIosStar className="bg-transparent text-[15px] text-[#f96b40] md:text-[19px]" />
              <IoIosStar className="bg-transparent text-[15px] text-[#f96b40] md:text-[19px]" />
            </div>
            <div className="bg-transparent flex items-center gap-1 mt-3">
              <img
                src={User}
                className="w-[50px] h-[50px] rounded-full bg-transparent"
                alt="my-img"
              />
              <div className="bg-transparent">
                <h3 className="bg-transparent text-[15px] md:text-[17px] font-bold">
                  {home.container5.clientName}
                </h3>
                <p className="bg-transparent text-[13px] md:text-[15px]">
                  {home.container5.clientRank}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* contact page */}
      <div id="contact" className=" my-8 py-8 container">
        <div className="bg-[#e371253d] p-5 rounded-xl shadow-xl md:p-10 flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-transparent">
            <img src={Petform} className="bg-transparent" alt="my-img" />
          </div>
          <div className="md:w-1/2 bg-transparent">
            <h1 className=" text-[25px] leading-[30px] md:text-[35px] font-bold bg-transparent md:leading-[40px] font-popp">
              Contact Us
            </h1>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 bg-transparent mt-3"
            >
              <div className="flex bg-transparent flex-col md:flex-row gap-3 md:gap-5 w-full ">
                <div className="w-full bg-transparent">
                  <label className="bg-transparent" for="">
                    Name{" "}
                    <span className="bg-transparent text-lg text-red-500">
                      *
                    </span>
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    required={true}
                    minLength={3}
                    onChange={handleChange}
                    autoComplete="off"
                    autoCorrect="off"
                    className="bg-transparent outline-none border border-gray-500 focus:border-green rounded-sm p-2 w-full"
                  />
                </div>
                <div className="w-full bg-transparent">
                  <label className="bg-transparent" for="">
                    E-Mail{" "}
                    <span className="bg-transparent text-lg text-red-500">
                      *
                    </span>
                  </label>{" "}
                  <br />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required={true}
                    minLength={5}
                    autoComplete="off"
                    autoCorrect="off"
                    className="bg-transparent outline-none border border-gray-500 focus:border-green rounded-sm p-2 w-full"
                  />
                </div>
              </div>
              <div className="w-full bg-transparent">
                <label className="bg-transparent" for="">
                  Subject{" "}
                  <span className="bg-transparent text-lg text-red-500">*</span>
                </label>{" "}
                <br />
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  autoComplete="off"
                  autoCorrect="off"
                  type="text"
                  required={true}
                  minLength={5}
                  className="bg-transparent outline-none border border-gray-500 focus:border-green rounded-sm p-2 w-full"
                />
              </div>
              <div className="w-full bg-transparent">
                <label className="bg-transparent" for="">
                  Your Message{" "}
                  <span className="bg-transparent text-lg text-red-500">*</span>
                </label>{" "}
                <br />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required={true}
                  rows={4}
                  autoComplete="off"
                  autoCorrect="off"
                  minLength={15}
                  className="bg-transparent outline-none border border-gray-500 focus:border-green rounded-sm p-2 w-full"
                />
              </div>
              <button
                type="submit"
                className="text-[14px] font-popp mt-2 md:mt-0 mr-auto md:text-[16px] font-medium bg-[#E37025] duration-700 hover:bg-black cursor-pointer text-white rounded-md px-4 py-2 pb-[10px]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
