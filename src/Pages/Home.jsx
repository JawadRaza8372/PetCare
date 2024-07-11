import React, { useEffect, useLayoutEffect, useState } from "react";
import HomeImg from "../Utils/1.png";
import SecondImg from "../Utils/2.png";
import Button2 from "../Components/Button2";
import Petcare from "../Utils/pet-care.png";
import Petgift from "../Utils/gift.png";
import Homevisit from "../Utils/home.png";
import Veterinery from "../Utils/interaction.png";
import AnimalsMean from "../Utils/3.png";
import HomeImgMission from "../Utils/ourmission.jpg";
// import CustomerSays from "../Utils/4.png";
// import { IoIosStar } from "react-icons/io";
// import User from "../Utils/user.jpg";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Petform from "../Utils/pet-form.png";
import textStrings from "../Utils/AllText";
import { useNavigate, useLocation } from "react-router-dom";
const hospitalAddress = "Street 55, Najam Market, F-8/4, Islamabad";
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
      <div className="container lg:px-28 flex flex-col md:flex-row pt-16 pb-8">
        <div className="md:w-[60%] flex flex-col gap-1 md:gap-4 justify-center">
          <h3 className="text-[16px] md:text-[20px] font-medium font-popp">
            {home.container1.firstTxt}
          </h3>
          <h1 className="text-[18px] md:text-[32px] font-popp leading-[30px] sm:leading-[50px] tracking-wide font-bold">
            {home.container1.secondTxt}
          </h1>
          <h2
            className="text-[16px] md:text-[20px] font-medium font-popp"
            style={{ color: "#e37025" }}
          >
            What is Animal Journey?
          </h2>
          <p className="text-[14px] font-popp md:text-[16px]">
            In a world where countless stray animals roam the streets, it is
            imperative to establish a compassionate and effective solution to
            address their plight. "The Animal's Journey" is a proposed stray
            animal shelter project aimed at providing sanctuary, medical care,
            and support to these sensitive creatures. Through a multi-faceted
            approach, we aim to not only rescue and rehabilitate stray animals
            but also raise awareness about their welfare and promote responsible
            pet ownership. The Animal Journey is basically a non-profit
            organization dedicated to the rescue, rehabilitation, and rehoming
            of animals in need.
          </p>
        </div>
        <div className="md:w-[40%] flex justify-center my-5 sm:my-0">
          <img src={HomeImg} className="w-[100%] md:w-[80%]" alt="my-img" />
        </div>
      </div>
      <div className="container lg:px-28 flex flex-col md:flex-row pt-4 pb-8">
        <div className="md:w-[60%] flex flex-col gap-1 md:gap-4 justify-center">
          <h1 className="text-center lg:text-left text-[18px] md:text-[32px] font-popp leading-[30px] sm:leading-[50px] tracking-wide font-bold">
            Our Mission
          </h1>
          <p className="text-[14px] font-popp md:text-[16px]">
            Our mission is to provide a safe haven for animals who have been
            abandoned, abused, or are in danger, and to give them a second
            chance at life. We believe that every animal deserves love, care,
            and respect. Our team works tirelessly to rescue animals from
            harmful situations, provide them with necessary medical care, and
            find them loving forever homes. We also strive to raise awareness
            about animal welfare and promote responsible pet ownership. At The
            Animal Journey, we embark on a journey with each animal we rescue,
            guiding them from a place of fear and uncertainty to a life filled
            with love and care. We are committed to making a difference, one
            animal at a time.
          </p>
        </div>
        <div className="md:flex hidden md:w-[40%] justify-center my-5 sm:my-0">
          <img
            src={HomeImgMission}
            className="w-[100%]"
            style={{ objectFit: "cover" }}
            alt="my-img"
          />
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
            <a
              className="bg-transparent font-bold"
              style={{ color: "black" }}
              href="https://royalpetshospital.com/"
            >
              <u className="bg-transparent">Royal Pets Hospital</u>
            </a>{" "}
            {home.container4.subHeading}
          </p>
          {/* <Button2 btn2={home.container4.btnTxt} /> */}
        </div>
      </div>
      {/* contact page */}
      <div id="contact" className=" my-8 py-8 container">
        <div className="bg-[#e371253d] p-5 rounded-xl shadow-xl md:p-10 flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-transparent">
            <img src={Petform} className="bg-transparent" alt="my-img" />
          </div>
          <div className="md:w-1/2 bg-transparent">
            <h1 className="text-[25px] leading-[30px] md:text-[35px] font-bold bg-transparent md:leading-[40px] font-popp">
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
            <h2 className="my-3 text-[18px] md:text-[20px] font-bold bg-transparent font-popp">
              Visit Us
            </h2>
            <h5 className="bg-transparent font-popp">{hospitalAddress}</h5>
          </div>
        </div>
      </div>
    </>
  );
}
