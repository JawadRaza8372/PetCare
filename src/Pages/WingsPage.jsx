import React from "react";
import HeroTemplate from "../Components/HeroTemplate";
import AboutUsPara from "../Components/AboutUsPara";

const WingsPage = () => {
  return (
    <>
      <HeroTemplate title={`Wings of Resilience`}>
        <AboutUsPara
          content={`On the last day of May 2024 at Jumma prayer time, in the rough terrain of Margalla Hills, a fierce wildfire raged, consuming everything in its path. Amidst the chaos, a solitary black kite found itself trapped, its wings scorched by the relentless flames. The bird’s desperate cries echoed through the smoky air, a haunting melody of pain and fear.Just in time, a team from The Animal's Journey, a dedicated animal rescue organization, arrived on the scene. With quick thinking and expertise, they managed to rescue the black kite from the jaws of the fire.The team carefully transported the bird to the Royal Pets Hospital, a state-of-the-art clinic equipped to handle wildlife emergencies.`}
        />
        <AboutUsPara
          content={`As they arrived, the hospital's veterinary team sprang into action, assessing the kite's condition and providing urgent care.Despite its pain, the black kite showed remarkable resilience, and with the dedicated attention of the hospital staff, it began to recover. Its wings, though singed, would heal, and its spirit remained unbroken.As news of the dramatic rescue spread, the community rallied around the brave bird, grateful for the selfless work of The Animal's Journey and the Royal Pets Hospital. The black kite's story served as a powerful reminder of the importance of compassion, conservation, and the unwavering dedication of those who care for our precious wildlife.The black kite, now a symbol of hope and resilience, would soon take to the skies once more, its wings beating strong and free, thanks to the tireless efforts of those who had saved its life.`}
        />
      </HeroTemplate>
    </>
  );
};

export default WingsPage;
