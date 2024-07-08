import React from "react";
import HeroTemplate from "../Components/HeroTemplate";
import AboutUsPara from "../Components/AboutUsPara";
import AboutUsSubHeading from "../Components/AboutUsSubHeading";
import BlogImages from "../Components/BlogImages";

const HopeToWalk = () => {
  return (
    <>
      <HeroTemplate title={`Hope for walk`}>
        <AboutUsPara
          content={`In the busy streets of the capital city Islamabad, among the rushing of
        beeping vehicles and chattering people, a small, scared dog lay huddled
        in a corner. His leg was twisted at an odd angle, a clear sign of a
        fracture. He was in pain, alone, and frightened.`}
        />
        <AboutUsSubHeading
          content={`This is where the story of The Animal Journey begins.`}
        />
        <AboutUsPara
          content={`Our team, always on the lookout for animals in need, spotted the little dog. Despite his fear and pain, there was a spark in his eyes, a will to survive. We named him “Hope”.`}
        />
        <AboutUsPara
          content={`Hope was immediately taken to our facility, where our dedicated team of veterinarians assessed his condition. The fracture was severe, but we were determined to do everything we could to save his leg.`}
        />
        <AboutUsPara
          content={`After careful planning, we did an X-ray of Hope. On X-ray, we find out that he has a femur bone fracture. After that, we decided to do an orthopedic surgery of Hope. Hope was taken into the operation theater. Our skilled orthopedic surgeon worked meticulously, realigning the fractured bone and securing it with specially designed pins and plates. The surgery was a success, but the journey was far from over.`}
        />
        <AboutUsPara
          content={`After surgery, Hope remained in our hospital for 15 days for medication and post-operative care. In the days that followed, Hope showed incredible resilience. Each day, he grew stronger, his spirit undeterred by the ordeal he had been through. Our team was with him every step of the way, providing him with the care and love he needed to recover.`}
        />
        <BlogImages
          image1={require("../Utils/hope1.jpg")}
          image2={require("../Utils/hope2.jpg")}
          image3={require("../Utils/hope3.jpg")}
          image1Alt={"Hope for walk 1"}
          image2Alt={"Hope for walk 2"}
          image3Alt={"Hope for walk 3"}
        />
        <AboutUsPara
          content={`Hope’s journey was not just a physical recovery, but also an emotional one. He learned to trust again, to play, and to enjoy the company of his caregivers and the other animals at our facility.`}
        />
        <AboutUsPara
          content={`After weeks of rehabilitation, the day came when Hope was finally ready to leave the facility. His leg had healed beautifully, and he was running around with the same joy and energy as any other dog.`}
        />
        <AboutUsPara
          content={`But Hope’s story doesn’t end here. The Animal Journey found him a loving forever home, where he continues to thrive and bring joy to those around him.`}
        />
        <AboutUsPara
          content={`Hope’s story is a testament to the mission of The Animal Journey. It’s a story of resilience, of compassion, and of the incredible difference that can be made in the life of an animal. And as we continue our work, we carry Hope’s story with us, a reminder of why we do what we do.`}
        />
        <AboutUsSubHeading content={`And so, the journey continues…`} />
      </HeroTemplate>
    </>
  );
};

export default HopeToWalk;
