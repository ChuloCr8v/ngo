"use client";

import { Select } from "antd";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import BecomeAVolunteer from "../components/homepage/BecomeAVolunteer";
import PageHero from "../components/shared/PageHero";
import SectionTitle from "../components/shared/SectionTitle";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import ReactMapGL, { Marker } from "react-map-gl";

type Props = {};

const Contact = (props: Props) => {
  const [donateFormData, setDonateFormData] = useState({});
  const [enquiryFormData, setEnquiryFormData] = useState({});

  const requirementsData = [
    " Be a resource person in any of our career talks and seminars",
    " Provide professional services as a counsellor for various teenage issues",
    "Provide spiritual counselling through our various partners, ministries, either in person or online",
    "Be a permanent volunteer for our various yearly programmes (Full Basket, First Aid donation, #IamMindful Africa Project, Book drive/support)",
    "Manage our social media pages to drive increased visibility and engagements",
    " Write blog posts to be uploaded on our website weekly or monthly",
  ];

  const volunteerFormProps = [
    {
      label: "Enter your name",
      type: "text",
      name: "fullName",
    },
    {
      label: "Enter your email address",
      type: "email",
      name: "email",
    },
    {
      label: "Enter your subject",
      type: "text",
      name: "subject",
    },
    {
      label: "Enter your message",
      type: "textarea",
      name: "message",
    },
  ];

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(e);

    setDonateFormData((prev) => ({ ...prev, [name]: value }));
    console.log(donateFormData);
  };

  const handleEnquiryInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(e);

    setEnquiryFormData((prev) => ({ ...prev, [name]: value }));
    console.log(enquiryFormData);
  };

  const markers = [
    {
      key: 1,
      longitude: 9.007906,
      latitude: 7.437959,
    },
    {
      key: 2,
      longitude: 6.778618,
      latitude: 5.902733,
    },
    {
      key: 3,
      longitude: 11.31117,
      latitude: 8.542431,
    },
    {
      key: 4,
      longitude: 4.477222,
      latitude: 8.771489,
    },
    {
      key: 5,
      longitude: 7.477222,
      latitude: 8.771489,
    },
    {
      key: 6,
      longitude: 11.477222,
      latitude: 11.771489,
    },
    {
      key: 7,
      longitude: 5.477222,
      latitude: 11.771489,
    },
  ];

  const contactCardProps = [
    {
      icon: "/phone.png",
      title: "0701 269 5490",
      extra: "Mon to Fri 9am to 6 pm",
    },
    {
      icon: "/address.png",
      title: "MOYI",
      extra:
        "Adebowale House, Block C, 1st Floor #150, Ikorodu Road, Onipanu, Lagos, Nigeria.",
    },
    {
      icon: "/mail.png",
      title: "info@moyinig.org",
      extra: "Message us at anytime.",
    },
  ];

  return (
    <div className="pt-20 w-screen flex flex-col items-center justify-center">
      <PageHero
        currentPage={"Contact Us"}
        title={"Contact Us"}
        className={"contact-hero"}
      />
      <div className="grid max-w-7xl w-full pt-16 mb-24 px-4">
        <div className="flex flex-col max-w-[400px] md:max-w-full w-full overflow-scroll">
          <ReactMapGL
            mapLib={import("mapbox-gl")}
            initialViewState={{
              longitude: -100,
              latitude: 40,
              zoom: 4.7,
            }}
            latitude={9.007906}
            longitude={7.437959}
            mapStyle="mapbox://styles/mapbox/light-v9"
            mapboxAccessToken="pk.eyJ1IjoiYXllb2xha2VubnkiLCJhIjoiY2xyZzgycmR3MGJsNzJrcnY1d2hodXJhayJ9.xnOkZfILRcgpSeJDjkg91w"
            style={{ background: "white" }}
          >
            {/* {markers.map(({ key, latitude, longitude }) => (
            <div key={key}>
              <Marker
                style={{ cursor: "pointer" }}
                key={key}
                longitude={longitude}
                latitude={latitude}
              ></Marker>
            </div>
          ))} */}
          </ReactMapGL>
        </div>
        <div className="w-full flex flex-col justify-center items-start relative z-50">
          <div className="mt-12 grid xl:grid-cols-3  gap-12 w-full">
            <div className="col-span-2">
              <div className=" flex items-center gap-6">
                <span className="text-xl font-semibold">Get In Touch</span>
              </div>
              <form className="mt-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  {volunteerFormProps.map((v, index) => (
                    <div key={index}>
                      {v.type === "text" || v.type === "email" ? (
                        <input
                          key={index}
                          placeholder={v.label}
                          name={v.name}
                          type={v.name === "phone" ? "number" : v.type}
                          onChange={handleEnquiryInputChange}
                          className={twMerge(
                            "p-4 bg-White col-span-2 lg:col-span-1 border-2 border-gray-200 hover:border-brandYellow focus:outline-brandYellow w-full",
                            index > 1 && "lg:col-span-2"
                          )}
                        />
                      ) : (
                        <textarea
                          key={index}
                          placeholder={v.label}
                          name={v.name}
                          rows={10}
                          onChange={handleEnquiryInputChange}
                          className="p-4 bg-White border-2 border-gray-200 hover:border-brandYellow focus:outline-brandYellow w-full col-span-2"
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="w-full flex flex-col">
                  <button className="hover:scale-[0.9] mt-6 p-4 px-12 text-white bg-brandGreen border-2 border-whiter font-semibold duration-200 place-self-end">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="col-span-1 space-y-4 mt-24">
              {contactCardProps.map((c, index) => (
                <div className="flex items-center gap-6" key={index}>
                  <Image
                    src={c.icon}
                    alt={c.title}
                    className="h-5 w-auto"
                    height={10}
                    width={10}
                  />
                  <div className="text-gray-600">
                    <p className="text-xl font-semibold">{c.title}</p>
                    <p className="">{c.extra}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BecomeAVolunteer />
    </div>
  );
};

export default Contact;
