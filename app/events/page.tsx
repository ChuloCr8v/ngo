"use client";

import { Pagination, Select } from "antd";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import BecomeAVolunteer from "../components/homepage/BecomeAVolunteer";
import PageHero from "../components/shared/PageHero";
import SectionTitle from "../components/shared/SectionTitle";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import ReactMapGL, { Marker } from "react-map-gl";
import Swiper from "../components/Swiper";

type Props = {};

const Events = (props: Props) => {
  const eventsData = [
    {
      img: "/event-one.png",
      title: "THE 2023 LEGACY PROJECT ",
      text: "Following previous MOYI legacy projects, the 2023 MOYI legacy project is a visionary project aimed at catalyzing positive change within marginalized communities. Makoko was the choice community this year. The legacy project was a transformative initiative aimed at addressing critical needs in the Whannyina School located in the heart of Makoko, Nigeria.",
      date: "March 26, 2023.",
    },

    {
      img: "/event2.png",
      title: "2019 M.O.Y.I FIRST AID PROGRAMME",
      text: "In collaboration with the Lagos Chapter of the Nigerian Red Cross Society, the programme educated the students on what first aid entails and what they should do in emergency situations.",
      date: "29th November, 2019.",
    },

    {
      img: "/event-three.png",
      title: "2019 M.O.Y.I FIRST AID PROGRAMME",
      text: "MOYI with the help of it’s ever supporting sponsors and with the collaboration of John Ashley Foundation Ogudu, held an event to gift 10 less privileged individuals that needed wheelchairs to help aid their movement and make things easier for them.",
      date: "April 23, 2021.",
    },
    {
      img: "/event-four.png",
      title:
        "MOYI collaborates with VFDF (Voice For the Deaf Foundation) on Creating Harmonious Family Relationships and Productive Life.",
      text: "The event which held at the Wesley School for the Hearing Impaired had the theme SEMINAR ON HARMONIOUS FAMILY RELATIONSHIPS AND PRODUCTIVE LIFE",
      date: "July 20, 2019.",
    },
    {
      img: "/event.png",
      title: "MOYI : 10 YEARS IN THE MAKING.",
      text: "As we journey through another 10 years, we invite you to once again share in the mandate of this initiative and bring others along on this journey, to please join hands with us to give our young people a hopeful future. ",
      date: "April 14, 2020.",
    },
    {
      img: "/event-five.png",
      title: "DISCOVERING YOUR POTENTIALS.",
      text: "After the talk session there was a practical session which was the highlight of the whole teaching for the teens. The facilitator grouped the whole audience into five (5) groups. Each groups had cardboards, sessions, soft magazines, and gums these materials were given for individuals to project their inner self in form of a collage picture. The teens were to go through the magazine and cut out images that better speaks about them and then paste it on the cardboard. ",
      date: "19th August 2017.",
    },
  ];

  return (
    <div className="pt-20 w-screen flex flex-col items-center justify-center bg-[#F1F7FE]">
      <PageHero
        currentPage={"Events"}
        title={"Events"}
        className={"events-hero"}
      />
      <div className="flex flex-col justify-center items-center relative z-50 bg-white p-6 w-screen ">
        <div className="max-w-7xl pt-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-12">
          {eventsData.map((e, index) => (
            <div className="grid xl:grid-cols-2 gap-6" key={index}>
              <div className="max-w-[400px]">
                <Image
                  src={e.img}
                  className="object-cover w-full h-full"
                  alt={e.title}
                  height={200}
                  width={200}
                />
              </div>
              <div className="space-y-2">
                <p className="text-gray-500">{e.date}</p>
                <p className="font-bold lg:text-xl">{e.title}</p>
                <p className="text-gray-600">{e.text}</p>
              </div>
            </div>
          ))}
        </div>
        <Pagination defaultCurrent={1} total={50} className="mt-12" />
      </div>
      <div className="py-12 max-w-7xl w-full ">
        <Swiper />
      </div>

      <BecomeAVolunteer />
    </div>
  );
};

export default Events;
