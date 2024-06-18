import React from "react";

function HeroTemplate({ title, children }) {
  return (
    <>
      <div className="bg-cover bg-center flex items-center justify-center text-white aboutUsContainer container">
        <div className="aboutUsContainerOp">
          <h1
            className="text-4xl md:text-6xl font-bold font-popp"
            style={{
              background: "transparent",
              color: "#e37025",
              textAlign: "center",
              width: "75%",
              alignSelf: "center",
            }}
          >
            {title}
          </h1>
        </div>
      </div>
      <div className="container md:px-0 mb-[80px] mt-[40px]">{children}</div>
    </>
  );
}

export default HeroTemplate;
