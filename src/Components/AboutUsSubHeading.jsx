import React from "react";

const AboutUsSubHeading = ({ content }) => {
  return (
    <h1
      className="text-xl font-bold font-popp mb-2 mt-3"
      style={{ color: "#e37025" }}
    >
      {content}
    </h1>
  );
};

export default AboutUsSubHeading;
