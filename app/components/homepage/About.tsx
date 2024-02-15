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
    <section className="grid grid-cols-2">
      <div className="pt-6 space-y-6 max-w-[500px]">
        <SectionTitle SectionTitle={sectionTitle} className={"text-left"} />
        <p className="text-brandGreen text-2xl font-bold">
          We Focus on Youth Initiatives
        </p>
        <p className="leading-[30px]">
          Mindful of Youths Initiative is a Non-Governmental organization poised
          to empower youths in every sphere of human endeavor. It intends to
          create an environment in which young persons would be involved and
          successful in their homes, family life, school, work, neighbourhood
          and the nation at large.
        </p>
        <Button
          title={"Read More"}
          className="bg-brandGreen w-fit"
          btnLink={"/"}
        />
      </div>
      <div className="about-left h-[450px] w-[800px] overflow-hidden">
        <Image
          src={"/about-bg.png"}
          alt={"about us"}
          height={200}
          width={200}
          className="object-contain h-auto w-full"
        />
      </div>
    </section>
  );
};

export default About;
