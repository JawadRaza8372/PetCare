import React from "react";

const AboutUsHeading = ({ content }) => {
  return (
    <h1
      className="text-2xl font-bold font-popp mb-2 mt-3"
      style={{ color: "#e37025" }}
    >
      {content}
    </h1>
  );
};

export default AboutUsHeading;
