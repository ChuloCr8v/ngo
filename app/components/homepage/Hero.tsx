import React from "react";
import Button from "../shared/Button";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="hero w-screen h-screen md:mt-6 flex flex-col items-center justify-center text-white">
      <p className="text-[20px] md:text-[30px] text-center uppercase font-normal">
        We help youths find their
      </p>
      <h2 className="font-bold text-[40px] md:text-[60px] text-center">
        CAREER PATHS
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-10">
        <Button
          title={"Support Us"}
          btnLink={"/support"}
          className="bg-brandYellow w-[250px]"
        />
        <Button
          title={"View Activity"}
          btnLink={"/support"}
          className="bg-gray-400 bg-opacity-70 w-[250px]"
        />
      </div>
    </div>
  );
};

export default Hero;
