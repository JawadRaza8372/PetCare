import React from "react";

export default function Button1(props) {
  return (
    <div
      onClick={props.onClickFun ? props.onClickFun : () => console.log("done")}
      className="text-[14px] font-popp md:text-[16px] font-medium bg-black duration-700 hover:bg-[#E37025] rounded-md px-4 cursor-pointer py-[6px] pb-[8px] text-white"
    >
      {props.btn1}
    </div>
  );
}
