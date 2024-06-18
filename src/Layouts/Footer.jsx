import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 bg-[#b9cdea] px-20 py-10">
        <NavLink to="/" className="bg-transparent flex flex-col gap-3">
          <img
            src={require("../Utils/logo.png")}
            style={{
              width: "100%",
              objectFit: "contain",
              background: "#b9cdea",
            }}
            alt="logo"
          />
        </NavLink>
        <div className="flex flex-col gap-2 bg-transparent md:mx-auto">
          <h3 className="bg-transparent text-[20px] font-bold  text-[#120e38] text-center sm:text-start">
            Our Work
          </h3>
          <ul className="bg-transparent flex flex-col gap-1">
            <li className="bg-transparent">
              <NavLink
                className={
                  "bg-transparent text-[#120e38] text-center sm:text-start font-medium text-[13px] md:text-[14px]"
                }
                to={"/journey"}
              >
                Journey
              </NavLink>
            </li>
            <li className="bg-transparent">
              <NavLink
                className={
                  "bg-transparent text-[#120e38] text-center sm:text-start font-medium text-[13px] md:text-[14px]"
                }
                to={"/hope"}
              >
                Hope For Walk
              </NavLink>
            </li>
            <li className="bg-transparent">
              <NavLink
                className={
                  "bg-transparent text-[#120e38] text-center sm:text-start font-medium text-[13px] md:text-[14px]"
                }
                to={"/#work"}
              >
                Work
              </NavLink>
            </li>
            <li className="bg-transparent">
              <NavLink
                className={
                  "bg-transparent text-[#120e38] text-center sm:text-start font-medium text-[13px] md:text-[14px]"
                }
                to={"/wings"}
              >
                Wings of Resilience
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 bg-transparent lg:mx-auto">
          <h3 className="bg-transparent text-[20px] font-bold  text-[#120e38] text-center sm:text-start">
            Others
          </h3>
          <ul className="bg-transparent flex flex-col gap-1">
            <li className="bg-transparent">
              <NavLink
                className={
                  "bg-transparent text-[#120e38] text-center sm:text-start font-medium text-[13px] md:text-[14px]"
                }
                to={"/tnvr"}
              >
                TNVR Program
              </NavLink>
            </li>
            <li className="bg-transparent">
              <NavLink
                className={
                  "bg-transparent text-[#120e38] text-center sm:text-start font-medium text-[13px] md:text-[14px]"
                }
                to={"/#contact"}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="mt-[5px] mb-[15px] bg-transparent  text-[#120e38] text-center sm:text-start font-medium text-[13px] md:text-[14px]">
              Follow US:
            </li>
            <li className="bg-transparent  text-[#120e38] text-center sm:text-start font-medium text-[13px] md:text-[14px]">
              <h3 className="bg-transparent flex gap-3 items-center font-medium text-[18px]   text-[#120e38]">
                <FaYoutube
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    window.open(
                      "https://youtube.com/@theanimalsjourney?si=F8LxKQ-RSJcWgiVN"
                    )
                  }
                  className="bg-transparent  text-[#120e38]"
                />{" "}
                <FaFacebookF
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/milkandbutter00?mibextid=ZbWKwL"
                    )
                  }
                  className="bg-transparent  text-[#120e38]"
                />{" "}
                <GrInstagram
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/theanimalsjourney.pk?igsh=MmJwMGp5cXpmdGx0"
                    )
                  }
                  className="bg-transparent  text-[#120e38]"
                />{" "}
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
