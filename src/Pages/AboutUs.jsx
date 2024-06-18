import React from "react";
import HeroTemplate from "../Components/HeroTemplate";
import AboutUsHeading from "../Components/AboutUsHeading";
import AboutUsPara from "../Components/AboutUsPara";

const AboutUs = () => {
  return (
    <>
      <HeroTemplate title={"About Us"}>
        <>
          <AboutUsHeading content={"What is Animal Journey?"} />
          <AboutUsPara
            content={`In a world where countless stray animals roam the streets, it is
            imperative to establish a compassionate and effective solution to
            address their plight. "The Animal's Journey" is a proposed stray
            animal shelter project aimed at providing sanctuary, medical care,
            and support to these sensitive creatures. Through a multi-faceted
            approach, we aim to not only rescue and rehabilitate stray animals
            but also raise awareness about their welfare and promote responsible
            pet ownership. The Animal Journey is basically a non-profit
            organization dedicated to the rescue, rehabilitation, and rehoming
            of animals in need.`}
          />
          <AboutUsHeading content={"Our Mission"} />
          <AboutUsPara
            content={`Our mission is to provide a safe haven for animals who have been
            abandoned, abused, or are in danger, and to give them a second
            chance at life. We believe that every animal deserves love, care,
            and respect. Our team works tirelessly to rescue animals from
            harmful situations, provide them with necessary medical care, and
            find them loving forever homes. We also strive to raise awareness
            about animal welfare and promote responsible pet ownership. At The
            Animal Journey, we embark on a journey with each animal we rescue,
            guiding them from a place of fear and uncertainty to a life filled
            with love and care. We are committed to making a difference, one
            animal at a time.`}
          />
        </>
      </HeroTemplate>
    </>
  );
};

export default AboutUs;
