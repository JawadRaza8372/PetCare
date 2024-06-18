import React from "react";
import HeroTemplate from "../Components/HeroTemplate";
import AboutUsHeading from "../Components/AboutUsHeading";
import AboutUsPara from "../Components/AboutUsPara";
import AboutUsSubHeading from "../Components/AboutUsSubHeading";

const IsbToPage = () => {
  return (
    <HeroTemplate title={`Islamabad to Chicago`}>
      <AboutUsHeading
        content={` From Islamabad to Chicago: The Incredible Journey , the Asian Shepherd`}
      />
      <AboutUsSubHeading content={`Introduction`} />
      <AboutUsPara
        content={`In the heart of Pakistan's capital city, Islamabad, near the Marriot Hotel, a remarkable story began to unfold. A distressed female Asian Shepherd was found injured which was attacked by Grey Hounds, alone and far from her natural habitat. This is the story of Hope, a dog who embarked on an incredible journey from the streets of Islamabad to a loving home in Chicago, USA.`}
      />
      <AboutUsSubHeading content={`The Rescue`} />
      <AboutUsPara
        content={`Mr. Ahmed Khan, a compassionate individual with a love for animals, discovered Journey (the name of the pet that was rescued) near the Marriot Hotel. The story began when Mr. Ahmed Khan was in Pakistan on a business tour and was staying at the Marriot Hotel. One day he was walking in front of the Marriott Hotel and the journey was with them, as they reached the corner. The bunch of Grey Hounds attacked them and Journey came in front of them to protect them from the Grey Hounds. They injured the Journey. Mr. Ahmed Khan unable to ignore her difficulty, decided to rescue her, bringing her to the clinic named Royal Pets Hospital. We welcomed Journey with open arms, ready to provide her with the care, she desperately needed. He was so much inspired by the behavior of Journey that he decided to bring her with him to the USA.`}
      />
      <AboutUsSubHeading content={`Rehabilitation`} />
      <AboutUsPara
        content={`Journey remained for six months in Royal Pets Hospital and that became a part of our family. We provided her with all the necessary care - from spaying to vaccinations. We ensured she was healthy, comfortable, and most importantly, loved. She was a quick learner, adapting to her new environment with surprising ease. Her playful nature and gentle demeanor quickly won our hearts. Despite her difficult past, she showed resilience, embodying the spirit of a true survivor.`}
      />
      <AboutUsSubHeading content={`The Journey`} />
      <AboutUsPara
        content={`After six months of care and rehabilitation, it was time for Hope to embark on her next adventure. Our client personally came to Pakistan to arrange for her to travel from Pakistan to the United States, specifically to the vibrant city of Chicago. The journey was long, but Hope was a trooper. She arrived in Chicago safe and sound, ready to start her new life.`}
      />
      <AboutUsSubHeading content={`A New Beginning`} />
      <AboutUsPara
        content={`	Our client’s family was there to welcome her, and it was a heartwarming reunion. Today, Journey lives happily in Chicago, far from the streets of Islamabad where she was once found. Her story is a testament to the power of compassion and the incredible journeys that love can inspire.`}
      />
      <AboutUsSubHeading content={`Conclusion`} />
      <AboutUsPara
        content={`Hope's tale is a shining example of resilience and the enduring bond between humans and their furry friends. It serves as a reminder of the difference we can make in the lives of animals in need. From the bustling streets of Islamabad to a loving home in Chicago, Hope's journey is a testament to the power of love, compassion, and second chances.`}
      />
    </HeroTemplate>
  );
};

export default IsbToPage;
