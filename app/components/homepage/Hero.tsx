import React from "react";
import Button from "../shared/Button";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="hero w-screen h-screen mt-6 flex flex-col items-center justify-center text-white">
      <p className="text-[30px] uppercase font-normal">
        We help youths find their
      </p>
      <h2 className="font-bold text-[60px]">CAREER PATHS</h2>
      <div className="flex items-center gap-8 mt-10">
        <Button
          title={"Support Us"}
          btnLink={"/support"}
          className="bg-brandYellow"
        />
        <Button
          title={"View Activity"}
          btnLink={"/support"}
          className="bg-gray-400 bg-opacity-70"
        />
      </div>
    </div>
  );
};

export default Hero;
