import React from "react";

type Props = {};

const BecomeAVolunteer = (props: Props) => {
  return (
    <section className="volunteer flex items-center justify-center py-24 w-screen">
      <div className="max-w-4xl flex items-center justify-between w-full">
        <h3 className="text-5xl text-white text-left font-bold">
          Let us serve <br></br>the youths
        </h3>
        <button className="bg-white text-black text-xl h-[100px] px-4">
          Become a Volunteer
        </button>
      </div>
    </section>
  );
};

export default BecomeAVolunteer;
