import React from "react";
import SectionTitle from "../shared/SectionTitle";
import Button from "../shared/Button";
import Image from "next/image";

type Props = {};

const About = (props: Props) => {
  const sectionTitle = (
    <p className="">
      We are a <span className="text-brandYellow">Non-Profit</span> Organization
    </p>
  );
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row justify-center items-center xl:gap-24 px-4 md:0">
        <div className="md:space-y-6 max-w-[500px] lg:pl-12 flex flex-col justify-center items-center lg:items-start ">
          <SectionTitle
            SectionTitle={sectionTitle}
            className={
              "text-center lg:text-left mt-12 text-2xl md:text-3xl lg:text-4xl"
            }
          />
          <p className="text-brandGreen text-xl md:text-2xl lg:text-xl text-center lg:text-left lg:text-[40px] font-bold mt-2 md:mt-0 mb-6 md:mb-0">
            We Focus on Youth Initiatives
          </p>
          <p className="leading-[30px]">
            Mindful of Youths Initiative is a Non-Governmental organization
            poised to empower youths in every sphere of human endeavor. It
            intends to create an environment in which young persons would be
            involved and successful in their homes, family life, school, work,
            neighbourhood and the nation at large.
          </p>
          <Button
            title={"Read More"}
            className="bg-brandGreen w-fit mt-6"
            btnLink={"/"}
          />
        </div>
        <div className="about-left hidden lg:flex h-[450px] w-[800px] xl:w-[1200px] overflow-x-hidden">
          <Image
            src={"/about-bg.png"}
            alt={"about us"}
            height={200}
            width={200}
            className="object-cover h-full w-full object-top"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
