"use client";

import BecomeAVolunteer from "../components/homepage/BecomeAVolunteer";
import PageHero from "../components/shared/PageHero";
import SectionTitle from "../components/shared/SectionTitle";

type Props = {};

const Support = (props: Props) => {
  const donateProps = [
    {
      name: "MINDFUL OF YOUTHS INITIATIVE",
      number: "0110901940 (GTBank)",
      note: "Local Transactions (Naira only)",
    },
    {
      name: "MINDFUL OF YOUTHS INITIATIVE",
      number: "0240621705 (GTBank)",
      note: "Online Transactions (Dollar only)",
    },
    {
      name: "MINDFUL OF YOUTHS INITIATIVE",
      number: "0240621729 (GTBank)",
      note: "Online Transactions (Pound only)",
    },
  ];

  return (
    <div className="bg-[#f8f4f3] pt-20 w-screen flex flex-col items-center justify-center">
      <PageHero
        currentPage={"Support M.O.Y.I > Donation"}
        title={"Support M.O.Y.I"}
        className={"donation-hero"}
      />
      <div className="max-w-7xl xl:py-24 flex justify-center items-center flex-col p-4 ">
        <div className="max-w-7xl w-full flex flex-col justify-center items-start ">
          <div className="text-brandGreen flex items-center gap-6">
            <div className="w-12 border-b-4 border-brandGreen h-2"></div>
            <span className="text-xl font-semibold">Donation</span>
          </div>
          <SectionTitle
            SectionTitle={"Join Us in Helping Our Youths"}
            className={"text-left text-brandYellow w-full] mt-6 mb-6"}
          />
          <p className="max-w-3xl">
            The secret to happiness lies in helping others. Never underestimate
            the difference YOU can make in the lives of the poor, the abused and
            the helpless. Spread sunshine in their lives no matter what the
            weather may be.
          </p>
          <div className="grid gap-12 w-full mt-12">
            {donateProps.map((d, index) => (
              <div
                className="bg-white rounded-lg p-8 font-bold text-xl lg:text-2xl uppercase text-left"
                key={index}
              >
                <p className="font-bold">Account Name: {d.name}</p>
                <p className="mt-4">Account Number: {d.number}</p>
                <p className="mt-10 text-base normal-case">{d.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BecomeAVolunteer />
    </div>
  );
};

export default Support;
