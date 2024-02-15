import React from "react";
import SectionTitle from "../shared/SectionTitle";
import Image from "next/image";

type Props = {};

const HowCouldYouHelp = (props: Props) => {
  const sectionTitle = (
    <p className="capitalize">
      How <span className="text-brandYellow">Could</span> You help?
    </p>
  );

  const cardData = [
    {
      title: "Give a Donation",
      icon: "/donate.png",
      text: "The goal of a youth initiative is often to empower young people to take an active role in shaping their own lives and communities",
      url: "/",
    },
    {
      title: "Give Inspiration",
      icon: "/inspiration.png",
      text: "The goal of a youth initiative is often to empower young people to take an active role in shaping their own lives and communities",
      url: "/",
    },
    {
      title: "Give Inspiration",
      icon: "/volunteer.png",
      text: "The goal of a youth initiative is often to empower young people to take an active role in shaping their own lives and communities",
      url: "/",
    },
  ];
  return (
    <section className="flex flex-col items-center py-12">
      <SectionTitle SectionTitle={sectionTitle} className={""} />
      <div className="flex items-center gap-12 mt-8">
        {cardData.map((card) => (
          <div className="h-[400px] w-full max-w-[300px] rounded-xl bg-white text-black shadow-lg flex flex-col justify-start items-center px-4 pt-10 border border-gray-300">
            <div className="bg-brandGreen rounded-full p-2 h-20 w-20 flex justify-center items-center">
              <Image src={card.icon} alt={card.text} height={50} width={50} />
            </div>
            <p className="text-center mt-4 block font-bold text-xl">
              {card.title}
            </p>
            <p className="text-center mt-4 block">{card.text}</p>
            <button className="flex flex-col items-center mt-6">
              Learn More <div className="w-[50px] h-1 bg-brandYellow"></div>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowCouldYouHelp;
