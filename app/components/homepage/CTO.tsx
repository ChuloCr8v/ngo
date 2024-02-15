import { Button } from "antd";
import React from "react";

type Props = {};

const CTO = (props: Props) => {
  return (
    <div className="cto w-screen flex flex-col justify-center items-center">
      <div className="max-w-7xl w-full grid grid-cols-2">
        <div className=""></div>
        <div className="relative z-50 space-y-6 w-full max-w-[580px]">
          <div className="w-[150px] h-1 bg-brandYellow"></div>
          <h3 className="font-semibold text-white text-2xl">
            MAKE A DIFFERENCE
          </h3>
          <p className="font-medium text-lg text-white">
            Every individual has the power to make a difference in the world,
            it's not about being perfect, it's about consistently making an
            effort to do what is right and making a positive impact in any way
            possible.
          </p>
          <button className="rounded-full bg-brandYellow hover:scale-[0.9] text-white py-2 px-4 flex flex-col items-center justify-center duration-200">
            Support Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTO;
