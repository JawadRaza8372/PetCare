import React from "react";

const AboutUsPoint = ({ name, content }) => {
  return (
    <p className="text-[14px] md:text-[16px] bg-transparent mb-[10px]">
      <strong style={{ color: "#e37025", marginRight: "5px" }}>
        <u>{name}</u>:
      </strong>
      {content}
    </p>
  );
};

export default AboutUsPoint;
