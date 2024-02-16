import Image from "next/image";
import PageHero from "../components/shared/PageHero";
import BecomeAVolunteer from "../components/homepage/BecomeAVolunteer";

type Props = {};

const Publications = (props: Props) => {
  const data = [
    {
      text: "It has taken almost five years to put this work together from the last time I wrote my first book, “Parenting God’s Blessings.” It would seem I almost could not gather my thoughts even though all I wanted to write was buzzing within me. In the course of that journey I faced the dreaded loss of my father. It has therefore been quite a challenging time. But through it all, God remains my unbreakable anchor line, and as always, I owe Him a debt of gratitude for helping me gather my thoughts and strengthening me enough to be able to once again put pen on paper or as modern language would have me say: “strike the keynotes of my laptop.”",
      img: "/publication-one.png",
      url: "/publications",
      type: "paid",
    },
    {
      text: "Parenting is one of the oldest jobs from time immemorial. The Bible in Genesis 4: 1- 2, records the first parents on earth as Adam and Eve, who both had Cain and Abel as their children. From those early days to the present, parenting has always been a status many long to assume at some point in their journey through life. In typical modern settings, the celebration of a marriage by newlyweds is eagerly expected to be followed by the consummation of that marriage resulting in the birth of God’s blessings (children).”",
      img: "/publication-two.png",
      url: "/publications",
      type: "free",
    },
  ];
  return (
    <div className="pt-20 flex flex-col items-center justify-center">
      <PageHero
        currentPage={"Publications"}
        title={"Publications"}
        className={"publications-hero"}
      />
      <div className="max-w-7xl w-full py-24 xl:py-20 mb-40  p-4 flex flex-col justify-center items-center">
        <div className="grid md:grid-cols-2 items-center justify-center gap-10">
          {data.map((d, index) => (
            <div className="max-w-[400px] md:h-[550px]" key={index}>
              <div className="max-w-[400px] ">
                <Image
                  src={d.img}
                  alt="img"
                  height={200}
                  width={200}
                  className="w-full h-full object-cover max-w-[400px] "
                />
              </div>
              <div className="flex flex-col items-start gap-12 h-full mt-8">
                <p className="text-lg text-justify">{d.text}</p>
                <div className="flex flex-col justify-end items-center w-full h-full">
                  <button className="text-white bg-brandGreen px-10 py-4 h-fit uppercase hover:scale-[0.9] duration-200">
                    {d.type === "paid" ? "Buy Book Now" : "Download a Copy"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20">
        {" "}
        <BecomeAVolunteer />
      </div>
    </div>
  );
};

export default Publications;
