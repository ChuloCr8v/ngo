"use client";

import Image from "next/image";
import BecomeAVolunteer from "../components/homepage/BecomeAVolunteer";
import PageHero from "../components/shared/PageHero";
import SectionTitle from "../components/shared/SectionTitle";
import { FaLine } from "react-icons/fa";
import { Select } from "antd";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "../components/shared/Button";

type Props = {};

const Donation = (props: Props) => {
  const [donateFormData, setDonateFormData] = useState({});
  const [enquiryFormData, setEnquiryFormData] = useState({});

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

  const donateFormProps = [
    {
      placeholder: "Enter Custom Amount",
      type: "number",
      name: "amount",
    },
    {
      placeholder: "First Name",
      type: "text",
      name: "firstName",
    },
    {
      placeholder: "Last Name",
      type: "text",
      name: "lastName",
    },
    {
      placeholder: "Your Email",
      type: "email",
      name: "email",
    },
    {
      placeholder: "Your Country",
      type: "select",
      name: "country",
      options: ["Nigeria", "Ghana", "South Africa", "Canada", "United States"],
    },
    {
      placeholder: "Phone Number",
      type: "text",
      name: "phone",
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
        currentPage={"Support M.O.Y.I > Donation"}
        title={"Support M.O.Y.I"}
        className={"donation-hero"}
      />
      <div className="grid md:grid-cols-2 gap-12 max-w-7xl p-4 py-12 lg:py-24">
        <div className="max-w-7xl w-full flex flex-col justify-center items-start ">
          <div className="text-brandGreen flex items-center gap-6">
            <div className="w-12 border-b-4 border-brandGreen h-2"></div>
            <span className="text-xl font-semibold">Donation</span>
          </div>
          <SectionTitle
            SectionTitle={"Join Us in Helping Our Youths"}
            className={
              "text-left text-brandYellow w-[350px] mt-6 mb-6 lg:leading-[1.5]"
            }
          />
          <p className="">
            The secret to happiness lies in helping others. Never underestimate
            the difference YOU can make in the lives of the poor, the abused and
            the helpless. Spread sunshine in their lives no matter what the
            weather may be.
          </p>

          <div className="mt-12 w-full">
            <p className="text-xl font-semibold mb-4">
              Donate Now to help a Youth
            </p>
            <form className="w-full">
              <div className="grid lg:grid-cols-2 gap-6 w-full ">
                {donateFormProps.map((t, index) => (
                  <>
                    {t.type === "text" ||
                    t.type === "email" ||
                    t.type === "number" ? (
                      <input
                        key={index}
                        type={t.type}
                        placeholder={t.placeholder}
                        onChange={handleInputChange}
                        name={t.name}
                        className={twMerge(
                          "rounded-lg p-4 lg:p-6 col-span-1 bg-gray-300 border-none hover:border-brandYellow focus:outline-brandYellow w-full",
                          (t.name === "amount" || t.name === "phone") &&
                            "lg:col-span-2"
                        )}
                      />
                    ) : (
                      <Select
                        key={index}
                        placeholder={t.placeholder}
                        onChange={handleInputChange}
                        className="h-[70px] bg-gray-500 border-none hover:border-brandYellow focus:outline-brandYellow w-full rounded-lg"
                        options={t.options?.map((o) => ({
                          value: o,
                          label: o,
                        }))}
                      />
                    )}
                  </>
                ))}
              </div>
              <button className="hover:scale-[0.9] mt-12 p-6 rounded-xl text-white bg-brandGreen font-semibold place-self-start duration-200">
                Donate Now
              </button>
            </form>
          </div>
        </div>
        <div className="enq-form-wrapper p-4 xl:p-10 rounded-xl">
          <div className="enq-form">
            <p className="font-bold text-2xl my-6 text-left w-full text-white">
              Have any Enquiries?
            </p>
            <form action="/">
              <div className="space-y-8">
                {enqFormProps.map((e, index) => (
                  <div className="space-y-4" key={index}>
                    <label htmlFor="" className="text-white text-lg">
                      {e.label}
                    </label>
                    <>
                      {e.type === "text" ? (
                        <input
                          name={e.name}
                          type={e.type}
                          onChange={handleEnquiryInputChange}
                          className={twMerge(
                            "p-4 xl:p-6 bg-White border-none hover:border-brandYellow focus:outline-brandYellow w-full rounded-xl"
                          )}
                        />
                      ) : (
                        <textarea
                          name={e.name}
                          rows={10}
                          onChange={handleEnquiryInputChange}
                          className="p-6 bg-white border-none hover:border-brandYellow focus:outline-brandYellow w-full rounded-xl"
                        />
                      )}
                    </>
                  </div>
                ))}
              </div>
              <button className=" duration-200 mt-12 p-6 rounded-xl text-white bg-brandYellow hover:scale-[0.9] font-semibold place-self-start">
                Ask it Now
              </button>
            </form>
          </div>
        </div>
      </div>
      <BecomeAVolunteer />
    </div>
  );
};

export default Donation;
