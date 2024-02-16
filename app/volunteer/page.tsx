"use client";

import { Select } from "antd";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import BecomeAVolunteer from "../components/homepage/BecomeAVolunteer";
import PageHero from "../components/shared/PageHero";
import SectionTitle from "../components/shared/SectionTitle";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

type Props = {};

const Donation = (props: Props) => {
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

  const enqFormProps = [
    {
      label: "First Name",
      type: "text",
      name: "firstName",
    },
    {
      label: "Last Name",
      type: "text",
      name: "lastName",
    },
    {
      label: "How can we help you?",
      type: "textarea",
      name: "enquiry",
    },
  ];

  const volunteerFormProps = [
    {
      label: "Full Name",
      type: "text",
      name: "fullName",
    },
    {
      label: "Email address",
      type: "email",
      name: "email",
    },
    {
      label: "Phone Number",
      type: "number",
      name: "phone",
    },
    {
      label: "Your Comments",
      type: "textarea",
      name: "comments",
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

  return (
    <div className="pt-20 w-screen flex flex-col items-center justify-center">
      <PageHero
        currentPage={"Support M.O.Y.I > volunteer"}
        title={"Support M.O.Y.I"}
        className={"donation-hero"}
      />
      <div className="grid max-w-7xl pt-12">
        <div className="w-full flex flex-col justify-center items-start ">
          <div className="grid xl:grid-cols-2 gap-12 px-4">
            <Image
              src={"/volunteer-img.png"}
              height={200}
              width={200}
              alt="volunteer"
              className=" w-full h-[600px] -mt-4 hidden xl:flex"
            />

            <div className="">
              <div className="text-brandGreen flex items-center gap-6">
                <div className="w-12 border-b-4 border-brandGreen h-2"></div>
                <span className="text-xl font-semibold">Joining Process</span>
              </div>
              <SectionTitle
                SectionTitle={"Requirements For A Volunteer"}
                className={
                  "text-left text-brandYellow xl:w-[350px] mt-6 mb-6 xl:leading-[1.2]"
                }
              />
              <p className="">
                The secret to happiness lies in helping others. Never
                underestimate the difference YOU can make in the lives of the
                poor, the abused and the helpless. Spread sunshine in their
                lives no matter what the weather may be.
              </p>
              <div className="mt-6 space-y-2 px-4">
                {requirementsData.map((r, index) => (
                  <div className="flex items-start gap-2" key={index}>
                    <FaChevronRight /> <p className="">{r}</p>
                  </div>
                ))}
              </div>
              <button className="hover:scale-[0.9] mt-12 p-4 px-12 text-white bg-brandYellow rounded-full font-semibold place-self-start duration-200">
                Join Now
              </button>
            </div>
          </div>
          <div className="mt-12 grid xl:grid-cols-2 w-full">
            <div className="w-full bg-brandYellow p-5 md:p-10">
              <div className="text-white flex items-center gap-6">
                <div className="w-12 border-b-4 border-white h-2"></div>
                <span className="text-xl font-semibold">
                  Become a Volunteer
                </span>
              </div>
              <form className="mt-6">
                <div className="grid  gap-6">
                  {volunteerFormProps.map((v, index) => (
                    <div className="space-y-4" key={index}>
                      <label htmlFor="" className="text-white text-lg">
                        {v.label}
                      </label>
                      <>
                        {v.type === "text" ||
                        v.type === "email" ||
                        v.name === "phone" ? (
                          <input
                            name={v.name}
                            type={v.name === "phone" ? "number" : v.type}
                            onChange={handleEnquiryInputChange}
                            className={twMerge(
                              "p-6 bg-White border-none hover:border-brandYellow focus:outline-brandYellow w-full rounded-xl"
                            )}
                          />
                        ) : (
                          <textarea
                            name={v.name}
                            rows={10}
                            onChange={handleEnquiryInputChange}
                            className="p-6 bg-white border-none hover:border-brandYellow focus:outline-brandYellow w-full rounded-xl"
                          />
                        )}
                      </>
                    </div>
                  ))}
                </div>
                <button className="hover:scale-[0.9] mt-6 p-4 px-12 text-white bg-brandYellow border-2 border-whiter rounded-full font-semibold place-self-start duration-200">
                  Join Now
                </button>
              </form>
            </div>
            <div className="hidden xl:flex">
              <Image
                src="/volunteer-form-bg.png"
                alt="volunteer"
                width={200}
                height={200}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="xl:-mt-[80px] relative -z-10">
        <BecomeAVolunteer />
      </div>
    </div>
  );
};

export default Donation;
