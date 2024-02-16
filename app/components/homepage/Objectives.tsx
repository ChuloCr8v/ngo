import React from "react";
import { Button } from "antd";
import Image from "next/image";
type Props = {};

const Objectives = (props: Props) => {
  const cardData = [
    {
      text: "Identify And Guide Career Paths",
      icon: "/icons/scale-icon.png",
    },
    {
      text: "Build Inter-Personal Relationships",
      icon: "/icons/people-icon.png",
    },
    {
      text: "Spiritually Guide and Nurture for the Kingdom",
      icon: "/icons/pray-icon.png",
    },
    {
      text: "Support",
      icon: "/icons/support-icon.png",
    },
  ];

  return (
    <section className="py-16 flex flex-col justify-center items-center gap-16 px-4">
      <div className="flex flex-col items-center justify-center max-w-[800px] w-full gap-4">
        <div className="w-[150px] h-1 bg-brandGreen"></div>
        <h3 className="font-bold text-2xl">We Focus on Youth Initiatives</h3>
        <p className="text-center text-gray-500 font-normal">
          The goal of a youth initiative is often to empower young people to
          take an active role in shaping their own lives and communities, and to
          provide them with the skills, knowledge, and resources they need to be
          successful.
        </p>
        <Button className="rounded-full bg-brandYellow text-white">
          Learn More...
        </Button>
      </div>
      <div className="cards flex md:grid grid-cols-2 lg:grid-cols-4 flex-col items-center gap-6 ">
        {cardData.map((card) => (
          <div
            key={card.text}
            className="h-[300px] max-w-[400px] w-full rounded-xl bg-brandGreen text-white flex flex-col justify-start items-center px-4 pt-20"
          >
            <div className="bg-brandYellow rounded-full p-2 h-12 w-12 flex justify-center items-center">
              <Image src={card.icon} alt={card.text} height={50} width={50} />
            </div>
            <p className="text-center mt-4 block">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Objectives;
