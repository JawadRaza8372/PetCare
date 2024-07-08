import React from "react";
import HeroTemplate from "../Components/HeroTemplate";
import AboutUsHeading from "../Components/AboutUsHeading";
import AboutUsPara from "../Components/AboutUsPara";
import AboutUsSubHeading from "../Components/AboutUsSubHeading";
import AboutUsPoint from "../Components/AboutUsPoint";

function TNVRProgram() {
  return (
    <>
      <HeroTemplate title={"TNVR Program"}>
        <>
          <AboutUsHeading content={`What is TNVR?`} />
          <AboutUsPara
            content={`The Trap-Neuter-Vaccinate-Return (TNVR) program is a humane and
        effective approach for managing community stray cats and dogs (also
        known as ownerless outdoor cats and dogs).`}
          />
          <AboutUsSubHeading content={`How TNVR Works:`} />
          <AboutUsPoint
            name={`Trapping`}
            content={`Community cats and dogs are humanely trapped using cat traps by
        volunteers or staff involved in TNVR programs.`}
          />
          <AboutUsPoint
            name={`Veterinary Care`}
            content={`The cats and dogs are taken to a veterinarian, where they undergo health
        evaluations, spaying or neutering, and vaccination. A small portion of
        one ear is also removed (known as cat and dog ear-tipping) to indicate
        that these animals have been sterilized.`}
          />
          <AboutUsPoint
            name={`Return`}
            content={`After veterinary care, the cats are returned to their outdoor locations.`}
          />
          <img
            src={require("../Utils/tnvr1.jpg")}
            alt="TNVR Program"
            className="w-full h-auto max-h-[450px] mt-[30px] mb-[30px]"
            style={{ objectFit: "contain" }}
          />
          <AboutUsSubHeading
            content={`Benefits of TNVR for Community Cats and Dogs:`}
          />
          <AboutUsPoint
            name={`Life Saving`}
            content={`TNVR keeps community dogs and cats out of shelters, preventing them from being euthanized. Many of these cats aren’t sociable with humans and aren’t good adoption candidates.`}
          />
          <AboutUsPoint
            name={`Behavior Improvement`}
            content={`Spaying and neutering reduce nuisance behaviors such as spraying, fighting, howling, and roaming.`}
          />
          <AboutUsPoint
            name={`Health`}
            content={`TNVR includes vaccinations, reduces fights, and prevents continuous breeding.`}
          />
          <AboutUsPoint
            name={`Population Stabilization`}
            content={`TNVR gradually reduces the outdoor stray cats and dogs population over time.`}
          />
        </>
      </HeroTemplate>
    </>
  );
}

export default TNVRProgram;
