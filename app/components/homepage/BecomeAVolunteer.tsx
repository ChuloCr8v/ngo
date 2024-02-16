import React from "react";

type Props = {};

const BecomeAVolunteer = (props: Props) => {
  return (
    <section className="volunteer flex items-center justify-center py-24 w-screen px-4">
      <div className="max-w-4xl xl:max-w-7xl flex flex-col md:flex-row items-center justify-between w-full">
        <h3 className="text-5xl leading-[1.3] text-white text-center md:text-left font-bold">
          Let us serve <br></br>the youths
        </h3>
        <button className="bg-white text-black text-xl h-[100px] px-4  hover:scale-[0.9]  duration-200 mt-12 md:mt-0">
          Become a Volunteer
        </button>
      </div>
    </section>
  );
};

export default BecomeAVolunteer;
