import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <header
        style={{ position: open ? "sticky" : "fixed" }}
        className="container flex justify-between py-2 items-center relative"
      >
        <div style={{ height: "70px", width: "auto", objectFit: "contain" }}>
          <NavLink to={"/"}>
            <img
              style={{ objectFit: "contain", height: "100%" }}
              src={require("../Utils/logo.png")}
              alt="The animal journey"
            />
          </NavLink>
        </div>
        <div
          className="text-2xl ml-auto md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <IoReorderThreeOutline className="text-3xl" />
          ) : (
            <IoCloseSharp />
          )}
        </div>
        <ul className="gap-6 py-2 hidden md:flex border-b-2 border-[#ebdfd3]">
          <li>
            <NavLink
              to={"/"}
              className="text-[14px] font-medium cursor-pointer md:text-[16px]"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/#work"}
              className="text-[14px] font-medium cursor-pointer md:text-[16px]"
            >
              Our Work
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/tnvr"}
              className="text-[14px] font-medium cursor-pointer md:text-[16px]"
            >
              TNVR Program
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className="text-[14px] font-medium cursor-pointer md:text-[16px]"
            >
              About
            </NavLink>
          </li>
        </ul>
        <div className="hidden md:flex">
          <NavLink
            className="text-[14px] font-popp md:text-[16px] font-medium bg-black duration-700 hover:bg-[#E37025] rounded-md px-4 cursor-pointer py-[6px] pb-[8px] text-white"
            to={"/#contact"}
          >
            Contact Us
          </NavLink>
        </div>
        {open ? null : (
          <>
            <ul className="flex flex-col gap-3 py-8 px-2 z-10  fixed w-full left-0 shadowxl text-center border-[#ebdfd3] mobileDropDownContainer">
              <li>
                <NavLink
                  to={"/"}
                  className="text-[14px] font-medium cursor-pointer md:text-[16px]"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/#work"}
                  className="text-[14px] font-medium cursor-pointer md:text-[16px]"
                >
                  Our Work
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/tnvr"}
                  className="text-[14px] font-medium cursor-pointer md:text-[16px]"
                >
                  TNVR Program
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className="text-[14px] font-medium cursor-pointer md:text-[16px]"
                >
                  About
                </NavLink>
              </li>
              <div className="mt-auto">
                <NavLink
                  className="text-[14px] font-popp md:text-[16px] font-medium bg-black duration-700 hover:bg-[#E37025] rounded-md px-4 cursor-pointer py-4 mb-2 text-white"
                  to={"/#contact"}
                >
                  Contact Us
                </NavLink>
              </div>
            </ul>
          </>
        )}
      </header>
    </>
  );
}
