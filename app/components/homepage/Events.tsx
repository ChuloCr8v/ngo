import Image from "next/image";
import React from "react";

type Props = {};

const Events = (props: Props) => {
  const eventData = [
    {
      title: "AS MOYI CELEBRATES HER 10TH ANNIVERSARY...",
      text: "Its been ten solid years since I placed the plough on the ground. Actually, it started much earlier than that, but in an informal setting. Just gathering teens together, sharing and listening to their rantings, thoughts and sometime annoying complaints. But the much more formal setting started with the registration of Mindful of Youths Initiative (MOYI) as a legal entity in 2010.",
      tag: "event",
      url: "/",
      img: "/event.png",
    },
    {
      title: "2019 M.O.Y.I FIRST AID PROGRAMME",
      text: "On Friday, 29th November, 2019, M.O.Y.I held her maiden FIRST AID PROGRAMME at Oduduwa Junior Secondary School, 86 Lanre Awolokun street, Somolu, Lagos. In collaboration with the Lagos Chapter of the Nigerian Red Cross Society, the programme educated the students on what first aid entails and what they should do in emergency situations.",
      tag: "event",
      url: "/",
      img: "/event2.png",
    },
  ];
  return (
    <section className="bg-brandGreen py-36 w-screen flex flex-col items-center text-white">
      <div className="max-w-7xl w-full grid grid-cols-2">
        <div className="max-w-[400px] w-full">
          <h3 className="text-3xl mb-6 font-bold">LATEST EVENTS</h3>
          <p className="">
            Open fifth midst divided great fly gathering living deep no
            abundantly. Evening appear saying that forth god wito Given sixth
            days of very Third spirit waters seas. Calleded can't his third.
            Evening upon. All stars. Seasons a the a dry for third days
          </p>
          <button className="flex flex-col items-center mt-6 text-lg">
            Learn More <div className="w-full h-1 bg-brandYellow"></div>
          </button>
        </div>
        <div className="flex items-center gap-6">
          {eventData.map((e) => (
            <div className="flex flex-col items-center w-[400px] h-[550px] bg-white">
              <div className="top h-[200px] w-full overflow-hidden relative">
                <div className="bg-gradient-to-t from-black opacity-70 to-transparent h-full w-full absolute top-0 left-0"></div>
                <Image
                  src={e.img}
                  alt={e.title}
                  height={400}
                  width={400}
                  className="object-contain"
                />
                <p className="absolute right-5 bottom-5 uppercase">{e.tag}</p>
              </div>
              <div className="bottom p-4">
                <h3 className="text-justify font-bold text-xl text-black">
                  {e.title}
                </h3>
                <p className="text-justify text-sm mt-4 text-black">{e.text}</p>
              </div>

              <button className="text-brandGreen uppercase hover:text-green-800 duration-200 my-6">
                <div className="w-[150px] h-1 bg-brandYellow mb-2"></div>
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
